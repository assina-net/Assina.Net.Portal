# 02 — Telas e fluxos

Paridade funcional com a v1 (módulos: assinar, cadastros, config, dashboard, registrar, security, termos, validar) + melhorias de segurança/UX.

## Mapa de rotas

### (auth) — público
| Rota | Tela | Notas |
|---|---|---|
| `/login` | Login | sessão por cookie httpOnly |
| `/registrar` | Cadastro de novo cliente/usuário | |
| `/recuperar-senha` | Recuperação | token **fora da URL** (corrige v1) |
| `/aceite-termos` | Aceite de termos | grava `UsuarioTermo` (LGPD) |

### (app) — exige sessão + RBAC
| Rota | Tela | Perfis |
|---|---|---|
| `/dashboard` | Visão geral por status | todos |
| `/contratos` | Lista (pendente/vigente/recusado/assinado) | usuário+ |
| `/contratos/novo` | Novo contrato (upload, partes, documentos, papéis, posições) | usuário+ |
| `/contratos/[id]` | Detalhe + ações (liberar, cancelar, recusar, reenviar) | conforme papel |
| `/cadastros/clientes` | Clientes | admin_cliente+ |
| `/cadastros/pessoas` | Pessoas (PF/PJ) | usuário+ |
| `/cadastros/usuarios` | Usuários | admin_cliente+ |
| `/cadastros/papeis` | Papéis | admin_cliente+ |
| `/config/tipos-documento` | Tipos de documento + posições de assinatura | admin_cliente+ |
| `/config/segmentos` | Segmentos | admin+ |
| `/config/planos` | Planos | admin+ |
| `/config/atributos` | Parâmetros do sistema (templates email/whatsapp/sms, flags, storage) | admin_cliente+ |
| `/termos` | Gestão de termos | admin+ |

### (public) — acesso de terceiros sem login
| Rota | Tela | Notas |
|---|---|---|
| `/assinar/[chaveAcesso]` | Acesso do signatário por link | confere PDF, escolhe método, assina |
| `/validar/[codigo]` | Validação pública | confere assinatura/hash, mostra trilha |

## Fluxos principais

### Fluxo A — Enviar para assinatura (remetente)
```
login → /contratos/novo
  → upload PDF (S3) + dados do contrato
  → adiciona partes (PF/PJ, email/celular) e define papéis/posições
  → salva (rascunho) → liberar assinatura
  → sistema notifica cada parte (email/SMS/WhatsApp) com link /assinar/[chaveAcesso]
```

### Fluxo B — Assinar (signatário, sem login)
```
abre /assinar/[chaveAcesso] (mobile/web)
  → confere o PDF
  → escolhe método: gov.br | client local | certificado nuvem | token
  → autoriza/assina
  → servidor valida (token NO SERVIDOR), grava prova, atualiza status, gera selo+QRCode
  → confirmação + (opcional) email "contrato assinado"
```

### Fluxo C — Validar documento (qualquer pessoa)
```
escaneia QRCode do PDF ou acessa /validar/[codigo]
  → vê: status, partes, quem assinou, quando, método, carimbo do tempo (trilha)
```

### Fluxo D — Recusar / Cancelar
```
signatário recusa em /assinar/[chaveAcesso] → contrato RECUSADO (motivo, log)
remetente cancela em /contratos/[id] → contrato CANCELADO (motivo, log)
```

## Melhorias de UX vs v1
- Onboarding sem instalação (assinatura na nuvem/gov.br) — assina do celular.
- Estados de loading/erro consistentes (a v1 deixava spinner travado sem `finalize()`).
- Mensagens de erro claras (a v1 mostrava só "Erro " no login).
- Bundle leve, first load rápido (a v1 carregava jQuery/DataTables/3 viewers de PDF sempre).
