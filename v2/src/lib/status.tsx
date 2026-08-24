import type { StatusContrato } from "@prisma/client";

export const STATUS_LABEL: Record<StatusContrato, string> = {
  NAO_LIBERADO_ASSINATURA: "Rascunho",
  LIBERANDO_ASSINATURA: "Liberando",
  LIBERADO_ASSINATURA: "Aguardando assinatura",
  GERANDO_ASSINATURAS: "Gerando assinaturas",
  PARCIALMENTE_ASSINADO: "Parcialmente assinado",
  ASSINADO: "Assinado",
  CANCELADO: "Cancelado",
  RECUSADO: "Recusado",
};

export const STATUS_COR: Record<StatusContrato, string> = {
  NAO_LIBERADO_ASSINATURA: "bg-gray-100 text-gray-600",
  LIBERANDO_ASSINATURA: "bg-amber-50 text-amber-700",
  LIBERADO_ASSINATURA: "bg-amber-50 text-amber-700",
  GERANDO_ASSINATURAS: "bg-blue-50 text-blue-700",
  PARCIALMENTE_ASSINADO: "bg-blue-50 text-blue-700",
  ASSINADO: "bg-emerald-50 text-emerald-700",
  CANCELADO: "bg-red-50 text-red-700",
  RECUSADO: "bg-red-50 text-red-700",
};

export function StatusPill({ status }: { status: StatusContrato }) {
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${STATUS_COR[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
