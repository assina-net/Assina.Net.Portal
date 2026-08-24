import { describe, it, expect } from "vitest";
import { mascararCpf, sha256Hex, formatarCpfCnpj, tipoPorDocumento, formatarMoeda, moedaParaNumero, iniciais } from "./format";

describe("iniciais", () => {
  it("pega a primeira letra de cada nome (até 3)", () => {
    expect(iniciais("Maria Aparecida Souza")).toBe("MAS");
  });
  it("ignora conectivos (de, da, dos)", () => {
    expect(iniciais("João da Silva")).toBe("JS");
  });
  it("limita a 3 letras", () => {
    expect(iniciais("Ana Beatriz Carla Diana Eva")).toBe("ABC");
  });
  it("nome único usa a primeira letra", () => {
    expect(iniciais("Empresa")).toBe("E");
  });
  it("vazio vira ?", () => {
    expect(iniciais("")).toBe("?");
  });
});

describe("mascararCpf", () => {
  it("mascara CPF (11 dígitos) mantendo início e fim", () => {
    expect(mascararCpf("12345678900")).toBe("123.***.***-00");
  });
  it("mascara CNPJ (14 dígitos)", () => {
    expect(mascararCpf("12345678000199")).toBe("12.***.***/****-99");
  });
  it("aceita CPF formatado", () => {
    expect(mascararCpf("123.456.789-00")).toBe("123.***.***-00");
  });
  it("valores curtos viram ***", () => {
    expect(mascararCpf("12")).toBe("***");
    expect(mascararCpf("")).toBe("***");
  });
});

describe("formatarCpfCnpj", () => {
  it("formata CPF completo", () => {
    expect(formatarCpfCnpj("12345678900", "FISICA")).toBe("123.456.789-00");
  });
  it("formata CPF parcial enquanto digita", () => {
    expect(formatarCpfCnpj("123456", "FISICA")).toBe("123.456");
  });
  it("formata CNPJ completo", () => {
    expect(formatarCpfCnpj("12345678000199", "JURIDICA")).toBe("12.345.678/0001-99");
  });
  it("ignora não-dígitos e limita o tamanho", () => {
    expect(formatarCpfCnpj("123.456.789-00abc99", "FISICA")).toBe("123.456.789-00");
  });
});

describe("tipoPorDocumento", () => {
  it("até 11 dígitos = FISICA", () => {
    expect(tipoPorDocumento("12345678900")).toBe("FISICA");
  });
  it("mais de 11 dígitos = JURIDICA", () => {
    expect(tipoPorDocumento("123456789012")).toBe("JURIDICA");
  });
});

describe("formatarMoeda", () => {
  it("formata centavos como BRL", () => {
    expect(formatarMoeda("12345")).toBe("123,45");
    expect(formatarMoeda("100")).toBe("1,00");
    expect(formatarMoeda("5")).toBe("0,05");
  });
  it("usa separador de milhar", () => {
    expect(formatarMoeda("123456789")).toBe("1.234.567,89");
  });
  it("vazio -> vazio", () => {
    expect(formatarMoeda("")).toBe("");
  });
});

describe("moedaParaNumero", () => {
  it("converte BRL para número", () => {
    expect(moedaParaNumero("1.234,56")).toBe(1234.56);
    expect(moedaParaNumero("0,05")).toBe(0.05);
    expect(moedaParaNumero("")).toBe(0);
  });
});

describe("sha256Hex", () => {
  it("calcula SHA-256 conhecido de string vazia", () => {
    expect(sha256Hex(new Uint8Array())).toBe(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    );
  });
});
