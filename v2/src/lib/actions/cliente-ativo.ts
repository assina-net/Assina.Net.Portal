"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { COOKIE_CLIENTE } from "@/lib/session";

/** Troca o cliente (tenant) ativo da sessão, validando o vínculo do usuário. */
export async function trocarCliente(formData: FormData) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const clienteId = String(formData.get("clienteId") ?? "");

  // só permite trocar para um cliente ao qual o usuário pertence
  if (session.user.clienteIds?.includes(clienteId)) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_CLIENTE, clienteId, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  redirect("/dashboard");
}
