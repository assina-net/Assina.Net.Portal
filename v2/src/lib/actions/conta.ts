"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { trocarSenhaSchema } from "@/lib/schemas";

const PATH = "/conta/senha";

/** Troca a senha do próprio usuário logado (exige a senha atual). */
export async function trocarSenha(formData: FormData) {
  const user = await requireUser();
  const parsed = trocarSenhaSchema.safeParse({
    senhaAtual: formData.get("senhaAtual"),
    novaSenha: formData.get("novaSenha"),
  });
  if (!parsed.success) {
    redirect(`${PATH}?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const { senhaAtual, novaSenha } = parsed.data;

  const u = await prisma.usuario.findUnique({ where: { id: user.id }, select: { senhaHash: true } });
  if (!u) redirect(`${PATH}?erro=Usu%C3%A1rio%20inexistente`);

  const confere = await bcrypt.compare(senhaAtual, u.senhaHash);
  if (!confere) redirect(`${PATH}?erro=Senha%20atual%20incorreta`);

  if (senhaAtual === novaSenha) redirect(`${PATH}?erro=A%20nova%20senha%20deve%20ser%20diferente%20da%20atual`);

  await prisma.usuario.update({
    where: { id: user.id },
    data: { senhaHash: await bcrypt.hash(novaSenha, 10) },
  });
  redirect(`${PATH}?ok=1`);
}
