(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-assinar-assinar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n\r\n    <app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\">\r\n\r\n        <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n            <div class=\"form-body row\">\r\n\r\n                <div class=\"col-md-7 table-responsive table-wrapper-scroll-y\">\r\n                    <div>\r\n                        <br />\r\n                        <div *ngIf=\"!somenteUmDocumento\">\r\n                            <app-complete-tab-form [dados]=\"contratoDocumentoModal\" [cols]=\"titulosDocumentos\"\r\n                                [showButtons]=\"!consultando\" [permiteEditar]=\"false\" [permiteIncluir]=\"false\"\r\n                                [sizeExibir]=\"'xl'\"\r\n                                [permiteExcluir]=\"false\" [viewerDoc]=\"visualizarModalForm\"\r\n                                [permiteExibirDocumento]=\"true\" [itemTemplate]=\"detalheArquivo\">\r\n                                <ng-template #detalheArquivo let-item>\r\n                                    <td>{{item.nomeDocumento}}</td>\r\n                                    <td>{{item.tipoDocumento.nome}}</td>\r\n                                    <td>{{item.descStatusDocumento}}</td>\r\n                                    <td>\r\n                                        <!--<table>\r\n                                            <tr *ngFor=\"let papel of item.papel\">\r\n                                                <td>\r\n                                                    <span style=\"display: inline-flex;font-size: xx-small;\">\r\n                                                        <span style=\"margin-left:5px\">{{papel.descricao}}</span>\r\n                                                    </span>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </table>-->\r\n                                    </td>\r\n\r\n                                </ng-template>\r\n                            </app-complete-tab-form>\r\n\r\n                            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                                {{ message.text }}\r\n                            </ngb-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <ng-container *ngIf=\"somenteUmDocumento\">\r\n                        <!--<ng2-pdfjs-viewer pdfSrc=\"https://www.africau.edu/images/default/sample.pdf\"\r\n                        [download]=\"false\" [print]=\"false\" [openFile]=\"false\"\r\n                        [fullScreen]='false'></ng2-pdfjs-viewer>-->\r\n                        <ng2-pdfjs-viewer [pdfSrc]=\"byteArray\" viewerId=\"inline\" [print]=\"true\" [diagnosticLogs]=false [fullScreen]=\"true\" [openFile]=\"false\" [find]=\"false\"></ng2-pdfjs-viewer>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <br />\r\n                    <app-cadastro-parte-form [dados]=\"partes\" [showButtons]=\"permiteEditar()\" [permiteEditar]=\"permiteEditar()\"\r\n                        [permiteIncluir]=\"false\" [permiteExcluir]=\"false\" [permiteExibirDocumento]=\"false\"\r\n                        [contratoAssinado]=\"ContratoRequest.contrato.statusContrato=='ASSINADO'\"\r\n                        (change)=\"adicionouContratoParte()\">\r\n                    </app-cadastro-parte-form>\r\n                    <div class=\"form-actions\" *ngIf=\"alterouDadosParte\">\r\n                        <button type=\"button\" class=\"btn btn-raised btn-success mr-1\" (click)=\"salvarContratoParte()\">\r\n                            <!--<i class=\"fa fa-check\"></i>--><i class=\"fa fa-circle\"></i> Salvar\r\n                        </button><br>\r\n                        <span class=\"badge badge-secondary\">\r\n                            Clique em 'Salvar' para gravar as modificações\r\n                        </span>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"TemObservadores()\">\r\n                        <br />  \r\n                        Observadores\r\n                        <app-cadastro-parte-form [dados]=\"contratoObservadoresModal\" \r\n                        [showButtons]=\"true\" [permiteEditar]=\"true\"\r\n                            [permiteIncluir]=\"false\" [permiteExcluir]=\"false\" [permiteExibirDocumento]=\"false\"\r\n                        [contratoAssinado]=\"ContratoRequest.contrato.statusContrato=='ASSINADO'\"\r\n                        (change)=\"adicionouObservador()\"\r\n                        [statusContrato]=\"ContratoRequest.contrato.statusContrato\"\r\n                        [novoRegistro]=\"'Novo Observador'\"\r\n                        [tipoCadastro]=\"'OBSERVADOR'\"\r\n                        [mensagemExclusao]=\"'Deseja retirar esta parte para assinatura ? '\">\r\n                        </app-cadastro-parte-form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"inputIdentificador\" class=\"control-label\">Identificador</label>\r\n                        <input type=\"text\" [(ngModel)]=\"ContratoRequest.contrato.identificador\" name=\"identificador\" readonly=\"true\"\r\n                            class=\"form-control\" id=\"inputIdentificador\" #identificador=\"ngModel\" placeholder=\"Informe\"\r\n                            upperCase minlength=\"3\" maxlength=\"40\" required appAutofocus>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"inputAssunto\" class=\"control-label\">Assunto</label>\r\n                        <input type=\"text\" [(ngModel)]=\"ContratoRequest.contrato.assunto\" name=\"x\" class=\"form-control\"  readonly=\"true\"\r\n                            id=\"inputAssunto\" #assunto=\"ngModel\" placeholder=\"Informe\" upperCase maxlength=\"20\"\r\n                            required>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"div-assinaturas col-sm-5\">\r\n                <table class=\"table-assinaturas table-responsive table-wrapper-scroll-y\">\r\n                    <thead class=\"thead-custom\">\r\n                        <tr>\r\n                            <td><label>Histórico</label>\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let registro of logListagem\">\r\n                            <td>{{registro.carimboTempoLog}}<br>\r\n                                <div [innerHTML]=\"registro.log\"></div>\r\n                                <BR><BR>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"!logListagem.length\">\r\n                            <td colspan=\"5\">Nenhum registro encontrado</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-2\">\r\n            <div class=\"col-md-12 text-right clearfix\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-raised btn-secondary mr-1\" (click)=\"voltar()\">\r\n                    <!--<i class=\"fa fa-repeat\"></i>--> Voltar\r\n                </button>\r\n                <button *ngIf=\"!somenteUmDocumento\" class=\"btn btn-lg btn-raised btn-primary mr-1\" type=\"button\"\r\n                    (click)=\"exibirAssinar()\" [hidden]=\"!ContratoRequest.assinarDocumento\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Assinar documentos\r\n                </button>\r\n                <button *ngIf=\"somenteUmDocumento\" class=\"btn btn-lg btn-raised btn-primary mr-1\" type=\"button\"\r\n                    (click)=\"exibirAssinar()\" [hidden]=\"!ContratoRequest.assinarDocumento\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Assinar documento\r\n                </button>\r\n\r\n                <button *ngIf=\"podeCancelar\" class=\"btn btn-lg btn-raised btn-danger mr-1\" type=\"button\"\r\n                    (click)=\"exibirCancelar()\">\r\n                    <!--<i class=\"fa fa-ban\"></i>--> Cancelar documentos\r\n                </button>\r\n\r\n                \r\n                <button  class=\"btn btn-lg btn-raised btn-danger mr-1\" type=\"button\"\r\n                    (click)=\"exibirRecusar()\"  [hidden]=\"!ContratoRequest.assinarDocumento\">\r\n                    <!--<i class=\"fa fa-ban\"></i>--> Recusar documentos\r\n                </button>\r\n\r\n                <button class=\"btn btn-raised btn-blue-as btn-lg mr-1\" type=\"button\" (click)=\"contratoDownload($event)\"\r\n                    [disabled]=\"ContratoRequest.contrato.statusContrato!='ASSINADO'\" *ngIf=\"!rota.includes('pendente')\">\r\n                    <!-- <i class=\"fa fa-download\"></i>--> Download\r\n                </button>\r\n\r\n                <button class=\"btn btn-lg btn-raised btn-green mr-1\" type=\"button\" \r\n                    (click)=\"exibirTodosDocumentos()\">\r\n                    Imprimir e Visualizar Todos\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n    </app-form-simples>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/lista/lista-assina.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/lista/lista-assina.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" class=\"title-pag\">\r\n    <form autocomplete=\"off\" class=\"form form-horizontal\">\r\n        <div>\r\n            <combo-pessoa-cliente (clienteChangeEvent)=\"clienteChange()\"\r\n                [excluirPerfilAssinador]=\"excluirPerfilAssinador\"></combo-pessoa-cliente>\r\n        </div>\r\n        <div _ngcontent-tbi-c11=\"\" class=\"col-md-12 clearfix\">\n            <p _ngcontent-tbi-c11=\"\" style=\"background: #314355;\" class=\"font-medium white text-center p-1\">Selecione\n                uma operação abaixo para acessar suas informações </p>\n            <small class=\"d-block text-right text-muted\" *ngIf=\"totalRegistros > 0\">\n                {{totalRegistros}} documento(s) encontrado(s)\n            </small>\n        </div>\n        <div class=\"lista-assinaturas-grid rounded\" sortable-table (sorted)=\"onSorted($event)\"\n            [class.com-selecao]=\"exibirSelecao\"\n            [class.com-valor]=\"clienteSegmento()=='FACTORING' || clienteSegmento()=='FIDC' || clienteSegmento()=='SECURITIZADORA'\">\n            <div class=\"lista-assinaturas-cabecalho\">\n                <div *ngIf=\"exibirSelecao\" class=\"lista-assinaturas-selecao\">\n                    <i *ngIf=\"!tudoSelecionado\" class=\"fa fa-circle grey font-medium-3\" (click)=\"selecionaTudo()\"></i>\n                    <i *ngIf=\"tudoSelecionado\" class=\"fa fa-circle primary font-medium-3\" (click)=\"limpaSelecao()\"></i>\n                </div>\n                <div>\n                    <a sortable-column=\"dataCriacao\">Data</a>\n                    <input type=\"text\" [(ngModel)]=\"filtro.dataCriacao\" name=\"dataCriacao\" class=\"form-control\"\n                        placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\n                </div>\n                <div>\n                    <a sortable-column=\"identificador\">Identificador</a>\n                    <input type=\"text\" [(ngModel)]=\"filtro.identificador\" name=\"identificador\" class=\"form-control\"\n                        placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\n                </div>\n                <div>\n                    <a sortable-column=\"assunto\">Assunto</a>\n                    <input type=\"text\" [(ngModel)]=\"filtro.assunto\" name=\"assunto\" class=\"form-control\"\n                        placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\n                </div>\n                <div *ngIf=\"clienteSegmento()=='FACTORING' || clienteSegmento()=='FIDC' || clienteSegmento()=='SECURITIZADORA'\">\n                    <a sortable-column=\"valorContratro\">Valor</a>\n                    <input type=\"text\" [(ngModel)]=\"filtro.valorContratro\" name=\"valorContratro\" class=\"form-control\"\n                        placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\n                </div>\n                <div>\n                    <a sortable-column=\"statusContrato\">Status</a>\n                    <select class=\"form-control\" [(ngModel)]=\"filtro.statusContrato\" name=\"statusContrato\"\n                        (ngModelChange)=\"filtrando()\">\n                        <option [ngValue]=\"null\">Selecione</option>\n                        <option *ngFor=\"let opcao of opcoesStatusContrato\" [value]=\"opcao.value\">{{opcao.label}}</option>\n                    </select>\n                </div>\n                <div>\n                    <a>Partes</a>\n                    <input type=\"text\" [(ngModel)]=\"filtro.partes[0].nomeRazaoSocial\" name=\"partes\"\n                        class=\"form-control\" placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\n                </div>\n            </div>\n\n            <div class=\"lista-assinaturas-corpo\" [ngStyle]=\"classUpperCase()\">\n                <div *ngFor=\"let contrato of listagem\" class=\"lista-assinaturas-linha\"\n                    [ngClass]=\"legendaGrid(contrato)\" (click)=\"selecionarLinha(contrato)\"\n                    (dblclick)=\"detalhar(false)\">\n                    <div *ngIf=\"exibirSelecao\" class=\"lista-assinaturas-selecao\"\n                        (click)=\"alteranaSelecao(contrato); $event.stopPropagation()\">\n                        <i class=\"fa fa-circle font-medium-3\"\n                            [ngClass]=\"selection.indexOf(contrato.id) > -1 ? 'primary' : 'grey'\"></i>\n                    </div>\n                    <div class=\"text-center\">{{contrato.dataCriacao | date: 'dd/MM/yyyy HH:mm'}}</div>\n                    <div>{{contrato.identificador}}</div>\n                    <div>{{contrato.assunto}}</div>\n                    <div *ngIf=\"clienteSegmento()=='FACTORING' || clienteSegmento()=='FIDC' || clienteSegmento()=='SECURITIZADORA'\"\n                        class=\"text-right\">{{contrato.valorContratro | currency:'R$':true}}</div>\n                    <div>{{contrato.descStatusContrato}}</div>\n                    <div class=\"lista-assinaturas-partes\">\n                        <ng-container *ngFor=\"let parte of (contrato.partes || [])\">\n                            <span class=\"lista-assinaturas-parte\">\n                                <i *ngIf=\"parte.tipoPessoa=='FISICA' && observador(parte)\" class=\"fa fa-eye\"></i>\n                                <span *ngIf=\"parte.tipoPessoa=='FISICA' && !observador(parte)\"\n                                    class=\"lista-assinaturas-status\"\n                                    [ngClass]=\"{'nao-assinado': parte.statusAssinatura=='NAOASSINADO',\n                                                'nao-liberado': parte.statusAssinatura=='NAOLIBERADO',\n                                                'assinado': parte.statusAssinatura=='ASSINADO'}\"></span>\n                                {{parte.nomeRazaoSocial}}\n                            </span>\n                            <span *ngFor=\"let contato of (parte.contatos || [])\" class=\"lista-assinaturas-parte\">\n                                <i *ngIf=\"contato.tipoPessoa=='FISICA' && observador(contato)\" class=\"fa fa-eye\"></i>\n                                <span *ngIf=\"contato.tipoPessoa=='FISICA' && !observador(contato)\"\n                                    class=\"lista-assinaturas-status\"\n                                    [ngClass]=\"{'nao-assinado': contato.statusAssinatura=='NAOASSINADO',\n                                                'nao-liberado': contato.statusAssinatura=='NAOLIBERADO',\n                                                'assinado': contato.statusAssinatura=='ASSINADO'}\"></span>\n                                {{contato.nomeRazaoSocial}}\n                            </span>\n                        </ng-container>\n                    </div>\n                </div>\n                <div *ngIf=\"!listagem.length\" class=\"lista-assinaturas-vazia\">Nenhum registro encontrado</div>\n            </div>\n        </div>\n        <div class=\"row m-2 crud-actions\">\n            <div class=\"col-md-12 text-right clearfix\">\r\n\r\n                <!-- <app-pagination [page]=\"page\" (paginationEvent)=changePage($event)></app-pagination>-->\r\n                <button *ngIf=\"gerarAssinatura\" class=\"btn btn-lg btn-raised btn-green mr-1\" type=\"button\" (click)=\"gerarAssinaturaNovamente($event)\"\r\n                    [disabled]=\"!objetoSelecionado || objetoSelecionado.statusContrato !='ASSINADO'\">\r\n                    <!--<i class=\"fa fa-eye\"></i>--> Gerar Assinatura(s) Novamente\r\n                </button>\r\n                <button class=\"btn btn-lg btn-raised btn-blue-as mr-1\" type=\"button\" (click)=\"detalhar()\"\r\n                    [disabled]=\"!objetoSelecionado\">\r\n                    <!--<i class=\"fa fa-eye\"></i>--> Exibir\r\n                </button>\r\n                <button *ngIf=\"podeAssinar\" class=\"btn btn-lg btn-raised btn-primary mr-1\" type=\"button\"\r\n                    [disabled]=\"selection.length==0\" (click)=\"exibirAssinar()\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Assinar documentos selecionados\r\n                </button>\r\n                <button *ngIf=\"podeCancelar\" class=\"btn btn-lg btn-raised btn-danger mr-1\" type=\"button\"\r\n                    [disabled]=\"selection.length==0\" (click)=\"exibirCancelar()\">\r\n                    <!--<i class=\"fa fa-ban\"></i>--> Cancelar documentos selecionados\r\n                </button>\r\n                <button class=\"btn btn-lg btn-raised btn-blue-as mr-1\" type=\"button\" (click)=\"contratoDownload($event)\" id=\"btnDownload\"\r\n                    [hidden]=\"consultando\"\r\n                    [disabled]=\" (!objetoSelecionado  || objetoSelecionado.statusContrato !='ASSINADO') && selection.length == 0\"\r\n                    *ngIf=\"!rota.includes('pendente')\">\r\n                    <!--<i class=\"fa fa-download\"></i>--> Download\r\n                </button></div>\r\n        </div>\r\n\r\n    </form>\r\n</app-form-simples>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Assinar > Documento > Assinar'\">\r\n            <h5 class=\"text-center blue-as pt-2\">Selecione abaixo o procedimento de assinatura</h5>\r\n            <mat-tab-group dynamicHeight=\"true\" disableRipple=\"true\" class=\"m-4\">\r\n\r\n                <mat-tab label=\"Assinatura Eletrônica\" *ngIf=\"assinaViaAssinaturaEletronica()\">\r\n                    <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"assinarViaCodigo()\" autocomplete=\"off\"\r\n                        novalidate>\r\n\r\n                        <div class=\"row desktop\">\r\n\r\n                            <div class=\"col-md-12\">\r\n                                <table class=\"table table-hover table-sm\" *ngIf=\"exibeEscolhaViaAssinaturaEletronica()\">\r\n                                    <thead class=\"thead-custom\">\r\n                                        <tr>\r\n                                            <th width=\"33%\">Escolha uma opcão para receber o código\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let celular of whatsappParaAssinatura\" \r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'WHATSAPP', 'item':celular})\"\r\n                                            (click)=\"selecionarLinhaEnvio(celular, 'WHATSAPP')\">\r\n                                            <td>Via WhatsApp: <b>{{celular | uppercase}}</b></td>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let celular of celularesParaAssinatura\"\r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'SMS', 'item':celular})\"\r\n                                            (click)=\"selecionarLinhaEnvio(celular, 'SMS')\">\r\n                                            <td>Via SMS: <b>{{celular | uppercase}}</b></td>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let email of emailsParaAssinatura\"\r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'EMAIL', 'item':email})\"\r\n                                            (click)=\"selecionarLinhaEnvio(email, 'EMAIL')\">\r\n                                            <td>Via e-mail: <b>{{email | lowercase}}</b></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <label for=\"inputCodigo\" class=\"control-label blue-as text-center\"\r\n                                    *ngIf=\"!exibeEscolhaViaAssinaturaEletronica()\">\r\n                                    O Código será envido via {{tipoEnvio=='SMS'?'SMS':'EMAIL'}} para :\r\n                                    {{emailSelecionado}}\r\n                                </label>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center blue-as pt-4 pb-4\">Clique em\r\n                                    <span class=\"blue-as\" style=\"font-weight: 400;\">SOLICITAR CÓDIGO</span> para receber\r\n                                    o código que deve ser inserido no\r\n                                    campo abaixo. Então, clique em <span class=\"primary\"\r\n                                        style=\"font-weight: 400;\">ASSINAR\r\n                                        DOCUMENTO</span> para realizar a assinatura.\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-2 \">\r\n                                <!-- <label>Clique no botão abaixo para receber o código de assinatura</label>-->\r\n\r\n                                <button class=\"btn btn-raised btn-blue-as text-uppercase btn-lg\" type=\"button\"\r\n                                    (click)=\"enviaCodigo()\">\r\n                                    <!--<i class=\"fa fa-envelope-square\"></i>--> Solicitar Código\r\n                                </button>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-10 blue-as text-center\">\r\n                                <label for=\"inputCodigo\" class=\"control-label blue-as text-center\">Insira o código\r\n                                    recebido </label>\r\n                                <input type=\"number\" [(ngModel)]=\"codigoDigitado\" name=\"inputCodigo\"\r\n                                    class=\"form-control\" id=\"inputCodigo\" #identificador=\"ngModel\" placeholder=\"Informe\"\r\n                                    minlength=\"3\" maxlength=\"8\" required appAutofocus>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                        <div class=\"row mobile\">\r\n\r\n                            <div class=\"col-md-12\">\r\n                                <table class=\"table table-hover table-sm\" *ngIf=\"exibeEscolhaViaAssinaturaEletronica()\">\r\n                                    <thead class=\"thead-custom\">\r\n                                        <tr>\r\n                                            <th width=\"33%\">Esolha um e-mail para receber o código\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let celular of whatsappParaAssinatura\" \r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'WHATSAPP', 'item':celular})\"\r\n                                            (click)=\"selecionarLinhaEnvio(celular, 'WHATSAPP')\">\r\n                                            <td>Via WhatsApp: {{celular | uppercase}}</td>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let celular of celularesParaAssinatura\"\r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'SMS', 'item':celular})\"\r\n                                            (click)=\"selecionarLinhaEnvio(celular, 'SMS')\">\r\n                                            <td>Via SMS: {{celular | uppercase}}</td>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let email of emailsParaAssinatura\"\r\n                                            [ngClass]=\"selecionarGridEnvio({'tipo': 'EMAIL', 'item':email})\"\r\n                                            (click)=\"selecionarLinhaEnvio(email, 'EMAIL')\">\r\n                                            <td>Via e-mail: {{email | lowercase}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <label for=\"inputCodigo\" class=\"control-label blue-as text-center\"\r\n                                    *ngIf=\"!exibeEscolhaViaAssinaturaEletronica()\">\r\n                                    O Código será envido via {{tipoEnvio=='SMS'?'SMS':'EMAIL'}} para :\r\n                                    {{emailSelecionado}}\r\n                                </label>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center blue-as pt-4 pb-4\">Clique em\r\n                                    <span class=\"blue-as\" style=\"font-weight: 400;\">SOLICITAR CÓDIGO</span> para receber\r\n                                    o código que deve ser inserido no\r\n                                    campo abaixo. Então, clique em <span class=\"primary\"\r\n                                        style=\"font-weight: 400;\">ASSINAR\r\n                                        DOCUMENTO</span> para realizar a assinatura.\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-4 \">\r\n                                <!-- <label>Clique no botão abaixo para receber o código de assinatura</label>-->\r\n\r\n                                <button class=\"btn btn-raised btn-blue-as text-uppercase w-100 btn-lg\" type=\"button\"\r\n                                    (click)=\"enviaCodigo()\">\r\n                                    <!--<i class=\"fa fa-envelope-square\"></i>--> Solicitar Código\r\n                                </button>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-8 blue-as text-center\">\r\n                                <label for=\"inputCodigoMob\" class=\"control-label blue-as text-center\">Insira o código\r\n                                    recebido</label>\r\n                                <input type=\"number\" [(ngModel)]=\"codigoDigitado\" name=\"inputCodigo\"\r\n                                    class=\"form-control\" id=\"inputCodigoMob\" #identificador=\"ngModel\" placeholder=\"Informe\"\r\n                                    minlength=\"3\" maxlength=\"8\" required appAutofocus>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                    <br>\r\n                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                        {{ message.text }}\r\n                    </ngb-alert>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 text-center\">\r\n                            <!-- <div botoes>-->\r\n                            <button class=\"btn btn-raised btn-primary btn-lg w-100\" type=\"button\"\r\n                                (click)=\"assinarViaCodigo()\">\r\n                                <!--<i class=\"fa fa-edit\"></i>--> Assinar documento\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Certificado local\" *ngIf=\"assinaViaCertificadoDigital()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 text-center blue-as pt-4 pb-4\">Selecione o certificado digital no campo\r\n                            abaixo. Então,\r\n                            clique em <span class=\"primary\" style=\"font-weight: 400;\">ASSINAR DOCUMENTO</span> para\r\n                            realizar a\r\n                            assinatura.\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"(assindorRodando && versaoAssinador );else AssinadorNaoEncontrado\">\r\n\r\n                        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y\">\r\n                            <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"assinarViaCertificadoLocal()\"\r\n                                autocomplete=\"off\" novalidate>\r\n                                <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y\">\r\n                                    <table class=\"table table-hover table-sm\">\r\n                                        <thead class=\"thead-custom\">\r\n                                            <tr>\r\n                                                <th width=\"33%\">Cerficado\r\n                                                </th>\r\n                                                <th width=\"33%\">Responsável\r\n                                                </th>\r\n                                                <th width=\"33%\">Tipo\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let certificado of certificados\"\r\n                                                [ngClass]=\"selecionarGrid(certificado)\"\r\n                                                (click)=\"selecionarLinha(certificado)\">\r\n                                                <td>{{certificado.nome | uppercase}}</td>\r\n                                                <td>{{certificado.responsavelNome | uppercase}} -\r\n                                                    {{certificado.responsavelCpf}}\r\n                                                </td>\r\n                                                <td>{{certificado.tipoCertificadoAN | uppercase}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                        <tr *ngIf=\"!certificados.length\">\r\n                                            <td colspan=\"3\">Pesquisando certificados</td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </form>\r\n                            <br>\r\n                        </div>\r\n                        <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                            {{ message.text }}\r\n                        </ngb-alert>\r\n                        <div botoes>\r\n                            <button class=\"btn btn-raised btn-primary w-100 btn-lg\" type=\"button\"\r\n                                (click)=\"assinarViaCertificadoLocal()\" [disabled]=\"!aliasCertificado\">\r\n                                <!--<i class=\"fa fa-edit\"></i>--> Assinar documento\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <ng-template #AssinadorNaoEncontrado>\r\n                        <div class=\"box-green mb-4 p-2\">\r\n\r\n                            <div *ngIf=\"versaoAssinador;else AssinadorDesatualizado\">\r\n                                <label class=\"labelMensagem\">\r\n                                    Não foram encontradas informações de certificados locais em seu\r\n                                    dispositivo.</label><br><br>\r\n                                <label class=\"labelMensagem\">Verifique se nosso assinador está instalado. Para instá-lo,\r\n                                    <a href=\"{{urlDownloadAssinador}}\" target=\"_blank\"\r\n                                        class=\"control-label primary\">clique\r\n                                        aqui</a>\r\n                                    , faça o download e execute o programa.</label>\r\n                            </div>\r\n                            <ng-template #AssinadorDesatualizado>\r\n                                <label class=\"labelMensagem\">\r\n                                    Seu assinador está desatualizado! Versão Instalada: {{versaoAssinadorInstalada}} -> Versão Atual: {{versaoAssinadorAtual}}.</label><br><br>\r\n                                <label class=\"labelMensagem\">Para atualizá-lo,\r\n                                    <a href=\"{{urlDownloadAssinador}}\" target=\"_blank\"\r\n                                        class=\"control-label primary\">clique\r\n                                        aqui</a>\r\n                                    , faça o download e execute o programa.</label>\r\n                            </ng-template>\r\n                            <br>\r\n                            <br>\r\n                            <label class=\"labelMensagem\">Após a instalação clique abaixo para listar os\r\n                                certificados</label>\r\n                        </div>\r\n                        <div>\r\n\r\n                            <button class=\"btn btn-raised btn-blue-as w-100 btn-lg\" type=\"button\"\r\n                                (click)=\"buscaCertificadosLocal()\">\r\n                                <!--<i class=\"fa fa-edit\"></i>--> Listar certificados\r\n                            </button>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" class=\"form form-horizontal\" novalidate>\r\n    <div class=\"form-body\">\r\n\r\n        <app-modal-simples [titulo]=\"'Assinaturas > Cancelar'\">\r\n\r\n            <form #form=\"ngForm\" (ngSubmit)=\"cancelarDocumento()\" autocomplete=\"off\" class=\"form form-horizontal\"\r\n                novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"control-label\" for=\"inputCodigo\">Informe o motivo do cancelamento</label>\r\n\r\n                        <textarea #identificador=\"ngModel\" [(ngModel)]=\"motivoCancelamento\" appAutofocus\r\n                            [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputCodigo\" rows=\"10\"\r\n                            #motivo=\"ngModel\" name=\"inputCodigo\" placeholder=\"Informe o motivo do cancelamento\" required\r\n                            type=\"text\">\r\n                        </textarea>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"motivo.errors?.required && (motivo.dirty || motivo.touched)\">Informe\r\n                            o Motivo\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <ngb-alert (close)=\"message = null\" *ngIf=\"message\" type=\"{{message.type}}\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n            <div botoes>\r\n                <button (click)=\"cancelarDocumento()\" class=\"btn btn-raised btn-danger\" type=\"button\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Cancelar Documento\r\n                </button>\r\n            </div>\r\n        </app-modal-simples>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" class=\"form form-horizontal\" novalidate>\r\n    <div class=\"form-body\">\r\n\r\n        <app-modal-simples [titulo]=\"'Assinaturas > Recusar'\">\r\n\r\n            <form #form=\"ngForm\" (ngSubmit)=\"recusarDocumento()\" autocomplete=\"off\" class=\"form form-horizontal\"\r\n                novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"control-label\" for=\"inputCodigo\">Informe o motivo da recusa</label>\r\n\r\n                        <textarea #identificador=\"ngModel\" [(ngModel)]=\"motivoCancelamento\" appAutofocus\r\n                            [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputCodigo\" rows=\"10\"\r\n                            #motivo=\"ngModel\" name=\"inputCodigo\" placeholder=\"Informe o motivo do cancelamento\" required\r\n                            type=\"text\">\r\n                        </textarea>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"motivo.errors?.required && (motivo.dirty || motivo.touched)\">Informe\r\n                            o Motivo\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <ngb-alert (close)=\"message = null\" *ngIf=\"message\" type=\"{{message.type}}\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n            <div botoes>\r\n                <button (click)=\"recusarDocumento()\" class=\"btn btn-raised btn-danger\" type=\"button\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Recusar Documento\r\n                </button>\r\n            </div>\r\n        </app-modal-simples>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Assinar > Documento > Visualizar'\">\r\n\r\n            <label class=\"control-label\">{{documento.nomeDocumento}}</label>\r\n            <div style=\"height:500px\">\r\n                <ng2-pdfjs-viewer #pdfViewer viewerId=\"inline\" [print]=\"true\"  [fullScreen]=\"true\" [diagnosticLogs]=false [openFile]=\"false\" [find]=\"false\"></ng2-pdfjs-viewer>\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/assinar/assinar-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/assinar/assinar-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AssinarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssinarRoutingModule", function() { return AssinarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_changes_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/changes.guard */ "./src/app/components/security/changes.guard.ts");
/* harmony import */ var _security_role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/role.guard */ "./src/app/components/security/role.guard.ts");
/* harmony import */ var _pendente_lista_lista_pendente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendente/lista/lista-pendente.component */ "./src/app/components/assinar/pendente/lista/lista-pendente.component.ts");
/* harmony import */ var _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pendente/detalhe/detalhe-pendente.component */ "./src/app/components/assinar/pendente/detalhe/detalhe-pendente.component.ts");
/* harmony import */ var _vigente_lista_lista_vigente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vigente/lista/lista-vigente.component */ "./src/app/components/assinar/vigente/lista/lista-vigente.component.ts");
/* harmony import */ var _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vigente/detalhe/detalhe-vigente.component */ "./src/app/components/assinar/vigente/detalhe/detalhe-vigente.component.ts");
/* harmony import */ var _recusado_lista_lista_recusado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recusado/lista/lista-recusado.component */ "./src/app/components/assinar/recusado/lista/lista-recusado.component.ts");
/* harmony import */ var _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recusado/detalhe/detalhe-recusado.component */ "./src/app/components/assinar/recusado/detalhe/detalhe-recusado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'assinar',
        children: [
            {
                path: 'pendente',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: 80000100 },
                children: [
                    { path: 'detalhe', component: _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_5__["DetalhePendenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'detalhe/:id', component: _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_5__["DetalhePendenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo', component: _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_5__["DetalhePendenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_5__["DetalhePendenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _pendente_lista_lista_pendente_component__WEBPACK_IMPORTED_MODULE_4__["ListaPendenteComponent"] }
                ]
            },
            {
                path: 'vigente',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: 80000200 },
                children: [
                    { path: 'detalhe', component: _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_7__["DetalheVigenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'detalhe/:id', component: _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_7__["DetalheVigenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo', component: _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_7__["DetalheVigenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_7__["DetalheVigenteComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _vigente_lista_lista_vigente_component__WEBPACK_IMPORTED_MODULE_6__["ListaVigenteComponent"] }
                ]
            },
            {
                path: 'recusado',
                canActivate: [_security_role_guard__WEBPACK_IMPORTED_MODULE_3__["RoleGuard"]],
                data: { menuId: 80000300 },
                children: [
                    { path: 'detalhe', component: _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_9__["DetalheRecusadoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'detalhe/:id', component: _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_9__["DetalheRecusadoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo', component: _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_9__["DetalheRecusadoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'novo/:id', component: _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_9__["DetalheRecusadoComponent"], canDeactivate: [_security_changes_guard__WEBPACK_IMPORTED_MODULE_2__["PendingChangesGuard"]] },
                    { path: 'lista', component: _recusado_lista_lista_recusado_component__WEBPACK_IMPORTED_MODULE_8__["ListaRecusadoComponent"] }
                ]
            }
        ],
    }
];
var AssinarRoutingModule = /** @class */ (function () {
    function AssinarRoutingModule() {
    }
    AssinarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AssinarRoutingModule);
    return AssinarRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/assinar/assinar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/assinar/assinar.module.ts ***!
  \******************************************************/
/*! exports provided: AssinarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssinarModule", function() { return AssinarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _util_pipe_enumPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/pipe/enumPipe */ "./src/app/components/util/pipe/enumPipe.ts");
/* harmony import */ var _util_pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/pipe/phonePipe */ "./src/app/components/util/pipe/phonePipe.ts");
/* harmony import */ var _util_pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/pipe/valuesPipe */ "./src/app/components/util/pipe/valuesPipe.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/util.module */ "./src/app/components/util/util.module.ts");
/* harmony import */ var _assinar_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assinar-routing.module */ "./src/app/components/assinar/assinar-routing.module.ts");
/* harmony import */ var _padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./padrao/lista/lista-assina-padrao.component */ "./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts");
/* harmony import */ var _padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./padrao/detalhe/detalhe-assina.component */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.ts");
/* harmony import */ var _pendente_lista_lista_pendente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pendente/lista/lista-pendente.component */ "./src/app/components/assinar/pendente/lista/lista-pendente.component.ts");
/* harmony import */ var _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pendente/detalhe/detalhe-pendente.component */ "./src/app/components/assinar/pendente/detalhe/detalhe-pendente.component.ts");
/* harmony import */ var _padrao_modal_visualizar_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./padrao/modal/visualizar/visualizar-modal.component */ "./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.ts");
/* harmony import */ var _padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./padrao/modal/assinar/assinar-modal.component */ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.ts");
/* harmony import */ var _padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./padrao/modal/cancelar/cancelar-modal.component */ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.ts");
/* harmony import */ var _vigente_lista_lista_vigente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vigente/lista/lista-vigente.component */ "./src/app/components/assinar/vigente/lista/lista-vigente.component.ts");
/* harmony import */ var _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vigente/detalhe/detalhe-vigente.component */ "./src/app/components/assinar/vigente/detalhe/detalhe-vigente.component.ts");
/* harmony import */ var _padrao_modal_recusar_recusar_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./padrao/modal/recusar/recusar-modal.component */ "./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.ts");
/* harmony import */ var _recusado_lista_lista_recusado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recusado/lista/lista-recusado.component */ "./src/app/components/assinar/recusado/lista/lista-recusado.component.ts");
/* harmony import */ var _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recusado/detalhe/detalhe-recusado.component */ "./src/app/components/assinar/recusado/detalhe/detalhe-recusado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AssinarModule = /** @class */ (function () {
    function AssinarModule() {
    }
    AssinarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_7__["UtilModule"],
                _assinar_routing_module__WEBPACK_IMPORTED_MODULE_8__["AssinarRoutingModule"]
            ],
            exports: [],
            declarations: [
                _padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_9__["ListaAssinaPadraoComponent"],
                _padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_10__["DetalheAssinaComponent"],
                _pendente_lista_lista_pendente_component__WEBPACK_IMPORTED_MODULE_11__["ListaPendenteComponent"],
                _pendente_detalhe_detalhe_pendente_component__WEBPACK_IMPORTED_MODULE_12__["DetalhePendenteComponent"],
                _padrao_modal_visualizar_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_13__["VisualizarModalComponent"],
                _padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_14__["AssinarModalComponent"],
                _padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_15__["CancelarModalComponent"],
                _vigente_lista_lista_vigente_component__WEBPACK_IMPORTED_MODULE_16__["ListaVigenteComponent"],
                _vigente_detalhe_detalhe_vigente_component__WEBPACK_IMPORTED_MODULE_17__["DetalheVigenteComponent"],
                _recusado_lista_lista_recusado_component__WEBPACK_IMPORTED_MODULE_19__["ListaRecusadoComponent"],
                _recusado_detalhe_detalhe_recusado_component__WEBPACK_IMPORTED_MODULE_20__["DetalheRecusadoComponent"],
                _padrao_modal_recusar_recusar_modal_component__WEBPACK_IMPORTED_MODULE_18__["RecusarModalComponent"]
            ],
            providers: [
                _util_pipe_enumPipe__WEBPACK_IMPORTED_MODULE_4__["ENumAsStringPipe"], _util_pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__["ValuesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskPipe"], _util_pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"]
            ],
            entryComponents: [
                _padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_14__["AssinarModalComponent"],
                _padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_15__["CancelarModalComponent"],
                _padrao_modal_visualizar_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_13__["VisualizarModalComponent"],
                _padrao_modal_recusar_recusar_modal_component__WEBPACK_IMPORTED_MODULE_18__["RecusarModalComponent"],
            ]
        })
    ], AssinarModule);
    return AssinarModule;
}());



/***/ }),

/***/ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  position:fixed;\r\n  background: black;\r\n  color: white;\r\n  height: 100vh;\r\n}\r\n\r\n\r\n.div-assinaturas{\r\n    float: right;\r\n    top: 0;\r\n\r\n}\r\n\r\n\r\n.div-assinaturas table tr td{\r\n  background-color:#d5efda;\r\n  border-radius: 0.4rem;\r\n  border:1px solid #89CC9D;\r\n\r\n}\r\n\r\n\r\n.table-assinaturas tbody { background-color: gainsboro; border: gray 1px solid; border-radius: 15px;}\r\n\r\n\r\n@media (max-width: 959px){\r\n  .div-assinaturas{\r\n   margin-top: 20px;\r\n\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9kZXRhbGhlL2RldGFsaGUtYXNzaW5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLE1BQU07O0FBRVY7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix3QkFBd0I7O0FBRTFCOzs7QUFJQSwyQkFBMkIsMkJBQTJCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUM7OztBQUVwRztFQUNFO0dBQ0MsZ0JBQWdCOztBQUVuQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9kZXRhbGhlL2RldGFsaGUtYXNzaW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5kaXYtYXNzaW5hdHVyYXN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6IDA7XHJcblxyXG59XHJcblxyXG4uZGl2LWFzc2luYXR1cmFzIHRhYmxlIHRyIHRke1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Q1ZWZkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjODlDQzlEO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4udGFibGUtYXNzaW5hdHVyYXMgdGJvZHkgeyBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87IGJvcmRlcjogZ3JheSAxcHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDE1cHg7fVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAuZGl2LWFzc2luYXR1cmFze1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalheAssinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheAssinaComponent", function() { return DetalheAssinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_components_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_components_assinar_padrao_modal_visualizar_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/components/assinar/padrao/modal/visualizar/visualizar-modal.component */ "./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.ts");
/* harmony import */ var app_components_assinar_padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/components/assinar/padrao/modal/assinar/assinar-modal.component */ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.ts");
/* harmony import */ var app_components_assinar_padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/components/assinar/padrao/modal/cancelar/cancelar-modal.component */ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.ts");
/* harmony import */ var app_components_assinar_padrao_modal_recusar_recusar_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/assinar/padrao/modal/recusar/recusar-modal.component */ "./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.ts");
/* harmony import */ var app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var DetalheAssinaComponent = /** @class */ (function (_super) {
    __extends(DetalheAssinaComponent, _super);
    function DetalheAssinaComponent(route, modalService, 
    //private utilService: UtilService,
    documentoService) {
        var _this = _super.call(this, route) || this;
        _this.modalService = modalService;
        _this.documentoService = documentoService;
        _this.partes = { listagem: [], dirty: false };
        _this.observadores = { listagem: [], dirty: false };
        _this.documentos = { listagem: [], dirty: false };
        _this.logListagem = [];
        _this.emailsParaAssinatura = [];
        _this.celularesParaAssinatura = [];
        _this.titulosPartes = ['Ação', 'Nome/Razão Social', 'Assinaturas'];
        _this.titulosDocumentos = ['Ação', 'Arquivo', 'Tipo', 'Status'];
        _this.documentoPDF = {};
        _this.documento = {};
        _this.alterouDadosParte = false;
        _this.visualizarModalForm = app_components_assinar_padrao_modal_visualizar_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_9__["VisualizarModalComponent"];
        _this.assinarModalForm = app_components_assinar_padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_10__["AssinarModalComponent"];
        _this.cancelarModalForm = app_components_assinar_padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelarModalComponent"];
        _this.recusarModalForm = app_components_assinar_padrao_modal_recusar_recusar_modal_component__WEBPACK_IMPORTED_MODULE_12__["RecusarModalComponent"];
        _this.large = false;
        _this.httpService = documentoService;
        _this.podeCancelar = _this.shared.perfilUsuarioAdmin();
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__["AppInjector"].getInjector();
        _this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]);
        _this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]);
        return _this;
    }
    DetalheAssinaComponent.prototype.afterRetrieveData = function () {
        this.contratoPartesInit(this.entidade.contrato.partes);
        this.contratoDocumentosInit(this.entidade.contrato.documentos);
        this.contratoLogInit(this.entidade.contratoLog);
    };
    Object.defineProperty(DetalheAssinaComponent.prototype, "ContratoRequest", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetalheAssinaComponent.prototype, "contratoDocumentoModal", {
        get: function () {
            return this.documentos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetalheAssinaComponent.prototype, "somenteUmDocumento", {
        get: function () {
            return this._somenteUmDocumento;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetalheAssinaComponent.prototype, "contratoObservadoresModal", {
        get: function () {
            return this.observadores;
        },
        enumerable: true,
        configurable: true
    });
    DetalheAssinaComponent.prototype.TemObservadores = function () {
        return this.observadores.listagem.length > 0;
    };
    DetalheAssinaComponent.prototype.contratoLogInit = function (listagem) {
        this.logListagem = listagem;
        this.entidade.contratoLog = [];
    };
    DetalheAssinaComponent.prototype.contratoPartesInit = function (listagem) {
        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };
        for (var iItem in listagem) {
            var item = listagem[iItem];
            if (item.tipoPessoa == "FISICA") {
                if (this.observador(item)) {
                    this.observadores.listagem.push(item);
                }
                else {
                    this.partes.listagem.push(item);
                }
            }
            else {
                for (var icontato in item.contatos) {
                    var contato = item.contatos[icontato];
                    if (this.observador(contato)) {
                        this.observadores.listagem.push(item);
                    }
                    else {
                        this.partes.listagem.push(item);
                    }
                    //pode verificar somente o primeiro papel
                    break;
                }
                ;
            }
        }
        ;
    };
    DetalheAssinaComponent.prototype.contratoDocumentosInit = function (listagem) {
        this.documentos = { listagem: listagem, dirty: false };
        this.entidade.contratoDocumento = this.documentos.listagem;
        if (this.documentos.listagem == null) {
            this._somenteUmDocumento = false;
        }
        else {
            this._somenteUmDocumento = this.documentos.listagem.length == 1;
            if (this._somenteUmDocumento) {
                var documento = { documentoPDF: this.documentos.listagem[0].documento };
                this.pdfInit(documento);
                //zera o pdf para nao trafegar a toa
                this.documentos.listagem[0].documento = null;
                this.documento = this.documentos.listagem[0];
            }
        }
    };
    DetalheAssinaComponent.prototype.pdfInit = function (documento) {
        var documentoPDFDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_14__["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(function (char) { return char.charCodeAt(0); }));
    };
    DetalheAssinaComponent.prototype.pdfInitByteArray = function (documento) {
        this.documentoPDFDescompactadoValues = lz_string__WEBPACK_IMPORTED_MODULE_14__["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + this.documentoPDFDescompactadoValues;
        this.byteArray = new Uint8Array(atob(this.documentoPDFDescompactadoValues).split('').map(function (char) { return char.charCodeAt(0); }));
    };
    DetalheAssinaComponent.prototype.buscaPDF = function () {
        var _this = this;
        this.documentoService.getDocumentoPDF(this.documento).subscribe(function (responseApi) {
            _this.pdfInit(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
        return null;
    };
    Object.defineProperty(DetalheAssinaComponent.prototype, "formDirty", {
        get: function () {
            return this.form.dirty || this.documentos.dirty;
        },
        enumerable: true,
        configurable: true
    });
    DetalheAssinaComponent.prototype.montaListaEmailCelular = function () {
        var _this = this;
        this.emailsParaAssinatura = [];
        this.celularesParaAssinatura = [];
        this.emailsParaAssinatura.push(this.shared.usuario.pessoa.email);
        //if (this.shared.usuario.pessoa.celular != "" && this.shared.usuario.pessoa.celular != null)
        // this.celularesParaAssinatura.push(this.shared.usuario.pessoa.celular);
        this.partes.listagem.forEach(function (parte) {
            var achouParte = false;
            if (parte.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO') {
                if (parte.email != undefined && parte.email != "" && parte.email != null && !_this.emailsParaAssinatura.includes(parte.email))
                    _this.emailsParaAssinatura.push(parte.email);
                if (parte.cpfCnpj != _this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj)
                    if (parte.celular != undefined && parte.celular != "" && parte.celular != null && !_this.celularesParaAssinatura.includes(parte.celular))
                        _this.celularesParaAssinatura.push(parte.celular);
                achouParte = true;
                return;
            }
            if (!achouParte && parte.cpfCnpj != _this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                parte.contatos.forEach(function (contato) {
                    if (contato.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO') {
                        if (contato.email != undefined && contato.email != "" && contato.celular != null && !_this.emailsParaAssinatura.includes(contato.email))
                            _this.emailsParaAssinatura.push(contato.email);
                        if (contato.celular != undefined && contato.celular != "" && contato.celular != null && !_this.celularesParaAssinatura.includes(contato.celular))
                            _this.celularesParaAssinatura.push(contato.celular);
                        return;
                    }
                });
            }
        });
    };
    DetalheAssinaComponent.prototype.verificaAssinadorAtivo = function () {
        var _this = this;
        this.documentoService.verificaAssinadorAtivo().subscribe(function (responseApi) {
            _this.dialog.success(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    DetalheAssinaComponent.prototype.exibirTodosDocumentos = function () {
        var _this = this;
        this.loading.show();
        this.documentoService.getDocumentosPDF(this.documentos.listagem).subscribe(function (responseApi) {
            _this.pdfInitByteArray(responseApi);
            var modalRef = _this.modalService.open(_this.visualizarModalForm, {
                backdrop: 'static', centered: true, keyboard: false, size: 'xl'
            });
            modalRef.componentInstance.byteArray = _this.byteArray;
            modalRef.componentInstance.documentoPDFDescompactado = _this.documentoPDFDescompactadoValues;
            modalRef.componentInstance.documentoPDF = _this.documentoPDF;
            _this.loading.hide();
        }, function (err) {
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
    };
    DetalheAssinaComponent.prototype.exibirAssinar = function () {
        var _this = this;
        this.montaListaEmailCelular();
        var modalRef = this.modalService.open(this.assinarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        var partesCNPJ = [];
        this.partes.listagem.forEach(function (parte) {
            if (parte.tipoPessoa == 'JURIDICA') {
                parte.contatos.forEach(function (contato) {
                    if (contato.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj) {
                        partesCNPJ.push(parte.cpfCnpj);
                    }
                });
            }
        });
        var contrato = {
            contrato: this.entidade.contrato,
            cnpjs: partesCNPJ,
            assinandoLote: false
        };
        var pessoa = Object.assign(JSON.parse(JSON.stringify(this.shared.usuario.pessoa)), contrato);
        modalRef.componentInstance.instance = pessoa;
        modalRef.componentInstance.emailsParaAssinatura = this.emailsParaAssinatura;
        modalRef.componentInstance.celularesParaAssinatura = this.celularesParaAssinatura;
        modalRef.componentInstance.documento = this.documento;
        modalRef.componentInstance.documentos = this.documentos.listagem;
        var breakValue;
        breakValue = false;
        var papel = [];
        for (var x = 0; x < this.partes.listagem.length; x++) {
            for (var y = 0; y < this.partes.listagem[x].contatos.length; y++) {
                if (this.partes.listagem[x].contatos[y].cpfCnpj == pessoa.cpfCnpj) {
                    breakValue = true;
                    for (var z = 0; z < this.partes.listagem[x].contatos[y].papel.length; z++) {
                        papel.push(this.partes.listagem[x].contatos[y].papel[z]);
                    }
                }
                if (breakValue) {
                    break;
                }
            }
            if (breakValue) {
                break;
            }
        }
        if (papel.length == 0) {
            var lstpapel = this.partes.listagem.filter(function (p) { return p.cpfCnpj == pessoa.cpfCnpj; }).map(function (p) { return p.papel; });
            for (var a = 0; a < lstpapel[0].length; a++) {
                papel.push(lstpapel[0].at(a));
            }
        }
        modalRef.componentInstance.papel = papel;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "assinado") {
                    _this.ngOnInit();
                }
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_13__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    DetalheAssinaComponent.prototype.contratoDownload = function (event) {
        var _this = this;
        event.target.disabled = true;
        this.loading.show();
        this.documentoService.getDownload(this.entidade.contrato).subscribe(function (responseApi) {
            var item = { anexo64: "", nomeArquivo: "" };
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            _this.utilService.download(item);
            event.target.disabled = false;
            _this.loading.hide();
        }, function (err) {
            _this.loading.hide();
            event.target.disabled = false;
            _this.errorHandler.handle(err);
        });
    };
    DetalheAssinaComponent.prototype.voltar = function () {
        this.router.navigate([this.rota], { skipLocationChange: true });
    };
    DetalheAssinaComponent.prototype.salvarContratoParte = function () {
    };
    DetalheAssinaComponent.prototype.adicionouContratoParte = function () {
        var _this = this;
        this.documentoService.salvarPartesAlteradas(this.partes.listagem).subscribe(function (responseApi) {
            _this.dialog.success(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    DetalheAssinaComponent.prototype.exibirCancelar = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.cancelarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        });
        modalRef.componentInstance.instance = [this.entidade.contrato.id];
        modalRef.componentInstance.rota = this.rota;
        modalRef.componentInstance.mensagemCancelamento = this.mensagemCancelamento;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "cancelado") {
                    _this.ngOnInit();
                }
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_13__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    DetalheAssinaComponent.prototype.exibirRecusar = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.recusarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        });
        modalRef.componentInstance.instance = [this.entidade.contrato.id];
        modalRef.componentInstance.rota = this.rota;
        modalRef.componentInstance.mensagemRecusar = this.mensagemRecusar;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "recusado") {
                    _this.ngOnInit();
                }
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_13__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    DetalheAssinaComponent.prototype.exibirDocumento = function () {
        var modalRef = this.modalService.open(this.visualizarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'xl'
        });
        var documentoModal = JSON.parse(JSON.stringify(this.documento));
        modalRef.componentInstance.instance = documentoModal;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_13__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    DetalheAssinaComponent.prototype.observador = function (parte) {
        for (var iPapel in parte.papel) {
            var papel = parte.papel[iPapel];
            if (papel.papel.identificacao == "OBSERVADOR") {
                return true;
            }
            else {
                return false;
            }
        }
    };
    DetalheAssinaComponent.prototype.permiteEditar = function () {
        return this.shared.perfilUsuarioAdmin() || this.shared.verificaPerfilClienteSelecionado(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_15__["PerfilEnum"].ROLE_USUARIO);
    };
    DetalheAssinaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_8__["DocumentoService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], DetalheAssinaComponent.prototype, "form", void 0);
    DetalheAssinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalhe-assina',
            template: __webpack_require__(/*! raw-loader!../../padrao/detalhe/detalhe-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/detalhe/detalhe-assina.component.css */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_8__["DocumentoService"]])
    ], DetalheAssinaComponent);
    return DetalheAssinaComponent;
}(app_components_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_7__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListaAssinaPadraoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAssinaPadraoComponent", function() { return ListaAssinaPadraoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_components_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_components_assinar_padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/components/assinar/padrao/modal/assinar/assinar-modal.component */ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.ts");
/* harmony import */ var app_components_assinar_padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/assinar/padrao/modal/cancelar/cancelar-modal.component */ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListaAssinaPadraoComponent = /** @class */ (function (_super) {
    __extends(ListaAssinaPadraoComponent, _super);
    function ListaAssinaPadraoComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        _this.selection = [];
        _this.emailsParaAssinatura = [];
        _this.celularesParaAssinatura = [];
        _this.contratoList = [];
        _this.totalRegistros = 0;
        _this.ultimaConsulta = 0;
        _this.assinarModalForm = app_components_assinar_padrao_modal_assinar_assinar_modal_component__WEBPACK_IMPORTED_MODULE_6__["AssinarModalComponent"];
        _this.cancelarModalForm = app_components_assinar_padrao_modal_cancelar_cancelar_modal_component__WEBPACK_IMPORTED_MODULE_7__["CancelarModalComponent"];
        _this.large = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__["AppInjector"].getInjector();
        _this.dialog = injector.get(app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]);
        _this.tudoSelecionado = false;
        _this.exibirSelecao = false;
        _this.podeAssinar = false;
        _this.fazDownload = false;
        _this.podeCancelar = _this.shared.perfilUsuarioAdmin();
        _this.excluirPerfilAssinador = false;
        return _this;
    }
    ListaAssinaPadraoComponent.prototype.findAll = function (pageable, filtro) {
        var _this = this;
        var consultaAtual = ++this.ultimaConsulta;
        this.loading.show();
        this.objetoSelecionado = null;
        var paginaSolicitada = pageable.number;
        var contratoFiltroRequest = {
            usuario: this.shared.usuario,
            contrato: filtro
        };
        this.httpService.findAll(pageable, contratoFiltroRequest).subscribe(function (responseApi) {
            if (consultaAtual !== _this.ultimaConsulta) {
                return;
            }
            var pagina = responseApi && responseApi.data;
            if (!pagina || !Array.isArray(pagina.content)) {
                _this.listagem = [];
                _this.loading.hide();
                _this.dialog.warning("Não foi possível carregar a lista de documentos.");
                return;
            }
            if (paginaSolicitada === 0) {
                _this.listagem = pagina.content;
            }
            else {
                _this.listagem = _this.listagem.concat(pagina.content);
            }
            _this.totalRegistros = pagina.totalElements != null
                ? pagina.totalElements
                : _this.listagem.length;
            _this.pages = new Array(pagina.totalPages);
            var order = _this.page.order;
            _this.page = pagina;
            _this.page.order = order;
            _this.afterRetrieveData();
            _this.loading.hide();
        }, function (err) {
            if (consultaAtual !== _this.ultimaConsulta) {
                return;
            }
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
    };
    // filtrar() {
    //   this.findAll(this.page, this.filtro);
    // }
    ListaAssinaPadraoComponent.prototype.clienteChange = function () {
        this.listagem = [];
        this.totalRegistros = 0;
        this.selection = [];
        this.tudoSelecionado = false;
        this.filtro.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
        this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }];
        if (this.shared.verificaPerfilClienteSelecionado(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_8__["PerfilEnum"].ROLE_ASSINADOR)) {
            this.filtro.partes[0].cpfCnpj = this.shared.usuario.pessoa.cpfCnpj;
        }
        this.page.number = 0;
        this.filtrar();
    };
    ListaAssinaPadraoComponent.prototype.clienteSegmento = function () {
        return this.shared.clienteSelecionado
            && this.shared.clienteSelecionado.cliente
            && this.shared.clienteSelecionado.cliente.segmento
            ? this.shared.clienteSelecionado.cliente.segmento.identificacao
            : "";
    };
    ListaAssinaPadraoComponent.prototype.verificaSePodeSelecionar = function (contrato) {
        var _this = this;
        var podeSelecionar = false;
        var mensagem = "Não existe uma pendência de assinatura sua para este documento.";
        if (this.shared.perfilUsuarioAdmin()) {
            podeSelecionar = true;
            return { podeSelecionar: podeSelecionar };
        }
        //se não vai assinar então retorna sempre true, para marcar o item
        if (this.podeAssinar) {
            contrato.partes.forEach(function (parte) {
                if (parte.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO' && parte.statusAssinatura != 'NAOLIBERADO') {
                    podeSelecionar = true;
                    return;
                }
                if (!podeSelecionar) {
                    parte.contatos.forEach(function (contato) {
                        if (contato.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO' && contato.statusAssinatura != 'NAOLIBERADO') {
                            podeSelecionar = true;
                            return;
                        }
                    });
                }
            });
        }
        if (this.fazDownload) {
            if (contrato.statusContrato == 'ASSINADO') {
                podeSelecionar = true;
            }
            else {
                podeSelecionar = false;
            }
        }
        return { podeSelecionar: podeSelecionar, mensagem: mensagem };
    };
    ListaAssinaPadraoComponent.prototype.montaListaEmailCelular = function () {
        var _this = this;
        this.emailsParaAssinatura = [];
        this.celularesParaAssinatura = [];
        if (this.shared.usuario.pessoa.email != "" && this.shared.usuario.pessoa.email != null)
            this.emailsParaAssinatura.push(this.shared.usuario.pessoa.email);
        //if (this.shared.usuario.pessoa.celular != "" && this.shared.usuario.pessoa.celular != null)
        // this.celularesParaAssinatura.push(this.shared.usuario.pessoa.celular);
        this.listagem.forEach(function (contrato) {
            var achouParte = false;
            contrato.partes.forEach(function (parte) {
                if (parte.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO') {
                    if (parte.email != undefined && parte.email != "" && parte.email != null && !_this.emailsParaAssinatura.includes(parte.email))
                        _this.emailsParaAssinatura.push(parte.email);
                    if (parte.cpfCnpj != _this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj)
                        if (parte.celular != undefined && parte.celular != "" && parte.celular != null && !_this.celularesParaAssinatura.includes(parte.celular))
                            _this.celularesParaAssinatura.push(parte.celular);
                    achouParte = true;
                    return;
                }
                if (!achouParte && parte.cpfCnpj != _this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                    parte.contatos.forEach(function (contato) {
                        if (contato.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO') {
                            if (contato.email != undefined && contato.email != "" && contato.email != null && !_this.emailsParaAssinatura.includes(contato.email))
                                _this.emailsParaAssinatura.push(contato.email);
                            if (contato.celular != undefined && contato.celular != "" && contato.celular != null && !_this.celularesParaAssinatura.includes(contato.celular))
                                _this.celularesParaAssinatura.push(contato.celular);
                            return;
                        }
                    });
                }
            });
        });
    };
    ListaAssinaPadraoComponent.prototype.alteranaSelecao = function (contrato) {
        var validacao = this.verificaSePodeSelecionar(contrato);
        if (validacao.podeSelecionar) {
            var idx = this.selection.indexOf(contrato.id);
            // Is currently selected
            if (idx > -1) {
                this.selection.splice(idx, 1);
            }
            // Is newly selected
            else {
                this.selection.push(contrato.id);
            }
        }
        else {
            this.dialog.warning(validacao.mensagem);
        }
    };
    ListaAssinaPadraoComponent.prototype.selecionaTudo = function () {
        var _this = this;
        this.selection = [];
        this.listagem.forEach(function (item) {
            if (_this.verificaSePodeSelecionar(item).podeSelecionar)
                _this.selection.push(item.id);
        });
        this.tudoSelecionado = true;
    };
    ListaAssinaPadraoComponent.prototype.limpaSelecao = function () {
        this.selection = [];
        this.tudoSelecionado = false;
    };
    ListaAssinaPadraoComponent.prototype.exibirAssinar = function () {
        var _this = this;
        if (this.selection.length == 0) {
            this.dialog.warning("É preciso selecionar um documento para assinatura");
            return;
        }
        this.montaListaEmailCelular();
        var modalRef = this.modalService.open(this.assinarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        var custodiante = this.shared.clienteSelecionado.cliente;
        var contrato = {
            contrato: { custodiante: custodiante, assunto: 'assinatura em lote' },
            contratos: this.selection,
            assinandoLote: true
        };
        var pessoa = Object.assign(JSON.parse(JSON.stringify(this.shared.usuario.pessoa)), contrato);
        modalRef.componentInstance.instance = pessoa;
        modalRef.componentInstance.emailsParaAssinatura = this.emailsParaAssinatura;
        modalRef.componentInstance.celularesParaAssinatura = this.celularesParaAssinatura;
        for (var i = 0; i < this.selection.length; i++) {
            this.httpService.findById(this.selection[i]).subscribe(function (responseApi) {
                _this.contratoList.push(responseApi.data);
            });
        }
        modalRef.componentInstance.contratoList = this.contratoList;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "assinado") {
                    _this.listagem = [];
                    _this.ngOnInit();
                }
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_3__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    ListaAssinaPadraoComponent.prototype.exibirCancelar = function () {
        var _this = this;
        if (this.selection.length == 0) {
            this.dialog.warning("É preciso selecionar um documento para cancelar");
            return;
        }
        var modalRef = this.modalService.open(this.cancelarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        });
        var custodiante = this.shared.clienteSelecionado.cliente;
        modalRef.componentInstance.instance = this.selection;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                if (result == "cancelado") {
                    _this.ngOnInit();
                }
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_3__["StatusEnum"].booltoEnum(result.status);
                }
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    // onScroll() {
    //   this.page.number++;
    //   this.filtrar();
    // }
    ListaAssinaPadraoComponent.prototype.observador = function (parte) {
        if (!parte || !Array.isArray(parte.papel)) {
            return false;
        }
        for (var iPapel in parte.papel) {
            var papel = parte.papel[iPapel];
            if (papel && papel.papel && papel.papel.identificacao == "OBSERVADOR") {
                return true;
            }
        }
        return false;
    };
    ListaAssinaPadraoComponent.prototype.perfilAdmin = function () {
        return this.shared.perfilUsuarioAdmin;
    };
    ListaAssinaPadraoComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    ListaAssinaPadraoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-documento',
            template: __webpack_require__(/*! raw-loader!../../padrao/lista/lista-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/lista/lista-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/lista/lista-assina.component.css */ "./src/app/components/assinar/padrao/lista/lista-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ListaAssinaPadraoComponent);
    return ListaAssinaPadraoComponent;
}(app_components_padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_2__["PadraoListaComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/padrao/lista/lista-assina.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/lista/lista-assina.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nthead-custom {border:1px solid #b9b9b9;}\n/*th {border:none; text-align: center; font-weight: normal; font-size: 1.2rem !important; color: #75787d;}*/\n:host ::ng-deep .lista-assinaturas-grid {\n    display: block !important;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    min-height: 280px !important;\n    max-height: calc(100vh - 390px);\n    overflow: auto;\n    position: relative;\n    width: 100%;\n    border: 1px solid #a6a9ae;\n}\n.lista-assinaturas-cabecalho,\n.lista-assinaturas-linha {\n    display: grid;\n    grid-template-columns: 145px minmax(150px, 1fr) minmax(150px, 1fr) 180px minmax(240px, 1.5fr);\n    min-width: 900px;\n}\n.lista-assinaturas-grid.com-selecao .lista-assinaturas-cabecalho,\n.lista-assinaturas-grid.com-selecao .lista-assinaturas-linha {\n    grid-template-columns: 42px 145px minmax(150px, 1fr) minmax(150px, 1fr) 180px minmax(240px, 1.5fr);\n}\n.lista-assinaturas-grid.com-valor .lista-assinaturas-cabecalho,\n.lista-assinaturas-grid.com-valor .lista-assinaturas-linha {\n    grid-template-columns: 145px minmax(150px, 1fr) minmax(150px, 1fr) 120px 180px minmax(240px, 1.5fr);\n}\n.lista-assinaturas-grid.com-selecao.com-valor .lista-assinaturas-cabecalho,\n.lista-assinaturas-grid.com-selecao.com-valor .lista-assinaturas-linha {\n    grid-template-columns: 42px 145px minmax(150px, 1fr) minmax(150px, 1fr) 120px 180px minmax(240px, 1.5fr);\n}\n.lista-assinaturas-cabecalho {\n    background: #f7f7f7;\n    border-bottom: 1px solid #a6a9ae;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n}\n.lista-assinaturas-cabecalho > div {\n    padding: 0.7rem 0.45rem;\n    text-align: center;\n}\n.lista-assinaturas-cabecalho a {\n    color: #595959;\n    display: block;\n    font-size: 1.05rem;\n    margin-bottom: 0.35rem;\n}\n.lista-assinaturas-linha {\n    -webkit-box-align: center;\n            align-items: center;\n    border-bottom: 1px solid #e5e5e5;\n    cursor: pointer;\n}\n.lista-assinaturas-linha:nth-child(even) {\n    background: #f1fbf5;\n}\n.lista-assinaturas-linha:hover {\n    background: #e7f7ee;\n}\n.lista-assinaturas-linha > div {\n    min-width: 0;\n    padding: 0.55rem 0.45rem;\n}\n.lista-assinaturas-selecao {\n    cursor: pointer;\n    text-align: center;\n}\n.lista-assinaturas-partes,\n.lista-assinaturas-parte {\n    display: -webkit-box;\n    display: flex;\n}\n.lista-assinaturas-partes {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    font-size: 0.72rem;\n    gap: 0.2rem;\n}\n.lista-assinaturas-parte {\n    -webkit-box-align: center;\n            align-items: center;\n    gap: 0.35rem;\n}\n.lista-assinaturas-status {\n    border-radius: 50%;\n    display: inline-block;\n    -webkit-box-flex: 0;\n            flex: 0 0 10px;\n    height: 10px;\n    width: 10px;\n}\n.lista-assinaturas-status.nao-assinado {\n    background: #ff416c;\n}\n.lista-assinaturas-status.nao-liberado {\n    background: #a6a6a6;\n}\n.lista-assinaturas-status.assinado {\n    background: #34b563;\n}\n.lista-assinaturas-vazia {\n    padding: 1rem;\n    text-align: center;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9saXN0YS9saXN0YS1hc3NpbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBYyx3QkFBd0IsQ0FBQztBQUN2QywyR0FBMkc7QUFFM0c7SUFDSSx5QkFBeUI7SUFDekIsbUJBQWM7WUFBZCxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsNkZBQTZGO0lBQzdGLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLGtHQUFrRztBQUN0RztBQUVBOztJQUVJLG1HQUFtRztBQUN2RztBQUVBOztJQUVJLHdHQUF3RztBQUM1RztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0kseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7QUFFQTtJQUNJLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFjO1lBQWQsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL2xpc3RhL2xpc3RhLWFzc2luYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRoZWFkLWN1c3RvbSB7Ym9yZGVyOjFweCBzb2xpZCAjYjliOWI5O31cbi8qdGgge2JvcmRlcjpub25lOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7IGNvbG9yOiAjNzU3ODdkO30qL1xuXG46aG9zdCA6Om5nLWRlZXAgLmxpc3RhLWFzc2luYXR1cmFzLWdyaWQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLWhlaWdodDogMjgwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzkwcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhOWFlO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtY2FiZWNhbGhvLFxuLmxpc3RhLWFzc2luYXR1cmFzLWxpbmhhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQ1cHggbWlubWF4KDE1MHB4LCAxZnIpIG1pbm1heCgxNTBweCwgMWZyKSAxODBweCBtaW5tYXgoMjQwcHgsIDEuNWZyKTtcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtZ3JpZC5jb20tc2VsZWNhbyAubGlzdGEtYXNzaW5hdHVyYXMtY2FiZWNhbGhvLFxuLmxpc3RhLWFzc2luYXR1cmFzLWdyaWQuY29tLXNlbGVjYW8gLmxpc3RhLWFzc2luYXR1cmFzLWxpbmhhIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQycHggMTQ1cHggbWlubWF4KDE1MHB4LCAxZnIpIG1pbm1heCgxNTBweCwgMWZyKSAxODBweCBtaW5tYXgoMjQwcHgsIDEuNWZyKTtcbn1cblxuLmxpc3RhLWFzc2luYXR1cmFzLWdyaWQuY29tLXZhbG9yIC5saXN0YS1hc3NpbmF0dXJhcy1jYWJlY2FsaG8sXG4ubGlzdGEtYXNzaW5hdHVyYXMtZ3JpZC5jb20tdmFsb3IgLmxpc3RhLWFzc2luYXR1cmFzLWxpbmhhIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0NXB4IG1pbm1heCgxNTBweCwgMWZyKSBtaW5tYXgoMTUwcHgsIDFmcikgMTIwcHggMTgwcHggbWlubWF4KDI0MHB4LCAxLjVmcik7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1ncmlkLmNvbS1zZWxlY2FvLmNvbS12YWxvciAubGlzdGEtYXNzaW5hdHVyYXMtY2FiZWNhbGhvLFxuLmxpc3RhLWFzc2luYXR1cmFzLWdyaWQuY29tLXNlbGVjYW8uY29tLXZhbG9yIC5saXN0YS1hc3NpbmF0dXJhcy1saW5oYSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MnB4IDE0NXB4IG1pbm1heCgxNTBweCwgMWZyKSBtaW5tYXgoMTUwcHgsIDFmcikgMTIwcHggMTgwcHggbWlubWF4KDI0MHB4LCAxLjVmcik7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1jYWJlY2FsaG8ge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNmE5YWU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmxpc3RhLWFzc2luYXR1cmFzLWNhYmVjYWxobyA+IGRpdiB7XG4gICAgcGFkZGluZzogMC43cmVtIDAuNDVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtY2FiZWNhbGhvIGEge1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtbGluaGEge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtbGluaGE6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmYmY1O1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtbGluaGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlN2Y3ZWU7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1saW5oYSA+IGRpdiB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDAuNTVyZW0gMC40NXJlbTtcbn1cblxuLmxpc3RhLWFzc2luYXR1cmFzLXNlbGVjYW8ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1wYXJ0ZXMsXG4ubGlzdGEtYXNzaW5hdHVyYXMtcGFydGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1wYXJ0ZXMge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGdhcDogMC4ycmVtO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtcGFydGUge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjM1cmVtO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtc3RhdHVzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsZXg6IDAgMCAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLmxpc3RhLWFzc2luYXR1cmFzLXN0YXR1cy5uYW8tYXNzaW5hZG8ge1xuICAgIGJhY2tncm91bmQ6ICNmZjQxNmM7XG59XG5cbi5saXN0YS1hc3NpbmF0dXJhcy1zdGF0dXMubmFvLWxpYmVyYWRvIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTZhNmE2O1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtc3RhdHVzLmFzc2luYWRvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzRiNTYzO1xufVxuXG4ubGlzdGEtYXNzaW5hdHVyYXMtdmF6aWEge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC9hc3NpbmFyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NpbmFyXFxwYWRyYW9cXG1vZGFsXFxhc3NpbmFyXFxhc3NpbmFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL21vZGFsL2Fzc2luYXIvYXNzaW5hci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC9hc3NpbmFyL2Fzc2luYXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udHJvbC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMCA+IHNwYW4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XG59XG5cbi5zdy1pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3ctaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNiMGM0ZGU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3Rhci5maWxsZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssinarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssinarModalComponent", function() { return AssinarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AssinarModalComponent = /** @class */ (function () {
    //protected activeModal: NgbActiveModal
    function AssinarModalComponent(utilService, documentoService, activeModal, dialog) {
        this.utilService = utilService;
        this.documentoService = documentoService;
        this.activeModal = activeModal;
        this.dialog = dialog;
        this.emailsParaAssinatura = [];
        this.celularesParaAssinatura = [];
        this.papel = [];
        this.documento = {};
        this.documentos = {};
        this.contratoList = [];
        this.whatsappParaAssinatura = [];
        this.parte = {};
        this.certificados = [];
        this.pinCertificado = "";
        this.versaoAssinadorInstalada = "";
        this.versaoAssinadorAtual = "1.1.2";
        this.urlDownloadAssinador = "https://www.assina.net/assinador/windows/AssinadorAssinaNet-Install.exe?v=" + this.versaoAssinadorAtual;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]);
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"].getInstance();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.rota = '/assinar/documento';
    }
    AssinarModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
            this.parte = this.instance;
            if (this.parte.contrato != undefined) {
                if (this.parte.contrato.partes != undefined) {
                    this.parte.contrato.partes = [];
                }
                if (this.parte.contrato.documentos != undefined) {
                    this.parte.contrato.documentos = [];
                }
            }
            //limpa se o cliente nao assina via email
            if (!this.exibeEmail())
                this.emailsParaAssinatura = [];
            if (this.emailsParaAssinatura.length > 0 && this.exibeEmail()) {
                this.envioSelecionado = { 'tipo': 'EMAIL', 'item': this.emailsParaAssinatura[0] };
                this.tipoEnvio = 'EMAIL';
            }
            if (this.celularesParaAssinatura.length > 0) {
                if (this.exibeWhatsApp()) {
                    this.tipoEnvio = 'WHATSAPP';
                    //duplicata a lista de celular para whatsapp
                    this.whatsappParaAssinatura = this.celularesParaAssinatura.slice();
                }
                else {
                    this.tipoEnvio = 'SMS';
                    //limpa se o cliente nao assina via whatsapp
                    this.whatsappParaAssinatura = [];
                }
                //limpa se o cliente nao assina via sms
                if (!this.exibeSMS()) {
                    this.celularesParaAssinatura = [];
                }
                else {
                    this.envioSelecionado = { 'tipo': this.tipoEnvio, 'item': this.celularesParaAssinatura[0] };
                }
            }
            this.buscaCertificadosLocal();
        }
        else {
            this.parte = "";
        }
    };
    AssinarModalComponent.prototype.tokenCodigoResult = function (retorno) {
        this.shared.usuario.tokenAssinatura = retorno.tokenAssinatura;
        this.shared.usuario.validadeTokenAssinatura = retorno.validadeTokenAssinatura;
        this.dialog.success(retorno.mensagem);
    };
    AssinarModalComponent.prototype.enviaCodigo = function () {
        var _this = this;
        this.loading.show();
        var tokenSolicitacaoRequest = { contrato: this.parte.contrato,
            usuario: this.shared.usuario,
            tipoEnvio: this.envioSelecionado.tipo,
            destino: this.envioSelecionado.item };
        this.documentoService.enviaCodigo(tokenSolicitacaoRequest).subscribe(function (responseApi) {
            _this.tokenCodigoResult(responseApi);
            _this.loading.hide();
        }, function (err) {
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
    };
    AssinarModalComponent.prototype.assinarViaCodigo = function () {
        var _this = this;
        if (this.codigoDigitado == this.shared.usuario.tokenAssinatura && this.shared.usuario.tokenAssinatura != undefined) {
            var contratoParteAssinatura = { contratoParte: this.parte, usuario: this.shared.usuario, contratos: this.instance.contratos };
            this.loading.show();
            if (this.instance.assinandoLote) {
                this.documentoService.assinarViaCodigoLote(contratoParteAssinatura).subscribe(function (responseApi) {
                    _this.loading.hide();
                    _this.dialog.success('Documentos Assinados com sucesso!');
                    _this.activeModal.close("assinado");
                    //document.getElementById('btnFechar').click();
                    //this.router.navigate([this.rota, this.parte.contrato.id], {skipLocationChange: true});
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
            else {
                this.documentoService.assinarViaCodigo(contratoParteAssinatura).subscribe(function (responseApi) {
                    _this.loading.hide();
                    _this.dialog.success('Documentos Assinados com sucesso!');
                    _this.activeModal.close("assinado");
                    //document.getElementById('btnFechar').click();
                    //this.router.navigate([this.rota, this.parte.contrato.id], {skipLocationChange: true});
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
        }
        else {
            this.showMessage({
                type: 'danger',
                text: 'Código digitado não é o mesmo enviado.'
            });
        }
    };
    AssinarModalComponent.prototype.certificadosLocalInit = function (listagem) {
        if (listagem.length == 0) {
            listagem.push({ nome: "Certficado não encontrado.", tipoCertificadoAN: "" });
        }
        this.certificados = listagem;
        if (listagem[0].podeAssinar) {
            this.aliasCertificado = listagem[0];
            this.tipoCertificadoAN = listagem[0].tipoCertificadoAN;
        }
    };
    AssinarModalComponent.prototype.buscaCertificadosLocal = function () {
        var _this = this;
        var cnpj = "";
        if (this.parte.contratoPartePJ != undefined &&
            this.parte.contratoPartePJ != "") {
            cnpj = this.parte.contratoPartePJ.cpfCnpj;
        }
        var busca = { cpf: this.parte.cpfCnpj, cnpj: this.parte.cnpjs, assinaturaLote: this.parte.assinandoLote };
        this.documentoService.listaCertificados(busca).subscribe(function (retorno) {
            _this.assindorRodando = true;
            _this.certificadosLocalInit(retorno);
            _this.documentoService.verificaAssinadorVersao().subscribe(function (retorno) {
                _this.versaoAssinadorInstalada = retorno;
                if (_this.versaoAssinadorAtual == retorno) {
                    _this.versaoAssinador = true;
                }
                else {
                    _this.versaoAssinador = false;
                }
            }, function (err) {
                _this.versaoAssinador = false;
            });
        }, function (err) {
            _this.assindorRodando = false;
            var retorno = [];
            retorno.push({ nome: "Assinador não disponível", tipoCertificadoAN: "" });
            _this.certificadosLocalInit(retorno);
        });
    };
    AssinarModalComponent.prototype.mensagemAssinaturaCertificadoLocal = function (retorno) {
        if (retorno.resultado = 'Sucesso') {
            this.dialog.success(retorno.mensagem);
        }
        else if (retorno.resultado = 'Alerta') {
            this.dialog.warning(retorno.mensagem);
        }
    };
    AssinarModalComponent.prototype.assinarViaCertificadoLocal = function () {
        /*
        if( this.tipoCertificadoAN == "A3" &&
                this.pinCertificado == ""){
            this.dialog.warning('Favor inserir o PIN do certificado.');
            return;
        }
        */
        var _this = this;
        this.loading.show();
        var contratoParteAssinatura = { contratoParte: this.parte, usuario: this.shared.usuario };
        this.documentoService.contratoParteAssinaturaRequest(contratoParteAssinatura).subscribe(function (config) {
            var contratoParteAssinatura = config;
            contratoParteAssinatura.contratoParte = _this.parte;
            contratoParteAssinatura.usuario = _this.shared.usuario;
            contratoParteAssinatura.nomeCertificado = _this.aliasCertificado.nome;
            contratoParteAssinatura.pinCertificado = _this.pinCertificado;
            contratoParteAssinatura.contratos = _this.instance.contratos;
            if (_this.instance.assinandoLote) {
                _this.documentoService.assinarViaCertificadoLocalLote(contratoParteAssinatura).subscribe(function (responseApi) {
                    _this.loading.hide();
                    _this.mensagemAssinaturaCertificadoLocal(responseApi);
                    _this.activeModal.close("assinado");
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
            else {
                _this.documentoService.assinarViaCertificadoLocal(contratoParteAssinatura).subscribe(function (retorno) {
                    _this.loading.hide();
                    _this.mensagemAssinaturaCertificadoLocal(retorno);
                    _this.activeModal.close("assinado");
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
        }, function (err) {
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
    };
    AssinarModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    AssinarModalComponent.prototype.MudouCertificado = function () {
        var _this = this;
        this.certificados.forEach(function (certificado) {
            if (certificado.nome == _this.aliasCertificado.nome) {
                _this.tipoCertificadoAN = certificado.tipoCertificadoAN;
                return;
            }
        });
    };
    AssinarModalComponent.prototype.selecionarLinha = function (item) {
        if (item.podeAssinar) {
            if (item.valido) {
                this.aliasCertificado = item;
                this.tipoCertificadoAN = this.aliasCertificado.tipoCertificadoAN;
            }
            else {
                this.dialog.warning('Este certificado está vencido não pode ser usado!');
            }
        }
        else {
            this.dialog.warning('Este certificado não pode ser usado por este usuario!');
        }
    };
    AssinarModalComponent.prototype.selecionarGrid = function (pitem) {
        var estilo = '';
        if (this.aliasCertificado) {
            if (pitem.nome == this.aliasCertificado.nome) {
                estilo = "linhaSelecionada";
            }
        }
        if (!pitem.podeAssinar) {
            estilo += ' red';
        }
        return estilo;
    };
    AssinarModalComponent.prototype.selecionarLinhaEnvio = function (item, tipoEnvio) {
        this.envioSelecionado = { 'tipo': tipoEnvio, 'item': item };
        this.tipoEnvio = tipoEnvio;
    };
    AssinarModalComponent.prototype.selecionarGridEnvio = function (pitem) {
        var estilo = '';
        if (this.envioSelecionado) {
            if (pitem.tipo == this.envioSelecionado.tipo &&
                pitem.item == this.envioSelecionado.item) {
                estilo = "linhaSelecionada";
            }
        }
        return estilo;
    };
    AssinarModalComponent.prototype.assinaViaAssinaturaEletronica = function () {
        var _this = this;
        var temPapelComToken;
        temPapelComToken = false;
        if (Object.keys(this.documentos).length > 0) {
            for (var b = 0; b < this.documentos.length; b++) {
                this.documentos[b].tipoDocumento.papeis.forEach(function (papelValue) {
                    if (_this.papel.length == 0) {
                        if (papelValue.token === true) {
                            temPapelComToken = true;
                        }
                    }
                    else {
                        for (var z = 0; z < _this.papel.length; z++) {
                            if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true) {
                                temPapelComToken = true;
                            }
                        }
                    }
                });
            }
        }
        else {
            if (Object.keys(this.documento).length === 0) {
                for (var x = 0; x < this.contratoList.length; x++) {
                    this.contratoList[x].contrato.documentos.forEach(function (documento) {
                        documento.tipoDocumento.papeis.forEach(function (papelValue) {
                            if (_this.papel.length == 0) {
                                if (papelValue.token === true) {
                                    temPapelComToken = true;
                                }
                            }
                            else {
                                for (var z = 0; z < _this.papel.length; z++) {
                                    if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true) {
                                        temPapelComToken = true;
                                    }
                                }
                            }
                        });
                    });
                }
            }
            else {
                this.documento.tipoDocumento.papeis.forEach(function (papelValue) {
                    if (_this.papel.length == 0) {
                        if (papelValue.token === true) {
                            temPapelComToken = true;
                        }
                    }
                    else {
                        for (var z = 0; z < _this.papel.length; z++) {
                            if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true) {
                                temPapelComToken = true;
                            }
                        }
                    }
                });
            }
        }
        if (temPapelComToken) {
            if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"] == undefined &&
                this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"] == undefined &&
                this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] == undefined)
                return true;
            return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"]) ||
                this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"]) ||
                this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"]);
        }
        else {
            return false;
        }
    };
    AssinarModalComponent.prototype.exibeEmail = function () {
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"] == undefined)
            return true;
        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"]);
    };
    AssinarModalComponent.prototype.exibeSMS = function () {
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"] == undefined)
            return false;
        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"]);
    };
    AssinarModalComponent.prototype.exibeWhatsApp = function () {
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] == undefined)
            return false;
        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"]);
    };
    AssinarModalComponent.prototype.exibeEscolhaViaAssinaturaEletronica = function () {
        var lista = [];
        lista.push(this.whatsappParaAssinatura);
        lista.push(this.celularesParaAssinatura);
        lista.push(this.emailsParaAssinatura);
        return lista.length > 1;
    };
    AssinarModalComponent.prototype.assinaViaCertificadoDigital = function () {
        var _this = this;
        var temPapelComCertificado;
        temPapelComCertificado = false;
        if (Object.keys(this.documentos).length > 0) {
            for (var b = 0; b < this.documentos.length; b++) {
                this.documentos[b].tipoDocumento.papeis.forEach(function (papelValue) {
                    if (_this.papel.length == 0) {
                        if (papelValue.certificate === true) {
                            temPapelComCertificado = true;
                        }
                    }
                    else {
                        for (var z = 0; z < _this.papel.length; z++) {
                            if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true) {
                                temPapelComCertificado = true;
                            }
                        }
                    }
                });
            }
        }
        else {
            if (Object.keys(this.documento).length === 0) {
                for (var x = 0; x < this.contratoList.length; x++) {
                    this.contratoList[x].contrato.documentos.forEach(function (documento) {
                        documento.tipoDocumento.papeis.forEach(function (papelValue) {
                            if (_this.papel.length == 0) {
                                if (papelValue.certificate === true) {
                                    temPapelComCertificado = true;
                                }
                            }
                            else {
                                for (var z = 0; z < _this.papel.length; z++) {
                                    if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true) {
                                        temPapelComCertificado = true;
                                    }
                                }
                            }
                        });
                    });
                }
            }
            else {
                this.documento.tipoDocumento.papeis.forEach(function (papelValue) {
                    if (_this.papel.length == 0) {
                        if (papelValue.certificate === true) {
                            temPapelComCertificado = true;
                        }
                    }
                    else {
                        for (var z = 0; z < _this.papel.length; z++) {
                            if (_this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true) {
                                temPapelComCertificado = true;
                            }
                        }
                    }
                });
            }
        }
        if (temPapelComCertificado) {
            if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_CERTIFICADO"] == undefined)
                return true;
            return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_CERTIFICADO"]);
        }
        else {
            return false;
        }
    };
    AssinarModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AssinarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "instance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "emailsParaAssinatura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "celularesParaAssinatura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "papel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "documento", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "documentos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssinarModalComponent.prototype, "contratoList", void 0);
    AssinarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assinar-modal',
            template: __webpack_require__(/*! raw-loader!./assinar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.html"),
            styles: [__webpack_require__(/*! ./assinar-modal.component.scss */ "./src/app/components/assinar/padrao/modal/assinar/assinar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], AssinarModalComponent);
    return AssinarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC9jYW5jZWxhci9EOlxcQXNzaW5hLk5ldFxcUHJvamV0b3NcXEdpdEh1YlxcQXNzaW5hLk5ldC5Qb3J0YWxcXGFzc2luYS5uZXQud2ViLnBvcnRhbC12MS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXNzaW5hclxccGFkcmFvXFxtb2RhbFxcY2FuY2VsYXJcXGNhbmNlbGFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL21vZGFsL2NhbmNlbGFyL2NhbmNlbGFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFNBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTkg7O0FEU0E7RUFDRyxxQkFBQTtBQ05IOztBRFNBO0VBQ0csV0FBQTtBQ05IOztBRFNBO0VBQ0csc0JBQUE7QUNOSDs7QURTQTtFQUNHLGdCQUFBO0FDTkg7O0FEUUc7RUFDRyx3QkFBQTtBQ05OOztBRFNHO0VBQ0csVUFBQTtBQ1BOOztBRFNNO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDUFQ7O0FEVU07RUFDRyxvQkFBQTtBQ1JUOztBRGFBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRFlHO0VBQ0csa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNYSDs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSDs7QURjQTtFQUNHLHFCQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNYSDs7QURjRztFQUNHLFdBQUE7QUNaTjs7QURnQkE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNiSDs7QURnQkE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FDYkgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL21vZGFsL2NhbmNlbGFyL2NhbmNlbGFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZm9ybS1ib2R5IHtcclxuXHJcblxyXG59XHJcblxyXG4uY29udHJvbC1sYWJlbCB7XHJcbiAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIG1hcmdpbjogNnB4IDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwPnNwYW4uc3dpdGNoIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XHJcbn1cclxuXHJcbi5zdy1pbnB1dC1ncm91cCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgfVxyXG5cclxuICAgLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLmJ0bi5idG4tZmlsZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICBjb2xvcjogI2IwYzRkZTtcclxuXHJcbiAgIC8vIEZpbGxlZCBTdGFyXHJcbiAgICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgIH1cclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICBtaW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRyb2wtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbC1yYWRpby1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDAgPiBzcGFuLnN3aXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xufVxuXG4uc3ctaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN3LWlucHV0LWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4ge1xuICB6LWluZGV4OiAyO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b25bZGlzYWJsZWRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4uYnRuLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnRuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjYjBjNGRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIuZmlsbGVkIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbWluLWhlaWdodDogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CancelarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelarModalComponent", function() { return CancelarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/assinar/documento/documentoVigente.service */ "./src/app/services/assinar/documento/documentoVigente.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CancelarModalComponent = /** @class */ (function () {
    function CancelarModalComponent(utilService, documentoVigenteService, activeModal, dialog) {
        this.utilService = utilService;
        this.documentoVigenteService = documentoVigenteService;
        this.activeModal = activeModal;
        this.dialog = dialog;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]);
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"].getInstance();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
    }
    CancelarModalComponent.prototype.ngOnInit = function () {
    };
    CancelarModalComponent.prototype.cancelarDocumento = function () {
        var _this = this;
        this.dialog.confirmCancel(this.mensagemCancelamento)
            .then(function (canCancel) {
            if (canCancel) {
                var contratoCancelamentoRequest = {
                    usuario: _this.shared.usuario,
                    contratos: _this.instance,
                    motivo: _this.motivoCancelamento
                };
                _this.loading.show();
                _this.documentoVigenteService.cancelarDocumento(contratoCancelamentoRequest).subscribe(function (responseApi) {
                    _this.loading.hide();
                    _this.dialog.success('Documentos cancelados com sucesso!');
                    _this.activeModal.close("cancelado");
                    _this.router.navigate([_this.rota], { skipLocationChange: true });
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
        });
    };
    CancelarModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    CancelarModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    CancelarModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoVigenteService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CancelarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CancelarModalComponent.prototype, "instance", void 0);
    CancelarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancelar-modal',
            template: __webpack_require__(/*! raw-loader!./cancelar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.html"),
            styles: [__webpack_require__(/*! ./cancelar-modal.component.scss */ "./src/app/components/assinar/padrao/modal/cancelar/cancelar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoVigenteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], CancelarModalComponent);
    return CancelarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC9yZWN1c2FyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NpbmFyXFxwYWRyYW9cXG1vZGFsXFxyZWN1c2FyXFxyZWN1c2FyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL21vZGFsL3JlY3VzYXIvcmVjdXNhci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC9yZWN1c2FyL3JlY3VzYXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udHJvbC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMCA+IHNwYW4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XG59XG5cbi5zdy1pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3ctaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNiMGM0ZGU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3Rhci5maWxsZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: RecusarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecusarModalComponent", function() { return RecusarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/assinar/documento/documentoVigente.service */ "./src/app/services/assinar/documento/documentoVigente.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RecusarModalComponent = /** @class */ (function () {
    function RecusarModalComponent(utilService, documentoVigenteService, activeModal, dialog) {
        this.utilService = utilService;
        this.documentoVigenteService = documentoVigenteService;
        this.activeModal = activeModal;
        this.dialog = dialog;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]);
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"].getInstance();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
    }
    RecusarModalComponent.prototype.ngOnInit = function () {
    };
    RecusarModalComponent.prototype.recusarDocumento = function () {
        var _this = this;
        this.dialog.confirmCancel(this.mensagemRecusar, 'Sim, recusar', 'Não, Manter')
            .then(function (canCancel) {
            if (canCancel) {
                var contratoCancelamentoRequest = {
                    usuario: _this.shared.usuario,
                    contratos: _this.instance,
                    motivo: _this.motivoCancelamento
                };
                _this.loading.show();
                _this.documentoVigenteService.recusarDocumento(contratoCancelamentoRequest).subscribe(function (responseApi) {
                    _this.loading.hide();
                    _this.dialog.success('Documentos recusados com sucesso!');
                    _this.activeModal.close("recusado");
                    _this.router.navigate([_this.rota], { skipLocationChange: true });
                }, function (err) {
                    _this.loading.hide();
                    _this.errorHandler.handle(err);
                });
            }
        });
    };
    RecusarModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    RecusarModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    RecusarModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoVigenteService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RecusarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecusarModalComponent.prototype, "instance", void 0);
    RecusarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recusar-modal',
            template: __webpack_require__(/*! raw-loader!./recusar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.html"),
            styles: [__webpack_require__(/*! ./recusar-modal.component.scss */ "./src/app/components/assinar/padrao/modal/recusar/recusar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_5__["DocumentoVigenteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], RecusarModalComponent);
    return RecusarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n}\n\n.semBorda {\n  padding: 0px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  height: 24px;\n}\n\n.div-assinaturas {\n  float: left;\n  top: 0;\n  height: 70vh;\n  overflow-y: auto;\n}\n\n.div-documento {\n  height: 70vh;\n}\n\n.mat-tree-node {\n  min-height: 29px;\n}\n\n.mat-form-field {\n  margin-right: 4px;\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC92aXN1YWxpemFyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NpbmFyXFxwYWRyYW9cXG1vZGFsXFx2aXN1YWxpemFyXFx2aXN1YWxpemFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvcGFkcmFvL21vZGFsL3Zpc3VhbGl6YXIvdmlzdWFsaXphci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL3BhZHJhby9tb2RhbC92aXN1YWxpemFyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFNBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTkg7O0FEU0E7RUFDRyxxQkFBQTtBQ05IOztBRFNBO0VBQ0csV0FBQTtBQ05IOztBRFNBO0VBQ0csc0JBQUE7QUNOSDs7QURTQTtFQUNHLGdCQUFBO0FDTkg7O0FEUUc7RUFDRyx3QkFBQTtBQ05OOztBRFNHO0VBQ0csVUFBQTtBQ1BOOztBRFNNO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDUFQ7O0FEVU07RUFDRyxvQkFBQTtBQ1JUOztBRGFBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRFlHO0VBQ0csa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNYSDs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSDs7QURjQTtFQUNHLHFCQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNYSDs7QURjRztFQUNHLFdBQUE7QUNaTjs7QURnQkE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNiSDs7QURnQkE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FDYkg7O0FDdkdBOztFQUVFLHFCQUFBO0VBQ0EsU0FBQTtBRDBHRjs7QUN2R0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUQwR0Y7O0FDckdBO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUR3R0Y7O0FDckdBO0VBQ0UsWUFBQTtBRHdHRjs7QUNyR0E7RUFDRSxnQkFBQTtBRHdHRjs7QUN0R0E7RUFDRSxpQkFBQTtBRHlHRjs7QUNyR0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtBRHdHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzaW5hci9wYWRyYW8vbW9kYWwvdmlzdWFsaXphci92aXN1YWxpemFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZm9ybS1ib2R5IHtcclxuXHJcblxyXG59XHJcblxyXG4uY29udHJvbC1sYWJlbCB7XHJcbiAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIG1hcmdpbjogNnB4IDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwPnNwYW4uc3dpdGNoIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XHJcbn1cclxuXHJcbi5zdy1pbnB1dC1ncm91cCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgfVxyXG5cclxuICAgLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLmJ0bi5idG4tZmlsZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICBjb2xvcjogI2IwYzRkZTtcclxuXHJcbiAgIC8vIEZpbGxlZCBTdGFyXHJcbiAgICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgIH1cclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICBtaW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRyb2wtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbC1yYWRpby1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDAgPiBzcGFuLnN3aXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xufVxuXG4uc3ctaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN3LWlucHV0LWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4ge1xuICB6LWluZGV4OiAyO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b25bZGlzYWJsZWRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4uYnRuLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnRuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjYjBjNGRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIuZmlsbGVkIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VtQm9yZGEge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmRpdi1hc3NpbmF0dXJhcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0b3A6IDA7XG4gIGhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRpdi1kb2N1bWVudG8ge1xuICBoZWlnaHQ6IDcwdmg7XG59XG5cbi5tYXQtdHJlZS1ub2RlIHtcbiAgbWluLWhlaWdodDogMjlweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJsaWdhXCI7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9tb2RhbC5zY3NzXCI7XHJcbnVsLFxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNlbUJvcmRheyAgXHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuXHJcblxyXG4uZGl2LWFzc2luYXR1cmFze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmRpdi1kb2N1bWVudG97ICBcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5tYXQtdHJlZS1ub2Rle1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VisualizarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarModalComponent", function() { return VisualizarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// const GetLevel = (node: TestData) => node.level;
// const IsExpandable = (node: TestData) => node.children && node.children.length > 0;
var GetChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(node.children); };
// const TC = new FlatTreeControl(GetLevel, IsExpandable);
var TC = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["NestedTreeControl"](GetChildren);
var VisualizarModalComponent = /** @class */ (function () {
    function VisualizarModalComponent(utilService, documentoService, dialog, shared) {
        this.utilService = utilService;
        this.documentoService = documentoService;
        this.dialog = dialog;
        this.shared = shared;
        this.documento = {};
        this.documentoPDF = {};
        this.tc = TC;
        this.data = [];
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_6__["AppInjector"].getInjector();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]);
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]);
    }
    VisualizarModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
            this.documento = this.instance;
            this.buscaPDF();
        }
        else {
            this.documento = "";
            this.pdfViewer.pdfSrc = this.byteArray;
            this.pdfViewer.refresh();
        }
    };
    VisualizarModalComponent.prototype.pdfInit = function (documento) {
        var _this = this;
        var documentoPDFDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_11__["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(function (char) { return char.charCodeAt(0); }));
        this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
        this.data = null;
        if (documento.assinaturas != null) {
            documento.assinaturas.forEach(function (assinatura) {
                if (_this.data == null)
                    _this.data = [];
                var novaAssinatura;
                novaAssinatura = { name: assinatura.nomeRazaoSocial, icon: 'folder', iconExpanded: 'folder_open' };
                var papel = { name: 'Papel', icon: 'assignment', iconExpanded: 'assignment', children: [{ name: assinatura.papel.nome }] };
                novaAssinatura.children = [];
                novaAssinatura.children.push(papel);
                var certificado = {
                    name: 'certificado', icon: 'verified_user', iconExpanded: 'verified_user', children: []
                };
                var emissor = {
                    name: assinatura.emissorCertificado, icon: 'assignment_ind', iconExpanded: 'assignment_ind', children: []
                };
                var nomeCertificado = { name: assinatura.nomeCertificado };
                if (assinatura.responsavel != null) {
                    var responsavel = { name: assinatura.responsavel + ':' + assinatura.responsavelCPF };
                    nomeCertificado.children = [];
                    nomeCertificado.children.push(responsavel);
                }
                emissor.children = [];
                emissor.children.push(nomeCertificado);
                certificado.children = [];
                certificado.children.push(emissor);
                novaAssinatura.children.push(certificado);
                var data = { name: 'Data', icon: 'schedule', iconExpanded: 'schedule', children: [{ name: assinatura.dataAssinatura }] };
                novaAssinatura.children.push(data);
                _this.tc.expand(novaAssinatura);
                _this.tc.expand(papel);
                _this.data.push(novaAssinatura);
            });
            this.tc.expandAll;
        }
        //this.documentoPDF =  documento.documentoOriginal;
    };
    VisualizarModalComponent.prototype.buscaPDF = function () {
        var _this = this;
        this.loading.show();
        this.documentoService.getDocumentoPDF(this.documento).subscribe(function (responseApi) {
            _this.pdfInit(responseApi);
            _this.loading.hide();
        }, function (err) {
            _this.loading.hide();
            _this.errorHandler.handle(err);
        });
        return null;
    };
    VisualizarModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    VisualizarModalComponent.prototype.hasChild = function (_, node) {
        console.log(node);
        return node.children != null && node.children.length > 0;
    };
    VisualizarModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    VisualizarModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_4__["DocumentoService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], VisualizarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: true }),
        __metadata("design:type", Object)
    ], VisualizarModalComponent.prototype, "pdfViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VisualizarModalComponent.prototype, "instance", void 0);
    VisualizarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assinar-visualizar-modal',
            template: __webpack_require__(/*! raw-loader!./visualizar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-modal.component.scss */ "./src/app/components/assinar/padrao/modal/visualizar/visualizar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_4__["DocumentoService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], VisualizarModalComponent);
    return VisualizarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/assinar/pendente/detalhe/detalhe-pendente.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/assinar/pendente/detalhe/detalhe-pendente.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetalhePendenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePendenteComponent", function() { return DetalhePendenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_components_assinar_padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/assinar/padrao/detalhe/detalhe-assina.component */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UtilService } from 'app/services/util/util.service';


var DetalhePendenteComponent = /** @class */ (function (_super) {
    __extends(DetalhePendenteComponent, _super);
    function DetalhePendenteComponent(route, modalService, 
    //utilService: UtilService,
    documentoService) {
        var _this = _super.call(this, route, modalService, //utilService, 
        documentoService) || this;
        _this.mensagemCancelamento = "Deseja cancelar a assinatura deste contrato ?";
        _this.mensagemRecusar = "Deseja recusar a assinatura deste contrato ?";
        _this.titulo = "Detalhe do contrato";
        _this.navegacao = " > Assinaturas > Pendentes > Detalhar";
        _this.rota = "/assinar/pendente/";
        _this.entidade = {
            contrato: {
                status: "ATIVO", statusContrato: "NAOLIBERADOASSINTAURA",
                remetente: _this.shared.usuario, custodiante: { id: _this.shared.clienteSelecionado.cliente.id },
                partes: [], documentos: []
            }
        };
        return _this;
    }
    DetalhePendenteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"] }
    ]; };
    DetalhePendenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalhe-pendente',
            template: __webpack_require__(/*! raw-loader!../../padrao/detalhe/detalhe-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/detalhe/detalhe-assina.component.css */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"]])
    ], DetalhePendenteComponent);
    return DetalhePendenteComponent;
}(app_components_assinar_padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_4__["DetalheAssinaComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/pendente/lista/lista-pendente.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/assinar/pendente/lista/lista-pendente.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaPendenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPendenteComponent", function() { return ListaPendenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/assinar/padrao/lista/lista-assina-padrao.component */ "./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/enum/statusContratoEnum */ "./src/app/model/enum/statusContratoEnum.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaPendenteComponent = /** @class */ (function (_super) {
    __extends(ListaPendenteComponent, _super);
    function ListaPendenteComponent(modalService, documentoService) {
        var _this = _super.call(this, modalService) || this;
        _this.documentoService = documentoService;
        _this.exibirSelecao = true;
        _this.podeAssinar = true;
        _this.titulo = "Documentos pendentes";
        //  this.navegacao = " > Assinaturas > Pendentes > Listagem";
        _this.rota = "/assinar/pendente";
        _this.filtro = {};
        _this.filtro.status = 'ATIVO';
        _this.filtro.liberadoAssinatura = true;
        _this.filtro.custodiante = { id: _this.shared.clienteSelecionado.cliente.id };
        _this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }];
        if (_this.shared.verificaPerfilClienteSelecionado(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_5__["PerfilEnum"].ROLE_ASSINADOR)) {
            _this.filtro.partes[0].cpfCnpj = _this.shared.usuario.pessoa.cpfCnpj;
        }
        _this.page = {
            number: 0,
            size: 30,
            order: 'dataSolicitacaoAssinatura,DESC'
        };
        _this.httpService = _this.documentoService;
        _this.opcoesStatusContrato = _this.utilService.enumToKeyValue(app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__["StatusContratoEnum"]);
        return _this;
    }
    ListaPendenteComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"] }
    ]; };
    ListaPendenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-documento',
            template: __webpack_require__(/*! raw-loader!../../padrao/lista/lista-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/lista/lista-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/lista/lista-assina.component.css */ "./src/app/components/assinar/padrao/lista/lista-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"]])
    ], ListaPendenteComponent);
    return ListaPendenteComponent;
}(app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__["ListaAssinaPadraoComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/recusado/detalhe/detalhe-recusado.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/assinar/recusado/detalhe/detalhe-recusado.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetalheRecusadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheRecusadoComponent", function() { return DetalheRecusadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_components_cadastros_contrato_novo_novo_contrato_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/cadastros/contrato/novo/novo-contrato.component */ "./src/app/components/cadastros/contrato/novo/novo-contrato.component.ts");
/* harmony import */ var app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/cadastro/cadastro/contrato.service */ "./src/app/services/cadastro/cadastro/contrato.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UtilService } from 'app/services/util/util.service';



var DetalheRecusadoComponent = /** @class */ (function (_super) {
    __extends(DetalheRecusadoComponent, _super);
    function DetalheRecusadoComponent(route, modalService, 
    //      utilService: UtilService,
    contratoService, documentoService) {
        var _this = _super.call(this, route, contratoService, // utilService,
        documentoService) || this;
        //this.mensagemCancelamento = "Deseja cancelar a vigência deste contrato ?";
        _this.titulo = "Detalhe do contrato";
        _this.navegacao = " > Assinaturas > Recuaadas > Detalhar";
        _this.rota = "/assinar/recusado/";
        return _this;
    }
    DetalheRecusadoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_5__["ContratoService"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"] }
    ]; };
    DetalheRecusadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalhe-documento',
            template: __webpack_require__(/*! raw-loader!../../../cadastros/contrato/novo/novo-contrato.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/novo/novo-contrato.component.html"),
            styles: [__webpack_require__(/*! ../../../cadastros/contrato/novo/novo-contrato.component.css */ "./src/app/components/cadastros/contrato/novo/novo-contrato.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_5__["ContratoService"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"]])
    ], DetalheRecusadoComponent);
    return DetalheRecusadoComponent;
}(app_components_cadastros_contrato_novo_novo_contrato_component__WEBPACK_IMPORTED_MODULE_4__["NovoContratoComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/recusado/lista/lista-recusado.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/assinar/recusado/lista/lista-recusado.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaRecusadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaRecusadoComponent", function() { return ListaRecusadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/assinar/padrao/lista/lista-assina-padrao.component */ "./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts");
/* harmony import */ var app_services_assinar_documento_documentoRecusado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documentoRecusado.service */ "./src/app/services/assinar/documento/documentoRecusado.service.ts");
/* harmony import */ var app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/enum/statusContratoEnum */ "./src/app/model/enum/statusContratoEnum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaRecusadoComponent = /** @class */ (function (_super) {
    __extends(ListaRecusadoComponent, _super);
    function ListaRecusadoComponent(modalService, documentoRecusadoService) {
        var _this = _super.call(this, modalService) || this;
        _this.documentoRecusadoService = documentoRecusadoService;
        //this.exibirSelecao = true;
        //this.podeCancelar = true;
        _this.titulo = "Documentos recusados";
        _this.navegacao = " > Assinaturas > Vigentes > Listagem";
        _this.rota = "/assinar/recusado";
        _this.filtro = {};
        _this.filtro.status = 'ATIVO';
        _this.filtro.liberadoAssinatura = true;
        _this.filtro.custodiante = { id: _this.shared.clienteSelecionado.cliente.id };
        _this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }];
        if (_this.shared.perfilUsuario == 'ROLE_ASSINADOR') {
            _this.filtro.partes[0].cpfCnpj = _this.shared.usuario.pessoa.cpfCnpj;
        }
        _this.page = {
            number: 0,
            size: 30,
            order: 'dataCriacao,DESC'
        };
        _this.httpService = _this.documentoRecusadoService;
        _this.opcoesStatusContrato = _this.utilService.enumToKeyValue(app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__["StatusContratoEnum"]);
        _this.excluirPerfilAssinador = true;
        return _this;
    }
    ListaRecusadoComponent.prototype.contratoDownload = function () {
        var _this = this;
        this.documentoRecusadoService.getDownload(this.objetoSelecionado).subscribe(function (responseApi) {
            var item = { anexo64: "", nomeArquivo: "" };
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            _this.utilService.download(item);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    ListaRecusadoComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documentoRecusado_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoRecusadoService"] }
    ]; };
    ListaRecusadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-documento',
            template: __webpack_require__(/*! raw-loader!../../padrao/lista/lista-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/lista/lista-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/lista/lista-assina.component.css */ "./src/app/components/assinar/padrao/lista/lista-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documentoRecusado_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoRecusadoService"]])
    ], ListaRecusadoComponent);
    return ListaRecusadoComponent;
}(app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__["ListaAssinaPadraoComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/vigente/detalhe/detalhe-vigente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/assinar/vigente/detalhe/detalhe-vigente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetalheVigenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheVigenteComponent", function() { return DetalheVigenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var app_components_assinar_padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/assinar/padrao/detalhe/detalhe-assina.component */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UtilService } from 'app/services/util/util.service';


var DetalheVigenteComponent = /** @class */ (function (_super) {
    __extends(DetalheVigenteComponent, _super);
    function DetalheVigenteComponent(route, modalService, 
    //utilService: UtilService,
    documentoService) {
        var _this = _super.call(this, route, modalService, //utilService,
        documentoService) || this;
        _this.mensagemCancelamento = "Deseja cancelar a vigência deste contrato ?";
        _this.titulo = "Detalhe do contrato";
        _this.navegacao = " > Assinaturas > Vigentes > Detalhar";
        _this.rota = "/assinar/vigente/";
        _this.entidade = {
            contrato: {
                status: "ATIVO", statusContrato: "NAOLIBERADOASSINTAURA",
                remetente: _this.shared.usuario, custodiante: { id: _this.shared.clienteSelecionado.cliente.id },
                partes: [], documentos: []
            }
        };
        return _this;
    }
    DetalheVigenteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"] }
    ]; };
    DetalheVigenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalhe-documento',
            template: __webpack_require__(/*! raw-loader!../../padrao/detalhe/detalhe-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/detalhe/detalhe-assina.component.css */ "./src/app/components/assinar/padrao/detalhe/detalhe-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoService"]])
    ], DetalheVigenteComponent);
    return DetalheVigenteComponent;
}(app_components_assinar_padrao_detalhe_detalhe_assina_component__WEBPACK_IMPORTED_MODULE_4__["DetalheAssinaComponent"]));



/***/ }),

/***/ "./src/app/components/assinar/vigente/lista/lista-vigente.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/assinar/vigente/lista/lista-vigente.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaVigenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaVigenteComponent", function() { return ListaVigenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/assinar/padrao/lista/lista-assina-padrao.component */ "./src/app/components/assinar/padrao/lista/lista-assina-padrao.component.ts");
/* harmony import */ var app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/assinar/documento/documentoVigente.service */ "./src/app/services/assinar/documento/documentoVigente.service.ts");
/* harmony import */ var app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/enum/statusContratoEnum */ "./src/app/model/enum/statusContratoEnum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaVigenteComponent = /** @class */ (function (_super) {
    __extends(ListaVigenteComponent, _super);
    function ListaVigenteComponent(modalService, documentoVigenteService) {
        var _this = _super.call(this, modalService) || this;
        _this.documentoVigenteService = documentoVigenteService;
        _this.exibirSelecao = true;
        _this.fazDownload = true;
        //this.podeCancelar = true;
        _this.titulo = "Documentos vigentes";
        _this.navegacao = " > Assinaturas > Vigentes > Listagem";
        _this.rota = "/assinar/vigente";
        _this.gerarAssinatura =  true && _this.shared.perfilUsuariSistema();
        _this.filtro = {};
        _this.filtro.status = 'ATIVO';
        _this.filtro.liberadoAssinatura = true;
        _this.filtro.custodiante = { id: _this.shared.clienteSelecionado.cliente.id };
        _this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }];
        if (_this.shared.perfilUsuario == 'ROLE_ASSINADOR') {
            _this.filtro.partes[0].cpfCnpj = _this.shared.usuario.pessoa.cpfCnpj;
        }
        _this.page = {
            number: 0,
            size: 30,
            order: 'dataCriacao,DESC'
        };
        _this.httpService = _this.documentoVigenteService;
        _this.opcoesStatusContrato = _this.utilService.enumToKeyValue(app_model_enum_statusContratoEnum__WEBPACK_IMPORTED_MODULE_4__["StatusContratoEnum"]);
        return _this;
    }
    ListaVigenteComponent.prototype.contratoDownload = function (event) {
        var _this = this;
        event.target.disabled = true;
        if (this.selection.length == 0) {
            this.download(this.objetoSelecionado, event, true);
        }
        else {
            var listaDownload = this.listagem.filter(function (c) { return _this.selection.includes(c.id); });
            var ultimoDoc_1 = listaDownload[listaDownload.length - 1];
            listaDownload.forEach(function (contrato) {
                _this.download(contrato, event, ultimoDoc_1 == contrato);
            });
        }
    };
    ListaVigenteComponent.prototype.download = function (contrato, event, habilitaBotao) {
        var _this = this;
        this.documentoVigenteService.getDownload(contrato).subscribe(function (responseApi) {
            var item = { anexo64: "", nomeArquivo: "" };
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            _this.utilService.download(item);
            if (habilitaBotao)
                event.target.disabled = false;
        }, function (err) {
            event.target.disabled = false;
            _this.errorHandler.handle(err);
        });
    };
    ListaVigenteComponent.prototype.gerarAssinaturaNovamente = function (contrato) {
        var _this = this;
        this.documentoVigenteService.gerarAssinaturaNovamente(this.objetoSelecionado).subscribe(function (responseApi) {
            _this.dialog.success("Solicita\u00E7\u00E3o de nova gera\u00E7\u00E3o de assinatura(s) realizada com sucesso !");
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    ListaVigenteComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoVigenteService"] }
    ]; };
    ListaVigenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-documento',
            template: __webpack_require__(/*! raw-loader!../../padrao/lista/lista-assina.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/padrao/lista/lista-assina.component.html"),
            styles: [__webpack_require__(/*! ../../padrao/lista/lista-assina.component.css */ "./src/app/components/assinar/padrao/lista/lista-assina.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_assinar_documento_documentoVigente_service__WEBPACK_IMPORTED_MODULE_3__["DocumentoVigenteService"]])
    ], ListaVigenteComponent);
    return ListaVigenteComponent;
}(app_components_assinar_padrao_lista_lista_assina_padrao_component__WEBPACK_IMPORTED_MODULE_2__["ListaAssinaPadraoComponent"]));



/***/ }),

/***/ "./src/app/services/assinar/documento/documentoRecusado.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/assinar/documento/documentoRecusado.service.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentoRecusadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoRecusadoService", function() { return DocumentoRecusadoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentoRecusadoService = /** @class */ (function (_super) {
    __extends(DocumentoRecusadoService, _super);
    function DocumentoRecusadoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/recusado');
        return _this;
    }
    DocumentoRecusadoService.prototype.buscaFiltro = function (filtro, action) {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoRecusadoService.prototype.getDownload = function (contrato) {
        return this.http.post(this.getApiUrl() + "/download", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoRecusadoService.prototype.recusarDocumento = function (contratoCancelamentoRequest) {
        return this.http.post(this.getApiUrl() + "/recusarDocumento", contratoCancelamentoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoRecusadoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DocumentoRecusadoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentoRecusadoService);
    return DocumentoRecusadoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/assinar/documento/documentoVigente.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/assinar/documento/documentoVigente.service.ts ***!
  \************************************************************************/
/*! exports provided: DocumentoVigenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoVigenteService", function() { return DocumentoVigenteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentoVigenteService = /** @class */ (function (_super) {
    __extends(DocumentoVigenteService, _super);
    function DocumentoVigenteService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/vigente');
        return _this;
    }
    DocumentoVigenteService.prototype.buscaFiltro = function (filtro, action) {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoVigenteService.prototype.getDownload = function (contrato) {
        return this.http.post(this.getApiUrl() + "/download", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoVigenteService.prototype.cancelarDocumento = function (contratoCancelamentoRequest) {
        return this.http.post(this.getApiUrl() + "/cancelarDocumento", contratoCancelamentoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoVigenteService.prototype.recusarDocumento = function (contratoCancelamentoRequest) {
        return this.http.post(this.getApiUrl() + "/recusarDocumento", contratoCancelamentoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoVigenteService.prototype.gerarAssinaturaNovamente = function (contrato) {
        return this.http.post(this.getApiUrl() + "/gerarAssinaturaNovamente", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoVigenteService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DocumentoVigenteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentoVigenteService);
    return DocumentoVigenteService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ })

}]);
//# sourceMappingURL=components-assinar-assinar-module.js.map