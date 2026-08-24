import { describe, it, expect } from "vitest";
import { PDFDocument } from "pdf-lib";
import { aplicarCamadaVisivel, gerarPdfAssinado } from "./pdf";

async function pdfBranco(paginas = 2): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  for (let i = 0; i < paginas; i++) doc.addPage([595, 842]);
  return doc.save();
}

const marca = {
  pagina: 0,
  x: 0.1,
  y: 0.1,
  largura: 0.3,
  altura: 0.08,
  nome: "Maria Souza",
  cpfCnpj: "12345678900",
  metodo: "Certificado digital (local)",
  quando: "01/01/2026 10:00",
};

describe("aplicarCamadaVisivel", () => {
  it("mantém o número de páginas e devolve um PDF válido", async () => {
    const base = await pdfBranco(2);
    const out = await aplicarCamadaVisivel(base, {
      marcas: [marca],
      rubrica: { nomes: ["Maria Souza", "João Silva"], validacaoUrl: "https://x/validar/1" },
    });
    const re = await PDFDocument.load(out);
    expect(re.getPageCount()).toBe(2);
    expect(out.length).toBeGreaterThan(base.length);
  });

  it("sem marcas e sem rubrica devolve os bytes originais", async () => {
    const base = await pdfBranco(1);
    const out = await aplicarCamadaVisivel(base, {});
    expect(out).toBe(base);
  });
});

describe("gerarPdfAssinado", () => {
  it("anexa a folha de assinaturas (página extra) e rubrica as originais", async () => {
    const base = await pdfBranco(2);
    const out = await gerarPdfAssinado(base, {
      assunto: "Contrato de teste",
      validacaoUrl: "https://x/validar/1",
      hashOriginal: "abc123",
      assinaturas: [{ nome: "Maria Souza", cpfCnpj: "12345678900", quando: "01/01/2026", metodo: "Token", ip: "1.2.3.4" }],
      marcas: [marca],
      rubrica: { nomes: ["Maria Souza"], validacaoUrl: "https://x/validar/1" },
    });
    const re = await PDFDocument.load(out);
    expect(re.getPageCount()).toBe(3); // 2 originais + folha
  });
});
