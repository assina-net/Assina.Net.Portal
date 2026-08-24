// Lógica do token de assinatura (OTP). A COMPARAÇÃO do código é feita NO SERVIDOR
// (bcrypt) — esta camada cobre as regras de validade (pura/testável).

export type TokenEstado = {
  consumidoEm: Date | null;
  validade: Date;
  tentativas: number;
  maxTentativas: number;
};

export type TokenChecagem =
  | { ok: true }
  | { ok: false; motivo: "consumido" | "expirado" | "bloqueado" };

/** Verifica se o token ainda pode ser usado (sem comparar o código). */
export function tokenUtilizavel(t: TokenEstado, agora: Date): TokenChecagem {
  if (t.consumidoEm) return { ok: false, motivo: "consumido" };
  if (t.validade.getTime() < agora.getTime()) return { ok: false, motivo: "expirado" };
  if (t.tentativas >= t.maxTentativas) return { ok: false, motivo: "bloqueado" };
  return { ok: true };
}

import { randomInt } from "crypto";

/** Gera um código numérico de 6 dígitos com RNG criptográfico. */
export function gerarCodigo(): string {
  return String(randomInt(100000, 1000000));
}
