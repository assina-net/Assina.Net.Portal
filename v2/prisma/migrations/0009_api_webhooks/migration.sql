-- CreateTable
CREATE TABLE "ApiKey" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "prefixo" TEXT NOT NULL,
    "chaveHash" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "ultimoUso" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webhook" (
    "id" UUID NOT NULL,
    "clienteId" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "eventos" TEXT NOT NULL DEFAULT '*',
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Webhook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebhookEntrega" (
    "id" UUID NOT NULL,
    "webhookId" UUID NOT NULL,
    "evento" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "statusHttp" INTEGER,
    "sucesso" BOOLEAN NOT NULL DEFAULT false,
    "tentativas" INTEGER NOT NULL DEFAULT 0,
    "erro" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookEntrega_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_chaveHash_key" ON "ApiKey"("chaveHash");

-- CreateIndex
CREATE INDEX "ApiKey_clienteId_idx" ON "ApiKey"("clienteId");

-- CreateIndex
CREATE INDEX "ApiKey_prefixo_idx" ON "ApiKey"("prefixo");

-- CreateIndex
CREATE INDEX "Webhook_clienteId_idx" ON "Webhook"("clienteId");

-- CreateIndex
CREATE INDEX "WebhookEntrega_webhookId_idx" ON "WebhookEntrega"("webhookId");

-- CreateIndex
CREATE INDEX "WebhookEntrega_sucesso_idx" ON "WebhookEntrega"("sucesso");

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Webhook" ADD CONSTRAINT "Webhook_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebhookEntrega" ADD CONSTRAINT "WebhookEntrega_webhookId_fkey" FOREIGN KEY ("webhookId") REFERENCES "Webhook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

