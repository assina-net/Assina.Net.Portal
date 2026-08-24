// Regras de ORDEM de assinatura (puras/testáveis).
export type Signatario = { id: string; ordem: number; assinado: boolean };

/** É a vez desta parte assinar? Paralela: sempre. Sequencial: todos de ordem menor já assinaram. */
export function ehVezDe(parteId: string, signatarios: Signatario[], sequencial: boolean): boolean {
  if (!sequencial) return true;
  const eu = signatarios.find((s) => s.id === parteId);
  if (!eu) return false;
  return signatarios.filter((s) => s.ordem < eu.ordem).every((s) => s.assinado);
}

/** Próximo signatário a ser notificado (sequencial = menor ordem pendente; paralela = null). */
export function proximoSignatario(signatarios: Signatario[], sequencial: boolean): string | null {
  if (!sequencial) return null;
  const pendentes = signatarios.filter((s) => !s.assinado).sort((a, b) => a.ordem - b.ordem);
  return pendentes[0]?.id ?? null;
}
