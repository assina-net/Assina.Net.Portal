import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigeTenant } from "@/lib/rbac";
import { presignGet } from "@/lib/s3";
import { PdfViewerWrapper } from "@/components/pdf-viewer-wrapper";
import { PageHeader, Card, ButtonLink } from "@/components/ui";
import { StatusPill } from "@/lib/status";
import { liberarAssinatura } from "@/lib/actions/assinatura";
import { fmtDataHora } from "@/lib/format";
import { notFound } from "next/navigation";

const ASSINATURA_LABEL: Record<string, string> = {
  NAO_LIBERADO: "Não liberado",
  NAO_ASSINADO: "Aguardando",
  ASSINADO_PARCIAL: "Parcial",
  ASSINADO: "Assinado",
};

export default async function ContratoDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await requireUser();
  const { id } = await params;

  const contrato = await prisma.contrato.findUnique({
    where: { id },
    include: {
      partes: { include: { papeis: { include: { papel: true } } } },
      documentos: { include: { tipoDocumento: true } },
      logs: { orderBy: { dataLog: "desc" }, take: 20 },
      remetente: { include: { pessoa: true } },
    },
  });
  if (!contrato) notFound();
  exigeTenant(user, contrato.clienteId);

  // URLs pré-assinadas p/ o visualizador embutido (prefere a versão assinada)
  const docsView = await Promise.all(
    contrato.documentos
      .filter((d) => d.storageKeyAssinado || d.storageKeyOriginal)
      .map(async (d) => {
        const key = d.storageKeyAssinado ?? d.storageKeyOriginal!;
        return { nome: d.nomeDocumento + (d.storageKeyAssinado ? " (assinado)" : ""), url: await presignGet(key, d.nomeDocumento) };
      })
  );

  return (
    <div className="max-w-4xl">
      <PageHeader
        title={contrato.assunto ?? "Contrato"}
        subtitle={contrato.identificador ?? undefined}
        action={
          <div className="flex gap-3">
            {contrato.statusContrato === "NAO_LIBERADO_ASSINATURA" && (
              <>
                <ButtonLink href={`/contratos/${contrato.id}/posicionar`} variant="ghost">
                  Posicionar assinaturas
                </ButtonLink>
                <form action={liberarAssinatura}>
                  <input type="hidden" name="contratoId" value={contrato.id} />
                  <button className="inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-dark">
                    Liberar para assinatura
                  </button>
                </form>
              </>
            )}
            <ButtonLink href="/contratos" variant="ghost">← Voltar</ButtonLink>
          </div>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <StatusPill status={contrato.statusContrato} />
        {contrato.valorContrato != null && (
          <span className="text-sm text-gray-600">
            Valor: R$ {Number(contrato.valorContrato).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        )}
        <span className="text-sm text-gray-500">
          Criado em {fmtDataHora(contrato.createdAt)} por {contrato.remetente.pessoa.nomeRazaoSocial}
        </span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
          {contrato.ordemAssinatura === "SEQUENCIAL" ? "Assinatura sequencial" : "Assinatura paralela"}
        </span>
        {contrato.statusContrato === "ASSINADO" && (
          <a
            href={`/validar/${contrato.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-blue hover:underline"
          >
            Página de validação ↗
          </a>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="mb-3 font-heading font-semibold text-brand-slate">Partes</h2>
          <ul className="space-y-3">
            {contrato.partes.map((p) => (
              <li key={p.id} className="border-b border-gray-100 pb-2 last:border-0">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{p.nomeRazaoSocial}</span>
                  <span className={`rounded px-2 py-0.5 text-xs font-medium ${p.statusAssinatura === "ASSINADO" ? "bg-success/15 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                    {ASSINATURA_LABEL[p.statusAssinatura] ?? p.statusAssinatura}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {p.cpfCnpj} · {p.email ?? "sem e-mail"}
                  {p.papeis.length > 0 && (
                    <> · {p.papeis.map((pp) => pp.papel.nome).join(", ")}</>
                  )}
                </div>
                {p.chaveAcesso && p.statusAssinatura !== "ASSINADO" && (
                  <a href={`/assinar/${p.chaveAcesso}`} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-blue hover:underline">
                    Link de assinatura ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="mb-3 font-heading font-semibold text-brand-slate">Documentos</h2>
          <ul className="space-y-2">
            {contrato.documentos.map((d) => (
              <li key={d.id} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
                <div>
                  <div className="font-medium text-gray-800">{d.nomeDocumento}</div>
                  <div className="text-xs text-gray-400">{d.tipoDocumento?.nome ?? "sem tipo"}</div>
                </div>
                <div className="flex shrink-0 gap-3 text-sm">
                  <a href={`/api/download/${d.id}`} className="font-medium text-brand-blue hover:underline">
                    Original
                  </a>
                  {d.storageKeyAssinado && (
                    <a href={`/api/download/${d.id}?tipo=assinado`} className="font-medium text-success hover:underline">
                      Assinado
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {docsView.length > 0 && (
        <Card>
          <h2 className="mb-3 font-heading font-semibold text-brand-slate">Visualizar documentos</h2>
          <PdfViewerWrapper docs={docsView} width={760} />
        </Card>
      )}

      <Card>
        <h2 className="mb-3 mt-2 font-heading font-semibold text-brand-slate">Histórico</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          {contrato.logs.map((l) => (
            <li key={l.id}>
              <span className="text-gray-400">{fmtDataHora(l.dataLog)}</span> — {l.log}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
