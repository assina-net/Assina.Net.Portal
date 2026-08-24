import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// SES da Simples Media fica em us-east-1 (produção liberada, simples.media verificado)
const ses = new SESv2Client({ region: process.env.SES_REGION || "us-east-1" });

const FROM = process.env.EMAIL_FROM || "Assina.net <noreply@simples.media>";

export async function enviarEmail(params: {
  para: string;
  assunto: string;
  html: string;
  texto?: string;
}): Promise<{ ok: boolean; erro?: string }> {
  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: [params.para] },
        Content: {
          Simple: {
            Subject: { Data: params.assunto, Charset: "UTF-8" },
            Body: {
              Html: { Data: params.html, Charset: "UTF-8" },
              Text: { Data: params.texto ?? params.html.replace(/<[^>]+>/g, " "), Charset: "UTF-8" },
            },
          },
        },
      })
    );
    return { ok: true };
  } catch (e) {
    return { ok: false, erro: e instanceof Error ? e.message : "Falha no envio" };
  }
}

const BRAND = "#34b563";

/** Escapa dados do usuário antes de interpolar no HTML do e-mail (anti-injeção). */
function esc(s: string): string {
  return (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function emailCodigoAssinatura(nome: string, codigo: string, assunto: string) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto">
    <div style="background:#0b2238;padding:20px;text-align:center;color:#fff;border-radius:8px 8px 0 0">
      <strong style="font-size:18px">Assina.net</strong>
    </div>
    <div style="border:1px solid #eee;border-top:0;padding:24px;border-radius:0 0 8px 8px">
      <p>Olá, ${esc(nome)}.</p>
      <p>Use o código abaixo para assinar o documento <strong>${esc(assunto)}</strong>:</p>
      <div style="font-size:30px;font-weight:bold;letter-spacing:6px;color:${BRAND};text-align:center;margin:20px 0">${esc(codigo)}</div>
      <p style="color:#888;font-size:13px">O código expira em 15 minutos. Se você não solicitou, ignore este e-mail.</p>
    </div>
  </div>`;
}

export function emailConfirmacaoCadastro(nome: string, link: string) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto">
    <div style="background:#0b2238;padding:20px;text-align:center;color:#fff;border-radius:8px 8px 0 0">
      <strong style="font-size:18px">Assina.net</strong>
    </div>
    <div style="border:1px solid #eee;border-top:0;padding:24px;border-radius:0 0 8px 8px">
      <p>Olá, ${esc(nome)}.</p>
      <p>Bem-vindo à Assina.net! Confirme seu e-mail para ativar sua conta:</p>
      <p style="text-align:center;margin:24px 0">
        <a href="${esc(link)}" style="background:${BRAND};color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold">Confirmar e-mail</a>
      </p>
      <p style="color:#888;font-size:13px">Se você não criou esta conta, ignore este e-mail.</p>
    </div>
  </div>`;
}

export function emailRecuperacaoSenha(nome: string, link: string) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto">
    <div style="background:#0b2238;padding:20px;text-align:center;color:#fff;border-radius:8px 8px 0 0">
      <strong style="font-size:18px">Assina.net</strong>
    </div>
    <div style="border:1px solid #eee;border-top:0;padding:24px;border-radius:0 0 8px 8px">
      <p>Olá, ${esc(nome)}.</p>
      <p>Recebemos um pedido para redefinir sua senha. Clique abaixo para criar uma nova:</p>
      <p style="text-align:center;margin:24px 0">
        <a href="${esc(link)}" style="background:${BRAND};color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold">Redefinir senha</a>
      </p>
      <p style="color:#888;font-size:13px">O link expira em 1 hora. Se você não solicitou, ignore este e-mail.</p>
    </div>
  </div>`;
}

export function emailSolicitacaoAssinatura(nome: string, assunto: string, link: string, mensagem?: string | null) {
  const extra = mensagem
    ? `<p style="background:#f0f5f2;border-left:3px solid ${BRAND};padding:10px 12px;color:#444;font-size:14px">${esc(mensagem)}</p>`
    : "";
  return `
  <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto">
    <div style="background:#0b2238;padding:20px;text-align:center;color:#fff;border-radius:8px 8px 0 0">
      <strong style="font-size:18px">Assina.net</strong>
    </div>
    <div style="border:1px solid #eee;border-top:0;padding:24px;border-radius:0 0 8px 8px">
      <p>Olá, ${esc(nome)}.</p>
      <p>Você foi convidado para assinar o documento <strong>${esc(assunto)}</strong>.</p>
      ${extra}
      <p style="text-align:center;margin:24px 0">
        <a href="${esc(link)}" style="background:${BRAND};color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold">Assinar documento</a>
      </p>
      <p style="color:#888;font-size:13px">Ou acesse: ${esc(link)}</p>
    </div>
  </div>`;
}
