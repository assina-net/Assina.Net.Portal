import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { PageHeader, ButtonLink, Table, Empty, StatusBadge } from "@/components/ui";
import { alternarStatusTipoDocumento } from "@/lib/actions/tipos-documento";
import Link from "next/link";

export default async function TiposDocumentoPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  const sp = await searchParams;
  const tipos = await prisma.tipoDocumento.findMany({
    where: tenantWhere(user),
    orderBy: [{ ordem: "asc" }, { nome: "asc" }],
  });

  return (
    <div>
      <PageHeader
        title="Tipos de documento"
        subtitle="Modelos de documento e regras de assinatura"
        action={<ButtonLink href="/cadastros/tipos-documento/novo">+ Novo tipo</ButtonLink>}
      />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Table head={["Nome", "Assina?", "QR Code", "Validação online", "Status", ""]}>
        {tipos.length === 0 && <Empty>Nenhum tipo de documento cadastrado.</Empty>}
        {tipos.map((t) => (
          <tr key={t.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{t.nome}</td>
            <td className="px-4 py-3">{t.assina ? "Sim" : "Não"}</td>
            <td className="px-4 py-3">{t.qrcode ? "Sim" : "Não"}</td>
            <td className="px-4 py-3">{t.validacaoOnLine ? "Sim" : "Não"}</td>
            <td className="px-4 py-3">
              <StatusBadge ativo={t.status === "ATIVO"} />
            </td>
            <td className="px-4 py-3 text-right">
              <div className="flex justify-end gap-3">
                <Link
                  href={`/cadastros/tipos-documento/${t.id}`}
                  className="text-brand-blue hover:underline"
                >
                  Editar
                </Link>
                <form action={alternarStatusTipoDocumento}>
                  <input type="hidden" name="id" value={t.id} />
                  <button className="text-gray-500 hover:underline">
                    {t.status === "ATIVO" ? "Inativar" : "Ativar"}
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
