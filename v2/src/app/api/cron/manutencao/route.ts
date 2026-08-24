import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getConfig } from "@/lib/config-cliente";
import { notificarProximo } from "@/lib/ordem-server";
import { dispararWebhook } from "@/lib/webhooks";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DIA = 86_400_000;

/** Job diário: cancela contratos expirados e envia lembretes aos pendentes. */
export async function POST(req: Request) {
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Não autorizado", { status: 401 });
  }

  const agora = Date.now();
  const pendentes = await prisma.contrato.findMany({
    where: {
      statusContrato: { in: ["LIBERADO_ASSINATURA", "PARCIALMENTE_ASSINADO"] },
      dataSolicitacao: { not: null },
    },
    select: { id: true, clienteId: true, dataSolicitacao: true },
  });

  const cfgCache = new Map<string, Awaited<ReturnType<typeof getConfig>>>();
  let expirados = 0;
  let lembretes = 0;

  for (const c of pendentes) {
    if (!c.dataSolicitacao) continue;
    let cfg = cfgCache.get(c.clienteId);
    if (!cfg) {
      cfg = await getConfig(c.clienteId);
      cfgCache.set(c.clienteId, cfg);
    }
    const dias = Math.floor((agora - c.dataSolicitacao.getTime()) / DIA);

    if (dias > cfg.prazoExpiracaoDias) {
      await prisma.$transaction([
        prisma.contrato.update({
          where: { id: c.id },
          data: { statusContrato: "CANCELADO", motivoCancelamento: "Expirado por prazo", dataCancelamento: new Date() },
        }),
        prisma.contratoLog.create({
          data: { contratoId: c.id, log: `Contrato cancelado automaticamente (expirou após ${cfg.prazoExpiracaoDias} dias)`, logSistema: true },
        }),
      ]);
      await dispararWebhook(c.clienteId, "contrato.expirado", { contratoId: c.id }).catch(() => {});
      expirados++;
    } else if (dias === cfg.prazoLembreteDias) {
      // dispara o lembrete uma vez ao cruzar o limiar (job roda 1x/dia)
      await notificarProximo(c.id);
      lembretes++;
    }
  }

  return NextResponse.json({ ok: true, processados: pendentes.length, expirados, lembretes });
}
