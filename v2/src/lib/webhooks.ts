import { createHmac, randomBytes } from "crypto";
import { prisma } from "@/lib/db";

// Eventos do ciclo de vida do contrato disparados aos webhooks.
export const EVENTOS = [
  "contrato.criado",
  "contrato.liberado",
  "parte.assinou",
  "contrato.assinado",
  "contrato.recusado",
  "contrato.cancelado",
  "contrato.expirado",
] as const;
export type Evento = (typeof EVENTOS)[number];

/** Gera um secret de webhook (para o cliente validar a assinatura HMAC). */
export function gerarSecret(): string {
  return `whsec_${randomBytes(24).toString("base64url")}`;
}

/** Assina o corpo do webhook com HMAC-SHA256. Pura/testável. */
export function assinarPayload(secret: string, body: string): string {
  return "sha256=" + createHmac("sha256", secret).update(body).digest("hex");
}

/** O webhook está inscrito no evento? ("*" = todos; senão CSV). Pura/testável. */
export function inscrito(eventos: string, evento: string): boolean {
  const e = (eventos || "*").trim();
  if (e === "*" || e === "") return true;
  return e
    .split(",")
    .map((x) => x.trim())
    .includes(evento);
}

/**
 * Dispara um evento para todos os webhooks ATIVOS do cliente inscritos nele.
 * Best-effort: registra cada tentativa em WebhookEntrega. Use dentro de after().
 */
export async function dispararWebhook(
  clienteId: string,
  evento: Evento,
  dados: Record<string, unknown>
): Promise<void> {
  const hooks = await prisma.webhook.findMany({
    where: { clienteId, status: "ATIVO" },
  });
  if (hooks.length === 0) return;

  const body = JSON.stringify({
    evento,
    dados,
    timestamp: new Date().toISOString(),
  });

  await Promise.all(
    hooks
      .filter((h) => inscrito(h.eventos, evento))
      .map(async (h) => {
        const assinatura = assinarPayload(h.secret, body);
        let statusHttp: number | null = null;
        let sucesso = false;
        let erro: string | null = null;
        try {
          const ctrl = new AbortController();
          const t = setTimeout(() => ctrl.abort(), 10_000);
          const res = await fetch(h.url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-assinanet-evento": evento,
              "x-assinanet-signature": assinatura,
            },
            body,
            signal: ctrl.signal,
          });
          clearTimeout(t);
          statusHttp = res.status;
          sucesso = res.ok;
          if (!res.ok) erro = `HTTP ${res.status}`;
        } catch (e) {
          erro = e instanceof Error ? e.message : String(e);
        }
        await prisma.webhookEntrega
          .create({
            data: { webhookId: h.id, evento, payload: body, statusHttp, sucesso, tentativas: 1, erro },
          })
          .catch(() => {});
      })
  );
}
