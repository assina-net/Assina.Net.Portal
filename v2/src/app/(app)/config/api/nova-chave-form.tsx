"use client";

import { useActionState } from "react";
import { criarApiKey } from "@/lib/actions/integracao";

const estadoInicial: { ok?: boolean; chave?: string } = {};

export function NovaChaveForm() {
  const [estado, action, pendente] = useActionState(criarApiKey, estadoInicial);

  return (
    <div className="space-y-3">
      <form action={action} className="flex items-end gap-2">
        <label className="flex-1">
          <span className="mb-1 block text-sm font-medium text-gray-700">Nome da chave</span>
          <input
            name="nome"
            placeholder="Ex.: Integração ERP"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-brand-blueLight focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={pendente}
          className="rounded-md bg-success px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-50"
        >
          {pendente ? "Gerando…" : "Gerar chave"}
        </button>
      </form>

      {estado.ok && estado.chave && (
        <div className="rounded-md border border-success/40 bg-success/10 p-3">
          <p className="mb-1 text-sm font-medium text-green-800">
            Copie agora — a chave não será exibida novamente:
          </p>
          <code className="block break-all rounded bg-white px-2 py-1 font-mono text-sm text-gray-900">
            {estado.chave}
          </code>
        </div>
      )}
    </div>
  );
}
