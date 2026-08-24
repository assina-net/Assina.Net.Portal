import { prisma } from "@/lib/db";
import type { StatusContrato } from "@prisma/client";

export type Metricas = {
  porStatus: Record<string, number>;
  total: number;
  taxaConclusao: number; // % assinados sobre o total (0..100)
  assinaturasPorMes: { mes: string; total: number }[]; // últimos 6 meses
  pendentes: { id: string; assunto: string | null; dias: number; faltam: number }[];
};

const STATUS: StatusContrato[] = [
  "NAO_LIBERADO_ASSINATURA",
  "LIBERADO_ASSINATURA",
  "PARCIALMENTE_ASSINADO",
  "ASSINADO",
  "RECUSADO",
  "CANCELADO",
];

const DIA = 86_400_000;

/** Rótulo "YYYY-MM" → "MM/YYYY". Pura. */
export function rotuloMes(ym: string): string {
  const [a, m] = ym.split("-");
  return `${m}/${a}`;
}

/** Últimos N rótulos "YYYY-MM" terminando no mês de `base` (inclusive). Pura. */
export function ultimosMeses(base: Date, n: number): string[] {
  const out: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() - i, 1));
    out.push(`${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`);
  }
  return out;
}

/** Agrupa datas de assinatura em buckets mensais. Pura/testável. */
export function agruparPorMes(datas: Date[], meses: string[]): { mes: string; total: number }[] {
  const cont = new Map(meses.map((m) => [m, 0]));
  for (const d of datas) {
    const ym = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    if (cont.has(ym)) cont.set(ym, cont.get(ym)! + 1);
  }
  return meses.map((m) => ({ mes: rotuloMes(m), total: cont.get(m) ?? 0 }));
}

/** Escapa um campo CSV (aspas + separador + quebras de linha). Pura/testável. */
export function csvCampo(v: unknown): string {
  const s = v == null ? "" : String(v);
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Monta um CSV (separador ';' — Excel pt-BR) a partir de cabeçalho + linhas. Pura. */
export function montarCsv(cabecalho: string[], linhas: (string | number | null)[][]): string {
  const head = cabecalho.map(csvCampo).join(";");
  const body = linhas.map((l) => l.map(csvCampo).join(";")).join("\n");
  return "﻿" + head + "\n" + body; // BOM p/ acentuação no Excel
}

/** Métricas do painel para um cliente (ou todos, se clienteId vazio). */
export async function metricas(clienteId?: string, agora = new Date()): Promise<Metricas> {
  const where = clienteId ? { clienteId } : {};

  const grupos = await prisma.contrato.groupBy({
    by: ["statusContrato"],
    where,
    _count: { _all: true },
  });
  const porStatus: Record<string, number> = Object.fromEntries(STATUS.map((s) => [s, 0]));
  let total = 0;
  for (const g of grupos) {
    porStatus[g.statusContrato] = g._count._all;
    total += g._count._all;
  }
  const taxaConclusao = total ? Math.round((porStatus["ASSINADO"] / total) * 100) : 0;

  // assinaturas (prova por parte×doc) dos últimos 6 meses
  const meses = ultimosMeses(agora, 6);
  const desde = new Date(Date.UTC(agora.getUTCFullYear(), agora.getUTCMonth() - 5, 1));
  const provas = await prisma.contratoParteDocumento.findMany({
    where: {
      dataAssinatura: { gte: desde },
      ...(clienteId ? { documento: { contrato: { clienteId } } } : {}),
    },
    select: { dataAssinatura: true },
  });
  const assinaturasPorMes = agruparPorMes(
    provas.map((p) => p.dataAssinatura),
    meses
  );

  // pendentes (aguardando/parcial) com dias decorridos
  const cfg = clienteId
    ? await prisma.configuracaoCliente.findUnique({ where: { clienteId } })
    : null;
  const prazo = cfg?.prazoExpiracaoDias ?? 30;
  const pend = await prisma.contrato.findMany({
    where: { ...where, statusContrato: { in: ["LIBERADO_ASSINATURA", "PARCIALMENTE_ASSINADO"] } },
    select: { id: true, assunto: true, dataSolicitacao: true },
    orderBy: { dataSolicitacao: "asc" },
    take: 10,
  });
  const pendentes = pend.map((c) => {
    const dias = c.dataSolicitacao ? Math.floor((agora.getTime() - c.dataSolicitacao.getTime()) / DIA) : 0;
    return { id: c.id, assunto: c.assunto, dias, faltam: Math.max(prazo - dias, 0) };
  });

  return { porStatus, total, taxaConclusao, assinaturasPorMes, pendentes };
}
