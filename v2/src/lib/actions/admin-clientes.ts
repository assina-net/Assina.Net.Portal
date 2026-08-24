"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { clienteAdminSchema } from "@/lib/schemas";
import { seedCatalogoPadrao } from "@/lib/seed-cliente";
import type { TipoPessoa } from "@prisma/client";

const NOVO = "/admin/clientes/novo";

/**
 * Cadastra um novo CLIENTE (tenant) — ação do admin da plataforma. Cria a empresa,
 * um usuário administrador do cliente (e-mail já validado) e o catálogo inicial.
 */
export async function criarClienteAdmin(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN"); // só admin global cria tenants

  const parsed = clienteAdminSchema.safeParse({
    nomeRazaoSocial: formData.get("nomeRazaoSocial"),
    tipoPessoa: formData.get("tipoPessoa"),
    cpfCnpj: formData.get("cpfCnpj"),
    adminNome: formData.get("adminNome"),
    adminEmail: formData.get("adminEmail"),
    adminSenha: formData.get("adminSenha"),
  });
  if (!parsed.success) {
    redirect(`${NOVO}?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  }
  const d = parsed.data;
  const login = d.adminEmail.trim().toLowerCase();

  const jaExiste = await prisma.usuario.findUnique({ where: { login } });
  if (jaExiste) redirect(`${NOVO}?erro=J%C3%A1%20existe%20usu%C3%A1rio%20com%20este%20e-mail`);

  const senhaHash = await bcrypt.hash(d.adminSenha, 10);
  let novoClienteId = "";

  await prisma.$transaction(async (tx) => {
    const pessoaCliente = await tx.pessoa.create({
      data: {
        tipoPessoa: d.tipoPessoa as TipoPessoa,
        cpfCnpj: d.cpfCnpj,
        nomeRazaoSocial: d.nomeRazaoSocial,
        email: d.adminEmail,
      },
    });
    const cliente = await tx.cliente.create({ data: { pessoaId: pessoaCliente.id } });
    novoClienteId = cliente.id;

    const pessoaUser = await tx.pessoa.create({
      data: {
        tipoPessoa: "FISICA",
        cpfCnpj: d.cpfCnpj,
        nomeRazaoSocial: d.adminNome,
        email: d.adminEmail,
        clienteId: cliente.id,
      },
    });
    const usuario = await tx.usuario.create({
      data: { login, senhaHash, perfil: "ROLE_ADMIN_CLIENTE", pessoaId: pessoaUser.id, emailVerificadoEm: new Date() },
    });
    await tx.usuarioCliente.create({
      data: { usuarioId: usuario.id, clienteId: cliente.id, perfil: "ROLE_ADMIN_CLIENTE" },
    });
    await seedCatalogoPadrao(tx, cliente.id);
  });

  revalidatePath("/admin/clientes");
  redirect(`/admin/clientes?ok=${encodeURIComponent(d.nomeRazaoSocial)}`);
}

/** Ativa/inativa um cliente. */
export async function alternarStatusCliente(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN");
  const id = String(formData.get("id") ?? "");
  const ativo = String(formData.get("ativo") ?? "") === "1";
  await prisma.cliente.update({ where: { id }, data: { status: ativo ? "INATIVO" : "ATIVO" } });
  revalidatePath("/admin/clientes");
}
