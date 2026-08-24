"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { gerarApiKey } from "@/lib/api-auth";
import { gerarSecret, EVENTOS } from "@/lib/webhooks";

const PATH = "/config/api";

async function adminCliente() {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  if (!user.clienteId) throw new Error("Selecione um cliente");
  return user.clienteId;
}

/** Cria uma chave de API. Retorna a chave EM CLARO (exibida só agora). */
export async function criarApiKey(_prev: unknown, formData: FormData) {
  const clienteId = await adminCliente();
  const nome = String(formData.get("nome") ?? "").trim() || "Chave de API";
  const { chave, hash, prefixo } = gerarApiKey();
  await prisma.apiKey.create({ data: { clienteId, nome, chaveHash: hash, prefixo } });
  revalidatePath(PATH);
  return { ok: true, chave };
}

/** Revoga (inativa) uma chave de API do próprio cliente. */
export async function revogarApiKey(formData: FormData) {
  const clienteId = await adminCliente();
  const id = String(formData.get("id") ?? "");
  await prisma.apiKey.updateMany({ where: { id, clienteId }, data: { status: "INATIVO" } });
  revalidatePath(PATH);
}

/** Cria um webhook. Gera o secret automaticamente. */
export async function criarWebhook(formData: FormData) {
  const clienteId = await adminCliente();
  const url = String(formData.get("url") ?? "").trim();
  if (!/^https?:\/\/.+/.test(url)) throw new Error("URL inválida");
  // eventos: lista de checkboxes; vazio = "*" (todos)
  const sel = formData.getAll("eventos").map(String).filter((e) => (EVENTOS as readonly string[]).includes(e));
  const eventos = sel.length ? sel.join(",") : "*";
  await prisma.webhook.create({ data: { clienteId, url, secret: gerarSecret(), eventos } });
  revalidatePath(PATH);
}

/** Remove um webhook do próprio cliente. */
export async function removerWebhook(formData: FormData) {
  const clienteId = await adminCliente();
  const id = String(formData.get("id") ?? "");
  await prisma.webhook.deleteMany({ where: { id, clienteId } });
  revalidatePath(PATH);
}
