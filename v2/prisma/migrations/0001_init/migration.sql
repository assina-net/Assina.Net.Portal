
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ATIVO', 'INATIVO');

-- CreateEnum
CREATE TYPE "StatusContrato" AS ENUM ('NAO_LIBERADO_ASSINATURA', 'LIBERANDO_ASSINATURA', 'LIBERADO_ASSINATURA', 'GERANDO_ASSINATURAS', 'PARCIALMENTE_ASSINADO', 'ASSINADO', 'CANCELADO', 'RECUSADO');

-- CreateEnum
CREATE TYPE "StatusAssinatura" AS ENUM ('NAO_LIBERADO', 'NAO_ASSINADO', 'ASSINADO_PARCIAL', 'ASSINADO');

-- CreateEnum
CREATE TYPE "StatusDocumento" AS ENUM ('NAO_ASSINA', 'NAO_ASSINADO', 'PARCIALMENTE_ASSINADO', 'ASSINADO');

-- CreateEnum
CREATE TYPE "TipoAssinatura" AS ENUM ('TOKEN_ELETRONICO', 'GOVBR', 'CERTIFICADO_LOCAL', 'CERTIFICADO_NUVEM');

-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('FISICA', 'JURIDICA');

-- CreateEnum
CREATE TYPE "Perfil" AS ENUM ('ROLE_ADMIN', 'ROLE_SUPORTE', 'ROLE_DIRETORIA', 'ROLE_FINANCEIRO', 'ROLE_ADMIN_CLIENTE', 'ROLE_USUARIO', 'ROLE_ASSINADOR', 'ROLE_INTEGRACAO');

-- CreateEnum
CREATE TYPE "TipoEnvioMsg" AS ENUM ('EMAIL', 'WHATSAPP', 'SMS');

-- CreateEnum
CREATE TYPE "TipoValorAtributo" AS ENUM ('INTEGER', 'BOOLEAN', 'TEXT_SIMPLE', 'TEXT_HTML', 'DIAS_SEMANA', 'HORARIOS', 'PDF');

-- CreateEnum
CREATE TYPE "TipoArquivo" AS ENUM ('ORIGINAL', 'ASSINADO');

-- CreateTable
CREATE TABLE "Cliente" (
    "id" UUID NOT NULL,
    "pessoaId" UUID NOT NULL,
    "segmentoId" UUID,
    "planoId" UUID,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "indicacao" TEXT,
    "dataInicioContrato" TIMESTAMP(3),
    "dataFimContrato" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL,
    "pessoaId" UUID NOT NULL,
    "login" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'ROLE_USUARIO',
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "chaveEsqueceuSenha" TEXT,
    "validadeEsqueceuSenha" TIMESTAMP(3),
    "tentativasAcesso" INTEGER NOT NULL DEFAULT 0,
    "primeiraTentativa" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioCliente" (
    "id" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "perfil" "Perfil" NOT NULL DEFAULT 'ROLE_USUARIO',
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsuarioCliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenAssinatura" (
    "id" UUID NOT NULL,
    "contratoParteId" UUID NOT NULL,
    "codigoHash" TEXT NOT NULL,
    "canal" "TipoEnvioMsg" NOT NULL,
    "validade" TIMESTAMP(3) NOT NULL,
    "tentativas" INTEGER NOT NULL DEFAULT 0,
    "maxTentativas" INTEGER NOT NULL DEFAULT 3,
    "consumidoEm" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenAssinatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioTermo" (
    "id" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "sistemaAtributoId" UUID NOT NULL,
    "dataAceite" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT,

    CONSTRAINT "UsuarioTermo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" UUID NOT NULL,
    "tipoPessoa" "TipoPessoa" NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "nomeRazaoSocial" TEXT NOT NULL,
    "email" TEXT,
    "clienteId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PessoaEndereco" (
    "id" UUID NOT NULL,
    "pessoaId" UUID NOT NULL,
    "tipoEnderecoId" UUID,
    "paisId" UUID,
    "endereco" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "municipio" TEXT,
    "estado" TEXT,
    "cep" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PessoaEndereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PessoaTelefone" (
    "id" UUID NOT NULL,
    "pessoaId" UUID NOT NULL,
    "tipoTelefoneId" UUID,
    "paisId" UUID,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PessoaTelefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PessoaJuridicaPessoaFisica" (
    "id" UUID NOT NULL,
    "pessoaJuridicaId" UUID NOT NULL,
    "pessoaFisicaId" UUID NOT NULL,

    CONSTRAINT "PessoaJuridicaPessoaFisica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PessoaFisicaPapel" (
    "id" UUID NOT NULL,
    "pessoaFisicaId" UUID NOT NULL,
    "pjPfId" UUID NOT NULL,
    "papelId" UUID NOT NULL,

    CONSTRAINT "PessoaFisicaPapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Papel" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "identificacao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "assina" BOOLEAN NOT NULL DEFAULT true,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Papel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PapelTipoCliente" (
    "id" UUID NOT NULL,
    "papelId" UUID NOT NULL,
    "segmentoId" UUID,

    CONSTRAINT "PapelTipoCliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumento" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "identificacao" TEXT,
    "assina" BOOLEAN NOT NULL DEFAULT true,
    "qrcode" BOOLEAN NOT NULL DEFAULT false,
    "validacaoOnLine" BOOLEAN NOT NULL DEFAULT false,
    "ordem" INTEGER,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TipoDocumento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumentoPapel" (
    "id" UUID NOT NULL,
    "tipoDocumentoId" UUID NOT NULL,
    "papelId" UUID NOT NULL,
    "token" BOOLEAN NOT NULL DEFAULT false,
    "certificate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TipoDocumentoPapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumentoParte" (
    "id" UUID NOT NULL,
    "tipoDocumentoId" UUID NOT NULL,
    "clienteId" UUID,
    "pessoaId" UUID,
    "pessoaPjId" UUID,

    CONSTRAINT "TipoDocumentoParte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumentoPartePapel" (
    "id" UUID NOT NULL,
    "tipoDocumentoParteId" UUID NOT NULL,
    "papelId" UUID NOT NULL,

    CONSTRAINT "TipoDocumentoPartePapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumentoPosicao" (
    "id" UUID NOT NULL,
    "tipoDocumentoId" UUID NOT NULL,
    "papelId" UUID NOT NULL,
    "pagina" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TipoDocumentoPosicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDocumentoTipoCliente" (
    "id" UUID NOT NULL,
    "tipoDocumentoId" UUID NOT NULL,
    "segmentoId" UUID,

    CONSTRAINT "TipoDocumentoTipoCliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "periodo" TEXT,
    "quantidadeDocumentos" INTEGER,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Segmento" (
    "id" UUID NOT NULL,
    "identificacao" TEXT,
    "nome" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Segmento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemaTipoAtributo" (
    "id" UUID NOT NULL,
    "tipoAtributo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "descricao" TEXT,
    "tipoValor" "TipoValorAtributo" NOT NULL,

    CONSTRAINT "SistemaTipoAtributo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemaAtributo" (
    "id" UUID NOT NULL,
    "tipoAtributoId" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "valorAtributo" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SistemaAtributo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pais" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "codigoPais" TEXT,
    "capital" TEXT,
    "codigoTelefonePais" INTEGER,
    "bandeiraEmoji" TEXT,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaisIdiomas" (
    "id" UUID NOT NULL,
    "paisId" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PaisIdiomas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoEndereco" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "identificacao" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "TipoEndereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoTelefone" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "identificacao" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "TipoTelefone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contrato" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "remetenteId" UUID NOT NULL,
    "identificador" TEXT,
    "assunto" TEXT,
    "tipoContrato" TEXT,
    "valorContrato" DECIMAL(18,2),
    "moeda" TEXT,
    "tipoIntegracao" INTEGER,
    "statusContrato" "StatusContrato" NOT NULL DEFAULT 'NAO_LIBERADO_ASSINATURA',
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "liberadoAssinatura" BOOLEAN NOT NULL DEFAULT false,
    "validado" BOOLEAN NOT NULL DEFAULT false,
    "validacaoMensagem" TEXT,
    "motivoCancelamento" TEXT,
    "usuarioCancelamentoId" UUID,
    "dataCancelamento" TIMESTAMP(3),
    "motivoRecusa" TEXT,
    "usuarioRecusaId" UUID,
    "dataRecusa" TIMESTAMP(3),
    "usuarioSolicitacaoId" UUID,
    "dataSolicitacao" TIMESTAMP(3),
    "carimboTempoSolicitacao" TEXT,
    "dataStatusContrato" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoParte" (
    "id" UUID NOT NULL,
    "contratoId" UUID NOT NULL,
    "tipoPessoa" "TipoPessoa" NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "nomeRazaoSocial" TEXT NOT NULL,
    "email" TEXT,
    "celular" TEXT,
    "statusAssinatura" "StatusAssinatura" NOT NULL DEFAULT 'NAO_ASSINADO',
    "liberadoAssinatura" BOOLEAN NOT NULL DEFAULT false,
    "requisitoAssinatura" TEXT,
    "chaveAcesso" TEXT,
    "validadeChaveAcesso" TIMESTAMP(3),
    "contratoPartePjId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContratoParte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoDocumento" (
    "id" UUID NOT NULL,
    "contratoId" UUID NOT NULL,
    "tipoDocumentoId" UUID,
    "nomeDocumento" TEXT NOT NULL,
    "storageKeyOriginal" TEXT,
    "storageKeyAssinado" TEXT,
    "sha256Original" TEXT,
    "sha256Assinado" TEXT,
    "dadosOrigem" TEXT,
    "statusDocumento" "StatusDocumento" NOT NULL DEFAULT 'NAO_ASSINADO',
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "dataAssinado" TIMESTAMP(3),
    "carimboTempoAssinado" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContratoDocumento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoPartePapel" (
    "id" UUID NOT NULL,
    "contratoParteId" UUID NOT NULL,
    "papelId" UUID NOT NULL,

    CONSTRAINT "ContratoPartePapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoDocumentoPapel" (
    "id" UUID NOT NULL,
    "contratoDocumentoId" UUID NOT NULL,
    "papelId" UUID NOT NULL,

    CONSTRAINT "ContratoDocumentoPapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoParteDocumento" (
    "id" UUID NOT NULL,
    "contratoPartePapelId" UUID NOT NULL,
    "documentoId" UUID NOT NULL,
    "usuarioId" UUID,
    "tipoAssinatura" "TipoAssinatura" NOT NULL,
    "assinaturaStorageKey" TEXT,
    "ip" TEXT,
    "carimboTempo" TEXT,
    "serialCertificado" TEXT,
    "providerRef" TEXT,
    "dataAssinatura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContratoParteDocumento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoLog" (
    "id" UUID NOT NULL,
    "contratoId" UUID NOT NULL,
    "contratoDocumentoId" UUID,
    "log" TEXT NOT NULL,
    "logSistema" BOOLEAN NOT NULL DEFAULT false,
    "carimboTempo" TEXT,
    "dataLog" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContratoLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailFila" (
    "id" UUID NOT NULL,
    "tipoEnvio" "TipoEnvioMsg" NOT NULL DEFAULT 'EMAIL',
    "email" TEXT,
    "enviado" BOOLEAN NOT NULL DEFAULT false,
    "tentativas" INTEGER NOT NULL DEFAULT 0,
    "logSucesso" TEXT,
    "logFalha" TEXT,
    "erroEnvio" TEXT,
    "dataEnvio" TIMESTAMP(3),
    "dataUltimoEnvio" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailFila_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_pessoaId_key" ON "Cliente"("pessoaId");

-- CreateIndex
CREATE INDEX "Cliente_status_idx" ON "Cliente"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_login_key" ON "Usuario"("login");

-- CreateIndex
CREATE INDEX "Usuario_status_idx" ON "Usuario"("status");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioCliente_usuarioId_clienteId_key" ON "UsuarioCliente"("usuarioId", "clienteId");

-- CreateIndex
CREATE INDEX "TokenAssinatura_contratoParteId_consumidoEm_idx" ON "TokenAssinatura"("contratoParteId", "consumidoEm");

-- CreateIndex
CREATE INDEX "UsuarioTermo_usuarioId_idx" ON "UsuarioTermo"("usuarioId");

-- CreateIndex
CREATE INDEX "Pessoa_cpfCnpj_idx" ON "Pessoa"("cpfCnpj");

-- CreateIndex
CREATE INDEX "Pessoa_clienteId_idx" ON "Pessoa"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "PessoaJuridicaPessoaFisica_pessoaJuridicaId_pessoaFisicaId_key" ON "PessoaJuridicaPessoaFisica"("pessoaJuridicaId", "pessoaFisicaId");

-- CreateIndex
CREATE UNIQUE INDEX "PessoaFisicaPapel_pjPfId_pessoaFisicaId_papelId_key" ON "PessoaFisicaPapel"("pjPfId", "pessoaFisicaId", "papelId");

-- CreateIndex
CREATE INDEX "Papel_clienteId_idx" ON "Papel"("clienteId");

-- CreateIndex
CREATE INDEX "TipoDocumento_clienteId_idx" ON "TipoDocumento"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "SistemaTipoAtributo_tipoAtributo_key" ON "SistemaTipoAtributo"("tipoAtributo");

-- CreateIndex
CREATE UNIQUE INDEX "SistemaAtributo_clienteId_tipoAtributoId_key" ON "SistemaAtributo"("clienteId", "tipoAtributoId");

-- CreateIndex
CREATE INDEX "Contrato_clienteId_statusContrato_idx" ON "Contrato"("clienteId", "statusContrato");

-- CreateIndex
CREATE INDEX "Contrato_remetenteId_idx" ON "Contrato"("remetenteId");

-- CreateIndex
CREATE UNIQUE INDEX "ContratoParte_chaveAcesso_key" ON "ContratoParte"("chaveAcesso");

-- CreateIndex
CREATE INDEX "ContratoParte_contratoId_idx" ON "ContratoParte"("contratoId");

-- CreateIndex
CREATE INDEX "ContratoParte_chaveAcesso_idx" ON "ContratoParte"("chaveAcesso");

-- CreateIndex
CREATE INDEX "ContratoDocumento_contratoId_idx" ON "ContratoDocumento"("contratoId");

-- CreateIndex
CREATE INDEX "ContratoPartePapel_contratoParteId_idx" ON "ContratoPartePapel"("contratoParteId");

-- CreateIndex
CREATE INDEX "ContratoParteDocumento_documentoId_idx" ON "ContratoParteDocumento"("documentoId");

-- CreateIndex
CREATE UNIQUE INDEX "ContratoParteDocumento_contratoPartePapelId_documentoId_key" ON "ContratoParteDocumento"("contratoPartePapelId", "documentoId");

-- CreateIndex
CREATE INDEX "ContratoLog_contratoId_idx" ON "ContratoLog"("contratoId");

-- CreateIndex
CREATE INDEX "EmailFila_enviado_dataUltimoEnvio_idx" ON "EmailFila"("enviado", "dataUltimoEnvio");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_segmentoId_fkey" FOREIGN KEY ("segmentoId") REFERENCES "Segmento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCliente" ADD CONSTRAINT "UsuarioCliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioCliente" ADD CONSTRAINT "UsuarioCliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenAssinatura" ADD CONSTRAINT "TokenAssinatura_contratoParteId_fkey" FOREIGN KEY ("contratoParteId") REFERENCES "ContratoParte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioTermo" ADD CONSTRAINT "UsuarioTermo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioTermo" ADD CONSTRAINT "UsuarioTermo_sistemaAtributoId_fkey" FOREIGN KEY ("sistemaAtributoId") REFERENCES "SistemaAtributo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaEndereco" ADD CONSTRAINT "PessoaEndereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaEndereco" ADD CONSTRAINT "PessoaEndereco_tipoEnderecoId_fkey" FOREIGN KEY ("tipoEnderecoId") REFERENCES "TipoEndereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaEndereco" ADD CONSTRAINT "PessoaEndereco_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaTelefone" ADD CONSTRAINT "PessoaTelefone_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaTelefone" ADD CONSTRAINT "PessoaTelefone_tipoTelefoneId_fkey" FOREIGN KEY ("tipoTelefoneId") REFERENCES "TipoTelefone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaTelefone" ADD CONSTRAINT "PessoaTelefone_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaJuridicaPessoaFisica" ADD CONSTRAINT "PessoaJuridicaPessoaFisica_pessoaJuridicaId_fkey" FOREIGN KEY ("pessoaJuridicaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaJuridicaPessoaFisica" ADD CONSTRAINT "PessoaJuridicaPessoaFisica_pessoaFisicaId_fkey" FOREIGN KEY ("pessoaFisicaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaFisicaPapel" ADD CONSTRAINT "PessoaFisicaPapel_pessoaFisicaId_fkey" FOREIGN KEY ("pessoaFisicaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaFisicaPapel" ADD CONSTRAINT "PessoaFisicaPapel_pjPfId_fkey" FOREIGN KEY ("pjPfId") REFERENCES "PessoaJuridicaPessoaFisica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaFisicaPapel" ADD CONSTRAINT "PessoaFisicaPapel_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Papel" ADD CONSTRAINT "Papel_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PapelTipoCliente" ADD CONSTRAINT "PapelTipoCliente_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PapelTipoCliente" ADD CONSTRAINT "PapelTipoCliente_segmentoId_fkey" FOREIGN KEY ("segmentoId") REFERENCES "Segmento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumento" ADD CONSTRAINT "TipoDocumento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPapel" ADD CONSTRAINT "TipoDocumentoPapel_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPapel" ADD CONSTRAINT "TipoDocumentoPapel_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoParte" ADD CONSTRAINT "TipoDocumentoParte_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPartePapel" ADD CONSTRAINT "TipoDocumentoPartePapel_tipoDocumentoParteId_fkey" FOREIGN KEY ("tipoDocumentoParteId") REFERENCES "TipoDocumentoParte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPartePapel" ADD CONSTRAINT "TipoDocumentoPartePapel_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPosicao" ADD CONSTRAINT "TipoDocumentoPosicao_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoPosicao" ADD CONSTRAINT "TipoDocumentoPosicao_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoTipoCliente" ADD CONSTRAINT "TipoDocumentoTipoCliente_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoDocumentoTipoCliente" ADD CONSTRAINT "TipoDocumentoTipoCliente_segmentoId_fkey" FOREIGN KEY ("segmentoId") REFERENCES "Segmento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SistemaAtributo" ADD CONSTRAINT "SistemaAtributo_tipoAtributoId_fkey" FOREIGN KEY ("tipoAtributoId") REFERENCES "SistemaTipoAtributo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SistemaAtributo" ADD CONSTRAINT "SistemaAtributo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaisIdiomas" ADD CONSTRAINT "PaisIdiomas_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoEndereco" ADD CONSTRAINT "TipoEndereco_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoTelefone" ADD CONSTRAINT "TipoTelefone_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_remetenteId_fkey" FOREIGN KEY ("remetenteId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_usuarioCancelamentoId_fkey" FOREIGN KEY ("usuarioCancelamentoId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_usuarioRecusaId_fkey" FOREIGN KEY ("usuarioRecusaId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_usuarioSolicitacaoId_fkey" FOREIGN KEY ("usuarioSolicitacaoId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParte" ADD CONSTRAINT "ContratoParte_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParte" ADD CONSTRAINT "ContratoParte_contratoPartePjId_fkey" FOREIGN KEY ("contratoPartePjId") REFERENCES "ContratoParte"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDocumento" ADD CONSTRAINT "ContratoDocumento_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDocumento" ADD CONSTRAINT "ContratoDocumento_tipoDocumentoId_fkey" FOREIGN KEY ("tipoDocumentoId") REFERENCES "TipoDocumento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoPartePapel" ADD CONSTRAINT "ContratoPartePapel_contratoParteId_fkey" FOREIGN KEY ("contratoParteId") REFERENCES "ContratoParte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoPartePapel" ADD CONSTRAINT "ContratoPartePapel_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDocumentoPapel" ADD CONSTRAINT "ContratoDocumentoPapel_contratoDocumentoId_fkey" FOREIGN KEY ("contratoDocumentoId") REFERENCES "ContratoDocumento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoDocumentoPapel" ADD CONSTRAINT "ContratoDocumentoPapel_papelId_fkey" FOREIGN KEY ("papelId") REFERENCES "Papel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_contratoPartePapelId_fkey" FOREIGN KEY ("contratoPartePapelId") REFERENCES "ContratoPartePapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "ContratoDocumento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoLog" ADD CONSTRAINT "ContratoLog_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "Contrato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

