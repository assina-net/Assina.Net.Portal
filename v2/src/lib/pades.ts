import signpdf from "@signpdf/signpdf";
import { pdflibAddPlaceholder } from "@signpdf/placeholder-pdf-lib";
import { P12Signer } from "@signpdf/signer-p12";
import { Signer } from "@signpdf/utils";
import { PDFDocument } from "pdf-lib";

/**
 * Núcleo PAdES — embute assinatura digital (PKCS#7) num PDF.
 *
 * Há dois modos:
 *  - assinarPdfComP12: assina com um .p12/.pfx (certificado A1) disponível no servidor.
 *    Usado em testes (cert autoassinado) e, futuramente, se o cliente enviar um A1.
 *  - (deferido) o client local fará a etapa de CMS com a chave que nunca sai da máquina;
 *    o servidor só prepara o placeholder e embute o resultado. Ver docs do client.
 */

const SIG_OPTS = {
  reason: "Assinatura digital — Assina.net",
  contactInfo: "assinanet.simples.media",
  name: "Assina.net",
  location: "Brasil",
};

// Tamanho reservado p/ a assinatura. Certificados ICP-Brasil trazem a cadeia
// completa (CMS ~16KB); reservamos folga p/ cadeia + carimbo do tempo (TSA) futuro.
const SIGNATURE_LENGTH = 30000;

/** Adiciona o placeholder de assinatura (ByteRange/Contents) ao PDF. */
async function comPlaceholder(pdfBytes: Uint8Array): Promise<Buffer> {
  const doc = await PDFDocument.load(pdfBytes);
  pdflibAddPlaceholder({ pdfDoc: doc, ...SIG_OPTS, signatureLength: SIGNATURE_LENGTH });
  const out = await doc.save({ useObjectStreams: false });
  return Buffer.from(out);
}

/** Assina um PDF com um certificado A1 (.p12/.pfx) + senha. Retorna o PDF assinado. */
export async function assinarPdfComP12(
  pdfBytes: Uint8Array,
  p12: Buffer,
  senha: string
): Promise<Uint8Array> {
  const comPh = await comPlaceholder(pdfBytes);
  const signer = new P12Signer(p12, { passphrase: senha });
  const assinado = await signpdf.sign(comPh, signer);
  return new Uint8Array(assinado);
}

/**
 * Signer externo: a CHAVE PRIVADA nunca toca o servidor. O servidor entrega os
 * bytes a assinar (ByteRange) e o client local devolve o CMS/PKCS#7 detached.
 * `produzirCms` é a ponte com o client (localhost/Tauri) — recebe os bytes e
 * retorna o CMS DER. É exatamente o que o client local implementa.
 */
export class SignerExterno extends Signer {
  constructor(private produzirCms: (bytesParaAssinar: Buffer) => Promise<Buffer>) {
    super();
  }
  async sign(pdfBuffer: Buffer): Promise<Buffer> {
    return this.produzirCms(pdfBuffer);
  }
}

/** Assina um PDF delegando o CMS a um signer externo (client local). */
export async function assinarPdfExterno(
  pdfBytes: Uint8Array,
  produzirCms: (bytesParaAssinar: Buffer) => Promise<Buffer>
): Promise<Uint8Array> {
  const comPh = await comPlaceholder(pdfBytes);
  const assinado = await signpdf.sign(comPh, new SignerExterno(produzirCms));
  return new Uint8Array(assinado);
}

const SENTINELA_CAPTURA = "__captura_bytes__";

/**
 * FASE 1 (deferido): adiciona o placeholder e captura os bytes exatos a assinar
 * (ByteRange). O `pdfComPlaceholder` deve ser guardado para a fase 2.
 */
export async function prepararAssinatura(
  pdfBytes: Uint8Array
): Promise<{ pdfComPlaceholder: Buffer; bytesParaAssinar: Buffer }> {
  const comPh = await comPlaceholder(pdfBytes);
  let capturado: Buffer | null = null;
  const captador = new SignerExterno(async (bytes) => {
    capturado = Buffer.from(bytes);
    throw new Error(SENTINELA_CAPTURA); // interrompe após capturar
  });
  try {
    await signpdf.sign(comPh, captador);
  } catch (e) {
    if (!(e instanceof Error && e.message === SENTINELA_CAPTURA)) throw e;
  }
  if (!capturado) throw new Error("Falha ao capturar bytes para assinatura");
  return { pdfComPlaceholder: comPh, bytesParaAssinar: capturado };
}

/**
 * FASE 2 (deferido): embute o CMS produzido pelo client local no PDF preparado.
 * Usa o mesmo `pdfComPlaceholder` da fase 1 (bytes idênticos → CMS casa).
 */
export async function embutirCms(pdfComPlaceholder: Buffer, cmsDer: Buffer): Promise<Uint8Array> {
  const assinado = await signpdf.sign(pdfComPlaceholder, new SignerExterno(async () => cmsDer));
  return new Uint8Array(assinado);
}
