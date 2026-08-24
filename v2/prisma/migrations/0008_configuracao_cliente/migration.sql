-- CreateTable
CREATE TABLE "ConfiguracaoCliente" (
    "clienteId" UUID NOT NULL,
    "prazoExpiracaoDias" INTEGER NOT NULL DEFAULT 30,
    "prazoLembreteDias" INTEGER NOT NULL DEFAULT 3,
    "mensagemConvite" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConfiguracaoCliente_pkey" PRIMARY KEY ("clienteId")
);

-- AddForeignKey
ALTER TABLE "ConfiguracaoCliente" ADD CONSTRAINT "ConfiguracaoCliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

