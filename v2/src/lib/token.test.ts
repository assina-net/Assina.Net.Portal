import { describe, it, expect } from "vitest";
import { tokenUtilizavel, gerarCodigo, type TokenEstado } from "./token";

const agora = new Date("2026-06-10T12:00:00Z");
const base: TokenEstado = {
  consumidoEm: null,
  validade: new Date("2026-06-10T12:10:00Z"),
  tentativas: 0,
  maxTentativas: 3,
};

describe("tokenUtilizavel", () => {
  it("token novo e válido é utilizável", () => {
    expect(tokenUtilizavel(base, agora)).toEqual({ ok: true });
  });
  it("token consumido é rejeitado", () => {
    expect(tokenUtilizavel({ ...base, consumidoEm: agora }, agora)).toEqual({ ok: false, motivo: "consumido" });
  });
  it("token expirado é rejeitado", () => {
    const exp = { ...base, validade: new Date("2026-06-10T11:00:00Z") };
    expect(tokenUtilizavel(exp, agora)).toEqual({ ok: false, motivo: "expirado" });
  });
  it("token com tentativas esgotadas é bloqueado", () => {
    expect(tokenUtilizavel({ ...base, tentativas: 3 }, agora)).toEqual({ ok: false, motivo: "bloqueado" });
  });
});

describe("gerarCodigo", () => {
  it("gera 6 dígitos numéricos", () => {
    for (let i = 0; i < 50; i++) {
      const c = gerarCodigo();
      expect(c).toMatch(/^\d{6}$/);
    }
  });
});
