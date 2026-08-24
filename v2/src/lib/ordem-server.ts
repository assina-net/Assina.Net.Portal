import "server-only";
import { prisma } from "@/lib/db";
import { ehSignatario } from "@/lib/cascade";
import { ehVezDe, proximoSignatario, type Signatario } from "@/lib/ordem";
import { enviarEmail, emailSolicitacaoAssinatura } from "@/lib/email";
import { getConfig } from "@/lib/config-cliente";

const BASE = process.env.AUTH_URL || "https://assinanet.simples.media";

async function carregar(contratoId: string): Promise<{ sequencial: boolean; signatarios: Signatario[] }> {
  const c = await prisma.contrato.findUnique({
    where: { id: contratoId },
    include: { partes: { include: { papeis: { include: { papel: true } } } } },
  });
  const sequencial = c?.ordemAssinatura === "SEQUENCIAL";
  const signatarios = (c?.partes ?? [])
    .filter((p) => ehSignatario(p.papeis))
    .map((p) => ({ id: p.id, ordem: p.ordem, assinado: p.statusAssinatura === "ASSINADO" }));
  return { sequencial, signatarios };
}

/** É a vez desta parte assinar (respeita ordem sequencial)? */
export async function ehVezDaParte(contratoId: string, parteId: string): Promise<boolean> {
  const { sequencial, signatarios } = await carregar(contratoId);
  return ehVezDe(parteId, signatarios, sequencial);
}

/** Notifica o próximo signatário pendente (sequencial). Em paralela, notifica todos os pendentes. */
export async function notificarProximo(contratoId: string): Promise<void> {
  const { sequencial, signatarios } = await carregar(contratoId);
  const alvos = sequencial
    ? [proximoSignatario(signatarios, true)].filter(Boolean)
    : signatarios.filter((s) => !s.assinado).map((s) => s.id);
  for (const id of alvos as string[]) {
    const parte = await prisma.contratoParte.findUnique({ where: { id }, include: { contrato: true } });
    if (parte?.email && parte.chaveAcesso) {
      const cfg = await getConfig(parte.contrato.clienteId);
      await enviarEmail({
        para: parte.email,
        assunto: `Assinatura solicitada: ${parte.contrato.assunto ?? ""}`,
        html: emailSolicitacaoAssinatura(
          parte.nomeRazaoSocial,
          parte.contrato.assunto ?? "documento",
          `${BASE}/assinar/${parte.chaveAcesso}`,
          cfg.mensagemConvite
        ),
      });
    }
  }
}
