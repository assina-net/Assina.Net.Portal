import { headers } from "next/headers";
import { prisma } from "@/lib/db";

/** IP do cliente a partir dos headers (CloudFront/Lambda). */
export async function clientIp(): Promise<string> {
  const h = await headers();
  return (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "desconhecido";
}

/**
 * Rate limit por janela fixa, compartilhado entre Lambdas via Postgres.
 * Retorna true se a ação é permitida; false se excedeu o limite.
 */
export async function rateLimit(chave: string, limite: number, janelaMs: number): Promise<boolean> {
  const agora = new Date();
  const inicioValido = new Date(agora.getTime() - janelaMs);

  const atual = await prisma.rateLimit.findUnique({ where: { chave } });
  if (!atual || atual.windowStart < inicioValido) {
    // nova janela
    await prisma.rateLimit.upsert({
      where: { chave },
      create: { chave, windowStart: agora, count: 1 },
      update: { windowStart: agora, count: 1 },
    });
    return true;
  }
  if (atual.count >= limite) return false;
  await prisma.rateLimit.update({ where: { chave }, data: { count: { increment: 1 } } });
  return true;
}

/** Conveniência: limita por IP com um prefixo. */
export async function rateLimitIp(prefixo: string, limite: number, janelaMs: number): Promise<boolean> {
  const ip = await clientIp();
  return rateLimit(`${prefixo}:${ip}`, limite, janelaMs);
}

export const MIN = 60_000;
