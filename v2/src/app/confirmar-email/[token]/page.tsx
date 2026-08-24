import { confirmarEmail } from "@/lib/actions/registro";
import { redirect } from "next/navigation";

export default async function ConfirmarEmailPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const ok = await confirmarEmail(token);
  if (ok) redirect("/login?confirmado=1");

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mb-2 text-4xl">⚠️</div>
        <h1 className="text-xl font-semibold text-gray-800">Link inválido ou já usado</h1>
        <p className="mt-2 text-sm text-gray-500">
          O link de confirmação não é mais válido.
        </p>
        <a href="/confirmar-email" className="mt-4 inline-block text-sm text-brand-blue hover:underline">
          Reenviar confirmação
        </a>
      </div>
    </main>
  );
}
