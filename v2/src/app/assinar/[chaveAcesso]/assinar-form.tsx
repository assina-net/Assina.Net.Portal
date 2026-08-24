"use client";

import { useState } from "react";
import { enviarCodigo, assinarComCodigo } from "@/lib/actions/assinatura";
import { prepararAssinaturaLocal, registrarAssinaturaLocal } from "@/lib/actions/assinatura-local";

const CLIENT_URL = process.env.NEXT_PUBLIC_ASSINADOR_URL || "http://127.0.0.1:34567";

export function AssinarForm({ chaveAcesso }: { chaveAcesso: string }) {
  const [etapa, setEtapa] = useState<"inicio" | "codigo" | "feito">("inicio");
  const [codigo, setCodigo] = useState("");
  const [info, setInfo] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  // assinatura por certificado local (client desktop)
  async function assinarCertificadoLocal() {
    setErro("");
    setInfo("");
    setCarregando(true);
    try {
      // 1. detecta o client no localhost
      let status;
      try {
        status = await fetch(`${CLIENT_URL}/status`, { signal: AbortSignal.timeout(2500) });
      } catch {
        setCarregando(false);
        return setErro(
          "Assinador não detectado. Instale o app Assina.net (link abaixo) e tente novamente."
        );
      }
      if (!status.ok) throw new Error("Assinador indisponível");

      // 2. servidor prepara os documentos e devolve os bytes a assinar
      const prep = await prepararAssinaturaLocal(chaveAcesso);
      if (!prep.ok) throw new Error(prep.erro);

      // 3. client local assina os bytes com o certificado da máquina
      const resp = await fetch(`${CLIENT_URL}/assinar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docs: prep.docs.map((d) => ({ docId: d.docId, bytesBase64: d.bytesBase64 })) }),
      });
      if (!resp.ok) throw new Error("Falha ao assinar no Assinador");
      const { assinaturas } = await resp.json();

      // 4. servidor embute o CMS e registra
      const r = await registrarAssinaturaLocal(chaveAcesso, prep.sessionId, assinaturas);
      if (!r.ok) throw new Error(r.erro);
      setEtapa("feito");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro na assinatura por certificado");
    } finally {
      setCarregando(false);
    }
  }

  async function solicitar() {
    setErro("");
    setCarregando(true);
    const r = await enviarCodigo(chaveAcesso);
    setCarregando(false);
    if (!r.ok) return setErro(r.erro || "Erro ao enviar código");
    setEtapa("codigo");
    setInfo(
      r.dev
        ? `Código (modo piloto): ${r.dev}`
        : `Enviamos um código para ${mascarar(r.email)}.`
    );
  }

  async function assinar() {
    setErro("");
    if (codigo.trim().length < 4) return setErro("Digite o código recebido.");
    setCarregando(true);
    const r = await assinarComCodigo(chaveAcesso, codigo.trim());
    setCarregando(false);
    if (!r.ok) return setErro(r.erro || "Não foi possível assinar");
    setEtapa("feito");
  }

  if (etapa === "feito") {
    return (
      <div className="rounded-lg bg-success/10 p-4 text-center">
        <div className="mb-1 text-3xl">✅</div>
        <p className="font-semibold text-green-700">Assinatura registrada com sucesso!</p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-100 pt-5">
      {erro && <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{erro}</p>}
      {info && <p className="mb-3 rounded-md bg-brand-blue/10 px-3 py-2 text-sm text-brand-blue">{info}</p>}

      {etapa === "inicio" ? (
        <button
          onClick={solicitar}
          disabled={carregando}
          className="h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
        >
          {carregando ? "Enviando..." : "Assinar — receber código por e-mail"}
        </button>
      ) : (
        <div className="space-y-3">
          <input
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Código de 6 dígitos"
            inputMode="numeric"
            className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-center text-xl tracking-widest focus:border-brand-blueLight focus:outline-none"
          />
          <button
            onClick={assinar}
            disabled={carregando}
            className="h-11 w-full rounded-md bg-brand font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
          >
            {carregando ? "Assinando..." : "Confirmar assinatura"}
          </button>
          <button onClick={solicitar} disabled={carregando} className="w-full text-sm text-gray-500 hover:underline">
            Reenviar código
          </button>
        </div>
      )}

      {/* Alternativa: certificado digital local */}
      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="mb-2 text-center text-xs text-gray-400">ou</p>
        <button
          onClick={assinarCertificadoLocal}
          disabled={carregando}
          className="h-11 w-full rounded-md border border-brand text-sm font-semibold text-brand transition hover:bg-brand/5 disabled:opacity-60"
        >
          Assinar com certificado digital (A1/A3)
        </button>
        <p className="mt-2 text-center text-xs text-gray-400">
          Requer o{" "}
          <a href="/assinador" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
            Assinador Assina.net
          </a>{" "}
          instalado.
        </p>
      </div>
    </div>
  );
}

function mascarar(email?: string): string {
  if (!email) return "seu e-mail";
  const [u, d] = email.split("@");
  return `${u.slice(0, 2)}***@${d}`;
}
