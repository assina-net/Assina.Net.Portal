import Link from "next/link";
import { requireUser } from "@/lib/session";
import { metricas } from "@/lib/relatorios";

const CARDS: { status: string; label: string; cor: string }[] = [
  { status: "LIBERADO_ASSINATURA", label: "Aguardando", cor: "bg-amber-50 text-amber-700" },
  { status: "PARCIALMENTE_ASSINADO", label: "Parciais", cor: "bg-blue-50 text-blue-700" },
  { status: "ASSINADO", label: "Assinados", cor: "bg-emerald-50 text-emerald-700" },
  { status: "RECUSADO", label: "Recusados", cor: "bg-red-50 text-red-700" },
  { status: "CANCELADO", label: "Cancelados", cor: "bg-gray-100 text-gray-600" },
];

export default async function DashboardPage() {
  const user = await requireUser();
  const m = await metricas(user.clienteId ?? undefined);
  const maxMes = Math.max(1, ...m.assinaturasPorMes.map((x) => x.total));

  return (
    <div>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="mb-1 text-2xl font-semibold">Painel</h1>
          <p className="text-sm text-gray-500">Visão geral dos contratos e assinaturas</p>
        </div>
        <a
          href="/api/relatorios/contratos"
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          ⬇ Exportar CSV
        </a>
      </div>

      {/* cartões de status */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CARDS.map((c) => (
          <div key={c.status} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <span className={`inline-block rounded px-2 py-0.5 text-xs ${c.cor}`}>{c.label}</span>
            <div className="mt-3 text-3xl font-bold">{m.porStatus[c.status] ?? 0}</div>
          </div>
        ))}
      </div>

      {/* indicadores */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-gray-500">Total de contratos</div>
          <div className="mt-1 text-3xl font-bold">{m.total}</div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-gray-500">Taxa de conclusão</div>
          <div className="mt-1 text-3xl font-bold text-emerald-600">{m.taxaConclusao}%</div>
        </div>
      </div>

      {/* gráfico de assinaturas por mês (barras CSS) */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold text-gray-700">Assinaturas por mês (últimos 6)</h2>
        <div className="flex items-end gap-3" style={{ height: 140 }}>
          {m.assinaturasPorMes.map((x) => (
            <div key={x.mes} className="flex flex-1 flex-col items-center justify-end">
              <span className="mb-1 text-xs font-medium text-gray-600">{x.total}</span>
              <div
                className="w-full rounded-t bg-success/80"
                style={{ height: `${(x.total / maxMes) * 100}%`, minHeight: x.total ? 4 : 0 }}
              />
              <span className="mt-1 text-[11px] text-gray-400">{x.mes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* pendências */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold text-gray-700">Pendências (aguardando assinatura)</h2>
        {m.pendentes.length === 0 ? (
          <p className="text-sm text-gray-400">Nenhuma pendência. 🎉</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {m.pendentes.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-2 text-sm">
                <Link href={`/contratos/${p.id}`} className="text-brand-blueLight hover:underline">
                  {p.assunto || "(sem assunto)"}
                </Link>
                <span className={p.faltam <= 3 ? "text-red-600" : "text-gray-500"}>
                  há {p.dias} dia(s) · faltam {p.faltam}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
