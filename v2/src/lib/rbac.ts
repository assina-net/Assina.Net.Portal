// RBAC da v2 — autorização SEMPRE no servidor (corrige RoleGuard no-op da v1).
// Perfil global do usuário + perfil contextual por cliente (tenant) + checagem
// de propriedade do recurso. Use os helpers em toda server action / route handler.

import type { Perfil } from "@prisma/client";

// Hierarquia simplificada de perfis (maior número = mais poder).
const NIVEL: Record<Perfil, number> = {
  ROLE_ASSINADOR: 1,
  ROLE_INTEGRACAO: 1,
  ROLE_USUARIO: 2,
  ROLE_FINANCEIRO: 3,
  ROLE_ADMIN_CLIENTE: 4,
  ROLE_SUPORTE: 5,
  ROLE_DIRETORIA: 6,
  ROLE_ADMIN: 99,
};

export type SessionUser = {
  id: string;
  perfil: Perfil;
  clienteId: string | null; // cliente (tenant) ativo na sessão
};

export class AuthorizationError extends Error {
  constructor(msg = "Acesso negado") {
    super(msg);
    this.name = "AuthorizationError";
  }
}

/** Exige perfil mínimo. Lança AuthorizationError se insuficiente. */
export function exigePerfil(user: SessionUser | null, minimo: Perfil): SessionUser {
  if (!user) throw new AuthorizationError("Não autenticado");
  if (NIVEL[user.perfil] < NIVEL[minimo]) throw new AuthorizationError();
  return user;
}

/** Exige que o recurso pertença ao tenant ativo do usuário (corrige IDOR da v1). */
export function exigeTenant(user: SessionUser | null, recursoClienteId: string): SessionUser {
  if (!user) throw new AuthorizationError("Não autenticado");
  if (user.perfil === "ROLE_ADMIN") return user; // admin global
  if (!user.clienteId || user.clienteId !== recursoClienteId) throw new AuthorizationError();
  return user;
}

export function ehAdmin(user: SessionUser | null): boolean {
  return user?.perfil === "ROLE_ADMIN";
}

/**
 * Filtro de tenant para queries Prisma. Admin global (sem cliente) enxerga tudo;
 * demais ficam restritos ao seu clienteId. Função pura (testável).
 */
export function tenantWhere(user: SessionUser): { clienteId?: string } {
  if (user.perfil === "ROLE_ADMIN" && !user.clienteId) return {};
  return { clienteId: user.clienteId ?? "__sem_tenant__" };
}
