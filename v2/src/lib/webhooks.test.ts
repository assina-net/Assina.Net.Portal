import { describe, it, expect } from "vitest";
import { assinarPayload, inscrito, gerarSecret } from "./webhooks";

describe("assinarPayload", () => {
  it("gera HMAC-SHA256 estável no formato sha256=hex", () => {
    const sig = assinarPayload("segredo", '{"a":1}');
    expect(sig).toMatch(/^sha256=[0-9a-f]{64}$/);
    expect(assinarPayload("segredo", '{"a":1}')).toBe(sig); // determinístico
  });
  it("muda com secret diferente", () => {
    expect(assinarPayload("s1", "x")).not.toBe(assinarPayload("s2", "x"));
  });
});

describe("inscrito", () => {
  it('"*" recebe todos os eventos', () => {
    expect(inscrito("*", "contrato.assinado")).toBe(true);
  });
  it("vazio recebe todos", () => {
    expect(inscrito("", "contrato.criado")).toBe(true);
  });
  it("CSV filtra corretamente", () => {
    expect(inscrito("contrato.assinado,contrato.criado", "contrato.criado")).toBe(true);
    expect(inscrito("contrato.assinado", "contrato.criado")).toBe(false);
  });
  it("tolera espaços no CSV", () => {
    expect(inscrito("contrato.assinado , contrato.expirado", "contrato.expirado")).toBe(true);
  });
});

describe("gerarSecret", () => {
  it("tem prefixo whsec_ e é único", () => {
    const a = gerarSecret();
    const b = gerarSecret();
    expect(a.startsWith("whsec_")).toBe(true);
    expect(a).not.toBe(b);
  });
});
