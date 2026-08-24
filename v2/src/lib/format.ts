import { createHash } from "crypto";

/** Mascara CPF/CNPJ para exibição pública (LGPD). Função pura/testável. */
export function mascararCpf(v: string): string {
  const d = (v ?? "").replace(/\D/g, "");
  if (d.length === 11) return `${d.slice(0, 3)}.***.***-${d.slice(9)}`;
  if (d.length === 14) return `${d.slice(0, 2)}.***.***/****-${d.slice(12)}`;
  if (d.length > 4) return `${d.slice(0, 2)}***${d.slice(-2)}`;
  return "***";
}

/** Iniciais de um nome (até 3 letras maiúsculas) para a rubrica. Pura/testável. */
export function iniciais(nome: string): string {
  const partes = (nome ?? "")
    .trim()
    .split(/\s+/)
    .filter((p) => p.length > 1 || /^[A-Za-zÀ-ÿ]$/.test(p)); // ignora "de", "da" curtos? mantém simples
  const letras = partes
    .filter((p) => !/^(de|da|do|das|dos|e)$/i.test(p))
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return (letras || (nome ?? "").trim().slice(0, 2).toUpperCase() || "?").slice(0, 3);
}

const TZ = "America/Sao_Paulo";
/** Data+hora no fuso de Brasília (Lambda roda em UTC). */
export function fmtDataHora(d: Date | string): string {
  return new Date(d).toLocaleString("pt-BR", { timeZone: TZ });
}
/** Data no fuso de Brasília. */
export function fmtData(d: Date | string): string {
  return new Date(d).toLocaleDateString("pt-BR", { timeZone: TZ });
}

function fmtCPF(d: string): string {
  const x = d.slice(0, 11);
  if (x.length > 9) return `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6, 9)}-${x.slice(9)}`;
  if (x.length > 6) return `${x.slice(0, 3)}.${x.slice(3, 6)}.${x.slice(6)}`;
  if (x.length > 3) return `${x.slice(0, 3)}.${x.slice(3)}`;
  return x;
}

function fmtCNPJ(d: string): string {
  const x = d.slice(0, 14);
  if (x.length > 12) return `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}/${x.slice(8, 12)}-${x.slice(12)}`;
  if (x.length > 8) return `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5, 8)}/${x.slice(8)}`;
  if (x.length > 5) return `${x.slice(0, 2)}.${x.slice(2, 5)}.${x.slice(5)}`;
  if (x.length > 2) return `${x.slice(0, 2)}.${x.slice(2)}`;
  return x;
}

/** Aplica máscara de CPF (FISICA) ou CNPJ (JURIDICA). Função pura/testável. */
export function formatarCpfCnpj(value: string, tipo: "FISICA" | "JURIDICA"): string {
  const d = (value ?? "").replace(/\D/g, "");
  return tipo === "FISICA" ? fmtCPF(d) : fmtCNPJ(d);
}

/** Autodetecção do tipo pela quantidade de dígitos (>11 = CNPJ/Jurídica). */
export function tipoPorDocumento(value: string): "FISICA" | "JURIDICA" {
  return (value ?? "").replace(/\D/g, "").length > 11 ? "JURIDICA" : "FISICA";
}

/** Formata dígitos como moeda BRL (trata o valor como centavos). Pura/testável. */
export function formatarMoeda(value: string): string {
  const d = (value ?? "").replace(/\D/g, "");
  if (!d) return "";
  const n = parseInt(d, 10);
  const reais = Math.floor(n / 100).toLocaleString("pt-BR");
  const centavos = String(n % 100).padStart(2, "0");
  return `${reais},${centavos}`;
}

/** Converte uma string de moeda BRL para número. "1.234,56" -> 1234.56 */
export function moedaParaNumero(value: string): number {
  const d = (value ?? "").replace(/\D/g, "");
  return d ? parseInt(d, 10) / 100 : 0;
}

/** SHA-256 hex de bytes (server-side). */
export function sha256Hex(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex");
}
