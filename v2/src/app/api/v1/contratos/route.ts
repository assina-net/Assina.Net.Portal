import { after } from "next/server";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db";
import { autenticarApi, json, erro } from "@/lib/api-auth";
import { apiContratoSchema } from "@/lib/schemas";
import { putObjectBytes } from "@/lib/s3";
import { dispararWebhook } from "@/lib/webhooks";
import { liberarContratoCore } from "@/lib/contrato-core";
import { sha256Hex } from "@/lib/format";
import type { TipoPessoa } from "@prisma/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PDF_BYTES = 15 * 1024 * 1024; // 15 MB por documento

/** GET /api/v1/contratos — lista os contratos do cliente (paginado). */
export async function GET(req: Request) {
  const ctx = await autenticarApi(req);
  if (!ctx) return erro("Não autorizado", 401);

  const url = new URL(req.url);
  const limite = Math.min(Number(url.searchParams.get("limite")) || 20, 100);
  const offset = Math.max(Number(url.searchParams.get("offset")) || 0, 0);
  const status = url.searchParams.get("status") ?? undefined;

  const where = { clienteId: ctx.clienteId, ...(status ? { statusContrato: status as never } : {}) };
  const [total, contratos] = await Promise.all([
    prisma.contrato.count({ where }),
    prisma.contrato.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limite,
      select: { id: true, assunto: true, identificador: true, statusContrato: true, createdAt: true },
    }),
  ]);
  return json({ total, limite, offset, contratos });
}

/** POST /api/v1/contratos — cria um contrato (e opcionalmente libera p/ assinatura). */
export async function POST(req: Request) {
  const ctx = await autenticarApi(req);
  if (!ctx) return erro("Não autorizado", 401);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return erro("JSON inválido");
  }
  const parsed = apiContratoSchema.safeParse(body);
  if (!parsed.success) return erro(parsed.error.issues[0].message, 422);
  const d = parsed.data;

  // valida papéis/tipos do tenant (cross-tenant safety)
  const papelIds = [...new Set(d.partes.map((p) => p.papelId).filter(Boolean))] as string[];
  const tipoIds = [...new Set(d.documentos.map((x) => x.tipoDocumentoId).filter(Boolean))] as string[];
  if (papelIds.length) {
    const ok = await prisma.papel.count({ where: { id: { in: papelIds }, clienteId: ctx.clienteId } });
    if (ok !== papelIds.length) return erro("Papel inválido", 422);
  }
  if (tipoIds.length) {
    const ok = await prisma.tipoDocumento.count({ where: { id: { in: tipoIds }, clienteId: ctx.clienteId } });
    if (ok !== tipoIds.length) return erro("Tipo de documento inválido", 422);
  }

  // remetente: um usuário ativo do cliente (a FK exige um usuário válido)
  const vinculo = await prisma.usuarioCliente.findFirst({
    where: { clienteId: ctx.clienteId, status: "ATIVO" },
    orderBy: { createdAt: "asc" },
    select: { usuarioId: true },
  });
  if (!vinculo) return erro("Cliente sem usuário responsável", 409);

  // decodifica e sobe os PDFs ao S3 antes de criar (fora da transação)
  const docsParaCriar: { nomeDocumento: string; storageKey: string; sha256: string; tipoDocumentoId: string | null }[] = [];
  for (const doc of d.documentos) {
    let bytes: Buffer;
    try {
      bytes = Buffer.from(doc.conteudoBase64, "base64");
    } catch {
      return erro(`Documento "${doc.nomeDocumento}" com base64 inválido`, 422);
    }
    if (bytes.length === 0) return erro(`Documento "${doc.nomeDocumento}" vazio`, 422);
    if (bytes.length > MAX_PDF_BYTES) return erro(`Documento "${doc.nomeDocumento}" excede 15 MB`, 413);
    if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") return erro(`Documento "${doc.nomeDocumento}" não é PDF`, 422);
    const key = `contratos/${ctx.clienteId}/${randomUUID()}/${doc.nomeDocumento.replace(/[^\w.\-]/g, "_")}`;
    await putObjectBytes(key, new Uint8Array(bytes));
    docsParaCriar.push({ nomeDocumento: doc.nomeDocumento, storageKey: key, sha256: sha256Hex(new Uint8Array(bytes)), tipoDocumentoId: doc.tipoDocumentoId || null });
  }

  const contrato = await prisma.$transaction(async (tx) => {
    const c = await tx.contrato.create({
      data: {
        clienteId: ctx.clienteId,
        remetenteId: vinculo.usuarioId,
        assunto: d.assunto,
        identificador: d.identificador || null,
        valorContrato: d.valor ?? null,
        statusContrato: "NAO_LIBERADO_ASSINATURA",
        ordemAssinatura: d.sequencial ? "SEQUENCIAL" : "PARALELA",
      },
    });
    for (const [i, p] of d.partes.entries()) {
      const parte = await tx.contratoParte.create({
        data: {
          contratoId: c.id,
          tipoPessoa: p.tipoPessoa as TipoPessoa,
          cpfCnpj: p.cpfCnpj,
          nomeRazaoSocial: p.nome,
          email: p.email,
          celular: p.celular || null,
          ordem: i,
        },
      });
      if (p.papelId) await tx.contratoPartePapel.create({ data: { contratoParteId: parte.id, papelId: p.papelId } });
    }
    for (const doc of docsParaCriar) {
      await tx.contratoDocumento.create({
        data: {
          contratoId: c.id,
          nomeDocumento: doc.nomeDocumento,
          storageKeyOriginal: doc.storageKey,
          sha256Original: doc.sha256,
          tipoDocumentoId: doc.tipoDocumentoId,
          statusDocumento: "NAO_ASSINADO",
        },
      });
    }
    await tx.contratoLog.create({ data: { contratoId: c.id, log: "Contrato criado via API", logSistema: true } });
    return c;
  });

  after(() => dispararWebhook(ctx.clienteId, "contrato.criado", { contratoId: contrato.id }).catch(() => {}));

  // liberação opcional imediata
  let liberado = false;
  if (d.liberar) {
    const r = await liberarContratoCore(contrato.id, vinculo.usuarioId);
    if (!r.ok) return json({ id: contrato.id, liberado: false, avisoLiberacao: r.erro }, 201);
    liberado = true;
  }

  return json({ id: contrato.id, statusContrato: liberado ? "LIBERADO_ASSINATURA" : "NAO_LIBERADO_ASSINATURA", liberado }, 201);
}
