import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { PageHeader } from "@/components/ui";
import { NovoContratoForm } from "./novo-contrato-form";

export default async function NovoContratoPage() {
  const user = await requireUser();
  exigePerfil(user, "ROLE_USUARIO");

  const [papeis, tipos] = await Promise.all([
    prisma.papel.findMany({
      where: { ...tenantWhere(user), status: "ATIVO" },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true },
    }),
    prisma.tipoDocumento.findMany({
      where: { ...tenantWhere(user), status: "ATIVO" },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true },
    }),
  ]);

  return (
    <div className="max-w-4xl">
      <PageHeader title="Novo contrato" subtitle="Cabeçalho, partes e documentos" />
      <NovoContratoForm papeis={papeis} tipos={tipos} />
    </div>
  );
}
