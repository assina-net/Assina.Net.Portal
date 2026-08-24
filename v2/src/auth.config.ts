import type { NextAuthConfig } from "next-auth";
import type { Perfil } from "@prisma/client";

// Config edge-safe: SEM Prisma. Usada pelo middleware (runtime edge do OpenNext).
// O auth.ts completo (com Credentials + Prisma) estende isto no servidor Node.
export const authConfig = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  trustHost: true,
  providers: [], // preenchido em auth.ts (servidor)
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.perfil = (user as { perfil: Perfil }).perfil;
        token.clienteId = (user as { clienteId: string | null }).clienteId;
        token.clienteIds = (user as { clienteIds?: string[] }).clienteIds ?? [];
        token.uid = (user as { id: string }).id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.uid as string;
        session.user.perfil = token.perfil as Perfil;
        session.user.clienteId = (token.clienteId as string | null) ?? null;
        session.user.clienteIds = (token.clienteIds as string[]) ?? [];
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
