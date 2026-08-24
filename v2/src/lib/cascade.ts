import type { StatusAssinatura, StatusContrato, StatusDocumento } from "@prisma/client";

/**
 * Calcula o status do contrato a partir do status de assinatura das partes.
 * Função pura (testável). Regra:
 *  - todas ASSINADO  -> ASSINADO
 *  - alguma ASSINADO -> PARCIALMENTE_ASSINADO
 *  - nenhuma         -> LIBERADO_ASSINATURA (continua aguardando)
 */
/**
 * Determina se uma parte é signatária (entra na cascata) ou apenas observador/contato.
 * Sem papel = signatário por padrão; com papéis = signatário se ALGUM papel assina.
 */
export function ehSignatario(papeis: { papel: { assina: boolean } }[]): boolean {
  return papeis.length === 0 || papeis.some((p) => p.papel.assina);
}

export function statusContratoPorPartes(statuses: StatusAssinatura[]): StatusContrato {
  if (statuses.length === 0) return "LIBERADO_ASSINATURA";
  const assinadas = statuses.filter((s) => s === "ASSINADO").length;
  if (assinadas === statuses.length) return "ASSINADO";
  if (assinadas > 0) return "PARCIALMENTE_ASSINADO";
  return "LIBERADO_ASSINATURA";
}

/** Status do documento: assinado quando todas as partes que assinam já assinaram. */
export function statusDocumentoPorPartes(statuses: StatusAssinatura[]): StatusDocumento {
  if (statuses.length === 0) return "NAO_ASSINADO";
  const assinadas = statuses.filter((s) => s === "ASSINADO").length;
  if (assinadas === statuses.length) return "ASSINADO";
  if (assinadas > 0) return "PARCIALMENTE_ASSINADO";
  return "NAO_ASSINADO";
}
