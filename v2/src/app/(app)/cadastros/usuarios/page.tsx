import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { PageHeader, ButtonLink, Table, Empty, StatusBadge } from "@/components/ui";

export default async function UsuariosPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  const sp = await searchParams;

  // usuários vinculados ao cliente ativo (admin global vê todos)
  const vinculos = await prisma.usuarioCliente.findMany({
    where: user.clienteId ? { clienteId: user.clienteId } : {},
    include: { usuario: { include: { pessoa: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <PageHeader
        title="Usuários"
        subtitle="Pessoas com acesso ao sistema"
        action={<ButtonLink href="/cadastros/usuarios/novo">+ Novo usuário</ButtonLink>}
      />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Table head={["Nome", "Login", "E-mail", "Perfil", "Status"]}>
        {vinculos.length === 0 && <Empty>Nenhum usuário cadastrado.</Empty>}
        {vinculos.map((v) => (
          <tr key={v.id} className="hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">{v.usuario.pessoa.nomeRazaoSocial}</td>
            <td className="px-4 py-3 text-gray-600">{v.usuario.login}</td>
            <td className="px-4 py-3 text-gray-600">{v.usuario.pessoa.email}</td>
            <td className="px-4 py-3 text-gray-600">{v.perfil.replace("ROLE_", "")}</td>
            <td className="px-4 py-3">
              <StatusBadge ativo={v.usuario.status === "ATIVO"} />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
