-- CreateTable
CREATE TABLE "ContratoPosicaoAssinatura" (
    "id" UUID NOT NULL,
    "contratoDocumentoId" UUID NOT NULL,
    "contratoParteId" UUID NOT NULL,
    "pagina" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "largura" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ContratoPosicaoAssinatura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContratoPosicaoAssinatura_contratoDocumentoId_idx" ON "ContratoPosicaoAssinatura"("contratoDocumentoId");

-- AddForeignKey
ALTER TABLE "ContratoPosicaoAssinatura" ADD CONSTRAINT "ContratoPosicaoAssinatura_contratoDocumentoId_fkey" FOREIGN KEY ("contratoDocumentoId") REFERENCES "ContratoDocumento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratoPosicaoAssinatura" ADD CONSTRAINT "ContratoPosicaoAssinatura_contratoParteId_fkey" FOREIGN KEY ("contratoParteId") REFERENCES "ContratoParte"("id") ON DELETE CASCADE ON UPDATE CASCADE;

