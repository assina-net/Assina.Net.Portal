# Assina.Net.Portal — v2 (frontend)

App web da v2 da **Assina.Net**, em **Next.js (App Router)**. Substitui o front Angular 8 da v1 (`../assina.net.web.portal-v1`, **read-only**). É full-stack: UI + BFF (route handlers / server actions) que orquestra autenticação, RBAC e chamadas ao domínio.

> Stack: Next.js + React + TypeScript + Tailwind + shadcn/ui, deploy AWS (OpenNext/SST), região sa-east-1. Backend/domínio e banco no repo `Assina.Net.Sistema/v2`. Decisões e análises em `../../` (`plano-v2.md`, `analise-frontend-v1.md`).

## Estrutura
```
v2/
  app/
    (auth)/      login, registrar, recuperar-senha, aceite-termos
    (app)/       dashboard, contratos, cadastros, config, termos   # exige sessão
    (public)/    assinar/[chaveAcesso], validar/[codigo]           # sem login
    api/         route handlers (webhooks gov.br, integração, cron triggers)
  components/    ui (shadcn), domínio (tabelas, viewer de PDF, formulários)
  lib/           auth, rbac, db (prisma client), signing (clientes dos providers)
  server/        server actions (mutações com validação no servidor)
  docs/          documentação (ver índice)
```

## Documentação
| Doc | Conteúdo |
|---|---|
| [docs/01-arquitetura-frontend.md](docs/01-arquitetura-frontend.md) | Estrutura Next.js, RBAC, estado, padrões |
| [docs/02-telas-fluxos.md](docs/02-telas-fluxos.md) | Telas, rotas e fluxos (paridade v1 + melhorias) |
| [docs/03-api-bff.md](docs/03-api-bff.md) | Server actions / route handlers e contratos |

## O que muda vs v1 (Angular)
- React/Next em vez de Angular 8 (EOL); sem jQuery; sem vazamento de subscriptions.
- **Validação e autorização no servidor** (a v1 validava código de assinatura e RBAC no cliente).
- Lazy loading nativo do App Router; bundle enxuto; 1 viewer de PDF.
- Sem tokens/CPF na URL; sem PII no console.
