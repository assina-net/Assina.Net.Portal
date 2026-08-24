"use server";

import { randomUUID } from "crypto";
import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { dispararWebhook } from "@/lib/webhooks";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { presignPut } from "@/lib/s3";
import { contratoSchema } from "@/lib/schemas";
import type { TipoPessoa } from "@prisma/client";

/** Gera URL pré-assinada para o navegador subir um documento direto ao S3. */
export async function presignDocumento(filename: string, contentType: string) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_USUARIO");
  if (!user.clienteId) throw new Error("Selecione um cliente");
  const safe = filename.replace(/[^\w.\-]/g, "_");
  const key = `contratos/${user.clienteId}/${randomUUID()}/${safe}`;
  const url = await presignPut(key, contentType || "application/pdf");
  return { url, key };
}

export async function criarContrato(input: unknown) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_USUARIO");
  const clienteId = user.clienteId;
  if (!clienteId) return { ok: false, erro: "Selecione um cliente" };

  const parsed = contratoSchema.safeParse(input);
  if (!parsed.success) return { ok: false, erro: parsed.error.issues[0].message };
  const d = parsed.data;

  // segurança cross-tenant: storageKey deve pertencer ao tenant; papel/tipo idem
  const prefixo = `contratos/${clienteId}/`;
  if (d.documentos.some((doc) => !doc.storageKey.startsWith(prefixo))) {
    return { ok: false, erro: "Documento inválido" };
  }
  const papelIds = [...new Set(d.partes.map((p) => p.papelId).filter(Boolean))] as string[];
  const tipoIds = [...new Set(d.documentos.map((x) => x.tipoDocumentoId).filter(Boolean))] as string[];
  if (papelIds.length) {
    const ok = await prisma.papel.count({ where: { id: { in: papelIds }, clienteId } });
    if (ok !== papelIds.length) return { ok: false, erro: "Papel inválido" };
  }
  if (tipoIds.length) {
    const ok = await prisma.tipoDocumento.count({ where: { id: { in: tipoIds }, clienteId } });
    if (ok !== tipoIds.length) return { ok: false, erro: "Tipo de documento inválido" };
  }

  const contrato = await prisma.$transaction(async (tx) => {
    const c = await tx.contrato.create({
      data: {
        clienteId,
        remetenteId: user.id,
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
          email: p.email || null,
          celular: p.celular || null,
          ordem: i,
        },
      });
      if (p.papelId) {
        await tx.contratoPartePapel.create({
          data: { contratoParteId: parte.id, papelId: p.papelId },
        });
      }
    }
    for (const doc of d.documentos) {
      await tx.contratoDocumento.create({
        data: {
          contratoId: c.id,
          nomeDocumento: doc.nomeDocumento,
          storageKeyOriginal: doc.storageKey,
          sha256Original: doc.sha256 || null,
          tipoDocumentoId: doc.tipoDocumentoId || null,
          statusDocumento: "NAO_ASSINADO",
        },
      });
    }
    await tx.contratoLog.create({
      data: { contratoId: c.id, log: "Contrato criado", logSistema: true },
    });
    return c;
  });

  after(() => dispararWebhook(clienteId, "contrato.criado", { contratoId: contrato.id }).catch(() => {}));
  revalidatePath("/contratos");
  return { ok: true, id: contrato.id };
}
