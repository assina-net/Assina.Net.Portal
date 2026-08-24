import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigeTenant } from "@/lib/rbac";
import { presignGet } from "@/lib/s3";
import { PageHeader } from "@/components/ui";
import { notFound } from "next/navigation";
import { PosicionarWrapper } from "./posicionar-wrapper";

export default async function PosicionarPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;

  const contrato = await prisma.contrato.findUnique({
    where: { id },
    include: {
      documentos: true,
      partes: { include: { papeis: { include: { papel: true } } } },
    },
  });
  if (!contrato) notFound();
  exigeTenant(user, contrato.clienteId);

  // só signatários posicionam assinatura
  const signatarios = contrato.partes.filter(
    (p) => p.papeis.length === 0 || p.papeis.some((pp) => pp.papel.assina)
  );

  const docs = await Promise.all(
    contrato.documentos
      .filter((d) => d.storageKeyOriginal)
      .map(async (d) => ({
        id: d.id,
        nome: d.nomeDocumento,
        url: await presignGet(d.storageKeyOriginal!, d.nomeDocumento),
      }))
  );

  const posicoes = await prisma.contratoPosicaoAssinatura.findMany({
    where: { contratoDocumentoId: { in: contrato.documentos.map((d) => d.id) } },
  });

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Posicionar assinaturas"
        subtitle={contrato.assunto ?? undefined}
      />
      <PosicionarWrapper
        contratoId={contrato.id}
        docs={docs}
        partes={signatarios.map((p) => ({ id: p.id, nome: p.nomeRazaoSocial }))}
        posicoesIniciais={posicoes.map((p) => ({
          contratoDocumentoId: p.contratoDocumentoId,
          contratoParteId: p.contratoParteId,
          pagina: p.pagina,
          x: p.x,
          y: p.y,
          largura: p.largura,
          altura: p.altura,
        }))}
      />
    </div>
  );
}
