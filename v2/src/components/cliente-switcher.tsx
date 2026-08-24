"use client";

import { trocarCliente } from "@/lib/actions/cliente-ativo";

export function ClienteSwitcher({
  clientes,
  ativo,
}: {
  clientes: { id: string; nome: string }[];
  ativo: string | null;
}) {
  return (
    <form action={trocarCliente} className="px-3 pb-3">
      <label className="mb-1 block text-[11px] uppercase tracking-wider text-white/40">Empresa</label>
      <select
        name="clienteId"
        defaultValue={ativo ?? clientes[0]?.id}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="w-full rounded-md border border-white/15 bg-white/10 px-2 py-1.5 text-sm text-white outline-none"
      >
        {clientes.map((c) => (
          <option key={c.id} value={c.id} className="text-gray-900">
            {c.nome}
          </option>
        ))}
      </select>
    </form>
  );
}
