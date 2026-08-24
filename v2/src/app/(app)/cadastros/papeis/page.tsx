import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { PageHeader, ButtonLink, Table, Empty, StatusBadge } from "@/components/ui";
import { alternarStatusPapel } from "@/lib/actions/papeis";
import Link from "next/link";

export default async function PapeisPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  const sp = await searchParams;
  const papeis = await prisma.papel.findMany({
    where: tenantWhere(user),
    orderBy: { nome: "asc" },
  });

  return (
    <div>
      <PageHeader
        title="Papéis"
        subtitle="Funções de assinatura atribuíveis às partes"
        action={<ButtonLink href="/cadastros/papeis/novo">+ Novo papel</ButtonLink>}
      />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Table head={["Nome", "Identificação", "Assina?", "Status", ""]}>
        {papeis.length === 0 && <Empty>Nenhum papel cadastrado.</Empty>}
        {papeis.map((p) => (
          <tr key={p.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{p.nome}</td>
            <td className="px-4 py-3 text-gray-600">{p.identificacao}</td>
            <td className="px-4 py-3">{p.assina ? "Sim" : "Não"}</td>
            <td className="px-4 py-3">
              <StatusBadge ativo={p.status === "ATIVO"} />
            </td>
            <td className="px-4 py-3 text-right">
              <div className="flex justify-end gap-3">
                <Link href={`/cadastros/papeis/${p.id}`} className="text-brand-blue hover:underline">
                  Editar
                </Link>
                <form action={alternarStatusPapel}>
                  <input type="hidden" name="id" value={p.id} />
                  <button className="text-gray-500 hover:underline">
                    {p.status === "ATIVO" ? "Inativar" : "Ativar"}
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
