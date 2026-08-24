import Link from "next/link";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { prisma } from "@/lib/db";
import { PageHeader, Card, Table, Empty, StatusBadge, ButtonLink } from "@/components/ui";
import { fmtData } from "@/lib/format";
import { alternarStatusCliente } from "@/lib/actions/admin-clientes";

export default async function AdminClientesPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN");
  const sp = await searchParams;

  const clientes = await prisma.cliente.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      status: true,
      createdAt: true,
      pessoa: { select: { nomeRazaoSocial: true, cpfCnpj: true, tipoPessoa: true } },
      _count: { select: { usuarios: true, contratos: true } },
    },
  });

  return (
    <div className="max-w-4xl">
      <div className="mb-4 flex items-center justify-between">
        <PageHeader title="Clientes" subtitle="Empresas (tenants) da plataforma" />
        <ButtonLink href="/admin/clientes/novo">+ Novo cliente</ButtonLink>
      </div>
      {sp.ok && (
        <p className="mb-4 rounded-md bg-success/10 px-3 py-2 text-sm text-green-700">
          Cliente “{sp.ok}” criado.
        </p>
      )}

      {clientes.length === 0 ? (
        <Empty>Nenhum cliente cadastrado.</Empty>
      ) : (
        <Card>
          <Table head={["Empresa", "CPF/CNPJ", "Usuários", "Contratos", "Criado", "Status", ""]}>
            {clientes.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2 font-medium">{c.pessoa.nomeRazaoSocial}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{c.pessoa.cpfCnpj}</td>
                <td className="px-4 py-2 text-sm">{c._count.usuarios}</td>
                <td className="px-4 py-2 text-sm">{c._count.contratos}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{fmtData(c.createdAt)}</td>
                <td className="px-4 py-2"><StatusBadge ativo={c.status === "ATIVO"} /></td>
                <td className="px-4 py-2 text-right">
                  <form action={alternarStatusCliente}>
                    <input type="hidden" name="id" value={c.id} />
                    <input type="hidden" name="ativo" value={c.status === "ATIVO" ? "1" : "0"} />
                    <button className="text-sm text-gray-600 hover:underline">
                      {c.status === "ATIVO" ? "Inativar" : "Reativar"}
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </Table>
        </Card>
      )}

      <p className="mt-4 text-xs text-gray-400">
        Cada novo cliente já vem com um usuário administrador e o catálogo inicial de papéis e tipos de documento.
        Para gerenciar usuários e papéis de um cliente, use o seletor de cliente e o menu{" "}
        <Link href="/cadastros/usuarios" className="underline">Cadastros</Link>.
      </p>
    </div>
  );
}
