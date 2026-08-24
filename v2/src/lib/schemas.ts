// Schemas de validação (zod) — puros e testáveis, compartilhados pelas server actions.
import { z } from "zod";

export const papelSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  identificacao: z.string().min(1, "Identificação obrigatória"),
  assina: z.coerce.boolean().default(false),
});

export const tipoDocumentoSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  identificacao: z.string().optional(),
  assina: z.boolean().default(false),
  qrcode: z.boolean().default(false),
  validacaoOnLine: z.boolean().default(false),
});

export const usuarioSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  cpfCnpj: z.string().min(1, "CPF/CNPJ obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha mínima 6 caracteres"),
  perfil: z.enum(["ROLE_USUARIO", "ROLE_ASSINADOR", "ROLE_ADMIN_CLIENTE", "ROLE_FINANCEIRO"]),
  tipoPessoa: z.enum(["FISICA", "JURIDICA"]),
});

export const registrarSchema = z.object({
  nomeRazaoSocial: z.string().min(2, "Informe o nome/razão social"),
  tipoPessoa: z.enum(["FISICA", "JURIDICA"]),
  cpfCnpj: z.string().min(11, "CPF/CNPJ inválido"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha mínima 6 caracteres"),
});

export const trocarSenhaSchema = z.object({
  senhaAtual: z.string().min(1, "Informe a senha atual"),
  novaSenha: z.string().min(6, "Senha mínima 6 caracteres"),
});

// Cadastro de cliente (tenant) pelo admin da plataforma.
export const clienteAdminSchema = z.object({
  nomeRazaoSocial: z.string().min(2, "Informe o nome/razão social"),
  tipoPessoa: z.enum(["FISICA", "JURIDICA"]),
  cpfCnpj: z.string().min(11, "CPF/CNPJ inválido"),
  adminNome: z.string().min(2, "Informe o nome do administrador"),
  adminEmail: z.string().email("E-mail do administrador inválido"),
  adminSenha: z.string().min(6, "Senha mínima 6 caracteres"),
});

export const recuperarSenhaSchema = z.object({
  novaSenha: z.string().min(6, "Senha mínima 6 caracteres"),
});

export const parteSchema = z.object({
  nome: z.string().min(1),
  cpfCnpj: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  celular: z.string().optional().or(z.literal("")),
  tipoPessoa: z.enum(["FISICA", "JURIDICA"]),
  papelId: z.string().uuid().optional().or(z.literal("")),
});

export const docSchema = z.object({
  nomeDocumento: z.string().min(1),
  storageKey: z.string().min(1),
  sha256: z.string().optional(),
  tipoDocumentoId: z.string().uuid().optional().or(z.literal("")),
});

export const contratoSchema = z.object({
  assunto: z.string().min(1, "Assunto obrigatório"),
  identificador: z.string().optional(),
  valor: z.coerce.number().nonnegative().optional(),
  sequencial: z.coerce.boolean().default(false),
  partes: z.array(parteSchema).min(1, "Inclua ao menos uma parte"),
  documentos: z.array(docSchema).min(1, "Inclua ao menos um documento"),
});

// ── API v1 (integração externa) ──────────────────────────────────────
// Parte: e-mail é obrigatório (a notificação de assinatura depende dele).
export const apiParteSchema = z.object({
  nome: z.string().min(1),
  cpfCnpj: z.string().min(1),
  email: z.string().email("E-mail da parte inválido"),
  celular: z.string().optional(),
  tipoPessoa: z.enum(["FISICA", "JURIDICA"]),
  papelId: z.string().uuid().optional(),
});

// Documento: conteúdo enviado em base64 (PDF). Limite de tamanho aplicado na rota.
export const apiDocSchema = z.object({
  nomeDocumento: z.string().min(1),
  conteudoBase64: z.string().min(1, "conteudoBase64 obrigatório"),
  tipoDocumentoId: z.string().uuid().optional(),
});

export const apiContratoSchema = z.object({
  assunto: z.string().min(1, "Assunto obrigatório"),
  identificador: z.string().optional(),
  valor: z.coerce.number().nonnegative().optional(),
  sequencial: z.coerce.boolean().default(false),
  liberar: z.coerce.boolean().default(false),
  partes: z.array(apiParteSchema).min(1, "Inclua ao menos uma parte"),
  documentos: z.array(apiDocSchema).min(1, "Inclua ao menos um documento"),
});
