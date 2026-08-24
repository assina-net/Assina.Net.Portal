import { prisma } from "@/lib/db";
import { autenticarApi, json, erro } from "@/lib/api-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/v1/contratos/:id — status detalhado (partes + documentos). */
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const ctx = await autenticarApi(req);
  if (!ctx) return erro("Não autorizado", 401);
  const { id } = await params;

  const c = await prisma.contrato.findFirst({
    where: { id, clienteId: ctx.clienteId }, // escopo do tenant
    select: {
      id: true,
      assunto: true,
      identificador: true,
      statusContrato: true,
      ordemAssinatura: true,
      createdAt: true,
      dataSolicitacao: true,
      partes: {
        orderBy: { ordem: "asc" },
        select: { id: true, nomeRazaoSocial: true, email: true, statusAssinatura: true, ordem: true },
      },
      documentos: {
        select: { id: true, nomeDocumento: true, statusDocumento: true, dataAssinado: true, storageKeyAssinado: true },
      },
    },
  });
  if (!c) return erro("Contrato não encontrado", 404);

  return json({
    id: c.id,
    assunto: c.assunto,
    identificador: c.identificador,
    statusContrato: c.statusContrato,
    ordemAssinatura: c.ordemAssinatura,
    createdAt: c.createdAt,
    dataSolicitacao: c.dataSolicitacao,
    partes: c.partes,
    documentos: c.documentos.map((d) => ({
      id: d.id,
      nomeDocumento: d.nomeDocumento,
      statusDocumento: d.statusDocumento,
      dataAssinado: d.dataAssinado,
      assinado: !!d.storageKeyAssinado,
    })),
  });
}
