import { redirect } from "next/navigation";

export default function ValidarEntradaPage() {
  async function ir(formData: FormData) {
    "use server";
    const codigo = String(formData.get("codigo") ?? "").trim();
    if (codigo) redirect(`/validar/${encodeURIComponent(codigo)}`);
    redirect("/validar");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form action={ir} className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <div className="mb-4 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="mx-auto h-8 rounded bg-brand-navy px-3 py-2" />
        </div>
        <h1 className="font-heading text-xl font-semibold text-brand-slate">Validar documento</h1>
        <p className="mb-5 mt-1 text-sm text-gray-500">
          Informe o código de validação (encontrado no rodapé/QR do documento assinado).
        </p>
        <input
          name="codigo"
          required
          placeholder="Código de validação"
          className="mb-4 h-11 w-full rounded-md border border-gray-300 px-3 focus:border-brand-blueLight focus:outline-none"
        />
        <button className="h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark">
          Validar
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          <a href="/login" className="text-brand-blue hover:underline">Voltar ao login</a>
        </p>
      </form>
    </main>
  );
}
