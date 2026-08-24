import { PrismaClient } from "@prisma/client";

// Singleton do Prisma. connection_limit baixo no piloto: o RDS é compartilhado
// (t4g.small ~181 conexões) com zeroaudio/cmei — não competir. Ajuste via URL
// (?connection_limit=5) se necessário em produção/Lambda.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

// fixa no global SEMPRE (inclui Lambda warm) p/ não criar pools órfãos
globalForPrisma.prisma = prisma;
