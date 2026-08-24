import { cookies } from "next/headers";
import { auth } from "@/auth";
import type { SessionUser } from "@/lib/rbac";

export const COOKIE_CLIENTE = "cliente_ativo";

/**
 * Usuário da sessão (server-side). O cliente ativo vem de um cookie (multi-cliente),
 * sempre validado contra a lista de clientes do usuário na sessão. Lança se não autenticado.
 */
export async function requireUser(): Promise<SessionUser> {
  const session = await auth();
  if (!session?.user) throw new Error("Não autenticado");

  const permitidos = session.user.clienteIds ?? [];
  const cookieStore = await cookies();
  const escolhido = cookieStore.get(COOKIE_CLIENTE)?.value;
  const clienteId =
    escolhido && permitidos.includes(escolhido) ? escolhido : session.user.clienteId;

  return {
    id: session.user.id,
    perfil: session.user.perfil,
    clienteId,
  };
}

// tenantWhere vive em rbac.ts (módulo puro/testável); re-exportado por conveniência.
export { tenantWhere } from "@/lib/rbac";
