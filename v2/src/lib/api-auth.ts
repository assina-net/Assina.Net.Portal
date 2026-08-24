import { createHash, randomBytes } from "crypto";
import { prisma } from "@/lib/db";
import { rateLimit, MIN } from "@/lib/ratelimit";

// Prefixo visível identifica o ambiente; o segredo vem depois e nunca é re-exibido.
const PREFIXO = "ak_live_";

/** SHA-256 hex de uma string (hash da chave de API). Pura/testável. */
export function hashChave(chave: string): string {
  return createHash("sha256").update(chave).digest("hex");
}

/**
 * Gera uma nova chave de API. Retorna a chave EM CLARO (exibida 1x ao usuário),
 * o hash (gravado no banco) e o prefixo curto (p/ identificar na UI).
 */
export function gerarApiKey(): { chave: string; hash: string; prefixo: string } {
  const segredo = randomBytes(24).toString("base64url");
  const chave = `${PREFIXO}${segredo}`;
  return { chave, hash: hashChave(chave), prefixo: chave.slice(0, 12) };
}

export type ApiContexto = { clienteId: string; apiKeyId: string };

/** Extrai a chave do header (Authorization: Bearer / x-api-key). */
export function lerChave(req: Request): string | null {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7).trim();
  const xak = req.headers.get("x-api-key");
  return xak?.trim() || null;
}

/**
 * Autentica uma requisição da API v1. Retorna o contexto (clienteId) ou null.
 * Aplica rate limit por chave e atualiza ultimoUso (best-effort).
 */
export async function autenticarApi(req: Request): Promise<ApiContexto | null> {
  const chave = lerChave(req);
  if (!chave || !chave.startsWith(PREFIXO)) return null;

  const hash = hashChave(chave);
  const key = await prisma.apiKey.findUnique({ where: { chaveHash: hash } });
  if (!key || key.status !== "ATIVO") return null;

  // 600 req / 15 min por chave
  if (!(await rateLimit(`api:${key.id}`, 600, 15 * MIN))) return null;

  // não bloqueia a resposta por causa do carimbo de uso
  prisma.apiKey
    .update({ where: { id: key.id }, data: { ultimoUso: new Date() } })
    .catch(() => {});

  return { clienteId: key.clienteId, apiKeyId: key.id };
}

/** Resposta JSON padrão da API. */
export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

/** Resposta de erro padrão. */
export function erro(mensagem: string, status = 400): Response {
  return json({ erro: mensagem }, status);
}
