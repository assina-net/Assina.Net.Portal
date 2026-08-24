import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { PageHeader, Card, Field, SelectField, SubmitButton, ButtonLink } from "@/components/ui";
import { criarUsuario } from "@/lib/actions/usuarios";
import { DocumentoInput } from "@/components/documento-input";

export default async function NovoUsuarioPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const sp = await searchParams;

  return (
    <div className="max-w-xl">
      <PageHeader title="Novo usuário" />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Card>
        <form action={criarUsuario} className="space-y-4">
          <Field label="Nome / Razão social" name="nome" required />
          <DocumentoInput defaultTipo="FISICA" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="E-mail (login)" name="email" type="email" required />
            <Field label="Senha" name="senha" type="password" required />
          </div>
          <SelectField
            label="Perfil"
            name="perfil"
            defaultValue="ROLE_USUARIO"
            options={[
              { value: "ROLE_USUARIO", label: "Usuário" },
              { value: "ROLE_ASSINADOR", label: "Assinador" },
              { value: "ROLE_FINANCEIRO", label: "Financeiro" },
              { value: "ROLE_ADMIN_CLIENTE", label: "Administrador do cliente" },
            ]}
          />
          <div className="flex gap-3 pt-2">
            <SubmitButton>Criar usuário</SubmitButton>
            <ButtonLink href="/cadastros/usuarios" variant="ghost">
              Cancelar
            </ButtonLink>
          </div>
        </form>
      </Card>
    </div>
  );
}
