import { describe, it, expect } from "vitest";
import forge from "node-forge";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { assinarPdfComP12, assinarPdfExterno, prepararAssinatura, embutirCms } from "./pades";

/** Simula o client local: recebe bytes, devolve CMS detached (com cert+chave próprios). */
function clienteLocalSimulado() {
  const keys = forge.pki.rsa.generateKeyPair(2048);
  const cert = forge.pki.createCertificate();
  cert.publicKey = keys.publicKey;
  cert.serialNumber = "03";
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date(Date.now() + 365 * 864e5);
  const attrs = [{ name: "commonName", value: "Cliente Local Sim" }];
  cert.setSubject(attrs);
  cert.setIssuer(attrs);
  cert.sign(keys.privateKey, forge.md.sha256.create());
  return async (bytes: Buffer): Promise<Buffer> => {
    const p7 = forge.pkcs7.createSignedData();
    p7.content = forge.util.createBuffer(bytes.toString("binary"));
    p7.addCertificate(cert);
    p7.addSigner({
      key: keys.privateKey,
      certificate: cert,
      digestAlgorithm: forge.pki.oids.sha256,
      authenticatedAttributes: [
        { type: forge.pki.oids.contentType, value: forge.pki.oids.data },
        { type: forge.pki.oids.messageDigest },
        { type: forge.pki.oids.signingTime, value: new Date() as unknown as string },
      ],
    });
    p7.sign({ detached: true });
    return Buffer.from(forge.asn1.toDer(p7.toAsn1()).getBytes(), "binary");
  };
}

/** Gera um .p12 autoassinado em memória (para teste do mecanismo de assinatura). */
function gerarP12Teste(senha: string): Buffer {
  const keys = forge.pki.rsa.generateKeyPair(2048);
  const cert = forge.pki.createCertificate();
  cert.publicKey = keys.publicKey;
  cert.serialNumber = "01";
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date(Date.now() + 365 * 864e5);
  const attrs = [{ name: "commonName", value: "Teste Assina.net" }, { name: "organizationName", value: "Assina.net" }];
  cert.setSubject(attrs);
  cert.setIssuer(attrs);
  cert.sign(keys.privateKey, forge.md.sha256.create());
  const p12Asn1 = forge.pkcs12.toPkcs12Asn1(keys.privateKey, [cert], senha, { algorithm: "3des" });
  const der = forge.asn1.toDer(p12Asn1).getBytes();
  return Buffer.from(der, "binary");
}

async function pdfDeTeste(): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  page.drawText("Documento de teste para assinatura PAdES", { x: 50, y: 780, size: 14, font });
  return pdf.save();
}

describe("PAdES — assinarPdfComP12", () => {
  it("assina um PDF e embute a estrutura de assinatura (ByteRange + PKCS7)", async () => {
    const senha = "senha-teste";
    const p12 = gerarP12Teste(senha);
    const pdf = await pdfDeTeste();

    const assinado = await assinarPdfComP12(pdf, p12, senha);
    const texto = Buffer.from(assinado).toString("latin1");

    // é um PDF válido
    expect(texto.startsWith("%PDF")).toBe(true);
    // assinatura PAdES presente
    expect(texto).toContain("/ByteRange");
    expect(texto).toContain("adbe.pkcs7.detached");
    // ficou maior que o original (placeholder + assinatura embutidos)
    expect(assinado.length).toBeGreaterThan(pdf.length);

    // o PKCS#7 embutido é parseável (assinatura real)
    const hex = /\/Contents\s*<([0-9A-Fa-f]+)>/.exec(texto)?.[1];
    expect(hex).toBeTruthy();
    const der = forge.util.hexToBytes(hex!.replace(/0+$/, hex!.length % 2 ? "0" : ""));
    const p7 = forge.pkcs7.messageFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(der)));
    expect(p7).toBeTruthy();
  }, 20000);

  it("signer externo (client local simulado) produz PDF assinado válido", async () => {
    // gera cert+chave (no teste fazem o papel do client local)
    const keys = forge.pki.rsa.generateKeyPair(2048);
    const cert = forge.pki.createCertificate();
    cert.publicKey = keys.publicKey;
    cert.serialNumber = "02";
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date(Date.now() + 365 * 864e5);
    const attrs = [{ name: "commonName", value: "Client Local" }];
    cert.setSubject(attrs);
    cert.setIssuer(attrs);
    cert.sign(keys.privateKey, forge.md.sha256.create());

    // simula o client local: recebe bytes, devolve CMS detached
    const produzirCms = async (bytes: Buffer): Promise<Buffer> => {
      const p7 = forge.pkcs7.createSignedData();
      p7.content = forge.util.createBuffer(bytes.toString("binary"));
      p7.addCertificate(cert);
      p7.addSigner({
        key: keys.privateKey,
        certificate: cert,
        digestAlgorithm: forge.pki.oids.sha256,
        authenticatedAttributes: [
          { type: forge.pki.oids.contentType, value: forge.pki.oids.data },
          { type: forge.pki.oids.messageDigest },
          { type: forge.pki.oids.signingTime, value: new Date() as unknown as string },
        ],
      });
      p7.sign({ detached: true });
      return Buffer.from(forge.asn1.toDer(p7.toAsn1()).getBytes(), "binary");
    };

    const pdf = await pdfDeTeste();
    const assinado = await assinarPdfExterno(pdf, produzirCms);
    const texto = Buffer.from(assinado).toString("latin1");
    expect(texto.startsWith("%PDF")).toBe(true);
    expect(texto).toContain("/ByteRange");
    expect(texto).toContain("adbe.pkcs7.detached");
    expect(assinado.length).toBeGreaterThan(pdf.length);
  }, 20000);

  it("fluxo DEFERIDO (preparar → client assina → embutir) gera PDF assinado", async () => {
    const assinarNoCliente = clienteLocalSimulado();
    const pdf = await pdfDeTeste();

    // FASE 1 — servidor prepara e captura os bytes
    const { pdfComPlaceholder, bytesParaAssinar } = await prepararAssinatura(pdf);
    expect(bytesParaAssinar.length).toBeGreaterThan(0);

    // (client local assina os bytes → CMS)
    const cms = await assinarNoCliente(bytesParaAssinar);

    // FASE 2 — servidor embute o CMS
    const assinado = await embutirCms(pdfComPlaceholder, cms);
    const texto = Buffer.from(assinado).toString("latin1");
    expect(texto.startsWith("%PDF")).toBe(true);
    expect(texto).toContain("adbe.pkcs7.detached");
    const hex = /\/Contents\s*<([0-9A-Fa-f]+)>/.exec(texto)?.[1];
    expect(hex).toBeTruthy();
    // o CMS embutido é parseável
    const der = forge.util.hexToBytes(hex!.replace(/(00)+$/, ""));
    expect(() =>
      forge.pkcs7.messageFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(der)))
    ).not.toThrow();
  }, 20000);
});
