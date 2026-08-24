import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { rateLimit, MIN } from "@/lib/ratelimit";
import { authConfig } from "@/auth.config";

const credSchema = z.object({
  login: z.string().min(1),
  senha: z.string().min(1),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { login: {}, senha: {} },
      authorize: async (raw, request) => {
        const parsed = credSchema.safeParse(raw);
        if (!parsed.success) return null;
        const { login, senha } = parsed.data;

        // rate limit por IP (cobre também o endpoint raw do NextAuth) — 10/15min
        const ip =
          (request?.headers?.get?.("x-forwarded-for") ?? "").split(",")[0].trim() || "desconhecido";
        if (!(await rateLimit(`login:${ip}`, 10, 15 * MIN))) return null;

        const user = await prisma.usuario.findUnique({
          where: { login: login.trim().toLowerCase() }, // e-mail é o login
          include: { clientes: { where: { status: "ATIVO" }, orderBy: { createdAt: "asc" } } },
        });
        if (!user || user.status !== "ATIVO") return null;
        // exige e-mail confirmado antes de liberar o acesso
        if (!user.emailVerificadoEm) return null;

        // validação NO SERVIDOR (BCrypt) — corrige a falha da v1
        const ok = await bcrypt.compare(senha, user.senhaHash);
        if (!ok) return null;

        // lista de clientes (tenants) do usuário; ativo = 1º (ordem determinística)
        const clienteIds = user.clientes.map((c) => c.clienteId);
        const clienteId = clienteIds[0] ?? null;

        return {
          id: user.id,
          name: login,
          perfil: user.perfil,
          clienteId,
          clienteIds,
        };
      },
    }),
  ],
});
