import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { montarCsv } from "@/lib/relatorios";
import { fmtDataHora } from "@/lib/format";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/relatorios/contratos — exporta os contratos do cliente ativo em CSV. */
export async function GET() {
  let user;
  try {
    user = await requireUser();
  } catch {
    return new Response("Não autenticado", { status: 401 });
  }

  const where = user.clienteId ? { clienteId: user.clienteId } : {};
  const contratos = await prisma.contrato.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 5000,
    select: {
      id: true,
      identificador: true,
      assunto: true,
      statusContrato: true,
      ordemAssinatura: true,
      valorContrato: true,
      createdAt: true,
      dataSolicitacao: true,
      partes: { select: { statusAssinatura: true } },
    },
  });

  const linhas = contratos.map((c) => {
    const assinadas = c.partes.filter((p) => p.statusAssinatura === "ASSINADO").length;
    return [
      c.identificador ?? "",
      c.assunto ?? "",
      c.statusContrato,
      c.ordemAssinatura,
      c.valorContrato ? c.valorContrato.toString() : "",
      `${assinadas}/${c.partes.length}`,
      fmtDataHora(c.createdAt),
      c.dataSolicitacao ? fmtDataHora(c.dataSolicitacao) : "",
    ];
  });

  const csv = montarCsv(
    ["Identificador", "Assunto", "Status", "Ordem", "Valor", "Assinaturas", "Criado em", "Solicitado em"],
    linhas
  );

  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="contratos-assinanet.csv"`,
    },
  });
}
