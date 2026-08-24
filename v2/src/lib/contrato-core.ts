import { randomUUID } from "crypto";
import { after } from "next/server";
import { prisma } from "@/lib/db";
import { ehSignatario } from "@/lib/cascade";
import { notificarProximo } from "@/lib/ordem-server";
import { dispararWebhook } from "@/lib/webhooks";
import { getConfig } from "@/lib/config-cliente";

/**
 * Núcleo de liberação para assinatura — compartilhado pela ação do portal e pela
 * API v1. Gera chave de acesso por signatário, muda o status, notifica e dispara
 * o webhook. Retorna {ok} ou {erro} (sem redirect, p/ ser reaproveitável).
 */
export async function liberarContratoCore(
  contratoId: string,
  usuarioSolicitacaoId?: string
): Promise<{ ok: true } | { ok: false; erro: string }> {
  const contrato = await prisma.contrato.findUnique({
    where: { id: contratoId },
    include: { partes: { include: { papeis: { include: { papel: true } } } }, documentos: true },
  });
  if (!contrato) return { ok: false, erro: "Contrato inexistente" };
  if (contrato.documentos.length === 0) return { ok: false, erro: "Adicione ao menos um documento" };

  const signatarios = contrato.partes.filter((p) => ehSignatario(p.papeis));
  if (signatarios.length === 0) return { ok: false, erro: "Inclua ao menos um signatário" };

  const cfg = await getConfig(contrato.clienteId);
  const validade = new Date(Date.now() + cfg.prazoExpiracaoDias * 24 * 60 * 60 * 1000);

  await prisma.$transaction(async (tx) => {
    for (const p of signatarios) {
      if (p.chaveAcesso) continue; // não sobrescreve link já enviado
      const chave = randomUUID().replace(/-/g, "");
      await tx.contratoParte.update({
        where: { id: p.id },
        data: { chaveAcesso: chave, validadeChaveAcesso: validade, liberadoAssinatura: true },
      });
    }
    await tx.contrato.update({
      where: { id: contratoId },
      data: {
        statusContrato: "LIBERADO_ASSINATURA",
        liberadoAssinatura: true,
        usuarioSolicitacaoId: usuarioSolicitacaoId ?? null,
        dataSolicitacao: new Date(),
      },
    });
    await tx.contratoLog.create({ data: { contratoId, log: "Assinatura liberada", logSistema: true } });
  });

  await notificarProximo(contratoId);
  after(() => dispararWebhook(contrato.clienteId, "contrato.liberado", { contratoId }).catch(() => {}));
  return { ok: true };
}
