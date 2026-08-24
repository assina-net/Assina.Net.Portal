import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { getConfig } from "@/lib/config-cliente";
import { PageHeader, Card, Field, SubmitButton } from "@/components/ui";
import { salvarConfig } from "@/lib/actions/config";

export default async function ParametrosPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; erro?: string }>;
}) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const sp = await searchParams;
  const cfg = user.clienteId ? await getConfig(user.clienteId) : null;

  return (
    <div className="max-w-xl">
      <PageHeader title="Parâmetros" subtitle="Configurações de assinatura do seu cliente" />
      {sp.ok && <p className="mb-4 rounded-md bg-success/10 px-3 py-2 text-sm text-green-700">Salvo!</p>}
      {sp.erro && <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{sp.erro}</p>}
      <Card>
        <form action={salvarConfig} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Prazo de expiração (dias)"
              name="prazoExpiracaoDias"
              type="number"
              defaultValue={String(cfg?.prazoExpiracaoDias ?? 30)}
            />
            <Field
              label="Lembrete após (dias)"
              name="prazoLembreteDias"
              type="number"
              defaultValue={String(cfg?.prazoLembreteDias ?? 3)}
            />
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Mensagem no e-mail de convite (opcional)
            </span>
            <textarea
              name="mensagemConvite"
              rows={3}
              defaultValue={cfg?.mensagemConvite ?? ""}
              placeholder="Ex.: Por favor, assine até sexta-feira. Dúvidas: contato@..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-brand-blueLight focus:outline-none"
            />
          </label>
          <p className="text-xs text-gray-400">
            Expiração: contratos liberados sem assinatura por mais de N dias são cancelados automaticamente.
            Lembrete: signatários pendentes recebem um e-mail após N dias.
          </p>
          <SubmitButton>Salvar parâmetros</SubmitButton>
        </form>
      </Card>
    </div>
  );
}
