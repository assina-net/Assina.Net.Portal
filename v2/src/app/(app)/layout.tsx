import { auth, signOut } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { COOKIE_CLIENTE } from "@/lib/session";
import { ClienteSwitcher } from "@/components/cliente-switcher";
import type { Perfil } from "@prisma/client";

// min: perfil mínimo p/ ver o item (default: qualquer logado).
const NAV: { section?: string; href: string; label: string; min?: Perfil }[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contratos", label: "Contratos" },
  { section: "Cadastros", href: "/cadastros/usuarios", label: "Usuários", min: "ROLE_ADMIN_CLIENTE" },
  { href: "/cadastros/papeis", label: "Papéis", min: "ROLE_ADMIN_CLIENTE" },
  { href: "/cadastros/tipos-documento", label: "Tipos de documento", min: "ROLE_ADMIN_CLIENTE" },
  { section: "Configurações", href: "/config/parametros", label: "Parâmetros", min: "ROLE_ADMIN_CLIENTE" },
  { href: "/config/api", label: "API & Webhooks", min: "ROLE_ADMIN_CLIENTE" },
  { href: "/conta/senha", label: "Trocar senha" },
  { section: "Admin", href: "/admin/clientes", label: "Clientes", min: "ROLE_ADMIN" },
];

// hierarquia de perfis (espelha NIVEL em rbac.ts) p/ filtrar o menu.
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

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  // multi-cliente: lista de empresas do usuário para o seletor
  const clienteIds = session.user.clienteIds ?? [];
  const clientes =
    clienteIds.length > 1
      ? (
          await prisma.cliente.findMany({
            where: { id: { in: clienteIds } },
            select: { id: true, pessoa: { select: { nomeRazaoSocial: true } } },
          })
        ).map((c) => ({ id: c.id, nome: c.pessoa.nomeRazaoSocial }))
      : [];
  const ativoCookie = (await cookies()).get(COOKIE_CLIENTE)?.value ?? null;
  const ativo = ativoCookie && clienteIds.includes(ativoCookie) ? ativoCookie : session.user.clienteId;

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-60 flex-col bg-brand-slate text-white">
        <div className="px-6 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="h-8" />
        </div>
        {clientes.length > 1 && <ClienteSwitcher clientes={clientes} ativo={ativo} />}
        <nav className="flex-1 px-3">
          {NAV.filter((i) => !i.min || NIVEL[session.user.perfil] >= NIVEL[i.min]).map((i) => (
            <div key={i.href}>
              {i.section && (
                <div className="mb-1 mt-4 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  {i.section}
                </div>
              )}
              <Link
                href={i.href}
                className="mb-1 block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {i.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="border-t border-white/10 px-4 py-4 text-xs text-white/70">
          <div className="mb-2">
            {session.user.name}
            <span className="ml-2 rounded bg-white/15 px-1.5 py-0.5">{session.user.perfil}</span>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button className="text-white/80 underline hover:text-white">Sair</button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
