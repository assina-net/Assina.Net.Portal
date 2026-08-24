import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; erro?: string }>;
}) {
  async function entrar(formData: FormData) {
    "use server";
    const login = String(formData.get("login") ?? "");
    const senha = String(formData.get("senha") ?? "");
    const callbackUrl = String(formData.get("callbackUrl") ?? "/dashboard");
    try {
      await signIn("credentials", { login, senha, redirectTo: callbackUrl });
    } catch (e) {
      if (e instanceof AuthError) redirect("/login?erro=1");
      throw e;
    }
  }

  return <LoginView action={entrar} searchParams={searchParams} />;
}

async function LoginView({
  action,
  searchParams,
}: {
  action: (fd: FormData) => Promise<void>;
  searchParams: Promise<{
    callbackUrl?: string;
    erro?: string;
    registrado?: string;
    redefinida?: string;
    confirmar?: string;
    confirmado?: string;
  }>;
}) {
  const sp = await searchParams;
  const sucesso = sp.registrado
    ? "Conta criada com sucesso! Faça login."
    : sp.redefinida
      ? "Senha redefinida! Faça login."
      : sp.confirmado
        ? "E-mail confirmado! Agora é só entrar."
        : sp.confirmar
          ? "Enviamos um e-mail de confirmação. Confirme para acessar a conta."
          : null;
  return (
    <main className="flex min-h-screen flex-col bg-brand-navy md:flex-row">
      {/* Lado esquerdo — logo decorativo da marca */}
      <section className="flex flex-1 items-center justify-center p-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/login-logo.png"
          alt="Assina.net"
          className="max-h-72 w-auto max-w-md opacity-95"
        />
      </section>

      {/* Lado direito — painel do formulário */}
      <form
        action={action}
        autoComplete="off"
        className="flex w-full flex-col justify-center bg-brand-slate px-8 py-12 text-white md:w-[28rem] md:px-12"
      >
        <h1 className="font-heading text-4xl font-semibold tracking-tight">Bem-vindo</h1>
        <p className="mb-8 mt-1 text-sm font-light text-white/80">Acesse sua conta</p>

        {sucesso && (
          <div className="mb-4 rounded-md bg-success/15 px-3 py-2 text-sm text-green-300">
            {sucesso}
          </div>
        )}

        <input type="hidden" name="callbackUrl" value={sp.callbackUrl ?? "/dashboard"} />

        <div className="relative mb-4">
          <input
            name="login"
            type="text"
            autoComplete="username"
            required
            autoFocus
            placeholder="E-mail"
            className="h-11 w-full rounded-md border border-gray-300 bg-[#f8f8f8] px-3 pr-10 text-gray-900 placeholder:text-gray-500 focus:border-brand-blueLight focus:outline-none"
          />
          <Icon path="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v1h18v-1c0-3.5-4-6-9-6z" />
        </div>

        <div className="relative mb-5">
          <input
            name="senha"
            type="password"
            required
            placeholder="Senha"
            className="h-11 w-full rounded-md border border-gray-300 bg-[#f8f8f8] px-3 pr-10 text-gray-900 placeholder:text-gray-500 focus:border-brand-blueLight focus:outline-none"
          />
          <Icon path="M17 9V7a5 5 0 00-10 0v2H5v12h14V9h-2zm-8 0V7a3 3 0 016 0v2H9z" />
        </div>

        {sp.erro && (
          <div className="mb-4 rounded-md bg-brand-blue/15 px-3 py-2 text-sm text-brand-blueLight">
            <strong>
              {sp.erro === "bloqueio"
                ? "Muitas tentativas. Aguarde alguns minutos e tente novamente."
                : "Login ou senha inválidos"}
            </strong>
          </div>
        )}

        <button
          type="submit"
          className="mb-6 h-11 w-full rounded-md bg-brand font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark"
        >
          Entrar
        </button>

        <div className="space-y-3 text-sm">
          <a className="block text-brand-blue hover:text-brand-blueLight" href="/recuperar-senha">
            Esqueceu a senha? Clique aqui.
          </a>
          <a className="block text-brand-blue hover:text-brand-blueLight" href="/registrar">
            Ainda não é cliente? Clique aqui.
          </a>
          <a className="block text-brand-blue hover:text-brand-blueLight" href="/confirmar-email">
            Não recebeu a confirmação? Reenviar.
          </a>
          <a className="block text-brand-blue hover:text-brand-blueLight" href="/validar">
            Clique aqui para validar um documento.
          </a>
        </div>
      </form>
    </main>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}
