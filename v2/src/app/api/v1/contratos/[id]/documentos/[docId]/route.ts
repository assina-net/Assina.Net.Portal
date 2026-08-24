import { prisma } from "@/lib/db";
import { autenticarApi, json, erro } from "@/lib/api-auth";
import { presignGet } from "@/lib/s3";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/v1/contratos/:id/documentos/:docId?versao=assinado|original
 * Retorna uma URL pré-assinada (expira em minutos) para baixar o PDF.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string; docId: string }> }
) {
  const ctx = await autenticarApi(req);
  if (!ctx) return erro("Não autorizado", 401);
  const { id, docId } = await params;

  const doc = await prisma.contratoDocumento.findFirst({
    where: { id: docId, contratoId: id, contrato: { clienteId: ctx.clienteId } },
    select: { nomeDocumento: true, storageKeyOriginal: true, storageKeyAssinado: true },
  });
  if (!doc) return erro("Documento não encontrado", 404);

  const versao = new URL(req.url).searchParams.get("versao") ?? "assinado";
  const key = versao === "original" ? doc.storageKeyOriginal : doc.storageKeyAssinado ?? doc.storageKeyOriginal;
  if (!key) return erro("Documento sem arquivo disponível", 404);

  const url = await presignGet(key, doc.nomeDocumento);
  return json({ url, versao: versao === "original" ? "original" : doc.storageKeyAssinado ? "assinado" : "original", expiraEm: "alguns minutos" });
}
