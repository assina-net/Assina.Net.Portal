import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { presignGet } from "@/lib/s3";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ docId: string }> }
) {
  const user = await requireUser();
  const { docId } = await params;

  const doc = await prisma.contratoDocumento.findUnique({
    where: { id: docId },
    include: { contrato: { select: { clienteId: true } } },
  });
  if (!doc) return new NextResponse("Não encontrado", { status: 404 });

  // tenant: só baixa documento do próprio cliente (corrige IDOR da v1)
  if (user.perfil !== "ROLE_ADMIN" && doc.contrato.clienteId !== user.clienteId) {
    return new NextResponse("Acesso negado", { status: 403 });
  }

  const tipo = (new URL(_req.url).searchParams.get("tipo") ?? "original") as "original" | "assinado";
  const key = tipo === "assinado" ? doc.storageKeyAssinado : doc.storageKeyOriginal;
  if (!key) return new NextResponse("Documento indisponível", { status: 404 });

  const url = await presignGet(key, doc.nomeDocumento);
  return NextResponse.redirect(url);
}
