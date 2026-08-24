import { requireUser } from "@/lib/session";
import { PageHeader, Card, Field, SubmitButton } from "@/components/ui";
import { trocarSenha } from "@/lib/actions/conta";

export default async function TrocarSenhaPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; erro?: string }>;
}) {
  await requireUser();
  const sp = await searchParams;

  return (
    <div className="max-w-md">
      <PageHeader title="Trocar senha" subtitle="Altere a senha da sua conta" />
      {sp.ok && <p className="mb-4 rounded-md bg-success/10 px-3 py-2 text-sm text-green-700">Senha alterada!</p>}
      {sp.erro && <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>}
      <Card>
        <form action={trocarSenha} className="space-y-4">
          <Field label="Senha atual" name="senhaAtual" type="password" />
          <Field label="Nova senha (mín. 6 caracteres)" name="novaSenha" type="password" />
          <SubmitButton>Salvar nova senha</SubmitButton>
        </form>
      </Card>
    </div>
  );
}
