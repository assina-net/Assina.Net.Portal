"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { randomUUID } from "crypto";
import { registrarSchema } from "@/lib/schemas";
import { enviarEmail, emailConfirmacaoCadastro } from "@/lib/email";
import { seedCatalogoPadrao } from "@/lib/seed-cliente";
import { rateLimitIp, MIN } from "@/lib/ratelimit";
import type { TipoPessoa } from "@prisma/client";

const BASE = process.env.AUTH_URL || "https://assinanet.simples.media";

/** Cadastro self-service de novo cliente: cria Cliente + Pessoa + usuário admin. */
export async function registrarCliente(formData: FormData) {
  if (!(await rateLimitIp("registrar", 5, 60 * MIN))) {
    redirect("/registrar?erro=Muitas%20tentativas.%20Tente%20mais%20tarde.");
  }
  const parsed = registrarSchema.safeParse({
    nomeRazaoSocial: formData.get("nomeRazaoSocial"),
    tipoPessoa: formData.get("tipoPessoa"),
    cpfCnpj: formData.get("cpfCnpj"),
    email: formData.get("email"),
    senha: formData.get("senha"),
  });
  if (!parsed.success) {
    redirect(`/registrar?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const d = parsed.data;
  const login = d.email.trim().toLowerCase(); // e-mail é o login

  const loginExiste = await prisma.usuario.findUnique({ where: { login } });
  if (loginExiste) redirect("/registrar?erro=J%C3%A1%20existe%20conta%20com%20este%20e-mail");

  const senhaHash = await bcrypt.hash(d.senha, 10);
  const tokenVerificacao = randomUUID().replace(/-/g, "");

  await prisma.$transaction(async (tx) => {
    // pessoa "dona" do cliente (empresa/pessoa)
    const pessoaCliente = await tx.pessoa.create({
      data: {
        tipoPessoa: d.tipoPessoa as TipoPessoa,
        cpfCnpj: d.cpfCnpj,
        nomeRazaoSocial: d.nomeRazaoSocial,
        email: d.email,
      },
    });
    const cliente = await tx.cliente.create({ data: { pessoaId: pessoaCliente.id } });

    // pessoa do usuário admin + usuário
    const pessoaUser = await tx.pessoa.create({
      data: {
        tipoPessoa: d.tipoPessoa as TipoPessoa,
        cpfCnpj: d.cpfCnpj,
        nomeRazaoSocial: d.nomeRazaoSocial,
        email: d.email,
        clienteId: cliente.id,
      },
    });
    const usuario = await tx.usuario.create({
      data: { login, senhaHash, perfil: "ROLE_ADMIN_CLIENTE", pessoaId: pessoaUser.id, tokenVerificacao },
    });
    await tx.usuarioCliente.create({
      data: { usuarioId: usuario.id, clienteId: cliente.id, perfil: "ROLE_ADMIN_CLIENTE" },
    });
    // catálogo inicial (papéis + tipos de documento) p/ já conseguir usar
    await seedCatalogoPadrao(tx, cliente.id);
  });

  await enviarEmail({
    para: login,
    assunto: "Confirme seu e-mail — Assina.net",
    html: emailConfirmacaoCadastro(d.nomeRazaoSocial, `${BASE}/confirmar-email/${tokenVerificacao}`),
  });

  redirect("/login?confirmar=1");
}

/** Confirma o e-mail a partir do token. */
export async function confirmarEmail(token: string): Promise<boolean> {
  const usuario = await prisma.usuario.findFirst({ where: { tokenVerificacao: token } });
  if (!usuario) return false;
  await prisma.usuario.update({
    where: { id: usuario.id },
    data: { emailVerificadoEm: new Date(), tokenVerificacao: null },
  });
  return true;
}

/** Reenvia o e-mail de confirmação. Não revela se a conta existe. */
export async function reenviarConfirmacao(formData: FormData) {
  if (!(await rateLimitIp("reconfirma", 5, 60 * MIN))) {
    redirect("/confirmar-email?enviado=1");
  }
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const usuario = email
    ? await prisma.usuario.findUnique({ where: { login: email }, include: { pessoa: true } })
    : null;
  if (usuario && !usuario.emailVerificadoEm) {
    const tokenVerificacao = randomUUID().replace(/-/g, "");
    await prisma.usuario.update({ where: { id: usuario.id }, data: { tokenVerificacao } });
    await enviarEmail({
      para: usuario.login,
      assunto: "Confirme seu e-mail — Assina.net",
      html: emailConfirmacaoCadastro(usuario.pessoa.nomeRazaoSocial, `${BASE}/confirmar-email/${tokenVerificacao}`),
    });
  }
  redirect("/confirmar-email?enviado=1");
}
