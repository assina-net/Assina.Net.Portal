import { describe, it, expect } from "vitest";
import {
  exigePerfil,
  exigeTenant,
  ehAdmin,
  tenantWhere,
  AuthorizationError,
  type SessionUser,
} from "./rbac";

const admin: SessionUser = { id: "a", perfil: "ROLE_ADMIN", clienteId: null };
const adminCliente: SessionUser = { id: "b", perfil: "ROLE_ADMIN_CLIENTE", clienteId: "c1" };
const usuario: SessionUser = { id: "c", perfil: "ROLE_USUARIO", clienteId: "c1" };
const assinador: SessionUser = { id: "d", perfil: "ROLE_ASSINADOR", clienteId: "c1" };

describe("exigePerfil", () => {
  it("permite perfil igual ou superior", () => {
    expect(exigePerfil(adminCliente, "ROLE_ADMIN_CLIENTE")).toBe(adminCliente);
    expect(exigePerfil(admin, "ROLE_ADMIN_CLIENTE")).toBe(admin);
  });
  it("bloqueia perfil inferior", () => {
    expect(() => exigePerfil(usuario, "ROLE_ADMIN_CLIENTE")).toThrow(AuthorizationError);
    expect(() => exigePerfil(assinador, "ROLE_USUARIO")).toThrow(AuthorizationError);
  });
  it("bloqueia não autenticado", () => {
    expect(() => exigePerfil(null, "ROLE_USUARIO")).toThrow(AuthorizationError);
  });
});

describe("exigeTenant", () => {
  it("permite recurso do próprio cliente", () => {
    expect(exigeTenant(usuario, "c1")).toBe(usuario);
  });
  it("bloqueia recurso de outro cliente (IDOR)", () => {
    expect(() => exigeTenant(usuario, "c2")).toThrow(AuthorizationError);
  });
  it("admin global acessa qualquer tenant", () => {
    expect(exigeTenant(admin, "qualquer")).toBe(admin);
  });
  it("bloqueia não autenticado", () => {
    expect(() => exigeTenant(null, "c1")).toThrow(AuthorizationError);
  });
});

describe("ehAdmin", () => {
  it("identifica admin global", () => {
    expect(ehAdmin(admin)).toBe(true);
    expect(ehAdmin(adminCliente)).toBe(false);
    expect(ehAdmin(null)).toBe(false);
  });
});

describe("tenantWhere", () => {
  it("admin global sem cliente vê tudo (filtro vazio)", () => {
    expect(tenantWhere(admin)).toEqual({});
  });
  it("usuário fica restrito ao seu clienteId", () => {
    expect(tenantWhere(usuario)).toEqual({ clienteId: "c1" });
  });
  it("usuário sem cliente recebe sentinela que não casa nada", () => {
    const semCliente: SessionUser = { id: "x", perfil: "ROLE_USUARIO", clienteId: null };
    expect(tenantWhere(semCliente)).toEqual({ clienteId: "__sem_tenant__" });
  });
});
