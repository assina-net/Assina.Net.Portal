import { describe, it, expect } from "vitest";
import { hashChave, gerarApiKey, lerChave } from "./api-auth";

describe("hashChave", () => {
  it("gera sha256 hex de 64 chars e é determinístico", () => {
    const h = hashChave("ak_live_abc");
    expect(h).toMatch(/^[0-9a-f]{64}$/);
    expect(hashChave("ak_live_abc")).toBe(h);
  });
});

describe("gerarApiKey", () => {
  it("chave tem prefixo ak_live_ e o hash bate", () => {
    const { chave, hash, prefixo } = gerarApiKey();
    expect(chave.startsWith("ak_live_")).toBe(true);
    expect(prefixo).toBe(chave.slice(0, 12));
    expect(hash).toBe(hashChave(chave));
  });
  it("chaves são únicas", () => {
    expect(gerarApiKey().chave).not.toBe(gerarApiKey().chave);
  });
});

describe("lerChave", () => {
  const req = (h: Record<string, string>) => new Request("https://x/api/v1/contratos", { headers: h });
  it("lê do Authorization: Bearer", () => {
    expect(lerChave(req({ authorization: "Bearer ak_live_xyz" }))).toBe("ak_live_xyz");
  });
  it("lê do x-api-key", () => {
    expect(lerChave(req({ "x-api-key": "ak_live_abc" }))).toBe("ak_live_abc");
  });
  it("retorna null sem header", () => {
    expect(lerChave(req({}))).toBeNull();
  });
});
