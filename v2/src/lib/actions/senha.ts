"use server";

import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { recuperarSenhaSchema } from "@/lib/schemas";
import { enviarEmail, emailRecuperacaoSenha } from "@/lib/email";
import { rateLimitIp, MIN } from "@/lib/ratelimit";

const BASE = process.env.AUTH_URL || "https://assinanet.simples.media";

/** Solicita recuperação: gera token e envia e-mail. Não revela se o usuário existe. */
export async function solicitarRecuperacao(formData: FormData) {
  if (!(await rateLimitIp("recsenha", 5, 60 * MIN))) {
    redirect("/recuperar-senha?enviado=1");
  }
  const identificador = String(formData.get("identificador") ?? "").trim();

  const usuario = identificador
    ? await prisma.usuario.findFirst({
        where: { OR: [{ login: identificador }, { pessoa: { email: identificador } }] },
        include: { pessoa: true },
      })
    : null;

  if (usuario?.pessoa?.email) {
    const token = randomUUID().replace(/-/g, "");
    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { chaveEsqueceuSenha: token, validadeEsqueceuSenha: new Date(Date.now() + 60 * 60 * 1000) },
    });
    await enviarEmail({
      para: usuario.pessoa.email,
      assunto: "Redefinição de senha — Assina.net",
      html: emailRecuperacaoSenha(usuario.pessoa.nomeRazaoSocial, `${BASE}/recuperar-senha/${token}`),
    });
  }

  redirect("/recuperar-senha?enviado=1");
}

/** Redefine a senha a partir de um token válido. */
export async function redefinirSenha(formData: FormData) {
  const token = String(formData.get("token") ?? "");
  const parsed = recuperarSenhaSchema.safeParse({ novaSenha: formData.get("novaSenha") });
  if (!parsed.success) {
    redirect(`/recuperar-senha/${token}?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }

  const usuario = await prisma.usuario.findFirst({
    where: { chaveEsqueceuSenha: token, validadeEsqueceuSenha: { gt: new Date() } },
  });
  if (!usuario) redirect(`/recuperar-senha/${token}?erro=Link%20inv%C3%A1lido%20ou%20expirado`);

  const senhaHash = await bcrypt.hash(parsed.data.novaSenha, 10);
  await prisma.usuario.update({
    where: { id: usuario.id },
    data: { senhaHash, chaveEsqueceuSenha: null, validadeEsqueceuSenha: null },
  });

  redirect("/login?redefinida=1");
}
