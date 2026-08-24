import { prisma } from "@/lib/db";
import { presignGet } from "@/lib/s3";
import { mascararCpf, fmtDataHora } from "@/lib/format";
import { STATUS_LABEL } from "@/lib/status";

const METODO_LABEL: Record<string, string> = {
  TOKEN_ELETRONICO: "Assinatura eletrônica (token)",
  GOVBR: "gov.br",
  CERTIFICADO_LOCAL: "Certificado digital (local)",
  CERTIFICADO_NUVEM: "Certificado em nuvem",
};

export default async function ValidarPage({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
  const { codigo } = await params;

  // o código de validação é o id do contrato (uuid). valida formato.
  const valido = /^[0-9a-f-]{36}$/i.test(codigo);
  const contrato = valido
    ? await prisma.contrato.findUnique({
        where: { id: codigo },
        include: {
          documentos: true,
          partes: { where: { statusAssinatura: "ASSINADO" }, include: { assinaturas: true } },
        },
      })
    : null;

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="h-8 rounded bg-brand-navy px-3 py-2" />
        </div>

        {!contrato ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow">
            <div className="mb-2 text-4xl">⚠️</div>
            <h1 className="text-xl font-semibold text-gray-800">Documento não encontrado</h1>
            <p className="mt-2 text-sm text-gray-500">O código de validação é inválido.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center gap-2 text-success">
                <span className="text-2xl">🛡️</span>
                <h1 className="font-heading text-xl font-semibold text-brand-slate">
                  Documento autêntico
                </h1>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <strong>{contrato.assunto}</strong>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Situação: {STATUS_LABEL[contrato.statusContrato]} · Código: {contrato.id}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-3 font-heading font-semibold text-brand-slate">Assinantes</h2>
              {contrato.partes.length === 0 && (
                <p className="text-sm text-gray-500">Nenhuma assinatura registrada ainda.</p>
              )}
              <ul className="space-y-3">
                {contrato.partes.map((p) => {
                  const prova = p.assinaturas[0];
                  return (
                    <li key={p.id} className="border-b border-gray-100 pb-2 last:border-0">
                      <div className="font-medium text-gray-800">{p.nomeRazaoSocial}</div>
                      <div className="text-sm text-gray-500">
                        {mascararCpf(p.cpfCnpj)}
                        {prova && (
                          <>
                            {" · "}
                            {METODO_LABEL[prova.tipoAssinatura] ?? prova.tipoAssinatura}
                            {" · "}
                            {fmtDataHora(prova.dataAssinatura)}
                          </>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-3 font-heading font-semibold text-brand-slate">Documentos</h2>
              <ul className="space-y-2">
                {await Promise.all(
                  contrato.documentos.map(async (d) => {
                    const url = d.storageKeyAssinado
                      ? await presignGet(d.storageKeyAssinado, d.nomeDocumento)
                      : null;
                    return (
                      <li key={d.id} className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm last:border-0">
                        <div>
                          <div className="font-medium text-gray-800">{d.nomeDocumento}</div>
                          <div className="break-all text-xs text-gray-400">
                            SHA-256: {d.sha256Assinado ?? d.sha256Original ?? "—"}
                          </div>
                        </div>
                        {url ? (
                          <a href={url} target="_blank" rel="noopener noreferrer" className="shrink-0 font-medium text-brand-blue hover:underline">
                            Baixar assinado
                          </a>
                        ) : (
                          <span className="shrink-0 text-xs text-gray-400">não assinado</span>
                        )}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-gray-400">Validação de documentos · Assina.net</p>
      </div>
    </main>
  );
}
