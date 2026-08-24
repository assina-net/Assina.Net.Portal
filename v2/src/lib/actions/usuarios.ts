"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { usuarioSchema as schema } from "@/lib/schemas";
import type { Perfil, TipoPessoa } from "@prisma/client";

export async function criarUsuario(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");

  const parsed = schema.safeParse({
    nome: formData.get("nome"),
    cpfCnpj: formData.get("cpfCnpj"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    perfil: formData.get("perfil"),
    tipoPessoa: formData.get("tipoPessoa"),
  });
  if (!parsed.success) {
    redirect(`/cadastros/usuarios/novo?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const clienteId = user.clienteId;
  if (!clienteId) redirect("/cadastros/usuarios?erro=Selecione%20um%20cliente");

  const d = parsed.data;
  const login = d.email.trim().toLowerCase(); // e-mail é o login
  const jaExiste = await prisma.usuario.findUnique({ where: { login } });
  if (jaExiste) redirect("/cadastros/usuarios/novo?erro=J%C3%A1%20existe%20usu%C3%A1rio%20com%20este%20e-mail");

  const senhaHash = await bcrypt.hash(d.senha, 10);

  // cria Pessoa + Usuario + vínculo ao cliente em UMA transação (atômico)
  await prisma.$transaction(async (tx) => {
    const pessoa = await tx.pessoa.create({
      data: {
        tipoPessoa: d.tipoPessoa as TipoPessoa,
        cpfCnpj: d.cpfCnpj,
        nomeRazaoSocial: d.nome,
        email: d.email,
        clienteId,
      },
    });
    const novo = await tx.usuario.create({
      // criado por admin → e-mail já validado (acesso imediato, sem confirmação)
      data: { login, senhaHash, perfil: d.perfil as Perfil, pessoaId: pessoa.id, emailVerificadoEm: new Date() },
    });
    await tx.usuarioCliente.create({
      data: { usuarioId: novo.id, clienteId, perfil: d.perfil as Perfil },
    });
  });

  revalidatePath("/cadastros/usuarios");
  redirect("/cadastros/usuarios");
}
