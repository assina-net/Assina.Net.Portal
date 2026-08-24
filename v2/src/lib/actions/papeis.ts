"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil, exigeTenant } from "@/lib/rbac";
import { papelSchema as schema } from "@/lib/schemas";

export async function salvarPapel(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");

  const id = String(formData.get("id") ?? "");
  const parsed = schema.safeParse({
    nome: formData.get("nome"),
    identificacao: formData.get("identificacao"),
    assina: formData.get("assina") === "on",
  });
  if (!parsed.success) {
    redirect(`/cadastros/papeis/${id || "novo"}?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const clienteId = user.clienteId;
  if (!clienteId) redirect("/cadastros/papeis?erro=Selecione%20um%20cliente");

  if (id) {
    const atual = await prisma.papel.findUnique({ where: { id } });
    if (!atual) redirect("/cadastros/papeis?erro=Papel%20inexistente");
    exigeTenant(user, atual.clienteId);
    await prisma.papel.update({ where: { id }, data: parsed.data });
  } else {
    await prisma.papel.create({ data: { ...parsed.data, clienteId } });
  }

  revalidatePath("/cadastros/papeis");
  redirect("/cadastros/papeis");
}

export async function alternarStatusPapel(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const id = String(formData.get("id") ?? "");
  const atual = await prisma.papel.findUnique({ where: { id } });
  if (!atual) redirect("/cadastros/papeis?erro=Papel%20inexistente");
  exigeTenant(user, atual.clienteId);
  await prisma.papel.update({
    where: { id },
    data: { status: atual.status === "ATIVO" ? "INATIVO" : "ATIVO" },
  });
  revalidatePath("/cadastros/papeis");
}
