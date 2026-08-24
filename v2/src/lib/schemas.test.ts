import { describe, it, expect } from "vitest";
import { papelSchema, usuarioSchema, contratoSchema, registrarSchema } from "./schemas";

describe("papelSchema", () => {
  it("aceita papel válido", () => {
    const r = papelSchema.safeParse({ nome: "Signatário", identificacao: "SIG", assina: true });
    expect(r.success).toBe(true);
  });
  it("rejeita nome vazio", () => {
    const r = papelSchema.safeParse({ nome: "", identificacao: "SIG" });
    expect(r.success).toBe(false);
  });
});

describe("usuarioSchema", () => {
  const base = {
    nome: "Fulano",
    cpfCnpj: "12345678900",
    email: "f@ex.com",
    senha: "secreta",
    perfil: "ROLE_USUARIO",
    tipoPessoa: "FISICA",
  };
  it("aceita usuário válido", () => {
    expect(usuarioSchema.safeParse(base).success).toBe(true);
  });
  it("rejeita e-mail inválido", () => {
    expect(usuarioSchema.safeParse({ ...base, email: "nao-email" }).success).toBe(false);
  });
  it("rejeita senha curta", () => {
    expect(usuarioSchema.safeParse({ ...base, senha: "123" }).success).toBe(false);
  });
  it("rejeita perfil desconhecido", () => {
    expect(usuarioSchema.safeParse({ ...base, perfil: "ROLE_HACKER" }).success).toBe(false);
  });
});

describe("registrarSchema", () => {
  const base = {
    nomeRazaoSocial: "Empresa X",
    tipoPessoa: "JURIDICA",
    cpfCnpj: "12345678000199",
    email: "x@ex.com",
    senha: "secreta",
  };
  it("aceita cadastro válido", () => {
    expect(registrarSchema.safeParse(base).success).toBe(true);
  });
  it("rejeita CPF/CNPJ curto", () => {
    expect(registrarSchema.safeParse({ ...base, cpfCnpj: "123" }).success).toBe(false);
  });
  it("rejeita e-mail inválido", () => {
    expect(registrarSchema.safeParse({ ...base, email: "x" }).success).toBe(false);
  });
  it("rejeita senha curta", () => {
    expect(registrarSchema.safeParse({ ...base, senha: "123" }).success).toBe(false);
  });
});

describe("contratoSchema", () => {
  const parte = { nome: "A", cpfCnpj: "1", tipoPessoa: "FISICA", email: "", celular: "", papelId: "" };
  const doc = { nomeDocumento: "c.pdf", storageKey: "k/1.pdf", sha256: "abc", tipoDocumentoId: "" };
  it("aceita contrato com 1 parte e 1 documento", () => {
    const r = contratoSchema.safeParse({ assunto: "Teste", partes: [parte], documentos: [doc] });
    expect(r.success).toBe(true);
  });
  it("rejeita sem partes", () => {
    expect(contratoSchema.safeParse({ assunto: "T", partes: [], documentos: [doc] }).success).toBe(false);
  });
  it("rejeita sem documentos", () => {
    expect(contratoSchema.safeParse({ assunto: "T", partes: [parte], documentos: [] }).success).toBe(false);
  });
  it("rejeita assunto vazio", () => {
    expect(contratoSchema.safeParse({ assunto: "", partes: [parte], documentos: [doc] }).success).toBe(false);
  });
  it("rejeita valor negativo", () => {
    const r = contratoSchema.safeParse({ assunto: "T", valor: -5, partes: [parte], documentos: [doc] });
    expect(r.success).toBe(false);
  });
});
