"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil, exigeTenant } from "@/lib/rbac";
import { tipoDocumentoSchema as schema } from "@/lib/schemas";

export async function salvarTipoDocumento(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");

  const id = String(formData.get("id") ?? "");
  const parsed = schema.safeParse({
    nome: formData.get("nome"),
    identificacao: formData.get("identificacao") || undefined,
    assina: formData.get("assina") === "on",
    qrcode: formData.get("qrcode") === "on",
    validacaoOnLine: formData.get("validacaoOnLine") === "on",
  });
  if (!parsed.success) {
    redirect(`/cadastros/tipos-documento/${id || "novo"}?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const clienteId = user.clienteId;
  if (!clienteId) redirect("/cadastros/tipos-documento?erro=Selecione%20um%20cliente");

  if (id) {
    const atual = await prisma.tipoDocumento.findUnique({ where: { id } });
    if (!atual?.clienteId) redirect("/cadastros/tipos-documento?erro=Inexistente");
    exigeTenant(user, atual.clienteId);
    await prisma.tipoDocumento.update({ where: { id }, data: parsed.data });
  } else {
    await prisma.tipoDocumento.create({ data: { ...parsed.data, clienteId } });
  }

  revalidatePath("/cadastros/tipos-documento");
  redirect("/cadastros/tipos-documento");
}

export async function alternarStatusTipoDocumento(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const id = String(formData.get("id") ?? "");
  const atual = await prisma.tipoDocumento.findUnique({ where: { id } });
  if (!atual?.clienteId) redirect("/cadastros/tipos-documento?erro=Inexistente");
  exigeTenant(user, atual.clienteId);
  await prisma.tipoDocumento.update({
    where: { id },
    data: { status: atual.status === "ATIVO" ? "INATIVO" : "ATIVO" },
  });
  revalidatePath("/cadastros/tipos-documento");
}
