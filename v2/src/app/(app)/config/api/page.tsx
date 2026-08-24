import { requireUser } from "@/lib/session";
import { exigePerfil } from "@/lib/rbac";
import { prisma } from "@/lib/db";
import { PageHeader, Card, Table, Empty, StatusBadge } from "@/components/ui";
import { fmtDataHora } from "@/lib/format";
import { EVENTOS } from "@/lib/webhooks";
import { NovaChaveForm } from "./nova-chave-form";
import { revogarApiKey, criarWebhook, removerWebhook } from "@/lib/actions/integracao";

export default async function ApiPage() {
  const user = await requireUser();
  exigePerfil(user, "ROLE_ADMIN_CLIENTE");
  const clienteId = user.clienteId!;

  const [chaves, webhooks] = await Promise.all([
    prisma.apiKey.findMany({ where: { clienteId }, orderBy: { createdAt: "desc" } }),
    prisma.webhook.findMany({ where: { clienteId }, orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <div className="max-w-3xl space-y-8">
      <PageHeader title="API & Webhooks" subtitle="Integre sistemas externos ao Assina.net" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">Chaves de API</h2>
        <Card>
          <NovaChaveForm />
        </Card>
        {chaves.length === 0 ? (
          <Empty>Nenhuma chave criada ainda.</Empty>
        ) : (
          <Table head={["Nome", "Prefixo", "Último uso", "Status", ""]}>
            {chaves.map((k) => (
              <tr key={k.id} className="border-t">
                <td className="px-4 py-2">{k.nome}</td>
                <td className="px-4 py-2 font-mono text-sm">{k.prefixo}…</td>
                <td className="px-4 py-2 text-sm text-gray-500">{k.ultimoUso ? fmtDataHora(k.ultimoUso) : "—"}</td>
                <td className="px-4 py-2"><StatusBadge ativo={k.status === "ATIVO"} /></td>
                <td className="px-4 py-2 text-right">
                  {k.status === "ATIVO" && (
                    <form action={revogarApiKey}>
                      <input type="hidden" name="id" value={k.id} />
                      <button className="text-sm text-red-600 hover:underline">Revogar</button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </Table>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">Webhooks</h2>
        <Card>
          <form action={criarWebhook} className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">URL de destino (HTTPS)</span>
              <input
                name="url"
                type="url"
                required
                placeholder="https://seu-sistema.com/webhooks/assinanet"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-brand-blueLight focus:outline-none"
              />
            </label>
            <fieldset>
              <legend className="mb-1 text-sm font-medium text-gray-700">Eventos (vazio = todos)</legend>
              <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {EVENTOS.map((e) => (
                  <label key={e} className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="eventos" value={e} /> {e}
                  </label>
                ))}
              </div>
            </fieldset>
            <button className="rounded-md bg-success px-4 py-2 font-medium text-white hover:opacity-90">
              Adicionar webhook
            </button>
          </form>
        </Card>
        {webhooks.length === 0 ? (
          <Empty>Nenhum webhook configurado.</Empty>
        ) : (
          <Table head={["URL", "Eventos", "Secret", "Status", ""]}>
            {webhooks.map((w) => (
              <tr key={w.id} className="border-t">
                <td className="px-4 py-2 break-all text-sm">{w.url}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{w.eventos === "*" ? "todos" : w.eventos}</td>
                <td className="px-4 py-2 font-mono text-xs text-gray-500">{w.secret.slice(0, 12)}…</td>
                <td className="px-4 py-2"><StatusBadge ativo={w.status === "ATIVO"} /></td>
                <td className="px-4 py-2 text-right">
                  <form action={removerWebhook}>
                    <input type="hidden" name="id" value={w.id} />
                    <button className="text-sm text-red-600 hover:underline">Remover</button>
                  </form>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </section>

      <section className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
        <h3 className="mb-2 font-semibold text-gray-800">Como usar</h3>
        <p className="mb-2">Autentique com a chave no header <code className="rounded bg-white px-1">Authorization: Bearer ak_live_…</code></p>
        <ul className="list-inside list-disc space-y-1">
          <li><code className="font-mono">POST /api/v1/contratos</code> — cria um contrato (documentos em base64; <code>liberar:true</code> envia na hora)</li>
          <li><code className="font-mono">GET /api/v1/contratos/:id</code> — status, partes e documentos</li>
          <li><code className="font-mono">GET /api/v1/contratos/:id/documentos/:docId</code> — URL para baixar o PDF assinado</li>
        </ul>
        <p className="mt-2">Webhooks são assinados em <code className="rounded bg-white px-1">X-Assinanet-Signature: sha256=…</code> (HMAC do corpo com o secret).</p>
      </section>
    </div>
  );
}
