import { describe, it, expect } from "vitest";
import { statusContratoPorPartes, statusDocumentoPorPartes, ehSignatario } from "./cascade";

describe("ehSignatario", () => {
  it("parte sem papel é signatária (default)", () => {
    expect(ehSignatario([])).toBe(true);
  });
  it("parte com papel que assina é signatária", () => {
    expect(ehSignatario([{ papel: { assina: true } }])).toBe(true);
  });
  it("observador (papel assina=false) NÃO é signatário", () => {
    expect(ehSignatario([{ papel: { assina: false } }])).toBe(false);
  });
  it("vários papéis: signatário se algum assina", () => {
    expect(ehSignatario([{ papel: { assina: false } }, { papel: { assina: true } }])).toBe(true);
  });
});

describe("statusContratoPorPartes", () => {
  it("todas assinadas -> ASSINADO", () => {
    expect(statusContratoPorPartes(["ASSINADO", "ASSINADO"])).toBe("ASSINADO");
  });
  it("uma de duas -> PARCIALMENTE_ASSINADO", () => {
    expect(statusContratoPorPartes(["ASSINADO", "NAO_ASSINADO"])).toBe("PARCIALMENTE_ASSINADO");
  });
  it("nenhuma -> LIBERADO_ASSINATURA", () => {
    expect(statusContratoPorPartes(["NAO_ASSINADO", "NAO_ASSINADO"])).toBe("LIBERADO_ASSINATURA");
  });
  it("sem partes -> LIBERADO_ASSINATURA", () => {
    expect(statusContratoPorPartes([])).toBe("LIBERADO_ASSINATURA");
  });
});

describe("statusDocumentoPorPartes", () => {
  it("todas assinadas -> ASSINADO", () => {
    expect(statusDocumentoPorPartes(["ASSINADO"])).toBe("ASSINADO");
  });
  it("parcial -> PARCIALMENTE_ASSINADO", () => {
    expect(statusDocumentoPorPartes(["ASSINADO", "NAO_ASSINADO"])).toBe("PARCIALMENTE_ASSINADO");
  });
  it("nenhuma -> NAO_ASSINADO", () => {
    expect(statusDocumentoPorPartes(["NAO_ASSINADO"])).toBe("NAO_ASSINADO");
  });
});
