"use server";

import { randomUUID } from "crypto";
import { headers } from "next/headers";
import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getObjectBytes, putObjectBytes } from "@/lib/s3";
import { prepararAssinatura, embutirCms } from "@/lib/pades";
import { aplicarCamadaVisivel } from "@/lib/pdf";
import { sha256Hex, fmtDataHora } from "@/lib/format";
import { statusContratoPorPartes, statusDocumentoPorPartes, ehSignatario } from "@/lib/cascade";
import { rateLimit, MIN } from "@/lib/ratelimit";
import { ehVezDaParte, notificarProximo } from "@/lib/ordem-server";
import { dispararWebhook } from "@/lib/webhooks";

const BASE = process.env.AUTH_URL || "https://assinanet.simples.media";

type Manifesto = {
  parteId: string;
  contratoId: string;
  docs: { docId: string; placeholderKey: string }[];
};

/**
 * FASE 1 (assinatura por certificado local): prepara cada documento (placeholder
 * sobre o estado ATUAL — permite assinatura incremental por vários signatários) e
 * devolve os bytes a serem assinados pelo client local. Guarda a sessão no S3.
 */
export async function prepararAssinaturaLocal(chaveAcesso: string) {
  const parte = await prisma.contratoParte.findUnique({
    where: { chaveAcesso },
    include: {
      contrato: {
        include: {
          documentos: { include: { posicoes: true } },
          partes: { include: { papeis: { include: { papel: true } } } },
        },
      },
    },
  });
  if (!parte || !parte.validadeChaveAcesso || parte.validadeChaveAcesso < new Date()) {
    return { ok: false as const, erro: "Link inválido ou expirado" };
  }
  if (parte.statusAssinatura === "ASSINADO") return { ok: false as const, erro: "Já assinado" };
  if (!(await ehVezDaParte(parte.contratoId, parte.id)))
    return { ok: false as const, erro: "Ainda não é a sua vez de assinar (aguardando assinatura anterior)." };
  if (!(await rateLimit(`assloc:${parte.id}`, 5, 15 * MIN))) {
    return { ok: false as const, erro: "Muitas tentativas. Aguarde alguns minutos." };
  }

  const sessionId = randomUUID();
  const docsResp: { docId: string; nome: string; bytesBase64: string }[] = [];
  const manifestoDocs: Manifesto["docs"] = [];

  // rubrica só na 1ª assinatura do contrato (depois o PDF base já a contém)
  const primeiraAssinatura = parte.contrato.documentos.every((d) => !d.storageKeyAssinado);
  const nomesSignatarios = parte.contrato.partes
    .filter((p) => ehSignatario(p.papeis))
    .map((p) => p.nomeRazaoSocial);
  const quando = fmtDataHora(new Date());

  for (const doc of parte.contrato.documentos) {
    const baseKey = doc.storageKeyAssinado ?? doc.storageKeyOriginal; // assinatura incremental
    if (!baseKey) continue;
    let base = await getObjectBytes(baseKey);
    // camada VISÍVEL antes do placeholder PAdES: carimbo da parte atual + rubrica (1ª vez)
    const marcas = doc.posicoes
      .filter((pos) => pos.contratoParteId === parte.id)
      .map((pos) => ({
        pagina: pos.pagina,
        x: pos.x,
        y: pos.y,
        largura: pos.largura,
        altura: pos.altura,
        nome: parte.nomeRazaoSocial,
        cpfCnpj: parte.cpfCnpj,
        metodo: "Certificado digital (local)",
        quando,
      }));
    base = await aplicarCamadaVisivel(base, {
      marcas,
      rubrica: primeiraAssinatura
        ? { nomes: nomesSignatarios, validacaoUrl: `${BASE}/validar/${parte.contratoId}` }
        : undefined,
    });
    const { pdfComPlaceholder, bytesParaAssinar } = await prepararAssinatura(base);
    const placeholderKey = `sessoes/${sessionId}/${doc.id}.pdf`;
    await putObjectBytes(placeholderKey, new Uint8Array(pdfComPlaceholder));
    manifestoDocs.push({ docId: doc.id, placeholderKey });
    docsResp.push({ docId: doc.id, nome: doc.nomeDocumento, bytesBase64: bytesParaAssinar.toString("base64") });
  }

  const manifesto: Manifesto = { parteId: parte.id, contratoId: parte.contratoId, docs: manifestoDocs };
  await putObjectBytes(`sessoes/${sessionId}.json`, new TextEncoder().encode(JSON.stringify(manifesto)), "application/json");

  return { ok: true as const, sessionId, docs: docsResp };
}

/**
 * FASE 2: recebe o CMS produzido pelo client local (chave nunca saiu da máquina),
 * embute em cada documento, grava a prova e atualiza a cascata de status.
 */
export async function registrarAssinaturaLocal(
  chaveAcesso: string,
  sessionId: string,
  assinaturas: { docId: string; cmsBase64: string; serial?: string }[]
) {
  const parte = await prisma.contratoParte.findUnique({
    where: { chaveAcesso },
    include: { contrato: true },
  });
  if (!parte || !parte.validadeChaveAcesso || parte.validadeChaveAcesso < new Date()) {
    return { ok: false as const, erro: "Link inválido ou expirado" };
  }
  if (parte.statusAssinatura === "ASSINADO") return { ok: false as const, erro: "Já assinado" };

  // carrega o manifesto da sessão e confere a posse
  let manifesto: Manifesto;
  try {
    manifesto = JSON.parse(Buffer.from(await getObjectBytes(`sessoes/${sessionId}.json`)).toString("utf8"));
  } catch {
    return { ok: false as const, erro: "Sessão inválida" };
  }
  if (manifesto.parteId !== parte.id) return { ok: false as const, erro: "Sessão não corresponde" };

  const hdrs = await headers();
  const ip = (hdrs.get("x-forwarded-for") ?? "").split(",")[0].trim() || null;
  const carimbo = new Date().toISOString();
  const contratoId = parte.contratoId;

  // embute cada CMS no respectivo PDF (incremental) e sobe a nova versão
  for (const item of assinaturas) {
    const doc = manifesto.docs.find((d) => d.docId === item.docId);
    if (!doc) continue;
    const placeholder = Buffer.from(await getObjectBytes(doc.placeholderKey));
    const cms = Buffer.from(item.cmsBase64, "base64");
    const assinado = await embutirCms(placeholder, cms);
    const dbDoc = await prisma.contratoDocumento.findUnique({ where: { id: item.docId } });
    const baseKey = dbDoc?.storageKeyOriginal ?? `contratos/${parte.contrato.clienteId}/${contratoId}/${item.docId}`;
    const key = baseKey.replace(/\.pdf$/i, "") + "-assinado.pdf";
    await putObjectBytes(key, assinado);
    await prisma.contratoDocumento.update({
      where: { id: item.docId },
      data: { storageKeyAssinado: key, sha256Assinado: sha256Hex(assinado), dataAssinado: new Date() },
    });
  }

  // grava a prova + cascata em transação
  let contratoAssinado = false;
  await prisma.$transaction(async (tx) => {
    for (const item of assinaturas) {
      await tx.contratoParteDocumento.upsert({
        where: { contratoParteId_documentoId: { contratoParteId: parte.id, documentoId: item.docId } },
        update: {},
        create: {
          contratoParteId: parte.id,
          documentoId: item.docId,
          tipoAssinatura: "CERTIFICADO_LOCAL",
          ip,
          carimboTempo: carimbo,
          serialCertificado: item.serial ?? null,
        },
      });
    }
    await tx.contratoParte.update({ where: { id: parte.id }, data: { statusAssinatura: "ASSINADO" } });

    const partes = await tx.contratoParte.findMany({
      where: { contratoId },
      include: { papeis: { include: { papel: true } } },
    });
    const statusSign = partes.filter((p) => ehSignatario(p.papeis)).map((p) => p.statusAssinatura);
    await tx.contratoDocumento.updateMany({ where: { contratoId }, data: { statusDocumento: statusDocumentoPorPartes(statusSign) } });
    const novo = statusContratoPorPartes(statusSign);
    await tx.contrato.update({ where: { id: contratoId }, data: { statusContrato: novo } });
    await tx.contratoLog.create({
      data: { contratoId, log: `Assinado por ${parte.nomeRazaoSocial} (certificado local, IP ${ip ?? "?"})`, carimboTempo: carimbo },
    });
    contratoAssinado = novo === "ASSINADO";
  });

  // pós: limpa a sessão, dispara webhooks e, se ainda não fechou, notifica o próximo
  const clienteId = parte.contrato.clienteId;
  after(async () => {
    try {
      for (const d of manifesto.docs) await putObjectBytes(d.placeholderKey, new Uint8Array());
      await dispararWebhook(clienteId, "parte.assinou", { contratoId, parteId: parte.id, nome: parte.nomeRazaoSocial });
      if (contratoAssinado) await dispararWebhook(clienteId, "contrato.assinado", { contratoId });
      else await notificarProximo(contratoId);
    } catch {}
  });

  if (contratoAssinado) revalidatePath(`/contratos/${contratoId}`);
  return { ok: true as const };
}
