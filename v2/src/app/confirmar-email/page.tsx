import { reenviarConfirmacao } from "@/lib/actions/registro";

export default async function ReenviarConfirmacaoPage({
  searchParams,
}: {
  searchParams: Promise<{ enviado?: string }>;
}) {
  const sp = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy p-4">
      <form action={reenviarConfirmacao} className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex flex-col items-center bg-brand-slate px-8 py-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="h-8" />
        </div>
        <div className="p-8">
          <h1 className="font-heading text-xl font-semibold text-brand-slate">Confirmar e-mail</h1>
          {sp.enviado ? (
            <p className="mt-4 rounded-md bg-success/10 px-3 py-3 text-sm text-green-700">
              Se houver uma conta pendente com esse e-mail, reenviamos o link de confirmação.
            </p>
          ) : (
            <>
              <p className="mb-5 mt-1 text-sm text-gray-500">
                Informe seu e-mail para reenviarmos o link de confirmação.
              </p>
              <input
                name="email"
                type="email"
                required
                placeholder="E-mail"
                className="mb-4 h-11 w-full rounded-md border border-gray-300 px-3 focus:border-brand-blueLight focus:outline-none"
              />
              <button className="h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark">
                Reenviar confirmação
              </button>
            </>
          )}
          <p className="mt-4 text-center text-sm text-gray-500">
            <a href="/login" className="text-brand-blue hover:underline">Voltar ao login</a>
          </p>
        </div>
      </form>
    </main>
  );
}
