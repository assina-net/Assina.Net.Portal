"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { presignDocumento, criarContrato } from "@/lib/actions/contratos";
import { formatarCpfCnpj, tipoPorDocumento, formatarMoeda, moedaParaNumero } from "@/lib/format";

type Opt = { id: string; nome: string };
type Parte = {
  nome: string;
  cpfCnpj: string;
  email: string;
  celular: string;
  tipoPessoa: "FISICA" | "JURIDICA";
  papelId: string;
};
type DocItem = { file: File; tipoDocumentoId: string };

const inputCls =
  "h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:border-brand-blueLight focus:outline-none";

async function sha256(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function NovoContratoForm({ papeis, tipos }: { papeis: Opt[]; tipos: Opt[] }) {
  const router = useRouter();
  const [assunto, setAssunto] = useState("");
  const [identificador, setIdentificador] = useState("");
  const [valor, setValor] = useState("");
  const [partes, setPartes] = useState<Parte[]>([
    { nome: "", cpfCnpj: "", email: "", celular: "", tipoPessoa: "FISICA", papelId: papeis[0]?.id ?? "" },
  ]);
  const [docs, setDocs] = useState<DocItem[]>([]);
  const [sequencial, setSequencial] = useState(false);
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [progresso, setProgresso] = useState("");

  function setParte(i: number, patch: Partial<Parte>) {
    setPartes((ps) => ps.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));
  }
  function addParte() {
    setPartes((ps) => [
      ...ps,
      { nome: "", cpfCnpj: "", email: "", celular: "", tipoPessoa: "FISICA", papelId: papeis[0]?.id ?? "" },
    ]);
  }
  function removeParte(i: number) {
    setPartes((ps) => ps.filter((_, idx) => idx !== i));
  }
  function onFiles(list: FileList | null) {
    if (!list) return;
    const novos = Array.from(list).map((file) => ({ file, tipoDocumentoId: tipos[0]?.id ?? "" }));
    setDocs((d) => [...d, ...novos]);
  }

  async function submit() {
    setErro("");
    if (!assunto.trim()) return setErro("Informe o assunto.");
    if (partes.some((p) => !p.nome || !p.cpfCnpj)) return setErro("Preencha nome e CPF/CNPJ de todas as partes.");
    if (docs.length === 0) return setErro("Anexe ao menos um documento (PDF).");

    setSalvando(true);
    try {
      const documentos = [];
      for (let i = 0; i < docs.length; i++) {
        const { file, tipoDocumentoId } = docs[i];
        setProgresso(`Enviando ${i + 1}/${docs.length}: ${file.name}`);
        const hash = await sha256(file);
        const { url, key } = await presignDocumento(file.name, file.type || "application/pdf");
        const res = await fetch(url, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type || "application/pdf" },
        });
        if (!res.ok) throw new Error(`Falha ao enviar ${file.name}`);
        documentos.push({ nomeDocumento: file.name, storageKey: key, sha256: hash, tipoDocumentoId });
      }
      setProgresso("Salvando contrato...");
      const r = await criarContrato({
        assunto,
        identificador,
        valor: valor ? moedaParaNumero(valor) : undefined,
        sequencial,
        partes,
        documentos,
      });
      if (!r.ok) throw new Error(r.erro || "Erro ao salvar");
      router.push(`/contratos/${r.id}`);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado");
      setSalvando(false);
      setProgresso("");
    }
  }

  return (
    <div className="space-y-6">
      {erro && <p className="rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{erro}</p>}

      {/* Dados do contrato */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-heading font-semibold text-brand-slate">Dados do contrato</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-medium text-gray-700">Assunto *</span>
            <input className={inputCls} value={assunto} onChange={(e) => setAssunto(e.target.value)} />
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-gray-700">Identificador (opcional)</span>
            <input
              className={inputCls}
              value={identificador}
              onChange={(e) => setIdentificador(e.target.value)}
              placeholder="Sua referência: ex. CT-2026-001"
            />
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-gray-700">Valor (opcional)</span>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
              <input
                className={`${inputCls} pl-9`}
                inputMode="numeric"
                value={valor}
                onChange={(e) => setValor(formatarMoeda(e.target.value))}
                placeholder="0,00"
              />
            </div>
          </label>
        </div>
      </div>

      {/* Partes */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading font-semibold text-brand-slate">Partes (signatários)</h2>
          <button type="button" onClick={addParte} className="text-sm font-medium text-brand-blue hover:underline">
            + Adicionar parte
          </button>
        </div>
        <label className="mb-4 flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={sequencial} onChange={(e) => setSequencial(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
          Assinatura em ordem (sequencial) — cada um assina só quando chegar a sua vez
        </label>
        <div className="space-y-4">
          {partes.map((p, i) => (
            <div key={i} className="grid grid-cols-1 gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3 md:grid-cols-12">
              <input className={`${inputCls} md:col-span-3`} placeholder={sequencial ? `${i + 1}º a assinar — Nome` : "Nome / Razão social"} value={p.nome} onChange={(e) => setParte(i, { nome: e.target.value })} />
              <select
                className={`${inputCls} md:col-span-2`}
                value={p.tipoPessoa}
                onChange={(e) => {
                  const t = e.target.value as Parte["tipoPessoa"];
                  setParte(i, { tipoPessoa: t, cpfCnpj: formatarCpfCnpj(p.cpfCnpj, t) });
                }}
              >
                <option value="FISICA">Física</option>
                <option value="JURIDICA">Jurídica</option>
              </select>
              <input
                className={`${inputCls} md:col-span-2`}
                placeholder={p.tipoPessoa === "FISICA" ? "000.000.000-00" : "00.000.000/0000-00"}
                inputMode="numeric"
                value={p.cpfCnpj}
                onChange={(e) => {
                  const v = e.target.value;
                  const t = tipoPorDocumento(v) === "JURIDICA" ? "JURIDICA" : p.tipoPessoa;
                  setParte(i, { tipoPessoa: t, cpfCnpj: formatarCpfCnpj(v, t) });
                }}
              />
              <input className={`${inputCls} md:col-span-2`} placeholder="E-mail" value={p.email} onChange={(e) => setParte(i, { email: e.target.value })} />
              <select className={`${inputCls} md:col-span-2`} value={p.papelId} onChange={(e) => setParte(i, { papelId: e.target.value })}>
                <option value="">Papel...</option>
                {papeis.map((pa) => (
                  <option key={pa.id} value={pa.id}>{pa.nome}</option>
                ))}
              </select>
              <button type="button" onClick={() => removeParte(i)} className="text-sm text-gray-400 hover:text-red-600 md:col-span-1" title="Remover">
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Documentos */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-heading font-semibold text-brand-slate">Documentos (PDF)</h2>
        <input type="file" accept="application/pdf" multiple onChange={(e) => onFiles(e.target.files)} className="mb-3 text-sm" />
        <div className="space-y-2">
          {docs.map((d, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm">
              <span className="flex-1 truncate">{d.file.name} <span className="text-gray-400">({Math.round(d.file.size / 1024)} KB)</span></span>
              <select className={`${inputCls} w-48`} value={d.tipoDocumentoId} onChange={(e) => setDocs((arr) => arr.map((x, idx) => (idx === i ? { ...x, tipoDocumentoId: e.target.value } : x)))}>
                <option value="">Tipo...</option>
                {tipos.map((t) => (
                  <option key={t.id} value={t.id}>{t.nome}</option>
                ))}
              </select>
              <button type="button" onClick={() => setDocs((arr) => arr.filter((_, idx) => idx !== i))} className="text-gray-400 hover:text-red-600">✕</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={submit} disabled={salvando} className="inline-flex h-11 items-center rounded-md bg-brand px-6 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60">
          {salvando ? "Salvando..." : "Criar contrato"}
        </button>
        {progresso && <span className="text-sm text-gray-500">{progresso}</span>}
      </div>
    </div>
  );
}
