-- DropForeignKey
ALTER TABLE "ContratoParteDocumento" DROP CONSTRAINT "ContratoParteDocumento_contratoPartePapelId_fkey";

-- DropIndex
DROP INDEX "ContratoParteDocumento_contratoPartePapelId_documentoId_key";

-- AlterTable
ALTER TABLE "ContratoParteDocumento" ADD COLUMN     "contratoParteId" UUID NOT NULL,
ALTER COLUMN "contratoPartePapelId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ContratoParteDocumento_contratoParteId_documentoId_key" ON "ContratoParteDocumento"("contratoParteId", "documentoId");

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_contratoParteId_fkey" FOREIGN KEY ("contratoParteId") REFERENCES "ContratoParte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoParteDocumento" ADD CONSTRAINT "ContratoParteDocumento_contratoPartePapelId_fkey" FOREIGN KEY ("contratoPartePapelId") REFERENCES "ContratoPartePapel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

