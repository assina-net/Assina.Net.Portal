import { describe, it, expect } from "vitest";
import { ehVezDe, proximoSignatario, type Signatario } from "./ordem";

const sigs: Signatario[] = [
  { id: "a", ordem: 0, assinado: false },
  { id: "b", ordem: 1, assinado: false },
  { id: "c", ordem: 2, assinado: false },
];

describe("ehVezDe", () => {
  it("paralela: é sempre a vez", () => {
    expect(ehVezDe("c", sigs, false)).toBe(true);
  });
  it("sequencial: só o primeiro no começo", () => {
    expect(ehVezDe("a", sigs, true)).toBe(true);
    expect(ehVezDe("b", sigs, true)).toBe(false);
  });
  it("sequencial: libera o próximo quando o anterior assina", () => {
    const s = [{ id: "a", ordem: 0, assinado: true }, { id: "b", ordem: 1, assinado: false }];
    expect(ehVezDe("b", s, true)).toBe(true);
  });
});

describe("proximoSignatario", () => {
  it("sequencial: menor ordem pendente", () => {
    const s = [{ id: "a", ordem: 0, assinado: true }, { id: "b", ordem: 1, assinado: false }, { id: "c", ordem: 2, assinado: false }];
    expect(proximoSignatario(s, true)).toBe("b");
  });
  it("sequencial: null quando todos assinaram", () => {
    expect(proximoSignatario([{ id: "a", ordem: 0, assinado: true }], true)).toBe(null);
  });
  it("paralela: null (todos já notificados)", () => {
    expect(proximoSignatario(sigs, false)).toBe(null);
  });
});
