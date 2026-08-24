import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextResponse } from "next/server";

// Instância edge-safe (sem Prisma) só p/ checar o JWT no middleware.
const { auth } = NextAuth(authConfig);

// Protege a área logada. Rotas públicas: login, assinar/[chave], validar/[codigo], api/auth.
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const publico =
    pathname === "/login" ||
    pathname === "/registrar" ||
    pathname === "/validar" ||
    pathname === "/assinador" ||
    pathname.startsWith("/recuperar-senha") ||
    pathname.startsWith("/confirmar-email") ||
    pathname.startsWith("/assinar/") ||
    pathname.startsWith("/validar/") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/cron") ||
    pathname.startsWith("/api/v1");

  if (!isLoggedIn && !publico) {
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
  }
  return NextResponse.next();
});

export const config = {
  // NÃO rodar nas rotas do Auth.js (evita cookie CSRF duplicado / MissingCSRF)
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|svg|ico)$).*)"],
};
