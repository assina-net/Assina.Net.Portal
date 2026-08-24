import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { exigeTenant } from "@/lib/rbac";
import { PageHeader, Card, Field, CheckboxField, SubmitButton, ButtonLink } from "@/components/ui";
import { salvarPapel } from "@/lib/actions/papeis";
import { notFound } from "next/navigation";

export default async function PapelFormPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ erro?: string }>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const sp = await searchParams;
  const novo = id === "novo";

  const papel = novo
    ? null
    : await prisma.papel.findFirst({ where: { id, ...tenantWhere(user) } });
  if (!novo && !papel) notFound();
  if (papel) exigeTenant(user, papel.clienteId);

  return (
    <div className="max-w-xl">
      <PageHeader title={novo ? "Novo papel" : "Editar papel"} />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Card>
        <form action={salvarPapel} className="space-y-4">
          {!novo && <input type="hidden" name="id" value={id} />}
          <Field label="Nome" name="nome" required defaultValue={papel?.nome} />
          <Field
            label="Identificação"
            name="identificacao"
            required
            defaultValue={papel?.identificacao}
            placeholder="ex: SIGNATARIO"
          />
          <CheckboxField label="Este papel assina documentos" name="assina" defaultChecked={papel?.assina ?? true} />
          <div className="flex gap-3 pt-2">
            <SubmitButton>{novo ? "Criar" : "Salvar"}</SubmitButton>
            <ButtonLink href="/cadastros/papeis" variant="ghost">
              Cancelar
            </ButtonLink>
          </div>
        </form>
      </Card>
    </div>
  );
}
