import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { PageHeader, Card, Field, SelectField, SubmitButton } from "@/components/ui";
import { criarClienteAdmin } from "@/lib/actions/admin-clientes";

export default async function NovoClientePage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN");
  const sp = await searchParams;

  return (
    <div className="max-w-xl">
      <PageHeader title="Novo cliente" subtitle="Cadastre uma empresa e seu administrador" />
      {sp.erro && <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>}
      <Card>
        <form action={criarClienteAdmin} className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-700">Empresa</h3>
          <Field label="Nome / Razão social" name="nomeRazaoSocial" required />
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="Tipo"
              name="tipoPessoa"
              defaultValue="JURIDICA"
              options={[
                { value: "JURIDICA", label: "Jurídica (CNPJ)" },
                { value: "FISICA", label: "Física (CPF)" },
              ]}
            />
            <Field label="CPF/CNPJ" name="cpfCnpj" required />
          </div>

          <h3 className="pt-2 text-sm font-semibold text-gray-700">Administrador do cliente</h3>
          <Field label="Nome do administrador" name="adminNome" required />
          <div className="grid grid-cols-2 gap-4">
            <Field label="E-mail (login)" name="adminEmail" type="email" required />
            <Field label="Senha inicial" name="adminSenha" type="password" required />
          </div>
          <p className="text-xs text-gray-400">
            O administrador entra com esse e-mail e senha (e-mail já validado). Ele poderá trocar a senha depois.
          </p>
          <SubmitButton>Criar cliente</SubmitButton>
        </form>
      </Card>
    </div>
  );
}
