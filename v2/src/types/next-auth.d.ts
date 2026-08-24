import type { Perfil } from "@prisma/client";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      perfil: Perfil;
      clienteId: string | null;
      clienteIds: string[];
      name?: string | null;
      email?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid?: string;
    perfil?: Perfil;
    clienteId?: string | null;
    clienteIds?: string[];
  }
}
