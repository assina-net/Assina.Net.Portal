import { fmtData } from "@/lib/format";
import { prisma } from "@/lib/db";
import { requireUser, tenantWhere } from "@/lib/session";
import { PageHeader, ButtonLink, Table, Empty } from "@/components/ui";
import { StatusPill } from "@/lib/status";
import Link from "next/link";

const FILTROS = [
  { key: "todos", label: "Todos" },
  { key: "pendente", label: "Pendentes" },
  { key: "assinado", label: "Assinados" },
  { key: "recusado", label: "Recusados" },
];

const GRUPO: Record<string, string[]> = {
  pendente: ["NAO_LIBERADO_ASSINATURA", "LIBERADO_ASSINATURA", "PARCIALMENTE_ASSINADO", "LIBERANDO_ASSINATURA", "GERANDO_ASSINATURAS"],
  assinado: ["ASSINADO"],
  recusado: ["RECUSADO", "CANCELADO"],
};

export default async function ContratosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const user = await requireUser();
  const sp = await searchParams;
  const filtro = sp.status ?? "todos";

  const statusWhere =
    filtro in GRUPO ? { statusContrato: { in: GRUPO[filtro] as never } } : {};

  const contratos = await prisma.contrato.findMany({
    where: { ...tenantWhere(user), ...statusWhere },
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { partes: true, documentos: true } } },
    take: 100,
  });

  return (
    <div>
      <PageHeader
        title="Contratos"
        subtitle="Documentos enviados para assinatura"
        action={<ButtonLink href="/contratos/novo">+ Novo contrato</ButtonLink>}
      />

      <div className="mb-4 flex gap-2">
        {FILTROS.map((f) => (
          <Link
            key={f.key}
            href={`/contratos?status=${f.key}`}
            className={`rounded-full px-3 py-1 text-sm ${
              filtro === f.key ? "bg-brand text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <Table head={["Assunto", "Identificador", "Partes", "Docs", "Status", "Criado em"]}>
        {contratos.length === 0 && <Empty>Nenhum contrato encontrado.</Empty>}
        {contratos.map((c) => (
          <tr key={c.id} className="cursor-pointer hover:bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-800">
              <Link href={`/contratos/${c.id}`} className="hover:text-brand-blue">
                {c.assunto}
              </Link>
            </td>
            <td className="px-4 py-3 text-gray-600">{c.identificador ?? "—"}</td>
            <td className="px-4 py-3 text-gray-600">{c._count.partes}</td>
            <td className="px-4 py-3 text-gray-600">{c._count.documentos}</td>
            <td className="px-4 py-3">
              <StatusPill status={c.statusContrato} />
            </td>
            <td className="px-4 py-3 text-gray-500">
              {fmtData(c.createdAt)}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
