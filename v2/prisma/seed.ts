// Seed inicial — cria um cliente piloto + usuário admin.
// Senha do admin vem de SEED_ADMIN_SENHA (salvar em pass assina.net/admin-login).
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const senha = process.env.SEED_ADMIN_SENHA;
  if (!senha) throw new Error("Defina SEED_ADMIN_SENHA no ambiente antes do seed.");

  const segmento = await prisma.segmento.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: { id: "00000000-0000-0000-0000-000000000001", nome: "Padrão" },
  });

  const plano = await prisma.plano.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: { id: "00000000-0000-0000-0000-000000000001", nome: "Piloto", periodo: "MENSAL", quantidadeDocumentos: 1000 },
  });

  const pessoa = await prisma.pessoa.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      tipoPessoa: "JURIDICA",
      cpfCnpj: "00000000000000",
      nomeRazaoSocial: "Simples Media (piloto)",
      email: "contato@crm.simples.media",
    },
  });

  const cliente = await prisma.cliente.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      pessoaId: pessoa.id,
      segmentoId: segmento.id,
      planoId: plano.id,
    },
  });

  const pessoaAdmin = await prisma.pessoa.upsert({
    where: { id: "00000000-0000-0000-0000-000000000002" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000002",
      tipoPessoa: "FISICA",
      cpfCnpj: "00000000000",
      nomeRazaoSocial: "Administrador",
      email: "contato@crm.simples.media",
      clienteId: cliente.id,
    },
  });

  const senhaHash = await bcrypt.hash(senha, 10);
  const admin = await prisma.usuario.upsert({
    where: { login: "admin" },
    update: { senhaHash, perfil: "ROLE_ADMIN", status: "ATIVO" },
    create: { login: "admin", senhaHash, perfil: "ROLE_ADMIN", pessoaId: pessoaAdmin.id },
  });

  await prisma.usuarioCliente.upsert({
    where: { usuarioId_clienteId: { usuarioId: admin.id, clienteId: cliente.id } },
    update: { perfil: "ROLE_ADMIN_CLIENTE" },
    create: { usuarioId: admin.id, clienteId: cliente.id, perfil: "ROLE_ADMIN_CLIENTE" },
  });

  console.log("Seed OK — login: admin / cliente piloto:", cliente.id);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
