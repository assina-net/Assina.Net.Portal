# 03 — API / BFF (server actions e route handlers)

O Portal/v2 é o BFF: a UI fala com **server actions** (mutações) e **route handlers** (`app/api/*` para webhooks/integração). Toda lógica sensível roda no servidor. O acesso a dados é via Prisma (compartilhado com `Sistema/v2`).

## Princípios
1. **Validação no servidor** sempre (zod nos inputs). O cliente não é fonte de verdade.
2. **RBAC + tenant** no início de cada handler: `assertPode(session, acao, recurso)`.
3. **DTOs de saída** — nunca retornar entidade crua nem campos sensíveis (senhaHash, tokens).
4. **Transação** nas operações multi-passo (Prisma `$transaction`).
5. **Idempotência** onde fizer sentido (assinar, liberar).

## Server actions (mutações) — principais

| Ação | Entrada (validada) | Regra |
|---|---|---|
| `criarContrato` | dados + arquivos | upload S3, cria Contrato+Partes+Documentos em transação |
| `liberarAssinatura` | contratoId / lote | valida tenant+perfil; muda status; enfileira notificações |
| `assinarPorToken` | chaveAcesso, **código**, docIds | **valida código NO SERVIDOR** (hash/tempo/consumo); grava prova; status cascata |
| `iniciarAssinaturaGovbr` | chaveAcesso | retorna URL de autorização gov.br |
| `iniciarAssinaturaCloud` | chaveAcesso, provider | inicia fluxo no provedor de nuvem |
| `registrarAssinaturaLocal` | chaveAcesso, assinatura | valida token de uso único do client; grava prova |
| `recusarDocumento` | chaveAcesso, motivo | status RECUSADO + log |
| `cancelarContrato` | contratoId, motivo | status CANCELADO + log |
| `reenviarSolicitacao` | contratoId | re-enfileira notificação |
| CRUD cadastros/config | conforme entidade | RBAC por perfil |

## Route handlers (`app/api/*`)

| Rota | Método | Função |
|---|---|---|
| `/api/webhooks/govbr` | POST | callback de conclusão de assinatura gov.br |
| `/api/webhooks/cloud-cert` | POST | callback do provedor de certificado em nuvem |
| `/api/integracao/contratos` | POST | API externa p/ clientes (token escopado) |
| `/api/integracao/status` | GET | status para integração |
| `/api/validar/[codigo]` | GET | dados públicos de validação (sem PII sensível) |
| `/api/download/[docId]` | GET | redireciona p/ **URL pré-assinada** S3 (sem path do cliente) |

## Contrato de erro (padrão)
```jsonc
// resposta de erro — mensagem segura ao cliente, detalhe só no log do servidor
{ "ok": false, "error": { "code": "VALIDACAO|AUTORIZACAO|NEGOCIO|INTERNO", "message": "..." } }
```
- **Nunca** vazar stacktrace (a v1 vazava `stackTrace[0]` no `@ControllerAdvice`).
- Erros de validação detalham campos; erros internos são genéricos.

## Autenticação de integração externa
- Tokens de integração **escopados por cliente**, com expiração curta e revogáveis (corrige o C3 da v1: endpoint público que dava JWT de 1 ano).
- Rate limiting nas rotas públicas/integração.

## Diferenças-chave vs a API da v1
| v1 | v2 |
|---|---|
| Endpoints recebiam/retornavam entidades JPA cruas | DTOs validados (zod) |
| Código de assinatura validado no cliente / não validado no servidor | validado no servidor (`assinarPorToken`) |
| JWT enviado ao client local (localhost:3030) | token de uso único, sem JWT (`registrarAssinaturaLocal`) |
| Download por path livre (traversal) | URL pré-assinada S3 |
| `@CrossOrigin("*")` | CORS restrito |
