import type { Prisma } from "@prisma/client";

/** Papéis padrão criados para todo cliente novo. */
export const PAPEIS_PADRAO = [
  { identificacao: "SIGNATARIO", nome: "Signatário", assina: true },
  { identificacao: "TESTEMUNHA", nome: "Testemunha", assina: true },
  { identificacao: "OBSERVADOR", nome: "Observador", assina: false },
];

/** Tipos de documento padrão criados para todo cliente novo. */
export const TIPOS_DOCUMENTO_PADRAO = [
  { nome: "Contrato", identificacao: "CONTRATO", assina: true, ordem: 1 },
  { nome: "Termo", identificacao: "TERMO", assina: true, ordem: 2 },
];

/**
 * Semeia o catálogo inicial (papéis + tipos de documento) de um cliente novo,
 * para que ele consiga montar contratos imediatamente. Idempotente: só cria
 * se o cliente ainda não tiver papéis.
 */
export async function seedCatalogoPadrao(tx: Prisma.TransactionClient, clienteId: string) {
  const jaTem = await tx.papel.count({ where: { clienteId } });
  if (jaTem > 0) return;

  await tx.papel.createMany({
    data: PAPEIS_PADRAO.map((p) => ({ ...p, clienteId })),
  });
  await tx.tipoDocumento.createMany({
    data: TIPOS_DOCUMENTO_PADRAO.map((t) => ({ ...t, clienteId })),
  });
}
