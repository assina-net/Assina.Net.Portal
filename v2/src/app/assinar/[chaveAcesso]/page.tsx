import { prisma } from "@/lib/db";
import { presignGet } from "@/lib/s3";
import { AssinarForm } from "./assinar-form";
import { PdfViewerWrapper } from "@/components/pdf-viewer-wrapper";

export default async function AssinarPage({
  params,
}: {
  params: Promise<{ chaveAcesso: string }>;
}) {
  const { chaveAcesso } = await params;

  const parte = await prisma.contratoParte.findUnique({
    where: { chaveAcesso },
    include: { contrato: { include: { documentos: true } } },
  });

  const invalido =
    !parte || !parte.validadeChaveAcesso || parte.validadeChaveAcesso < new Date();

  return (
    <main className="min-h-screen bg-brand-navy py-10">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="mx-auto h-9" />
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {invalido ? (
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-800">Link inválido ou expirado</h1>
              <p className="mt-2 text-sm text-gray-500">
                Solicite ao remetente um novo link de assinatura.
              </p>
            </div>
          ) : parte!.statusAssinatura === "ASSINADO" ? (
            <div className="text-center">
              <div className="mb-3 text-4xl">✅</div>
              <h1 className="text-xl font-semibold text-gray-800">Documento já assinado</h1>
              <p className="mt-2 text-sm text-gray-500">
                Obrigado, {parte!.nomeRazaoSocial}. Sua assinatura foi registrada.
              </p>
            </div>
          ) : (
            <Conteudo parte={parte!} />
          )}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Assinatura eletrônica com validação por código. Assina.net
        </p>
      </div>
    </main>
  );
}

async function Conteudo({
  parte,
}: {
  parte: NonNullable<Awaited<ReturnType<typeof carregar>>>;
}) {
  const docs = await Promise.all(
    parte.contrato.documentos.map(async (d) => ({
      nome: d.nomeDocumento,
      url: d.storageKeyOriginal ? await presignGet(d.storageKeyOriginal, d.nomeDocumento) : "#",
    }))
  );

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-brand-slate">
        Olá, {parte.nomeRazaoSocial}
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Você foi convidado para assinar: <strong>{parte.contrato.assunto}</strong>
      </p>

      <div className="my-6">
        <h2 className="mb-2 text-sm font-medium text-gray-700">Documentos</h2>
        <PdfViewerWrapper docs={docs} width={520} />
      </div>

      <AssinarForm chaveAcesso={parte.chaveAcesso!} />
    </div>
  );
}

// helper só para tipar o include acima
function carregar() {
  return prisma.contratoParte.findUnique({
    where: { chaveAcesso: "" },
    include: { contrato: { include: { documentos: true } } },
  });
}
