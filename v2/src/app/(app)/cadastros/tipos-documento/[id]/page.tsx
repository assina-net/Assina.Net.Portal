import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { exigeTenant } from "@/lib/rbac";
import { PageHeader, Card, Field, CheckboxField, SubmitButton, ButtonLink } from "@/components/ui";
import { salvarTipoDocumento } from "@/lib/actions/tipos-documento";
import { notFound } from "next/navigation";

export default async function TipoDocumentoFormPage({
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

  const tipo = novo
    ? null
    : await prisma.tipoDocumento.findFirst({ where: { id, ...tenantWhere(user) } });
  if (!novo && !tipo) notFound();
  if (tipo?.clienteId) exigeTenant(user, tipo.clienteId);

  return (
    <div className="max-w-xl">
      <PageHeader title={novo ? "Novo tipo de documento" : "Editar tipo de documento"} />
      {sp.erro && (
        <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
      )}
      <Card>
        <form action={salvarTipoDocumento} className="space-y-4">
          {!novo && <input type="hidden" name="id" value={id} />}
          <Field label="Nome" name="nome" required defaultValue={tipo?.nome} />
          <Field
            label="Identificação"
            name="identificacao"
            defaultValue={tipo?.identificacao ?? ""}
            placeholder="ex: CONTRATO"
          />
          <div className="space-y-2 pt-1">
            <CheckboxField label="Exige assinatura" name="assina" defaultChecked={tipo?.assina ?? true} />
            <CheckboxField label="Gerar QR Code de validação" name="qrcode" defaultChecked={tipo?.qrcode ?? false} />
            <CheckboxField
              label="Permitir validação online"
              name="validacaoOnLine"
              defaultChecked={tipo?.validacaoOnLine ?? false}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <SubmitButton>{novo ? "Criar" : "Salvar"}</SubmitButton>
            <ButtonLink href="/cadastros/tipos-documento" variant="ghost">
              Cancelar
            </ButtonLink>
          </div>
        </form>
      </Card>
    </div>
  );
}
