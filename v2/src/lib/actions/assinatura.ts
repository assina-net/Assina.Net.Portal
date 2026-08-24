"use server";

import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { exigePerfil, exigeTenant } from "@/lib/rbac";
import { tokenUtilizavel, gerarCodigo } from "@/lib/token";
import { statusContratoPorPartes, statusDocumentoPorPartes, ehSignatario } from "@/lib/cascade";
import { enviarEmail, emailCodigoAssinatura } from "@/lib/email";
import { getObjectBytes, putObjectBytes } from "@/lib/s3";
import { gerarPdfAssinado } from "@/lib/pdf";
import { sha256Hex, fmtDataHora } from "@/lib/format";
import { rateLimit, MIN } from "@/lib/ratelimit";
import { ehVezDaParte, notificarProximo } from "@/lib/ordem-server";
import { liberarContratoCore } from "@/lib/contrato-core";
import { dispararWebhook } from "@/lib/webhooks";

const METODO_LABEL: Record<string, string> = {
  TOKEN_ELETRONICO: "Assinatura eletrônica (token por e-mail)",
  GOVBR: "gov.br",
  CERTIFICADO_LOCAL: "Certificado digital (local)",
  CERTIFICADO_NUVEM: "Certificado digital em nuvem",
};

/** Gera o PDF assinado (folha de assinaturas + QR) para cada documento do contrato. */
export async function gerarDocumentosAssinados(contratoId: string) {
  const contrato = await prisma.contrato.findUnique({
    where: { id: contratoId },
    include: {
      documentos: { include: { posicoes: true } },
      partes: { include: { assinaturas: true } },
    },
  });
  if (!contrato) return;

  const validacaoUrl = `${BASE}/validar/${contratoId}`;
  const assinadas = contrato.partes.filter((p) => p.statusAssinatura === "ASSINADO");
  const assinaturas = assinadas.map((p) => {
    const prova = p.assinaturas[0];
    return {
      nome: p.nomeRazaoSocial,
      cpfCnpj: p.cpfCnpj,
      quando: prova?.dataAssinatura ? fmtDataHora(prova.dataAssinatura) : "-",
      metodo: prova ? METODO_LABEL[prova.tipoAssinatura] ?? prova.tipoAssinatura : "-",
      ip: prova?.ip ?? null,
    };
  });
  // mapa parteId -> dados da assinatura (p/ marcas visíveis posicionadas)
  const infoParte = new Map(
    assinadas.map((p) => {
      const prova = p.assinaturas[0];
      return [
        p.id,
        {
          nome: p.nomeRazaoSocial,
          cpfCnpj: p.cpfCnpj,
          metodo: prova ? METODO_LABEL[prova.tipoAssinatura] ?? prova.tipoAssinatura : "",
          quando: prova?.dataAssinatura ? fmtDataHora(prova.dataAssinatura) : "-",
        },
      ];
    })
  );

  for (const doc of contrato.documentos) {
    if (!doc.storageKeyOriginal || doc.storageKeyAssinado) continue;
    try {
      const original = await getObjectBytes(doc.storageKeyOriginal);
      const marcas = doc.posicoes
        .filter((pos) => infoParte.has(pos.contratoParteId))
        .map((pos) => {
          const info = infoParte.get(pos.contratoParteId)!;
          return {
            pagina: pos.pagina,
            x: pos.x,
            y: pos.y,
            largura: pos.largura,
            altura: pos.altura,
            nome: info.nome,
            quando: info.quando,
            cpfCnpj: info.cpfCnpj,
            metodo: info.metodo,
          };
        });
      const assinado = await gerarPdfAssinado(original, {
        assunto: contrato.assunto ?? doc.nomeDocumento,
        validacaoUrl,
        assinaturas,
        hashOriginal: doc.sha256Original ?? sha256Hex(original),
        marcas,
        rubrica: { nomes: assinadas.map((p) => p.nomeRazaoSocial), validacaoUrl },
      });
      const key = doc.storageKeyOriginal.replace(/\.pdf$/i, "") + "-assinado.pdf";
      // idempotente: só grava se ainda não foi assinado (evita corrida/duplicação)
      const upd = await prisma.contratoDocumento.updateMany({
        where: { id: doc.id, storageKeyAssinado: null },
        data: { storageKeyAssinado: key, sha256Assinado: sha256Hex(assinado), dataAssinado: new Date() },
      });
      if (upd.count > 0) await putObjectBytes(key, assinado);
    } catch (e) {
      console.error("Falha ao gerar PDF assinado", doc.id, e);
    }
  }
}

const BASE = process.env.AUTH_URL || "https://assinanet.simples.media";
const REVELAR_CODIGO = process.env.PILOT_REVEAL_CODE === "1";

/** Libera o contrato para assinatura: gera chave de acesso por parte e notifica. */
export async function liberarAssinatura(formData: FormData) {
  const user = await requireUser();
  exigePerfil(user, "ROLE_USUARIO");
  const contratoId = String(formData.get("contratoId") ?? "");

  const contrato = await prisma.contrato.findUnique({
    where: { id: contratoId },
    select: { clienteId: true },
  });
  if (!contrato) return redirect("/contratos?erro=Contrato%20inexistente");
  exigeTenant(user, contrato.clienteId);

  const r = await liberarContratoCore(contratoId, user.id);
  if (!r.ok) return redirect(`/contratos/${contratoId}?erro=${encodeURIComponent(r.erro)}`);

  revalidatePath(`/contratos/${contratoId}`);
  redirect(`/contratos/${contratoId}`);
}

/** (público) Gera e envia o código de assinatura para a parte. */
export async function enviarCodigo(chaveAcesso: string) {
  const parte = await prisma.contratoParte.findUnique({
    where: { chaveAcesso },
    include: { contrato: true },
  });
  if (!parte || !parte.validadeChaveAcesso || parte.validadeChaveAcesso < new Date()) {
    return { ok: false, erro: "Link inválido ou expirado" };
  }
  if (parte.statusAssinatura === "ASSINADO") return { ok: false, erro: "Já assinado" };
  if (!parte.email) return { ok: false, erro: "Parte sem e-mail cadastrado" };
  if (!(await ehVezDaParte(parte.contratoId, parte.id)))
    return { ok: false, erro: "Ainda não é a sua vez de assinar (aguardando assinatura anterior)." };

  // rate limit: máx 5 envios de código / 15 min por parte
  if (!(await rateLimit(`codigo:${parte.id}`, 5, 15 * MIN))) {
    return { ok: false, erro: "Muitos envios de código. Aguarde alguns minutos." };
  }

  const codigo = gerarCodigo();
  const codigoHash = await bcrypt.hash(codigo, 10);
  // invalida códigos anteriores não consumidos (evita acúmulo de tentativas)
  await prisma.tokenAssinatura.updateMany({
    where: { contratoParteId: parte.id, consumidoEm: null },
    data: { consumidoEm: new Date() },
  });
  await prisma.tokenAssinatura.create({
    data: {
      contratoParteId: parte.id,
      codigoHash,
      canal: "EMAIL",
      validade: new Date(Date.now() + 15 * 60 * 1000),
      maxTentativas: 3,
    },
  });

  const envio = await enviarEmail({
    para: parte.email,
    assunto: `Seu código de assinatura — ${parte.contrato.assunto ?? ""}`,
    html: emailCodigoAssinatura(parte.nomeRazaoSocial, codigo, parte.contrato.assunto ?? "documento"),
  });

  // se o e-mail falhou (e não estamos em modo piloto), avisa — a parte não recebeu o código
  if (!envio.ok && !REVELAR_CODIGO) {
    return { ok: false, erro: "Não foi possível enviar o e-mail com o código. Tente novamente." };
  }
  // PILOTO: com PILOT_REVEAL_CODE=1 devolve o código pra teste. NUNCA em produção.
  return { ok: true, email: parte.email, dev: REVELAR_CODIGO ? codigo : undefined };
}

/** (público) Valida o código NO SERVIDOR e registra a assinatura. */
export async function assinarComCodigo(chaveAcesso: string, codigo: string) {
  const parte = await prisma.contratoParte.findUnique({
    where: { chaveAcesso },
    include: { contrato: { include: { documentos: true } } },
  });
  if (!parte || !parte.validadeChaveAcesso || parte.validadeChaveAcesso < new Date()) {
    return { ok: false, erro: "Link inválido ou expirado" };
  }
  if (parte.statusAssinatura === "ASSINADO") return { ok: false, erro: "Documento já assinado" };

  // rate limit: máx 10 tentativas de código / 15 min por parte (anti brute-force)
  if (!(await rateLimit(`assinar:${parte.id}`, 10, 15 * MIN))) {
    return { ok: false, erro: "Muitas tentativas. Aguarde alguns minutos." };
  }

  const token = await prisma.tokenAssinatura.findFirst({
    where: { contratoParteId: parte.id, consumidoEm: null },
    orderBy: { createdAt: "desc" },
  });
  if (!token) return { ok: false, erro: "Solicite um código primeiro" };

  const estado = tokenUtilizavel(token, new Date());
  if (!estado.ok) {
    const msg = { consumido: "Código já utilizado", expirado: "Código expirado", bloqueado: "Muitas tentativas. Solicite novo código." };
    return { ok: false, erro: msg[estado.motivo] };
  }

  // VALIDAÇÃO NO SERVIDOR (corrige a falha crítica nº1 da v1)
  const confere = await bcrypt.compare(codigo, token.codigoHash);
  if (!confere) {
    await prisma.tokenAssinatura.update({
      where: { id: token.id },
      data: { tentativas: { increment: 1 } },
    });
    return { ok: false, erro: "Código incorreto" };
  }

  const hdrs = await headers();
  const ip = (hdrs.get("x-forwarded-for") ?? "").split(",")[0].trim() || null;
  const carimbo = new Date().toISOString();
  const contratoId = parte.contratoId;

  let contratoAssinado = false;
  const consumiu = await prisma.$transaction(async (tx) => {
    // consumo ATÔMICO do token (guarda contra assinatura dupla concorrente)
    const consumo = await tx.tokenAssinatura.updateMany({
      where: { id: token.id, consumidoEm: null },
      data: { consumidoEm: new Date() },
    });
    if (consumo.count === 0) return false; // outra requisição já consumiu

    // registra a prova de assinatura por documento
    for (const doc of parte.contrato.documentos) {
      await tx.contratoParteDocumento.upsert({
        where: { contratoParteId_documentoId: { contratoParteId: parte.id, documentoId: doc.id } },
        update: {},
        create: {
          contratoParteId: parte.id,
          documentoId: doc.id,
          tipoAssinatura: "TOKEN_ELETRONICO",
          ip,
          carimboTempo: carimbo,
        },
      });
    }
    await tx.contratoParte.update({ where: { id: parte.id }, data: { statusAssinatura: "ASSINADO" } });

    // recalcula cascata considerando SÓ os signatários (ignora observador/contato)
    const partes = await tx.contratoParte.findMany({
      where: { contratoId },
      include: { papeis: { include: { papel: true } } },
    });
    const statusSign = partes.filter((p) => ehSignatario(p.papeis)).map((p) => p.statusAssinatura);
    const novoContrato = statusContratoPorPartes(statusSign);
    const novoDoc = statusDocumentoPorPartes(statusSign);
    await tx.contratoDocumento.updateMany({ where: { contratoId }, data: { statusDocumento: novoDoc } });
    await tx.contrato.update({ where: { id: contratoId }, data: { statusContrato: novoContrato } });
    await tx.contratoLog.create({
      data: { contratoId, log: `Assinado por ${parte.nomeRazaoSocial} (token, IP ${ip ?? "?"})`, carimboTempo: carimbo },
    });
    contratoAssinado = novoContrato === "ASSINADO";
    return true;
  });

  if (!consumiu) return { ok: false, erro: "Código já utilizado" };

  const clienteId = parte.contrato.clienteId;
  // contrato 100% assinado → gera os PDFs (após a resposta); senão, notifica o próximo da ordem
  after(async () => {
    try {
      await dispararWebhook(clienteId, "parte.assinou", { contratoId, parteId: parte.id, nome: parte.nomeRazaoSocial });
      if (contratoAssinado) {
        await gerarDocumentosAssinados(contratoId);
        await dispararWebhook(clienteId, "contrato.assinado", { contratoId });
      } else {
        await notificarProximo(contratoId);
      }
    } catch (e) {
      console.error("Pós-assinatura (PDF/notificação) falhou", contratoId, e);
    }
  });

  revalidatePath(`/contratos/${contratoId}`);
  return { ok: true };
}
