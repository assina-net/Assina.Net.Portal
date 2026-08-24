-- DropForeignKey
ALTER TABLE "ContratoParteDocumento" DROP CONSTRAINT "ContratoParteDocumento_documentoId_fkey";

-- DropForeignKey
ALTER TABLE "TokenAssinatura" DROP CONSTRAINT "TokenAssinatura_contratoParteId_fkey";

-- CreateIndex
CREATE INDEX "Usuario_tokenVerificacao_idx" ON "Usuario"("tokenVerificacao");

-- CreateIndex
CREATE INDEX "Usuario_chaveEsqueceuSenha_idx" ON "Usuario"("chaveEsqueceuSenha");

-- AddForeignKey
ALTER TABLE "TokenAssinatura" ADD CONSTRAINT "TokenAssinatura_contratoParteId_fkey" FOREIGN KEY ("contratoParteId") REFERENCES "ContratoParte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "ContratoDocumento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

