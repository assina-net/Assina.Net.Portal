# 01 — Arquitetura do frontend (Next.js)

## Stack
- **Next.js (App Router)** + React + TypeScript.
- **Tailwind CSS + shadcn/ui** para UI consistente e leve (substitui o template comercial "Modern Admin"/Bootstrap 4 da v1).
- **Auth.js (NextAuth)** para sessão/JWT.
- **Prisma client** acessado só no servidor (server actions / route handlers).
- Viewer de PDF único (ex.: `react-pdf` ou `@react-pdf-viewer`) — a v1 tinha 3 libs de PDF (uma nem usada) + 7MB de PDF.js embarcado.

## Organização (App Router)
```
app/
  (auth)/        rotas públicas de autenticação
  (app)/         área logada — layout com sidebar; protegida por middleware/sessão
  (public)/      acesso de terceiros sem login (assinar por link, validar)
  api/           webhooks (gov.br), endpoints de integração, triggers de cron
```
- **Route groups** isolam layouts (auth / app / público).
- **Lazy loading nativo**: cada rota carrega só seu código (corrige o lazy quebrado com `path: ''` da v1).
- **Server Components por padrão**; Client Components só onde há interatividade (formulários, viewer, modais).

## Autenticação e RBAC
- Sessão via Auth.js (cookie httpOnly — **não** token em memória/localStorage como a v1).
- **Middleware** protege `(app)/*`: sem sessão → redireciona para login.
- **RBAC no servidor**: toda server action/route handler chama `assertPode(session, acao, recurso)` verificando `Perfil` **e** `clienteId` (tenant). O cliente nunca decide acesso (a v1 tinha `RoleGuard` que era `return true`).
- Seleção de cliente ativo (multi-tenant) guardada na sessão; toda query filtra por ele.

## Estado
- Preferir **Server Components + server actions** (dados no servidor) → menos estado no cliente.
- Estado de UI local com React (`useState`/`useReducer`); dados remotos com **React Query/SWR** quando necessário (cache, revalidação) — substitui o `SharedService` singleton mutável global da v1.
- Sem subscriptions manuais não gerenciadas (a v1 vazava 33/36 subscribes sem unsubscribe).

## Padrões de qualidade (corrigem a v1)
| v1 (Angular) | v2 (Next) |
|---|---|
| RoleGuard no-op | RBAC no servidor, sempre |
| Token/CPF na URL | corpo POST / sessão; nunca em query |
| PII no console (~42 logs) | sem logs de PII; logger controlado |
| jQuery manipulando DOM | React declarativo |
| `: any` (228x) | TypeScript tipado (tipos gerados do Prisma) |
| componentes 500-600 linhas | componentes pequenos e compostos |
| 0 OnPush, métodos no template | Server Components + memoização natural |

## Viewer e assinatura de PDF
- Visualização do documento antes de assinar (viewer único).
- Posições de assinatura vêm do catálogo (`TipoDocumentoPosicao`).
- O ato de assinar dispara server action → backend (validação/registro no servidor).

## Acessibilidade e i18n
- Componentes shadcn já acessíveis; foco em navegação por teclado.
- pt-BR padrão; estrutura pronta para i18n se necessário (a v1 tinha ngx-translate subutilizado).
