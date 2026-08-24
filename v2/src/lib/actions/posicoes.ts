"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil, exigeTenant } from "@/lib/rbac";

const posicaoSchema = z.object({
  contratoDocumentoId: z.string().uuid(),
  contratoParteId: z.string().uuid(),
  pagina: z.number().int().min(0),
  x: z.number().min(0).max(1),
  y: z.number().min(0).max(1),
  largura: z.number().min(0).max(1),
  altura: z.number().min(0).max(1),
});

export async function salvarPosicoes(contratoId: string, posicoes: unknown) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_USUARIO");

  const parsed = z.array(posicaoSchema).safeParse(posicoes);
  if (!parsed.success) return { ok: false as const, erro: "Posições inválidas" };

  const contrato = await prisma.contrato.findUnique({
    where: { id: contratoId },
    include: { documentos: { select: { id: true } }, partes: { select: { id: true } } },
  });
  if (!contrato) return { ok: false as const, erro: "Contrato inexistente" };
  exigeTenant(user, contrato.clienteId);

  const docIds = new Set(contrato.documentos.map((d) => d.id));
  const parteIds = new Set(contrato.partes.map((p) => p.id));
  // tudo precisa pertencer a este contrato (anti cross-tenant/cross-contrato)
  if (parsed.data.some((p) => !docIds.has(p.contratoDocumentoId) || !parteIds.has(p.contratoParteId))) {
    return { ok: false as const, erro: "Documento ou parte inválidos" };
  }

  await prisma.$transaction(async (tx) => {
    await tx.contratoPosicaoAssinatura.deleteMany({
      where: { contratoDocumentoId: { in: [...docIds] } },
    });
    if (parsed.data.length) {
      await tx.contratoPosicaoAssinatura.createMany({ data: parsed.data });
    }
  });

  revalidatePath(`/contratos/${contratoId}`);
  return { ok: true as const };
}
