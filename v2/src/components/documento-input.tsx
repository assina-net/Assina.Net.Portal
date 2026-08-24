"use client";

import { useState } from "react";
import { formatarCpfCnpj, tipoPorDocumento } from "@/lib/format";

const inputCls =
  "h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-gray-900 focus:border-brand-blueLight focus:outline-none";

/**
 * Par "Tipo de pessoa" (combo) + "CPF/CNPJ" (campo mascarado).
 * A combo define a máscara; digitar >11 dígitos autodetecta Jurídica/CNPJ.
 * Usa names "tipoPessoa" e "cpfCnpj" (compatível com FormData).
 */
export function DocumentoInput({
  defaultTipo = "JURIDICA",
  defaultDoc = "",
}: {
  defaultTipo?: "FISICA" | "JURIDICA";
  defaultDoc?: string;
}) {
  const [tipo, setTipo] = useState<"FISICA" | "JURIDICA">(defaultTipo);
  const [doc, setDoc] = useState(() => formatarCpfCnpj(defaultDoc, defaultTipo));

  function onDoc(v: string) {
    const auto = tipoPorDocumento(v);
    const t = auto === "JURIDICA" ? "JURIDICA" : tipo; // autodetecta CNPJ; não força CPF
    if (t !== tipo) setTipo(t);
    setDoc(formatarCpfCnpj(v, t));
  }

  function onTipo(t: "FISICA" | "JURIDICA") {
    setTipo(t);
    setDoc(formatarCpfCnpj(doc, t));
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-700">Tipo</span>
        <select
          name="tipoPessoa"
          value={tipo}
          onChange={(e) => onTipo(e.target.value as "FISICA" | "JURIDICA")}
          className={inputCls}
        >
          <option value="JURIDICA">Jurídica</option>
          <option value="FISICA">Física</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-700">
          {tipo === "FISICA" ? "CPF" : "CNPJ"}
        </span>
        <input
          name="cpfCnpj"
          required
          value={doc}
          onChange={(e) => onDoc(e.target.value)}
          inputMode="numeric"
          placeholder={tipo === "FISICA" ? "000.000.000-00" : "00.000.000/0000-00"}
          className={inputCls}
        />
      </label>
    </div>
  );
}
