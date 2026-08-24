import { registrarCliente } from "@/lib/actions/registro";
import { DocumentoInput } from "@/components/documento-input";

export default async function RegistrarPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const sp = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy p-4">
      <form
        action={registrarCliente}
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl"
      >
        <div className="flex flex-col items-center bg-brand-slate px-8 py-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="h-8" />
        </div>
        <div className="p-8">
          <h1 className="font-heading text-xl font-semibold text-brand-slate">Criar conta</h1>
          <p className="mb-6 mt-1 text-sm text-gray-500">Cadastre sua empresa para começar a assinar.</p>

          {sp.erro && (
            <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{sp.erro}</p>
          )}

          <div className="space-y-4">
            <Campo label="Nome / Razão social" name="nomeRazaoSocial" required />
            <DocumentoInput defaultTipo="JURIDICA" />
            <Campo label="E-mail (será seu login)" name="email" type="email" required />
            <Campo label="Senha" name="senha" type="password" required />
          </div>

          <button
            type="submit"
            className="mt-6 h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark"
          >
            Criar conta
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Já tem conta?{" "}
            <a href="/login" className="text-brand-blue hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </form>
    </main>
  );
}

function Campo({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-10 w-full rounded-md border border-gray-300 px-3 text-gray-900 focus:border-brand-blueLight focus:outline-none"
      />
    </label>
  );
}
