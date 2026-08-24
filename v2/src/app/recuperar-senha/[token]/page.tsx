import { redefinirSenha } from "@/lib/actions/senha";

export default async function RedefinirSenhaPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ erro?: string }>;
}) {
  const { token } = await params;
  const sp = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy p-4">
      <form action={redefinirSenha} className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex flex-col items-center bg-brand-slate px-8 py-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="h-8" />
        </div>
        <div className="p-8">
          <h1 className="font-heading text-xl font-semibold text-brand-slate">Nova senha</h1>
          <p className="mb-5 mt-1 text-sm text-gray-500">Defina sua nova senha de acesso.</p>
          {sp.erro && (
            <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
          )}
          <input type="hidden" name="token" value={token} />
          <input
            name="novaSenha"
            type="password"
            required
            placeholder="Nova senha (mín. 6)"
            className="mb-4 h-11 w-full rounded-md border border-gray-300 px-3 focus:border-brand-blueLight focus:outline-none"
          />
          <button className="h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark">
            Redefinir senha
          </button>
        </div>
      </form>
    </main>
  );
}
