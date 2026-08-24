/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "assina-net-portal-v2",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage ?? ""),
      home: "aws",
      providers: {
        aws: { region: "sa-east-1" },
        cloudflare: "6.17.0",
      },
    };
  },
  async run() {
    // Bucket dos documentos (original/assinado). CORS p/ upload direto do navegador.
    const documentos = new sst.aws.Bucket("Documentos", {
      cors: {
        allowOrigins: ["https://assinanet.simples.media", "http://localhost:3000"],
        allowMethods: ["GET", "PUT"],
        allowHeaders: ["*"],
      },
    });

    new sst.aws.Nextjs("Portal", {
      link: [documentos],
      // Lambda precisa enviar e-mail via SES (us-east-1, produção liberada)
      transform: {
        server: {
          permissions: [
            { actions: ["ses:SendEmail", "ses:SendRawEmail"], resources: ["*"] },
          ],
        },
      },
      domain: {
        name: "assinanet.simples.media",
        dns: sst.cloudflare.dns(),
      },
      environment: {
        DATABASE_URL: process.env.DATABASE_URL!,
        AUTH_SECRET: process.env.AUTH_SECRET!,
        AUTH_URL: "https://assinanet.simples.media",
        AUTH_TRUST_HOST: "true",
        EMAIL_FROM: "Assina.net <noreply@simples.media>",
        CRON_SECRET: process.env.CRON_SECRET!,
      },
    });

    // Job diário de manutenção (lembretes + expiração) — chama a rota com o segredo.
    new sst.aws.Cron("Manutencao", {
      schedule: "cron(0 12 * * ? *)", // 12:00 UTC = 09:00 BRT
      function: {
        handler: "cron/manutencao.handler",
        timeout: "60 seconds",
        environment: {
          CRON_URL: "https://assinanet.simples.media/api/cron/manutencao",
          CRON_SECRET: process.env.CRON_SECRET!,
        },
      },
    });
  },
});
