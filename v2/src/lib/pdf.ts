import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import { mascararCpf, iniciais } from "@/lib/format";

export type AssinaturaInfo = {
  nome: string;
  cpfCnpj: string;
  quando: string;
  metodo: string;
  ip: string | null;
};

// Marca visível posicionada numa página (frações 0..1, origem topo-esquerdo).
export type MarcaVisivel = {
  pagina: number;
  x: number;
  y: number;
  largura: number;
  altura: number;
  nome: string;
  quando: string;
  cpfCnpj?: string;
  metodo?: string;
};

const NAVY = rgb(0.043, 0.133, 0.22);
const GREEN = rgb(0.204, 0.714, 0.451);
const GRAY = rgb(0.35, 0.35, 0.35);

/** Desenha o carimbo visível de UMA marca numa página pdf-lib já carregada. */
function desenharCarimbo(
  pg: import("pdf-lib").PDFPage,
  m: MarcaVisivel,
  font: import("pdf-lib").PDFFont,
  bold: import("pdf-lib").PDFFont
) {
  const { width: pw, height: ph } = pg.getSize();
  const bw = m.largura * pw;
  const bh = m.altura * ph;
  const bx = m.x * pw;
  const by = ph - (m.y + m.altura) * ph; // pdf-lib: origem na base
  pg.drawRectangle({
    x: bx,
    y: by,
    width: bw,
    height: bh,
    borderColor: GREEN,
    borderWidth: 1,
    color: rgb(0.93, 0.97, 0.94),
    opacity: 0.6,
    borderOpacity: 1,
  });
  const pad = 4;
  let ty = by + bh - 11;
  pg.drawText("Assinado eletronicamente", { x: bx + pad, y: ty, size: 6.5, font, color: GRAY });
  ty -= 12;
  pg.drawText(m.nome.slice(0, 34), { x: bx + pad, y: ty, size: 8, font: bold, color: NAVY });
  if (m.cpfCnpj && ty - 10 > by) {
    ty -= 10;
    pg.drawText(`Doc: ${mascararCpf(m.cpfCnpj)}`, { x: bx + pad, y: ty, size: 6, font, color: GRAY });
  }
  if (m.metodo && ty - 9 > by + 10) {
    ty -= 9;
    pg.drawText(m.metodo.slice(0, 40), { x: bx + pad, y: ty, size: 5.5, font, color: GRAY });
  }
  pg.drawText(m.quando, { x: bx + pad, y: by + 4, size: 6, font, color: GRAY });
}

/** Desenha a faixa de rubrica no rodapé de todas as páginas dadas. */
function desenharRubrica(
  paginas: import("pdf-lib").PDFPage[],
  font: import("pdf-lib").PDFFont,
  rubrica: { nomes: string[]; validacaoUrl: string }
) {
  const rub = rubrica.nomes.map(iniciais).join(" · ");
  const total = paginas.length;
  paginas.forEach((pg, i) => {
    const { width: pw } = pg.getSize();
    pg.drawLine({ start: { x: 28, y: 26 }, end: { x: pw - 28, y: 26 }, thickness: 0.4, color: rgb(0.8, 0.85, 0.82) });
    pg.drawText(`Assina.net · Rubricado por: ${rub}`.slice(0, 90), { x: 28, y: 17, size: 6, font, color: GRAY });
    const dir = `Pág. ${i + 1}/${total} · valide em ${rubrica.validacaoUrl}`;
    const w = font.widthOfTextAtSize(dir, 6);
    pg.drawText(dir, { x: pw - 28 - w, y: 17, size: 6, font, color: GRAY });
  });
}

/**
 * Aplica a camada VISÍVEL (carimbos posicionados + rubrica) sobre os bytes de um
 * PDF e devolve os novos bytes. Usada no fluxo de certificado (PAdES): a aparência
 * é desenhada ANTES do placeholder de assinatura, ficando coberta pela assinatura.
 */
export async function aplicarCamadaVisivel(
  pdfBytes: Uint8Array,
  opts: { marcas?: MarcaVisivel[]; rubrica?: { nomes: string[]; validacaoUrl: string } }
): Promise<Uint8Array> {
  if (!opts.marcas?.length && !opts.rubrica) return pdfBytes;
  const pdf = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const paginas = pdf.getPages();
  for (const m of opts.marcas ?? []) {
    const pg = paginas[m.pagina];
    if (pg) desenharCarimbo(pg, m, font, bold);
  }
  if (opts.rubrica) desenharRubrica(paginas, font, opts.rubrica);
  return pdf.save();
}

/** Anexa uma "Folha de Assinaturas" (com selo + QR Code) ao PDF original. */
export async function gerarPdfAssinado(
  original: Uint8Array,
  opts: {
    assunto: string;
    validacaoUrl: string;
    assinaturas: AssinaturaInfo[];
    hashOriginal: string;
    marcas?: MarcaVisivel[];
    // rubrica em todas as páginas: iniciais dos signatários no rodapé
    rubrica?: { nomes: string[]; validacaoUrl: string };
  }
): Promise<Uint8Array> {
  const pdf = await PDFDocument.load(original, { ignoreEncryption: true });
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  // 1) assinaturas VISÍVEIS nas posições marcadas (antes de anexar a folha)
  const paginas = pdf.getPages();
  for (const m of opts.marcas ?? []) {
    const pg = paginas[m.pagina];
    if (pg) desenharCarimbo(pg, m, font, bold);
  }

  // 2) RUBRICA em todas as páginas do documento (não na folha, que é anexada depois)
  if (opts.rubrica) desenharRubrica(paginas, font, opts.rubrica);

  const page = pdf.addPage([595, 842]); // A4
  const { width, height } = page.getSize();

  // header
  page.drawRectangle({ x: 0, y: height - 80, width, height: 80, color: NAVY });
  page.drawText("Assina.net", { x: 40, y: height - 40, size: 20, font: bold, color: rgb(1, 1, 1) });
  page.drawText("Folha de Assinaturas", { x: 40, y: height - 62, size: 12, font, color: rgb(0.8, 0.9, 0.85) });

  let y = height - 120;
  page.drawText("Documento", { x: 40, y, size: 9, font, color: GRAY });
  y -= 16;
  page.drawText(opts.assunto, { x: 40, y, size: 13, font: bold });
  y -= 26;
  page.drawText("Hash SHA-256 (original):", { x: 40, y, size: 8, font, color: GRAY });
  y -= 12;
  page.drawText(opts.hashOriginal, { x: 40, y, size: 7, font, color: GRAY });
  y -= 30;

  page.drawText("Assinaturas", { x: 40, y, size: 12, font: bold, color: GREEN });
  y -= 22;
  for (const a of opts.assinaturas) {
    page.drawText(`• ${a.nome}  —  ${mascararCpf(a.cpfCnpj)}`, { x: 48, y, size: 10, font: bold });
    y -= 14;
    page.drawText(`${a.metodo} · ${a.quando} · IP ${a.ip ?? "-"}`, { x: 56, y, size: 8, font, color: GRAY });
    y -= 24;
  }

  // QR Code de validação
  const qrPng = await QRCode.toBuffer(opts.validacaoUrl, { margin: 1, width: 130 });
  const qrImg = await pdf.embedPng(qrPng);
  page.drawImage(qrImg, { x: width - 170, y: 70, width: 130, height: 130 });
  page.drawText("Escaneie para validar", { x: width - 168, y: 58, size: 8, font, color: GRAY });
  page.drawText("Validação online:", { x: 40, y: 60, size: 8, font: bold });
  page.drawText(opts.validacaoUrl, { x: 40, y: 48, size: 7, font, color: rgb(0.09, 0.65, 0.83) });

  return pdf.save();
}
