"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";

const schema = z.object({
  prazoExpiracaoDias: z.coerce.number().int().min(1).max(365),
  prazoLembreteDias: z.coerce.number().int().min(1).max(365),
  mensagemConvite: z.string().max(500).optional(),
});

export async function salvarConfig(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const clienteId = user.clienteId;
  if (!clienteId) redirect("/config/parametros?erro=Selecione%20um%20cliente");

  const parsed = schema.safeParse({
    prazoExpiracaoDias: formData.get("prazoExpiracaoDias"),
    prazoLembreteDias: formData.get("prazoLembreteDias"),
    mensagemConvite: formData.get("mensagemConvite") || undefined,
  });
  if (!parsed.success) redirect(`/config/parametros?erro=${encodeURIComponent(parsed.error.issues[0].message)}`);
  const d = parsed.data;

  await prisma.configuracaoCliente.upsert({
    where: { clienteId },
    create: { clienteId, ...d, mensagemConvite: d.mensagemConvite ?? null },
    update: { ...d, mensagemConvite: d.mensagemConvite ?? null },
  });

  revalidatePath("/config/parametros");
  redirect("/config/parametros?ok=1");
}
