(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ngx-spinner class=\"sw-spiner\" bdColor=\"rgba(51,51,51,0.5)\" size=\"large\" color=\"#0f793c\" type=\"cube-transition\">\r\n    <p style=\"font-size: 20px; color: white ;\">Aguarde...</p>\r\n</ngx-spinner>\r\n\r\n<!--<div *ngIf=\"fileProgress?.status=='progress'\"\r\n    style=\" left:50%; top:70%; transform: translate(-50%, -50%); width: 25%; z-index: 100000;\">\r\n    <ngb-progressbar type=\"info\" [max]=\"100\" [value]=\"fileProgress?.message\" [striped]=\"true\" [animated]=\"true\"\r\n        [showValue]=\"true\">\r\n    </ngb-progressbar>-->\r\n\r\n    <div *ngIf=\"fileProgress?.status=='progress'\" class=\"mx-auto\">\r\n    <ngb-progressbar type=\"info\" [max]=\"100\" [value]=\"fileProgress?.message\" [striped]=\"true\" [animated]=\"true\"\r\n        [showValue]=\"true\">\r\n    </ngb-progressbar>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assinar/acesso/assinarAcesso.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assinar/acesso/assinarAcesso.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-wrapper\">\r\n    <div class=\"background\">\r\n\r\n    </div>\r\n</div>\r\n<main class=\"login-wrapper\">\r\n    <div class=\"middle-aligment-flex row no-gutters\">\r\n        <div class=\"login-image_wrapper op0 col-12 col-md-6\">\r\n            <img class=\"desktop\" src=\"assets/img/logos/t-login-logo.png\">\r\n            <img class=\"mobile\" style=\"width: auto;\" src=\"assets/img/assina.net-logobranco.png\">\r\n\r\n        </div>\r\n        <form class=\"form-signin op col-12 col-md-2\" #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"logar()\">\r\n            <h1 class=\"title\">Bem-vindo</h1>\r\n\r\n            <p class=\"signin\">\r\n                Acesse seu documento\r\n            </p>\r\n\r\n            <div class=\"input-wrapper \">\r\n                <input type=\"text\" [(ngModel)]=\"cpf\" name=\"cpf\" class=\"form-control\" id=\"inputCPF\"\r\n                    #login=\"ngModel\" placeholder=\"Digite os primeiros 4 numeros do seu CPF\" style=\"text-transform:uppercase\" autofocus>\r\n\r\n                <i class=\"ft-user\"></i>\r\n            </div>\r\n          \r\n            <button class=\"button-signin w100\" style=\"margin-bottom: 20px;\" type=\"submit\" [disabled]=\"descBtnEntrar != 'Visualizar'\">{{descBtnEntrar}}\r\n            </button>\r\n\r\n           <ngb-alert type=\"info\" [dismissible]=\"false\" *ngIf=\"message\">\r\n                <strong>Dados inválidos</strong>\r\n            </ngb-alert>\r\n\r\n            <br>\r\n\r\n        </form>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Documentos > Visualizar'\">\r\n\n            <label class=\"control-label\">{{documento.nomeDocumento}}</label>\n            <div class=\"document-preview-area\">\n                <!--<ng2-pdfjs-viewer #pdfViewer viewerId=\"inline\" [print]=\"true\" [fullScreen]=\"false\" [find]=\"false\"></ng2-pdfjs-viewer>-->\n                <pdf-viewer [hidden]=\"message || carregando || !documentoPDF\" src=\"{{documentoPDF}}\" original-size=\"true\" show-all=\"false\" [autoresize]=\"true\"\n                    [fit-to-page]='true' [render-text]='false'></pdf-viewer>\n\n                <div *ngIf=\"carregando\" class=\"document-preview-state\">\n                    Carregando documento...\n                </div>\n\n                <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" class=\"document-preview-message\" (close)=\"message = null\">\n                    {{ message.text }}\n                </ngb-alert>\n            </div>\n\n        </app-modal-simples>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\n    <div class=\"form-body\">\n        <app-modal-simples [titulo]=\"'Adicionar documentos para assinatura'\" [item]=\"documento\" [form]=\"form\">\n            <div class=\"contract-document-help\">\n                O tipo de documento define quais papeis precisam participar da assinatura.\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"document-label-row\">\n                        <label for=\"inputTipoDocumento\" class=\"control-label\">Tipo de Documento</label>\n                        <a class=\"nav-link position-relative\" ngbTooltip=\"Incluir novo tipo de documento para assinatura\"                        \n                            *ngIf=\"perfilUsuarioAdmin()\" (click)=\"incluirTipoDocumento()\">\n                            <i class=\"ft-plus-circle font-medium-3\" style=\"color: #3f51b5\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <select [(ngModel)]=\"tela.tipoDocumento\" class=\"form-control\" name=\"tipoDocumento\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputTipoDocumento\" (ngModelChange)=\"tipoDocumentoChange()\"\r\n                        #tipoDocumento=\"ngModel\">\r\n                        <option value=\"\" disabled>Selecione</option>\r\n                        <option *ngFor=\"let tipoDocumento of tipoDocumentoList\" [value]=\"tipoDocumento.item_id\">\r\n                            {{tipoDocumento.item_text}}\r\n                        </option>\r\n                    </select>\r\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"document-label-row\">\n                        <label class=\"control-label\">Papeis de assinatura</label>\n                        <a class=\"nav-link position-relative\" ngbTooltip=\"Incluir novo papel de assinatura\"\n                            *ngIf=\"perfilUsuarioAdmin()\" [class.disabled]=\"disableAddPapel()\" (click)=\"incluirPapel()\">\n                            <i class=\"ft-plus-circle font-medium-3\" style=\"color: #3f51b5\"></i>\n                        </a>\n                    </div>\n                    <ng-multiselect-dropdown *ngIf=\"dropdownList\" [disabled]=\"true\" [ngStyle]=\"classUpperCase()\"\n                        name=\"parteContrato\" id=\"inputparteContrato\" [placeholder]=\"'Escolha o tipo primeiro'\"\n                        [data]=\"dropdownList\" [(ngModel)]=\"tela.papel\" [settings]=\"dropdownSettings\">\n                    </ng-multiselect-dropdown>\n                    <small class=\"form-text text-muted\" *ngIf=\"tela.tipoDocumento && tela.papel?.length > 0\">\n                        Este documento sera assinado pelos papeis selecionados abaixo.\n                    </small>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <label for=\"documento\" class=\"control-label\">Arquivo PDF</label>\n                    <div class=\"document-dropzone\"\n                        [class.document-dropzone-disabled]=\"liberadoUpload\"\n                        [class.document-dropzone-active]=\"arrastandoArquivo\"\n                        (dragover)=\"onDragOver($event)\"\n                        (dragleave)=\"onDragLeave($event)\"\n                        (drop)=\"onDropArquivo($event)\"\n                        (click)=\"!liberadoUpload && idFile.click()\">\n                        <button type=\"button\" id=\"documento\" class=\"btn btn-raised btn-success document-select-button\"\n                            (click)=\"idFile.click(); $event.stopPropagation()\" [disabled]=\"liberadoUpload\">\n                            Selecionar arquivo\n                        </button>\n                        <span class=\"document-dropzone-text\" *ngIf=\"!liberadoUpload\">\n                            Selecione ou arraste um arquivo PDF para assinatura\n                        </span>\n                        <span class=\"document-dropzone-text\" *ngIf=\"liberadoUpload\">\n                            Escolha o tipo de documento para liberar o envio do PDF\n                        </span>\n                        <input #idFile class=\"form-control document-file-input\" type=\"file\" id=\"idFile\" accept=\".pdf\"\n                            maxlength=\"200000\" multiple [ngStyle]=\"classUpperCase()\" (change)=\"uploadArquivo($event)\"\n                            title=\" \" [disabled]=\"liberadoUpload\" />\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"selected-documents-title\">Documentos adicionados</div>\n                    <table class=\"table selected-documents-table mb-0\" *ngIf=\"documento?.length > 0\">\n                        <thead>\n                            <tr>\n                                <th class=\"action-column\">Acao</th>\n                                <th>Arquivo</th>\n                                <th>Tipo de documento</th>\n                                <th>Papeis de assinatura</th>\n                            </tr>\n                        </thead>\n                        <tbody [ngStyle]=\"classUpperCase()\">\n                            <tr *ngFor=\"let arquivo of documento\">\n                                <td class=\"action-column\">\n                                    <a class=\"btn btn-danger btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Remover\"\n                                        (click)=\"remover(arquivo)\">\n                                        <i class=\"fa fa-times-circle font-medium-4\"></i>\n                                    </a>\n                                </td>\n                                <td>\n                                    <small class=\"form-text text-muted\">{{arquivo.nomeDocumento}}</small>\n                                </td>\n                                <td>\n                                    <small class=\"form-text text-muted\">{{arquivo.tipoDocumento.nome}}</small>\n                                </td>\n                                <td>\n                                    <div *ngFor=\"let papel of arquivo.papel\" class=\"document-role-chip\">\n                                        {{papel.papel.nome}}\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"selected-documents-empty\" *ngIf=\"!documento || documento.length == 0\">\n                        Nenhum documento adicionado.\n                    </div>\n                </div>\n            </div>\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n        </app-modal-simples>\r\n    </div>\r\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Documentos > Papel'\" [form]=\"form\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                    <input type=\"text\" [(ngModel)]=\"papel.nome\" name=\"inputNome\" class=\"form-control\" id=\"inputNome\"\r\n                        [ngStyle]=\"classUpperCase()\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\"\r\n                         required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                        o nome do papel\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"perfilUsuarioAdmin()\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                    <input type=\"text\" [(ngModel)]=\"papel.identificacao\" name=\"inputIdentificacao\" class=\"form-control\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputIdentificacao\" #identificacao=\"ngModel\"\r\n                         placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        a Identificação\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <label for=\"inputAssina\" class=\"control-label\">Este é um tipo de documento padrão do\r\n                sistema e não pode ser editado.</label>\r\n\r\n\r\n            <div botoes>\r\n                <button (click)=\"salvar()\" class=\"btn btn-raised btn-primary\" type=\"button\">\r\n                    Incluir\r\n                </button>\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" [ngStyle]=\"classUpperCase()\" autocomplete=\"off\" class=\"form form-horizontal\" validate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Contrato Partes > Pessoa Jurídica > Contato '\"\r\n                           [form]=\"form\" [item]=\"contato\">\r\n\r\n            <div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"inputCpfCnpj\" class=\"control-label\">Cpf</label>\r\n                        <input type=\"text\" [(ngModel)]=\"contato.cpfCnpj\" name=\"cpfCnpj\" class=\"form-control\"\r\n                               #cpfCnpj=\"ngModel\" [ngStyle]=\"classUpperCase()\" id=\"inputCpfCnpj\" placeholder=\"Informe\"\r\n                               required appAutofocus maxlength=\"14\">\r\n                        <small class=\"form-text text-muted danger\"\r\n                               *ngIf=\"cpfCnpj.errors?.required && (cpfCnpj.dirty || cpfCnpj.touched)\">Informe o cpf\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"inputNomeRazaoSocial\" class=\"control-label\">Nome</label>\r\n                        <input type=\"text\" [(ngModel)]=\"contato.nomeRazaoSocial\" name=\"nomeRazaoSocial\"\r\n                            [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputNomeRazaoSocial\" maxlength=\"60\"\r\n                            minlength=\"3\" #nomeRazaoSocial=\"ngModel\" placeholder=\"Informe\" required>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"nomeRazaoSocial.errors?.required && (nomeRazaoSocial.dirty || nomeRazaoSocial.touched)\">Informe\r\n                            o nome\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"inputEmail\" class=\"control-label\">E-mail</label>\r\n                        <input #email=\"ngModel\"\r\n                               [(ngModel)]=\"contato.email\" [ngStyle]=\"classLowerCase()\" class=\"form-control\"\r\n                               id=\"inputEmail\"\r\n                               lowerCase maxlength=\"100\"\r\n                               minlength=\"3\" name=\"email\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\r\n                               placeholder=\"Informe\"\r\n                               required type=\"email\">\r\n                        <small *ngIf=\"email?.errors?.required && (email.dirty || email.touched)\"\r\n                               class=\"form-text text-muted danger\">\r\n                            Informe o Email\r\n                        </small>\r\n                        <small class=\"form-text text-muted danger\"\r\n                               *ngIf=\"email.errors?.pattern && (email.dirty || email.touched)\">\r\n                            Informe apenas letras e números [Aa-Zz][0-9]\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" autocomplete=\"off\" class=\"form form-horizontal\" id=\"formGroup\" validate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"titulo\" [item]=\"parte\" [form]=\"form\"\r\n                           (antesSalvarEvent)=\"antesSalvarEvent()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputTipoPessoa\" class=\"control-label\">Tipo de Pessoa</label>\r\n                    <select [(ngModel)]=\"parte.tipoPessoa\" class=\"form-control\" name=\"tipoPessoa\" id=\"inputTipoPessoa\"\r\n                            #tipoPessoa=\"ngModel\" [disabled]=\"desabilitarCampos()\"\r\n                            [ngStyle]=\"classUpperCase()\" ng-dropdown required>\r\n                        <option *ngFor=\"let tipoPessoa of tipoPessoaList\" [value]=\"tipoPessoa.item_id\">\r\n                            {{tipoPessoa.item_text}}\r\n                        </option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"tipoPessoa.invalid && (tipoPessoa.dirty || tipoPessoa.touched)\">Selecione\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputcpf\" class=\"control-label\" *ngIf=\"parte.tipoPessoa=='FISICA'\">CPF</label>\r\n                    <input-cpf *ngIf=\"parte.tipoPessoa=='FISICA'\"\r\n                        [disabled]=\"desabilitarCampos()\" [ngStyle]=\"classUpperCase()\"\r\n                        (cpfChangeEvent)=\"alterouCpfCNPJ()\" [(ngModel)]=\"parte.cpfCnpj\" required appAutofocus\r\n                        id=\"inputcpf\" #cpfcnpj=\"ngModel\" name=\"CPF\"></input-cpf>\r\n\r\n                    <label for=\"inputcnpj\" class=\"control-label\" *ngIf=\"parte.tipoPessoa=='JURIDICA'\">CNPJ</label>\r\n                    <input-cnpj *ngIf=\"parte.tipoPessoa=='JURIDICA'\"\r\n                        [disabled]=\"desabilitarCampos()\" [ngStyle]=\"classUpperCase()\"\r\n                        (cnpjChangeEvent)=\"alterouCpfCNPJ()\" [(ngModel)]=\"parte.cpfCnpj\" required appAutofocus\r\n                        id=\"inputcnpj\" #cpfcnpj=\"ngModel\" name=\"cnpj\"></input-cnpj>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"inputnomerazaoSocial\" class=\"control-label\"\r\n                            *ngIf=\"parte.tipoPessoa=='JURIDICA'\">Razão\r\n                            Social</label>\r\n                        <label for=\"inputnomerazaoSocial\" class=\"control-label\"\r\n                            *ngIf=\"parte.tipoPessoa=='FISICA'\">Nome</label>\r\n                        <input type=\"text\" [(ngModel)]=\"parte.nomeRazaoSocial\" name=\"nomeRazaoSocial\"\r\n                            class=\"form-control\" id=\"inputnomerazaoSocial\" maxlength=\"60\" minlength=\"3\"\r\n                            #nomeRazaoSocial=\"ngModel\" placeholder=\"Informe\" required>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"parte.tipoPessoa=='JURIDICA' && nomeRazaoSocial.errors?.required && (nomeRazaoSocial.dirty || nomeRazaoSocial.touched)\">Informe\r\n                            a Razão Social\r\n                        </small>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"parte.tipoPessoa=='FISICA' && nomeRazaoSocial.errors?.required && (nomeRazaoSocial.dirty || nomeRazaoSocial.touched)\">Informe\r\n                            o nome\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"parte.tipoPessoa=='JURIDICA'\">\n                    <div class=\"col-md-12\">\n                        <fieldset class=\"representantes-panel\">\n                            <legend>Representantes da empresa</legend>\n                            <app-complete-tab-form [content]=\"contratoParteContatoForm\" [dados]=\"contratoParteContatoModal\"\n                                [dadosComplementares]=\"dadosComplementares\" [cols]=\"titulosPartesContato\"\n                                [showButtons]=\"!consultando\" (change)=\"adicionouContratoContatoParte()\"\n                                [novoRegistro]=\"'Novo Representante'\"\n                                [mensagemExclusao]=\"'Deseja retirar este representante da assinatura ? '\"\n                                [itemTemplate]=\"detalheParteContato\"\n                                [tituloModal]=\"'Cadastro > Contrato > Representante da empresa'\">\n                                <ng-template #detalheParteContato let-item>\n                                    <td>{{item.nomeRazaoSocial}}</td>\n                                    <td>{{item.cpfCnpj}}</td>\n                                    <td>{{item.email}}</td>\n                                    <td>\n                                        <div *ngFor=\"let papel of item.papel\" style=\"display: inline-table\">\n                                            <span style=\"display: inline-flex;font-size: x-small;\">\n                                                <span style=\"margin-left:5px\">{{papel.papel.nome}}</span>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </ng-template>\n                            </app-complete-tab-form>\n                        </fieldset>\n                        <input type=\"hidden\" name=\"representantesEmpresa\"\n                            [ngModel]=\"representantesValidos() ? 'OK' : ''\" required #representantesEmpresa=\"ngModel\">\n                        <small class=\"form-text text-muted danger\"\n                            *ngIf=\"representantesEmpresa.invalid && (representantesEmpresa.dirty || representantesEmpresa.touched)\">\n                            Informe ao menos um representante para assinar pela empresa\n                        </small>\n                    </div>\n                </div>\n\r\n                <div class=\"row\" *ngIf=\"parte.tipoPessoa=='FISICA'\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"inputCelular\" class=\"control-label\" *ngIf=\"parte.tipoPessoa=='FISICA'\">Celular</label>\r\n                        <input type=\"text\" [(ngModel)]=\"parte.celular\" name=\"celular\" class=\"form-control\" id=\"inputCelular\"\r\n                               [ngStyle]=\"classUpperCase()\" maxlength=\"60\" minlength=\"3\" #celular=\"ngModel\"\r\n                               placeholder=\"Informe o celular\" >\r\n                        <small class=\"form-text text-muted danger\"\r\n                               *ngIf=\"celular.errors?.required && (celular.dirty || celular.touched)\">Informe o celular\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <label for=\"inputEmail\" class=\"control-label\" *ngIf=\"parte.tipoPessoa=='FISICA'\">E-mail</label>\r\n                        <input #email=\"ngModel\"\r\n                               [(ngModel)]=\"parte.email\" [ngStyle]=\"classLowerCase()\" class=\"form-control\"\r\n                               id=\"inputEmail\"\r\n                               lowerCase maxlength=\"100\"\r\n                               minlength=\"3\" name=\"email\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\r\n                               placeholder=\"Informe\"\r\n                               required type=\"email\">\r\n                        <small *ngIf=\"email?.errors?.required && (email.dirty || email.touched)\"\r\n                               class=\"form-email text-muted danger\">\r\n                            Informe o Email\r\n                        </small>\r\n                        <small class=\"form-text text-muted danger\"\r\n                               *ngIf=\"email.errors?.pattern && (email.dirty || email.touched)\">\r\n                            Informe apenas letras e números [Aa-Zz][0-9]\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\" *ngIf=\"parte.tipoPessoa=='FISICA' && dropdownList.length>0\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"control-label\">Parte Contrato</label>\r\n                        <ng-multiselect-dropdown *ngIf=\"dropdownList\"\r\n                            [disabled]=\"desabilitarCampos()\" name=\"parteContrato\"\r\n                            id=\"inputparteContrato\" [placeholder]=\"'Assinar como ...'\" [data]=\"dropdownList\"\r\n                            [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\">\r\n                        </ng-multiselect-dropdown>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-6\" >\r\n                        <label class=\"control-label\">Assinar depois de:</label>\r\n\r\n                        <select [(ngModel)]=\"parte.requisitoAssinatura\" class=\"form-control\"\r\n                            [ngStyle]=\"classUpperCase()\"\r\n                            [disabled]=\"desabilitarCampos()\"\r\n                            name=\"inputRequisitoAssinatura\" id=\"inputRequisitoAssinatura\" ng-dropdown\r\n                            #certificado=\"ngModel\">\r\n                            <option [ngValue]='null'>Sem pré requisisto</option>\r\n                            <option *ngFor=\"let parte of partes\" [value]=\"parte.cpfCnpj\">{{parte.nomeRazaoSocial}}\r\n                            </option>\r\n                        </select>\r\n\r\n                    </div>\r\n                    \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n        </app-modal-simples>\r\n    </div>\r\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Cadastro > Contrato > Documentos > Papel'\" [form]=\"form\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                    <input type=\"text\" [(ngModel)]=\"tipoDocumento.nome\" name=\"inputNome\" class=\"form-control\" id=\"inputNome\"\r\n                        [ngStyle]=\"classUpperCase()\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\"\r\n                         required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe\r\n                        o nome do papel\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"perfilUsuarioAdmin()\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"inputIdentificacao\" class=\"control-label\">Identificação</label>\r\n                    <input type=\"text\" [(ngModel)]=\"tipoDocumento.identificacao\" name=\"inputIdentificacao\" class=\"form-control\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputIdentificacao\" #identificacao=\"ngModel\"\r\n                         placeholder=\"Informe\" minlength=\"3\" maxlength=\"255\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.required && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        a Identificação\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificacao.errors?.minlength && (identificacao.dirty || identificacao.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <label for=\"inputAssina\" class=\"control-label\">Este é um tipo de documento padrão do\r\n                sistema e não pode ser editado.</label>\r\n\r\n\r\n            <div botoes>\r\n                <button (click)=\"salvar()\" class=\"btn btn-raised btn-primary\" type=\"button\">\r\n                    Incluir\r\n                </button>\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-home\">\n    <img src=\"../../../assets/img/tela-inicial/tela-inicial.png\" class=\"desktop\"/>\n    <img src=\"../../../assets/img/tela-inicial/tela-inicial-mobile.png\" class=\"mobile\"/>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/desenvolvimento/desenvolvimento.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/desenvolvimento/desenvolvimento.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    Estamos em desenvolvimento...\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/padrao/lista/padrao-lista.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/padrao/lista/padrao-lista.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\">\r\n    <form class=\"form form-horizontal\" autocomplete=\"off\">\r\n        <div class=\"table-responsive table-wrapper-scroll-x table-wrapper-scroll-y\">\n            <table sortable-table (sorted)=\"onSorted($event)\" class=\"table table-hover table-sm\">\n                <thead class=\"thead-custom\">\r\n                    <tr>\r\n                        <th width=\"120px\"><a sortable-column=\"0\">Código</a>\r\n                            <input type=\"text\" [(ngModel)]=\"campoFiltro[0]\" name=\"numero\" class=\"form-control\"\r\n                                id=\"numero\" placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th><a sortable-column=\"1\" sort-direction=\"ASC\">Descrição</a>\r\n                            <input type=\"text\" ([formControl])=\"filtro\" [(ngModel)]=\"campoFiltro[1]\" name=\"descricao\"\r\n                                class=\"form-control\" id=\"descricao\" placeholder=\"Pesquisar...\"\r\n                                (ngModelChange)=\"filtrando()\">\r\n                        </th>\r\n                        <th width=\"140px\"><a sortable-column=\"2\">Status</a>\r\n                            <select class=\"form-control\" [(ngModel)]=\"campoFiltro[2]\" id=\"status\" name=\"status\"\r\n                                placeholder=\"Pesquisar...\" (ngModelChange)=\"filtrando()\">\r\n                                <option [ngValue]=\"null\">Selecione</option>\r\n                                <option *ngFor=\"let opcao of opcoesStatus\" [value]=\"opcao.value\">{{opcao.label}}\r\n                                </option>\r\n                            </select>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody [ngStyle]=\"classUpperCase()\">\r\n                    <tr *ngFor=\"let item of listagem\" (click)=\"selecionarLinha(item)\" [ngClass]=\"legendaGrid(item)\"\r\n                        (dblclick)=\"editar(true)\">\r\n                        <td>{{item.numero}}</td>\r\n                        <td title=\"{{item.descricao}}\" style=\"max-width: 300px\">\r\n                            <span>{{item.descricao}}</span>\r\n                        </td>\r\n                        <td>{{item.descStatus | uppercase}}</td>\r\n                    </tr>\r\n                </tbody>\r\n                <tr *ngIf=\"!listagem.length\">\r\n                    <td colspan=\"3\">Nenhum registro encontrado</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\n            <app-pagination [page]=\"page\" (paginationEvent)=\"changePage($event)\"></app-pagination>\n        </div>\n        <app-botoes-lista (incluirEvent)=\"incluir()\" (editarEvent)=\"editar()\" (excluirEvent)=\"excluir()\"\n            [selecionado]=\"!objetoSelecionado\">\n        </app-botoes-lista>\n    </form>\n</app-form-simples>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/padrao/novo/padrao-novo.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/padrao/novo/padrao-novo.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\">\r\n    <form class=\"form form-horizontal\" #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"salvar()\" novalidate>\r\n        <div class=\"form-body\">\r\n            <h4 class=\"form-section mb-1\">\r\n                <div *ngIf=\"!editando && !consultando\"><i class=\"fa fa-plus\"></i> Novo cadastro</div>\r\n                <div *ngIf=\"editando && !consultando\"><i class=\"fa fa-edit\"></i> Editando cadastro</div>\r\n                <div *ngIf=\"consultando\"><i class=\"fa fa-eye\"></i> Consultando cadastro</div>\r\n            </h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <label for=\"inputNr\" class=\"control-label\">Código</label>\r\n                    <input type=\"text\" [(ngModel)]=\"entidade.numero\" name=\"numero\" class=\"form-control\" id=\"inputNr\"\r\n                        #numero=\"ngModel\" placeholder=\"\" disabled readonly>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <label for=\"inputDescricao\" class=\"control-label\">Descrição</label>\r\n                    <input type=\"text\" [(ngModel)]=\"entidade.descricao\" name=\"descricao\" class=\"form-control\"\r\n                        id=\"inputDescricao\" #descricao=\"ngModel\" placeholder=\"Informe\" upperCase maxlength=\"60\" required\r\n                        appAutofocus>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"descricao.errors?.required && (descricao.dirty || descricao.touched)\">Informe a\r\n                        Descrição</small>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <label for=\"inputStatus\" class=\"control-label\">Status</label>\r\n                    <ui-switch id=\"inputStatus\" checkedLabel=\"Ativo\" uncheckedLabel=\"Inativo\" defaultBgColor=\"red\"\r\n                        [(ngModel)]=\"entidade.status\" name=\"status\" #status=\"ngModel\" class=\"switch100\"\r\n                        [disabled]=\"!editando\">\r\n                    </ui-switch>\r\n                </div>\r\n            </div>\r\n            <br />\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n            <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"consultando\"\r\n                (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n            </app-botoes-cadastro>\r\n        </div>\r\n    </form>\r\n</app-form-simples>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registrar/registrar-cliente.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registrar/registrar-cliente.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header col-md-12\" style=\"margin-bottom: 15px; background: #0b2238;\">\r\n    <div class=\" row\">\r\n        <div class=\"logo clearfix d-block col-md-3\">\r\n            <div style=\"margin-left: 10px\">\r\n                <img class=\"logo-img\" src=\"assets/img/assina.net-logobranco.png\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center col-md-6 content-header\" style=\"color: white;\">\r\n            <div>Novo Cliente</div>\r\n        </div>\r\n        <div class=\"col-md-3\" style=\"color: white;\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<img src=\"../../../assets/img/tela-inicial/tela-base.png\" class=\"w-100 desktop blur3\" />\r\n<img src=\"../../../assets/img/tela-inicial/tela-base-mobile.png\" class=\"w-100 mt-3 mobile blur3\" />\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" class=\"form form-horizontal\"\r\n      style=\"position: absolute; top: 0px; left: 0px; width: 100%; \"\r\n      validate>\r\n    <div class=\"form-body\" style=\"position: relative; top: 10vh; width: 60vw; margin-left: auto; margin-right: auto;\">\r\n        <div class=\"col-md-12\" *ngIf=\"!cadastrado\">\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputTipoPessoa\" class=\"control-label\">Tipo de Pessoa</label>\r\n                    <select [(ngModel)]=\"cliente.tipoPessoa\" class=\"form-control\" name=\"tipoPessoa\" id=\"inputTipoPessoa\"\r\n                            #tipoPessoa=\"ngModel\" ng-dropdown required>\r\n                        <option value=\"FISICA\">FISICA</option>\r\n                        <option value=\"JURIDICA\">JURIDICA</option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"tipoPessoa.invalid && (tipoPessoa.dirty || tipoPessoa.touched)\">Selecione\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <input type=\"text\" [(ngModel)]=\"cliente.rgie\" name=\"text\" class=\"form-control rgie\" id=\"inputRgIe\"\r\n                        maxlength=\"255\" minlength=\"3\" #indicacao=\"ngModel\" placeholder=\"Informe\"\r\n                        [disabled]=\"!clienteNovo\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\" *ngIf=\"cliente.tipoPessoa=='FISICA'\">\r\n                    <label for=\"inputCPF\" class=\"control-label\">CPF</label>\r\n                    <input-cpf [(ngModel)]=\"cliente.cpfCnpj\" required appAutofocus id=\"inputCPF\" #cpfCnpj=\"ngModel\"\r\n                               (cpfChangeEvent)=\"alterouCliente($event)\" name=\"cpfCnpj\">\r\n                    </input-cpf>\r\n                    <small *ngIf=\"cpfCnpj.errors?.required && (cpfCnpj.dirty || cpfCnpj.touched)\"\r\n                           class=\"form-text text-muted danger\">Informe o CPF\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\" *ngIf=\"cliente.tipoPessoa=='JURIDICA'\">\r\n                    <label class=\"control-label\" for=\"inputCnpj\">CNPJ</label>\r\n                    <input-cnpj #cpfCnpj=\"ngModel\" (cnpjChangeEvent)=\"alterouCliente($event)\"\r\n                                [(ngModel)]=\"cliente.cpfCnpj\" appAutofocus id=\"inputCnpj\"\r\n                                name=\"cnpj\" required>\r\n                    </input-cnpj>\r\n                    <small *ngIf=\"cpfCnpj.errors?.required && (cpfCnpj.dirty || cpfCnpj.touched)\"\r\n                           class=\"form-text text-muted danger\">Informe o CNPJ\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputNome\" class=\"control-label\">Nome</label>\r\n                    <input type=\"text\" [(ngModel)]=\"cliente.nomeRazaoSocial\" name=\"nome\" class=\"form-control\"\r\n                        [disabled]=\"!clienteNovo\" id=\"inputNome\" #nome=\"ngModel\" placeholder=\"Informe\" minlength=\"3\"\r\n                        maxlength=\"255\" required>\r\n\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.required && (nome.dirty || nome.touched)\">Informe o Nome\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"nome.errors?.minlength && (nome.dirty || nome.touched)\">Informe no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"cliente.tipoPessoa=='JURIDICA'\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputCPFResponsavel\" class=\"control-label\">CPF Responsável</label>\r\n                    <input-cpf (cpfChangeEvent)=\"alterouCpfCNPJ('responsavel')\" [(ngModel)]=\"cliente.cpfCnpjResponsavel\"\r\n                        required [disabled]=\"!clienteNovo\" appAutofocus id=\"inputCPFResponsavel\"\r\n                        #cpfCnpjResponsavel=\"ngModel\" name=\"cpfCnpjResponsavel\">\r\n                    </input-cpf>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputNomeResponsavel\" class=\"control-label\">Nome Responsável</label>\r\n                    <input #nomeResponsavel=\"ngModel\" [(ngModel)]=\"cliente.nomeRazaoSocialResponsavel\"\r\n                           [disabled]=\"!clienteNovo\"\r\n                           class=\"form-control\"\r\n                           id=\"inputNomeResponsavel\" maxlength=\"255\" minlength=\"3\"\r\n                           name=\"nomeResponsavel\" placeholder=\"Informe\" required type=\"text\">\r\n                    <small class=\"form-text text-muted danger\"\r\n                           *ngIf=\"nomeResponsavel.errors?.required && (nomeResponsavel.dirty || nomeResponsavel.touched)\">Informe\r\n                        o Nome\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                           *ngIf=\"nomeResponsavel.errors?.minlength && (nomeResponsavel.dirty || nomeResponsavel.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputEmail\" class=\"control-label\">E-mail</label>\r\n                    <input #email=\"ngModel\"\r\n                           [(ngModel)]=\"cliente.email\" [ngStyle]=\"classLowerCase()\" class=\"form-control\" id=\"inputEmail\"\r\n                           lowerCase maxlength=\"100\"\r\n                           minlength=\"3\" name=\"email\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\r\n                           placeholder=\"Informe\"\r\n                           required type=\"email\">\r\n                    <small *ngIf=\"email?.errors?.required && (email.dirty || email.touched)\"\r\n                           class=\"form-text text-muted danger\">\r\n                        Informe o Email\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                           *ngIf=\"email.errors?.pattern && (email.dirty || email.touched)\">\r\n                        Informe apenas letras e números [Aa-Zz][0-9]\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputNumero\" class=\"control-label\">Número Celular</label>\r\n                    <input type=\"phone\" [(ngModel)]=\"cliente.celular\" name=\"numero\" class=\"form-control\"\r\n                        [disabled]=\"!clienteNovo\" id=\"inputNumero\" maxlength=\"11\" minlength=\"10\" #numero=\"ngModel\"\r\n                        placeholder=\"Informe\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"numero.errors?.required && (numero.dirty || numero.touched)\">Informe o Número\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputIndicacao\" class=\"control-label\">Indicação</label>\r\n                    <input type=\"text\" [(ngModel)]=\"cliente.indicacao\" name=\"indicacao\" class=\"form-control\"\r\n                        id=\"inputIndicacao\" maxlength=\"255\" minlength=\"3\" #indicacao=\"ngModel\" placeholder=\"Informe\"\r\n                        [disabled]=\"!clienteNovo\" >                    \r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputPlano\" class=\"control-label\">Plano</label>\r\n                    <select [(ngModel)]=\"cliente.idPlano    \" class=\"form-control\" name=\"plano\" id=\"inputPlano\"\r\n                        [disabled]=\"!clienteNovo\" ng-dropdown #plano=\"ngModel\" required>\r\n                        <option value=\"C526767A-8789-4C55-9E44-6C9B7FC83B52\">Plano Gratuito - 5 Assinaturas mensais\r\n                        </option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"plano.invalid && (plano.dirty || plano.touched)\">Selecione\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\" *ngIf=\"message\">\r\n                <div class=\"col-md-12\">\r\n                    <br />\r\n                    <ngb-alert type=\"{{message.type}}\" (close)=\"message = null\">\r\n                        {{ message.text }}<br>\r\n                    </ngb-alert>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"false\" [consultando]=\"!clienteNovo\"\r\n                [labelSalvar]=\"'Registrar'\">\r\n                <div inicio>\r\n                    <!-- <ngx-recaptcha2 [size]=\"size\" [hl]=\"lang\" [theme]=\"theme\" [type]=\"type\" (expire)=\"handleExpire()\" \r\n                        (load)=\"handleLoad()\" (success)=\"handleSuccess($event)\">\r\n                    </ngx-recaptcha2> -->\r\n                </div>\r\n            </app-botoes-cadastro>\r\n\r\n        </div>\r\n        <div class=\"col-md-12 textCenter\" *ngIf=\"cadastrado\">\r\n            Obrigado por assinar nosso serviço, você receberá um e-mail com usuario e senha para acesso ao sistema caso\r\n            já não seja cadastrado no nosso portal\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/security/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/security/login/login.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-wrapper\">\r\n    <div class=\"background\">\r\n\r\n    </div>\r\n</div>\r\n<main class=\"login-wrapper\">\r\n    <div class=\"middle-aligment-flex row no-gutters\">\r\n        <div class=\"login-image_wrapper op0 col-12 col-md-6\">\r\n            <img class=\"desktop\" src=\"assets/img/logos/t-login-logo.png\">\r\n            <img class=\"mobile\" style=\"width: auto;\" src=\"assets/img/assina.net-logobranco.png\">\r\n\r\n        </div>\r\n        <form class=\"form-signin op col-12 col-md-4\" #form=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"logar()\">\r\n            <h1 class=\"title\">Bem-vindo</h1>\r\n\r\n            <p class=\"signin\">\r\n                Acesse sua conta\r\n            </p>\r\n\r\n            <div class=\"input-wrapper\">\r\n                <input type=\"text\" [(ngModel)]=\"usuario.login\" name=\"login\" class=\"form-control\" id=\"inputLogin\"\r\n                    #login=\"ngModel\" placeholder=\"Usuário\" style=\"text-transform:uppercase\" autofocus>\r\n\r\n                <i class=\"ft-user\"></i>\r\n            </div>\r\n            <div class=\"input-wrapper\">\r\n                <input type=\"password\" [(ngModel)]=\"usuario.senha\" name=\"senha\" class=\"form-control\" id=\"inputPassword\"\r\n                    placeholder=\"Senha\" #senha=\"ngModel\">\r\n\r\n                <i class=\"ft-lock\"></i>\r\n            </div>\r\n\r\n            <button class=\"button-signin w100\" style=\"margin-bottom: 20px;\" type=\"submit\"\r\n                [disabled]=\"descBtnEntrar != 'Entrar'\">{{descBtnEntrar}}\r\n            </button>\r\n\r\n            <div>\r\n                <a class=\"signin\" (click)=\"lostPassword()\">\r\n                    <span class=\"primary\">Esqueceu a senha ? Clique aqui.</span>\r\n                </a>\r\n            </div>\r\n\r\n            <ngb-alert type=\"info\" [dismissible]=\"false\" *ngIf=\"message\">\r\n                <strong>Login ou senha inválidos</strong>\r\n            </ngb-alert>\r\n\r\n            <br>\r\n\r\n            <div>\r\n                <a class=\"signin\" (click)=\"newCliente()\">\r\n                    <span class=\"primary\">Ainda não é cliente ? Clique aqui.</span>\r\n                </a>\r\n            </div>\r\n            \r\n            <br>\r\n\r\n            <div>\r\n                <a class=\"signin\" (click)=\"documentValidation()\">\r\n                    <span class=\"primary\">Clique aqui para validar um documento.</span>\r\n                </a>\r\n            </div>\r\n\r\n            <!--<a class=\"signin\" (click)=\"lostPassword()\" *ngIf=\"message\">\r\n                <span>Esqueceu a senha ? Clique aqui para redefinir a senha.</span>\r\n            </a>-->\r\n\r\n\r\n\r\n        </form>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-wrapper\">\r\n    <div class=\"background\">\r\n        <ul id=\"slippry-back\">\r\n            <li>\r\n                <img src=\"assets/img/back-3.jpg\">\r\n            </li>\r\n            <li>\r\n                <img src=\"assets/img/back-2.jpg\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<main class=\"login-wrapper\">\r\n    <div class=\"middle-aligment-flex row no-gutters\">\r\n        <div class=\"login-image_wrapper op0 col-12 col-md-3\">\r\n            <svg class=\"sw-logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"500px\" height=\"300px\" viewBox=\"0 0 480 290\"\r\n                version=\"1.1\">\r\n                <g id=\"surface2\"\r\n                    transform=\"matrix(1.3223809523809523,0,0,0.7523809523809523,56.00000000000007,-15.999999999999986)\">\r\n                    <path style=\"stroke:none;fill-rule:evenodd;fill:rgb(0.901961%,56.294118%,35.686275%);fill-opacity:1\"\r\n                        d=\"M 56.898438 110.550781 C 261.933594 102.382812 264.550781 94.964844 264.750000 88.300781 C 265.082031 82.066406 264.250000 75.484375 262.250000 68.550781 C 261.316406 64.714844 261.683594 61.949219 263.351562 60.250000 C 265.050781 58.550781 267.566406 58.250000 270.898438 59.351562 C 273.800781 60.417969 276.535156 62.367188 279.101562 65.199219 C 281.667969 68.035156 283.535156 71.148438 284.699219 74.550781 C 286.464844 80.515625 285.535156 86.417969 281.898438 92.250000 C 277.167969 99.648438 269.648438 106.566406 259.351562 113.000000 C 255.316406 115.500000 254.500000 114.683594 256.898438 110.550781 \" />\r\n                    <path style=\"stroke:none;fill-rule:evenodd;fill:rgb(0.568627%,98.823529%,67.647059%);fill-opacity:1\"\r\n                        d=\"M 207.750000 95.699219 C 202.050781 108.101562 199.332031 119.550781 199.601562 130.050781 C 199.765625 138.351562 202.449219 144.785156 207.648438 149.351562 C 210.785156 151.851562 214.367188 153.500000 218.398438 154.300781 C 222.464844 155.132812 226.132812 154.964844 229.398438 153.800781 C 233.066406 152.332031 235.132812 150.101562 235.601562 147.101562 C 236.035156 144.132812 234.632812 141.117188 231.398438 138.050781 C 224.898438 132.484375 219.882812 126.582031 216.351562 120.351562 C 212.851562 114.117188 211.148438 105.984375 211.250000 95.949219 C 211.117188 91.285156 209.949219 91.199219 207.750000 95.699219 M 222.500000 73.199219 C 210.265625 72.367188 199.898438 73.683594 191.398438 77.148438 C 184.699219 79.949219 180.167969 84.332031 177.800781 90.300781 C 176.566406 93.832031 176.101562 97.515625 176.398438 101.351562 C 176.699219 105.183594 177.699219 108.367188 179.398438 110.898438 C 181.464844 113.734375 183.750000 114.882812 186.250000 114.351562 C 188.714844 113.785156 190.800781 111.550781 192.500000 107.648438 C 195.367188 100.148438 198.984375 93.882812 203.351562 88.851562 C 207.750000 83.785156 214.316406 79.632812 223.050781 76.398438 C 227.351562 74.601562 227.167969 73.535156 222.500000 73.199219 M 249.800781 80.398438 C 243.667969 73.300781 237.515625 68.667969 231.351562 66.500000 C 225.582031 64.300781 219.117188 63.101562 211.949219 62.898438 C 208.015625 62.667969 205.500000 61.535156 204.398438 59.500000 C 203.332031 57.464844 203.816406 55.082031 205.851562 52.351562 C 207.750000 50.050781 210.417969 48.148438 213.851562 46.648438 C 217.316406 45.148438 220.832031 44.367188 224.398438 44.300781 C 230.500000 44.464844 235.750000 47.066406 240.148438 52.101562 C 245.683594 58.566406 249.933594 67.500000 252.898438 78.898438 C 254.000000 83.367188 252.964844 83.867188 249.800781 80.398438 \" />\r\n                </g>\r\n                <g id=\"surface4\">\r\n                    <text style=\"fill:rgb(0,170,50)\" font-family=\"Audiowide\" font-size=\"45\"\r\n                        transform=\"matrix(0.9523809523809523,0,0,0.9523809523809523,120.47619047619042,104.00000000000003)\"\r\n                        id=\"0\" xml:space=\"preserve\">\r\n                        <![CDATA[Assina.Net]]></text>\r\n                    <text style=\"fill:rgb(89,90,91)\" font-family=\"Helvetica\" font-size=\"25\"\r\n                        transform=\"matrix(0.9523809523809523,0,0,0.9523809523809523,71.99999999999993,175)\" id=\"1\"\r\n                        xml:space=\"preserve\">\r\n                        <![CDATA[Tecnologia em Assinatura Digital]]></text>\r\n                </g>\r\n            </svg>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-body col-md-4\">\r\n\r\n            <form class=\"form-signin op col-20 col-md-10\" #form=\"ngForm\" (ngSubmit)=\"trocarSenha()\" autocomplete=\"off\">\r\n\r\n                <div class=\"input-wrapper\" *ngIf=\"tokenValido\">\r\n\r\n                    <label for=\"inputPassword\" class=\"control-label\">Senha</label>\r\n\r\n                    <div class=\"input-group mb-0\" id=\"show_hide_password_n\" style=\"flex-wrap:nowrap\">\r\n                        <input type=\"password\" [(ngModel)]=\"senhaNova\" name=\"y\" class=\"form-control\" id=\"inputPassword\"\r\n                            placeholder=\"**********\" #senha=\"ngModel\" [required]=\"!editando\" minlength=\"3\"\r\n                            maxlength=\"30\">\r\n                        <div class=\"input-group-append\">\r\n                            <div class=\"input-group-text\" (click)=\"showHidePassword('n')\">\r\n                                <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"senha.errors?.required && (senha.dirty || senha.touched)\">Informe a Senha\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"senha.errors?.minlength && (senha.dirty || senha.touched)\">Informe no mínimo 6\r\n                        caracteres\r\n                    </small>\r\n                </div>\r\n                <div class=\"input-wrapper\">\r\n                    <div style=\"margin-top: 28px;\">\r\n                        <ng2-password-strength-bar  [passwordToCheck]=\"senhaNova\" [barColors]=\"barColors\"\r\n                            [strengthLabels]=\"strengthLabels\">\r\n                        </ng2-password-strength-bar>\r\n                    </div>\r\n                </div>\r\n                <div class=\"input-wrapper\">\r\n                    <label for=\"inputPasswordC\" class=\"control-label\">Confirmar Senha</label>\r\n                    <div class=\"input-group mb-0\" id=\"show_hide_password_c\" style=\"flex-wrap:nowrap\">\r\n                        <input type=\"password\" [(ngModel)]=\"senhaConfirmacao\" name=\"senhaConfirma\" class=\"form-control\"\r\n                            id=\"inputPasswordC\" placeholder=\"**********\" #senhaConfirma=\"ngModel\"\r\n                            [required]=\"senhaNova != senhaConfirmacao\" maxlength=\"30\">\r\n                        <div class=\"input-group-append\">\r\n                            <div class=\"input-group-text\" (click)=\"showHidePassword('c')\">\r\n                                <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"senhaConfirma.errors?.required && (senhaConfirma.dirty || senhaConfirma.touched)\">\r\n                        Informe a Senha de confirmação\r\n                    </small>\r\n                </div>\r\n\r\n                <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                    {{ message.text }}\r\n                </ngb-alert>\r\n\r\n                <div class=\"form-actions\" style=\"border:0px\">\r\n                    <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" style=\"padding-top: 0px;\">\r\n                        <i class=\"fa fa-check\"></i> Alterar Senha\r\n                    </button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/template/customizer/customizer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/template/customizer/customizer.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\r\n<div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\">\r\n    <a class=\"customizer-close\">\r\n        <i class=\"ft-x font-medium-3\"></i>\r\n    </a>\r\n    <!--\r\n     <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\">\r\n         <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\r\n    </a>\r\n    -->\r\n    <div class=\"customizer-content p-3 ps-container ps-theme-dark text-left\"\r\n        data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\r\n        <h4 class=\"text-uppercase mb-0 text-bold-400\">Temas</h4>\r\n        <p>Customize seu menu utilizando nossas opções</p>\r\n        <hr>\r\n\r\n        <!--Sidebar Options Starts-->\r\n        <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Opções de Cores</h6>\r\n        <div class=\"cz-bg-color\">\r\n            <div class=\"row p-1\">\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"pomegranate\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"king-yna\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"ibiza-sunset\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"flickr\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"purple-bliss\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"man-of-steel\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"purple-love\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row p-1\">\r\n                <div class=\"col\">\r\n                    <span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"black\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"white\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"primary\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"success\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"warning\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"info\"></span>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\"\r\n                        data-bg-color=\"danger\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Sidebar Options Ends-->\r\n        <hr>\r\n\r\n        <!--Sidebar BG Image Starts-->\r\n        <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Imagem de Fundo</h6>\r\n        <div class=\"cz-bg-image row\">\r\n            <div class=\"ml-2 mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/01.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/02.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/03.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/04.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/05.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n            <div class=\"mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/06.jpg\" class=\"rounded\" width=\"60\">\r\n            </div>\r\n        </div>\r\n        <!--Sidebar BG Image Ends-->\r\n        <hr>\r\n\r\n        <!--Sidebar BG Image Toggle Starts-->\r\n        <div class=\"togglebutton\">\r\n            <div class=\"switch\" style=\"border:none;display:block;\">\r\n                <span>Utilizar imagem de fundo</span>\r\n                <div class=\"float-right\">\r\n                    <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\" style=\"display: flex\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked\r\n                            id=\"sidebar-bg-img\">\r\n                        <label class=\"custom-control-label\" for=\"sidebar-bg-img\"></label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Sidebar BG Image Toggle Ends-->\r\n        <hr>\r\n\r\n        <!--Compact Menu Starts-->\r\n        <div class=\"togglebutton\">\r\n            <div class=\"switch\" style=\"border:none;display:block;\">\r\n                <span>Menu reduzido</span>\r\n                <div class=\"float-right\">\r\n                    <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\" style=\"display: flex\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\">\r\n                        <label class=\"custom-control-label\" for=\"cz-compact-menu\"></label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Compact Menu Ends-->\r\n        <hr>\r\n\r\n        <!--RTL Starts-->\r\n        <div class=\"togglebutton\">\r\n            <div class=\"switch\" style=\"border:none;display:block;\">\r\n                <span>Direção (RTL)</span>\r\n                <div class=\"float-right\">\r\n                    <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\" style=\"display: flex\">\r\n                        <input type=\"checkbox\" [checked]=\"options.direction == 'rtl' ? 'checked' : false\"\r\n                            class=\"custom-control-input cz-rtl\" id=\"cz-rtl\"\r\n                            (change)=\"options.direction = (options.direction == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\">\r\n                        <label class=\"custom-control-label\" for=\"cz-rtl\"></label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--RTL Ends-->\r\n        <hr>\r\n\r\n        <!--Sidebar Width Starts-->\r\n        <!-- <div>\r\n            <label for=\"cz-sidebar-width\">Sidebar Width</label>\r\n            <select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\r\n                <option value=\"small\">Small</option>\r\n                <option value=\"medium\" selected>Medium</option>\r\n                <option value=\"large\">Large</option>\r\n            </select>\r\n        </div> -->\r\n        <!--Sidebar Width Ends-->\r\n    </div>\r\n</div>\r\n<!--Theme customizer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/template/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/template/footer/footer.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer class=\"app-footer mt-1\">\n    <div class=\"container-fluid\">\r\n        <div class=\"pull-right d-none d-sm-block\">\r\n            <b>Version</b> 1.0.0\r\n        </div>\r\n        <p class=\"copyright text-center blue-as\">\r\n         Copyright &copy; 2019 <a href=\"http://www.assina.net\" class=\"primary\">Assina.Net</a>. All rights\r\n            reserved.\r\n        </p>\r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/template/navbar/navbar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/template/navbar/navbar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\" style=\"padding: 0 1.5rem; \">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n\r\n            <!--<span class=\"d-lg-none navbar-right navbar-collapse-toggle mt-2 mb-2\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>-->\r\n            <div class=\"navbar-logo d-block d-lg-none pt-2\" style=\"width: 100%;text-align: center\">\r\n                <a [routerLink]=\"['/']\">\r\n                    <span class=\"text align-middle white text-bold-500\"\r\n                          style=\"font-size:1.75rem;text-transform: none;\"><img src=\"assets/img/assina.net-logobranco.png\" width=\"200px\" /></span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"navbar-container p-2\">\r\n            <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">-->\r\n            <div  id=\"navbarSupportedContent\" >\r\n\r\n                <!-- {{getPorta()}}-->\r\n                <ul class=\"navbar-nav d-flex flex-row justify-content-center\">\r\n                    <button type=\"button\" class=\"navbar-toggle float-left d-lg-none mt-1 mb-0\" data-toggle=\"collapse\"\r\n                            (click)=\"isCollapsed = true;\">\r\n                        <p class=\"white\">Menu</p>\r\n                        <!--<span class=\"sr-only\">Toggle navigation</span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>-->\r\n                    </button>\r\n                    <li class=\"\"></li>\r\n                    <li class=\"nav-item e d-lg-block rounded-circle\">\r\n                        <a class=\"nav-link position-relative\" (click)=\"goSign()\">\r\n                            <img src=\"../../../../assets/img/icones/navbar/exclamacao.png\"/>\r\n                            <!-- <i class=\"ft-bell font-medium-3\"></i>-->\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item d-lg-block rounded-circle\" *ngIf=\"podeIncluirContrato()\">\r\n                        <a class=\"nav-link position-relative\" (click)=\"addContract()\">\r\n                            <img src=\"../../../../assets/img/icones/navbar/certificado.png\"/>\r\n                            <!--<i class=\"ft-file-plus font-medium-3\" style=\"vertical-align: middle;\"></i>-->\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item d-lg-block rounded-circle\"  *ngIf=\"podeIncluirUsuario()\">\r\n                        <a class=\"nav-link position-relative\" (click)=\"addUser()\">\r\n                            <img src=\"../../../../assets/img/icones/navbar/perfil+.png\"/>\r\n                            <!--<i class=\"ft-user-plus font-medium-3\"></i>-->\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item rounded\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"settings\" ngbDropdownToggle>\r\n                            <!-- <i class=\"ft-user font-medium-3 white darken-4\"></i>-->\r\n                            <img src=\"../../../../assets/img/icones/navbar/perfil.png\"/>\r\n                            <span class=\"d-none d-sm-inline-block darken-4 font-medium-3 white ml-1\">\r\n                                {{usuario.pessoa.nomeRazaoSocial.split(' ')[0]}}</span>\r\n\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"settings\" class=\"text-left\"\r\n                             style=\"right: 0!important; left: unset;\">\r\n                            <a class=\"dropdown-item\" (click)=\"perfilUsuario()\">\r\n                                <!-- <i class=\"fa fa-key mr-1\"></i>-->\r\n                                <span>Editar Perfil</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"trocarSenha()\">\r\n                                <!-- <i class=\"fa fa-key mr-1\"></i>-->\r\n                                <span>Trocar senha</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"signOut()\">\r\n                                <!--<i class=\"ft-power mr-1\"></i>-->\r\n                                <span>Sair</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <!--<li class=\"nav-item d-none d-lg-block\">\r\n                        <a class=\"nav-link position-relative customizer-toggle\"\r\n                           id=\"customizer-toggle-icon\">\r\n                            <i class=\"ft-aperture font-medium-1\" style=\"color: whitesmoke\"></i>\r\n                        </a>\r\n                    </li>-->\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/template/sidebar/sidebar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/template/sidebar/sidebar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix d-block\">\r\n        <a [routerLink]=\"['/']\"  id=\"sidebarLogo\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"assets/img/assina.net-logobranco.png\" />\r\n            </div>\r\n\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" style=\"display:none !important;\" id=\"sidebarToggle\"\r\n           href=\"javascript:;\">\r\n            <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" style=\"display:none !important;\" id=\"sidebarClose\"\r\n           href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\">\r\n            <!-- First level menu -->\r\n            <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class, menuItem.open ? 'open' : '']\"\n                [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <!-- <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\"> -->\n                <a href=\"#\" (click)=\"toggleMenu($event, menuItem, menuItems)\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\" style=\"text-align: center;\">\n                    <!--<i [ngClass]=\"[menuItem.icon]\" style=\"color: skyblue; font-size: 16px;\"></i>-->\r\n                    <span class=\"menu-title primary\">{{menuItem.title}}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title}}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\"\n                        [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\"\n                        [ngClass]=\"[menuSubItem.class, menuSubItem.open ? 'open' : '']\">\n\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\"\n                           (click)=\"menuSubItem.submenu.length > 0 ? toggleMenu($event, menuSubItem, menuItem.submenu) : null\"\n                           *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\" style=\"text-align: center;\">\n                            <!-- <i [ngClass]=\"[menuSubItem.icon]\"></i>-->\r\n                            <span class=\"menu-subtitle\">{{menuSubItem.title}}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title}}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\"\r\n                                [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a [routerLink]=\"[menuSubsubItem.path]\"\r\n                                   *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title}}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title}}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \"\r\n                                              [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Termos > Aceite > Visualizar'\" >\r\n            <label class=\"control-label\">{{termo.nome}}</label>       \r\n            <div>                \r\n                <div class=\"div-documento\" >\r\n                    <pdf-viewer src=\"{{termo.documento}}\" original-size=\"true\" show-all=\"false\" [autoresize]=\"true\"\r\n                        [fit-to-page]='true' [render-text]='false'></pdf-viewer>\r\n                </div>\r\n            </div>\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"off\" class=\"form form-horizontal\" #form=\"ngForm\" novalidate>\r\n    <div class=\"form-body\">\r\n        <app-modal-simples [titulo]=\"'Termos > Aceite'\" [podeFechar]=\"false\">\r\n\r\n            <!-- <mat-tab-group dynamicHeight=\"true\" disableRipple=\"true\">\r\n                <mat-tab *ngFor=\"let termo of termos\">\r\n                    <ng-template mat-tab-label>\r\n                        <i *ngIf=\"termo.aceite\" class=\"ft-check-circle font-medium-3 iconLabel\" style=\"color: green\"></i>\r\n                        <i *ngIf=\"!termo.aceite\" class=\"ft-minus-circle font-medium-3 iconLabel\" style=\"color: red\"></i>\r\n                        <span> {{termo.nome}}</span>\r\n                    </ng-template>\r\n\r\n                    <div style=\"height:300px\">\r\n                        <pdf-viewer src=\"{{termo.documento}}\" original-size=\"true\" show-all=\"false\" [autoresize]=\"true\"\r\n                            [fit-to-page]='true' [render-text]='false'></pdf-viewer>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <ui-switch [(ngModel)]=\"termo.aceite\" name=\"inputStatus\" id=\"inputStatus\" #status=\"ngModel\"\r\n                            [ngStyle]=\"classUpperCase()\" class=\"switch100\" required checkedLabel=\"Aceito\"\r\n                            uncheckedLabel=\"Não Aceito\" defaultBgColor=\"red\">\r\n                        </ui-switch>\r\n                        <small class=\"form-text text-muted danger\"\r\n                            *ngIf=\"status.invalid && (status.dirty || status.touched)\">Escolha o Status\r\n                        </small>\r\n                    </div>\r\n                </mat-tab>\r\n            </mat-tab-group> -->\r\n\r\n            <label>{{termosPendentes}}</label>\r\n\r\n\r\n\r\n            <table class=\"table mb-0\">\r\n                <tbody [ngStyle]=\"classUpperCase()\">\r\n                <tr *ngFor=\"let termo of termos; let i = index\">\r\n                    <td style=\"padding: 0\">\r\n                        <a class=\"btn btn-info btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Exibir Documento\"\r\n                           (click)=\"exibirTermo(termo)\">\r\n                            <i class=\"fa fa-eye font-medium-4\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td> <i *ngIf=\"termo.aceite\" class=\"ft-check-circle font-medium-3 iconLabel\"\r\n                            style=\"color: green\"></i>\r\n                        <i *ngIf=\"!termo.aceite\" class=\"ft-minus-circle font-medium-3 iconLabel\"\r\n                           style=\"color: red\"></i>\r\n                        <span> {{termo.nome}}</span></td>\r\n                    <td>\r\n                        <div class=\"col-md-10\">\r\n                            <ui-switch [(ngModel)]=\"termo.aceite\" name=\"inputStatus\" id=\"inputStatus\"\r\n                                       #status=\"ngModel\" [ngStyle]=\"classUpperCase()\" class=\"switch100\" required\r\n                                       checkedLabel=\"Aceito\" uncheckedLabel=\"Não Aceito\" defaultBgColor=\"red\">\r\n                            </ui-switch>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n                <tr *ngIf=\"!termos || termos.length==0\">\r\n                    <td [colSpan]=\"colspan\">Nenhum registro encontrado</td>\r\n                </tr>\r\n            </table>\r\n\r\n\r\n            <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\r\n                {{ message.text }}\r\n            </ngb-alert>\r\n\r\n\r\n            <div botoes>\r\n                <button type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"fecharTermosAceitos()\"> Continuar\r\n                </button>\r\n            </div>\r\n\r\n        </app-modal-simples>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/util/message/confirm/confirm-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/util/message/confirm/confirm-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"display:block!important\">\r\n    <div class=\"modal-dialog custom-alert\" style=\"z-index:9000;\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div *ngIf=\"message?.type == 'confirm'\" class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"text-center confirm-message\">{{message.text}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"confirm-button\">\r\n\r\n                            <a (click)=\"message.siFn()\" class=\"col-md-4\">\r\n                                <button class=\"btn btn-yes\">Sim</button>\r\n                            </a>\r\n\r\n\r\n                            <a (click)=\"message.noFn()\" class=\"col-md-4\">\r\n                                <button class=\"btn btn-no\">Não</button>\r\n                            </a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/util/sort/sortable-column.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/util/sort/sortable-column.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-chevron-up\" *ngIf=\"sortDirection === 'ASC'\"></i>\r\n<i class=\"fa fa-chevron-down\" *ngIf=\"sortDirection === 'DESC'\"></i>\r\n<ng-content></ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/validar/documento/validarAssinatura.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/validar/documento/validarAssinatura.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header col-md-12\" style=\"margin-bottom: 15px; background: #0b2238;height: 60px;\">\r\n    <div class=\" row\">\r\n        <div class=\"logo clearfix d-block col-sm-12 col-md-12 col-lg-2 col-xl-2\">\r\n            <div style=\"margin-left: 10px; margin-top: 5px;\">\r\n                <img class=\"logo-img\" src=\"assets/img/assina.net-logobranco.png\" />\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"text-center col-md-6 content-header\" style=\"color: white;\">\r\n            <div>Validar Documento</div>\r\n        </div> -->\r\n        <div class=\"text-center col-sm-12 col-md-12 col-lg-10 col-xl-10 content-header\">\r\n            <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"validarDocumento()\" autocomplete=\"off\"\r\n                style=\"position: absolute; top: 0px; left: 0px; width: 100%;z-index: 100; \">\r\n                <div class=\"form-body\">\r\n                    <div id=\"divForm\" class=\"row\">\r\n                        <div class=\"col-sm-12 col-lg-3 col-xl-2\"></div>\r\n                        <div class=\"col-sm-12 col-lg-5 col-xl-4\">\r\n                            <div class=\"col-12 labelInfo\">Digite o código do documento a ser validado</div>\r\n\r\n                            <input type=\"text\" [(ngModel)]=\"numeroDocumento\" name=\"identificador\" class=\"form-control\"\r\n                                id=\"inputIdentificador\" #identificador=\"ngModel\" placeholder=\"Informe\" upperCase\r\n                                minlength=\"3\" maxlength=\"255\" required appAutofocus>\r\n\r\n                            <small class=\"form-text text-muted danger\"\r\n                                *ngIf=\"identificador.errors?.required && (identificador.dirty || identificador.touched)\">Informe\r\n                                o Identificador\r\n                            </small>\r\n\r\n                            <small class=\"form-text text-muted danger\"\r\n                                *ngIf=\"identificador.errors?.minlength && (identificador.dirty || identificador.touched)\">Informe\r\n                                no mínimo 3 carateres\r\n                            </small>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 col-lg-2 col-xl-2\">\r\n                            <button class=\"btn btn-lg btn-raised btn-primary btn-verificar\" type=\"button\"\r\n                                (click)=\"validarDocumento()\">\r\n                                Validar documento\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-3\" style=\"color: white;\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<img src=\"../../../assets/img/tela-inicial/tela-base.png\" class=\"w-100 desktop blur3\" />\r\n<img src=\"../../../assets/img/tela-inicial/tela-base-mobile.png\" class=\"w-100 mt-3 mobile blur3\" />\r\n\r\n<div style=\"position: absolute; top: 0px; left: 0px; width: 100%; \">\r\n    <div class=\"form-body\" style=\"height:80vh;position: relative; width: 60vw; margin-left: auto; margin-right: auto;\">\r\n\r\n            <ng2-pdfjs-viewer #pdfViewer viewerId=\"inline\" [print]=\"true\"  [fullScreen]=\"true\" [diagnosticLogs]=false [openFile]=\"false\" [find]=\"false\"></ng2-pdfjs-viewer>\r\n\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/assinar/assinar.module": [
		"./src/app/components/assinar/assinar.module.ts",
		"default~components-assinar-assinar-module~components-cadastros-cadastros-module",
		"components-assinar-assinar-module"
	],
	"./components/cadastros/cadastros.module": [
		"./src/app/components/cadastros/cadastros.module.ts",
		"default~components-assinar-assinar-module~components-cadastros-cadastros-module",
		"components-cadastros-cadastros-module"
	],
	"./components/config/config.module": [
		"./src/app/components/config/config.module.ts",
		"components-config-config-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_security_changes_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security/changes.guard */ "./src/app/components/security/changes.guard.ts");
/* harmony import */ var _components_template_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/template/layouts/content/content-layout.component */ "./src/app/components/template/layouts/content/content-layout.component.ts");
/* harmony import */ var _components_template_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/template/layouts/full/full-layout.component */ "./src/app/components/template/layouts/full/full-layout.component.ts");
/* harmony import */ var _components_template_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/template/routes/content-layout.routes */ "./src/app/components/template/routes/content-layout.routes.ts");
/* harmony import */ var _components_template_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/template/routes/full-layout.routes */ "./src/app/components/template/routes/full-layout.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    { path: '', component: _components_template_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullLayoutComponent"], data: { title: 'Full Views' }, children: _components_template_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_7__["FULL_ROUTES"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], canDeactivate: [_components_security_changes_guard__WEBPACK_IMPORTED_MODULE_3__["PendingChangesGuard"]] },
    { path: '', component: _components_template_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'Content Views' }, children: _components_template_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"] },
    { path: '**', redirectTo: '404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'top', enableTracing: false, useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .section {\r\n  min-height: 89.3%;\r\n} */\r\n\r\n/*:host ::ng-deep .table .thead-custom th {\r\n background-color: #ffffff !important;\r\n}*/\r\n\r\n:host ::ng-deep .font-family-rubik {\r\n   font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\r\n}\r\n\r\n.sw-spiner ::ng-deep .black-overlay {\r\n   position: fixed;\r\n}\r\n\r\n/*.sw-spiner ::ng-deep .loading-text {\r\n   position: fixed;\r\n}*/\r\n\r\n:host ::ng-deep .progress {\r\n   height: 1.5rem;\r\n}\r\n\r\n:host ::ng-deep .ng-select-container {\r\n   border-color: inherit;\r\n}\r\n\r\n:host ::ng-deep .linhaSelecionada {\r\n   background-color: #cde;\r\n}\r\n\r\n:host ::ng-deep .linhaSelecionada2 {\r\n   background-color: silver;\r\n}\r\n\r\n:host ::ng-deep .content-header {\r\n   margin-top: 0.5rem;\r\n\r\n}\r\n\r\n:host ::ng-deep .content-sub-header {\r\n   margin-bottom: 0.25rem;\r\n}\r\n\r\n:host ::ng-deep .content-form .card {\r\n   margin: 0;\r\n}\r\n\r\n:host ::ng-deep .content-form .card .card-block {\n   padding: 0.5rem;\n}\r\n\r\n:host ::ng-deep .crud-page {\n   height: calc(100vh - 112px);\n   min-height: 0;\n   overflow: hidden;\n}\r\n\r\n:host ::ng-deep .wrapper {\n   height: 100vh;\n   overflow: hidden;\n}\r\n\r\n:host ::ng-deep .main-panel,\n:host ::ng-deep .main-content,\n:host ::ng-deep .content-wrapper,\n:host ::ng-deep .container-fluid {\n   max-height: none !important;\n   overflow-y: hidden !important;\n}\r\n\r\n:host ::ng-deep .main-panel {\n   height: 100vh !important;\n}\r\n\r\n:host ::ng-deep .main-content {\n   height: calc(100vh - 112px) !important;\n   min-height: 0 !important;\n}\r\n\r\n:host ::ng-deep .crud-content,\n:host ::ng-deep .crud-content .content-body,\n:host ::ng-deep .crud-content .card,\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block {\n   min-height: 0;\n   overflow-y: visible !important;\n}\r\n\r\n:host ::ng-deep .crud-content .card {\n   height: calc(100vh - 150px);\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block,\n:host ::ng-deep .crud-content form.form {\n   display: -webkit-box;\n   display: flex;\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n           flex-direction: column;\n}\r\n\r\n:host ::ng-deep .crud-content .card-body,\n:host ::ng-deep .crud-content .card-block {\n   height: calc(100vh - 150px);\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content form.form {\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   min-height: 0;\n}\r\n\r\n:host ::ng-deep .crud-content .card-block > form.form > .form-body {\n   display: -webkit-box;\n   display: flex;\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   -webkit-box-orient: vertical;\n   -webkit-box-direction: normal;\n           flex-direction: column;\n   min-height: 0;\n   padding-bottom: 0.25rem;\n   overflow-x: hidden;\n   overflow-y: visible;\n}\r\n\r\n:host ::ng-deep .crud-content .box-footer {\n   -webkit-box-flex: 0;\n           flex: 0 0 auto;\n}\r\n\r\n:host ::ng-deep .content-form .form-actions {\n   margin-top: 10px;\n   padding: 20px 0 0;\n}\r\n\r\n:host ::ng-deep .page-link {\r\n   line-height: 1rem;\r\n}\r\n\r\n:host ::ng-deep .btn-orange {\r\n   background-color: #FDD835;\r\n   color: white;\r\n}\r\n\r\n:host ::ng-deep th[sortable-column] {\r\n   cursor: pointer;\r\n}\r\n\r\n:host ::ng-deep .switch100>span.switch {\r\n   width: 100%;\r\n}\r\n\r\n:host ::ng-deep.switch.checked {\r\n   background: #34b563!important;}\r\n\r\n:host ::ng-deep.switch.switch-medium {\r\n   background: #bf2025;\r\n   color:#fff;\r\n   height: 20px;\r\n   border-radius: 20px;\r\n}\r\n\r\n:host ::ng-deep.switch.switch-medium small {\r\n   width: 20px;\r\n   height: 20px;\r\n   }\r\n\r\n:host ::ng-deep.switch.switch-medium > .switch-pane > span {\r\n      font-size: 14px;\r\n      line-height: 20px;}\r\n\r\n:host ::ng-deep .control-label {\r\n   margin-top: .5rem;\r\n   margin-bottom: 0;\r\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-x {\r\n   display: block;\r\n   max-width: auto;\r\n   margin: 0 auto;\r\n   overflow-x: auto;\r\n   -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n:host ::ng-deep .table-fixed {\r\n   table-layout: fixed;\r\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-y {\n   -webkit-box-flex: 1;\n           flex: 1 1 auto;\n   max-height: none;\n   min-height: 280px;\n   overflow-y: auto;\n}\r\n\r\n:host ::ng-deep .crud-content .table-wrapper-scroll-y {\n   max-height: calc(100vh - 260px);\n   min-height: 280px;\n}\r\n\r\n:host ::ng-deep .crud-actions {\n   -webkit-box-align: center;\n           align-items: center;\n   background: #f7f7f7;\n   border-top: 1px solid #d9d9d9;\n   bottom: 22px;\n   box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);\n   display: -webkit-box;\n   display: flex;\n   flex-wrap: wrap;\n   gap: 0.35rem;\n   -webkit-box-pack: end;\n           justify-content: flex-end;\n   margin: 0 -0.5rem -0.5rem;\n   padding: 0.25rem 0.5rem;\n   position: -webkit-sticky;\n   position: sticky;\n   z-index: 20;\n}\r\n\r\n:host ::ng-deep .crud-content form.form > .crud-actions,\n:host ::ng-deep .crud-content form.form > app-botoes-lista,\n:host ::ng-deep .crud-content form.form > app-botoes-cadastro {\n   -webkit-box-flex: 0;\n           flex: 0 0 auto;\n}\r\n\r\n:host ::ng-deep .row.crud-actions {\n   margin-left: -0.5rem;\n   margin-right: -0.5rem;\n}\r\n\r\n:host ::ng-deep .row.crud-actions > [class*=\"col-\"],\n:host ::ng-deep .crud-actions > .col-md-12 {\n   max-width: 100%;\n   padding-left: 0;\n   padding-right: 0;\n   width: 100%;\n}\r\n\r\n:host ::ng-deep .crud-actions.modal-footer {\n   border-left: 0;\n   border-right: 0;\n   border-bottom: 0;\n}\r\n\r\n:host ::ng-deep app-botoes-cadastro .crud-actions {\n   bottom: auto;\n   margin-top: 0.5rem;\n   margin-bottom: 0;\n   position: static;\n}\r\n\r\n:host ::ng-deep .crud-content app-botoes-cadastro {\n   display: block;\n   padding-bottom: 1.75rem;\n}\r\n\r\n:host ::ng-deep .crud-actions .btn,\n:host ::ng-deep .crud-actions button {\n   margin-bottom: 0.1rem;\n   margin-top: 0.1rem;\n   padding-bottom: 0.55rem;\n   padding-top: 0.55rem;\n   white-space: normal;\n}\r\n\r\n:host ::ng-deep .crud-actions > span,\n:host ::ng-deep .crud-actions > div {\n   -webkit-box-align: center;\n           align-items: center;\n   display: -webkit-box !important;\n   display: flex !important;\n   flex-wrap: wrap;\n   gap: 0.35rem;\n   -webkit-box-pack: end;\n           justify-content: flex-end;\n}\r\n\r\n:host ::ng-deep .crud-actions .crud-actions {\n   background: transparent;\n   border-top: 0;\n   box-shadow: none;\n   margin: 0;\n   padding: 0;\n   position: static;\n}\r\n\r\n:host ::ng-deep .table-wrapper-scroll-yy {\r\n   max-height: 138px;\r\n   overflow-y: overlay;\r\n}\r\n\r\n:host ::ng-deep table th {\r\n   border:none;\r\n   color:#595959;\r\n   font-weight: normal;\r\n   font-size: 1.1rem;\r\n   position: -webkit-sticky;\r\n   position: sticky;\r\n   text-align:center;\r\n   background: #f7f7f7;\r\n   border-bottom: 1px solid #a6a9ae;\r\n   padding: 1.2rem 0.45rem;\r\n   border-collapse: collapse;\r\n   top: 0;\r\n}\r\n\r\n:host ::ng-deep .btn.btn-file {\r\n   position: relative;\r\n   overflow: hidden;\r\n}\r\n\r\n:host ::ng-deep .btn.btn-file>input[type='file'] {\r\n   position: absolute;\r\n   top: 0;\r\n   right: 0;\r\n   min-width: 100%;\r\n   min-height: 100%;\r\n   font-size: 100px;\r\n   text-align: right;\r\n   opacity: 0;\r\n   filter: alpha(opacity=0);\r\n   outline: none;\r\n   background: white;\r\n   cursor: inherit;\r\n   display: block;\r\n}\r\n\r\n:host ::ng-deep .table td {\n   border-top:none;\n   padding: 0.32rem 0.45rem;\n   vertical-align: middle;\n}\r\n\r\n:host ::ng-deep app-complete-tab-form .table td {\n   padding: 0.4rem;\r\n   vertical-align: middle;\n}\r\n\r\n:host ::ng-deep .table tbody tr:nth-child(even):not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #f1fbf5;\n}\r\n\r\n:host ::ng-deep .table tbody tr:nth-child(odd):not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #ffffff;\n}\r\n\r\n:host ::ng-deep .table tbody tr:hover:not(.linhaSelecionada):not(.linhaSelecionada2) {\n   background-color: #e7f7ee;\n}\r\n\r\n:host ::ng-deep .table tbody td span {\r\n   white-space: nowrap;\r\n   overflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: block;\r\n}\r\n\r\n:host ::ng-deep .table thead {\r\n   background:#f7f7f7;\r\n }\r\n\r\n:host ::ng-deep .card-fullscreen {\r\n   padding: 20px 0;\r\n  /* background-color: #f5f7fa;*/\r\n   display: block;\r\n   z-index: 9999;\r\n   position: fixed;\r\n   width: 100% !important;\r\n   height: 100% !important;\r\n   top: 0;\r\n   right: 0;\r\n   left: 0;\r\n   bottom: 0;\r\n   overflow: auto;\r\n}\r\n\r\n:host ::ng-deep .label-radio-check {\r\n   font-size: 1rem;\r\n   font-weight: normal;\r\n   margin: 6px 0;\r\n   text-transform: none;\r\n}\r\n\r\n:host ::ng-deep button[disabled] {\r\n   cursor: not-allowed;\r\n}\r\n\r\n:host ::ng-deep .readonlyDiv {\r\n   pointer-events: none;\r\n   opacity: 0.6;\r\n}\r\n\r\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\r\n   max-height: 32px;\r\n   min-height: 32px;\r\n}\r\n\r\n:host ::ng-deep .table-border-style {\r\n   border-bottom: #a6a9ae 1px solid;\r\n   border-radius: 0.25rem;\r\n   border-collapse: collapse;\r\n}\r\n\r\n::ng-deep .mat-tab-body-content {\n  overflow: visible !important;\n}\r\n\r\n@media (max-width: 767px) {\n   :host ::ng-deep .content-header {\n      font-size: 1.1rem;\n      padding-left: 0.5rem !important;\n      padding-right: 0.5rem !important;\n   }\n\n   :host ::ng-deep .crud-content .card {\n      min-height: calc(100vh - 125px);\n   }\n\n   :host ::ng-deep .crud-content .table-wrapper-scroll-y {\n      max-height: none;\n      min-height: 260px;\n   }\n\n   :host ::ng-deep .content-form .card .card-block {\n      padding: 0.35rem;\n   }\n\n   :host ::ng-deep .table-wrapper-scroll-x {\n      width: 100%;\n   }\n\n   :host ::ng-deep .table th,\n   :host ::ng-deep .table td {\n      font-size: 0.85rem;\n      padding: 0.35rem;\n   }\n\n   :host ::ng-deep .table th {\n      padding-top: 0.6rem;\n      padding-bottom: 0.6rem;\n   }\n\n   :host ::ng-deep .crud-actions {\n      -webkit-box-pack: stretch;\n              justify-content: stretch;\n      margin-left: -0.35rem;\n      margin-right: -0.35rem;\n      padding: 0.55rem 0.35rem;\n   }\n\n   :host ::ng-deep .crud-actions .btn,\n   :host ::ng-deep .crud-actions button {\n      -webkit-box-flex: 1;\n              flex: 1 1 130px;\n      font-size: 0.9rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n   }\n\n   :host ::ng-deep .crud-actions > span,\n   :host ::ng-deep .crud-actions > div {\n      -webkit-box-flex: 1;\n              flex: 1 1 100%;\n      -webkit-box-pack: stretch;\n              justify-content: stretch;\n   }\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7O0VBRUU7O0FBRUY7R0FDRywrRUFBK0U7QUFDbEY7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0dBQ0csY0FBYztBQUNqQjs7QUFFQTtHQUNHLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLGtCQUFrQjs7QUFFckI7O0FBRUE7R0FDRyxzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxTQUFTO0FBQ1o7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csMkJBQTJCO0dBQzNCLGFBQWE7R0FDYixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0FBQ25COztBQUVBOzs7O0dBSUcsMkJBQTJCO0dBQzNCLDZCQUE2QjtBQUNoQzs7QUFFQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLHNDQUFzQztHQUN0Qyx3QkFBd0I7QUFDM0I7O0FBRUE7Ozs7O0dBS0csYUFBYTtHQUNiLDhCQUE4QjtBQUNqQzs7QUFFQTtHQUNHLDJCQUEyQjtHQUMzQixhQUFhO0FBQ2hCOztBQUVBOzs7R0FHRyxvQkFBYTtHQUFiLGFBQWE7R0FDYiw0QkFBc0I7R0FBdEIsNkJBQXNCO1dBQXRCLHNCQUFzQjtBQUN6Qjs7QUFFQTs7R0FFRywyQkFBMkI7R0FDM0IsYUFBYTtBQUNoQjs7QUFFQTtHQUNHLG1CQUFjO1dBQWQsY0FBYztHQUNkLGFBQWE7QUFDaEI7O0FBRUE7R0FDRyxvQkFBYTtHQUFiLGFBQWE7R0FDYixtQkFBYztXQUFkLGNBQWM7R0FDZCw0QkFBc0I7R0FBdEIsNkJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxtQkFBYztXQUFkLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxXQUFXO0FBQ2Q7O0FBQ0E7R0FDRyw2QkFBNkIsQ0FBQzs7QUFFakM7R0FDRyxtQkFBbUI7R0FDbkIsVUFBVTtHQUNWLFlBQVk7R0FDWixtQkFBbUI7QUFDdEI7O0FBQ0E7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaOztBQUVBO01BQ0csZUFBZTtNQUNmLGlCQUFpQixDQUFDOztBQUV4QjtHQUNHLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsZUFBZTtHQUNmLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsNENBQTRDO0FBQy9DOztBQUVBO0dBQ0csbUJBQW1CO0FBQ3RCOztBQUVBO0dBQ0csbUJBQWM7V0FBZCxjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRywrQkFBK0I7R0FDL0IsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0cseUJBQW1CO1dBQW5CLG1CQUFtQjtHQUNuQixtQkFBbUI7R0FDbkIsNkJBQTZCO0dBQzdCLFlBQVk7R0FDWiwyQ0FBMkM7R0FDM0Msb0JBQWE7R0FBYixhQUFhO0dBQ2IsZUFBZTtHQUNmLFlBQVk7R0FDWixxQkFBeUI7V0FBekIseUJBQXlCO0dBQ3pCLHlCQUF5QjtHQUN6Qix1QkFBdUI7R0FDdkIsd0JBQWdCO0dBQWhCLGdCQUFnQjtHQUNoQixXQUFXO0FBQ2Q7O0FBRUE7OztHQUdHLG1CQUFjO1dBQWQsY0FBYztBQUNqQjs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixxQkFBcUI7QUFDeEI7O0FBRUE7O0dBRUcsZUFBZTtHQUNmLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsV0FBVztBQUNkOztBQUVBO0dBQ0csY0FBYztHQUNkLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGdCQUFnQjtHQUNoQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsdUJBQXVCO0FBQzFCOztBQUVBOztHQUVHLHFCQUFxQjtHQUNyQixrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLG9CQUFvQjtHQUNwQixtQkFBbUI7QUFDdEI7O0FBRUE7O0dBRUcseUJBQW1CO1dBQW5CLG1CQUFtQjtHQUNuQiwrQkFBd0I7R0FBeEIsd0JBQXdCO0dBQ3hCLGVBQWU7R0FDZixZQUFZO0dBQ1oscUJBQXlCO1dBQXpCLHlCQUF5QjtBQUM1Qjs7QUFFQTtHQUNHLHVCQUF1QjtHQUN2QixhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLFNBQVM7R0FDVCxVQUFVO0dBQ1YsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQix3QkFBZ0I7R0FBaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixtQkFBbUI7R0FDbkIsZ0NBQWdDO0dBQ2hDLHVCQUF1QjtHQUN2Qix5QkFBeUI7R0FDekIsTUFBTTtBQUNUOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixNQUFNO0dBQ04sUUFBUTtHQUNSLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixVQUFVO0dBQ1Ysd0JBQXdCO0dBQ3hCLGFBQWE7R0FDYixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxlQUFlO0dBQ2Ysd0JBQXdCO0dBQ3hCLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLGVBQWU7R0FDZixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyx5QkFBeUI7QUFDNUI7O0FBRUE7R0FDRyxtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLHVCQUF1QjtHQUN2QixjQUFjO0FBQ2pCOztBQUVBO0dBQ0csa0JBQWtCO0NBQ3BCOztBQUVEO0dBQ0csZUFBZTtFQUNoQiw4QkFBOEI7R0FDN0IsY0FBYztHQUNkLGFBQWE7R0FDYixlQUFlO0dBQ2Ysc0JBQXNCO0dBQ3RCLHVCQUF1QjtHQUN2QixNQUFNO0dBQ04sUUFBUTtHQUNSLE9BQU87R0FDUCxTQUFTO0dBQ1QsY0FBYztBQUNqQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLG9CQUFvQjtBQUN2Qjs7QUFFQTtHQUNHLG1CQUFtQjtBQUN0Qjs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixZQUFZO0FBQ2Y7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csZ0NBQWdDO0dBQ2hDLHNCQUFzQjtHQUN0Qix5QkFBeUI7QUFDNUI7O0FBR0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7R0FDRztNQUNHLGlCQUFpQjtNQUNqQiwrQkFBK0I7TUFDL0IsZ0NBQWdDO0dBQ25DOztHQUVBO01BQ0csK0JBQStCO0dBQ2xDOztHQUVBO01BQ0csZ0JBQWdCO01BQ2hCLGlCQUFpQjtHQUNwQjs7R0FFQTtNQUNHLGdCQUFnQjtHQUNuQjs7R0FFQTtNQUNHLFdBQVc7R0FDZDs7R0FFQTs7TUFFRyxrQkFBa0I7TUFDbEIsZ0JBQWdCO0dBQ25COztHQUVBO01BQ0csbUJBQW1CO01BQ25CLHNCQUFzQjtHQUN6Qjs7R0FFQTtNQUNHLHlCQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0Qix3QkFBd0I7R0FDM0I7O0dBRUE7O01BRUcsbUJBQWU7Y0FBZixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixxQkFBcUI7R0FDeEI7O0dBRUE7O01BRUcsbUJBQWM7Y0FBZCxjQUFjO01BQ2QseUJBQXdCO2NBQXhCLHdCQUF3QjtHQUMzQjtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuc2VjdGlvbiB7XHJcbiAgbWluLWhlaWdodDogODkuMyU7XHJcbn0gKi9cclxuXHJcbi8qOmhvc3QgOjpuZy1kZWVwIC50YWJsZSAudGhlYWQtY3VzdG9tIHRoIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufSovXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmZvbnQtZmFtaWx5LXJ1YmlrIHtcclxuICAgZm9udC1mYW1pbHk6ICdSdWJpaycsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN3LXNwaW5lciA6Om5nLWRlZXAgLmJsYWNrLW92ZXJsYXkge1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi8qLnN3LXNwaW5lciA6Om5nLWRlZXAgLmxvYWRpbmctdGV4dCB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSovXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnByb2dyZXNzIHtcclxuICAgaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhMiB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWhlYWRlciB7XHJcbiAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1zdWItaGVhZGVyIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWZvcm0gLmNhcmQge1xyXG4gICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1mb3JtIC5jYXJkIC5jYXJkLWJsb2NrIHtcbiAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLXBhZ2Uge1xuICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICAgbWluLWhlaWdodDogMDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpob3N0IDo6bmctZGVlcCAud3JhcHBlciB7XG4gICBoZWlnaHQ6IDEwMHZoO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYWluLXBhbmVsLFxuOmhvc3QgOjpuZy1kZWVwIC5tYWluLWNvbnRlbnQsXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtd3JhcHBlcixcbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyLWZsdWlkIHtcbiAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1haW4tcGFuZWwge1xuICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1haW4tY29udGVudCB7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCkgIWltcG9ydGFudDtcbiAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQsXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY29udGVudC1ib2R5LFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQsXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ib2R5LFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQtYmxvY2sge1xuICAgbWluLWhlaWdodDogMDtcbiAgIG92ZXJmbG93LXk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQge1xuICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICAgbWluLWhlaWdodDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQtYm9keSxcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5jYXJkLWJsb2NrLFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgZm9ybS5mb3JtIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuY2FyZC1ib2R5LFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQtYmxvY2sge1xuICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICAgbWluLWhlaWdodDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgZm9ybS5mb3JtIHtcbiAgIGZsZXg6IDEgMSBhdXRvO1xuICAgbWluLWhlaWdodDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgLmNhcmQtYmxvY2sgPiBmb3JtLmZvcm0gPiAuZm9ybS1ib2R5IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDEgYXV0bztcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBtaW4taGVpZ2h0OiAwO1xuICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICBvdmVyZmxvdy15OiB2aXNpYmxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCAuYm94LWZvb3RlciB7XG4gICBmbGV4OiAwIDAgYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWZvcm0gLmZvcm0tYWN0aW9ucyB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wYWdlLWxpbmsge1xyXG4gICBsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3JhbmdlIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERDgzNTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgdGhbc29ydGFibGUtY29sdW1uXSB7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAuc3dpdGNoLmNoZWNrZWQge1xyXG4gICBiYWNrZ3JvdW5kOiAjMzRiNTYzIWltcG9ydGFudDt9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAuc3dpdGNoLnN3aXRjaC1tZWRpdW0ge1xyXG4gICBiYWNrZ3JvdW5kOiAjYmYyMDI1O1xyXG4gICBjb2xvcjojZmZmO1xyXG4gICBoZWlnaHQ6IDIwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwLnN3aXRjaC5zd2l0Y2gtbWVkaXVtIHNtYWxsIHtcclxuICAgd2lkdGg6IDIwcHg7XHJcbiAgIGhlaWdodDogMjBweDtcclxuICAgfVxyXG5cclxuICAgOmhvc3QgOjpuZy1kZWVwLnN3aXRjaC5zd2l0Y2gtbWVkaXVtID4gLnN3aXRjaC1wYW5lID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7fVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gICBmbGV4OiAxIDEgYXV0bztcbiAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICBtaW4taGVpZ2h0OiAyODBweDtcbiAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNjBweCk7XG4gICBtaW4taGVpZ2h0OiAyODBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMge1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgIGJvdHRvbTogMjJweDtcbiAgIGJveC1zaGFkb3c6IDAgLTRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgZ2FwOiAwLjM1cmVtO1xuICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgIG1hcmdpbjogMCAtMC41cmVtIC0wLjVyZW07XG4gICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICB6LWluZGV4OiAyMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgZm9ybS5mb3JtID4gLmNydWQtYWN0aW9ucyxcbjpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IGZvcm0uZm9ybSA+IGFwcC1ib3RvZXMtbGlzdGEsXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtY29udGVudCBmb3JtLmZvcm0gPiBhcHAtYm90b2VzLWNhZGFzdHJvIHtcbiAgIGZsZXg6IDAgMCBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJvdy5jcnVkLWFjdGlvbnMge1xuICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAucm93LmNydWQtYWN0aW9ucyA+IFtjbGFzcyo9XCJjb2wtXCJdLFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgPiAuY29sLW1kLTEyIHtcbiAgIG1heC13aWR0aDogMTAwJTtcbiAgIHBhZGRpbmctbGVmdDogMDtcbiAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMubW9kYWwtZm9vdGVyIHtcbiAgIGJvcmRlci1sZWZ0OiAwO1xuICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGFwcC1ib3RvZXMtY2FkYXN0cm8gLmNydWQtYWN0aW9ucyB7XG4gICBib3R0b206IGF1dG87XG4gICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICBtYXJnaW4tYm90dG9tOiAwO1xuICAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWNvbnRlbnQgYXBwLWJvdG9lcy1jYWRhc3RybyB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyAuYnRuLFxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgYnV0dG9uIHtcbiAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgIG1hcmdpbi10b3A6IDAuMXJlbTtcbiAgIHBhZGRpbmctYm90dG9tOiAwLjU1cmVtO1xuICAgcGFkZGluZy10b3A6IDAuNTVyZW07XG4gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyA+IHNwYW4sXG46aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyA+IGRpdiB7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgZ2FwOiAwLjM1cmVtO1xuICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgLmNydWQtYWN0aW9ucyB7XG4gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgIGJvcmRlci10b3A6IDA7XG4gICBib3gtc2hhZG93OiBub25lO1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiAgIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15eSB7XHJcbiAgIG1heC1oZWlnaHQ6IDEzOHB4O1xyXG4gICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgdGFibGUgdGgge1xyXG4gICBib3JkZXI6bm9uZTtcclxuICAgY29sb3I6IzU5NTk1OTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E2YTlhZTtcclxuICAgcGFkZGluZzogMS4ycmVtIDAuNDVyZW07XHJcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgIHRvcDogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4uYnRuLWZpbGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLmJ0bi1maWxlPmlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAwO1xyXG4gICByaWdodDogMDtcclxuICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICBmb250LXNpemU6IDEwMHB4O1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgb3BhY2l0eTogMDtcclxuICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0ZCB7XG4gICBib3JkZXItdG9wOm5vbmU7XG4gICBwYWRkaW5nOiAwLjMycmVtIDAuNDVyZW07XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLWNvbXBsZXRlLXRhYi1mb3JtIC50YWJsZSB0ZCB7XG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pOm5vdCgubGluaGFTZWxlY2lvbmFkYSk6bm90KC5saW5oYVNlbGVjaW9uYWRhMikge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZmJmNTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQob2RkKTpub3QoLmxpbmhhU2VsZWNpb25hZGEpOm5vdCgubGluaGFTZWxlY2lvbmFkYTIpIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGJvZHkgdHI6aG92ZXI6bm90KC5saW5oYVNlbGVjaW9uYWRhKTpub3QoLmxpbmhhU2VsZWNpb25hZGEyKSB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmN2VlO1xufVxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGJvZHkgdGQgc3BhbiB7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0aGVhZCB7XHJcbiAgIGJhY2tncm91bmQ6I2Y3ZjdmNztcclxuIH1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2FyZC1mdWxsc2NyZWVuIHtcclxuICAgcGFkZGluZzogMjBweCAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7Ki9cclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIHotaW5kZXg6IDk5OTk7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIHRvcDogMDtcclxuICAgcmlnaHQ6IDA7XHJcbiAgIGxlZnQ6IDA7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGFiZWwtcmFkaW8tY2hlY2sge1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIG1hcmdpbjogNnB4IDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucmVhZG9ubHlEaXYge1xyXG4gICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgbWF4LWhlaWdodDogMzJweDtcclxuICAgbWluLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1ib3JkZXItc3R5bGUge1xyXG4gICBib3JkZXItYm90dG9tOiAjYTZhOWFlIDFweCBzb2xpZDtcclxuICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgIDpob3N0IDo6bmctZGVlcCAuY29udGVudC1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC5jYXJkIHtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjVweCk7XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1jb250ZW50IC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgIH1cblxuICAgOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LWZvcm0gLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgICAgcGFkZGluZzogMC4zNXJlbTtcbiAgIH1cblxuICAgOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoLFxuICAgOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0ZCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBwYWRkaW5nOiAwLjM1cmVtO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuMzVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjM1cmVtO1xuICAgICAgcGFkZGluZzogMC41NXJlbSAwLjM1cmVtO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLmNydWQtYWN0aW9ucyAuYnRuLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5jcnVkLWFjdGlvbnMgYnV0dG9uIHtcbiAgICAgIGZsZXg6IDEgMSAxMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zID4gc3BhbixcbiAgIDpob3N0IDo6bmctZGVlcCAuY3J1ZC1hY3Rpb25zID4gZGl2IHtcbiAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    //Locale Select
    function AppComponent(config, globals, router) {
        this.config = config;
        this.globals = globals;
        this.router = router;
        this.esconder = false;
        this.config.placeholder = "selecione";
        this.config.notFoundText = "Item não encontrado";
        this.config.typeToSearchText = "Digite para pesquisar";
        this.config.loadingText = "Carregando...";
        this.config.clearAllText = "Limpar";
        this.router.events.subscribe(function (event) {
            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CODE_GOOGLE_ANALYTICS;
            document.head.prepend(script);
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window['ga-disable-' + environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CODE_GOOGLE_ANALYTICS] = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LOCK_GOOGLE_ANALYTICS;
                gtag('config', environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CODE_GOOGLE_ANALYTICS, {
                    'page_path': event.urlAfterRedirects
                });
            }
        });
    }
    Object.defineProperty(AppComponent.prototype, "fileProgress", {
        get: function () {
            return this.globals.progress;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.ctorParameters = function () { return [
        { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectConfig"] },
        { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectConfig"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_upper_case_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-upper-case-directive */ "./node_modules/ngx-upper-case-directive/fesm5/ngx-upper-case-directive.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/termos/modal/termo-aceite/termo-aceite-modal.component */ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.ts");
/* harmony import */ var _components_termos_modal_termo_aceite_visualizar_termo_aceite_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component */ "./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.ts");
/* harmony import */ var _components_desenvolvimento_desenvolvimento_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/desenvolvimento/desenvolvimento.component */ "./src/app/components/desenvolvimento/desenvolvimento.component.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/security/auth.interceptor */ "./src/app/components/security/auth.interceptor.ts");
/* harmony import */ var _components_security_changes_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/security/changes.guard */ "./src/app/components/security/changes.guard.ts");
/* harmony import */ var _components_security_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/security/confirmation/confirmation.component */ "./src/app/components/security/confirmation/confirmation.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_security_senhaRecuperacao_senhaRecuperacao_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/security/senhaRecuperacao/senhaRecuperacao.component */ "./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.ts");
/* harmony import */ var _components_assinar_acesso_assinarAcesso_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/assinar/acesso/assinarAcesso.component */ "./src/app/components/assinar/acesso/assinarAcesso.component.ts");
/* harmony import */ var _components_validar_documento_validarAssinatura_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/validar/documento/validarAssinatura.component */ "./src/app/components/validar/documento/validarAssinatura.component.ts");
/* harmony import */ var _components_registrar_registrar_cliente_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/registrar/registrar-cliente.component */ "./src/app/components/registrar/registrar-cliente.component.ts");
/* harmony import */ var _components_security_pages_notfound_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/security/pages/notfound.component */ "./src/app/components/security/pages/notfound.component.ts");
/* harmony import */ var _components_security_role_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/security/role.guard */ "./src/app/components/security/role.guard.ts");
/* harmony import */ var _components_template_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/template/layouts/content/content-layout.component */ "./src/app/components/template/layouts/content/content-layout.component.ts");
/* harmony import */ var _components_template_layouts_img_inicial_img_inicial__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/template/layouts/img-inicial/img-inicial */ "./src/app/components/template/layouts/img-inicial/img-inicial.ts");
/* harmony import */ var _components_template_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/template/layouts/full/full-layout.component */ "./src/app/components/template/layouts/full/full-layout.component.ts");
/* harmony import */ var _components_template_layouts_page_page_layout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/template/layouts/page/page-layout.component */ "./src/app/components/template/layouts/page/page-layout.component.ts");
/* harmony import */ var _components_template_template_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/template/template.module */ "./src/app/components/template/template.module.ts");
/* harmony import */ var _components_template_template_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/template/template.service */ "./src/app/components/template/template.service.ts");
/* harmony import */ var _config_CustomDatepickerI18n__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./config/CustomDatepickerI18n */ "./src/app/config/CustomDatepickerI18n.ts");
/* harmony import */ var _config_NgbDatePTParserFormatter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./config/NgbDatePTParserFormatter */ "./src/app/config/NgbDatePTParserFormatter.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var _services_util_dialog_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var _services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var _services_util_http_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _services_util_modal_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/util/modal.service */ "./src/app/services/util/modal.service.ts");
/* harmony import */ var _services_util_select_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/util/select.service */ "./src/app/services/util/select.service.ts");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng2_password_strength_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng2-password-strength-bar */ "./node_modules/ng2-password-strength-bar/index.js");
/* harmony import */ var ng2_password_strength_bar__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(ng2_password_strength_bar__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _components_util_util_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/util/util.module */ "./src/app/components/util/util.module.ts");
/* harmony import */ var _components_cadastros_contrato_modal_contrato_parte_contato_contrato_parte_contato_modal_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.ts");
/* harmony import */ var _components_cadastros_contrato_modal_contrato_documento_contrato_documento_modal_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.ts");
/* harmony import */ var _components_cadastros_contrato_modal_contrato_documento_visualizar_contrato_documento_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.ts");
/* harmony import */ var _services_util_pdf_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/util/pdf.service */ "./src/app/services/util/pdf.service.ts");
/* harmony import */ var _components_cadastros_contrato_modal_contrato_papel_contrato_papel_modal_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.ts");
/* harmony import */ var _components_cadastros_contrato_modal_contrato_tipo_documento_contrato_tipo_documento_modal_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























































Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _components_security_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmationComponent"],
                _components_template_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_33__["ContentLayoutComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _components_desenvolvimento_desenvolvimento_component__WEBPACK_IMPORTED_MODULE_21__["DesenvolvimentoComponent"],
                _components_template_layouts_img_inicial_img_inicial__WEBPACK_IMPORTED_MODULE_34__["ImgInicial"],
                _components_template_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_35__["FullLayoutComponent"],
                _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _components_security_senhaRecuperacao_senhaRecuperacao_component__WEBPACK_IMPORTED_MODULE_27__["SenhaRecuperacaoComponent"],
                _components_assinar_acesso_assinarAcesso_component__WEBPACK_IMPORTED_MODULE_28__["AssinarAcessoComponent"],
                _components_validar_documento_validarAssinatura_component__WEBPACK_IMPORTED_MODULE_29__["ValidarAssinaturaComponent"],
                _components_registrar_registrar_cliente_component__WEBPACK_IMPORTED_MODULE_30__["RegistrarClienteComponent"],
                _components_template_layouts_page_page_layout_component__WEBPACK_IMPORTED_MODULE_36__["PageLayoutComponent"],
                _components_security_pages_notfound_component__WEBPACK_IMPORTED_MODULE_31__["NotfoundComponent"],
                _components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_19__["TermoAceiteModalComponent"],
                _components_termos_modal_termo_aceite_visualizar_termo_aceite_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_20__["TermoAceiteVisualizarModalComponent"],
                _components_cadastros_contrato_modal_contrato_parte_contato_contrato_parte_contato_modal_component__WEBPACK_IMPORTED_MODULE_54__["ContratoParteContatoModalComponent"],
                _components_cadastros_contrato_modal_contrato_documento_contrato_documento_modal_component__WEBPACK_IMPORTED_MODULE_55__["ContratoDocumentoModalComponent"],
                _components_cadastros_contrato_modal_contrato_documento_visualizar_contrato_documento_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_56__["ContratoDocumentoVisualizarModalComponent"],
                _components_cadastros_contrato_modal_contrato_papel_contrato_papel_modal_component__WEBPACK_IMPORTED_MODULE_58__["ContratoPapelModalComponent"],
                _components_cadastros_contrato_modal_contrato_tipo_documento_contrato_tipo_documento_modal_component__WEBPACK_IMPORTED_MODULE_59__["ContratoTipoDocumentoModalComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_9__["ChartistModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                ngx_upper_case_directive__WEBPACK_IMPORTED_MODULE_15__["NgxUpperCaseDirectiveModule"],
                _components_template_template_module__WEBPACK_IMPORTED_MODULE_37__["TemplateModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    timeOut: 4000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_50__["NgMultiSelectDropDownModule"].forRoot(),
                ng2_password_strength_bar__WEBPACK_IMPORTED_MODULE_51__["PasswordStrengthBarModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_52__["AngularEditorModule"],
                _components_util_util_module__WEBPACK_IMPORTED_MODULE_53__["UtilModule"],
            ],
            providers: [
                _globals__WEBPACK_IMPORTED_MODULE_41__["Globals"],
                _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _components_security_role_guard__WEBPACK_IMPORTED_MODULE_32__["RoleGuard"],
                _components_security_changes_guard__WEBPACK_IMPORTED_MODULE_24__["PendingChangesGuard"],
                _services_util_http_service__WEBPACK_IMPORTED_MODULE_45__["HttpService"],
                _services_util_dialog_service__WEBPACK_IMPORTED_MODULE_43__["DialogService"],
                _services_util_select_service__WEBPACK_IMPORTED_MODULE_47__["SelectService"],
                _services_util_shared_service__WEBPACK_IMPORTED_MODULE_48__["SharedService"],
                _components_template_template_service__WEBPACK_IMPORTED_MODULE_38__["TemplateService"],
                _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_42__["UsuarioService"],
                _services_util_util_service__WEBPACK_IMPORTED_MODULE_49__["UtilService"],
                _services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_44__["ErrorHandlerService"],
                _services_util_modal_service__WEBPACK_IMPORTED_MODULE_46__["ModalService"],
                _services_util_pdf_service__WEBPACK_IMPORTED_MODULE_57__["PdfService"],
                _config_CustomDatepickerI18n__WEBPACK_IMPORTED_MODULE_39__["I18n"],
                {
                    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerI18n"],
                    useClass: _config_CustomDatepickerI18n__WEBPACK_IMPORTED_MODULE_39__["CustomDatepickerI18n"]
                },
                {
                    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateParserFormatter"],
                    useClass: _config_NgbDatePTParserFormatter__WEBPACK_IMPORTED_MODULE_40__["NgbDatePTParserFormatter"]
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],
                    useValue: 'pt'
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true
                },
            ],
            entryComponents: [
                _components_security_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmationComponent"],
                _components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_19__["TermoAceiteModalComponent"],
                _components_termos_modal_termo_aceite_visualizar_termo_aceite_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_20__["TermoAceiteVisualizarModalComponent"],
                _components_cadastros_contrato_modal_contrato_parte_contato_contrato_parte_contato_modal_component__WEBPACK_IMPORTED_MODULE_54__["ContratoParteContatoModalComponent"],
                _components_cadastros_contrato_modal_contrato_documento_contrato_documento_modal_component__WEBPACK_IMPORTED_MODULE_55__["ContratoDocumentoModalComponent"],
                _components_cadastros_contrato_modal_contrato_documento_visualizar_contrato_documento_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_56__["ContratoDocumentoVisualizarModalComponent"],
                _components_cadastros_contrato_modal_contrato_papel_contrato_papel_modal_component__WEBPACK_IMPORTED_MODULE_58__["ContratoPapelModalComponent"],
                _components_cadastros_contrato_modal_contrato_tipo_documento_contrato_tipo_documento_modal_component__WEBPACK_IMPORTED_MODULE_59__["ContratoTipoDocumentoModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bootstraper.ts":
/*!********************************!*\
  !*** ./src/app/bootstraper.ts ***!
  \********************************/
/*! exports provided: Bootstrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrapper", function() { return Bootstrapper; });
var Bootstrapper = /** @class */ (function () {
    function Bootstrapper(bootstrapFunction) {
        this.bootstrapFunction = bootstrapFunction;
    }
    /**
     * Before bootstrapping the app, we need to determine if Zone has already
     * been loaded and if not, load it before bootstrapping the application.
     */
    Bootstrapper.prototype.startup = function () {
        //console.log('NG: Bootstrapping app...');
        var _this = this;
        if (!window['Zone']) {
            // we need to load zone.js
            //console.group('Zone: has not been loaded. Loading now...');
            // This is the minified version of zone
            var zoneFile = "../assets/js/zone.min.js";
            var filesToLoad = [zoneFile];
            var req = window['require'];
            if (typeof req !== 'undefined') {
                req(filesToLoad, function () {
                    _this.bootstrapFunction(_this);
                    console.groupEnd();
                });
            }
            else {
                var sequence_1 = Promise.resolve();
                filesToLoad.forEach(function (file) {
                    sequence_1 = sequence_1.then(function () {
                        return _this.loadScript(file);
                    });
                });
                sequence_1.then(function () {
                    _this.bootstrapFunction(_this);
                    console.groupEnd();
                }, function (error) {
                    console.error('Error occurred loading necessary files', error);
                    console.groupEnd();
                });
            }
        }
        else {
            // zone already exists
            this.bootstrapFunction(this);
        }
    };
    /**
     * Loads a script and adds it to the head.
     * @param fileName
     * @returns a Promise that will resolve with the file name
     */
    Bootstrapper.prototype.loadScript = function (fileName) {
        return new Promise(function (resolve) {
            //console.log('Zone: Loading file... ' + fileName);
            var script = document.createElement('script');
            script.src = fileName;
            script.type = 'text/javascript';
            script.onload = function () {
                //console.log('\tDone');
                resolve(fileName);
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    };
    Bootstrapper.ctorParameters = function () { return [
        { type: Function }
    ]; };
    return Bootstrapper;
}());



/***/ }),

/***/ "./src/app/components/assinar/acesso/assinarAcesso.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/assinar/acesso/assinarAcesso.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\r\n*:after,\r\n*:before {\r\n    box-sizing: inherit;\r\n}\r\n\r\nfieldset,\r\ninput,\r\nselect,\r\ntextarea {\r\n    margin-bottom: 0.9rem;\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n    transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n}\r\n\r\ninput[type='email'],\r\ninput[type='number'],\r\ninput[type='password'],\r\ninput[type='search'],\r\ninput[type='tel'],\r\ninput[type='text'],\r\ninput[type='url'],\r\ntextarea,\r\nselect {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background-color:#f8f8f8;\r\n    border: 0.1rem solid #d1d1d1;\r\n    border-radius: .4rem;\r\n    box-shadow: none;\r\n    box-sizing: inherit;\r\n    height: 2.8rem;\r\n    width: 100%;\r\n}\r\n\r\ninput[type='email']:focus,\r\ninput[type='number']:focus,\r\ninput[type='password']:focus,\r\ninput[type='search']:focus,\r\ninput[type='tel']:focus,\r\ninput[type='text']:focus,\r\ninput[type='url']:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n    border-color: #42c2eb;\r\n    outline: 0;\r\n}\r\n\r\n.button,\r\nbutton,\r\ninput[type='button'],\r\ninput[type='reset'],\r\ninput[type='submit'] {\r\n    background-color: #34b563;\r\n    border: 0.1rem solid #34b563;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-size: 0.8rem !important;\r\n    font-weight: 500;\r\n    height: 2.8rem;\r\n    letter-spacing: .1rem;\r\n    line-height: 2.8rem;\r\n    /* padding: 0 3.0rem; */\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n}\r\n\r\n.button-signin {\r\n    background: #34b563;\r\n    font-size: 14px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    border-radius: .4rem;\r\n}\r\n\r\n.button-signin:focus,\r\n.button-signin:hover {\r\n    background: #0aab67;\r\n    outline: 0;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\na {\r\n    color: #17a6d4;\r\n    text-decoration: none;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    color: #42c2eb;\r\n}\r\n\r\n.middle-aligment-flex {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.op0 {\r\n    opacity: 0;\r\n}\r\n\r\n.w100 {\r\n    width: 100%;\r\n}\r\n\r\nmain.login-wrapper {\r\n    height: 100vh;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\nmain.login-wrapper .login-image_wrapper {\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\nmain.login-wrapper .form-signin {\r\n    min-width: 28rem;\r\n    opacity: 0;\r\n    padding: 30px;\r\n    margin-bottom: 0;\r\n    z-index: 1;\r\n    background-color: #20364a;\r\n}\r\n\r\nmain.login-wrapper .form-signin .title {\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n    font-size: 2.3rem;\r\n    font-weight: 600;\r\n    line-height: 1.2;\r\n    letter-spacing: -.1rem;\r\n}\r\n\r\nmain.login-wrapper .form-signin .signin {\r\n    color: white;\r\n    line-height: 1.3;\r\n    font-weight: 200;\r\n    margin-bottom: 30px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.pandora-logo {\r\n    -webkit-transform: scale(.5);\r\n            transform: scale(.5);\r\n}\r\n\r\n.sisweb-logo {\r\n    -webkit-transform: rotateY(-90deg);\r\n            transform: rotateY(-90deg);\r\n}\r\n\r\n.login-image_wrapper svg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 5% 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .login-image_wrapper svg {\r\n        position: absolute;\r\n        left: -70%;\r\n        top: -30%;\r\n        width: 180%;\r\n        height: 120%;\r\n        margin: 25% 0;\r\n    }\r\n  /*  main.login-wrapper .form-signin {\r\n      padding: 0 50px 90px;\r\n  }*/\r\n}\r\n\r\n.background {\r\n    position: absolute;\r\n    width: 200vmax;\r\n    height: 100vmax;\r\n    z-index: -10;\r\n    overflow: hidden;\r\n    background: #0b2238;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .background {\r\n        width: 100vmax;\r\n    }\r\n}\r\n\r\n.foreground {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    overflow: hidden;\r\n    place-content: end end;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.foreground svg {\r\n    margin: 20px;\r\n}\r\n\r\n.background img {\r\n    opacity: .1;\r\n}\r\n\r\nimg{width: 100%;}\r\n\r\n.background-wrapper {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.input-wrapper {\r\n    position: relative;\r\n}\r\n\r\n.input-wrapper i {\r\n    position: absolute;\r\n    top: calc(calc(2.8rem - 14px) / 2);\r\n    right: 1rem;\r\n    color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::placeholder {\r\n   text-transform: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NpbmFyL2FjZXNzby9hc3NpbmFyQWNlc3NvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztJQUlJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxtRUFBbUU7QUFDdkU7O0FBRUE7Ozs7Ozs7OztJQVNJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7O0lBU0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7Ozs7SUFLSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQWU7SUFBZixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBR0ksb0JBQWE7SUFBYixhQUFhO0lBR2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUduQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7SUFDakI7RUFDRjs7SUFFRTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixxQkFBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxJQUFJLFdBQVcsQ0FBQzs7QUFHaEI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7R0FDRyxvQkFBb0I7QUFDdkI7O0FBQ0E7R0FDRyxvQkFBb0I7QUFDdkI7O0FBRkE7R0FDRyxvQkFBb0I7QUFDdkI7O0FBRkE7R0FDRyxvQkFBb0I7QUFDdkI7O0FBRkE7R0FDRyxvQkFBb0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fzc2luYXIvYWNlc3NvL2Fzc2luYXJBY2Vzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXHJcbio6YWZ0ZXIsXHJcbio6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmZpZWxkc2V0LFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMDAwcyBjdWJpYy1iZXppZXIoLjk1LCAuMDUsIC43OTUsIC4wMzUpIDEwMDAwMDBzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDAwMHMgY3ViaWMtYmV6aWVyKC45NSwgLjA1LCAuNzk1LCAuMDM1KSAxMDAwMDAwcztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuaW5wdXRbdHlwZT0nbnVtYmVyJ10sXHJcbmlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXHJcbmlucHV0W3R5cGU9J3NlYXJjaCddLFxyXG5pbnB1dFt0eXBlPSd0ZWwnXSxcclxuaW5wdXRbdHlwZT0ndGV4dCddLFxyXG5pbnB1dFt0eXBlPSd1cmwnXSxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2QxZDFkMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IDIuOHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdlbWFpbCddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSdudW1iZXInXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0nc2VhcmNoJ106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J3RlbCddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J3VybCddOmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQyYzJlYjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5idXR0b24sXHJcbmJ1dHRvbixcclxuaW5wdXRbdHlwZT0nYnV0dG9uJ10sXHJcbmlucHV0W3R5cGU9J3Jlc2V0J10sXHJcbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGI1NjM7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjMzRiNTYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcclxuICAgIC8qIHBhZGRpbmc6IDAgMy4wcmVtOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5idXR0b24tc2lnbmluIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNGI1NjM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1zaWduaW46Zm9jdXMsXHJcbi5idXR0b24tc2lnbmluOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwYWFiNjc7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMTdhNmQ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmZvY3VzLFxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDJjMmViO1xyXG59XHJcblxyXG4ubWlkZGxlLWFsaWdtZW50LWZsZXgge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vcDAge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciAubG9naW4taW1hZ2Vfd3JhcHBlciB7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYWluLmxvZ2luLXdyYXBwZXIgLmZvcm0tc2lnbmluIHtcclxuICAgIG1pbi13aWR0aDogMjhyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzY0YTtcclxufVxyXG5cclxubWFpbi5sb2dpbi13cmFwcGVyIC5mb3JtLXNpZ25pbiAudGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4xcmVtO1xyXG59XHJcblxyXG5tYWluLmxvZ2luLXdyYXBwZXIgLmZvcm0tc2lnbmluIC5zaWduaW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ucGFuZG9yYS1sb2dvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xyXG59XHJcblxyXG4uc2lzd2ViLWxvZ28ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XHJcbn1cclxuXHJcbi5sb2dpbi1pbWFnZV93cmFwcGVyIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDUlIDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxvZ2luLWltYWdlX3dyYXBwZXIgc3ZnIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTcwJTtcclxuICAgICAgICB0b3A6IC0zMCU7XHJcbiAgICAgICAgd2lkdGg6IDE4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgIG1hcmdpbjogMjUlIDA7XHJcbiAgICB9XHJcbiAgLyogIG1haW4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHggOTBweDtcclxuICB9Ki9cclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwMHZtYXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZtYXg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBiMjIzODtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZtYXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JlZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwbGFjZS1jb250ZW50OiBlbmQgZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZvcmVncm91bmQgc3ZnIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQgaW1nIHtcclxuICAgIG9wYWNpdHk6IC4xO1xyXG59XHJcblxyXG5pbWd7d2lkdGg6IDEwMCU7fVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKGNhbGMoMi44cmVtIC0gMTRweCkgLyAyKTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/assinar/acesso/assinarAcesso.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/assinar/acesso/assinarAcesso.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssinarAcessoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssinarAcessoComponent", function() { return AssinarAcessoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/enum/tipoPessoaEnum */ "./src/app/model/enum/tipoPessoaEnum.ts");
/* harmony import */ var _model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/cadastro/usuario */ "./src/app/model/cadastro/usuario.ts");
/* harmony import */ var _model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/cadastro/pessoa */ "./src/app/model/cadastro/pessoa.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
/* harmony import */ var _template_template_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../template/template.service */ "./src/app/components/template/template.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/termo/termo.service */ "./src/app/services/termo/termo.service.ts");
/* harmony import */ var app_components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/termos/modal/termo-aceite/termo-aceite-modal.component */ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AssinarAcessoComponent = /** @class */ (function () {
    function AssinarAcessoComponent(documentoService, loading, template, router, activatedRoute, errorHandler, termoService, modalService, utilService) {
        var _this = this;
        this.documentoService = documentoService;
        this.loading = loading;
        this.template = template;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorHandler = errorHandler;
        this.termoService = termoService;
        this.modalService = modalService;
        this.utilService = utilService;
        this.usuario = new _model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuario"](null, '', '', '', _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_4__["StatusEnum"].INATIVO, null, new _model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_7__["Pessoa"]('', '', '', '', _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_5__["TipoPessoaEnum"].FISICA, '', null), null, null);
        this.descBtnEntrar = 'Visualizar';
        this.esconder = true;
        this.termoAceiteModal = app_components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_13__["TermoAceiteModalComponent"];
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"].getInstance();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
    }
    AssinarAcessoComponent.prototype.ngOnInit = function () {
        this.utilService.carregaAnimaJS();
        //$.getScript('../../assets/js/anime.min.js');
        //$.getScript('../../assets/js/slippry.min.js');
        //$.getScript('../../assets/js/login.js');
        //this.logar();
    };
    AssinarAcessoComponent.prototype.UserInit = function (userAuthentication) {
        this.shared.token = userAuthentication.token;
        this.shared.usuario = userAuthentication.usuario;
        this.shared.clientes = userAuthentication.clientes;
        if (this.shared.clientes.length > 0) {
            //verifica se é do perfil sem ser assinador tem preferencia
            var Ususáriocliente = this.shared.clientes.filter(function (x) { return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_14__["PerfilEnum"].parse(x.perfil) != app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_14__["PerfilEnum"].ROLE_ASSINADOR; });
            if (Ususáriocliente.length == 0) {
                Ususáriocliente = this.shared.clientes;
            }
            else
                this.shared.clienteSelecionado = Ususáriocliente[0];
            var clientesLink = this.shared.clientes.filter(function (x) { return (x.cliente.id) == userAuthentication.idCliente; });
            if (clientesLink.length > 0)
                this.shared.clienteSelecionado = clientesLink[0];
            this.shared.perfilUsuario = this.shared.clienteSelecionado.perfil;
        }
        this.shared.prefs = this.template.getMenuPrefs();
        this.navigate = 'assinar/pendente/detalhe/' + userAuthentication.idContrato;
        this.buscaTermos();
    };
    AssinarAcessoComponent.prototype.logar = function () {
        var _this = this;
        this.loading.show();
        this.message = '';
        this.usuario.login = this.usuario.login.toUpperCase();
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;
        this.documentoService.assinarDocumento(this.token, this.cpf).subscribe(function (responseApi) {
            _this.UserInit(responseApi);
            _this.loading.hide();
            _this.descBtnEntrar = 'Sair';
        }, function (err) {
            _this.errorHandler.handle(err);
            _this.loading.hide();
        });
    };
    AssinarAcessoComponent.prototype.termosPendentes = function (termosResponse) {
        if (termosResponse) {
            this.exibirTermos();
        }
        else {
            this.router.navigate([this.navigate]);
        }
    };
    AssinarAcessoComponent.prototype.buscaTermos = function () {
        var _this = this;
        this.termoService.getTermosPendentes(this.shared.usuario).subscribe(function (responseApi) {
            _this.termosPendentes(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
        return null;
    };
    AssinarAcessoComponent.prototype.exibirTermos = function () {
        var modalRef = this.modalService.open(this.termoAceiteModal, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        modalRef.componentInstance.urlNavigate = this.navigate;
    };
    AssinarAcessoComponent.ctorParameters = function () { return [
        { type: _services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_9__["DocumentoService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _template_template_service__WEBPACK_IMPORTED_MODULE_10__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"] },
        { type: app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__["TermoService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"] }
    ]; };
    AssinarAcessoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assinarAcesso',
            template: __webpack_require__(/*! raw-loader!./assinarAcesso.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assinar/acesso/assinarAcesso.component.html"),
            styles: ["assets/css/reset.min.css", "assets/css/slippry.css", __webpack_require__(/*! ./assinarAcesso.component.css */ "./src/app/components/assinar/acesso/assinarAcesso.component.css")]
        }),
        __metadata("design:paramtypes", [_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_9__["DocumentoService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _template_template_service__WEBPACK_IMPORTED_MODULE_10__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"],
            app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__["TermoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_15__["UtilService"]])
    ], AssinarAcessoComponent);
    return AssinarAcessoComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n\n.document-preview-area {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 500px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.document-preview-area pdf-viewer {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.document-preview-state {\n  color: #555;\n  font-size: 16px;\n}\n\n.document-preview-message {\n  margin: 0;\n  max-width: 640px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tZG9jdW1lbnRvLXZpc3VhbGl6YXIvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhZGFzdHJvc1xcY29udHJhdG9cXG1vZGFsXFxjb250cmF0by1kb2N1bWVudG8tdmlzdWFsaXphclxcY29udHJhdG8tZG9jdW1lbnRvLXZpc3VhbGl6YXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLWRvY3VtZW50by12aXN1YWxpemFyL2NvbnRyYXRvLWRvY3VtZW50by12aXN1YWxpemFyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhZGFzdHJvcy9jb250cmF0by9tb2RhbC9jb250cmF0by1kb2N1bWVudG8tdmlzdWFsaXphci9EOlxcQXNzaW5hLk5ldFxcUHJvamV0b3NcXEdpdEh1YlxcQXNzaW5hLk5ldC5Qb3J0YWxcXGFzc2luYS5uZXQud2ViLnBvcnRhbC12MS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIOztBQ3RHQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FEeUdKOztBQ3RHQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRHlHSjs7QUN0R0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBRHlHSjs7QUN0R0E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FEeUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tZG9jdW1lbnRvLXZpc3VhbGl6YXIvY29udHJhdG8tZG9jdW1lbnRvLXZpc3VhbGl6YXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udHJvbC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMCA+IHNwYW4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XG59XG5cbi5zdy1pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3ctaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNiMGM0ZGU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3Rhci5maWxsZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufVxuXG4uZG9jdW1lbnQtcHJldmlldy1hcmVhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRvY3VtZW50LXByZXZpZXctYXJlYSBwZGYtdmlld2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kb2N1bWVudC1wcmV2aWV3LXN0YXRlIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRvY3VtZW50LXByZXZpZXctbWVzc2FnZSB7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgd2lkdGg6IDkwJTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbW9kYWwuc2Nzc1wiO1xuXG4uZG9jdW1lbnQtcHJldmlldy1hcmVhIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kb2N1bWVudC1wcmV2aWV3LWFyZWEgcGRmLXZpZXdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZG9jdW1lbnQtcHJldmlldy1zdGF0ZSB7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZG9jdW1lbnQtcHJldmlldy1tZXNzYWdlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ContratoDocumentoVisualizarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoDocumentoVisualizarModalComponent", function() { return ContratoDocumentoVisualizarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/cadastro/cadastro/contrato.service */ "./src/app/services/cadastro/cadastro/contrato.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var _services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContratoDocumentoVisualizarModalComponent = /** @class */ (function () {
    function ContratoDocumentoVisualizarModalComponent(utilService, contratoService, dialog) {
        this.utilService = utilService;
        this.contratoService = contratoService;
        this.dialog = dialog;
        this.documento = {};
        this.documentoPDF = {};
        this.carregando = false;
        var injector = _services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"]);
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]);
    }
    ContratoDocumentoVisualizarModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
            this.documento = this.instance;
            if (this.documento.documento == null) {
                this.carregando = true;
                this.buscaPDF();
            }
            else {
                this.pdfInit({ documentoPDF: this.documento.documento });
            }
        }
        else {
            this.documento = "";
            this.carregando = false;
        }
    };
    ContratoDocumentoVisualizarModalComponent.prototype.pdfInit = function (documento) {
        var documentoPDFDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_8__["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(function (char) { return char.charCodeAt(0); }));
        this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
        this.carregando = false;
    };
    ContratoDocumentoVisualizarModalComponent.prototype.buscaPDF = function () {
        var _this = this;
        this.contratoService.getDocumentoPDF(this.documento).subscribe(function (responseApi) {
            _this.carregando = false;
            var mensagemApi = _this.getMensagemApi(responseApi);
            if (mensagemApi) {
                _this.showMessage({
                    type: 'warning',
                    text: mensagemApi
                });
                return;
            }
            _this.pdfInit(responseApi.data);
        }, function (err) {
            _this.carregando = false;
            var mensagemApi = _this.getMensagemApi(err && err.error);
            if (mensagemApi || (err && err.status == 401)) {
                _this.showMessage({
                    type: 'warning',
                    text: mensagemApi || 'Sua sessão expirou. Faça login novamente.'
                });
                return;
            }
            _this.errorHandler.handle(err);
        });
        return null;
    };
    ContratoDocumentoVisualizarModalComponent.prototype.getMensagemApi = function (responseApi) {
        if (responseApi && responseApi.errors && responseApi.errors.length) {
            return responseApi.errors[responseApi.errors.length - 1];
        }
        return null;
    };
    ContratoDocumentoVisualizarModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    ContratoDocumentoVisualizarModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    ContratoDocumentoVisualizarModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoDocumentoVisualizarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: true }),
        __metadata("design:type", Object)
    ], ContratoDocumentoVisualizarModalComponent.prototype, "pdfViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoDocumentoVisualizarModalComponent.prototype, "instance", void 0);
    ContratoDocumentoVisualizarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-documento-visualizar-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-documento-visualizar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-documento-visualizar-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ContratoDocumentoVisualizarModalComponent);
    return ContratoDocumentoVisualizarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n\n.contract-document-help {\n  color: #5f6872;\n  font-size: 0.9rem;\n  margin: 0.2rem 0 0.65rem;\n}\n\n.document-label-row {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  height: 32px;\n}\n\n.document-label-row .nav-link {\n  padding: 0 0 0 0.4rem;\n}\n\n.document-dropzone {\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px dashed #a6a9ae;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  gap: 0.9rem;\n  min-height: 54px;\n  padding: 0.55rem 0.75rem;\n  -webkit-transition: border-color 0.15s ease, background-color 0.15s ease;\n  transition: border-color 0.15s ease, background-color 0.15s ease;\n}\n\n.document-dropzone-active {\n  background-color: #f1fbf5;\n  border-color: #2ebd65;\n}\n\n.document-dropzone-disabled {\n  background-color: #f8f8f8;\n  cursor: not-allowed;\n}\n\n.document-file-input {\n  display: none;\n}\n\n.document-select-button {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  font-size: 0.9rem;\n  line-height: 1.1;\n  margin: 0;\n  padding: 0.5rem 0.85rem;\n}\n\n.document-dropzone-text {\n  color: #7a828a;\n  font-size: 0.88rem;\n  font-style: italic;\n}\n\n.selected-documents-title {\n  color: #595959;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-top: 0.45rem;\n}\n\n.selected-documents-table {\n  border-top: 1px solid #d8d8d8;\n}\n\n.selected-documents-table th {\n  background-color: #e5e5e5;\n  color: #2e3b4b;\n  font-weight: 500;\n  padding: 0.38rem 0.45rem;\n}\n\n.selected-documents-table td {\n  padding: 0.28rem 0.45rem;\n  vertical-align: middle;\n}\n\n.selected-documents-table small {\n  margin: 0;\n}\n\n.action-column {\n  text-align: center;\n  width: 52px;\n}\n\n.document-role-chip {\n  background-color: #eef7f2;\n  border: 1px solid #d5eee0;\n  border-radius: 0.2rem;\n  color: #4f5963;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  font-size: 0.75rem;\n  line-height: 1.1;\n  margin: 0.1rem 0.25rem 0.1rem 0;\n  padding: 0.18rem 0.4rem;\n}\n\n.selected-documents-empty {\n  border-top: 1px solid #d8d8d8;\n  color: #5f6872;\n  font-size: 0.9rem;\n  padding: 0.5rem 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tZG9jdW1lbnRvL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYWRhc3Ryb3NcXGNvbnRyYXRvXFxtb2RhbFxcY29udHJhdG8tZG9jdW1lbnRvXFxjb250cmF0by1kb2N1bWVudG8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLWRvY3VtZW50by9jb250cmF0by1kb2N1bWVudG8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLWRvY3VtZW50by9EOlxcQXNzaW5hLk5ldFxcUHJvamV0b3NcXEdpdEh1YlxcQXNzaW5hLk5ldC5Qb3J0YWxcXGFzc2luYS5uZXQud2ViLnBvcnRhbC12MS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIOztBQ3RHQTtFQUNHLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FEeUdIOztBQ3RHQTtFQUNHLHFCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0VBQUE7RUFBQSxnRUFBQTtBRHlHSDs7QUN0R0E7RUFDRyx5QkFBQTtFQUNBLHFCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7QUR5R0g7O0FDdEdBO0VBQ0csYUFBQTtBRHlHSDs7QUN0R0E7RUFDRyxtQkFBQTtVQUFBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUR5R0g7O0FDdEdBO0VBQ0csNkJBQUE7QUR5R0g7O0FDdEdBO0VBQ0cseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBRHlHSDs7QUN0R0E7RUFDRyx3QkFBQTtFQUNBLHNCQUFBO0FEeUdIOztBQ3RHQTtFQUNHLFNBQUE7QUR5R0g7O0FDdEdBO0VBQ0csa0JBQUE7RUFDQSxXQUFBO0FEeUdIOztBQ3RHQTtFQUNHLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUR5R0g7O0FDdEdBO0VBQ0csNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBRHlHSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLWRvY3VtZW50by9jb250cmF0by1kb2N1bWVudG8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udHJvbC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMCA+IHNwYW4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XG59XG5cbi5zdy1pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3ctaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNiMGM0ZGU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3Rhci5maWxsZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufVxuXG4uY29udHJhY3QtZG9jdW1lbnQtaGVscCB7XG4gIGNvbG9yOiAjNWY2ODcyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwLjJyZW0gMCAwLjY1cmVtO1xufVxuXG4uZG9jdW1lbnQtbGFiZWwtcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uZG9jdW1lbnQtbGFiZWwtcm93IC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAgMCAwIDAuNHJlbTtcbn1cblxuLmRvY3VtZW50LWRyb3B6b25lIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNhNmE5YWU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjlyZW07XG4gIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMC43NXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLmRvY3VtZW50LWRyb3B6b25lLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWZiZjU7XG4gIGJvcmRlci1jb2xvcjogIzJlYmQ2NTtcbn1cblxuLmRvY3VtZW50LWRyb3B6b25lLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmRvY3VtZW50LWZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZG9jdW1lbnQtc2VsZWN0LWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjVyZW0gMC44NXJlbTtcbn1cblxuLmRvY3VtZW50LWRyb3B6b25lLXRleHQge1xuICBjb2xvcjogIzdhODI4YTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGl0bGUge1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDAuNDVyZW07XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGFibGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cblxuLnNlbGVjdGVkLWRvY3VtZW50cy10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIGNvbG9yOiAjMmUzYjRiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwLjM4cmVtIDAuNDVyZW07XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjI4cmVtIDAuNDVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGFibGUgc21hbGwge1xuICBtYXJnaW46IDA7XG59XG5cbi5hY3Rpb24tY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTJweDtcbn1cblxuLmRvY3VtZW50LXJvbGUtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWY3ZjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWVlZTA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgY29sb3I6ICM0ZjU5NjM7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMC4xcmVtIDAuMjVyZW0gMC4xcmVtIDA7XG4gIHBhZGRpbmc6IDAuMThyZW0gMC40cmVtO1xufVxuXG4uc2VsZWN0ZWQtZG9jdW1lbnRzLWVtcHR5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGNvbG9yOiAjNWY2ODcyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21vZGFsLnNjc3NcIjtcblxuLmNvbnRyYWN0LWRvY3VtZW50LWhlbHAge1xuICAgY29sb3I6ICM1ZjY4NzI7XG4gICBmb250LXNpemU6IDAuOXJlbTtcbiAgIG1hcmdpbjogMC4ycmVtIDAgMC42NXJlbTtcbn1cblxuLmRvY3VtZW50LWxhYmVsLXJvdyB7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGhlaWdodDogMzJweDtcbn1cblxuLmRvY3VtZW50LWxhYmVsLXJvdyAubmF2LWxpbmsge1xuICAgcGFkZGluZzogMCAwIDAgMC40cmVtO1xufVxuXG4uZG9jdW1lbnQtZHJvcHpvbmUge1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJvcmRlcjogMXB4IGRhc2hlZCAjYTZhOWFlO1xuICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBnYXA6IDAuOXJlbTtcbiAgIG1pbi1oZWlnaHQ6IDU0cHg7XG4gICBwYWRkaW5nOiAwLjU1cmVtIDAuNzVyZW07XG4gICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlO1xufVxuXG4uZG9jdW1lbnQtZHJvcHpvbmUtYWN0aXZlIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMWZiZjU7XG4gICBib3JkZXItY29sb3I6ICMyZWJkNjU7XG59XG5cbi5kb2N1bWVudC1kcm9wem9uZS1kaXNhYmxlZCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmRvY3VtZW50LWZpbGUtaW5wdXQge1xuICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRvY3VtZW50LXNlbGVjdC1idXR0b24ge1xuICAgZmxleDogMCAwIGF1dG87XG4gICBmb250LXNpemU6IDAuOXJlbTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwLjVyZW0gMC44NXJlbTtcbn1cblxuLmRvY3VtZW50LWRyb3B6b25lLXRleHQge1xuICAgY29sb3I6ICM3YTgyOGE7XG4gICBmb250LXNpemU6IDAuODhyZW07XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGl0bGUge1xuICAgY29sb3I6ICM1OTU5NTk7XG4gICBmb250LXNpemU6IDAuOXJlbTtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBtYXJnaW4tdG9wOiAwLjQ1cmVtO1xufVxuXG4uc2VsZWN0ZWQtZG9jdW1lbnRzLXRhYmxlIHtcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuXG4uc2VsZWN0ZWQtZG9jdW1lbnRzLXRhYmxlIHRoIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICBjb2xvcjogIzJlM2I0YjtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICBwYWRkaW5nOiAwLjM4cmVtIDAuNDVyZW07XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtdGFibGUgdGQge1xuICAgcGFkZGluZzogMC4yOHJlbSAwLjQ1cmVtO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlbGVjdGVkLWRvY3VtZW50cy10YWJsZSBzbWFsbCB7XG4gICBtYXJnaW46IDA7XG59XG5cbi5hY3Rpb24tY29sdW1uIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHdpZHRoOiA1MnB4O1xufVxuXG4uZG9jdW1lbnQtcm9sZS1jaGlwIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlZWY3ZjI7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjZDVlZWUwO1xuICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgY29sb3I6ICM0ZjU5NjM7XG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICBtYXJnaW46IDAuMXJlbSAwLjI1cmVtIDAuMXJlbSAwO1xuICAgcGFkZGluZzogMC4xOHJlbSAwLjRyZW07XG59XG5cbi5zZWxlY3RlZC1kb2N1bWVudHMtZW1wdHkge1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICBjb2xvcjogIzVmNjg3MjtcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ContratoDocumentoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoDocumentoModalComponent", function() { return ContratoDocumentoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_components_cadastros_contrato_modal_contrato_papel_contrato_papel_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.ts");
/* harmony import */ var app_components_cadastros_contrato_modal_contrato_tipo_documento_contrato_tipo_documento_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.ts");
/* harmony import */ var app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContratoDocumentoModalComponent = /** @class */ (function () {
    function ContratoDocumentoModalComponent(utilService, dialog, shared, modalService, activeModal) {
        this.utilService = utilService;
        this.dialog = dialog;
        this.shared = shared;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.documento = {};
        this.tela = {};
        this.tipoDocumentoList = [];
        this.dropdownList = [];
        this.arrastandoArquivo = false;
        this.dropdownSettings = {};
        this.novoPapelComponentForm = app_components_cadastros_contrato_modal_contrato_papel_contrato_papel_modal_component__WEBPACK_IMPORTED_MODULE_7__["ContratoPapelModalComponent"];
        this.novoTipoDocumentoComponentForm = app_components_cadastros_contrato_modal_contrato_tipo_documento_contrato_tipo_documento_modal_component__WEBPACK_IMPORTED_MODULE_8__["ContratoTipoDocumentoModalComponent"];
    }
    ContratoDocumentoModalComponent.prototype.ngOnInit = function () {
        this.documento = Array.isArray(this.instance) ? this.instance : [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false
        };
        this.resetTela();
    };
    ContratoDocumentoModalComponent.prototype.resetTela = function () {
        this.tela.nomeDocumento = "";
        this.tela.tipoDocumento = "";
        this.form.resetForm();
        this.tela.papel = [];
        this.dropdownList = [];
        this.message = null;
    };
    ContratoDocumentoModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    ContratoDocumentoModalComponent.prototype.uploadArquivo = function (event) {
        var _this = this;
        var files = event.target && event.target.files ? event.target.files : event.dataTransfer.files;
        var lstPapel = [];
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.arrastandoArquivo = false;
        this.message = null;
        if (!this.tela.tipoDocumento) {
            this.message = {
                type: 'danger',
                text: "Escolha o tipo de documento"
            };
            return;
        }
        if (this.tela.papel.length == 0) {
            this.message = {
                type: 'danger',
                text: "Escolha o papel para assinar este documento"
            };
            return;
        }
        this.tela.papel.forEach(function (papel) {
            _this._dadosComplementares.comboContratoPapel.forEach(function (value) {
                if (papel.item_id == value.id) {
                    var item = { id: "", papel: { id: value.id, nome: value.label } };
                    lstPapel.push(item);
                    return;
                }
            });
        });
        var resultTipoDocumento = this._dadosComplementares.combotipoDocumento.find(function (tipoDocumento) { return tipoDocumento.id === _this.tela.tipoDocumento; });
        var erro = false;
        for (var i = 0; i < files.length; i++) {
            this.utilService.getFile(files[i]).then(function (data) {
                var documento = {
                    documento: lz_string__WEBPACK_IMPORTED_MODULE_5__["compressToUTF16"](_this.utilService.byteArrayToBase64(data['bytes'])),
                    nomeDocumento: data['fileName'],
                    papel: lstPapel,
                    tipoDocumento: { id: resultTipoDocumento.id, nome: resultTipoDocumento.label },
                    statusDocumento: 'NAOASSINADO',
                    descStatusDocumento: 'NÃO ASSINADO',
                    status: 'ATIVO'
                };
                if (!documento.nomeDocumento.toLowerCase().endsWith("pdf")) {
                    _this.message = {
                        type: 'danger',
                        text: "Arquivo enviado com formato inválido para assinatura"
                    };
                    erro = true;
                    return;
                }
                if (documento.documento.length < 5) {
                    _this.message = {
                        type: 'danger',
                        text: "Verique o arquivo enviado, tamanho muito pequeno"
                    };
                    erro = true;
                    return;
                }
                _this.documento.push(documento);
                _this.resetTela();
            });
        }
        if (event.target && event.target.value) {
            event.target.value = "";
        }
    };
    ContratoDocumentoModalComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        if (!this.liberadoUpload) {
            this.arrastandoArquivo = true;
        }
    };
    ContratoDocumentoModalComponent.prototype.onDragLeave = function (event) {
        event.preventDefault();
        this.arrastandoArquivo = false;
    };
    ContratoDocumentoModalComponent.prototype.onDropArquivo = function (event) {
        this.uploadArquivo(event);
    };
    ContratoDocumentoModalComponent.prototype.tipoDocumentoChange = function () {
        var _this = this;
        if (this.tela.tipoDocumento == null || this.tela.tipoDocumento == "")
            return;
        var result = this._dadosComplementares.combotipoDocumento.find(function (tipoDocumento) { return tipoDocumento.id === _this.tela.tipoDocumento; });
        this.tela.papel = [];
        this.dropdownList = [];
        result.subList.forEach(function (papel) {
            var item = { item_id: papel.id, item_text: papel.label };
            _this.dropdownList.push(item);
            _this.tela.papel.push(item);
        });
    };
    Object.defineProperty(ContratoDocumentoModalComponent.prototype, "dadosComplementares", {
        set: function (dadosComplementares) {
            var _this = this;
            this._dadosComplementares = dadosComplementares;
            this._dadosComplementares.combotipoDocumento.forEach(function (opcao) {
                // if (opcao.tipoCliente.includes(this.shared.clienteSelecionado.cliente.tipoCliente))
                _this.tipoDocumentoList.push({ item_id: opcao.id, item_text: opcao.label });
            });
        },
        enumerable: true,
        configurable: true
    });
    ContratoDocumentoModalComponent.prototype.remover = function (documento) {
        var _this = this;
        var index = this.documento.indexOf(documento, 0);
        if (index != -1) {
            this.dialog.confirmDelete("Confirma a remoção deste documento ?")
                .then(function (candelete) {
                if (candelete) {
                    _this.documento.splice(index, 1);
                }
            });
            //this.tela.documentos.splice(index, 1);
            //this.documento.splice(index, 1);
        }
    };
    Object.defineProperty(ContratoDocumentoModalComponent.prototype, "liberadoUpload", {
        get: function () {
            return !this.tela.papel || this.tela.papel.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    ContratoDocumentoModalComponent.prototype.salvar = function () {
        this.message = null;
        if (this.documento.length == 0) {
            this.message = {
                type: 'danger',
                text: "Não foi enviado nenhum arquivo"
            };
            return;
        }
        this.activeModal.close(this.documento);
    };
    ContratoDocumentoModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    ContratoDocumentoModalComponent.prototype.incluirPapel = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.novoPapelComponentForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        var papelTemp = this.tela.papel;
        var dropdownListTemp = this.dropdownList;
        this.tela.papel = [];
        this.dropdownList = [];
        modalRef.componentInstance.tipoDocumento = this.tela.tipoDocumento;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_9__["StatusEnum"].booltoEnum(result.status);
                }
                _this.novoPapelIncluido(result, papelTemp, dropdownListTemp);
            }
            else {
                _this.tela.papel = papelTemp;
                _this.dropdownList = dropdownListTemp;
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    ContratoDocumentoModalComponent.prototype.disableAddPapel = function () {
        return this.tela.tipoDocumento == null || this.tela.tipoDocumento == "";
    };
    ContratoDocumentoModalComponent.prototype.novoPapelIncluido = function (data, papelTemp, dropdownListTemp) {
        var _this = this;
        var item = { item_id: data.id, item_text: data.nome };
        dropdownListTemp.push(item);
        papelTemp.push(item);
        this.tela.papel = papelTemp;
        this.dropdownList = dropdownListTemp;
        var itemPapel = { id: data.id, label: data.nome };
        var result = this._dadosComplementares.combotipoDocumento.find(function (tipoDocumento) { return tipoDocumento.id === _this.tela.tipoDocumento; });
        result.subList.push(itemPapel);
        this._dadosComplementares.comboContratoPapel.push(itemPapel);
    };
    ContratoDocumentoModalComponent.prototype.incluirTipoDocumento = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.novoTipoDocumentoComponentForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        //let tipoDocumentoTemp = this.tela.tipoDocumento;
        var dropdownListTemp = this.tipoDocumentoList;
        //this.tela.tipoDocumento = null;
        this.tipoDocumentoList = [];
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_9__["StatusEnum"].booltoEnum(result.status);
                }
                _this.novoTipoDocumentoIncluido(result, dropdownListTemp);
            }
            else {
                // this.tela.tipoDocumento = tipoDocumentoTemp;
                _this.tipoDocumentoList = dropdownListTemp;
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    ContratoDocumentoModalComponent.prototype.novoTipoDocumentoIncluido = function (data, dropdownListTemp) {
        var tipoDocumento = data.data.tipoDocumento;
        var item = { item_id: tipoDocumento.id, item_text: tipoDocumento.nome };
        dropdownListTemp.push(item);
        this.tela.tipoDocumento = tipoDocumento.id;
        this.tipoDocumentoList = dropdownListTemp;
        var itemTipoDocumento = { id: tipoDocumento.id, label: tipoDocumento.nome, subList: [] };
        this._dadosComplementares.combotipoDocumento.push(itemTipoDocumento);
        this.tipoDocumentoChange();
    };
    ContratoDocumentoModalComponent.prototype.perfilUsuarioAdmin = function () {
        var result = this.shared.perfilUsuarioAdmin();
        return result;
    };
    ContratoDocumentoModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoDocumentoModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoDocumentoModalComponent.prototype, "instance", void 0);
    ContratoDocumentoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-documento-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-documento-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-documento-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]])
    ], ContratoDocumentoModalComponent);
    return ContratoDocumentoModalComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tcGFwZWwvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhZGFzdHJvc1xcY29udHJhdG9cXG1vZGFsXFxjb250cmF0by1wYXBlbFxcY29udHJhdG8tcGFwZWwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLXBhcGVsL2NvbnRyYXRvLXBhcGVsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFNBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTkg7O0FEU0E7RUFDRyxxQkFBQTtBQ05IOztBRFNBO0VBQ0csV0FBQTtBQ05IOztBRFNBO0VBQ0csc0JBQUE7QUNOSDs7QURTQTtFQUNHLGdCQUFBO0FDTkg7O0FEUUc7RUFDRyx3QkFBQTtBQ05OOztBRFNHO0VBQ0csVUFBQTtBQ1BOOztBRFNNO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDUFQ7O0FEVU07RUFDRyxvQkFBQTtBQ1JUOztBRGFBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRFlHO0VBQ0csa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNYSDs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSDs7QURjQTtFQUNHLHFCQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNYSDs7QURjRztFQUNHLFdBQUE7QUNaTjs7QURnQkE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNiSDs7QURnQkE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FDYkgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhZGFzdHJvcy9jb250cmF0by9tb2RhbC9jb250cmF0by1wYXBlbC9jb250cmF0by1wYXBlbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvcm0tYm9keSB7XHJcblxyXG5cclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcclxuICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBtYXJnaW46IDZweCAwO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMD5zcGFuLnN3aXRjaCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xyXG59XHJcblxyXG4uc3ctaW5wdXQtZ3JvdXAge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgIC5pbnB1dC1ncm91cC1idG4ge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi5idG4uYnRuLWZpbGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xyXG4gICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgY29sb3I6ICNiMGM0ZGU7XHJcblxyXG4gICAvLyBGaWxsZWQgU3RhclxyXG4gICAmLmZpbGxlZCB7XHJcbiAgICAgIGNvbG9yOiBnb2xkO1xyXG4gICB9XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgcGFkZGluZzogMC40cmVtO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgbWF4LWhlaWdodDogMzJweDtcclxuICAgbWluLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuXHJcbiIsIi5jb250cm9sLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwID4gc3Bhbi5zd2l0Y2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcbn1cblxuLnN3LWlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zdy1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIHtcbiAgei1pbmRleDogMjtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLmJ0bi1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ0bi5idG4tZmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2IwYzRkZTtcbn1cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyLmZpbGxlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContratoPapelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoPapelModalComponent", function() { return ContratoPapelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/config/papel/papel.service */ "./src/app/services/config/papel/papel.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContratoPapelModalComponent = /** @class */ (function () {
    function ContratoPapelModalComponent(route, papelService, shared, activeModal) {
        this.papelService = papelService;
        this.shared = shared;
        this.activeModal = activeModal;
        this.modal = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__["AppInjector"].getInjector();
        this.dialog = injector.get(app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]);
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"]);
        this.entidade = { id: null, nome: null, identificacao: null, assina: true, status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente };
    }
    ContratoPapelModalComponent.prototype.ngOnInit = function () { };
    ContratoPapelModalComponent.prototype.salvar = function () {
        var _this = this;
        this.message = null;
        this.papelService.novoPapelTipoDocumento(this.entidade, this.tipoDocumento).subscribe(function (responseApi) {
            _this.dialog.success("Papel salvo com sucesso!");
            _this.activeModal.close(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    ContratoPapelModalComponent.prototype.voltar = function () {
        this.activeModal.close('close');
    };
    ContratoPapelModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    Object.defineProperty(ContratoPapelModalComponent.prototype, "papel", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    ContratoPapelModalComponent.prototype.perfilUsuarioAdmin = function () {
        return this.shared.usuario.perfil == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_6__["PerfilEnum"].ROLE_ADMIN;
    };
    ContratoPapelModalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_3__["PapelService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoPapelModalComponent.prototype, "form", void 0);
    ContratoPapelModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-papel-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-papel-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-papel-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_config_papel_papel_service__WEBPACK_IMPORTED_MODULE_3__["PapelService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], ContratoPapelModalComponent);
    return ContratoPapelModalComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tcGFydGUtY29udGF0by9EOlxcQXNzaW5hLk5ldFxcUHJvamV0b3NcXEdpdEh1YlxcQXNzaW5hLk5ldC5Qb3J0YWxcXGFzc2luYS5uZXQud2ViLnBvcnRhbC12MS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FkYXN0cm9zXFxjb250cmF0b1xcbW9kYWxcXGNvbnRyYXRvLXBhcnRlLWNvbnRhdG9cXGNvbnRyYXRvLXBhcnRlLWNvbnRhdG8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLXBhcnRlLWNvbnRhdG8vY29udHJhdG8tcGFydGUtY29udGF0by1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tcGFydGUtY29udGF0by9jb250cmF0by1wYXJ0ZS1jb250YXRvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZm9ybS1ib2R5IHtcclxuXHJcblxyXG59XHJcblxyXG4uY29udHJvbC1sYWJlbCB7XHJcbiAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIG1hcmdpbjogNnB4IDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwPnNwYW4uc3dpdGNoIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XHJcbn1cclxuXHJcbi5zdy1pbnB1dC1ncm91cCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgfVxyXG5cclxuICAgLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLmJ0bi5idG4tZmlsZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICBjb2xvcjogI2IwYzRkZTtcclxuXHJcbiAgIC8vIEZpbGxlZCBTdGFyXHJcbiAgICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgIH1cclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICBtaW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRyb2wtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbC1yYWRpby1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDAgPiBzcGFuLnN3aXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xufVxuXG4uc3ctaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN3LWlucHV0LWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4ge1xuICB6LWluZGV4OiAyO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b25bZGlzYWJsZWRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4uYnRuLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnRuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjYjBjNGRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIuZmlsbGVkIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbWluLWhlaWdodDogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ContratoParteContatoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoParteContatoModalComponent", function() { return ContratoParteContatoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContratoParteContatoModalComponent = /** @class */ (function () {
    function ContratoParteContatoModalComponent(utilService, dialog, shared) {
        this.utilService = utilService;
        this.dialog = dialog;
        this.shared = shared;
        this.contato = {};
    }
    ContratoParteContatoModalComponent.prototype.ngOnInit = function () {
        if (this.instance) {
            this.contato = this.instance;
            //let listagem = this.parte.contatos.slice();
            //this.contatos = {listagem: listagem, dirty: false};
        }
        else {
            this.contato.tipoPessoa = "FISICA";
            this.contato.status = "ATIVO";
            this.contato.nome = "";
            this.contato.statusAssinatura = 'NAOASSINADO';
        }
    };
    ContratoParteContatoModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    ContratoParteContatoModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    ContratoParteContatoModalComponent.prototype.classLowerCase = function () {
        return this.shared.classLowerCase;
    };
    ContratoParteContatoModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoParteContatoModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoParteContatoModalComponent.prototype, "instance", void 0);
    ContratoParteContatoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-parte-contato-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-parte-contato-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-parte-contato-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ContratoParteContatoModalComponent);
    return ContratoParteContatoModalComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n\n.representantes-panel {\n  border: 1px solid #a6a6a5;\n  border-radius: 4px;\n  margin-top: 14px;\n  padding: 10px 10px 8px;\n}\n\n.representantes-panel legend {\n  color: #555;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  padding: 0 6px;\n  width: auto;\n}\n\n:host ::ng-deep .representantes-panel .form-section {\n  border-bottom: 0;\n  margin-bottom: 0.25rem !important;\n}\n\n:host ::ng-deep .representantes-panel .btn-group {\n  margin-bottom: 0.25rem;\n}\n\n:host ::ng-deep .representantes-panel button.btn {\n  background-color: #78d99a !important;\n  border-color: #78d99a !important;\n  font-size: 0.9rem;\n  padding: 0.45rem 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tcGFydGUvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhZGFzdHJvc1xcY29udHJhdG9cXG1vZGFsXFxjb250cmF0by1wYXJ0ZVxcY29udHJhdG8tcGFydGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLXBhcnRlL2NvbnRyYXRvLXBhcnRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhZGFzdHJvcy9jb250cmF0by9tb2RhbC9jb250cmF0by1wYXJ0ZS9EOlxcQXNzaW5hLk5ldFxcUHJvamV0b3NcXEdpdEh1YlxcQXNzaW5hLk5ldC5Qb3J0YWxcXGFzc2luYS5uZXQud2ViLnBvcnRhbC12MS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSDs7QURTQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ05IOztBRFNBO0VBQ0cscUJBQUE7QUNOSDs7QURTQTtFQUNHLFdBQUE7QUNOSDs7QURTQTtFQUNHLHNCQUFBO0FDTkg7O0FEU0E7RUFDRyxnQkFBQTtBQ05IOztBRFFHO0VBQ0csd0JBQUE7QUNOTjs7QURTRztFQUNHLFVBQUE7QUNQTjs7QURTTTtFQUNHLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQ1BUOztBRFVNO0VBQ0csb0JBQUE7QUNSVDs7QURhQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWSDs7QURZRztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWTjs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FDWEg7O0FEY0E7RUFDRyxtQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEg7O0FEY0E7RUFDRyxxQkFBQTtBQ1hIOztBRGNBO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWEg7O0FEY0c7RUFDRyxXQUFBO0FDWk47O0FEZ0JBO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0FDYkg7O0FEZ0JBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQ2JIOztBQ3RHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEeUdKOztBQ3RHQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRHlHSjs7QUN0R0E7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0FEeUdKOztBQ3RHQTtFQUNJLHNCQUFBO0FEeUdKOztBQ3RHQTtFQUNJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FEeUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tcGFydGUvY29udHJhdG8tcGFydGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mb3JtLWJvZHkge1xyXG5cclxuXHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbC1yYWRpby1jaGVjayB7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgbWFyZ2luOiA2cHggMDtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDA+c3Bhbi5zd2l0Y2gge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcclxufVxyXG5cclxuLnN3LWlucHV0LWdyb3VwIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xyXG4gICB9XHJcblxyXG4gICAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1maWxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1heC13aWR0aDogYXV0bztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcclxuICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgIGNvbG9yOiAjYjBjNGRlO1xyXG5cclxuICAgLy8gRmlsbGVkIFN0YXJcclxuICAgJi5maWxsZWQge1xyXG4gICAgICBjb2xvcjogZ29sZDtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ZCB7XHJcbiAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG4iLCIuY29udHJvbC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMCA+IHNwYW4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XG59XG5cbi5zdy1pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3ctaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi5idG4tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNiMGM0ZGU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3Rhci5maWxsZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMnB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xufVxuXG4ucmVwcmVzZW50YW50ZXMtcGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHg7XG59XG5cbi5yZXByZXNlbnRhbnRlcy1wYW5lbCBsZWdlbmQge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZXByZXNlbnRhbnRlcy1wYW5lbCAuZm9ybS1zZWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJlcHJlc2VudGFudGVzLXBhbmVsIC5idG4tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJlcHJlc2VudGFudGVzLXBhbmVsIGJ1dHRvbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhkOTlhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzc4ZDk5YSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMC40NXJlbSAwLjhyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL21vZGFsLnNjc3NcIjtcblxuLnJlcHJlc2VudGFudGVzLXBhbmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA4cHg7XG59XG5cbi5yZXByZXNlbnRhbnRlcy1wYW5lbCBsZWdlbmQge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZXByZXNlbnRhbnRlcy1wYW5lbCAuZm9ybS1zZWN0aW9uIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZXByZXNlbnRhbnRlcy1wYW5lbCAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJlcHJlc2VudGFudGVzLXBhbmVsIGJ1dHRvbi5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGQ5OWEgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICM3OGQ5OWEgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuOHJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContratoParteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoParteModalComponent", function() { return ContratoParteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/enum/tipoPessoaEnum */ "./src/app/model/enum/tipoPessoaEnum.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/cadastro/cadastro/contrato.service */ "./src/app/services/cadastro/cadastro/contrato.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContratoParteModalComponent = /** @class */ (function () {
    function ContratoParteModalComponent(utilService, contratoService, dialog) {
        this.utilService = utilService;
        this.contratoService = contratoService;
        this.dialog = dialog;
        this.parte = {};
        this.partes = [];
        this.contratoParteContatoForm = ContratoParteModalComponent_1;
        this.contatos = { listagem: [], dirty: false };
        this.titulosPartesContato = ['Ação', 'Representante', 'CPF', 'E-mail', 'Assina como'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.tipoPessoaList = [];
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_5__["AppInjector"].getInjector();
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]);
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"]);
    }
    ContratoParteModalComponent_1 = ContratoParteModalComponent;
    ContratoParteModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var opcoesTipoPessoa = this.utilService.enumToKeyValue(app_model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_4__["TipoPessoaEnum"]);
        opcoesTipoPessoa.forEach(function (opcao) {
            _this.tipoPessoaList.push({ item_id: opcao.value, item_text: opcao.label });
        });
        if (this.instance) {
            this.cpfCnpjAnterior = this.instance.cpfCnpj;
            this.parte = this.instance;
            if (this.parte.contatos != undefined) {
                var listagem = this.parte.contatos.slice();
                this.contatos = { listagem: listagem, dirty: false };
            }
            if (this.parte.papel != undefined) {
                this.SelecionaPapeis(this.parte.papel);
            }
        }
        else {
            this.cpfCnpjAnterior = "";
            this.parte.requisitoAssinatura = null;
            this.parte.tipoPessoa = "FISICA";
            this.parte.statusAssinatura = 'NAOLIBERADO';
            //this.parte.contrato = { statusContrato: 'NAOLIBERADOASSINTAURA' };
            this.parte.status = 'ATIVO';
            this.parte.duplicatas = false;
        }
        this.alterouCpfCNPJ();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false
        };
    };
    ContratoParteModalComponent.prototype.SelecionaPapeis = function (papel) {
        var _this = this;
        if (!papel) {
            return;
        }
        papel.forEach(function (value) {
            var papelSelecionado = _this.getPapel(value);
            if (!papelSelecionado) {
                return;
            }
            var pesquisa = _this.comboContratoPapel.filter(function (p) { return p.id == papelSelecionado.id; });
            if (pesquisa.length > 0) {
                var itemJaSelecionado = _this.selectedItems.find(function (item) { return item.item_id == papelSelecionado.id; });
                if (!itemJaSelecionado) {
                    var item = { item_id: papelSelecionado.id, item_text: papelSelecionado.nome };
                    _this.selectedItems.push(item);
                }
            }
        });
    };
    ContratoParteModalComponent.prototype.PreencheDadosPessoa = function (pessoa) {
        var _this = this;
        if (pessoa == null) {
            return;
        }
        this.parte.nomeRazaoSocial = pessoa.nomeRazaoSocial;
        this.parte.email = pessoa.email;
        var lstCelular = [{ numero: "" }];
        if (pessoa.pessoaTelefone != null) {
            var telefoneComTipo = pessoa.pessoaTelefone.filter(function (t) { return t.tipoTelefone != null; });
            lstCelular = telefoneComTipo.filter(function (t) { return t.tipoTelefone.identificacao == "CELULAR"; });
        }
        if (lstCelular.length > 0)
            this.parte.celular = lstCelular[0].numero;
        if (this.selectedItems.length == 0) {
            this.selectedItems = [];
            if (pessoa.papel !== undefined) {
                this.SelecionaPapeis(pessoa.papel);
            }
        }
        if (pessoa.pessoasFisica != undefined) {
            var listagem = pessoa.pessoasFisica.slice();
            var listagem2_1 = [];
            if (this.adicionarSomenteUsuario()) {
                var listagemFiltro = listagem.filter(function (item) { return item.pessoaFisica.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj; });
                if (listagemFiltro.length >= 1) {
                    listagem = listagemFiltro;
                }
            }
            listagem.forEach(function (item) {
                var listaPapel = [];
                item.papel.forEach(function (pap) {
                    var papel = _this.getPapel(pap);
                    if (papel && _this.papelPermitido(papel.id)) {
                        var itemPapel = { id: "", papel: papel };
                        listaPapel.push(itemPapel);
                    }
                });
                if (item.pessoaFisica.pessoaTelefone != null) {
                    var telefoneComTipo = pessoa.pessoaTelefone.filter(function (t) { return t.tipoTelefone != null; });
                    lstCelular = telefoneComTipo.filter(function (t) { return t.tipoTelefone.identificacao == "CELULAR"; });
                }
                else {
                    lstCelular = [{ numero: "" }];
                }
                var celular = "";
                if (lstCelular.length > 0)
                    celular = lstCelular[0].numero;
                if (listaPapel.length > 0) {
                    var itemContato = {
                        id: "",
                        status: "ATIVO",
                        idPessoa: item.pessoaFisica.id,
                        tipoPessoa: item.pessoaFisica.tipoPessoa,
                        cpfCnpj: item.pessoaFisica.cpfCnpj,
                        nomeRazaoSocial: item.pessoaFisica.nomeRazaoSocial, email: item.pessoaFisica.email,
                        celular: celular,
                        requisitoAssinatura: "",
                        papel: listaPapel
                        //contrato: { statusContrato: this.parte.contrato.statusContrato }
                    };
                    listagem2_1.push(itemContato);
                }
            });
            this.contatos = { listagem: listagem2_1, dirty: false };
            this.parte.contatos = this.contatos.listagem;
        }
    };
    ContratoParteModalComponent.prototype.alterouCpfCNPJ = function () {
        var _this = this;
        this.partes.length = 0;
        if (this._dadosComplementares['comboPreRequisito']) {
            this._dadosComplementares['comboPreRequisito'].forEach(function (value) {
                if (value.tipoPessoa == 'FISICA') {
                    if (_this.parte.cpfCnpj != value.cpfCnpj) { //&& this.parte.duplicatas == value.duplicatas) {
                        if (!_this.partes.includes(value))
                            _this.partes.push(value);
                    }
                }
                else {
                    value.contatos.forEach(function (contato) {
                        if (_this.parte.cpfCnpj != contato.cpfCnpj) { // && this.parte.duplicatas == contato.duplicatas) {
                            if (!_this.partes.includes(contato))
                                _this.partes.push(contato);
                        }
                    });
                }
            });
        }
        if (this.parte.cpfCnpj != null && this.parte.cpfCnpj != this.cpfCnpjAnterior) {
            var ContratoParteRequest = {
                contratoParte: this.parte,
                usuario: this.shared.usuario,
                clienteSelecionado: this.shared.clienteSelecionado.cliente.id
            };
            this.contratoService.getDadosPessoa(ContratoParteRequest).subscribe(function (responseApi) {
                _this.PreencheDadosPessoa(responseApi);
            }, function (err) {
                _this.errorHandler.handle(err);
            });
        }
    };
    ContratoParteModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    Object.defineProperty(ContratoParteModalComponent.prototype, "contratoParteContatoModal", {
        get: function () {
            return this.contatos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContratoParteModalComponent.prototype, "dadosComplementares", {
        get: function () {
            var dadosComplementares = {
                comboPreRequisito: this.partes,
                comboContratoPapel: this.comboContratoPapel,
                dropdownList: this.dropdownList
            };
            return dadosComplementares;
        },
        set: function (dadosComplementares) {
            var _this = this;
            this._dadosComplementares = dadosComplementares;
            if (dadosComplementares.comboContratoPapel != undefined) {
                this.dropdownList = [];
                dadosComplementares.comboContratoPapel.forEach(function (opcao) {
                    _this.dropdownList.push({ item_id: opcao.id, item_text: opcao.label });
                });
            }
            //passa para a parte fisica da pessoa juridica
            if (dadosComplementares.dropdownList != undefined) {
                this.dropdownList = dadosComplementares.dropdownList;
            }
            this.selectedItems = this.selectedItems.filter(function (item) { return _this.papelPermitido(item.item_id); });
            this.alterouCpfCNPJ();
        },
        enumerable: true,
        configurable: true
    });
    ContratoParteModalComponent.prototype.adicionouContratoContatoParte = function () {
        this.parte.contatos = this.contatos.listagem;
    };
    ContratoParteModalComponent.prototype.antesSalvarEvent = function () {
        var _this = this;
        var lstPapel = [];
        this.selectedItems.forEach(function (papel) {
            var achou = false;
            if (_this.parte.papel != undefined) {
                _this.parte.papel.forEach(function (value) {
                    if (papel.item_id == value.papel.id) {
                        lstPapel.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                _this.comboContratoPapel.forEach(function (value) {
                    if (papel.item_id == value.id) {
                        lstPapel.push({ id: "", papel: { id: value.id, nome: value.label, descricao: value.label } });
                        return;
                    }
                });
            }
        });
        this.parte.papel = lstPapel;
    };
    ContratoParteModalComponent.prototype.representantesValidos = function () {
        return this.parte.tipoPessoa != 'JURIDICA' ||
            (this.contatos && this.contatos.listagem && this.contatos.listagem.length > 0);
    };
    ContratoParteModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    ContratoParteModalComponent.prototype.classLowerCase = function () {
        return this.shared.classLowerCase;
    };
    ContratoParteModalComponent.prototype.adicionarSomenteUsuario = function () {
        if (this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["SOMENTE_INCLUIR_USUARIO_NO_CONTRATO"])) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(ContratoParteModalComponent.prototype, "comboContratoPapel", {
        get: function () {
            return this._dadosComplementares && this._dadosComplementares.comboContratoPapel ?
                this._dadosComplementares.comboContratoPapel : [];
        },
        enumerable: true,
        configurable: true
    });
    ContratoParteModalComponent.prototype.papelPermitido = function (papelId) {
        return this.comboContratoPapel.some(function (papel) { return papel.id == papelId; });
    };
    ContratoParteModalComponent.prototype.getPapel = function (item) {
        if (!item) {
            return null;
        }
        var papel = item.papel ? item.papel : item;
        if (!papel || !papel.id) {
            return null;
        }
        return {
            id: papel.id,
            nome: papel.nome || papel.label || papel.descricao || papel.identificacao || "Papel"
        };
    };
    ContratoParteModalComponent.prototype.desabilitarCampos = function () {
        if (this.parte.contrato != undefined && this.parte.contrato != null &&
            this.parte.contrato.statusContrato != undefined && this.parte.contrato.statusContrato != null) {
            return this.parte.contrato.statusContrato != 'NAOLIBERADOASSINTAURA';
        }
        else {
            return false;
        }
    };
    ContratoParteModalComponent.prototype.existeContrato = function () {
        if (this.parte.contrato != undefined && this.parte.contrato != null) {
            return true;
        }
        else {
            return false;
        }
    };
    var ContratoParteModalComponent_1;
    ContratoParteModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_8__["ContratoService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoParteModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoParteModalComponent.prototype, "instance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoParteModalComponent.prototype, "instanceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContratoParteModalComponent.prototype, "titulo", void 0);
    ContratoParteModalComponent = ContratoParteModalComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-parte-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-parte-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-parte-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_8__["ContratoService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ContratoParteModalComponent);
    return ContratoParteModalComponent;
}());



/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbW9kYWwvY29udHJhdG8tdGlwby1kb2N1bWVudG8vRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhZGFzdHJvc1xcY29udHJhdG9cXG1vZGFsXFxjb250cmF0by10aXBvLWRvY3VtZW50b1xcY29udHJhdG8tdGlwby1kb2N1bWVudG8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FkYXN0cm9zL2NvbnRyYXRvL21vZGFsL2NvbnRyYXRvLXRpcG8tZG9jdW1lbnRvL2NvbnRyYXRvLXRpcG8tZG9jdW1lbnRvLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFNBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTkg7O0FEU0E7RUFDRyxxQkFBQTtBQ05IOztBRFNBO0VBQ0csV0FBQTtBQ05IOztBRFNBO0VBQ0csc0JBQUE7QUNOSDs7QURTQTtFQUNHLGdCQUFBO0FDTkg7O0FEUUc7RUFDRyx3QkFBQTtBQ05OOztBRFNHO0VBQ0csVUFBQTtBQ1BOOztBRFNNO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDUFQ7O0FEVU07RUFDRyxvQkFBQTtBQ1JUOztBRGFBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRFlHO0VBQ0csa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNYSDs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSDs7QURjQTtFQUNHLHFCQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNYSDs7QURjRztFQUNHLFdBQUE7QUNaTjs7QURnQkE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNiSDs7QURnQkE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FDYkgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhZGFzdHJvcy9jb250cmF0by9tb2RhbC9jb250cmF0by10aXBvLWRvY3VtZW50by9jb250cmF0by10aXBvLWRvY3VtZW50by1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvcm0tYm9keSB7XHJcblxyXG5cclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhYmVsLXJhZGlvLWNoZWNrIHtcclxuICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBtYXJnaW46IDZweCAwO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaDEwMD5zcGFuLnN3aXRjaCB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xyXG59XHJcblxyXG4uc3ctaW5wdXQtZ3JvdXAge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgIC5pbnB1dC1ncm91cC1idG4ge1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbi5idG4uYnRuLWZpbGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXgge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtZml4ZWQge1xyXG4gICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYWxlcnQtY3VzdG9tIC5hbGVydCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIge1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgY29sb3I6ICNiMGM0ZGU7XHJcblxyXG4gICAvLyBGaWxsZWQgU3RhclxyXG4gICAmLmZpbGxlZCB7XHJcbiAgICAgIGNvbG9yOiBnb2xkO1xyXG4gICB9XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgcGFkZGluZzogMC40cmVtO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgbWF4LWhlaWdodDogMzJweDtcclxuICAgbWluLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuXHJcbiIsIi5jb250cm9sLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwID4gc3Bhbi5zd2l0Y2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5oYVNlbGVjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZTtcbn1cblxuLnN3LWlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zdy1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIHtcbiAgei1pbmRleDogMjtcbn1cbi5zdy1pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLmJ0bi1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ0bi5idG4tZmlsZSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2IwYzRkZTtcbn1cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyLmZpbGxlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ContratoTipoDocumentoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoTipoDocumentoModalComponent", function() { return ContratoTipoDocumentoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/config/tipoDocumento/tipoDocumento.service */ "./src/app/services/config/tipoDocumento/tipoDocumento.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContratoTipoDocumentoModalComponent = /** @class */ (function () {
    function ContratoTipoDocumentoModalComponent(route, tipoDocumentoService, shared, activeModal) {
        this.tipoDocumentoService = tipoDocumentoService;
        this.shared = shared;
        this.activeModal = activeModal;
        this.modal = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__["AppInjector"].getInjector();
        this.dialog = injector.get(app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]);
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"]);
        this.entidade = { tipoDocumento: { id: null, nome: null, identificacao: null, assina: true, status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente },
            cliente: this.shared.clienteSelecionado.cliente, partes: [] };
    }
    ContratoTipoDocumentoModalComponent.prototype.ngOnInit = function () { };
    ContratoTipoDocumentoModalComponent.prototype.salvar = function () {
        var _this = this;
        this.message = null;
        this.tipoDocumentoService.save(this.entidade).subscribe(function (responseApi) {
            _this.dialog.success("Tipo Documento salvo com sucesso!");
            _this.activeModal.close(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    ContratoTipoDocumentoModalComponent.prototype.voltar = function () {
        this.activeModal.close('close');
    };
    ContratoTipoDocumentoModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    Object.defineProperty(ContratoTipoDocumentoModalComponent.prototype, "tipoDocumento", {
        get: function () {
            return this.entidade.tipoDocumento;
        },
        set: function (data) {
            this.entidade.tipoDocumento = data;
        },
        enumerable: true,
        configurable: true
    });
    ContratoTipoDocumentoModalComponent.prototype.perfilUsuarioAdmin = function () {
        return this.shared.usuario.perfil == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_6__["PerfilEnum"].ROLE_ADMIN;
    };
    ContratoTipoDocumentoModalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_3__["TipoDocumentoService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContratoTipoDocumentoModalComponent.prototype, "form", void 0);
    ContratoTipoDocumentoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato-tipo-documento-modal',
            template: __webpack_require__(/*! raw-loader!./contrato-tipo-documento-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.html"),
            styles: [__webpack_require__(/*! ./contrato-tipo-documento-modal.component.scss */ "./src/app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_config_tipoDocumento_tipoDocumento_service__WEBPACK_IMPORTED_MODULE_3__["TipoDocumentoService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], ContratoTipoDocumentoModalComponent);
    return ContratoTipoDocumentoModalComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.dashboard-home {\n  height: calc(100vh - 112px);\n  max-width: 100%;\n  overflow: hidden;\n  width: 100%;\n}\n\n.dashboard-home img {\n  display: block;\n  height: auto;\n  max-width: 100%;\n  width: 100%;\n}\n\n.dashboard-home .mobile {\n  margin-top: 0.75rem;\n}\n\n:host ::ng-deep .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1);\n}\n\n:host ::ng-deep .ct-label {\n  font-size: 0.9rem;\n}\n\n/*:host ::ng-deep .lineArea .ct-series-a .ct-area {\n    fill-opacity: 0.7;\n    fill:url($dashboard-gradient-path +  #gradient1) !important;\n}\n\n:host ::ng-deep .lineArea .ct-series-b .ct-area {\n    fill: url($dashboard-gradient-path +  #gradient) !important;\n    fill-opacity: 0.9;\n}\n:host ::ng-deep .lineArea .ct-line{\n    stroke-width: 0px;\n}\n:host ::ng-deep .lineArea .ct-point {\n    stroke-width: 0px;\n}*/\n\n:host ::ng-deep .WidgetlineChart .ct-point {\n  stroke-width: 0px;\n}\n\n:host ::ng-deep .WidgetlineChart .ct-line {\n  stroke: #fff;\n}\n\n:host ::ng-deep .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2);\n}\n\n:host ::ng-deep .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except\n  for the spread property */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRE1BOzs7Ozs7Ozs7Ozs7OztFQUFBOztBQW9CQTtFQUNJLGlCQUFBO0FDUko7O0FEVUE7RUFDSSxZQUFBO0FDUEo7O0FEV0E7RUFDSSxxQkFBQTtFQUNDLGdDQUFBO0FDUkw7O0FEV0E7RUFDSSw0REFBQTtFQUNRLG9EQUFBO0VBQXFEOzJCQUFBO0FDTmpFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhc2hib2FyZC1ob21lIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmQtaG9tZSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmQtaG9tZSAubW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbi8qOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbiAgICBmaWxsOnVybCgkZGFzaGJvYXJkLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn0qL1xyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgRW5kc1xyXG5cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzXHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhc2hib2FyZC1ob21lIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGFzaGJvYXJkLWhvbWUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRhc2hib2FyZC1ob21lIC5tb2JpbGUge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LWdyaWQge1xuICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XG4gIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi8qOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGwtb3BhY2l0eTogMC43O1xuICAgIGZpbGw6dXJsKCRkYXNoYm9hcmQtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1saW5le1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufSovXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGg6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmUge1xuICBzdHJva2U6ICNmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnRzaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC44KSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdFxuICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/desenvolvimento/desenvolvimento.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/desenvolvimento/desenvolvimento.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVzZW52b2x2aW1lbnRvL2Rlc2Vudm9sdmltZW50by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/desenvolvimento/desenvolvimento.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/desenvolvimento/desenvolvimento.component.ts ***!
  \*************************************************************************/
/*! exports provided: DesenvolvimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesenvolvimentoComponent", function() { return DesenvolvimentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DesenvolvimentoComponent = /** @class */ (function () {
    function DesenvolvimentoComponent() {
    }
    DesenvolvimentoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desenvolvimento',
            template: __webpack_require__(/*! raw-loader!./desenvolvimento.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/desenvolvimento/desenvolvimento.component.html"),
            styles: [__webpack_require__(/*! ./desenvolvimento.component.scss */ "./src/app/components/desenvolvimento/desenvolvimento.component.scss")]
        })
    ], DesenvolvimentoComponent);
    return DesenvolvimentoComponent;
}());



/***/ }),

/***/ "./src/app/components/padrao/lista/padrao-lista.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/padrao/lista/padrao-lista.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFkcmFvL2xpc3RhL3BhZHJhby1saXN0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/padrao/lista/padrao-lista.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/padrao/lista/padrao-lista.component.ts ***!
  \*******************************************************************/
/*! exports provided: PadraoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadraoListaComponent", function() { return PadraoListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var _services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var _services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var _services_util_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PadraoListaComponent = /** @class */ (function () {
    function PadraoListaComponent() {
        var _this = this;
        this.listagem = [];
        this.filtros = [];
        this.campoFiltro = [];
        this.listCombos = [];
        this.selecionarLinha = function (objeto) {
            this.objetoSelecionado = objeto;
        };
        this.filtroSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var injector = _services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.dialog = injector.get(_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]);
        this.httpService = injector.get(_services_util_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]);
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]);
        this.shared = injector.get(_services_util_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        this.utilService = injector.get(_services_util_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"]);
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]);
        this.gerarAssinatura = false;
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"].getInstance();
        this.filtroSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(800))
            .subscribe(function (model) {
            _this.filtrar();
        });
        this.opcoesStatus =
            this.utilService.enumToKeyValue(_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"]);
    }
    PadraoListaComponent.prototype.ngOnInit = function () {
        this.filtrar();
        this.additionalFormInit();
    };
    PadraoListaComponent.prototype.additionalFormInit = function () {
    };
    PadraoListaComponent.prototype.findAll = function (pageable, filtro) {
        var _this = this;
        this.loading.show();
        this.objetoSelecionado = null;
        this.httpService.findAll(pageable, filtro).subscribe(function (responseApi) {
            if (_this.listagem.length == 0) {
                _this.listagem = responseApi['data']['content'];
            }
            else {
                _this.listagem = _this.listagem.concat(responseApi['data']['content']);
            }
            _this.pages = new Array(responseApi['data']['totalPages']);
            var order = _this.page.order;
            _this.page = responseApi['data'];
            _this.page.order = order;
            _this.afterRetrieveData();
            _this.loading.hide();
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    PadraoListaComponent.prototype.afterRetrieveData = function () { };
    PadraoListaComponent.prototype.editar = function (consultar) {
        if (!this.objetoSelecionado) {
            this.dialog.warning('Selecione um registro');
            return;
        }
        var navigationExtras = {
            skipLocationChange: true,
            queryParams: {
                "consultar": consultar != undefined ? consultar : false
            }
        };
        this.router.navigate([this.rota + "/novo", this.objetoSelecionado.id], navigationExtras);
    };
    PadraoListaComponent.prototype.incluir = function () {
        this.router.navigate([this.rota + "/novo"], { skipLocationChange: true });
    };
    PadraoListaComponent.prototype.detalhar = function (consultar) {
        if (!this.objetoSelecionado) {
            this.dialog.warning('Selecione um registro');
            return;
        }
        var navigationExtras = {
            skipLocationChange: true,
            queryParams: {
                "consultar": consultar != undefined ? consultar : false
            }
        };
        this.router.navigate([this.rota + "/detalhe", this.objetoSelecionado.id], navigationExtras);
    };
    PadraoListaComponent.prototype.filtrar = function () {
        this.findAll(this.page, this.filtro);
    };
    PadraoListaComponent.prototype.beforeExclusao = function () {
        return true;
    };
    PadraoListaComponent.prototype.afterExclusao = function (response) { };
    ;
    PadraoListaComponent.prototype.excluir = function () {
        var _this = this;
        if (!this.objetoSelecionado) {
            this.dialog.warning('Selecione um registro');
            return;
        }
        this.dialog.confirmDelete('Deseja excluir este registro ?')
            .then(function (candelete) {
            _this.loading.show();
            if (candelete && _this.beforeExclusao()) {
                _this.message = {};
                _this.httpService.delete(_this.objetoSelecionado.id).subscribe(function (responseApi) {
                    _this.afterExclusao(_this.objetoSelecionado);
                    _this.loading.hide();
                    _this.dialog.success('Registro excluído com sucesso!');
                    var index = _this.listagem.findIndex(function (d) { return d.id === _this.objetoSelecionado.id; });
                    _this.listagem.splice(index, 1);
                }, function (err) {
                    _this.errorHandler.handle(err);
                });
            }
            else {
                _this.loading.hide();
            }
        });
    };
    PadraoListaComponent.prototype.changePage = function (event) {
        this.page.number = event.page;
        this.page.size = event.size;
        this.filtrar();
    };
    PadraoListaComponent.prototype.onSorted = function ($event) {
        this.listagem = [];
        this.page.number = 0;
        this.page.order = $event.sortColumn + ',' + $event.sortDirection;
        this.filtrar();
    };
    PadraoListaComponent.prototype.filtrando = function () {
        this.listagem = [];
        this.page.number = 0;
        this.filtroSubject.next();
    };
    PadraoListaComponent.prototype.legendaGrid = function (pitem) {
        var estilo = '';
        if (this.objetoSelecionado) {
            if (pitem.id == this.objetoSelecionado.id) {
                estilo = "linhaSelecionada";
            }
        }
        if (pitem.status != undefined && pitem.status == _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"].INATIVO) {
            estilo += ' red';
        }
        return estilo;
    };
    PadraoListaComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    PadraoListaComponent.prototype.afterRetrieveCombo = function () { };
    ;
    PadraoListaComponent.prototype.buscarCombos = function () {
        var _this = this;
        this.httpService.buscarCombos().subscribe(function (responseApi) {
            _this.listCombos = responseApi.data.listCombos;
            _this.afterRetrieveCombo();
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    PadraoListaComponent.prototype.onScroll = function () {
        if (this.page.totalPages != null && this.page.number + 1 >= this.page.totalPages) {
            return;
        }
        this.page.number++;
        this.filtrar();
    };
    PadraoListaComponent.prototype.perfilUsuarioAdmin = function () {
        return this.shared.usuario.perfil == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_12__["PerfilEnum"].ROLE_ADMIN;
    };
    PadraoListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! raw-loader!./padrao-lista.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/padrao/lista/padrao-lista.component.html"),
            styles: [__webpack_require__(/*! ./padrao-lista.component.scss */ "./src/app/components/padrao/lista/padrao-lista.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PadraoListaComponent);
    return PadraoListaComponent;
}());



/***/ }),

/***/ "./src/app/components/padrao/novo/padrao-novo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/padrao/novo/padrao-novo.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFkcmFvL25vdm8vcGFkcmFvLW5vdm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/padrao/novo/padrao-novo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/padrao/novo/padrao-novo.component.ts ***!
  \*****************************************************************/
/*! exports provided: PadraoNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadraoNovoComponent", function() { return PadraoNovoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/logger.service */ "./src/app/services/util/logger.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PadraoNovoComponent = /** @class */ (function () {
    function PadraoNovoComponent(route) {
        this.route = route;
        this.formulario = '';
        this.consultando = false;
        this.iniciado = false;
        this.modalView = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_7__["AppInjector"].getInjector();
        this.dialog = injector.get(app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]);
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]);
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]);
        this.utilService = injector.get(app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]);
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"].getInstance();
    }
    //@HostListener('window:beforeunload')
    PadraoNovoComponent.prototype.canDeactivate = function () {
        return !this.formDirty || this.consultando;
    };
    PadraoNovoComponent.prototype.ngOnInit = function () {
        this.rota = this.rota + "/lista";
        var id = this.route.snapshot.params['id'];
        if (id !== undefined) {
            this.findById(id);
        }
        else {
            if (this.entidade == null) {
                this.getNew();
            }
            this.novoRegistro();
            this.iniciado = true;
        }
        this.additionalFormInit();
    };
    PadraoNovoComponent.prototype.novoRegistro = function () { };
    PadraoNovoComponent.prototype.additionalFormInit = function () { };
    PadraoNovoComponent.prototype.getNew = function () {
        var _this = this;
        this.loading.show();
        this.httpService.getNew().subscribe(function (responseApi) {
            _this.entidade = responseApi.data;
            _this.iniciado = true;
            _this.afterRetrieveData();
            _this.loading.hide();
        }, function (err) {
            _this.iniciado = true;
            _this.errorHandler.handle(err);
        });
    };
    PadraoNovoComponent.prototype.findById = function (id) {
        var _this = this;
        this.loading.show();
        this.httpService.findById(id).subscribe(function (responseApi) {
            _this.entidade = responseApi.data;
            _this.iniciado = true;
            if (_this.route.queryParams) {
                _this.route.queryParams.subscribe(function (params) {
                    _this.consultando = params["consultar"] == 'true';
                    _this.afterRetrieveData();
                    _this.desabilita(_this.consultando);
                });
            }
            else {
                _this.afterRetrieveData();
                _this.desabilita(_this.consultando);
            }
            _this.loading.hide();
        }, function (err) {
            _this.iniciado = true;
            _this.errorHandler.handle(err);
        });
    };
    PadraoNovoComponent.prototype.afterRetrieveData = function () { };
    PadraoNovoComponent.prototype.salvar = function (validar) {
        var _this = this;
        this.message = null;
        if (validar == undefined || validar == true) {
            this.checkCustomErrors();
            if (this.form.invalid) {
                app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].setAsTouched(this.form.form);
                this.showMessage({
                    type: 'danger',
                    text: "Existem informações inválidas ou nulas. Favor verificar!"
                });
                return;
            }
            if (!this.validateForm()) {
                return;
            }
        }
        this.loading.show();
        this.beforeSave();
        this.httpService.saveUpdate(this.entidade).subscribe(function (responseApi) {
            if (_this.afterSave(responseApi)) {
                app_services_util_logger_service__WEBPACK_IMPORTED_MODULE_4__["LOGGER"].log('saveUpdate', responseApi);
            }
            else {
                _this.loading.hide();
                _this.cancelar();
                _this.dialog.success((_this.formulario ? _this.formulario : 'Registro') + " salvo com sucesso!");
            }
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    PadraoNovoComponent.prototype.checkCustomErrors = function () { };
    ;
    PadraoNovoComponent.prototype.validateForm = function () { return true; };
    ;
    PadraoNovoComponent.prototype.beforeSave = function () { };
    PadraoNovoComponent.prototype.afterSave = function (response) { return false; };
    ;
    PadraoNovoComponent.prototype.afterExclusao = function (entidade) { };
    ;
    PadraoNovoComponent.prototype.excluir = function () {
        var _this = this;
        this.message = null;
        this.dialog.confirmDelete('Deseja excluir este registro ?')
            .then(function (candelete) {
            _this.loading.show();
            if (candelete) {
                var registro = _this.entidade.numero;
                _this.httpService.delete(_this.entidade.id).subscribe(function (responseApi) {
                    _this.afterExclusao(_this.entidade);
                    _this.loading.hide();
                    _this.cancelar();
                    _this.dialog.success((_this.formulario ? _this.formulario : 'Registro') + " exclu\u00EDdo com sucesso!");
                }, function (err) {
                    _this.errorHandler.handle(err);
                });
            }
            else {
                _this.loading.hide();
            }
        });
    };
    PadraoNovoComponent.prototype.cancelar = function () {
        var _this = this;
        this.message = null;
        //this.form.resetForm(this.entidade);
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.controls[key].markAsPristine();
        });
        this.voltar();
    };
    PadraoNovoComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    Object.defineProperty(PadraoNovoComponent.prototype, "editando", {
        get: function () {
            return !this.consultando && Boolean(this.entidade && this.entidade.id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PadraoNovoComponent.prototype, "inserindo", {
        get: function () {
            return !this.consultando && Boolean(this.entidade && this.entidade.id == null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PadraoNovoComponent.prototype, "podeVoltar", {
        get: function () {
            return !this.editando && Boolean(this.form.pristine);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PadraoNovoComponent.prototype, "formDirty", {
        get: function () {
            return this.form && this.form.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PadraoNovoComponent.prototype, "formInvalid", {
        get: function () {
            return this.form && this.form.invalid;
        },
        enumerable: true,
        configurable: true
    });
    PadraoNovoComponent.prototype.voltar = function () {
        this.router.navigate([this.rota], { skipLocationChange: true });
    };
    PadraoNovoComponent.prototype.desabilita = function (sim) {
        var _this = this;
        if (sim == true) {
            Object.keys(this.form.controls).forEach(function (key) {
                //console.log(this.form.controls[key]);
                _this.form.controls[key].disable();
            });
        }
    };
    PadraoNovoComponent.prototype.clienteSistema = function () {
        return this.shared.clienteSelecionado.cliente.segmento.identificacao == 'SISTEMA';
    };
    PadraoNovoComponent.prototype.mostraObservador = function () {
        if (this.shared.clienteSelecionado != null &&
            this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["MOSTRAR_OBSERVADOR_NO_CONTRATO"])) {
            return true;
        }
        else {
            return false;
        }
    };
    PadraoNovoComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    PadraoNovoComponent.prototype.perfilUsuarioAdmin = function () {
        return this.shared.usuario.perfil == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_10__["PerfilEnum"].ROLE_ADMIN;
    };
    PadraoNovoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], PadraoNovoComponent.prototype, "form", void 0);
    PadraoNovoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! raw-loader!./padrao-novo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/padrao/novo/padrao-novo.component.html"),
            styles: [__webpack_require__(/*! ./padrao-novo.component.scss */ "./src/app/components/padrao/novo/padrao-novo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PadraoNovoComponent);
    return PadraoNovoComponent;
}());



/***/ }),

/***/ "./src/app/components/registrar/registrar-cliente.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/registrar/registrar-cliente.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blur3{-webkit-filter: blur(3px);\r\n    -moz-filter: blur(3px);\r\n    -o-filter: blur(3px);\r\n    -ms-filter: blur(3px);\r\n    filter: blur(3px);}\r\n\r\n.content-header{\r\n    font-weight: normal;\r\n    letter-spacing: 0.5px;\r\n    font-size: 1.6rem;\r\n    margin-top: 0.8rem;\r\n    margin-bottom: 0.25rem;\r\n}\r\n\r\n.logo-img{\r\n    height: 40px;\r\n    display: inline-block;\r\n\r\n}\r\n\r\n.textCenter{\r\n    text-align: center;\r\n}\r\n\r\n.rgie{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXIvcmVnaXN0cmFyLWNsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLHlCQUF5QjtJQUM1QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQzs7QUFFdEI7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhci9yZWdpc3RyYXItY2xpZW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXIzey13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAtbW96LWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgLW8tZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAtbXMtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTt9XHJcblxyXG4uY29udGVudC1oZWFkZXJ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubG9nby1pbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcblxyXG4udGV4dENlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJnaWV7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/registrar/registrar-cliente.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/registrar/registrar-cliente.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarClienteComponent", function() { return RegistrarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/enum/tipoPessoaEnum */ "./src/app/model/enum/tipoPessoaEnum.ts");
/* harmony import */ var app_services_registrar_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/registrar/registro.service */ "./src/app/services/registrar/registro.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegistrarClienteComponent = /** @class */ (function () {
    function RegistrarClienteComponent(route, registroService, errorHandler, loading, utilService) {
        this.registroService = registroService;
        this.errorHandler = errorHandler;
        this.loading = loading;
        this.utilService = utilService;
        this.entidade = null;
        this.cadastrado = null;
        this.clienteNovo = true;
        this.usuarioNovo = true;
        this.recaptcha2 = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_9__["AppInjector"].getInjector();
        this.dialog = injector.get(app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]);
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]);
    }
    RegistrarClienteComponent.prototype.ngOnInit = function () {
        this.cadastrado = false;
        this.entidade = {
            idPlano: "C526767A-8789-4C55-9E44-6C9B7FC83B52",
            nomeRazaoSocial: null,
            rgie: null,
            cpfCnpj: null,
            nomeRazaoSocialResponsavel: null,
            cpfCnpjResponsavel: null,
            tipoPessoa: _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_3__["TipoPessoaEnum"].label(_model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_3__["TipoPessoaEnum"].FISICA),
            email: null,
            celular: null,
            indicacao: null
        };
    };
    Object.defineProperty(RegistrarClienteComponent.prototype, "cliente", {
        get: function () {
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    RegistrarClienteComponent.prototype.salvar = function () {
        // if(!this.recaptcha2) {
        //   this.showMessage({
        //     type: 'danger',
        //     text: "Desafio captcha inválidao. Favor verificar!"
        //   });
        //   return;
        // }
        var _this = this;
        if (this.form.invalid) {
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].setAsTouched(this.form.form);
            this.showMessage({
                type: 'danger',
                text: "Existem informações inválidas ou nulas. Favor verificar!"
            });
            return;
        }
        this.loading.show();
        this.registroService.registar(this.entidade).subscribe(function (responseApi) {
            _this.cadastrado = responseApi;
            _this.loading.hide();
        }, function (err) {
            _this.cadastrado = false;
            _this.errorHandler.handle(err);
            _this.loading.hide();
        });
    };
    RegistrarClienteComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    RegistrarClienteComponent.prototype.alterouCliente = function (cpfCnpj) {
        var _this = this;
        this.registroService.cliente(cpfCnpj).subscribe(function (responseApi) {
            if (responseApi == null) {
                _this.clienteNovo = true;
            }
            else {
                _this.clienteNovo = false;
                _this.showMessage({
                    type: 'danger',
                    text: 'Cliente já cadastrado em nosso sistema.'
                });
            }
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    RegistrarClienteComponent.prototype.handleSuccess = function () {
        this.recaptcha2 = true;
    };
    RegistrarClienteComponent.prototype.handleLoad = function () {
        this.recaptcha2 = false;
    };
    RegistrarClienteComponent.prototype.classLowerCase = function () {
        return this.shared.classLowerCase;
    };
    RegistrarClienteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_services_registrar_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegistrarClienteComponent.prototype, "form", void 0);
    RegistrarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar-cliente',
            template: __webpack_require__(/*! raw-loader!./registrar-cliente.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/registrar/registrar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./registrar-cliente.component.css */ "./src/app/components/registrar/registrar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_registrar_registro_service__WEBPACK_IMPORTED_MODULE_4__["RegistroService"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], RegistrarClienteComponent);
    return RegistrarClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/security/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/components/security/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        //return true;
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/security/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/security/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, dialog, loading, modalService) {
        this.router = router;
        this.dialog = dialog;
        this.loading = loading;
        this.modalService = modalService;
        this.expirandoSessao = false;
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return this.trataRetorno(next.handle(authRequest), req);
        }
        else {
            return this.trataRetorno(next.handle(req), req);
        }
    };
    AuthInterceptor.prototype.trataRetorno = function (response, req) {
        var _this = this;
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (_this.sessaoExpirada(error, req)) {
                _this.encerrarSessaoExpirada();
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    AuthInterceptor.prototype.sessaoExpirada = function (error, req) {
        return error.status === 401
            && !this.requisicaoLogin(req)
            && (this.shared.isLoggedIn() || Boolean(this.shared.token));
    };
    AuthInterceptor.prototype.requisicaoLogin = function (req) {
        return req.url.indexOf('/v1/auth') >= 0;
    };
    AuthInterceptor.prototype.encerrarSessaoExpirada = function () {
        var _this = this;
        this.loading.hide();
        if (!this.expirandoSessao) {
            this.expirandoSessao = true;
            this.shared.sessaoExpirada = true;
            this.fecharJanelasAbertas();
            this.shared.logout();
            this.dialog.dismiss();
            this.dialog.warning('Sua sessão expirou. Faça login novamente.');
            this.router.navigate(['/login']).then(function () { return _this.expirandoSessao = false; });
        }
    };
    AuthInterceptor.prototype.fecharJanelasAbertas = function () {
        this.modalService.dismissAll();
        document.body.classList.remove('modal-open');
        Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop'), function (backdrop) {
            if (backdrop.parentNode) {
                backdrop.parentNode.removeChild(backdrop);
            }
        });
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/security/changes.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/components/security/changes.guard.ts ***!
  \******************************************************/
/*! exports provided: PendingChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingChangesGuard", function() { return PendingChangesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/components/security/confirmation/confirmation.component.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingChangesGuard = /** @class */ (function () {
    function PendingChangesGuard(modalService) {
        this.modalService = modalService;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__["AppInjector"].getInjector();
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]);
    }
    ;
    PendingChangesGuard.prototype.canDeactivate = function (component) {
        return (component.canDeactivate() || this.shared.usuario == null) ? true : this.openConfirmDialog();
    };
    PendingChangesGuard.prototype.openConfirmDialog = function () {
        return this.modalService.open(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationComponent"], { backdrop: 'static', centered: true, keyboard: false }).result;
    };
    PendingChangesGuard.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    PendingChangesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PendingChangesGuard);
    return PendingChangesGuard;
}());



/***/ }),

/***/ "./src/app/components/security/confirmation/confirmation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/security/confirmation/confirmation.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationComponent.prototype.onConfirm = function () {
        this.activeModal.close(true);
    };
    ConfirmationComponent.prototype.onCancel = function () {
        this.activeModal.close(false);
    };
    ConfirmationComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n   <div class=\"alert-box\">\n      <div class=\"modal-header\">\n         <h4 class=\"modal-title\">Aten\u00E7\u00E3o!!!</h4>\n      </div>\n      <div class=\"modal-body\">\n         Existem informa\u00E7\u00F5es n\u00E3o salvas. Deseja prosseguir?\n      </div>\n      <div class=\"modal-footer\">\n         <button type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"onCancel()\"> N\u00E3o </button>\n         <button type=\"button\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"onConfirm()\"> Sim </button>\n      </div>\n   </div>\n   "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/security/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/security/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\r\n*:after,\r\n*:before {\r\n    box-sizing: inherit;\r\n}\r\n\r\nfieldset,\r\ninput,\r\nselect,\r\ntextarea {\r\n    margin-bottom: 0.9rem;\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n    transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n}\r\n\r\ninput[type='email'],\r\ninput[type='number'],\r\ninput[type='password'],\r\ninput[type='search'],\r\ninput[type='tel'],\r\ninput[type='text'],\r\ninput[type='url'],\r\ntextarea,\r\nselect {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background-color:#f8f8f8;\r\n    border: 0.1rem solid #d1d1d1;\r\n    border-radius: .4rem;\r\n    box-shadow: none;\r\n    box-sizing: inherit;\r\n    height: 2.8rem;\r\n    width: 100%;\r\n}\r\n\r\ninput[type='email']:focus,\r\ninput[type='number']:focus,\r\ninput[type='password']:focus,\r\ninput[type='search']:focus,\r\ninput[type='tel']:focus,\r\ninput[type='text']:focus,\r\ninput[type='url']:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n    border-color: #42c2eb;\r\n    outline: 0;\r\n}\r\n\r\n.button,\r\nbutton,\r\ninput[type='button'],\r\ninput[type='reset'],\r\ninput[type='submit'] {\r\n    background-color: #34b563;\r\n    border: 0.1rem solid #34b563;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-size: 0.8rem !important;\r\n    font-weight: 500;\r\n    height: 2.8rem;\r\n    letter-spacing: .1rem;\r\n    line-height: 2.8rem;\r\n    /* padding: 0 3.0rem; */\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n}\r\n\r\n.button-signin {\r\n    background: #34b563;\r\n    font-size: 14px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    border-radius: .4rem;\r\n}\r\n\r\n.button-signin:focus,\r\n.button-signin:hover {\r\n    background: #0aab67;\r\n    outline: 0;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\na {\r\n    color: #17a6d4;\r\n    text-decoration: none;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    color: #42c2eb;\r\n}\r\n\r\n.middle-aligment-flex {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.op0 {\r\n    opacity: 0;\r\n}\r\n\r\n.w100 {\r\n    width: 100%;\r\n}\r\n\r\nmain.login-wrapper {\r\n    height: 100vh;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\nmain.login-wrapper .login-image_wrapper {\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\nmain.login-wrapper .form-signin {\r\n    min-width: 28rem;\r\n    opacity: 0;\r\n    padding: 30px;\r\n    margin-bottom: 0;\r\n    z-index: 1;\r\n    background-color: #20364a;\r\n}\r\n\r\nmain.login-wrapper .form-signin .title {\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n    font-size: 2.3rem;\r\n    font-weight: 600;\r\n    line-height: 1.2;\r\n    letter-spacing: -.1rem;\r\n}\r\n\r\nmain.login-wrapper .form-signin .signin {\r\n    color: white;\r\n    line-height: 1.3;\r\n    font-weight: 200;\r\n    margin-bottom: 30px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.pandora-logo {\r\n    -webkit-transform: scale(.5);\r\n            transform: scale(.5);\r\n}\r\n\r\n.sisweb-logo {\r\n    -webkit-transform: rotateY(-90deg);\r\n            transform: rotateY(-90deg);\r\n}\r\n\r\n.login-image_wrapper svg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 5% 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .login-image_wrapper svg {\r\n        position: absolute;\r\n        left: -70%;\r\n        top: -30%;\r\n        width: 180%;\r\n        height: 120%;\r\n        margin: 25% 0;\r\n    }\r\n  /*  main.login-wrapper .form-signin {\r\n      padding: 0 50px 90px;\r\n  }*/\r\n}\r\n\r\n.background {\r\n    position: absolute;\r\n    width: 200vmax;\r\n    height: 100vmax;\r\n    z-index: -10;\r\n    overflow: hidden;\r\n    background: #0b2238;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .background {\r\n        width: 100vmax;\r\n    }\r\n}\r\n\r\n.foreground {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    overflow: hidden;\r\n    place-content: end end;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.foreground svg {\r\n    margin: 20px;\r\n}\r\n\r\n.background img {\r\n    opacity: .1;\r\n}\r\n\r\nimg{width: 100%;}\r\n\r\n.background-wrapper {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.input-wrapper {\r\n    position: relative;\r\n}\r\n\r\n.input-wrapper i {\r\n    position: absolute;\r\n    top: calc(calc(2.8rem - 14px) / 2);\r\n    right: 1rem;\r\n    color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::placeholder {\r\n   text-transform: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsbUVBQW1FO0FBQ3ZFOztBQUVBOzs7Ozs7Ozs7SUFTSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7Ozs7Ozs7OztJQVNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7Ozs7O0lBS0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUFlO0lBQWYsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUdJLG9CQUFhO0lBQWIsYUFBYTtJQUdiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFHbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0VBQ0Y7O0lBRUU7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIscUJBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsSUFBSSxXQUFXLENBQUM7O0FBR2hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUNBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcclxuKjphZnRlcixcclxuKjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuZmllbGRzZXQsXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcclxufVxyXG5cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDAwMDBzIGN1YmljLWJlemllciguOTUsIC4wNSwgLjc5NSwgLjAzNSkgMTAwMDAwMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwMDAwcyBjdWJpYy1iZXppZXIoLjk1LCAuMDUsIC43OTUsIC4wMzUpIDEwMDAwMDBzO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSxcclxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcclxuaW5wdXRbdHlwZT0nc2VhcmNoJ10sXHJcbmlucHV0W3R5cGU9J3RlbCddLFxyXG5pbnB1dFt0eXBlPSd0ZXh0J10sXHJcbmlucHV0W3R5cGU9J3VybCddLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZDFkMWQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2VtYWlsJ106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J251bWJlciddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSdwYXNzd29yZCddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0ndGVsJ106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0ndXJsJ106Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDJjMmViO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmJ1dHRvbixcclxuYnV0dG9uLFxyXG5pbnB1dFt0eXBlPSdidXR0b24nXSxcclxuaW5wdXRbdHlwZT0ncmVzZXQnXSxcclxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0YjU2MztcclxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICMzNGI1NjM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xyXG4gICAgLyogcGFkZGluZzogMCAzLjByZW07ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ1dHRvbi1zaWduaW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzM0YjU2MztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLXNpZ25pbjpmb2N1cyxcclxuLmJ1dHRvbi1zaWduaW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBhYWI2NztcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMxN2E2ZDQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6Zm9jdXMsXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MmMyZWI7XHJcbn1cclxuXHJcbi5taWRkbGUtYWxpZ21lbnQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm9wMCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udzEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWFpbi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubWFpbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1pbWFnZV93cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4ge1xyXG4gICAgbWluLXdpZHRoOiAyOHJlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzNjRhO1xyXG59XHJcblxyXG5tYWluLmxvZ2luLXdyYXBwZXIgLmZvcm0tc2lnbmluIC50aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4gLnNpZ25pbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5wYW5kb3JhLWxvZ28ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbn1cclxuXHJcbi5zaXN3ZWItbG9nbyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxufVxyXG5cclxuLmxvZ2luLWltYWdlX3dyYXBwZXIgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogNSUgMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubG9naW4taW1hZ2Vfd3JhcHBlciBzdmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNzAlO1xyXG4gICAgICAgIHRvcDogLTMwJTtcclxuICAgICAgICB3aWR0aDogMTgwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICAgICAgbWFyZ2luOiAyNSUgMDtcclxuICAgIH1cclxuICAvKiAgbWFpbi5sb2dpbi13cmFwcGVyIC5mb3JtLXNpZ25pbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweCA5MHB4O1xyXG4gIH0qL1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwdm1heDtcclxuICAgIGhlaWdodDogMTAwdm1heDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGIyMjM4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICB3aWR0aDogMTAwdm1heDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcmVncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGVuZCBlbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZm9yZWdyb3VuZCBzdmcge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCBpbWcge1xyXG4gICAgb3BhY2l0eTogLjE7XHJcbn1cclxuXHJcbmltZ3t3aWR0aDogMTAwJTt9XHJcblxyXG5cclxuLmJhY2tncm91bmQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoY2FsYygyLjhyZW0gLSAxNHB4KSAvIDIpO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/security/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/security/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/enum/tipoPessoaEnum */ "./src/app/model/enum/tipoPessoaEnum.ts");
/* harmony import */ var _model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/cadastro/usuario */ "./src/app/model/cadastro/usuario.ts");
/* harmony import */ var _model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/cadastro/pessoa */ "./src/app/model/cadastro/pessoa.ts");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var _template_template_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../template/template.service */ "./src/app/components/template/template.service.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/termo/termo.service */ "./src/app/services/termo/termo.service.ts");
/* harmony import */ var app_components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/termos/modal/termo-aceite/termo-aceite-modal.component */ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, loading, template, router, dialog, errorHandler, termoService, modalService, utilService, googleService) {
        this.userService = userService;
        this.loading = loading;
        this.template = template;
        this.router = router;
        this.dialog = dialog;
        this.errorHandler = errorHandler;
        this.termoService = termoService;
        this.modalService = modalService;
        this.utilService = utilService;
        this.googleService = googleService;
        this.usuario = new _model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuario"](null, '', '', '', _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_4__["StatusEnum"].INATIVO, null, new _model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_7__["Pessoa"]('', '', '', '', _model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_5__["TipoPessoaEnum"].FISICA, '', null), null, null);
        this.descBtnEntrar = 'Entrar';
        this.esconder = true;
        this.termoAceiteModal = app_components_termos_modal_termo_aceite_termo_aceite_modal_component__WEBPACK_IMPORTED_MODULE_13__["TermoAceiteModalComponent"];
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"].getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.utilService.carregaAnimaJS();
        //const animeFile = `../assets/js/anime.min.js`;
        //const slippryFile = `../assets/js/slippry.min.js`;
        //const loginFile = `../assets/js/login.js`;
        //const filesToLoad = [animeFile, slippryFile, loginFile];
        //let sequence: Promise<any> = Promise.resolve();
        //filesToLoad.forEach((file: string) => {
        //   sequence = sequence.then(() => {
        //    return this.loadScript(file);
        // });
        //});
        //$.getScript('../../../assets/js/anime.min.js');
        //$.getScript('../../../assets/js/slippry.min.js');
        //$.getScript('../../../assets/js/login.js');
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        this.googleService.eventEmitter("login", "login-inicio", "", 1);
        this.loading.show();
        this.message = '';
        this.usuario.login = this.usuario.login.toUpperCase();
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;
        this.userService.login(this.usuario).subscribe(function (userAuthentication) {
            _this.shared.sessaoExpirada = false;
            _this.shared.token = userAuthentication.token;
            _this.shared.usuario = userAuthentication.usuario;
            _this.shared.clientes = userAuthentication.clientes;
            if (_this.shared.clientes.length > 0) {
                //verifica se é do perfil sem ser assinador tem preferencia
                var Ususáriocliente = _this.shared.clientes.filter(function (x) { return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_15__["PerfilEnum"].parse(x.perfil) != app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_15__["PerfilEnum"].ROLE_ASSINADOR; });
                if (Ususáriocliente.length == 0) {
                    Ususáriocliente = _this.shared.clientes;
                }
                _this.shared.clienteSelecionado = Ususáriocliente[0];
                _this.shared.perfilUsuario = Ususáriocliente[0].perfil;
            }
            _this.shared.prefs = _this.template.getMenuPrefs();
            _this.navigate = '/';
            _this.buscaTermos();
            _this.googleService.eventEmitter("login", "login-sucesso", "", 1);
        }, function (err) {
            _this.googleService.eventEmitter("login", "login-erro", "", 1);
            _this.shared.token = null;
            _this.shared.usuario = null;
            _this.message = 'Erro ';
            _this.loading.hide();
        });
    };
    LoginComponent.prototype.lostPassword = function () {
        var _this = this;
        this.loading.show();
        this.userService.lostPassword(this.usuario).subscribe(function (responseApi) {
            _this.dialog.success("Enviado para o email");
            _this.loading.hide();
        }, function (err) {
            _this.loading.hide();
        });
    };
    LoginComponent.prototype.termosPendentes = function (termosResponse) {
        if (termosResponse) {
            this.exibirTermos();
        }
        else {
            this.router.navigate([this.navigate]);
            this.loading.hide();
            this.descBtnEntrar = 'Sair';
        }
    };
    LoginComponent.prototype.buscaTermos = function () {
        var _this = this;
        this.termoService.getTermosPendentes(this.shared.usuario).subscribe(function (responseApi) {
            _this.termosPendentes(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
        return null;
    };
    LoginComponent.prototype.exibirTermos = function () {
        var modalRef = this.modalService.open(this.termoAceiteModal, {
            backdrop: 'static', centered: true, keyboard: false
        });
        modalRef.componentInstance.urlNavigate = this.navigate;
        this.loading.hide();
    };
    LoginComponent.prototype.documentValidation = function () {
        this.navigate = '/validarAssinatura';
        this.router.navigate([this.navigate]);
    };
    LoginComponent.prototype.newCliente = function () {
        this.navigate = '/registrar';
        this.router.navigate([this.navigate]);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _template_template_service__WEBPACK_IMPORTED_MODULE_10__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerService"] },
        { type: app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__["TermoService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"] },
        { type: app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_17__["GoogleAnalyticsService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/security/login/login.component.html"),
            styles: ["assets/css/reset.min.css", "assets/css/slippry.css", __webpack_require__(/*! ./login.component.css */ "./src/app/components/security/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _template_template_service__WEBPACK_IMPORTED_MODULE_10__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerService"],
            app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_12__["TermoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"],
            app_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_17__["GoogleAnalyticsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/security/pages/notfound.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/security/pages/notfound.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent(route) {
        this.route = route;
    }
    NotfoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (data) {
            _this.path = data.path;
        });
    };
    NotfoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: "\n    <div class=\"text-center text-secondary text-bold-400 centered\">\n      <h1>\n         <i class=\"fa fa-bug text-info mr-1\"></i><span class=\"text-secondary text-bold-600\">404</span>\n      </h1>\n      <h3 class=\"text-bold-700 black\">\n         P\u00E1gina n\u00E3o encontrada\n      </h3>\n      <p>\n         Lamentamos, mas a p\u00E1gina solicitada n\u00E3o foi encontrada.\n         Por favor, volte para a p\u00E1gina inicial ou entre em contato conosco\n      </p>\n      <a class=\"btn btn-primary btn-raised\" [routerLink]=\"['/']\"> Voltar </a>\n    </div>\n  ",
            styles: ["\n      .centered {position: absolute; top: 50%; left: 15%; transform: translate(-7%, -50%);}\n   "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/security/role.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/components/security/role.guard.ts ***!
  \***************************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(router) {
        this.router = router;
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        if (this.shared.podeNavegar(next.data.menuId)) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    RoleGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\r\n*:after,\r\n*:before {\r\n    box-sizing: inherit;\r\n}\r\n\r\nfieldset,\r\ninput,\r\nselect,\r\ntextarea {\r\n    margin-bottom: 0.9rem;\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n    transition: all 100000s cubic-bezier(.95, .05, .795, .035) 1000000s;\r\n}\r\n\r\ninput[type='email'],\r\ninput[type='number'],\r\ninput[type='password'],\r\ninput[type='search'],\r\ninput[type='tel'],\r\ninput[type='text'],\r\ninput[type='url'],\r\ntextarea,\r\nselect {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background-color: white;\r\n    border: 0.1rem solid #d1d1d1;\r\n    border-radius: .4rem;\r\n    box-shadow: none;\r\n    box-sizing: inherit;\r\n    height: 2.8rem;\r\n    width: 100%;\r\n}\r\n\r\ninput[type='email']:focus,\r\ninput[type='number']:focus,\r\ninput[type='password']:focus,\r\ninput[type='search']:focus,\r\ninput[type='tel']:focus,\r\ninput[type='text']:focus,\r\ninput[type='url']:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n    border-color: #42c2eb;\r\n    outline: 0;\r\n}\r\n\r\n.button,\r\nbutton,\r\ninput[type='button'],\r\ninput[type='reset'],\r\ninput[type='submit'] {\r\n    background-color: #9b4dca;\r\n    border: 0.1rem solid #9b4dca;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-size: 0.8rem !important;\r\n    font-weight: 500;\r\n    height: 2.8rem;\r\n    letter-spacing: .1rem;\r\n    line-height: 2.8rem;\r\n    /* padding: 0 3.0rem; */\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n}\r\n\r\n.button-signin {\r\n    background: rgba(1, 10, 15, 0.25);\r\n    border-color: #17a6d4;\r\n    font-size: 14px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.button-signin:focus,\r\n.button-signin:hover {\r\n    background: #012129;\r\n    border-color: #42c2eb;\r\n    outline: 0;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\na {\r\n    color: #17a6d4;\r\n    text-decoration: none;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    color: #42c2eb;\r\n}\r\n\r\n.middle-aligment-flex {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.op0 {\r\n    opacity: 0;\r\n}\r\n\r\n.w100 {\r\n    width: 100%;\r\n}\r\n\r\nmain.login-wrapper {\r\n    height: 100vh;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\nmain.login-wrapper .login-image_wrapper {\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    padding-top: 25%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\nmain.login-wrapper .form-signin {\r\n    min-width: 8rem;\r\n    opacity: 0;\r\n    padding: 0 50px 20px;\r\n    margin-bottom: 0;\r\n    z-index: 1;\r\n}\r\n\r\nmain.login-wrapper .form-signin .title {\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n    font-size: 2.3rem;\r\n    font-weight: 600;\r\n    line-height: 1.2;\r\n    letter-spacing: -.1rem;\r\n}\r\n\r\nmain.login-wrapper .form-signin .signin {\r\n    color: white;\r\n    line-height: 1.3;\r\n    font-weight: 200;\r\n    margin-bottom: 30px;\r\n    font-size: 1rem;\r\n}\r\n\r\nmain.login-wrapper .form-signin .button-signin {\r\n    margin-bottom: 5px;\r\n    border-radius: 100vmin;\r\n}\r\n\r\n.pandora-logo {\r\n    -webkit-transform: scale(.5);\r\n            transform: scale(.5);\r\n}\r\n\r\n.sisweb-logo {\r\n    -webkit-transform: rotateY(-90deg);\r\n            transform: rotateY(-90deg);\r\n}\r\n\r\n.login-image_wrapper svg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 5% 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .login-image_wrapper svg {\r\n        position: absolute;\r\n        left: -70%;\r\n        top: -30%;\r\n        width: 180%;\r\n        height: 120%;\r\n        margin: 25% 0;\r\n    }\r\n    main.login-wrapper .form-signin {\r\n      padding: 0 50px 90px;\r\n  }\r\n}\r\n\r\n.background {\r\n    position: absolute;\r\n    width: 200vmax;\r\n    height: 100vmax;\r\n    z-index: -10;\r\n    overflow: hidden;\r\n    background: #010a0f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .background {\r\n        width: 100vmax;\r\n    }\r\n}\r\n\r\n.foreground {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    overflow: hidden;\r\n    place-content: end end;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.foreground svg {\r\n    margin: 20px;\r\n}\r\n\r\n.background img {\r\n    opacity: .1;\r\n}\r\n\r\n.background-wrapper {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-moz-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::-ms-input-placeholder {\r\n   text-transform: none;\r\n}\r\n\r\ninput::placeholder {\r\n   text-transform: none;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9zZW5oYVJlY3VwZXJhY2FvL3NlbmhhUmVjdXBlcmFjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0lBSUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLG1FQUFtRTtBQUN2RTs7QUFFQTs7Ozs7Ozs7O0lBU0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBOzs7Ozs7Ozs7SUFTSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBOzs7OztJQUtJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUdJLG9CQUFhO0lBQWIsYUFBYTtJQUdiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFHbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO01BQ0Usb0JBQW9CO0VBQ3hCO0FBQ0Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHFCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUtBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUNBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUZBO0dBQ0csb0JBQW9CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9zZW5oYVJlY3VwZXJhY2FvL3NlbmhhUmVjdXBlcmFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiosXHJcbio6YWZ0ZXIsXHJcbio6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmZpZWxkc2V0LFxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwMDAwcyBjdWJpYy1iZXppZXIoLjk1LCAuMDUsIC43OTUsIC4wMzUpIDEwMDAwMDBzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDAwMHMgY3ViaWMtYmV6aWVyKC45NSwgLjA1LCAuNzk1LCAuMDM1KSAxMDAwMDAwcztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuaW5wdXRbdHlwZT0nbnVtYmVyJ10sXHJcbmlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXHJcbmlucHV0W3R5cGU9J3NlYXJjaCddLFxyXG5pbnB1dFt0eXBlPSd0ZWwnXSxcclxuaW5wdXRbdHlwZT0ndGV4dCddLFxyXG5pbnB1dFt0eXBlPSd1cmwnXSxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZDFkMWQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIGhlaWdodDogMi44cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2VtYWlsJ106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J251bWJlciddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSdwYXNzd29yZCddOmZvY3VzLFxyXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0ndGVsJ106Zm9jdXMsXHJcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyxcclxuaW5wdXRbdHlwZT0ndXJsJ106Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDJjMmViO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmJ1dHRvbixcclxuYnV0dG9uLFxyXG5pbnB1dFt0eXBlPSdidXR0b24nXSxcclxuaW5wdXRbdHlwZT0ncmVzZXQnXSxcclxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliNGRjYTtcclxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICM5YjRkY2E7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xyXG4gICAgLyogcGFkZGluZzogMCAzLjByZW07ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJ1dHRvbi1zaWduaW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxLCAxMCwgMTUsIDAuMjUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhNmQ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uLXNpZ25pbjpmb2N1cyxcclxuLmJ1dHRvbi1zaWduaW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAxMjEyOTtcclxuICAgIGJvcmRlci1jb2xvcjogIzQyYzJlYjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMxN2E2ZDQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6Zm9jdXMsXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MmMyZWI7XHJcbn1cclxuXHJcbi5taWRkbGUtYWxpZ21lbnQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm9wMCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udzEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWFpbi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubWFpbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1pbWFnZV93cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYWluLmxvZ2luLXdyYXBwZXIgLmZvcm0tc2lnbmluIHtcclxuICAgIG1pbi13aWR0aDogOHJlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5tYWluLmxvZ2luLXdyYXBwZXIgLmZvcm0tc2lnbmluIC50aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4gLnNpZ25pbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbm1haW4ubG9naW4td3JhcHBlciAuZm9ybS1zaWduaW4gLmJ1dHRvbi1zaWduaW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdm1pbjtcclxufVxyXG5cclxuLnBhbmRvcmEtbG9nbyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxufVxyXG5cclxuLnNpc3dlYi1sb2dvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG59XHJcblxyXG4ubG9naW4taW1hZ2Vfd3JhcHBlciBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1JSAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5sb2dpbi1pbWFnZV93cmFwcGVyIHN2ZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC03MCU7XHJcbiAgICAgICAgdG9wOiAtMzAlO1xyXG4gICAgICAgIHdpZHRoOiAxODAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwJTtcclxuICAgICAgICBtYXJnaW46IDI1JSAwO1xyXG4gICAgfVxyXG4gICAgbWFpbi5sb2dpbi13cmFwcGVyIC5mb3JtLXNpZ25pbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweCA5MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwMHZtYXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZtYXg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogIzAxMGEwZjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZtYXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JlZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwbGFjZS1jb250ZW50OiBlbmQgZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZvcmVncm91bmQgc3ZnIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQgaW1nIHtcclxuICAgIG9wYWNpdHk6IC4xO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.ts ***!
  \************************************************************************************/
/*! exports provided: SenhaRecuperacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaRecuperacaoComponent", function() { return SenhaRecuperacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/cadastro/usuario */ "./src/app/model/cadastro/usuario.ts");
/* harmony import */ var app_model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/cadastro/pessoa */ "./src/app/model/cadastro/pessoa.ts");
/* harmony import */ var app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var app_model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/enum/tipoPessoaEnum */ "./src/app/model/enum/tipoPessoaEnum.ts");
/* harmony import */ var app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _template_template_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../template/template.service */ "./src/app/components/template/template.service.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SenhaRecuperacaoComponent = /** @class */ (function () {
    function SenhaRecuperacaoComponent(usuarioService, loading, template, dialog, utilService, errorHandler, router, activatedRoute) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.loading = loading;
        this.template = template;
        this.dialog = dialog;
        this.utilService = utilService;
        this.errorHandler = errorHandler;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.barColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
        this.strengthLabels = ['  Insegura', '  Fraca', '  Média', '  Forte', '  Segura'];
        this.senhaNova = null;
        this.senhaConfirmacao = null;
        this.senhaValida = false;
        this.token = null;
        this.usuario = new app_model_cadastro_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"](null, '', '', '', app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_6__["StatusEnum"].INATIVO, null, new app_model_cadastro_pessoa__WEBPACK_IMPORTED_MODULE_5__["Pessoa"]('', '', '', '', app_model_enum_tipoPessoaEnum__WEBPACK_IMPORTED_MODULE_7__["TipoPessoaEnum"].FISICA, '', null), null, null);
        this.descBtnEntrar = 'Entrar';
        this.tokenValido = false;
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"].getInstance();
        //this.titulo = "Alteração senha";
        //this.navegacao = " > Alterar Senha";
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
    }
    SenhaRecuperacaoComponent.prototype.ngOnInit = function () {
        this.utilService.carregaAnimaJS();
        //$.getScript('../../../assets/js/anime.min.js');
        //$.getScript('../../../assets/js/slippry.min.js');
        //$.getScript('../../../assets/js/login.js');
        this.validarToken();
    };
    SenhaRecuperacaoComponent.prototype.UserInit = function (userAuthentication) {
        this.shared.token = userAuthentication.token;
        this.shared.usuario = userAuthentication.usuario;
    };
    SenhaRecuperacaoComponent.prototype.validarToken = function () {
        var _this = this;
        this.loading.show();
        this.message = null;
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;
        this.usuarioService.validarTokenAlterSenha(this.token).subscribe(function (responseApi) {
            _this.UserInit(responseApi);
            _this.tokenValido = true;
            _this.loading.hide();
        }, function (err) {
            _this.router.navigate(['/']);
            _this.errorHandler.handle(err);
            _this.loading.hide();
        });
    };
    SenhaRecuperacaoComponent.prototype.showHidePassword = function (tipo) {
        this.utilService.showHidePassword('show_hide_password_' + tipo);
    };
    SenhaRecuperacaoComponent.prototype.trocarSenha = function () {
        var _this = this;
        if (this.form.invalid) {
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].setAsTouched(this.form.form);
            this.showMessage({
                type: 'danger',
                text: "Existem informações inválidas ou nulas. Favor verificar!"
            });
            return;
        }
        if (!this.validateForm()) {
            return;
        }
        this.loading.show();
        var usuario = Object.assign(this.shared.usuario, { senha: this.senhaNova });
        this.usuarioService.trocarSenha(usuario).subscribe(function (responseApi) {
            _this.dialog.success(responseApi.data);
            _this.usuarioService.login(usuario).subscribe(function (userAuthentication) {
                _this.shared.token = userAuthentication.token;
                _this.shared.usuario = userAuthentication.usuario;
                _this.shared.clientes = userAuthentication.clientes;
                if (_this.shared.clientes.length > 0) {
                    _this.shared.clienteSelecionado = _this.shared.clientes[0];
                    _this.shared.perfilUsuario = _this.shared.clientes[0].perfil;
                }
                _this.shared.prefs = _this.template.getMenuPrefs();
                _this.router.navigate(['/']);
                _this.loading.hide();
                _this.descBtnEntrar = 'Sair';
            }, function (err) {
                _this.shared.token = null;
                _this.shared.usuario = null;
                _this.loading.hide();
            });
            _this.loading.hide();
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    SenhaRecuperacaoComponent.prototype.validateForm = function () {
        if (this.senhaNova != this.senhaConfirmacao) {
            this.showMessage({
                type: 'danger',
                text: 'A senha de confirmação não confere com a senha informada'
            });
            return false;
        }
        return true;
    };
    SenhaRecuperacaoComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    SenhaRecuperacaoComponent.ctorParameters = function () { return [
        { type: app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _template_template_service__WEBPACK_IMPORTED_MODULE_11__["TemplateService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"] },
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SenhaRecuperacaoComponent.prototype, "form", void 0);
    SenhaRecuperacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__(/*! raw-loader!./senhaRecuperacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.html"),
            styles: ["assets/css/reset.min.css", "assets/css/slippry.css", __webpack_require__(/*! ./senhaRecuperacao.component.css */ "./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _template_template_service__WEBPACK_IMPORTED_MODULE_11__["TemplateService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"],
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SenhaRecuperacaoComponent);
    return SenhaRecuperacaoComponent;
}());



/***/ }),

/***/ "./src/app/components/template/customizer/customizer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/template/customizer/customizer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.customizer.open {\n  right: 0;\n}\n.customizer .customizer-content {\n  position: relative;\n  height: 100%;\n}\n.customizer a.customizer-toggle {\n  background: #FFF;\n  color: theme-color(\"primary\");\n  display: block;\n  box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n}\n.customizer a.customizer-close {\n  color: #000;\n}\n.customizer .customizer-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 7px;\n  width: auto;\n  z-index: 10;\n}\n.customizer .customizer-toggle {\n  position: absolute;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  left: -54px;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n}\n.customizer .color-options a {\n  white-space: pre;\n}\n.customizer .cz-bg-color {\n  margin: 0 auto;\n}\n.customizer .cz-bg-color span:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-color span.white {\n  color: #ddd !important;\n}\n.customizer .cz-bg-color .selected {\n  border: 3px solid #314fe5;\n}\n.customizer .cz-bg-image:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-image img.rounded {\n  border-radius: 1rem !important;\n  border: 2px solid #e6e6e6;\n}\n.customizer .cz-bg-image img.rounded.selected {\n  border: 2px solid #FF586B;\n}\n[dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px;\n}\n[dir=rtl] :host ::ng-deep .customizer.open {\n  left: 0;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep .customizer .customizer-close {\n  left: 10px;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n  right: -54px;\n  left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9jdXN0b21pemVyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZW1wbGF0ZVxcY3VzdG9taXplclxcY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0csYUFBQTtFQUNILFVBQUE7RUFDRyxzQkFBQTtFQUNILGFBQUE7RUFDRyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0VBQUE7RUFBQSwwREFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0FDQ0o7QURDQztFQUNDLFFBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDRyxZQUFBO0FDQUw7QURHQztFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0csMkNBQUE7QUNETDtBREdDO0VBQ0ksV0FBQTtBQ0RMO0FER0M7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDREw7QURHQztFQUNDLGtCQUFBO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREw7QURJRTtFQUNDLGdCQUFBO0FDRkg7QURNQztFQUNJLGNBQUE7QUNKTDtBRE1HO0VBQ0MsZUFBQTtBQ0pKO0FETUc7RUFDQyxzQkFBQTtBQ0pKO0FET0U7RUFDQyx5QkFBQTtBQ0xIO0FEVUU7RUFDQyxlQUFBO0FDUkg7QURVRTtFQUNDLDhCQUFBO0VBQ0EseUJBQUE7QUNSSDtBRFNHO0VBQ0MseUJBQUE7QUNQSjtBRGVDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FDWkY7QURjRTtFQUNDLE9BQUE7RUFDQSxXQUFBO0FDWkg7QURlRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDYkg7QURnQkU7RUFDQyxZQUFBO0VBQ0EsVUFBQTtBQ2RIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taXplcntcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICByaWdodDogLTQwMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdHotaW5kZXg6IDEwNTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHQmLm9wZW57XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b21pemVyLWNvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdGEuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLmN1c3RvbWl6ZXItY2xvc2Uge1xyXG4gICAgXHRjb2xvcjogIzAwMDtcclxuXHR9XHJcblx0LmN1c3RvbWl6ZXItY2xvc2V7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAxMHB4O1xyXG5cdCAgICB0b3A6IDEwcHg7XHJcblx0ICAgIHBhZGRpbmc6IDdweDtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0ICAgIHotaW5kZXg6IDEwO1xyXG5cdH1cclxuXHQuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHQuY29sb3Itb3B0aW9uc3tcclxuXHRcdGF7XHJcblx0XHRcdHdoaXRlLXNwYWNlOnByZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jei1iZy1jb2xvciB7XHJcbiAgICBcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0c3BhbntcclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji53aGl0ZXtcclxuXHRcdFx0XHRjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc2VsZWN0ZWR7XHJcblx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICMzMTRmZTU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY3otYmctaW1hZ2V7XHJcblx0XHQmOmhvdmVye1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0XHRpbWcucm91bmRlZHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG5cdFx0XHQmLnNlbGVjdGVke1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwe1xyXG5cdC5jdXN0b21pemVye1x0XHJcblx0XHRsZWZ0OiAtNDAwcHg7XHJcblx0XHRyaWdodDphdXRvO1x0XHJcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHJcblx0XHQmLm9wZW57XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHJpZ2h0OmF1dG87XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0LmN1c3RvbWl6ZXItY2xvc2V7XHRcdFxyXG5cdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHRyaWdodDogYXV0bztcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHQuY3VzdG9taXplci10b2dnbGV7XHRcdFxyXG5cdFx0XHRyaWdodDogLTU0cHg7XHJcblx0XHRcdGxlZnQ6IGF1dG87XHQgICBcclxuXHRcdH1cclxuXHJcblx0fVx0XHJcbn0iLCIuY3VzdG9taXplciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIub3BlbiB7XG4gIHJpZ2h0OiAwO1xufVxuLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLWNsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMTA7XG59XG4uY3VzdG9taXplciAuY3VzdG9taXplci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAtNTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbWl6ZXIgLmNvbG9yLW9wdGlvbnMgYSB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG4uY3VzdG9taXplciAuY3otYmctY29sb3Ige1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ud2hpdGUge1xuICBjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMTRmZTU7XG59XG4uY3VzdG9taXplciAuY3otYmctaW1hZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG59XG4uY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCO1xufVxuXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyIHtcbiAgbGVmdDogLTQwMHB4O1xuICByaWdodDogYXV0bztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbn1cbltkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIub3BlbiB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci10b2dnbGUge1xuICByaWdodDogLTU0cHg7XG4gIGxlZnQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/template/customizer/customizer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/template/customizer/customizer.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(shared) {
        this.shared = shared;
        this.options = {
            direction: 'ltr'
        };
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
        this.options.direction = this.shared.prefs.direction;
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/template/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/components/template/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/components/template/data/sweet-alerts.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/template/data/sweet-alerts.ts ***!
  \**********************************************************/
/*! exports provided: confirmDeleteButton, confirmCancelButton, deleteSuccess, deleteCancel, restError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmDeleteButton", function() { return confirmDeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmCancelButton", function() { return confirmCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCancel", function() { return deleteCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restError", function() { return restError; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

function confirmDeleteButton(message, confirmText, cancelText) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Exclusão',
        html: message || "Deseja excluir o registro atual?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: confirmText || 'Sim, excluir!',
        cancelButtonText: cancelText || 'Não, cancelar!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function (opcao) {
        if (opcao.dismiss)
            return false;
        return true;
    }).catch(function () {
        return false;
    });
}
function confirmCancelButton(message, confirmText, cancelText) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Cancelamento',
        html: message || "Deseja cancelar o registro atual?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: confirmText || 'Sim, cancelar!',
        cancelButtonText: cancelText || 'Não, manter!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function (opcao) {
        if (opcao.dismiss)
            return false;
        return true;
    }).catch(function () {
        return false;
    });
}
function deleteSuccess() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Excluído!", "Registro excluído com sucesso!", "success");
}
function deleteCancel() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Cancelado!", "Operação cancelada!", "error");
}
function restError(message) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Erro!", message || "Erro não especificado", "error");
}


/***/ }),

/***/ "./src/app/components/template/directives/toggle-fullscreen.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/template/directives/toggle-fullscreen.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/components/template/footer/footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\n  background: #f7f7f7;\n  bottom: 0;\n  font-size: 0.8rem;\n  left: 0;\n  line-height: 1.1;\n  min-height: 24px;\n  padding: 0.1rem 0;\n  position: fixed;\n  right: 0;\n  z-index: 10;\n}\n\n.app-footer .container-fluid {\n  min-height: 0;\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.app-footer .copyright {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9mb290ZXIvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlbXBsYXRlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGxlZnQ6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmFwcC1mb290ZXIgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmFwcC1mb290ZXIgLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIi5hcHAtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGVmdDogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMC4xcmVtIDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYXBwLWZvb3RlciAuY29udGFpbmVyLWZsdWlkIHtcbiAgbWluLWhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYXBwLWZvb3RlciAuY29weXJpZ2h0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/template/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentDate = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/template/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/template/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/template/layouts/content/content-layout.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/template/layouts/content/content-layout.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvbGF5b3V0cy9jb250ZW50L2NvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/template/layouts/content/content-layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/template/layouts/content/content-layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout',
            template: "\n    <div class=\"wrapper\" *ngIf=\"esconder\">\n      <div class=\"content-wrapper\">\n         <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n         </div>\n      </div>\n    </div>\n    <router-outlet *ngIf=\"!esconder\"></router-outlet>\n    ",
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/components/template/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/template/layouts/full/full-layout.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/template/layouts/full/full-layout.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-min {\n  min-height: calc(100vh - 80px) !important;\n  height: auto !important;\n  max-height: none !important;\n  overflow: visible !important;\n}\n\n.main-content {\n  min-height: calc(100vh - 122px) !important;\n  overflow: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9sYXlvdXRzL2Z1bGwvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlbXBsYXRlXFxsYXlvdXRzXFxmdWxsXFxmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9sYXlvdXRzL2Z1bGwvZnVsbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9sYXlvdXRzL2Z1bGwvZnVsbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtbWluIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyMnB4KSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4iLCIucGFuZWwtbWluIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIycHgpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/template/layouts/full/full-layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/template/layouts/full/full-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navbar/navbar.component */ "./src/app/components/template/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/components/template/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {
            direction: 'ltr'
        };
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        // sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        // customizer events
        this.elementRef.nativeElement.querySelector('#cz-compact-menu')
            .addEventListener('click', this.onClick.bind(this));
        //  this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
        //      .addEventListener('click', this.onClick.bind(this));
        this.menu = this.shared.prefs;
        this.options.direction = this.menu.direction;
        $('.app-sidebar').attr('data-background-color', this.menu.color);
        $('.app-sidebar').attr('data-image', this.menu.image);
        $('.app-sidebar').attr('data-display', this.menu.display);
        $('.app-sidebar').attr('data-compact', this.menu.compact);
        $('.cz-compact-menu').trigger('click');
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        // initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent.prototype.canDeactivate = function () {
        return true;
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
        var dir = this.options.direction;
        this.navbar.setPlacement(dir);
        this.shared.prefs.direction = dir;
        localStorage.setItem('sisweb-menu-direction', dir);
    };
    FullLayoutComponent.prototype.change = function (event) {
        this.sidebar.carregarAcessos();
        $('#sidebarLogo').trigger('click');
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar', { static: false }),
        __metadata("design:type", _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"])
    ], FullLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navbar', { static: false }),
        __metadata("design:type", _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"])
    ], FullLayoutComponent.prototype, "navbar", void 0);
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: "\n   <div class=\"wrapper\" [dir]=\"options.direction\">\n   <div class=\"app-sidebar\" data-active-color=\"blue\" data-background-color=\"blue\" >\n         <app-sidebar #sidebar></app-sidebar>\n         <!--<div class=\"sidebar-background\"></div>-->\n      </div>\n      <app-navbar #navbar></app-navbar>\n      <div class=\"main-panel panel-min\">\n         <div class=\"main-content\" style=\"min-height: calc(100vh - 92px);\">\n               <div class=\"content-wrapper\" style=\"padding:0 8px !important;\">\n                  <div class=\"container-fluid\" style=\"padding:0 8px !important;\">\n                     <router-outlet></router-outlet>\n                     <!--<img id=\"img-inicial\" src=\"assets/img/tela-inicial.png\" style=\"width:100%;\"/>-->\n                  </div>\n               </div>\n         </div>\n         <app-footer></app-footer>\n      </div>\n      <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\n   </div>\n   ",
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/components/template/layouts/full/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/template/layouts/img-inicial/img-inicial.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/template/layouts/img-inicial/img-inicial.ts ***!
  \************************************************************************/
/*! exports provided: ImgInicial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgInicial", function() { return ImgInicial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgInicial = /** @class */ (function () {
    function ImgInicial() {
    }
    ImgInicial.prototype.ngOnInit = function () { };
    ImgInicial = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'img-inicial',
            template: '<img src="assets/img/tela-inicial/tela-inicial.png" style="width:100%;"/>',
        }),
        __metadata("design:paramtypes", [])
    ], ImgInicial);
    return ImgInicial;
}());



/***/ }),

/***/ "./src/app/components/template/layouts/page/page-layout.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/template/layouts/page/page-layout.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvbGF5b3V0cy9wYWdlL3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/template/layouts/page/page-layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/template/layouts/page/page-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('titulo'),
        __metadata("design:type", String)
    ], PageLayoutComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('navegacao'),
        __metadata("design:type", String)
    ], PageLayoutComponent.prototype, "navegacao", void 0);
    PageLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-layout',
            template: "\n   <div class=\"row text-left\">\n      <div class=\"col-sm-12\">\n         <div class=\"content-header\">{{titulo}}</div>\n         <p class=\"content-sub-header\"><a routerLink=\"/\"><i class=\"fa fa-home\"></i></a> {{navegacao}}</p>\n      </div>\n   </div>\n\n   <div class=\"content-form row text-left\">\n      <div class=\"col-md-12 col-lg-12\">\n         <div class=\"card\">\n            <div class=\"card-body\">\n               <div class=\"card-block\">\n                  <router-outlet></router-outlet>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   ",
            styles: [__webpack_require__(/*! ./page-layout.component.scss */ "./src/app/components/template/layouts/page/page-layout.component.scss")]
        })
    ], PageLayoutComponent);
    return PageLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/template/navbar/navbar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/template/navbar/navbar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  color: white;\n}\n\nli {\n  margin: 5px;\n}\n\n.dropdown-toggle::after {\n  color: white;\n}\n\n:host {\n  display: block;\n  overflow: visible;\n  position: relative;\n  z-index: 1000;\n}\n\n:host ::ng-deep .header-navbar,\n:host ::ng-deep .header-navbar .container-fluid,\n:host ::ng-deep .navbar-container,\n:host ::ng-deep #navbarSupportedContent,\n:host ::ng-deep .navbar-nav,\n:host ::ng-deep .nav-item {\n  overflow: visible !important;\n}\n\n:host ::ng-deep .dropdown-menu {\n  z-index: 1050;\n}\n\n@media (max-width: 992px) {\n  .navbar-nav > li {\n    background-color: #a6a6a596;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9uYXZiYXIvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlbXBsYXRlXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsWUFBQTtBQ0VIOztBRERBO0VBQUksV0FBQTtBQ0tKOztBREpBO0VBQ0ksWUFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDUUo7O0FETEE7Ozs7OztFQU1JLDRCQUFBO0FDUUo7O0FETEE7RUFDSSxhQUFBO0FDUUo7O0FETEk7RUFDQTtJQUNJLDJCQUFBO0VDUU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge2NvbG9yOndoaXRlO31cbmxpIHttYXJnaW46IDVweDsgfVxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTt9XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oZWFkZXItbmF2YmFyLFxuOmhvc3QgOjpuZy1kZWVwIC5oZWFkZXItbmF2YmFyIC5jb250YWluZXItZmx1aWQsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1jb250YWluZXIsXG46aG9zdCA6Om5nLWRlZXAgI25hdmJhclN1cHBvcnRlZENvbnRlbnQsXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1uYXYsXG46aG9zdCA6Om5nLWRlZXAgLm5hdi1pdGVtIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHotaW5kZXg6IDEwNTA7XG59XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm5hdmJhci1uYXYgPiBsaSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmE2YTU5Njt9fVxuIiwiaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubGkge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyLW5hdmJhcixcbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyLW5hdmJhciAuY29udGFpbmVyLWZsdWlkLFxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItY29udGFpbmVyLFxuOmhvc3QgOjpuZy1kZWVwICNuYXZiYXJTdXBwb3J0ZWRDb250ZW50LFxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItbmF2LFxuOmhvc3QgOjpuZy1kZWVwIC5uYXYtaXRlbSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24tbWVudSB7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyLW5hdiA+IGxpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE1OTY7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/template/navbar/navbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/template/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var app_services_util_sistema_base_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/sistema-base.api */ "./src/app/services/util/sistema-base.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
        this.usuario = this.shared.usuario;
    }
    NavbarComponent.prototype.canDeactivate = function () {
        return true;
    };
    NavbarComponent.prototype.setPlacement = function (dir) {
        var _this = this;
        setTimeout(function () {
            if (dir === 'rtl') {
                _this.placement = 'bottom-left';
            }
            else if (dir === 'ltr') {
                _this.placement = 'bottom-right';
            }
        }, 3000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        $('#dropdownBasic2').removeClass('dropdown-toggle');
    };
    NavbarComponent.prototype.signOut = function () {
        this.shared.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.addUser = function () {
        this.router.navigate(['/cadastro/usuario/novo']);
    };
    NavbarComponent.prototype.addContract = function () {
        this.router.navigate(['/cadastro/contrato/novo']);
    };
    NavbarComponent.prototype.goSign = function () {
        this.router.navigate(['/assinar/pendente/lista']);
    };
    NavbarComponent.prototype.trocarSenha = function () {
        this.router.navigate(['/cadastro/usuario/alterarsenha']);
    };
    NavbarComponent.prototype.perfilUsuario = function () {
        this.router.navigate(['/cadastro/usuario/perfil/' + this.shared.usuario.id]);
    };
    NavbarComponent.prototype.getPorta = function () {
        var url = "" + app_services_util_sistema_base_api__WEBPACK_IMPORTED_MODULE_5__["URL_API"];
        if (url.substring(6).includes(":")) {
            var iPosicao = url.substring(6).indexOf(':') + 1;
            var porta = url.substring(6).substring(iPosicao, iPosicao + 4);
            if (porta != location.port) {
                return porta;
            }
        }
        return "";
    };
    NavbarComponent.prototype.podeIncluirContrato = function () {
        return this.shared.podeIncluirContrato();
    };
    NavbarComponent.prototype.podeIncluirUsuario = function () {
        return this.shared.podeIncluirUsuario();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menu', { static: false }),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"])
    ], NavbarComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('menuList', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavbarComponent.prototype, "menuList", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/template/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/template/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/template/routes/content-layout.routes.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/template/routes/content-layout.routes.ts ***!
  \*********************************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
/* harmony import */ var app_components_security_pages_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/security/pages/notfound.component */ "./src/app/components/security/pages/notfound.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _security_senhaRecuperacao_senhaRecuperacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../security/senhaRecuperacao/senhaRecuperacao.component */ "./src/app/components/security/senhaRecuperacao/senhaRecuperacao.component.ts");
/* harmony import */ var app_components_assinar_acesso_assinarAcesso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/assinar/acesso/assinarAcesso.component */ "./src/app/components/assinar/acesso/assinarAcesso.component.ts");
/* harmony import */ var app_components_validar_documento_validarAssinatura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/validar/documento/validarAssinatura.component */ "./src/app/components/validar/documento/validarAssinatura.component.ts");
/* harmony import */ var app_components_registrar_registrar_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components/registrar/registrar-cliente.component */ "./src/app/components/registrar/registrar-cliente.component.ts");






// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'login',
        component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'validarChaveAcesso',
        component: app_components_assinar_acesso_assinarAcesso_component__WEBPACK_IMPORTED_MODULE_3__["AssinarAcessoComponent"]
    },
    {
        path: 'validarAssinatura',
        component: app_components_validar_documento_validarAssinatura_component__WEBPACK_IMPORTED_MODULE_4__["ValidarAssinaturaComponent"]
    },
    {
        path: 'recuperarSenha',
        component: _security_senhaRecuperacao_senhaRecuperacao_component__WEBPACK_IMPORTED_MODULE_2__["SenhaRecuperacaoComponent"]
    },
    {
        path: 'registrar',
        component: app_components_registrar_registrar_cliente_component__WEBPACK_IMPORTED_MODULE_5__["RegistrarClienteComponent"]
    },
    {
        path: '404',
        component: app_components_security_pages_notfound_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/template/routes/full-layout.routes.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/template/routes/full-layout.routes.ts ***!
  \******************************************************************/
/*! exports provided: FULL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_ROUTES", function() { return FULL_ROUTES; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _desenvolvimento_desenvolvimento_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../desenvolvimento/desenvolvimento.component */ "./src/app/components/desenvolvimento/desenvolvimento.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../security/auth.guard */ "./src/app/components/security/auth.guard.ts");



// Route for content layout with sidebar, navbar and footer
var FULL_ROUTES = [
    {
        path: '',
        loadChildren: './components/cadastros/cadastros.module#CadastrosModule',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: '',
        loadChildren: './components/assinar/assinar.module#AssinarModule',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: '',
        loadChildren: './components/config/config.module#ConfigModule',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: 'desenv',
        component: _desenvolvimento_desenvolvimento_component__WEBPACK_IMPORTED_MODULE_1__["DesenvolvimentoComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
];


/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar-routes.config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar-routes.config.ts ***!
  \**********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '', title: 'Cadastro', icon: 'icon-book-open', class: 'has-sub', badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false, submenu: [
            {
                path: '/cadastro/cliente/lista', title: 'Clientes', icon: 'ft-file', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 90000200
            },
            {
                path: '/cadastro/usuario/lista', title: 'Usuários', icon: 'ft-users', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 9000100
            },
            {
                path: '/cadastro/contrato/lista', title: 'Documentos', icon: 'ft-file', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 90000000
            },
        ]
    },
    {
        path: '', title: 'Assinaturas', icon: 'ft-file-minus', class: 'has-sub', badge: '', menuId: 80000000,
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false, submenu: [
            {
                path: '/assinar/pendente/lista', title: 'Pendentes', icon: 'ft-check-square', class: '', menuId: 80000100,
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/assinar/recusado/lista', title: 'Recusados', icon: 'ft-check-square', class: '', menuId: 80000200,
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/assinar/vigente/lista', title: 'Vigentes', icon: 'ft-check-square', class: '', menuId: 80000300,
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Configurações', icon: 'ft-file-minus', class: 'has-sub', badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', menuId: 60000000,
        isExternalLink: false, submenu: [
            {
                path: '/config/tipoDocumento', title: 'Tipo Documento', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000100
            },
            {
                path: '/config/papel', title: 'Papel', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000500
            },
            {
                path: '/config/parametrosCliente', title: 'Parâmetros Cliente', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
            }, {
                path: '/config/parametrosEmail', title: 'Parâmetros E-mail', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60001000
            }, {
                path: '/config/parametrosWhatsApp', title: 'Parâmetros WhatsApp', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
            }, {
                path: '/config/parametrosSms', title: 'Parâmetros SMS', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
            },
            {
                path: '/config/emailsTemplate', title: 'Templates E-mail', icon: 'ft-mail', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000600
            },
            {
                path: '/config/whatsappTemplate', title: 'Templates WhatsApp', icon: 'ft-mail', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000600
            },
            {
                path: '/config/alertas', title: 'Alertas', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000300
            },
            {
                path: '/config/parametrosSistema', title: 'Parâmetros Sistema', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000700
            },
            {
                path: '/config/termos', title: 'Termos', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000800
            },
            {
                path: '/config/segmentos', title: 'Segmentos', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000900
            }
        ]
    },
    {
        path: '', title: 'Manuais', icon: 'ft-file-minus', class: 'has-sub', badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', menuId: 50000000,
        isExternalLink: false, submenu: [
            {
                path: '/desenv', title: 'Tutorial', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 50000100
            },
            {
                path: '/desenv', title: 'Integração', icon: 'ft-check-square', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 50000200
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.sidebar-background {\n  background-color: #0b2238;\n}\n\ni {\n  color: orange;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9zaWRlYmFyL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZW1wbGF0ZVxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxXQUFBO0FDRUw7O0FEQUE7RUFBVyxXQUFBO0FDSVg7O0FERkE7RUFBb0IseUJBQUE7QUNNcEI7O0FESkE7RUFBRyxhQUFBO0VBQWUsaUJBQUE7QUNTbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlbXBsYXRlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7d2lkdGg6MTAwJTt9XHJcblxyXG4ubG9nby1pbWcge3dpZHRoOiAxMDAlO31cclxuXHJcbi5zaWRlYmFyLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjogIzBiMjIzODt9XHJcblxyXG5pIHtjb2xvcjogb3JhbmdlOyBmb250LXdlaWdodDogYm9sZDsgfSIsImltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nby1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGViYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjIyMzg7XG59XG5cbmkge1xuICBjb2xvcjogb3JhbmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/components/template/sidebar/sidebar-routes.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(shared) {
        this.shared = shared;
        this.shared = _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../../assets/js/app-sidebar.js');
        this.carregarAcessos();
    };
    SidebarComponent.prototype.canDeactivate = function () {
        return true;
    };
    SidebarComponent.prototype.carregarAcessos = function () {
        // this.menuItems = [];
        //   this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.menuItems = [];
        var menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (menuItem) { return menuItem; });
        for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {
            var menu = menuItems_1[_i];
            var menuAux = Object.assign({}, menu);
            menuAux.submenu = [];
            for (var _a = 0, _b = menu.submenu; _a < _b.length; _a++) {
                var subMenu = _b[_a];
                if (this.shared.temAcesso(subMenu.menuId)) {
                    menuAux.submenu.push(subMenu);
                }
            }
            if (menuAux.submenu.length > 0) {
                this.menuItems.push(menuAux);
            }
        }
        return;
    };
    SidebarComponent.prototype.toggleMenu = function (event, menuItem, siblings) {
        var _this = this;
        if (!menuItem.submenu || menuItem.submenu.length === 0) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        menuItem.open = !menuItem.open;
        siblings
            .filter(function (item) { return item !== menuItem; })
            .forEach(function (item) { return _this.closeMenu(item); });
    };
    SidebarComponent.prototype.closeMenu = function (menuItem) {
        var _this = this;
        menuItem.open = false;
        if (menuItem.submenu && menuItem.submenu.length > 0) {
            menuItem.submenu.forEach(function (subMenu) { return _this.closeMenu(subMenu); });
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/template/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/template/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_util_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/template/template.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/template/template.module.ts ***!
  \********************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util.module */ "./src/app/components/util/util.module.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/components/template/customizer/customizer.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/components/template/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/template/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/template/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/template/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_6__["CustomizerComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleFullscreenDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_5__["UtilModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_6__["CustomizerComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleFullscreenDirective"]
            ],
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ }),

/***/ "./src/app/components/template/template.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/template/template.service.ts ***!
  \*********************************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateService = /** @class */ (function () {
    function TemplateService() {
        this.userPrefs = { color: 'black', image: "assets/img/sidebar-bg/01.jpg", display: 'block', compact: 'false', direction: 'ltr' };
    }
    TemplateService.prototype.getMenuPrefs = function () {
        var color = localStorage.getItem('sisweb-menu-color');
        var image = localStorage.getItem('sisweb-menu-image');
        var display = localStorage.getItem('sisweb-menu-image-display');
        var compact = localStorage.getItem('sisweb-menu-compact');
        var direction = localStorage.getItem('sisweb-menu-direction');
        if (color) {
            this.userPrefs = { color: color, image: image, display: display, compact: compact, direction: direction };
        }
        else {
            this.setMenuPrefs(this.userPrefs);
        }
        return this.userPrefs;
    };
    TemplateService.prototype.setMenuPrefs = function (prefs) {
        localStorage.setItem('sisweb-menu-color', prefs.color);
        localStorage.setItem('sisweb-menu-image', prefs.image);
        localStorage.setItem('sisweb-menu-image-display', prefs.display);
        localStorage.setItem('sisweb-menu-compact', prefs.compact);
        localStorage.setItem('sisweb-menu-direction', prefs.direction);
    };
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-documento {\n  height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXJtb3MvbW9kYWwvdGVybW8tYWNlaXRlLXZpc3VhbGl6YXIvRDpcXEFzc2luYS5OZXRcXFByb2pldG9zXFxHaXRIdWJcXEFzc2luYS5OZXQuUG9ydGFsXFxhc3NpbmEubmV0LndlYi5wb3J0YWwtdjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlcm1vc1xcbW9kYWxcXHRlcm1vLWFjZWl0ZS12aXN1YWxpemFyXFx0ZXJtby1hY2VpdGUtdmlzdWFsaXphci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZXJtb3MvbW9kYWwvdGVybW8tYWNlaXRlLXZpc3VhbGl6YXIvdGVybW8tYWNlaXRlLXZpc3VhbGl6YXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlcm1vcy9tb2RhbC90ZXJtby1hY2VpdGUtdmlzdWFsaXphci90ZXJtby1hY2VpdGUtdmlzdWFsaXphci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtZG9jdW1lbnRveyAgXHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfSIsIi5kaXYtZG9jdW1lbnRvIHtcbiAgaGVpZ2h0OiA3MHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TermoAceiteVisualizarModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermoAceiteVisualizarModalComponent", function() { return TermoAceiteVisualizarModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermoAceiteVisualizarModalComponent = /** @class */ (function () {
    function TermoAceiteVisualizarModalComponent() {
        this.termo = {};
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TermoAceiteVisualizarModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TermoAceiteVisualizarModalComponent.prototype, "instance", void 0);
    TermoAceiteVisualizarModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termo-aceite-visualizar-modal',
            template: __webpack_require__(/*! raw-loader!./termo-aceite-visualizar-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.html"),
            styles: [__webpack_require__(/*! ./termo-aceite-visualizar-modal.component.scss */ "./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.scss")]
        })
    ], TermoAceiteVisualizarModalComponent);
    return TermoAceiteVisualizarModalComponent;
}());



/***/ }),

/***/ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n}\n\n.label-radio-check {\n  font-size: 1rem;\n  font-weight: normal;\n  margin: 6px 0;\n  text-transform: none;\n}\n\n:host ::ng-deep .ng-select-container {\n  border-color: inherit;\n}\n\n:host ::ng-deep .switch100 > span.switch {\n  width: 100%;\n}\n\n:host ::ng-deep .linhaSelecionada {\n  background-color: #cde;\n}\n\n.sw-input-group {\n  margin-bottom: 0;\n}\n\n.sw-input-group input {\n  border-right-style: none;\n}\n\n.sw-input-group .input-group-btn {\n  z-index: 2;\n}\n\n.sw-input-group .input-group-btn button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.sw-input-group .input-group-btn button[disabled] {\n  pointer-events: none;\n}\n\n.btn.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n:host ::ng-deep button[disabled] {\n  cursor: not-allowed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-x {\n  display: block;\n  max-width: auto;\n  margin: 0 auto;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n:host ::ng-deep .table-fixed {\n  table-layout: fixed;\n}\n\n:host ::ng-deep .table-wrapper-scroll-y {\n  max-height: 300px;\n  min-height: 200px;\n  overflow-y: auto;\n}\n\n:host ::ng-deep .alert-custom .alert {\n  margin-bottom: 0.25em;\n}\n\n:host ::ng-deep ngb-rating .star {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n\n:host ::ng-deep ngb-rating .star.filled {\n  color: gold;\n}\n\ntable td {\n  padding: 0.4rem;\n  vertical-align: middle;\n}\n\n:host ::ng-deep .ng-select.ng-select-single .ng-select-container {\n  max-height: 32px;\n  min-height: 32px;\n}\n\n.iconLabel {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXJtb3MvbW9kYWwvdGVybW8tYWNlaXRlL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZXJtb3NcXG1vZGFsXFx0ZXJtby1hY2VpdGVcXHRlcm1vLWFjZWl0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZXJtb3MvbW9kYWwvdGVybW8tYWNlaXRlL3Rlcm1vLWFjZWl0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZXJtb3MvbW9kYWwvdGVybW8tYWNlaXRlL0Q6XFxBc3NpbmEuTmV0XFxQcm9qZXRvc1xcR2l0SHViXFxBc3NpbmEuTmV0LlBvcnRhbFxcYXNzaW5hLm5ldC53ZWIucG9ydGFsLXYxL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFNBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTkg7O0FEU0E7RUFDRyxxQkFBQTtBQ05IOztBRFNBO0VBQ0csV0FBQTtBQ05IOztBRFNBO0VBQ0csc0JBQUE7QUNOSDs7QURTQTtFQUNHLGdCQUFBO0FDTkg7O0FEUUc7RUFDRyx3QkFBQTtBQ05OOztBRFNHO0VBQ0csVUFBQTtBQ1BOOztBRFNNO0VBQ0cseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDUFQ7O0FEVU07RUFDRyxvQkFBQTtBQ1JUOztBRGFBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1ZIOztBRFlHO0VBQ0csa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1ZOOztBRGNBO0VBQ0csbUJBQUE7QUNYSDs7QURjQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUNYSDs7QURjQTtFQUNHLG1CQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNYSDs7QURjQTtFQUNHLHFCQUFBO0FDWEg7O0FEY0E7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNYSDs7QURjRztFQUNHLFdBQUE7QUNaTjs7QURnQkE7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7QUNiSDs7QURnQkE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FDYkg7O0FDdkdBO0VBQ0ksa0JBQUE7QUQwR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlcm1vcy9tb2RhbC90ZXJtby1hY2VpdGUvdGVybW8tYWNlaXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZm9ybS1ib2R5IHtcclxuXHJcblxyXG59XHJcblxyXG4uY29udHJvbC1sYWJlbCB7XHJcbiAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGFiZWwtcmFkaW8tY2hlY2sge1xyXG4gICBmb250LXNpemU6IDFyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIG1hcmdpbjogNnB4IDA7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoMTAwPnNwYW4uc3dpdGNoIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGluaGFTZWxlY2lvbmFkYSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZGU7XHJcbn1cclxuXHJcbi5zdy1pbnB1dC1ncm91cCB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcclxuICAgfVxyXG5cclxuICAgLmlucHV0LWdyb3VwLWJ0biB7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuLmJ0bi5idG4tZmlsZSB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgIGlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1maXhlZCB7XHJcbiAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbGVydC1jdXN0b20gLmFsZXJ0IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmdiLXJhdGluZyAuc3RhciB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICBjb2xvcjogI2IwYzRkZTtcclxuXHJcbiAgIC8vIEZpbGxlZCBTdGFyXHJcbiAgICYuZmlsbGVkIHtcclxuICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgIH1cclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICBtYXgtaGVpZ2h0OiAzMnB4O1xyXG4gICBtaW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmNvbnRyb2wtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbC1yYWRpby1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA2cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2gxMDAgPiBzcGFuLnN3aXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmhhU2VsZWNpb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlO1xufVxuXG4uc3ctaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN3LWlucHV0LWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4ge1xuICB6LWluZGV4OiAyO1xufVxuLnN3LWlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uc3ctaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0biBidXR0b25bZGlzYWJsZWRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4uYnRuLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnRuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC14IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWZpeGVkIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFsZXJ0LWN1c3RvbSAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZ2ItcmF0aW5nIC5zdGFyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjYjBjNGRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nYi1yYXRpbmcgLnN0YXIuZmlsbGVkIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMzJweDtcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmljb25MYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvbW9kYWwuc2Nzc1wiO1xyXG4uaWNvbkxhYmVse1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TermoAceiteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermoAceiteModalComponent", function() { return TermoAceiteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/termo/termo.service */ "./src/app/services/termo/termo.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_components_termos_modal_termo_aceite_visualizar_termo_aceite_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component */ "./src/app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TermoAceiteModalComponent = /** @class */ (function () {
    function TermoAceiteModalComponent(utilService, termoService, dialog, activeModal, router, modalService) {
        this.utilService = utilService;
        this.termoService = termoService;
        this.dialog = dialog;
        this.activeModal = activeModal;
        this.router = router;
        this.modalService = modalService;
        this.documento = {};
        this.termos = [];
        this.termoAceiteVisualizarModal = app_components_termos_modal_termo_aceite_visualizar_termo_aceite_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_12__["TermoAceiteVisualizarModalComponent"];
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_10__["AppInjector"].getInjector();
        this.errorHandler = injector.get(app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerService"]);
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]);
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]);
    }
    TermoAceiteModalComponent.prototype.ngOnInit = function () {
        this.buscaTermos();
    };
    TermoAceiteModalComponent.prototype.pdfInit = function (termosResponse) {
        var _this = this;
        this.termosPendentes = "";
        var prefixo = "";
        termosResponse.forEach(function (termoResponse) {
            var termoDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_11__["decompressFromUTF16"](termoResponse.documento);
            termoResponse.documento = "data:application/pdf;base64," + termoDescompactado;
            _this.termos.push(termoResponse);
            if (termoResponse.tipoTermo == "TERMO_DE_PRIVACIDADE_SISTEMA")
                _this.termosPendentes += prefixo + "a " + termoResponse.nome;
            else
                _this.termosPendentes += prefixo + "o " + termoResponse.nome;
            prefixo = ' e com ';
        });
        this.termosPendentes = "Li e concordo com " + this.termosPendentes + " da Assina.net";
    };
    TermoAceiteModalComponent.prototype.buscaTermos = function () {
        var _this = this;
        this.termoService.getTermosParaAssinaturaPDF(this.shared.usuario).subscribe(function (responseApi) {
            _this.pdfInit(responseApi);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
        return null;
    };
    TermoAceiteModalComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    TermoAceiteModalComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    TermoAceiteModalComponent.prototype.fecharTermosAceitos = function () {
        var todosAceitos = true;
        for (var index = 0; index < this.termos.length; index++) {
            var termo = this.termos[index];
            if (!termo.aceite) {
                todosAceitos = false;
                break;
            }
        }
        if (todosAceitos) {
            //salvar e fechar o modal
            this.salvar();
        }
        else {
            this.showMessage({
                type: 'danger',
                text: "É nescessário aceitar todos os termos."
            });
        }
    };
    TermoAceiteModalComponent.prototype.salvar = function () {
        var _this = this;
        this.message = null;
        this.loading.show();
        var termoAceiteRequest = { usuario: this.shared.usuario, termos: this.termos };
        this.termoService.termosAceite(termoAceiteRequest).subscribe(function (responseApi) {
            _this.loading.hide();
            _this.dialog.success('Termos aceitos com sucesso!');
            _this.activeModal.close("assinado");
            if (_this.urlNavigate) {
                _this.router.navigate([_this.urlNavigate]);
            }
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    TermoAceiteModalComponent.prototype.exibirTermo = function (item) {
        var modalRef = this.modalService.open(this.termoAceiteVisualizarModal, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        });
        modalRef.componentInstance.termo = item;
    };
    TermoAceiteModalComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
        { type: app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_7__["TermoService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], TermoAceiteModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TermoAceiteModalComponent.prototype, "instance", void 0);
    TermoAceiteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-termo-aceite-modal',
            template: __webpack_require__(/*! raw-loader!./termo-aceite-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.html"),
            styles: [__webpack_require__(/*! ./termo-aceite-modal.component.scss */ "./src/app/components/termos/modal/termo-aceite/termo-aceite-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            app_services_termo_termo_service__WEBPACK_IMPORTED_MODULE_7__["TermoService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], TermoAceiteModalComponent);
    return TermoAceiteModalComponent;
}());



/***/ }),

/***/ "./src/app/components/util/combo/cliente/comboCliente.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/util/combo/cliente/comboCliente.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComboClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboClienteComponent", function() { return ComboClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComboClienteComponent = /** @class */ (function () {
    function ComboClienteComponent(userService) {
        this.userService = userService;
        this.clienteChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shared = app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
        this.carregaComboClientes();
        this.excluirPerfilAssinador = false;
        this.mostrarSistema = false;
        this.somentePerfilAdministrador = false;
    }
    ComboClienteComponent.prototype.temErro = function () {
        if (this.touched) {
            return this.control.hasError(this.error) && this.control.touched;
        }
        else {
            return this.control.hasError(this.error) && this.control.dirty;
        }
    };
    Object.defineProperty(ComboClienteComponent.prototype, "clienteSelecionado", {
        get: function () {
            return this._clienteSelecionado;
        },
        set: function (clienteSelecionado) {
            this._clienteSelecionado = clienteSelecionado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboClienteComponent.prototype, "clientePorPerfil", {
        get: function () {
            var _this = this;
            var cliente;
            if (this.somentePerfilAdministrador) {
                cliente = this.clientes.filter(function (x) { return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].parse(x.perfil) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].ROLE_ADMIN || app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].parse(x.perfil) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].ROLE_ADMIN_CLIENTE; });
            }
            else if (this.excluirPerfilAssinador) {
                cliente = this.clientes.filter(function (x) { return x.perfil != null && app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].parse(x.perfil) != app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_4__["PerfilEnum"].ROLE_ASSINADOR; });
            }
            else {
                cliente = this.clientes;
            }
            if (!this.mostrarSistema) {
                cliente = cliente.filter(function (x) { return x.cliente.segmento.identificacao != 'SISTEMA'; });
            }
            cliente.sort(function (a, b) { return (a.cliente.pessoa.nomeRazaoSocial.toUpperCase() < b.cliente.pessoa.nomeRazaoSocial.toUpperCase() ? -1 : 1); });
            var clienteSelecionado = cliente.find(function (x) { return x.cliente.id == _this._clienteSelecionado; });
            if (clienteSelecionado == undefined) {
                if (cliente.length > 0) {
                    this._clienteSelecionado = cliente[0].cliente.id;
                    this.clienteChange();
                }
                else {
                    this._clienteSelecionado = undefined;
                }
            }
            return cliente;
        },
        enumerable: true,
        configurable: true
    });
    ComboClienteComponent.prototype.clienteChange = function () {
        var _this = this;
        var clienteSelecionado = this.shared.clientes.find(function (x) { return x.cliente.id == _this._clienteSelecionado; });
        this.shared.clienteSelecionado = clienteSelecionado;
        this.shared.perfilUsuario = clienteSelecionado.perfil;
        this.clienteChangeEvent.emit();
    };
    ComboClienteComponent.prototype.carregaComboClientes = function () {
        var _this = this;
        if (this.clientes == undefined) {
            if (this.shared.clientes == undefined) {
                this.userService.getClientes(this.shared.usuario).subscribe(function (responseApi) {
                    _this.shared.clientes = responseApi.data;
                    if (_this.shared.clientes.length > 0) {
                        _this.shared.clienteSelecionado = _this.shared.clientes[0];
                        _this.carregaVariaveisShared();
                        _this.clienteChangeEvent.emit();
                    }
                }, function (err) {
                    _this.errorHandler.handle(err);
                });
            }
            else {
                this.carregaVariaveisShared();
            }
        }
    };
    ComboClienteComponent.prototype.carregaVariaveisShared = function () {
        var _this = this;
        this._clienteSelecionado = this.shared.clienteSelecionado.cliente.id;
        var pesquisa = this.shared.clientes.find(function (x) { return x.cliente.id == _this._clienteSelecionado; });
        this.shared.perfilUsuario = pesquisa.perfil;
        this.clientes = this.shared.clientes;
    };
    ComboClienteComponent.ctorParameters = function () { return [
        { type: app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ComboClienteComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboClienteComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboClienteComponent.prototype, "touched", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComboClienteComponent.prototype, "clienteChangeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboClienteComponent.prototype, "excluirPerfilAssinador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboClienteComponent.prototype, "somentePerfilAdministrador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboClienteComponent.prototype, "mostrarSistema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('clienteSelecionado'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ComboClienteComponent.prototype, "clienteSelecionado", null);
    ComboClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combo-pessoa-cliente',
            template: "\n   <div style=\"padding:15px 0px;\" >\n      <ul *ngIf=\"this.clientePorPerfil.length > 0\" class=\"row list-unstyled\" >\n         <li class=\"col-md-12\" ngbDropdown [placement] = \"placement\" >\n               <label for=\"inputClienteSelecionado\" class= \"text-capitalize font-medium-2 font-weight-normal\" style = \"letter-spacing: normal;\">Selecione o cliente</label>\n         </li>\n         <li class=\"col-md-12\" ngbDropdown [placement] = \"placement\" >\n               <select id=\"inputClienteSelecionado\" [(ngModel)]=\"_clienteSelecionado\"\n                  (ngModelChange) = \"clienteChange()\"\n                  name = \"clienteSelecionado\" \n                  class=\"form-control\" \n                  style = \"background-color:#efefef;\"\n                  #clienteSelecionado = \"ngModel\" >\n                  <option *ngFor=\"let cliente of clientePorPerfil\" [value] = \"cliente.cliente.id\">{{ cliente.cliente.pessoa.nomeRazaoSocial }}</option>\n               </select>\n         </li>\n      </ul>      \n   </div>\n  "
        }),
        __metadata("design:paramtypes", [app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ComboClienteComponent);
    return ComboClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/botoes-cadastro.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/util/form/botoes-cadastro.component.ts ***!
  \*******************************************************************/
/*! exports provided: BotoesCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotoesCadastroComponent", function() { return BotoesCadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotoesCadastroComponent = /** @class */ (function () {
    function BotoesCadastroComponent() {
        this.consultando = false;
        this.labelSalvar = "Salvar";
        this.labelVoltar = "Voltar";
        this.labelCancelar = "Cancelar";
        this.cssCustom = "";
        this.cancelarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voltarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.excluirEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BotoesCadastroComponent.prototype.ngOnInit = function () {
    };
    BotoesCadastroComponent.prototype.cancelar = function () {
        this.cancelarEvent.emit();
    };
    BotoesCadastroComponent.prototype.voltar = function () {
        this.voltarEvent.emit();
    };
    BotoesCadastroComponent.prototype.excluir = function () {
        this.excluirEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesCadastroComponent.prototype, "podeVoltar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesCadastroComponent.prototype, "editando", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesCadastroComponent.prototype, "consultando", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotoesCadastroComponent.prototype, "labelSalvar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotoesCadastroComponent.prototype, "labelVoltar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotoesCadastroComponent.prototype, "labelCancelar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotoesCadastroComponent.prototype, "cssCustom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesCadastroComponent.prototype, "cancelarEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesCadastroComponent.prototype, "voltarEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesCadastroComponent.prototype, "excluirEvent", void 0);
    BotoesCadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-botoes-cadastro',
            template: "\n\n   <div class=\"crud-actions form-actions col-md-12 text-right clearfix modal-footer\">\n      <ng-content select=\"[inicio]\" ></ng-content>\n      <button *ngIf=\"!consultando\" type=\"submit\" \n         class=\"{{cssCustom}} btn btn-lg btn-raised btn-primary mr-1\" >\n         <!--<i class=\"fa fa-check\"></i>--> {{labelSalvar}}\n      </button>\n      <button *ngIf=\"!podeVoltar && cancelarEvent.observers.length > 0\" type=\"button\" \n         class=\"{{cssCustom}} btn btn-lg btn-raised btn-grey mr-1\" (click)=\"cancelar()\">\n      <!-- <i class=\"fa fa-ban\"></i>--> {{labelCancelar}}\n      </button>\n      <button *ngIf=\"podeVoltar\" type=\"button\" \n         class=\"{{cssCustom}} btn btn-lg btn-raised btn-grey mr-1\" (click)=\"voltar()\">\n      <!--<i class=\"fa fa-repeat\"></i>--> {{labelVoltar}}\n      </button>\n      <button type=\"button\" \n         class=\"{{cssCustom}} btn btn-lg btn-raised btn-danger mr-1\" *ngIf=\"editando\" (click)=\"excluir()\">\n      <!--<i class=\"fa fa-times\"></i>--> Excluir\n      </button>\n      <ng-content select=\"[fim]\" ></ng-content>\n   </div>\n   "
        }),
        __metadata("design:paramtypes", [])
    ], BotoesCadastroComponent);
    return BotoesCadastroComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/botoes-lista.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/util/form/botoes-lista.component.ts ***!
  \****************************************************************/
/*! exports provided: BotoesListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotoesListaComponent", function() { return BotoesListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BotoesListaComponent = /** @class */ (function () {
    function BotoesListaComponent() {
        this.selecionado = false;
        this.permiteIncluir = true;
        this.permiteEditar = true;
        this.permiteExcluir = true;
        this.incluirEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.excluirEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BotoesListaComponent.prototype.ngOnInit = function () {
    };
    BotoesListaComponent.prototype.incluir = function () {
        this.incluirEvent.emit();
    };
    BotoesListaComponent.prototype.editar = function () {
        this.editarEvent.emit();
    };
    BotoesListaComponent.prototype.excluir = function () {
        this.excluirEvent.emit();
    };
    Object.defineProperty(BotoesListaComponent.prototype, "podeExcluir", {
        get: function () {
            return (this.permiteExcluir == false) ? this.permiteExcluir : this.excluirEvent.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesListaComponent.prototype, "selecionado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesListaComponent.prototype, "permiteIncluir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesListaComponent.prototype, "permiteEditar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoesListaComponent.prototype, "permiteExcluir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesListaComponent.prototype, "incluirEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesListaComponent.prototype, "editarEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotoesListaComponent.prototype, "excluirEvent", void 0);
    BotoesListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-botoes-lista',
            template: "\n   <div class=\"crud-actions btn-group-justified btn-group-raised\">\n      <ng-content select=\"[inicio]\" ></ng-content>\n      <button *ngIf=\"permiteIncluir\" class=\"btn btn-raised btn-lg btn-primary mr-1\" type=\"button\" (click)=\"incluir()\">\n         <!--<i class=\"fa fa-plus\"></i>-->Novo\n      </button>\n      <button *ngIf=\"permiteEditar\"  class=\"btn btn-raised btn-lg btn-blue-as mr-1\" type=\"button\" (click)=\"editar()\"\n         [disabled]=\"selecionado\">\n        <!--<i class=\"fa fa-edit\"></i>--> Editar\n      </button>\n      <button class=\"btn btn-raised btn-lg btn-danger mr-1\" type=\"button\" (click)=\"excluir()\"\n         [disabled]=\"selecionado\" *ngIf=\"podeExcluir\">\n        <!--<i class=\"fa fa-times\"></i>--> Excluir\n      </button>\n      <ng-content select=\"[fim]\" ></ng-content>\n   </div>\n   "
        }),
        __metadata("design:paramtypes", [])
    ], BotoesListaComponent);
    return BotoesListaComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/cadastro-parte-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/util/form/cadastro-parte-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: CadastroParteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroParteFormComponent", function() { return CadastroParteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.ts");
/* harmony import */ var app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/cadastro/cadastro/contrato.service */ "./src/app/services/cadastro/cadastro/contrato.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroParteFormComponent = /** @class */ (function () {
    function CadastroParteFormComponent(contratoService, loading, dialog, errorHandler, shared) {
        this.contratoService = contratoService;
        this.loading = loading;
        this.dialog = dialog;
        this.errorHandler = errorHandler;
        this.shared = shared;
        this._dados = { listagem: [], dirty: false };
        this.contratoPapelList = [];
        this.permiteIncluir = true;
        this.permiteEditar = true;
        this.permiteExcluir = true;
        this.permiteExibirDocumento = false;
        this.contratoAssinado = false;
        this.novoRegistro = "Nova Parte";
        this.mensagemExclusao = "'Deseja retirar esta parte para assinatura ? '";
        this.tituloModal = "Cadastro > Contrato > Contrato Partes";
        this._tipoCadastro = 'PARTES';
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* titulosPartes = ['Ação', 'Cpf/Cnpj', 'Nome/Razão Social', 'Assinaturas'];*/
        this.titulosPartes = ['Ação', 'Nome/Razão Social', 'Assinaturas'];
        this.contratoParteForm = app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_2__["ContratoParteModalComponent"];
    }
    CadastroParteFormComponent.prototype.change = function () {
        this.changeEvent.emit();
    };
    Object.defineProperty(CadastroParteFormComponent.prototype, "dados", {
        get: function () {
            return this._dados;
        },
        set: function (dados) {
            var _this = this;
            this._dados = dados;
            if (this._dados != undefined) {
                this._dados.listagem.forEach(function (value) {
                    return value = Object.assign(value, { _permiteEditar: _this.permiteEditarItem(value) });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadastroParteFormComponent.prototype, "tipoCadastro", {
        get: function () {
            return this._tipoCadastro;
        },
        set: function (tipoCadastro) {
            this._tipoCadastro = tipoCadastro;
            if (tipoCadastro == 'OBSERVADOR') {
                this.titulosPartes = ['Ação', 'Nome/Razão Social'];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadastroParteFormComponent.prototype, "dadosComplementares", {
        get: function () {
            if (this.dados.listagem == undefined) {
                return undefined;
            }
            var dadosComplementares = {
                comboPreRequisito: JSON.parse(JSON.stringify(this.dados.listagem)),
                comboContratoPapel: this.contratoPapelList
            };
            return dadosComplementares;
        },
        enumerable: true,
        configurable: true
    });
    CadastroParteFormComponent.prototype.reenviaEmail = function (parte) {
        var _this = this;
        this.loading.show();
        this.contratoService.reenviaSolicitacaoAssintura(parte).subscribe(function (responseApi) {
            _this.loading.hide();
            _this.dialog.success('Email enviado para o e-mail: ' + parte.email);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
        var email = parte.email;
    };
    CadastroParteFormComponent.prototype.permiteEditarItem = function (item) {
        var result = false;
        if (this.shared.perfilUsuarioAdmin() || this.shared.verificaPerfilClienteSelecionado(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_7__["PerfilEnum"].ROLE_USUARIO)) {
            if (item.tipoPessoa == 'FISICA') {
                result = item.statusAssinatura != 'ASSINADO';
            }
            if (item.tipoPessoa == 'JURIDICA') {
                if (item.contatos.length == 0) {
                    return true;
                }
                item.contatos.forEach(function (contato) {
                    if (contato.statusAssinatura != 'ASSINADO') {
                        result = true;
                        return;
                    }
                    ;
                });
            }
        }
        return result;
    };
    CadastroParteFormComponent.ctorParameters = function () { return [
        { type: app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_3__["ContratoService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CadastroParteFormComponent.prototype, "contratoPapelList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "showButtons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "permiteIncluir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "permiteEditar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "permiteExcluir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "permiteExibirDocumento", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CadastroParteFormComponent.prototype, "contratoAssinado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CadastroParteFormComponent.prototype, "novoRegistro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CadastroParteFormComponent.prototype, "mensagemExclusao", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CadastroParteFormComponent.prototype, "tituloModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CadastroParteFormComponent.prototype, "statusContrato", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('change'),
        __metadata("design:type", Object)
    ], CadastroParteFormComponent.prototype, "changeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dados'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CadastroParteFormComponent.prototype, "dados", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tipoCadastro'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CadastroParteFormComponent.prototype, "tipoCadastro", null);
    CadastroParteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-parte-form',
            template: "     <ng-template #tooltipParte>\n                        <span *ngIf=\"!contratoAssinado\">Reenviar solicita\u00E7\u00E3o de assinatura</span>\n                        <span *ngIf=\"contratoAssinado\">Reenviar contrato vigente</span>\n                    </ng-template>\n                    <ng-template #tooltipObservador>\n                        <span *ngIf=\"!contratoAssinado\">Reenviar solicita\u00E7\u00E3o de observador</span>\n                        <span *ngIf=\"contratoAssinado\">Reenviar contrato vigente</span>\n                    </ng-template>\n                    <app-complete-tab-form [content]=\"contratoParteForm\" [dados]=\"dados\"\n                                           [dadosComplementares]=\"dadosComplementares\"\n                                           [cols]=\"titulosPartes\"\n                                           (change)=\"change()\"\n                                           (permiteEditarItem)=\"permiteEditarItem\"\n                                           [novoRegistro]=\"novoRegistro\"\n                                           [mensagemExclusao]=\"mensagemExclusao\"\n                                           [itemTemplate]=\"detalheParte\"\n                                           [showButtons]=\"showButtons\"\n                                           [permiteEditar]=\"permiteEditar\"\n                                           [permiteIncluir]=\"permiteIncluir\"\n                                           [permiteExcluir]=\"permiteExcluir\"\n                                           [permiteExibirDocumento]=\"permiteExibirDocumento\"\n                                           [tituloModal]= \"tituloModal\"\n                                           >\n                        <ng-template #detalheParte let-item>\n                            <!--<td>{{item.cpfCnpj}}</td>-->\n                            <td> \n                                <div style=\"display: inline-flex;\">\n                                    <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                            this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&\n                                            tipoCadastro=='OBSERVADOR' &&\n                                            (item.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&\n                                            item.tipoPessoa=='FISICA'\"\n                                        class=\" d-block\"\n                                        (click)=\"reenviaEmail(item)\"\n                                        style=\"font-size: small;margin-right:5px\"\n                                        [ngbTooltip]=\"tooltipObservador\">\n                                        <i class=\"fa fa-envelope-o\"></i>\n                                    </span>\n                                    {{item.nomeRazaoSocial}}\n                                </div>\n                            </td>\n                            <td *ngIf=\"item.tipoPessoa=='FISICA'&& tipoCadastro == 'PARTES'\"  >\n\n                                <span style=\"display: inline-flex;font-size: xx-small;\">\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&\n                                                     tipoCadastro!='OBSERVADOR'  &&\n                                                     (item.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&\n                                                     item.tipoPessoa=='FISICA'\"\n                                              class=\" d-block\"\n                                              (click)=\"reenviaEmail(item)\"\n                                              style=\"font-size: small;margin-right:5px\"\n                                              [ngbTooltip]=\"tooltipParte\">\n                                               <i class=\"fa fa-envelope-o\"></i>\n                                        </span>\n\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     item.tipoPessoa=='FISICA' &&\n                                                     item.statusAssinatura=='NAOASSINADO' \"\n                                              class=\"bg-danger d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"N\u00E3o assinado\"\n                                              data-bg-color=\"primary\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     item.tipoPessoa=='FISICA' &&\n                                                     item.statusAssinatura=='NAOLIBERADO'\"\n                                              class=\"bg-grey d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinatura n\u00E3o liberada\"\n                                              data-bg-color=\"grey\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     item.tipoPessoa=='FISICA' &&\n                                                     item.statusAssinatura=='ASSINADO'\"\n                                              class=\"bg-success d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinado\"\n                                              data-bg-color=\"success\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     item.tipoPessoa=='FISICA' &&\n                                                     item.statusAssinatura=='ASSINADOPARCIAL'\"\n                                              class=\"bg-warning d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinado Parcial\"\n                                              data-bg-color=\"primary\"></span>\n\n\n                                        <div >\n                                            <div *ngFor=\"let papel of item.papel\" style=\"display: inline-table\">\n                                                <span style=\"display: inline-flex;font-size: x-small;\">\n                                                    <span style=\"margin-left:5px\">{{papel.papel.nome}}</span>\n                                                </span>\n                                            </div> \n                                        </div>\n                                </span>\n                            </td>\n                            <td *ngIf=\"item.tipoPessoa=='JURIDICA'  && tipoCadastro == 'PARTES'\">\n                                <div *ngFor=\"let contato of item.contatos\" style=\"display: block\">\n\n                                     <span style=\"display: inline-flex;font-size: xx-small;\">\n\n                                        <span *ngIf=\"statusContrato != 'NAOLIBERADOASSINTAURA' &&\n                                                     this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&                                                    \n                                                     (contato.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&\n                                                     tipoCadastro!='OBSERVADOR'  &&\n                                                     contato.tipoPessoa=='FISICA'\"\n                                                     class=\" d-block\"\n                                                     (click)=\"reenviaEmail(contato)\"\n                                                     style=\"font-size: small;margin-right:5px\"\n                                                     [ngbTooltip]=\"tooltipParte\">\n                                            <i class=\"fa fa-envelope-o\"></i>\n                                        </span>\n\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     contato.tipoPessoa=='FISICA' &&\n                                                     contato.statusAssinatura=='NAOASSINADO' \"\n                                              class=\"bg-danger d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"N\u00E3o assinado\"\n                                              data-bg-color=\"primary\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     contato.tipoPessoa=='FISICA' &&\n                                                     contato.statusAssinatura=='NAOLIBERADO' \"\n                                              class=\"bg-grey d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinatura n\u00E3o liberada\"\n                                              data-bg-color=\"grey\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     contato.tipoPessoa=='FISICA' &&\n                                                     contato.statusAssinatura=='ASSINADO'\"\n                                              class=\"bg-success d-block rounded-circle\"\n                                              style=\"margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinado\"\n                                              data-bg-color=\"success\"></span>\n                                        <span *ngIf=\"statusContrato!= 'NAOLIBERADOASSINTAURA' &&\n                                                     contato.tipoPessoa=='FISICA' &&\n                                                     contato.statusAssinatura=='ASSINADOPARCIAL'\"\n                                              class=\"bg-warning d-block rounded-circle\"\n                                              style=\"color:#F77E17;margin-top:4px;width:10px; height:10px;\"\n                                              ngbTooltip=\"Assinado Parcial\"\n                                              data-bg-color=\"primary\"></span>\n                                         <span style=\"margin-left:5px\">{{contato.nomeRazaoSocial}}</span>\n                                     </span><br>\n                                    <div *ngFor=\"let papel of contato.papel\" style=\"display: inline-table\">\n                                     <span style=\"display: inline-flex;font-size: x-small;\">\n                                                        <span style=\"margin-left:5px\">{{papel.papel.nome}}</span>\n                                                    </span>\n\n                                    </div>\n                                </div>\n                            </td>\n                        </ng-template>\n                    </app-complete-tab-form>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    table {\n        border-collapse: initial;}\n    .table .thead-light th {\n        color: #495057;\n        background-color: #e6e6e6;\n        border: #a6a6a5 1px solid;\n        border-radius:0.25rem;\n\n\n    }\n   .sw-fixed-width {width: 90px;min-width:90px;}\n   .sw-display-none {display: none;}\n  "]
        }),
        __metadata("design:paramtypes", [app_services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_3__["ContratoService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], CadastroParteFormComponent);
    return CadastroParteFormComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/complete-tab-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/util/form/complete-tab-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompleteTabFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTabFormComponent", function() { return CompleteTabFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompleteTabFormComponent = /** @class */ (function () {
    function CompleteTabFormComponent(modalService, dialog, shared) {
        this.modalService = modalService;
        this.dialog = dialog;
        this.shared = shared;
        this.required = false;
        this.large = true;
        this.sizeExibir = 'lg';
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permiteEditarItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._cols = [];
        this._permiteIncluir = true;
        this._permiteEditar = true;
        this._permiteExcluir = true;
        this._permiteExibirDocumento = false;
        this._bloqueiaEdicao = false;
        this._retornaListaCompleta = false;
        this._novoRegistro = "Novo Registro";
        this._mensagemExclusao = "Deseja excluir este item ?";
    }
    Object.defineProperty(CompleteTabFormComponent.prototype, "dados", {
        get: function () {
            return this._dados;
        },
        set: function (dados) {
            this._dados = dados;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "dadosComplementares", {
        get: function () {
            return this._dadosComplementares;
        },
        set: function (dadosComplementares) {
            this._dadosComplementares = dadosComplementares;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "listagem", {
        get: function () {
            return this._dados.listagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "modified", {
        get: function () {
            return this._dados.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (value) {
            this._cols = value;
            if (this._cols) {
                this._colspan = this._cols.length + 1;
                if (!this.showButtons) {
                    this._colspan--;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "showButtons", {
        get: function () {
            return this._showButtons;
        },
        set: function (value) {
            this._showButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "permiteIncluir", {
        get: function () {
            return this._permiteIncluir;
        },
        set: function (value) {
            this._permiteIncluir = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "permiteEditar", {
        get: function () {
            return this._permiteEditar;
        },
        set: function (value) {
            this._permiteEditar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "permiteExcluir", {
        get: function () {
            return this._permiteExcluir;
        },
        set: function (value) {
            this._permiteExcluir = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "permiteExibirDocumento", {
        get: function () {
            return this._permiteExibirDocumento;
        },
        set: function (value) {
            this._permiteExibirDocumento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "bloqueiaEdicao", {
        get: function () {
            return this._bloqueiaEdicao;
        },
        set: function (value) {
            this._bloqueiaEdicao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "novoRegistro", {
        get: function () {
            return this._novoRegistro;
        },
        set: function (value) {
            this._novoRegistro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "mensagemExclusao", {
        get: function () {
            return this._mensagemExclusao;
        },
        set: function (value) {
            this._mensagemExclusao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "retornaListaCompleta", {
        get: function () {
            return this._retornaListaCompleta;
        },
        set: function (value) {
            this._retornaListaCompleta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteTabFormComponent.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        enumerable: true,
        configurable: true
    });
    CompleteTabFormComponent.prototype.incluir = function () {
        var _this = this;
        var modalRef = this.modalService.open(this.content, {
            backdrop: 'static', centered: true, keyboard: false, size: this.large ? 'lg' : null
        });
        if (this._dadosComplementares) {
            modalRef.componentInstance.dadosComplementares = this._dadosComplementares;
        }
        if (this._retornaListaCompleta) {
            modalRef.componentInstance.instance = JSON.parse(JSON.stringify(this._dados.listagem));
        }
        modalRef.componentInstance.titulo = this.tituloModal;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].booltoEnum(result.status);
                }
                _this._dados.dirty = true;
                if (_this._retornaListaCompleta && Array.isArray(result)) {
                    _this._dados.listagem = result;
                }
                else if (Array.isArray(result) && result.length > 0) {
                    for (var i = 0, len = result.length; i < len; ++i) {
                        _this._dados.listagem.push(result[i]);
                    }
                }
                else {
                    _this._dados.listagem.push(result);
                }
                _this.changeEvent.emit();
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    CompleteTabFormComponent.prototype.editar = function (item, i) {
        var _this = this;
        this._index = i;
        var modalRef = this.modalService.open(this.content, {
            backdrop: 'static', centered: true, keyboard: false, size: this.large ? 'lg' : null
        });
        modalRef.componentInstance.instance = JSON.parse(JSON.stringify(item));
        if (this._dadosComplementares) {
            modalRef.componentInstance.dadosComplementares = this._dadosComplementares;
        }
        modalRef.componentInstance.titulo = this.tituloModal;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].booltoEnum(result.status);
                }
                _this._dados.dirty = true;
                _this._dados.listagem.splice(_this._index, 1, result);
                _this.changeEvent.emit();
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    CompleteTabFormComponent.prototype.excluir = function (item) {
        var _this = this;
        var index = this._dados.listagem.indexOf(item, 0);
        if (index != -1) {
            this.dialog.confirmDelete(this.mensagemExclusao)
                .then(function (candelete) {
                if (candelete) {
                    _this._dados.dirty = true;
                    _this._dados.listagem.splice(index, 1);
                    _this.changeEvent.emit();
                }
            });
        }
    };
    CompleteTabFormComponent.prototype.exibirDocumento = function (item, i) {
        var _this = this;
        this._index = i;
        if (this.beforeExibirDocumento) {
            this.beforeExibirDocumento(JSON.parse(JSON.stringify(item)), function (documento) { return _this.abrirModalDocumento(documento); });
            return;
        }
        this.abrirModalDocumento(JSON.parse(JSON.stringify(item)));
    };
    CompleteTabFormComponent.prototype.abrirModalDocumento = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(this.viewerDoc, {
            backdrop: 'static', centered: true, keyboard: false, size: this.sizeExibir
        });
        modalRef.componentInstance.instance = item;
        modalRef.result.then(function (result) {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = app_model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].booltoEnum(result.status);
                }
                _this._dados.dirty = true;
                _this._dados.listagem.splice(_this._index, 1);
                _this._dados.listagem.push(result);
                _this.changeEvent.emit();
            }
        }).catch(function (result) {
            console.log(result);
        });
    };
    CompleteTabFormComponent.prototype.isListagemVazia = function () {
        return this.required && this._showButtons &&
            (!this._dados || this._dados.listagem.length == 0);
    };
    CompleteTabFormComponent.prototype.isListagemModificada = function () {
        return this.modified;
    };
    CompleteTabFormComponent.prototype.permiteEditarItem = function (item) {
        if (item != undefined && item._permiteEditar != undefined) {
            return item._permiteEditar;
        }
        else {
            return this._permiteEditar;
        }
    };
    CompleteTabFormComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    CompleteTabFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteTabFormComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CompleteTabFormComponent.prototype, "tituloModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteTabFormComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteTabFormComponent.prototype, "viewerDoc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], CompleteTabFormComponent.prototype, "beforeExibirDocumento", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CompleteTabFormComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CompleteTabFormComponent.prototype, "itemTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CompleteTabFormComponent.prototype, "large", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompleteTabFormComponent.prototype, "sizeExibir", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('change'),
        __metadata("design:type", Object)
    ], CompleteTabFormComponent.prototype, "changeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('permiteEditarItem'),
        __metadata("design:type", Object)
    ], CompleteTabFormComponent.prototype, "permiteEditarItemEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dados'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CompleteTabFormComponent.prototype, "dados", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dadosComplementares'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CompleteTabFormComponent.prototype, "dadosComplementares", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cols'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CompleteTabFormComponent.prototype, "cols", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showButtons'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "showButtons", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('permiteIncluir'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "permiteIncluir", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('permiteEditar'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "permiteEditar", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('permiteExcluir'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "permiteExcluir", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('permiteExibirDocumento'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "permiteExibirDocumento", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bloqueiaEdicao'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "bloqueiaEdicao", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('novoRegistro'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CompleteTabFormComponent.prototype, "novoRegistro", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mensagemExclusao'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CompleteTabFormComponent.prototype, "mensagemExclusao", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('retornaListaCompleta'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CompleteTabFormComponent.prototype, "retornaListaCompleta", null);
    CompleteTabFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complete-tab-form',
            template: "\n   <form class=\"form form-horizontal\" autocomplete=\"off\" novalidate>\n      <div class=\"form-body\">\n         <h4 class=\"form-section mb-0 border-bottom-0\" *ngIf=\"titulo || (showButtons && permiteIncluir)\">\n            <div>\n               <span *ngIf=\"titulo\">\n                 <i class=\"fa fa-angle-double-right\"></i>\n                  <span>{{titulo}}</span>\n                  <a class=\"btn btn-primary btn-flat ml-1 mr-2 mb-0 p-1\" placement=\"top\" ngbTooltip=\"Incluir\"\n                        (click)=\"incluir()\" *ngIf=\"showButtons && permiteIncluir\">\n                        <i class=\"fa fa-plus-circle font-medium-5\"></i>\n                  </a>\n               </span>\n               <div class=\"btn-group btn-group-justified btn-group-raised\" *ngIf=\"!titulo\">\n                  <button class=\"btn btn-raised btn-primary mr-2\" type=\"button\" (click)=\"incluir()\" *ngIf=\"showButtons  && permiteIncluir\">\n                     <i class=\"fa fa-plus\"></i> {{novoRegistro}}\n                  </button>\n               </div>\n               <span class=\"badge badge-warning font-medium-3\" *ngIf=\"isListagemVazia()\">\n                  Informe pelo menos um registro\n               </span>\n               <span class=\"badge badge-secondary\" *ngIf=\"isListagemModificada()\">\n                  Clique em 'Salvar' para gravar as modifica\u00E7\u00F5es\n               </span>\n            </div>\n         </h4>\n         <div class=\"table-responsive table-wrapper-scroll-x mb-0\">\n            <table class=\"table-style1 table mb-0\" *ngIf=\"true\">\n               <thead class=\"thead-light\">\n                  <tr>\n                     <th class=\"p-1\" *ngFor=\"let c of cols; let i = index\" [ngClass]=\"{'sw-fixed-width': i==0, 'sw-display-none': !showButtons && !permiteExibirDocumento && i==0}\">\n                        {{c}}\n                     </th>\n                  </tr>\n               </thead>\n               <tbody  [ngStyle]=\"classUpperCase()\">\n                  <tr *ngFor=\"let item of listagem; let i = index\">\n                     <td style=\"padding: 0\" *ngIf=\"showButtons\">\n\n                     <a class=\"btn btn-danger btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Excluir\"\n                           *ngIf=\"permiteExcluir\"\n                           (click)=\"excluir(item)\">\n                           <i class=\"fa fa-times-circle font-medium-4\"></i>\n                        </a>\n\n                     <a class=\"btn btn-warning btn-flat mb-0 p-1 mr-1\" placement=\"top\" ngbTooltip=\"Editar\"\n                           *ngIf=\"permiteEditarItem(item)\"\n                           (click)=\"editar(item, i)\">\n                           <!--<i class=\"fa fa-edit font-medium-4\"></i>-->\n                           <img src=\"../../../assets/img/icones/lapis.png\"/>\n                        </a>\n\n\n\n                        <a class=\"btn btn-info btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Exibir Documento\"\n                          *ngIf=\"permiteExibirDocumento\"\n                          (click)=\"exibirDocumento(item)\">\n                          <!--<i class=\"fa fa-eye font-medium-4\"></i>-->\n                          <img src=\"../../../assets/img/icones/lupa.png\"/>\n                        </a>\n\n                     </td>\n                     <td style=\"padding: 0\" *ngIf=\"!showButtons && permiteExibirDocumento\">\n                        <a class=\"btn btn-info btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Exibir Documento\"\n                          *ngIf=\"permiteExibirDocumento\"\n                          (click)=\"exibirDocumento(item)\">\n                          <!--<i class=\"fa fa-eye font-medium-4\"></i>-->\n                          <img src=\"../../../assets/img/icones/lupa.png\"/>\n                        </a>\n                     </td>\n\n                     <ng-container *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item  }\">\n                     </ng-container>\n                  </tr>\n               </tbody>\n               <tr *ngIf=\"!listagem || listagem.length==0\">\n                  <td [colSpan]=\"colspan\">Nenhum registro encontrado</td>\n               </tr>\n            </table>\n         </div>\n      </div>\n      <app-confirm-dialog></app-confirm-dialog>\n   </form>\n\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n   .sw-fixed-width {width: 90px;min-width:90px;}\n   .sw-display-none {display: none;}\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], CompleteTabFormComponent);
    return CompleteTabFormComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/dynamic-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/util/form/dynamic-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynamicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function() { return DynamicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipe/valuesPipe */ "./src/app/components/util/pipe/valuesPipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicTableComponent = /** @class */ (function () {
    function DynamicTableComponent() {
        this._cols = [];
        this._rows = [];
        this._pipes = [];
        this._listagem = [];
    }
    DynamicTableComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DynamicTableComponent.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (value) {
            this._cols = value;
            if (this._cols) {
                this._colspan = this._cols.length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicTableComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (value) {
            this._rows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicTableComponent.prototype, "pipes", {
        get: function () {
            return this._pipes;
        },
        set: function (value) {
            this._pipes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicTableComponent.prototype, "listagem", {
        get: function () {
            return this._listagem;
        },
        set: function (value) {
            this._listagem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicTableComponent.prototype, "showButtons", {
        get: function () {
            return this._showButtons;
        },
        set: function (value) {
            this._showButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicTableComponent.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        enumerable: true,
        configurable: true
    });
    DynamicTableComponent.prototype.incluir = function () {
        console.log('Chamou Incluir...');
    };
    DynamicTableComponent.prototype.editar = function (item) {
        console.log('Chamou editar...', item);
    };
    DynamicTableComponent.prototype.excluir = function (item) {
        console.log('Chamou excluir...', item);
        var index = this._listagem.indexOf(item, 0);
        if (index != -1) {
            this._listagem.splice(index, 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cols'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicTableComponent.prototype, "cols", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rows'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicTableComponent.prototype, "rows", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pipes'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicTableComponent.prototype, "pipes", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('listagem'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DynamicTableComponent.prototype, "listagem", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showButtons'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DynamicTableComponent.prototype, "showButtons", null);
    DynamicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-table',
            template: "\n    <div class=\"table-wrapper-scroll-x mb-0\">\n      <table class=\"table table-hover mb-0\" *ngIf=\"true\">\n        <thead class=\"thead-light\">\n            <tr>\n              <th class=\"p-1\" *ngFor=\"let c of cols; let i = index\" [ngClass]=\"{'sw-min-width': i==0, 'sw-display-none': !showButtons && i==0}\">\n                {{c}}\n              </th>\n            </tr>\n        </thead>\n        <tbody [ngStyle]=\"classUpperCase()\" >\n            <tr *ngFor=\"let reg of listagem\">\n              <td style=\"padding: 0\" *ngIf=\"showButtons\">\n                  <button class=\"btn btn-warning btn-flat mb-0 p-1 mr-1\" placement=\"top\" ngbTooltip=\"Editar\"\n                    (click)=\"editar(reg)\">\n                    <i class=\"fa fa-edit font-medium-4\"></i>\n                  </button>\n                  <button class=\"btn btn-danger btn-flat mb-0 p-1\" placement=\"top\" ngbTooltip=\"Excluir\"\n                    (click)=\"excluir(reg)\">\n                    <i class=\"fa fa-times-circle font-medium-4\"></i>\n                  </button>\n              </td>\n              <td style=\"padding: 0\" class=\"p-1 valign-middle\" *ngFor=\"let item of rows; let i = index\">\n                  <span>{{reg[item] | values:pipes[i]}}</span>\n              </td>\n            </tr>\n        </tbody>\n        <tr *ngIf=\"!listagem.length\">\n            <td [colSpan]=\"colspan\">Nenhum registro encontrado</td>\n        </tr>\n      </table>\n    </div>\n  ",
            providers: [_pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_1__["ValuesPipe"]],
            styles: [".sw-min-width {min-width: 90px;} .sw-display-none {display: none;}"]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicTableComponent);
    return DynamicTableComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/form-simples.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/util/form/form-simples.component.ts ***!
  \****************************************************************/
/*! exports provided: FormSimplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSimplesComponent", function() { return FormSimplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormSimplesComponent = /** @class */ (function () {
    function FormSimplesComponent(router, shared) {
        this.router = router;
        this.shared = shared;
        this.modal = false;
    }
    FormSimplesComponent.prototype.expand = function () {
        if (this.modal == undefined || !this.modal) {
            $('a[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
            $('.main-panel').toggleClass('card-fullscreen panel-min');
            $('.content-wrapper').toggleClass('card-fullscreen');
        }
    };
    FormSimplesComponent.prototype.home = function () {
        if (this.modal == undefined || !this.modal) {
            if ($('.main-panel').hasClass('card-fullscreen')) {
                $('.main-panel').removeClass('card-fullscreen');
                $('.main-panel').addClass('panel-min');
                $('.content-wrapper').removeClass('card-fullscreen');
            }
            this.router.navigate([this.rota ? this.rota : '/']);
        }
    };
    FormSimplesComponent.prototype.classUpperCase = function () {
        return this.shared.classUpperCase;
    };
    FormSimplesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('titulo'),
        __metadata("design:type", String)
    ], FormSimplesComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('navegacao'),
        __metadata("design:type", String)
    ], FormSimplesComponent.prototype, "navegacao", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rota'),
        __metadata("design:type", String)
    ], FormSimplesComponent.prototype, "rota", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormSimplesComponent.prototype, "modal", void 0);
    FormSimplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-simples',
            template: "\n   <section id=\"principal\" class=\"crud-page\" *ngIf=\"!modal\">\n      <div class=\"row \">\n      <div class=\"text-center col-sm-12\">\n            <div class=\"content-header primary col-sm-12 text-center px-md-5\" style=\" border-bottom:1px solid #34b563; padding:20px 0 10px;\">{{titulo}}</div>\n            <!--<p class=\"content-sub-header col-sm-10\"><a data-action=\"close\" (click)=\"home()\" title=\"P\u00E1gina inicial\">\n               </a>{{navegacao}}</p>-->\n\n\n         </div>\n      </div>\n\n      <div class=\"content-form row text-left crud-content\">\n         <!--Tabset Starts-->\n         <div class=\"content-body col-md-12 col-lg-12\">\n            <div class=\"card\">\n               <div class=\"card-body\">\n                  <div class=\"card-block\">\n                     <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!--Tabset Ends-->\n      </div>\n   </section>\n   <div *ngIf=\"modal\">\n      <div class=\"modal-header\">\n         <h5 class=\"modal-title\">{{titulo}}</h5>\n      </div>\n      <div class=\"content-form row text-left\">\n         <!--Tabset Starts-->\n         <div class=\"content-body col-md-12 col-lg-12\">\n            <div class=\"card\">\n               <div class=\"card-body\">\n                  <div class=\"card-block\">\n                     <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!--Tabset Ends-->\n      </div>\n      <!--\n      <div class=\"modal-body\" style=\"padding:0 1rem;\">\n         <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      </div>\n      -->\n   </div>\n\n   <ng-template #content>\n      <ng-content></ng-content>\n   </ng-template>\n\n   "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_util_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], FormSimplesComponent);
    return FormSimplesComponent;
}());



/***/ }),

/***/ "./src/app/components/util/form/senha/senha-alterar-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/util/form/senha/senha-alterar-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: SenhaAlterarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaAlterarFormComponent", function() { return SenhaAlterarFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
/* harmony import */ var app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/cadastro/usuario/usuario.service */ "./src/app/services/cadastro/usuario/usuario.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SenhaAlterarFormComponent = /** @class */ (function () {
    function SenhaAlterarFormComponent(utilService, loading, errorHandler, dialog, shared, usuarioService) {
        this.utilService = utilService;
        this.loading = loading;
        this.errorHandler = errorHandler;
        this.dialog = dialog;
        this.shared = shared;
        this.usuarioService = usuarioService;
        this.senhaNova = null;
        this.senhaConfirmacao = null;
        this.senhaValida = false;
        this.barColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
        this.strengthLabels = ['  Insegura', '  Fraca', '  Média', '  Forte', '  Segura'];
    }
    SenhaAlterarFormComponent.prototype.showHidePassword = function (tipo) {
        this.utilService.showHidePassword('show_hide_password_' + tipo);
    };
    SenhaAlterarFormComponent.prototype.trocarSenha = function () {
        var _this = this;
        if (this.form.invalid) {
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].setAsTouched(this.form.form);
            this.showMessage({
                type: 'danger',
                text: "Existem informações inválidas ou nulas. Favor verificar!"
            });
            return;
        }
        if (!this.validateForm()) {
            return;
        }
        this.loading.show();
        var usuario = Object.assign(this.shared.usuario, { senha: this.senhaNova });
        this.usuarioService.trocarSenha(usuario).subscribe(function (responseApi) {
            _this.dialog.success(responseApi.data);
            _this.loading.hide();
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    SenhaAlterarFormComponent.prototype.validateForm = function () {
        if (this.senhaNova != this.senhaConfirmacao) {
            this.showMessage({
                type: 'danger',
                text: 'A senha de confirmação não confere com a senha informada'
            });
            return false;
        }
        return true;
    };
    SenhaAlterarFormComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    SenhaAlterarFormComponent.ctorParameters = function () { return [
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
        { type: app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SenhaAlterarFormComponent.prototype, "form", void 0);
    SenhaAlterarFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'senha-alterar-form',
            template: "\n      <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"trocarSenha()\" autocomplete=\"off\" novalidate>\n          <div class=\"form-body\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"inputPassword\" class=\"control-label\">Senha</label>\n                    <div class=\"input-group mb-0\" id=\"show_hide_password_n\">\n                        <input type=\"password\" [(ngModel)]=\"senhaNova\" name=\"y\" class=\"form-control\"\n                               id=\"inputPassword\" placeholder=\"**********\"\n                               #senha=\"ngModel\" [required]=\"true\" minlength=\"3\" maxlength=\"30\">\n                            <div class=\"input-group-append\">\n                            <div class=\"input-group-text\" (click)=\"showHidePassword('n')\">\n                                <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <small class=\"form-text text-muted danger\"\n                           *ngIf=\"senha.errors?.required && (senha.dirty || senha.touched)\">Informe a Senha\n                    </small>\n                    <small class=\"form-text text-muted danger\"\n                           *ngIf=\"senha.errors?.minlength && (senha.dirty || senha.touched)\">Informe no m\u00EDnimo 6\n                        caracteres\n                    </small>\n                </div>\n                <div style=\"margin-top: 28px;\">f\n                            <ng2-password-strength-bar *ngIf=\"senhaNova\"\n                                                       [passwordToCheck]=\"senhaNova\"\n                                                       [barColors]=\"barColors\"\n                                                       [strengthLabels]=\"strengthLabels\">\n                            </ng2-password-strength-bar>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"inputPasswordC\" class=\"control-label\">Confirmar Senha</label>\n                    <div class=\"input-group mb-0\" id=\"show_hide_password_c\">\n                        <input type=\"password\" [(ngModel)]=\"senhaConfirmacao\" name=\"senhaConfirma\" class=\"form-control\"\n                               id=\"inputPasswordC\" placeholder=\"**********\"\n                               #senhaConfirma=\"ngModel\" [required]=\"senhaNova != senhaConfirmacao\"\n                               maxlength=\"30\">\n                        <div class=\"input-group-append\" >\n                            <div class=\"input-group-text\" (click)=\"showHidePassword('c')\">\n                                <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <small class=\"form-text text-muted danger\"\n                           *ngIf=\"senhaConfirma.errors?.required && (senhaConfirma.dirty || senhaConfirma.touched)\">\n                        Informe a Senha de confirma\u00E7\u00E3o\n                    </small>\n                </div>\n              </div>\n          </div>\n          <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\n            {{ message.text }}\n          </ngb-alert>\n\n          <app-botoes-cadastro [editando]=\"true\" [podeVoltar]=\"false\"\n            [consultando]=\"false\">\n          </app-botoes-cadastro>\n      </form>\n  ",
        }),
        __metadata("design:paramtypes", [app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            app_services_cadastro_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]])
    ], SenhaAlterarFormComponent);
    return SenhaAlterarFormComponent;
}());



/***/ }),

/***/ "./src/app/components/util/input/cnpj/inputCnpj.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/util/input/cnpj/inputCnpj.component.ts ***!
  \*******************************************************************/
/*! exports provided: InputCnpjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCnpjComponent", function() { return InputCnpjComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var brazilian_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brazilian-values */ "./node_modules/brazilian-values/dist/brazilian-values.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputCnpjComponent = /** @class */ (function () {
    function InputCnpjComponent(_renderer) {
        this._renderer = _renderer;
        //inicio implementações do ngModel
        this.onChange = function () { };
        this.onTouch = function () { };
        this.val = ""; // this is the updated value that the class accesses
        //
        this._required = true;
        this.cnpjChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputCnpjComponent_1 = InputCnpjComponent;
    Object.defineProperty(InputCnpjComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            if (val !== undefined && this.val !== val) {
                this.val = val;
                this.onChange(val);
                this.onTouch(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    // this method sets the value programmatically
    InputCnpjComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // upon UI element value changes, this method gets triggered
    InputCnpjComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // upon touching the element, this method gets triggered
    InputCnpjComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    InputCnpjComponent.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
    };
    Object.defineProperty(InputCnpjComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = value; },
        enumerable: true,
        configurable: true
    });
    InputCnpjComponent.prototype.cnpjChange = function () {
        if (this.validarCNPJ()) {
            this.cnpjChangeEvent.emit(this.value);
        }
    };
    InputCnpjComponent.prototype.validarCNPJ = function () {
        if (!Object(brazilian_values__WEBPACK_IMPORTED_MODULE_2__["isCNPJ"])(this.val)) {
            //this.cpf.setErrors({cpfInvalido:true})
            this.cnpjInvalido = true;
            return false;
        }
        else {
            // this.cpf.setErrors({cpfInvalido:false})
            this.cnpjInvalido = false;
            return true;
        }
    };
    var InputCnpjComponent_1;
    InputCnpjComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cnpj', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputCnpjComponent.prototype, "inputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], InputCnpjComponent.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputCnpjComponent.prototype, "cnpjChangeEvent", void 0);
    InputCnpjComponent = InputCnpjComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'input-cnpj',
            template: " <input type=\"text\" [(ngModel)]=\"value\" class=\"form-control\"\n                      placeholder=\"Informe\"      [required]=\"required\"\n                      id=\"cnpj\"\n                      maxlength=\"18\"    mask=\"00.000.000/0000-00\"\n                     (change)=\"cnpjChange()\" #cnpj=\"ngModel\"  >\n               <small class=\"form-text text-muted danger\"\n                    *ngIf=\"cnpj.errors?.required && (cnpj.dirty || cnpj.touched)\">Informe o CNPJ.\n               </small>\n               <small class=\"form-text text-muted danger\"\n                    *ngIf=\"cnpjInvalido && (cnpj.dirty || cnpj.touched)\">CNPJ inv\u00E1lido\n               </small>",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputCnpjComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], InputCnpjComponent);
    return InputCnpjComponent;
}());



/***/ }),

/***/ "./src/app/components/util/input/cpf/inputCpf.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/util/input/cpf/inputCpf.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputCpfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCpfComponent", function() { return InputCpfComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var brazilian_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brazilian-values */ "./node_modules/brazilian-values/dist/brazilian-values.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputCpfComponent = /** @class */ (function () {
    function InputCpfComponent(_renderer) {
        this._renderer = _renderer;
        //inicio implementações do ngModel
        this.onChange = function () { };
        this.onTouch = function () { };
        this.val = ""; // this is the updated value that the class accesses
        this.cpfChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputCpfComponent_1 = InputCpfComponent;
    Object.defineProperty(InputCpfComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            if (val !== undefined && this.val !== val) {
                this.val = val;
                this.onChange(val);
                this.onTouch(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    // this method sets the value programmatically
    InputCpfComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // upon UI element value changes, this method gets triggered
    InputCpfComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // upon touching the element, this method gets triggered
    InputCpfComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    InputCpfComponent.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
    };
    Object.defineProperty(InputCpfComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = value; },
        enumerable: true,
        configurable: true
    });
    InputCpfComponent.prototype.cpfChange = function () {
        if (this.validarCPF()) {
            this.cpfChangeEvent.emit(this.value);
        }
    };
    InputCpfComponent.prototype.validarCPF = function () {
        if (!Object(brazilian_values__WEBPACK_IMPORTED_MODULE_2__["isCPF"])(this.val)) {
            //this.cpf.setErrors({cpfInvalido:true})
            this.cpfInvalido = true;
            return false;
        }
        else {
            // this.cpf.setErrors({cpfInvalido:false})
            this.cpfInvalido = false;
            return true;
        }
    };
    var InputCpfComponent_1;
    InputCpfComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cpf', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputCpfComponent.prototype, "inputElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], InputCpfComponent.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputCpfComponent.prototype, "cpfChangeEvent", void 0);
    InputCpfComponent = InputCpfComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'input-cpf',
            template: " <input type=\"text\" [(ngModel)]=\"value\" class=\"form-control\"\n                      placeholder=\"Informe\"      [required]=\"required\"\n                      id=\"cpf\"\n                      maxlength=\"14\"    mask=\"000.000.000-00\"\n                     (change)=\"cpfChange()\" #cpf=\"ngModel\"  >\n               <small class=\"form-text text-muted danger\"\n                    *ngIf=\"cpf.errors?.required && (cpf.dirty || cpf.touched)\">Informe o CPF.\n               </small>\n               <small class=\"form-text text-muted danger\"\n                    *ngIf=\"cpfInvalido && (cpf.dirty || cpf.touched)\">CPF inv\u00E1lido\n               </small>",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputCpfComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], InputCpfComponent);
    return InputCpfComponent;
}());



/***/ }),

/***/ "./src/app/components/util/message/confirm/confirm-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/util/message/confirm/confirm-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-alert {\r\n    width:300px;\r\n}\r\n\r\n.modal-backdrop.in {\r\n    opacity: 0.9;\r\n}\r\n\r\n.modal-body {\r\n    background-color: whitesmoke;\r\n    border-radius: 11px;\r\n}\r\n\r\n.modal {\r\n    background-color: rgba(58, 51, 51, 0.4);\r\n    padding-top:5px;\r\n}\r\n\r\n.confirm-message {\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:20px;\r\n    font-weight:bold;\r\n    margin-bottom:0px;\r\n    margin-top:5px;\r\n}\r\n\r\n.confirm-button {\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n\r\n.btn-no {\r\n    background-color: #f4516c;\r\n    color:white;\r\n}\r\n\r\n.btn-yes {\r\n    background-color: #716aca;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlsL21lc3NhZ2UvY29uZmlybS9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlsL21lc3NhZ2UvY29uZmlybS9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1hbGVydCB7XHJcbiAgICB3aWR0aDozMDBweDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wLmluIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MSwgNTEsIDAuNCk7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5jb25maXJtLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5jb25maXJtLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uYnRuLW5vIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDUxNmM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi15ZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNmFjYTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/util/message/confirm/confirm-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/util/message/confirm/confirm-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog.service */ "./src/app/components/util/message/confirm/confirm-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(confirmDialogService) {
        this.confirmDialogService = confirmDialogService;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this function waits for a message from alert service, it gets
        //triggered when we call this from any other component
        this.confirmDialogService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogService"] }
    ]; };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/util/message/confirm/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/components/util/message/confirm/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogService"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/util/message/confirm/confirm-dialog.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/util/message/confirm/confirm-dialog.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ConfirmDialogService.prototype.confirmThis = function (message, siFn, noFn) {
        this.setConfirmation(message, siFn, noFn);
    };
    ConfirmDialogService.prototype.setConfirmation = function (message, siFn, noFn) {
        var that = this;
        this.subject.next({
            type: "confirm",
            text: message,
            siFn: function () {
                that.subject.next(); //this will close the modal
                siFn();
            },
            noFn: function () {
                that.subject.next();
                noFn();
            }
        });
    };
    ConfirmDialogService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    ConfirmDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());



/***/ }),

/***/ "./src/app/components/util/message/message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/util/message/message.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.temErro = function () {
        if (this.touched) {
            return this.control.hasError(this.error) && this.control.touched;
        }
        else {
            return this.control.hasError(this.error) && this.control.dirty;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], MessageComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MessageComponent.prototype, "touched", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: "\n    <small class=\"form-text text-muted danger\" *ngIf=\"temErro()\">\n      {{text}}\n    </small>\n  "
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/util/modal/modal-simples.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/util/modal/modal-simples.component.ts ***!
  \******************************************************************/
/*! exports provided: ModalSimplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSimplesComponent", function() { return ModalSimplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/util/dialog.service */ "./src/app/services/util/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalSimplesComponent = /** @class */ (function () {
    function ModalSimplesComponent(activeModal, dialog) {
        this.activeModal = activeModal;
        this.dialog = dialog;
        this.podeFechar = true;
        this.salvarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.antesSalvarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalSimplesComponent.prototype.ngOnInit = function () {
        if (!this.labelSalvar) {
            this.labelSalvar = 'Salvar';
        }
    };
    ModalSimplesComponent.prototype.salvar = function () {
        var _this = this;
        if (this.antesSalvarEvent.observers.length > 0) {
            this.antesSalvarEvent.emit(this.item);
        }
        if (this.salvarEvent.observers.length > 0) {
            this.salvarEvent.emit(this.item);
        }
        else {
            this.message = null;
            if (this.form.invalid) {
                Object.keys(this.form.controls).forEach(function (key) {
                    _this.form.controls[key].markAsTouched();
                });
                this.showMessage({
                    type: 'danger',
                    text: "Existem informações inválidas ou nulas."
                });
                return;
            }
            this.activeModal.close(this.item);
        }
    };
    ModalSimplesComponent.prototype.showMessage = function (message) {
        this.message = message;
        this.dialog.showMessage(message);
    };
    ModalSimplesComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalSimplesComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalSimplesComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ModalSimplesComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalSimplesComponent.prototype, "labelSalvar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalSimplesComponent.prototype, "podeFechar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalSimplesComponent.prototype, "salvarEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalSimplesComponent.prototype, "antesSalvarEvent", void 0);
    ModalSimplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-simples',
            template: "\n   <div class=\"modal-header\">\n      <h5 class=\"modal-title\">{{titulo}}</h5>\n      <button type=\"button\" *ngIf=\"podeFechar==true\" class=\"close\" aria-label=\"Close\" id=\"btnFechar\"   (click)=\"activeModal.close('close')\">\n         <span aria-hidden=\"true\">&times;</span>\n      </button>\n   </div>\n   <div class=\"modal-body\" style=\"padding:0 1rem;\">\n      <ng-content ></ng-content>\n      <br *ngIf=\"labelSalvar == 'Salvar'\"/>\n      <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\n         {{ message.text }}\n      </ngb-alert>\n   </div>\n   <div class=\"modal-footer\">\n      <ng-content select=\"[botoes]\" ></ng-content>\n      <button type=\"button\" class=\"btn btn-raised btn-success mr-1\" (click)=\"salvar()\" *ngIf=\"item\"> {{labelSalvar}} </button>\n      <button type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"activeModal.close('close')\" *ngIf=\"podeFechar==true\"> Fechar </button>\n   </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            app_services_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], ModalSimplesComponent);
    return ModalSimplesComponent;
}());



/***/ }),

/***/ "./src/app/components/util/paginator/paginacao.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/util/paginator/paginacao.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.paginationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.size = 10;
    }
    Object.defineProperty(PaginationComponent.prototype, "value", {
        set: function (page) {
            if (!page) {
                return;
            }
            this.page = page;
            this.setPagetion();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.changePage = function (page) {
        var _this = this;
        setTimeout(function () {
            _this.paginationEvent.emit({ page: page ? page : 0, size: _this.size });
        });
    };
    PaginationComponent.prototype.setPagetion = function () {
        var pages = [];
        var inc = (this.page.number - 2) <= 0 ? (4 - this.page.number) : 2;
        var dec = (this.page.number + 2) >= this.page.totalPages ? (5 - (this.page.totalPages - this.page.number)) : 2;
        var inicio = (this.page.number - dec) <= 0 ? 0 : (this.page.number - dec);
        var fim = (this.page.number + inc) < this.page.totalPages ? (this.page.number + inc) : (this.page.totalPages - 1);
        for (var i = inicio; i <= fim; i++) {
            pages.push(i);
        }
        this.page.pages = pages;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "paginationEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('page'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PaginationComponent.prototype, "value", null);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: "\n      <div class=\"mt-1 p-1\" style=\"border: 1px solid; border-color: #ddd;\" *ngIf=\"page\">\n         <label class=\"label-pages d-sm-block\" style=\"display: contents;\">\n            &nbsp;&nbsp;P\u00E1gina: {{page.totalPages == 0 ? 1/1 : (page.number+1)+'/'+page.totalPages}}\n         </label>\n         <div class=\"pagination-container\">\n            <nav aria-label=\"Page navigation\">\n               <ul class=\"pagination mb-0\">\n                  <li class=\"page-item\" [ngClass]=\"page.first ? 'disabled' : '' \">\n                     <a class=\"page-link\" *ngIf=\"page.first\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                     </a>\n                     <a class=\"page-link\" style=\"cursor: pointer\" *ngIf=\"!page.first\" (click)=\"changePage(page.number-1)\"\n                        aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                     </a>\n                  </li>\n\n                  <li class=\"page-item\" *ngFor=\"let pageAux of page.pages\" [ngClass]=\"(pageAux == page.number) ? 'active' : ''\"\n                      [ngClass]=\"i == page.number ? 'active' : '' \">\n                     <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(pageAux)\">{{pageAux + 1}}</a>\n                  </li>\n                  <li class=\"page-item\" *ngIf=\"page.totalPages == 0\" [ngClass]=\"'active'\">\n                     <a class=\"page-link\" style=\"cursor: pointer\">1</a>\n                  </li>\n\n                  <li class=\"page-item\" [ngClass]=\"page.last ? 'disabled' : '' \">\n                     <a class=\"page-link\" *ngIf=\"page.last\" aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                     </a>\n                     <a class=\"page-link\" style=\"cursor: pointer\" *ngIf=\"!page.last\" (click)=\"changePage(page.number+1)\"\n                        aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                     </a>\n                  </li>\n                  &nbsp;&nbsp;\n                  <select (ngModelChange)=\"changePage()\" [(ngModel)]=\"size\" class=\"custom-select\">\n                     <option value=\"10\" selected>10</option>\n                     <option value=\"25\">25</option>\n                     <option value=\"50\">50</option>\n                     <option value=\"100\">100</option>\n                     <option value=\"200\">200</option>\n                  </select>\n               </ul>\n            </nav>\n         </div>\n      </div>\n   ",
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/components/util/paginator/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/util/paginator/pagination.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/util/paginator/pagination.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-pages {\r\n   float:left;\r\n   font-weight:bold;\r\n   margin-top:8px;\r\n   position: absolute;\r\n}\r\n\r\n.pagination-container {\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-align: center;\r\n           align-items: center;\r\n   -webkit-box-orient: vertical;\r\n   -webkit-box-direction: normal;\r\n           flex-direction: column;\r\n}\r\n\r\n.custom-select {\r\n   height: 28px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlsL3BhZ2luYXRvci9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxVQUFVO0dBQ1YsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxrQkFBa0I7QUFDckI7O0FBRUE7R0FDRyxvQkFBYTtHQUFiLGFBQWE7R0FDYix5QkFBbUI7V0FBbkIsbUJBQW1CO0dBQ25CLDRCQUFzQjtHQUF0Qiw2QkFBc0I7V0FBdEIsc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csWUFBWTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91dGlsL3BhZ2luYXRvci9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtcGFnZXMge1xyXG4gICBmbG9hdDpsZWZ0O1xyXG4gICBmb250LXdlaWdodDpib2xkO1xyXG4gICBtYXJnaW4tdG9wOjhweDtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdCB7XHJcbiAgIGhlaWdodDogMjhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/util/pipe/enumPipe.ts":
/*!**************************************************!*\
  !*** ./src/app/components/util/pipe/enumPipe.ts ***!
  \**************************************************/
/*! exports provided: ENumAsStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENumAsStringPipe", function() { return ENumAsStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ENumAsStringPipe = /** @class */ (function () {
    function ENumAsStringPipe() {
    }
    ENumAsStringPipe.prototype.transform = function (value, _args) {
        if (_args == null)
            return value;
        if (typeof (_args) == 'object' && typeof (value) == 'number') {
            return _args.label(value);
        }
        return value;
    };
    ENumAsStringPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'eNumAsString'
        })
    ], ENumAsStringPipe);
    return ENumAsStringPipe;
}());



/***/ }),

/***/ "./src/app/components/util/pipe/keyValuePipe.ts":
/*!******************************************************!*\
  !*** ./src/app/components/util/pipe/keyValuePipe.ts ***!
  \******************************************************/
/*! exports provided: KeyValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePipe", function() { return KeyValuePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyValuePipe = /** @class */ (function () {
    function KeyValuePipe() {
    }
    KeyValuePipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeyValuePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'keyValueUnsorted' })
    ], KeyValuePipe);
    return KeyValuePipe;
}());



/***/ }),

/***/ "./src/app/components/util/pipe/phonePipe.ts":
/*!***************************************************!*\
  !*** ./src/app/components/util/pipe/phonePipe.ts ***!
  \***************************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _util_mascaras__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.mascaras */ "./src/app/components/util/util.mascaras.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhonePipe = /** @class */ (function () {
    function PhonePipe(maskPipe) {
        this.maskPipe = maskPipe;
    }
    PhonePipe.prototype.transform = function (value, _args) {
        if (value && value.length == 11) {
            return this.maskPipe.transform(value, _util_mascaras__WEBPACK_IMPORTED_MODULE_2__["Mascaras"].TELEFONE2);
        }
        return this.maskPipe.transform(value, _util_mascaras__WEBPACK_IMPORTED_MODULE_2__["Mascaras"].TELEFONE);
    };
    PhonePipe.ctorParameters = function () { return [
        { type: ngx_mask__WEBPACK_IMPORTED_MODULE_1__["MaskPipe"] }
    ]; };
    PhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'phone' }),
        __metadata("design:paramtypes", [ngx_mask__WEBPACK_IMPORTED_MODULE_1__["MaskPipe"]])
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/components/util/pipe/valuesPipe.ts":
/*!****************************************************!*\
  !*** ./src/app/components/util/pipe/valuesPipe.ts ***!
  \****************************************************/
/*! exports provided: ValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValuesPipe = /** @class */ (function () {
    function ValuesPipe(uppercasePipe, decimalPipe) {
        this.uppercasePipe = uppercasePipe;
        this.decimalPipe = decimalPipe;
    }
    ValuesPipe.prototype.transform = function (value, _args) {
        //console.log(_args);
        if (_args == null)
            return value;
        if (_args.name == 'object') {
            var field = _args.args.field;
            var fields = field.split('.');
            for (var f in fields) {
                value = value[fields[f]];
            }
            _args = _args.args.pipe;
        }
        switch (_args.name) {
            case 'enum': {
                return _args.args[value];
            }
            case 'number': {
                return this.decimalPipe.transform(value, _args.args);
            }
            case 'upperCase': {
                return this.uppercasePipe.transform(value);
            }
            default: {
                return value;
            }
        }
    };
    ValuesPipe.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"] }
    ]; };
    ValuesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'values' }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])
    ], ValuesPipe);
    return ValuesPipe;
}());



/***/ }),

/***/ "./src/app/components/util/pipes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/util/pipes.module.ts ***!
  \*************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _pipe_enumPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/enumPipe */ "./src/app/components/util/pipe/enumPipe.ts");
/* harmony import */ var _pipe_keyValuePipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/keyValuePipe */ "./src/app/components/util/pipe/keyValuePipe.ts");
/* harmony import */ var _pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/phonePipe */ "./src/app/components/util/pipe/phonePipe.ts");
/* harmony import */ var _pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/valuesPipe */ "./src/app/components/util/pipe/valuesPipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], ngx_mask__WEBPACK_IMPORTED_MODULE_2__["MaskPipe"]],
        };
    };
    var PipesModule_1;
    PipesModule = PipesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _pipe_keyValuePipe__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"],
                _pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__["ValuesPipe"],
                _pipe_enumPipe__WEBPACK_IMPORTED_MODULE_3__["ENumAsStringPipe"],
                _pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _pipe_keyValuePipe__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"],
                _pipe_valuesPipe__WEBPACK_IMPORTED_MODULE_6__["ValuesPipe"],
                _pipe_enumPipe__WEBPACK_IMPORTED_MODULE_3__["ENumAsStringPipe"],
                _pipe_phonePipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sort.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/util/sort/sort.service.ts ***!
  \******************************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortService = /** @class */ (function () {
    function SortService() {
        this.columnSortedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.columnSorted$ = this.columnSortedSource.asObservable();
    }
    SortService.prototype.columnSorted = function (event) {
        this.columnSortedSource.next(event);
    };
    SortService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SortService);
    return SortService;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sortable-column.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/util/sort/sortable-column.component.ts ***!
  \*******************************************************************/
/*! exports provided: SortableColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableColumnComponent", function() { return SortableColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.service */ "./src/app/components/util/sort/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableColumnComponent = /** @class */ (function () {
    function SortableColumnComponent(sortService) {
        this.sortService = sortService;
        this.sortDirection = '';
    }
    SortableColumnComponent.prototype.sort = function () {
        this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    };
    SortableColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe vo sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            // reset this column's sort direction vo hide the sort icons
            if (_this.columnName != event.sortColumn) {
                _this.sortDirection = '';
            }
        });
    };
    SortableColumnComponent.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    SortableColumnComponent.ctorParameters = function () { return [
        { type: _sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sortable-column'),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "columnName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sort-direction'),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "sortDirection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortableColumnComponent.prototype, "sort", null);
    SortableColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[sortable-column]',
            template: __webpack_require__(/*! raw-loader!./sortable-column.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/util/sort/sortable-column.component.html")
        }),
        __metadata("design:paramtypes", [_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]])
    ], SortableColumnComponent);
    return SortableColumnComponent;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sortable-date.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/util/sort/sortable-date.component.ts ***!
  \*****************************************************************/
/*! exports provided: SortableDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDateComponent", function() { return SortableDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableDateComponent = /** @class */ (function () {
    function SortableDateComponent() {
        this.filtrando = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    SortableDateComponent_1 = SortableDateComponent;
    Object.defineProperty(SortableDateComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            this.val = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    SortableDateComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SortableDateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SortableDateComponent.prototype.writeValue = function (value) {
        //if (value) {
        this.value = value;
        //}
    };
    SortableDateComponent.prototype.modelChange = function () {
        return this.filtrando.emit();
    };
    var SortableDateComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableDateComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", String)
    ], SortableDateComponent.prototype, "val", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SortableDateComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('modelChange'),
        __metadata("design:type", Object)
    ], SortableDateComponent.prototype, "filtrando", void 0);
    SortableDateComponent = SortableDateComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sortable-date',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SortableDateComponent_1; }),
                    multi: true
                }
            ],
            template: "\n        <a [sortable-column]=\"name\">\n            <ng-content></ng-content>\n        </a>\n        <input type=\"date\" [(ngModel)]=\"value\" [name]=\"name\" class=\"form-control\" upperCase\n               [id]=\"name\" placeholder=\"Pesquisar...\" (ngModelChange)=\"modelChange()\">\n    "
        })
    ], SortableDateComponent);
    return SortableDateComponent;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sortable-input.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/util/sort/sortable-input.component.ts ***!
  \******************************************************************/
/*! exports provided: SortableInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableInputComponent", function() { return SortableInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableInputComponent = /** @class */ (function () {
    function SortableInputComponent() {
        this.column = null;
        this.sort = null;
        this.hasSort = true;
        this.filtrando = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    SortableInputComponent_1 = SortableInputComponent;
    Object.defineProperty(SortableInputComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            this.val = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableInputComponent.prototype, "sortColumn", {
        get: function () {
            return this.column ? this.column : this.name;
        },
        enumerable: true,
        configurable: true
    });
    SortableInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SortableInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SortableInputComponent.prototype.writeValue = function (value) {
        //if (value) {
        this.value = value;
        //}
    };
    SortableInputComponent.prototype.modelChange = function () {
        return this.filtrando.emit();
    };
    var SortableInputComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableInputComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableInputComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableInputComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", String)
    ], SortableInputComponent.prototype, "val", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SortableInputComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SortableInputComponent.prototype, "hasSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('modelChange'),
        __metadata("design:type", Object)
    ], SortableInputComponent.prototype, "filtrando", void 0);
    SortableInputComponent = SortableInputComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sortable-input',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SortableInputComponent_1; }),
                    multi: true
                }
            ],
            template: "\n   <a [sortable-column]=\"sortColumn\" [sort-direction]=\"sort\" *ngIf=\"hasSort\">\n      <ng-content></ng-content>\n   </a>\n   <div *ngIf=\"currency; else falsyTemplate\">\n       <input type=\"tel\" [(ngModel)]=\"value\" [name]=\"name\" class=\"form-control\" appNumericMask\n              [id]=\"name\" placeholder=\"Pesquisar...\" (ngModelChange)=\"modelChange()\">\n   </div>\n   <ng-template #falsyTemplate>\n       <input type=\"text\" [(ngModel)]=\"value\" [name]=\"name\" class=\"form-control\" upperCase\n          [id]=\"name\" placeholder=\"Pesquisar...\" (ngModelChange)=\"modelChange()\">\n   </ng-template>\n   "
        })
    ], SortableInputComponent);
    return SortableInputComponent;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sortable-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/util/sort/sortable-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: SortableSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableSelectComponent", function() { return SortableSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableSelectComponent = /** @class */ (function () {
    function SortableSelectComponent() {
        this.column = null;
        this.filtrando = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    SortableSelectComponent_1 = SortableSelectComponent;
    Object.defineProperty(SortableSelectComponent.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            this.val = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableSelectComponent.prototype, "sortColumn", {
        get: function () {
            return this.column ? this.column : this.name;
        },
        enumerable: true,
        configurable: true
    });
    SortableSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SortableSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SortableSelectComponent.prototype.writeValue = function (value) {
        //if (value) {
        this.value = value;
        //}
    };
    SortableSelectComponent.prototype.modelChange = function () {
        return this.filtrando.emit();
    };
    var SortableSelectComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableSelectComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SortableSelectComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", String)
    ], SortableSelectComponent.prototype, "val", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortableSelectComponent.prototype, "opcoes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('modelChange'),
        __metadata("design:type", Object)
    ], SortableSelectComponent.prototype, "filtrando", void 0);
    SortableSelectComponent = SortableSelectComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sortable-select',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SortableSelectComponent_1; }),
                    multi: true
                }
            ],
            template: "\n   <a [sortable-column]=\"sortColumn\">\n      <ng-content></ng-content>\n   </a>\n   <select class=\"form-control\" [(ngModel)]=\"value\" [id]=\"name\" [name]=\"name\"\n      placeholder=\"Pesquisar...\" (ngModelChange)=\"modelChange()\">\n      <option *ngFor=\"let opcao of opcoes\" [value]=\"opcao.value\">{{opcao.label}}</option>\n   </select>\n   "
        })
    ], SortableSelectComponent);
    return SortableSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/util/sort/sortable-table.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/util/sort/sortable-table.directive.ts ***!
  \******************************************************************/
/*! exports provided: SortableTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableTableDirective", function() { return SortableTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.service */ "./src/app/components/util/sort/sort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableTableDirective = /** @class */ (function () {
    function SortableTableDirective(sortService) {
        this.sortService = sortService;
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SortableTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe vo sort changes so we emit and event for this data table
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            _this.sorted.emit(event);
        });
    };
    SortableTableDirective.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    SortableTableDirective.ctorParameters = function () { return [
        { type: _sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SortableTableDirective.prototype, "sorted", void 0);
    SortableTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sortable-table]'
        }),
        __metadata("design:paramtypes", [_sort_service__WEBPACK_IMPORTED_MODULE_1__["SortService"]])
    ], SortableTableDirective);
    return SortableTableDirective;
}());



/***/ }),

/***/ "./src/app/components/util/util.mascaras.ts":
/*!**************************************************!*\
  !*** ./src/app/components/util/util.mascaras.ts ***!
  \**************************************************/
/*! exports provided: Mascaras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mascaras", function() { return Mascaras; });
var Mascaras;
(function (Mascaras) {
    Mascaras["CEP"] = "00.000-000";
    Mascaras["CPF"] = "000.000.000-00";
    Mascaras["CPF2"] = "000.000.000-009999";
    Mascaras["CNPJ"] = "00.000.000/0000-00";
    Mascaras["TELEFONE"] = "(00) 0000-00009";
    Mascaras["TELEFONE2"] = "(00) 00000-0000";
    Mascaras["DATA"] = "00/00/0000";
    Mascaras["PLACA"] = "SSS-0A00";
    Mascaras["RENAVAM"] = "0000.000000-0";
})(Mascaras || (Mascaras = {}));


/***/ }),

/***/ "./src/app/components/util/util.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/util/util.module.ts ***!
  \************************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var app_directives_datetime_mask_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/directives/datetime-mask.directive */ "./src/app/directives/datetime-mask.directive.ts");
/* harmony import */ var app_directives_numeric_mask_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/directives/numeric-mask.directive */ "./src/app/directives/numeric-mask.directive.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-pdfjs-viewer */ "./node_modules/ng2-pdfjs-viewer/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-card/ngx-card */ "./node_modules/ngx-card/ngx-card.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var ngx_upper_case_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-upper-case-directive */ "./node_modules/ngx-upper-case-directive/fesm5/ngx-upper-case-directive.js");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/autofocus.directive */ "./src/app/directives/autofocus.directive.ts");
/* harmony import */ var _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../padrao/lista/padrao-lista.component */ "./src/app/components/padrao/lista/padrao-lista.component.ts");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var _form_botoes_cadastro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/botoes-cadastro.component */ "./src/app/components/util/form/botoes-cadastro.component.ts");
/* harmony import */ var _form_botoes_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/botoes-lista.component */ "./src/app/components/util/form/botoes-lista.component.ts");
/* harmony import */ var _form_complete_tab_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/complete-tab-form.component */ "./src/app/components/util/form/complete-tab-form.component.ts");
/* harmony import */ var _form_cadastro_parte_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/cadastro-parte-form.component */ "./src/app/components/util/form/cadastro-parte-form.component.ts");
/* harmony import */ var app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component.ts");
/* harmony import */ var _form_senha_senha_alterar_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/senha/senha-alterar-form.component */ "./src/app/components/util/form/senha/senha-alterar-form.component.ts");
/* harmony import */ var _form_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/dynamic-table.component */ "./src/app/components/util/form/dynamic-table.component.ts");
/* harmony import */ var _form_form_simples_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/form-simples.component */ "./src/app/components/util/form/form-simples.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./message/message.component */ "./src/app/components/util/message/message.component.ts");
/* harmony import */ var _message_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./message/confirm/confirm-dialog.component */ "./src/app/components/util/message/confirm/confirm-dialog.component.ts");
/* harmony import */ var app_components_util_message_confirm_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/components/util/message/confirm/confirm-dialog.service */ "./src/app/components/util/message/confirm/confirm-dialog.service.ts");
/* harmony import */ var app_components_util_combo_cliente_comboCliente_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/components/util/combo/cliente/comboCliente.component */ "./src/app/components/util/combo/cliente/comboCliente.component.ts");
/* harmony import */ var app_components_util_input_cpf_inputCpf_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! app/components/util/input/cpf/inputCpf.component */ "./src/app/components/util/input/cpf/inputCpf.component.ts");
/* harmony import */ var app_components_util_input_cnpj_inputCnpj_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! app/components/util/input/cnpj/inputCnpj.component */ "./src/app/components/util/input/cnpj/inputCnpj.component.ts");
/* harmony import */ var _modal_modal_simples_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modal/modal-simples.component */ "./src/app/components/util/modal/modal-simples.component.ts");
/* harmony import */ var _paginator_paginacao_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./paginator/paginacao.component */ "./src/app/components/util/paginator/paginacao.component.ts");
/* harmony import */ var _pipe_enumPipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipe/enumPipe */ "./src/app/components/util/pipe/enumPipe.ts");
/* harmony import */ var _pipe_phonePipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipe/phonePipe */ "./src/app/components/util/pipe/phonePipe.ts");
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes.module */ "./src/app/components/util/pipes.module.ts");
/* harmony import */ var _sort_sort_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./sort/sort.service */ "./src/app/components/util/sort/sort.service.ts");
/* harmony import */ var _sort_sortable_column_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sort/sortable-column.component */ "./src/app/components/util/sort/sortable-column.component.ts");
/* harmony import */ var _sort_sortable_date_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sort/sortable-date.component */ "./src/app/components/util/sort/sortable-date.component.ts");
/* harmony import */ var _sort_sortable_input_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sort/sortable-input.component */ "./src/app/components/util/sort/sortable-input.component.ts");
/* harmony import */ var _sort_sortable_select_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sort/sortable-select.component */ "./src/app/components/util/sort/sortable-select.component.ts");
/* harmony import */ var _sort_sortable_table_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./sort/sortable-table.directive */ "./src/app/components/util/sort/sortable-table.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';



































var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_12__["CustomFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_14__["NgxMaskModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_upper_case_directive__WEBPACK_IMPORTED_MODULE_16__["NgxUpperCaseDirectiveModule"],
                ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
                // PasswordStrengthBarModule,
                _pipes_module__WEBPACK_IMPORTED_MODULE_38__["PipesModule"].forRoot(),
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfViewerModule"],
                ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfJsViewerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__["InfiniteScrollModule"]
            ],
            declarations: [
                _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_18__["PadraoListaComponent"],
                _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_19__["PadraoNovoComponent"],
                _paginator_paginacao_component__WEBPACK_IMPORTED_MODULE_35__["PaginationComponent"],
                _sort_sortable_column_component__WEBPACK_IMPORTED_MODULE_40__["SortableColumnComponent"],
                _sort_sortable_table_directive__WEBPACK_IMPORTED_MODULE_44__["SortableTableDirective"],
                _sort_sortable_input_component__WEBPACK_IMPORTED_MODULE_42__["SortableInputComponent"],
                _sort_sortable_select_component__WEBPACK_IMPORTED_MODULE_43__["SortableSelectComponent"],
                _sort_sortable_date_component__WEBPACK_IMPORTED_MODULE_41__["SortableDateComponent"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_17__["AutofocusDirective"],
                _form_form_simples_component__WEBPACK_IMPORTED_MODULE_27__["FormSimplesComponent"],
                _form_botoes_lista_component__WEBPACK_IMPORTED_MODULE_21__["BotoesListaComponent"],
                _form_botoes_cadastro_component__WEBPACK_IMPORTED_MODULE_20__["BotoesCadastroComponent"],
                _form_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"],
                _form_complete_tab_form_component__WEBPACK_IMPORTED_MODULE_22__["CompleteTabFormComponent"],
                _form_cadastro_parte_form_component__WEBPACK_IMPORTED_MODULE_23__["CadastroParteFormComponent"],
                app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_24__["ContratoParteModalComponent"],
                _form_senha_senha_alterar_form_component__WEBPACK_IMPORTED_MODULE_25__["SenhaAlterarFormComponent"],
                _modal_modal_simples_component__WEBPACK_IMPORTED_MODULE_34__["ModalSimplesComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_28__["MessageComponent"],
                _message_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogComponent"],
                app_components_util_combo_cliente_comboCliente_component__WEBPACK_IMPORTED_MODULE_31__["ComboClienteComponent"],
                app_components_util_input_cpf_inputCpf_component__WEBPACK_IMPORTED_MODULE_32__["InputCpfComponent"],
                app_components_util_input_cnpj_inputCnpj_component__WEBPACK_IMPORTED_MODULE_33__["InputCnpjComponent"],
                app_directives_numeric_mask_directive__WEBPACK_IMPORTED_MODULE_8__["NumericMaskDirective"],
                app_directives_datetime_mask_directive__WEBPACK_IMPORTED_MODULE_7__["DatetimeMaskDirective"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_12__["CustomFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_14__["NgxMaskModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"],
                ngx_upper_case_directive__WEBPACK_IMPORTED_MODULE_16__["NgxUpperCaseDirectiveModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_9__["OwlNativeDateTimeModule"],
                ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
                // PasswordStrengthBarModule,
                _padrao_lista_padrao_lista_component__WEBPACK_IMPORTED_MODULE_18__["PadraoListaComponent"],
                _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_19__["PadraoNovoComponent"],
                _paginator_paginacao_component__WEBPACK_IMPORTED_MODULE_35__["PaginationComponent"],
                _sort_sortable_column_component__WEBPACK_IMPORTED_MODULE_40__["SortableColumnComponent"],
                _sort_sortable_table_directive__WEBPACK_IMPORTED_MODULE_44__["SortableTableDirective"],
                _sort_sortable_input_component__WEBPACK_IMPORTED_MODULE_42__["SortableInputComponent"],
                _sort_sortable_select_component__WEBPACK_IMPORTED_MODULE_43__["SortableSelectComponent"],
                _sort_sortable_date_component__WEBPACK_IMPORTED_MODULE_41__["SortableDateComponent"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_17__["AutofocusDirective"],
                _form_form_simples_component__WEBPACK_IMPORTED_MODULE_27__["FormSimplesComponent"],
                _form_botoes_lista_component__WEBPACK_IMPORTED_MODULE_21__["BotoesListaComponent"],
                _form_botoes_cadastro_component__WEBPACK_IMPORTED_MODULE_20__["BotoesCadastroComponent"],
                _form_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"],
                _modal_modal_simples_component__WEBPACK_IMPORTED_MODULE_34__["ModalSimplesComponent"],
                _form_complete_tab_form_component__WEBPACK_IMPORTED_MODULE_22__["CompleteTabFormComponent"],
                _form_cadastro_parte_form_component__WEBPACK_IMPORTED_MODULE_23__["CadastroParteFormComponent"],
                _form_senha_senha_alterar_form_component__WEBPACK_IMPORTED_MODULE_25__["SenhaAlterarFormComponent"],
                app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_24__["ContratoParteModalComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_28__["MessageComponent"],
                _message_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogComponent"],
                app_components_util_combo_cliente_comboCliente_component__WEBPACK_IMPORTED_MODULE_31__["ComboClienteComponent"],
                app_components_util_input_cpf_inputCpf_component__WEBPACK_IMPORTED_MODULE_32__["InputCpfComponent"],
                app_components_util_input_cnpj_inputCnpj_component__WEBPACK_IMPORTED_MODULE_33__["InputCnpjComponent"],
                _pipe_enumPipe__WEBPACK_IMPORTED_MODULE_36__["ENumAsStringPipe"],
                _pipe_phonePipe__WEBPACK_IMPORTED_MODULE_37__["PhonePipe"],
                app_directives_numeric_mask_directive__WEBPACK_IMPORTED_MODULE_8__["NumericMaskDirective"],
                app_directives_datetime_mask_directive__WEBPACK_IMPORTED_MODULE_7__["DatetimeMaskDirective"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfViewerModule"],
                ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfJsViewerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_45__["MatIconModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__["InfiniteScrollModule"]
            ],
            providers: [
                _sort_sort_service__WEBPACK_IMPORTED_MODULE_39__["SortService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"],
                app_components_util_message_confirm_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_30__["ConfirmDialogService"],
            ],
            entryComponents: [
                app_components_cadastros_contrato_modal_contrato_parte_contrato_parte_modal_component__WEBPACK_IMPORTED_MODULE_24__["ContratoParteModalComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/components/validar/documento/validarAssinatura.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/validar/documento/validarAssinatura.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-verificar{\r\n    margin-top: 9px;\r\n    min-width: 170px;\r\n}\r\n\r\n.form-body {\r\n    top: 90px;\r\n}\r\n\r\n.labelInfo{\r\n    color: white;\r\n}\r\n\r\n#inputIdentificador{\r\n    max-width: 450px;\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    .form-body {\r\n        top: 180px;\r\n    }\r\n\r\n    .labelInfo{\r\n        color: #0b2238;\r\n    }\r\n\r\n    #inputIdentificador{\r\n        width: 95vw;\r\n        margin-left: 5px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1366px) {\r\n    #divForm .col-xl-2 {\r\n        padding: 0 !important;\r\n        text-align: left !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWxpZGFyL2RvY3VtZW50by92YWxpZGFyQXNzaW5hdHVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLDJCQUEyQjtJQUMvQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92YWxpZGFyL2RvY3VtZW50by92YWxpZGFyQXNzaW5hdHVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi12ZXJpZmljYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG59XHJcblxyXG4uZm9ybS1ib2R5IHtcclxuICAgIHRvcDogOTBweDtcclxufVxyXG5cclxuLmxhYmVsSW5mb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2lucHV0SWRlbnRpZmljYWRvcntcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5mb3JtLWJvZHkge1xyXG4gICAgICAgIHRvcDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsSW5mb3tcclxuICAgICAgICBjb2xvcjogIzBiMjIzODtcclxuICAgIH1cclxuXHJcbiAgICAjaW5wdXRJZGVudGlmaWNhZG9ye1xyXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG4gICAgI2RpdkZvcm0gLmNvbC14bC0yIHtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/validar/documento/validarAssinatura.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/validar/documento/validarAssinatura.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ValidarAssinaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarAssinaturaComponent", function() { return ValidarAssinaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_validar_validar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validar/validar.service */ "./src/app/services/validar/validar.service.ts");
/* harmony import */ var _template_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../template/template.service */ "./src/app/components/template/template.service.ts");
/* harmony import */ var app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/error-handler.service */ "./src/app/services/util/error-handler.service.ts");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ValidarAssinaturaComponent = /** @class */ (function () {
    function ValidarAssinaturaComponent(validarService, loading, template, router, activatedRoute, errorHandler, utilService) {
        this.validarService = validarService;
        this.loading = loading;
        this.template = template;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorHandler = errorHandler;
        this.utilService = utilService;
        this.esconder = true;
        this.documentoPDF = {};
    }
    ValidarAssinaturaComponent.prototype.ngOnInit = function () {
        //  $.getScript('../../assets/js/anime.min.js');
        //  $.getScript('../../assets/js/slippry.min.js');
        //  $.getScript('../../assets/js/login.js');
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.numeroDocumento = params['documento'];
            if (_this.numeroDocumento)
                _this.validarDocumento();
        });
    };
    ValidarAssinaturaComponent.prototype.validarDocumento = function () {
        var _this = this;
        this.loading.show();
        this.validarService.validarDocumento(this.numeroDocumento).subscribe(function (responseApi) {
            _this.pdfInit(responseApi);
            _this.loading.hide();
        }, function (err) {
            _this.errorHandler.handle(err);
            _this.loading.hide();
        });
    };
    ValidarAssinaturaComponent.prototype.pdfInit = function (documento) {
        var documentoPDFDescompactado = lz_string__WEBPACK_IMPORTED_MODULE_6__["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(function (char) { return char.charCodeAt(0); }));
        this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
    };
    ValidarAssinaturaComponent.ctorParameters = function () { return [
        { type: _services_validar_validar_service__WEBPACK_IMPORTED_MODULE_3__["ValidarService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _template_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] },
        { type: app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfViewer', { static: true }),
        __metadata("design:type", Object)
    ], ValidarAssinaturaComponent.prototype, "pdfViewer", void 0);
    ValidarAssinaturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validarDocumento',
            template: __webpack_require__(/*! raw-loader!./validarAssinatura.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/validar/documento/validarAssinatura.component.html"),
            styles: ["assets/css/reset.min.css", "assets/css/slippry.css", __webpack_require__(/*! ./validarAssinatura.component.css */ "./src/app/components/validar/documento/validarAssinatura.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validar_validar_service__WEBPACK_IMPORTED_MODULE_3__["ValidarService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _template_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_services_util_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            app_services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])
    ], ValidarAssinaturaComponent);
    return ValidarAssinaturaComponent;
}());



/***/ }),

/***/ "./src/app/config/CustomDatepickerI18n.ts":
/*!************************************************!*\
  !*** ./src/app/config/CustomDatepickerI18n.ts ***!
  \************************************************/
/*! exports provided: I18n, CustomDatepickerI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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


var I18N_VALUES = {
    'pt-br': {
        weekdays: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    },
};
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'pt-br';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return "";
    };
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));



/***/ }),

/***/ "./src/app/config/NgbDatePTParserFormatter.ts":
/*!****************************************************!*\
  !*** ./src/app/config/NgbDatePTParserFormatter.ts ***!
  \****************************************************/
/*! exports provided: NgbDatePTParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatePTParserFormatter", function() { return NgbDatePTParserFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDatePTParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDatePTParserFormatter, _super);
    function NgbDatePTParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatePTParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0])
                && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0])
                && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDatePTParserFormatter.prototype.format = function (date) {
        var stringDate = '';
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
            stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDatePTParserFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbDatePTParserFormatter);
    return NgbDatePTParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/directives/autofocus.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/autofocus.directive.ts ***!
  \***************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    AutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAutofocus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/directives/datetime-mask.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/datetime-mask.directive.ts ***!
  \*******************************************************/
/*! exports provided: DatetimeMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeMaskDirective", function() { return DatetimeMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatetimeMaskDirective = /** @class */ (function () {
    function DatetimeMaskDirective(el) {
        this.el = el;
    }
    DatetimeMaskDirective.prototype.ngAfterViewInit = function () {
        if (this.el.nativeElement.type !== 'datetime-local') {
            // if (this.el.nativeElement.readonly || this.el.nativeElement.disabled) {
            //    const value = this.el.nativeElement.value;
            //    this.el.nativeElement.value = new Date(value).toLocaleString();
            //    return;
            // }
            new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a({
                alias: 'datetime',
                clearIncomplete: false,
                autoUnmask: true,
                tabThrough: false,
                shiftPositions: false,
                undoOnEscape: false,
                primeiraVez: true,
                placeholder: 'dd/mm/yyyy --:--',
                inputFormat: this.options && this.options.inputFormat ? this.options.inputFormat : 'dd/mm/yyyy HH:MM',
                outputFormat: this.options && this.options.outputFormat ? this.options.outputFormat : 'yyyy-mm-ddTHH:MM',
                onUnMask: function (maskedValue, unmaskedValue) {
                    var isValid = new RegExp(this.opts.regex).test(this.maskset.buffer.join(''));
                    if (!isValid) {
                        return '';
                    }
                    var hora = maskedValue.slice(-5);
                    var data = maskedValue.slice(0, 10).split('/').reverse().join('-');
                    data += 'T' + hora;
                    return data;
                },
                onBeforeMask: function (value, opts) {
                    if (value && opts.primeiraVez == true) {
                        opts.primeiraVez = false;
                        value = new Date(value).toLocaleString();
                    }
                    return value;
                }
            }).mask(this.el.nativeElement);
        }
    };
    DatetimeMaskDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatetimeMaskDirective.prototype, "options", void 0);
    DatetimeMaskDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDatetimeMask]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DatetimeMaskDirective);
    return DatetimeMaskDirective;
}());



/***/ }),

/***/ "./src/app/directives/numeric-mask.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/numeric-mask.directive.ts ***!
  \******************************************************/
/*! exports provided: NumericMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericMaskDirective", function() { return NumericMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumericMaskDirective = /** @class */ (function () {
    function NumericMaskDirective(el) {
        this.el = el;
    }
    NumericMaskDirective.prototype.ngOnInit = function () {
        if (this.options == undefined)
            this.options = {};
        new inputmask__WEBPACK_IMPORTED_MODULE_1___default.a({
            alias: 'numeric',
            radixPoint: ',',
            inputType: 'number',
            autoUnmask: true,
            unmaskAsNumber: true,
            rightAlign: false,
            positionCaretOnClick: 'none',
            showMaskOnHover: false,
            showMaskOnFocus: false,
            undoOnEscape: false,
            nullable: true,
            digitsOptional: true,
            enforceDigitsOnBlur: false,
            allowMinus: this.options.allowMinus ? this.options.allowMinus : false,
            suffix: this.options.suffix ? this.options.suffix : '',
            prefix: this.options.prefix ? this.options.prefix : '',
            digits: this.options.digits ? this.options.digits : 2,
        }).mask(this.el.nativeElement);
    };
    NumericMaskDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericMaskDirective.prototype, "options", void 0);
    NumericMaskDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNumericMask]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumericMaskDirective);
    return NumericMaskDirective;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/model/cadastro/cliente.ts":
/*!*******************************************!*\
  !*** ./src/app/model/cadastro/cliente.ts ***!
  \*******************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(id) {
        this.id = id;
    }
    Cliente.ctorParameters = function () { return [
        { type: String }
    ]; };
    return Cliente;
}());



/***/ }),

/***/ "./src/app/model/cadastro/pessoa.ts":
/*!******************************************!*\
  !*** ./src/app/model/cadastro/pessoa.ts ***!
  \******************************************/
/*! exports provided: Pessoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
/* harmony import */ var _cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente */ "./src/app/model/cadastro/cliente.ts");

var Pessoa = /** @class */ (function () {
    function Pessoa(id, nomeRazaoSocial, cpfCnpj, nome, tipoPessoa, email, cliente) {
        this.id = id;
        this.nomeRazaoSocial = nomeRazaoSocial;
        this.cpfCnpj = cpfCnpj;
        this.nome = nome;
        this.tipoPessoa = tipoPessoa;
        this.email = email;
        this.cliente = cliente;
    }
    Pessoa.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: undefined },
        { type: String },
        { type: _cliente__WEBPACK_IMPORTED_MODULE_0__["Cliente"] }
    ]; };
    return Pessoa;
}());



/***/ }),

/***/ "./src/app/model/cadastro/usuario.ts":
/*!*******************************************!*\
  !*** ./src/app/model/cadastro/usuario.ts ***!
  \*******************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ "./src/app/model/cadastro/pessoa.ts");

var Usuario = /** @class */ (function () {
    function Usuario(id, login, senha, nome, status, perfil, pessoa, tokenAssinatura, validadeTokenAssinatura) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.status = status;
        this.perfil = perfil;
        this.pessoa = pessoa;
        this.tokenAssinatura = tokenAssinatura;
        this.validadeTokenAssinatura = validadeTokenAssinatura;
    }
    Usuario.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: undefined },
        { type: undefined },
        { type: _pessoa__WEBPACK_IMPORTED_MODULE_0__["Pessoa"] },
        { type: String },
        { type: Date }
    ]; };
    return Usuario;
}());



/***/ }),

/***/ "./src/app/model/enum/perfilEnum.ts":
/*!******************************************!*\
  !*** ./src/app/model/enum/perfilEnum.ts ***!
  \******************************************/
/*! exports provided: PerfilEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEnum", function() { return PerfilEnum; });
var PerfilEnum;
(function (PerfilEnum) {
    PerfilEnum[PerfilEnum["ROLE_ADMIN"] = 0] = "ROLE_ADMIN";
    PerfilEnum[PerfilEnum["ROLE_USUARIO"] = 1] = "ROLE_USUARIO";
    PerfilEnum[PerfilEnum["ROLE_ADMIN_CLIENTE"] = 2] = "ROLE_ADMIN_CLIENTE";
    PerfilEnum[PerfilEnum["ROLE_ASSINADOR"] = 3] = "ROLE_ASSINADOR";
    PerfilEnum[PerfilEnum["ROLE_SUPORTE"] = 4] = "ROLE_SUPORTE";
    PerfilEnum[PerfilEnum["ROLE_DIRETORIA"] = 5] = "ROLE_DIRETORIA";
    PerfilEnum[PerfilEnum["ROLE_FINANCEIRO"] = 6] = "ROLE_FINANCEIRO";
    PerfilEnum[PerfilEnum["ROLE_INTEGRACAO"] = 7] = "ROLE_INTEGRACAO";
})(PerfilEnum || (PerfilEnum = {}));
(function (PerfilEnum) {
    function toString(perfil) {
        return PerfilEnum[perfil];
    }
    PerfilEnum.toString = toString;
    function parse(perfil) {
        return PerfilEnum[perfil];
    }
    PerfilEnum.parse = parse;
    function label(perfil) {
        switch (perfil) {
            case PerfilEnum.ROLE_ADMIN:
                return "ADMINISTRADOR";
            case PerfilEnum.ROLE_USUARIO:
                return "USUÁRIO";
            case PerfilEnum.ROLE_ADMIN_CLIENTE:
                return "ADMINISTRADOR CLIENTE";
            case PerfilEnum.ROLE_ASSINADOR:
                return "ASSINADO";
            case PerfilEnum.ROLE_SUPORTE:
                return "SUPORTE";
            case PerfilEnum.ROLE_DIRETORIA:
                return "DIRETORIA";
            case PerfilEnum.ROLE_FINANCEIRO:
                return "FINANCEIRO";
            case PerfilEnum.ROLE_INTEGRACAO:
                return "INTEGRACAO";
            default:
                return "";
        }
    }
    PerfilEnum.label = label;
})(PerfilEnum || (PerfilEnum = {}));


/***/ }),

/***/ "./src/app/model/enum/statusEnum.ts":
/*!******************************************!*\
  !*** ./src/app/model/enum/statusEnum.ts ***!
  \******************************************/
/*! exports provided: StatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEnum", function() { return StatusEnum; });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["INATIVO"] = 0] = "INATIVO";
    StatusEnum[StatusEnum["ATIVO"] = 1] = "ATIVO";
})(StatusEnum || (StatusEnum = {}));
(function (StatusEnum) {
    function toString(status) {
        return StatusEnum[status];
    }
    StatusEnum.toString = toString;
    function parse(status) {
        return StatusEnum[status];
    }
    StatusEnum.parse = parse;
    function label(status) {
        switch (status) {
            case StatusEnum.INATIVO:
                return "INATIVO";
            case StatusEnum.ATIVO:
                return "ATIVO";
            default:
                return "";
        }
    }
    StatusEnum.label = label;
    function booltoEnum(status) {
        if (status === StatusEnum.ATIVO || status === true || status === 'true' || status === 'ATIVO' || status === '1' || status === 1) {
            return StatusEnum.ATIVO;
        }
        return StatusEnum.INATIVO;
    }
    StatusEnum.booltoEnum = booltoEnum;
    function enumToBool(status) {
        return booltoEnum(status) === StatusEnum.ATIVO;
    }
    StatusEnum.enumToBool = enumToBool;
})(StatusEnum || (StatusEnum = {}));


/***/ }),

/***/ "./src/app/model/enum/tipoPessoaEnum.ts":
/*!**********************************************!*\
  !*** ./src/app/model/enum/tipoPessoaEnum.ts ***!
  \**********************************************/
/*! exports provided: TipoPessoaEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoPessoaEnum", function() { return TipoPessoaEnum; });
var TipoPessoaEnum;
(function (TipoPessoaEnum) {
    TipoPessoaEnum[TipoPessoaEnum["FISICA"] = 0] = "FISICA";
    TipoPessoaEnum[TipoPessoaEnum["JURIDICA"] = 1] = "JURIDICA";
})(TipoPessoaEnum || (TipoPessoaEnum = {}));
(function (TipoPessoaEnum) {
    function toString(tipoPessoa) {
        return TipoPessoaEnum[tipoPessoa];
    }
    TipoPessoaEnum.toString = toString;
    function parse(tipoPessoa) {
        return TipoPessoaEnum[tipoPessoa];
    }
    TipoPessoaEnum.parse = parse;
    function label(tipoPessoa) {
        switch (tipoPessoa) {
            case TipoPessoaEnum.FISICA:
                return "FISICA";
            case TipoPessoaEnum.JURIDICA:
                return "JURIDICA";
            default:
                return "";
        }
    }
    TipoPessoaEnum.label = label;
})(TipoPessoaEnum || (TipoPessoaEnum = {}));


/***/ }),

/***/ "./src/app/services/assinar/documento/documento.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/assinar/documento/documento.service.ts ***!
  \*****************************************************************/
/*! exports provided: DocumentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoService", function() { return DocumentoService; });
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




var DocumentoService = /** @class */ (function (_super) {
    __extends(DocumentoService, _super);
    function DocumentoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/assinar');
        return _this;
    }
    DocumentoService.prototype.assinarDocumento = function (chaveAcesso, cpf) {
        var payload = {
            chaveAcesso: chaveAcesso,
            cpf: cpf
        };
        return this.http.post(this.getApiUrl() + '/validarChaveAcesso', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.buscaFiltro = function (filtro, action) {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.getDocumentos = function (contrato) {
        return this.http.post(this.getApiUrl() + "/documentos", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.getPartesUsuario = function (contratoParteAssinarRequest) {
        var response = this.http.post(this.getApiUrl() + "/partesUsuario", contratoParteAssinarRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    DocumentoService.prototype.getDocumentoPDF = function (documento) {
        return this.http.post(this.getApiUrl() + "/documentoPdf", documento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.getDocumentosPDF = function (documentos) {
        return this.http.post(this.getApiUrl() + "/documentosPdf", documentos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.enviaCodigo = function (tokenSolicitacaoRequest) {
        return this.http.post(this.getApiUrl() + "/enviaCodigo", tokenSolicitacaoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.assinarViaCodigo = function (ContratoParteAssinaturaRequest) {
        return this.http.post(this.getApiUrl() + "/assinarViaCodigo", ContratoParteAssinaturaRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.assinarViaCodigoLote = function (ContratoParteAssinaturaRequest) {
        return this.http.post(this.getApiUrl() + "/assinarViaCodigoLote", ContratoParteAssinaturaRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.getDownload = function (contrato) {
        return this.http.post(this.getApiUrl() + "/download", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.getLog = function (contrato) {
        return this.http.post(this.getApiUrl() + "/log", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.contratoParteAssinaturaRequest = function (contratoParte) {
        return this.http.post(this.getApiUrl() + "/contratoParteAssinaturaRequest", contratoParte).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.salvarPartesAlteradas = function (partes) {
        return this.http.post(this.getApiUrl() + "/salvarPartesAlteradas", partes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.assinarViaCertificadoLocal = function (contratoParte) {
        var config = {};
        config["timeout"] = 600000;
        config["data"] = contratoParte ? contratoParte : {};
        //return this.http.post("http://localhost:3030/api/v1/assinador/assinarViaCertificadoLocal", config ).pipe(map(response => response['data']));
        return this.http.post("http://127.0.0.1:3030/api/v1/assinador/assinarViaCertificadoLocal", contratoParte).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.assinarViaCertificadoLocalLote = function (contratoParte) {
        return this.http.post("http://localhost:3030/api/v1/assinador/assinarViaCertificadoLocalLote", contratoParte).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.listaCertificados = function (cpfCnpj) {
        return this.http.post("http://localhost:3030/api/v1/assinador/listaCertificado", cpfCnpj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.verificaAssinadorAtivo = function () {
        return this.http.get("http://localhost:3030/api/v1/assinador").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.prototype.verificaAssinadorVersao = function () {
        return this.http.get("http://localhost:3030/api/v1/assinador/versao").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    DocumentoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DocumentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentoService);
    return DocumentoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/cadastro/cadastro/contrato.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/cadastro/cadastro/contrato.service.ts ***!
  \****************************************************************/
/*! exports provided: ContratoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoService", function() { return ContratoService; });
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




var ContratoService = /** @class */ (function (_super) {
    __extends(ContratoService, _super);
    function ContratoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/contrato');
        return _this;
    }
    ContratoService.prototype.buscaFiltro = function (filtro, action) {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    ContratoService.prototype.getDocumentoPDF = function (documento) {
        var response = this.http.post(this.getApiUrl() + "/documentoPdf", documento);
        return response;
    };
    ContratoService.prototype.liberarAssinatura = function (contratoRequest) {
        var response = this.http.post(this.getApiUrl() + "/liberarAssinatura", contratoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ContratoService.prototype.liberarAssinaturaLote = function (contratoLiberacaoLoteRequest) {
        var response = this.http.post(this.getApiUrl() + "/liberarAssinaturaLote", contratoLiberacaoLoteRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ContratoService.prototype.reenviaSolicitacaoAssintura = function (contratoParteResponse) {
        var response = this.http.post(this.getApiUrl() + "/reenviaSolicitacaoAssintura", contratoParteResponse).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ContratoService.prototype.getDadosPessoa = function (ContratoParteRequest) {
        var response = this.http.post(this.getApiUrl() + "/dadosPessoa", ContratoParteRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ContratoService.prototype.assinaDocumento = function (contrato) {
        return this.http.post("http://localhost:3030/api/v1/assinador", contrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    ContratoService.prototype.verificaAtivo = function () {
        return this.http.get("http://localhost:3030/api/v1/assinador").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    ContratoService.prototype.partesPadrao = function (partesPadraoRequest) {
        var response = this.http.post(this.getApiUrl() + "/partesPadrao", partesPadraoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ContratoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ContratoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContratoService);
    return ContratoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/cadastro/usuario/usuario.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/cadastro/usuario/usuario.service.ts ***!
  \**************************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_sistema_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/sistema-base.api */ "./src/app/services/util/sistema-base.api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var UsuarioService = /** @class */ (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/usuario');
        return _this;
    }
    UsuarioService.prototype.login = function (usuario) {
        return this.http.post(_util_sistema_base_api__WEBPACK_IMPORTED_MODULE_3__["URL_API"] + "/v1/auth", usuario);
    };
    UsuarioService.prototype.lostPassword = function (usuario) {
        return this.http.post(_util_sistema_base_api__WEBPACK_IMPORTED_MODULE_3__["URL_API"] + "/v1/lost", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
        ;
    };
    UsuarioService.prototype.validarTokenAlterSenha = function (token) {
        return this.http.post(_util_sistema_base_api__WEBPACK_IMPORTED_MODULE_3__["URL_API"] + "/v1/validarTokenAlterSenha", token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
        ;
    };
    UsuarioService.prototype.trocarSenha = function (usuario) {
        return this.http.post(this.getApiUrl() + "/trocarSenha", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
    };
    UsuarioService.prototype.buscaFiltro = function (filtro, action) {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
    };
    UsuarioService.prototype.getUsuarioCpfCnpj = function (usuario) {
        return this.http.post(this.getApiUrl() + '/getUsuarioCpfCnpj', usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }));
    };
    UsuarioService.prototype.getClientes = function (usuario) {
        return this.http.post(this.getApiUrl() + '/getClientes', usuario);
    };
    UsuarioService.prototype.findAll = function (pageable, filtro) {
        return this.http.post(this.getApiUrl() + "/buscarFiltro?" +
            'size=' + pageable.size +
            '&page=' + pageable.number +
            (pageable.order ? '&sort=' + pageable.order : ''), filtro);
    };
    UsuarioService.prototype.findByIdEditar = function (usuarioCliente) {
        // var reqHeader = new HttpHeaders({
        //     "Content-Type": "application/json",
        // });
        // const httpOptions = {
        //     headers: reqHeader,
        //     body: usuarioCliente,
        // };
        // return this.http.get<any>(this.getApiUrl() + '/findByIdEditar', httpOptions);
        return this.http.post(this.getApiUrl() + '/findByIdEditar', usuarioCliente);
    };
    UsuarioService.prototype.inativar = function (usuarioCliente) {
        return this.http.post(this.getApiUrl() + '/inativar', usuarioCliente);
    };
    UsuarioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsuarioService);
    return UsuarioService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/config/papel/papel.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/config/papel/papel.service.ts ***!
  \********************************************************/
/*! exports provided: PapelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapelService", function() { return PapelService; });
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




var PapelService = /** @class */ (function (_super) {
    __extends(PapelService, _super);
    function PapelService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/config/papel');
        return _this;
    }
    PapelService.prototype.novoPapelTipoDocumento = function (papel, tipoDocumento) {
        var novoPapelTipoDocumentoRequest = {
            papel: papel,
            idTipoDocumento: tipoDocumento
        };
        var response = this.http.post(this.getApiUrl() + "/novoPapelTipoDocumento", novoPapelTipoDocumentoRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    PapelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PapelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PapelService);
    return PapelService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/config/tipoDocumento/tipoDocumento.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/config/tipoDocumento/tipoDocumento.service.ts ***!
  \************************************************************************/
/*! exports provided: TipoDocumentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDocumentoService", function() { return TipoDocumentoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/http.service */ "./src/app/services/util/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var TipoDocumentoService = /** @class */ (function (_super) {
    __extends(TipoDocumentoService, _super);
    function TipoDocumentoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/config/tipoDocumento');
        return _this;
    }
    TipoDocumentoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TipoDocumentoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TipoDocumentoService);
    return TipoDocumentoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/google-analytics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService() {
    }
    GoogleAnalyticsService.prototype.eventEmitter = function (eventName, eventCategory, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        gtag('event', eventName, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_value: eventValue
        });
    };
    GoogleAnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());



/***/ }),

/***/ "./src/app/services/registrar/registro.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/registrar/registro.service.ts ***!
  \********************************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/http.service */ "./src/app/services/util/http.service.ts");
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




var RegistroService = /** @class */ (function (_super) {
    __extends(RegistroService, _super);
    function RegistroService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/registro');
        return _this;
    }
    RegistroService.prototype.registar = function (registro) {
        return this.http.post(this.getApiUrl(), registro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    RegistroService.prototype.cliente = function (cpfCnpj) {
        var apiCliente = this.getApiUrl() + ("/cliente/" + cpfCnpj);
        return this.http.get(apiCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
    };
    RegistroService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegistroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistroService);
    return RegistroService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/termo/termo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/termo/termo.service.ts ***!
  \*************************************************/
/*! exports provided: TermoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermoService", function() { return TermoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/http.service */ "./src/app/services/util/http.service.ts");
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




var TermoService = /** @class */ (function (_super) {
    __extends(TermoService, _super);
    function TermoService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/termo');
        return _this;
    }
    TermoService.prototype.getTermosPendentes = function (usuario) {
        var response = this.http.post(this.getApiUrl() + "/termosPendentes", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    TermoService.prototype.getTermosParaAssinaturaPDF = function (usuario) {
        var response = this.http.post(this.getApiUrl() + "/termosParaAssinatura", usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    TermoService.prototype.termosAceite = function (termoAceiteRequest) {
        var response = this.http.post(this.getApiUrl() + "/termosAceite", termoAceiteRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    TermoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TermoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TermoService);
    return TermoService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/app/services/util/app-injector.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/util/app-injector.service.ts ***!
  \*******************************************************/
/*! exports provided: AppInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
var AppInjector = /** @class */ (function () {
    function AppInjector() {
    }
    AppInjector.setInjector = function (injector) {
        AppInjector.injector = injector;
    };
    AppInjector.getInjector = function () {
        return AppInjector.injector;
    };
    return AppInjector;
}());



/***/ }),

/***/ "./src/app/services/util/dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/util/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/template/data/sweet-alerts */ "./src/app/components/template/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogService = /** @class */ (function () {
    function DialogService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this._message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._message.subscribe(function (message) { return _this.alertMessage = message; });
        this._message.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(function () { return _this.alertMessage = null; });
    }
    DialogService.prototype.showMessage = function (alert) {
        this._message.next(alert.text);
    };
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Confirma ?'));
        });
    };
    // Sweetalert calls
    DialogService.prototype.confirmDelete = function (message, confirmText, cancelText) {
        return new Promise(function (resolve) {
            return resolve(_components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["confirmDeleteButton"](message, confirmText, cancelText));
        });
    };
    // Sweetalert calls
    DialogService.prototype.confirmCancel = function (message, confirmText, cancelText) {
        return new Promise(function (resolve) {
            return resolve(_components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["confirmCancelButton"](message, confirmText, cancelText));
        });
    };
    DialogService.prototype.deleteSuccess = function () {
        _components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["deleteSuccess"]();
    };
    DialogService.prototype.deleteCancel = function () {
        _components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["deleteCancel"]();
    };
    DialogService.prototype.restError = function (message) {
        _components_template_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["restError"](message);
    };
    // Toastr calls
    DialogService.prototype.success = function (message) {
        this.toastr.success(message || '', 'Sucesso!', { enableHtml: true });
    };
    DialogService.prototype.error = function (message) {
        this.toastr.error(message || '', 'Erro!', { enableHtml: true, disableTimeOut: true, closeButton: true, tapToDismiss: true });
    };
    DialogService.prototype.info = function (message) {
        this.toastr.info(message || '', 'Informação', { enableHtml: true });
    };
    DialogService.prototype.warning = function (message) {
        this.toastr.warning(message || '', 'Atenção!', { enableHtml: true });
    };
    DialogService.prototype.warningPersistent = function (message) {
        this.toastr.warning(message || '', 'Atenção!', { enableHtml: true, disableTimeOut: true, closeButton: true, tapToDismiss: true });
    };
    DialogService.prototype.dismiss = function () {
        this.toastr.clear();
    };
    DialogService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }
    ]; };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/util/error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/util/error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.service */ "./src/app/services/util/dialog.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(dialog, loading, router) {
        this.dialog = dialog;
        this.loading = loading;
        this.router = router;
    }
    ErrorHandlerService.prototype.handle = function (errorResponse) {
        this.loading.hide();
        if (this.deveIgnorarErroSessaoExpirada(errorResponse)) {
            return;
        }
        var msg;
        var erro = errorResponse['error'];
        if (erro && !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(erro.errors)) {
            var total = erro.errors.length - 1;
            if (erro.errors[total] == null) {
                msg = "Erro não tratado. Contate o responsável pelo sistema.";
            }
            else {
                msg = erro.errors[total].slice(0, 500);
                for (var i = 0; i < total; i++) {
                    this.dialog.error(erro.errors[i].slice(0, 500));
                }
            }
        }
        else if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            msg = 'Ocorreu um erro ao processar a sua solicitação.<br/>';
            if (errorResponse.error instanceof ErrorEvent) {
                // client-side error
                msg += "Erro: " + errorResponse.error.message;
            }
            else {
                // server-side error
                var status_1 = errorResponse.status;
                if (status_1 == 404) {
                    msg += '<span class="yellow">Recurso ou método não disponível!</span>';
                }
                else {
                    msg += "C\u00F3digo erro: " + errorResponse.status + "<br/>Mensagem: " + errorResponse.message.slice(0, 500);
                }
                console.error('Ocorreu um erro', errorResponse);
            }
        }
        else {
            msg = "Erro ao processar servi\u00E7o remoto. ";
            msg += "Tente novamente";
            console.error('Ocorreu um erro', errorResponse);
        }
        this.dialog.error(msg);
    };
    ErrorHandlerService.prototype.deveIgnorarErroSessaoExpirada = function (errorResponse) {
        if (!(errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) || errorResponse.status !== 401) {
            return false;
        }
        var shared = _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance();
        return shared.sessaoExpirada || this.router.url.indexOf('/login') >= 0;
    };
    ErrorHandlerService.ctorParameters = function () { return [
        { type: _dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ErrorHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/services/util/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/enum/statusEnum */ "./src/app/model/enum/statusEnum.ts");
/* harmony import */ var _sistema_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sistema-base.api */ "./src/app/services/util/sistema-base.api.ts");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/util/shared.service */ "./src/app/services/util/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__["AppInjector"].getInjector();
        this.shared = injector.get(app_services_util_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]);
    }
    HttpService.prototype.getApiUrl = function () {
        return this.apiUrl;
    };
    HttpService.prototype.saveUpdate = function (entity) {
        if (entity.status != undefined) {
            entity.status = _model_enum_statusEnum__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].booltoEnum(entity.status);
        }
        if (entity.id != null && entity.id != '') {
            return this.http.put("" + this.apiUrl, entity);
        }
        else {
            entity.id = null;
            return this.http.post("" + this.apiUrl, entity);
        }
    };
    HttpService.prototype.save = function (entity) {
        return this.http.post("" + this.apiUrl, entity);
    };
    HttpService.prototype.post = function (caminho, objeto) {
        return this.http.post("" + this.apiUrl + caminho, objeto);
    };
    HttpService.prototype.findAll = function (pageable, filtro) {
        return this.http.post(this.apiUrl + "/buscarFiltro?" +
            'size=' + pageable.size +
            '&page=' + pageable.number +
            (pageable.order ? '&sort=' + pageable.order : ''), filtro);
    };
    HttpService.prototype.findById = function (id) {
        var idRequest = {
            id: id,
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        };
        return this.http.post(this.apiUrl + "/findById", idRequest);
        //return this.http.get(`${this.apiUrl}/${id}`);
    };
    //findById(id: string) {
    //    return this.http.get(`${this.apiUrl}/${id}`);
    //}
    HttpService.prototype.get = function () {
        return this.http.get("" + this.apiUrl);
    };
    HttpService.prototype.getComUrl = function (caminho, id) {
        return this.http.get(this.apiUrl + "/" + caminho + ("/" + id));
    };
    HttpService.prototype.delete = function (id) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/json",
        });
        var idRequest = {
            id: id,
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        };
        var httpOptions = {
            headers: reqHeader,
            body: idRequest,
        };
        return this.http.delete("" + this.apiUrl, httpOptions);
    };
    HttpService.prototype.setApiUrl = function (url) {
        this.apiUrl = "" + _sistema_base_api__WEBPACK_IMPORTED_MODULE_3__["URL_API"] + url;
    };
    //somente quando a tela tem combos, para buscar os dados
    HttpService.prototype.getNew = function () {
        var idRequest = {
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        };
        return this.http.post(this.apiUrl + "/new", idRequest);
    };
    HttpService.prototype.buscaEndereco = function (cep) {
        cep = cep.replace('-', '');
        var apiCep = _sistema_base_api__WEBPACK_IMPORTED_MODULE_3__["URL_API"] + "/v1/cep/" + cep;
        return this.http.get(apiCep);
    };
    HttpService.prototype.buscarCombos = function () {
        return this.http.get(this.apiUrl + "/buscarCombos");
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/util/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/util/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LOGGER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGER", function() { return LOGGER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LOGGER = /** @class */ (function () {
    function LOGGER() {
    }
    LOGGER.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.log('Log', msg);
        }
    };
    LOGGER.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.error('Erro', msg);
        }
    };
    LOGGER.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.info('Informação', msg);
        }
    };
    LOGGER.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.warn('Aviso', msg);
        }
    };
    LOGGER = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LOGGER);
    return LOGGER;
}());



/***/ }),

/***/ "./src/app/services/util/modal.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/util/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalService = /** @class */ (function () {
    function ModalService(ngbModal, activeModal) {
        this.ngbModal = ngbModal;
        this.activeModal = activeModal;
    }
    ModalService.prototype.open = function (content, config, options) {
        var modal = this.ngbModal.open(content, __assign({ backdrop: 'static' }, options));
        Object.assign(modal.componentInstance, config);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(modal.result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.warn(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    ModalService.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/util/pdf.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/util/pdf.service.ts ***!
  \**********************************************/
/*! exports provided: PdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfService", function() { return PdfService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/util/http.service.ts");
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



var PdfService = /** @class */ (function (_super) {
    __extends(PdfService, _super);
    function PdfService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl("/v1/");
        return _this;
    }
    PdfService.prototype.convertPdfToImage = function (pdfArrayByte) {
        return this.post('pdf2img', pdfArrayByte).toPromise();
    };
    PdfService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    PdfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PdfService);
    return PdfService;
}(_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));



/***/ }),

/***/ "./src/app/services/util/select.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/util/select.service.ts ***!
  \*************************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var SelectService = /** @class */ (function () {
    function SelectService() {
        this.loading = false;
        this.input = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.primeiraVez = true;
    }
    // Recebe o service do Objeto que deve conter o metodo "buscaFiltro"
    // Action é um parametro Opcional para diferentes rotas no filtro
    SelectService.prototype.inicia = function (service, action, params) {
        var _this = this;
        this.lista = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]), this.input.pipe(
        //startWith(' '),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { _this.primeiraVez = false; _this.loading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) { return service.buscaFiltro(term, action, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.loading = false; })); })));
    };
    SelectService.prototype.onfocus = function () {
        if (this.primeiraVez) {
            this.input.next(null);
        }
    };
    SelectService.prototype.isListaIniciada = function () {
        return !(this.input.observers == null);
    };
    return SelectService;
}());



/***/ }),

/***/ "./src/app/services/util/shared.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/util/shared.service.ts ***!
  \*************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/enum/perfilEnum */ "./src/app/model/enum/perfilEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedService = /** @class */ (function () {
    function SharedService() {
        this.clienteSelecionado = { cliente: { id: "", segmento: { id: "", identificacao: "" } } };
        this.sessaoExpirada = false;
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_1__["AppInjector"].getInjector();
        this.utilService = injector.get(app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]);
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.usuario == null) {
            return false;
        }
        return this.usuario.login !== '';
    };
    SharedService.prototype.temAcesso = function (menu) {
        var podeAcesar = false;
        if (this.verificaPerfilMenu(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN)) {
            podeAcesar = true;
        }
        else {
            //documentos
            if (menu == 90000000) {
                var sohAssinador = true;
                if (this.clientes.filter(function (c) { return c.perfil != 'ROLE_ASSINADOR'; }).length > 0)
                    sohAssinador = false;
                // for (let cliente of this.clientes) {
                //     if (cliente.perfil != 'ROLE_ASSINADOR') {
                //         sohAssinador = false;
                //         break;
                //     }
                // }
                podeAcesar = !sohAssinador;
            }
            if ((menu == 80000100 || menu == 80000200 || menu == 80000300 ||
                menu == 60000100 || menu == 60000500 || menu == 60001000) &&
                this.verificaPerfilMenu(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN_CLIENTE)) {
                podeAcesar = true;
            }
            if ((menu == 80000100 || menu == 80000200 || menu == 80000300) &&
                this.clientes.filter(function (c) { return c.perfil != 'ROLE_ASSINADOR'; }).length > 0)
                podeAcesar = true;
            if ((menu == 80000100 || menu == 80000300) &&
                this.clientes.filter(function (c) { return c.perfil == 'ROLE_ASSINADOR'; }).length > 0)
                podeAcesar = true;
            if (menu >= 50000000 && menu <= 60000000)
                podeAcesar = true;
        }
        return podeAcesar;
    };
    SharedService.prototype.podeIncluirContrato = function () {
        if (!this.verificaPerfilMenu(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN_CLIENTE))
            return this.clientes.filter(function (c) { return c.perfil != 'ROLE_ASSINADOR'; }).length > 0;
        else
            return true;
    };
    SharedService.prototype.podeIncluirUsuario = function () {
        return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.usuario.perfil.toString()) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN ||
            app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.perfilUsuario.toString()) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN;
    };
    SharedService.prototype.podeNavegar = function (menu) {
        // return isDevMode();
        return true;
    };
    SharedService.prototype.logout = function () {
        this.token = null;
        this.usuario = null;
        this.clienteSelecionado = null;
        this.perfilUsuario = null;
        this.clientes = null;
    };
    SharedService.prototype.verificaPerfilMenu = function (perfil) {
        var existePerfil = false;
        existePerfil = app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.usuario.perfil.toString()) == perfil;
        if (!existePerfil) {
            existePerfil = app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.perfilUsuario.toString()) == perfil;
            if (!existePerfil) {
                if (this.clientes.filter(function (c) { return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(c.perfil) == perfil; }).length > 0)
                    existePerfil = true;
            }
        }
        return existePerfil;
    };
    SharedService.prototype.verificaPerfilClienteSelecionado = function (perfil) {
        return app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.clienteSelecionado.perfil) == perfil;
    };
    SharedService.prototype.perfilUsuarioAdmin = function () {
        var admin = this.perfilUsuariSistema();
        if (!admin)
            admin = app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.perfilUsuario.toString()) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN_CLIENTE ||
                this.verificaPerfilClienteSelecionado(app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN_CLIENTE);
        return admin;
    };
    SharedService.prototype.perfilUsuariSistema = function () {
        var admin = app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.usuario.perfil.toString()) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN ||
            app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].parse(this.perfilUsuario.toString()) == app_model_enum_perfilEnum__WEBPACK_IMPORTED_MODULE_3__["PerfilEnum"].ROLE_ADMIN; //this.usuario.perfil == PerfilEnum.ROLE_ADMIN
        return admin;
    };
    Object.defineProperty(SharedService.prototype, "classUpperCase", {
        get: function () {
            if (this.clienteSelecionado != null &&
                this.clienteSelecionado.sistemaAtributo != null &&
                this.utilService.booleanValue(this.clienteSelecionado.sistemaAtributo["CAMPOS_UPPERCASE"])) {
                return { "text-transform": "uppercase" };
            }
            else {
                return { "text-transform": "none" };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "classLowerCase", {
        get: function () {
            return { "text-transform": "lowercase" };
        },
        enumerable: true,
        configurable: true
    });
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/util/sistema-base.api.ts":
/*!***************************************************!*\
  !*** ./src/app/services/util/sistema-base.api.ts ***!
  \***************************************************/
/*! exports provided: URL_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_API", function() { return URL_API; });
var porta = location.port;
if (porta == "4200") {
    porta = "8080";
}
//Local
//export const URL_API = 'http://localhost:8080/api';
var url = location.protocol + '//' + location.hostname + ':' + porta + '/api';
var URL_API = url;


/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtilService = /** @class */ (function () {
    function UtilService() {
        var injector = app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_4__["AppInjector"].getInjector();
        this.loading = injector.get(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]);
    }
    UtilService.prototype.enumToKeyValue = function (pEnum, filter) {
        var keyValue = [];
        var keys = null;
        if (filter !== undefined && filter == true) {
            keys = pEnum.values();
        }
        else {
            keys = Object.keys(pEnum)
                .filter(function (f) { return !isNaN(Number(f)); })
                .map(function (k) { return parseInt(k); });
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            var value = pEnum[k] == undefined ? k : pEnum[k];
            keyValue.push({ key: k, value: value, label: pEnum.label(k) });
        }
        return keyValue;
    };
    UtilService.prototype.byteArrayToBase64 = function (bytes) {
        return btoa(bytes.map(function (item) { return String.fromCharCode(item); }).join(""));
    };
    UtilService.prototype.download = function (item) {
        var byte = item.anexo64;
        var bytechars = atob(byte);
        var byteNumbers = new Array(bytechars.length);
        for (var i = 0; i < bytechars.length; i++) {
            byteNumbers[i] = bytechars.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray]);
        var fileName = item.nomeArquivo;
        if (navigator && navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement('a');
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    UtilService.prototype.downloadFile = function (blob, fileName) {
        // let blob = new Blob([byteArray], { type: "application/octet-stream" });
        if (navigator && navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement('a');
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    UtilService.prototype.downloadPdf = function (byteArray, fileName) {
        var blob = new Blob([byteArray], { type: "application/pdf" });
        if (navigator && navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement('a');
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    UtilService.prototype.openPdf = function (bytes) {
        var byteCharacters = atob(bytes);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        window.open().location.href = window.URL.createObjectURL(new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' }));
    };
    UtilService.prototype.openXml = function (xml) {
        window.open().location.href = window.URL.createObjectURL(new Blob([xml], { type: 'text/xml' }));
    };
    UtilService.prototype.showHidePassword = function (id) {
        var input = "#" + id + " input";
        var icon = "#" + id + " i";
        if (jquery__WEBPACK_IMPORTED_MODULE_1__(input).attr("type") == "text") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(input).attr('type', 'password');
        }
        else if (jquery__WEBPACK_IMPORTED_MODULE_1__(input).attr("type") == "password") {
            jquery__WEBPACK_IMPORTED_MODULE_1__(input).attr('type', 'text');
        }
        jquery__WEBPACK_IMPORTED_MODULE_1__(icon).toggleClass("fa-eye fa-eye-slash");
    };
    UtilService.prototype.dateStructToDate = function (data) {
        var dataStr = data.month + "/" + data.day + "/" + data.year;
        return new Date(dataStr);
    };
    UtilService.setAsTouched = function (group) {
        group.markAsTouched();
        for (var i in group.controls) {
            if (group.controls[i] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                group.controls[i].markAsTouched();
                group.controls[i].markAsDirty();
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                    if (group.controls[i].invalid) {
                        console.log(i, group.controls[i]);
                    }
                }
            }
            else {
                this.setAsTouched(group.controls[i]);
            }
        }
    };
    UtilService.setAsDisabled = function (group) {
        for (var i in group.controls) {
            if (group.controls[i] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                group.controls[i].disable();
            }
            else {
                this.setAsDisabled(group.controls[i]);
            }
        }
    };
    UtilService.setProgress = function (option) {
        if (option) {
            document.getElementsByTagName("body")[0].classList.remove('content-loading');
            document.getElementsByTagName("body")[0].classList.add('progress-loading');
        }
        else {
            document.getElementsByTagName("body")[0].classList.remove('progress-loading');
            document.getElementsByTagName("body")[0].classList.add('content-loading');
        }
    };
    UtilService.getLocalISOTime = function () {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -8);
    };
    UtilService.copyText = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    UtilService.prototype.getFile = function (file, fileSize) {
        var _this = this;
        //if (!fileSize) fileSize = 2 ** 21 * 5; //(10MB)
        if (!fileSize)
            fileSize = Math.pow(2, 21) * 25; //(50MB) Bonatte - 2021-03-18
        var size = fileSize / 1024 / 1024;
        if (file.size > fileSize) {
            return Promise.reject("Tamanho do arquivo n\u00E3o pode exceder " + size + "MB");
        }
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onerror = function () {
                reader.abort();
                reject("Erro ao pegar Arquivo");
            };
            //this.loading.show();
            reader.onloadstart = function () {
                //alert(`iniciando o upload do arquivo ${file.name}`);
                _this.loading.show();
            };
            reader.onloadend = function () {
                //alert(`finalizando o upload do arquivo ${file.name}`);
                _this.loading.hide();
            };
            reader.onprogress = function () {
                //ver como faz..
            };
            reader.onload = function () {
                //TRansforma em Byte
                // @ts-ignore
                var bytes = Array.from(new Uint8Array(this.result));
                // Transforma em Base64
                var base64StringFile = btoa(bytes.map(function (item) { return String.fromCharCode(item); }).join(""));
                resolve({
                    bytes: bytes,
                    base64StringFile: base64StringFile,
                    fileName: file.name,
                    fileType: file.type
                });
            };
            reader.readAsArrayBuffer(file);
        });
    };
    UtilService.prototype.booleanValue = function (value) {
        // if (value == undefined) {
        //    return false;
        // }
        if (value == "true" || value == true)
            return true;
        else {
            return false;
        }
    };
    UtilService.prototype.preencheCombos = function (dados) {
        var list = [];
        dados.forEach(function (value) {
            var item;
            if (value.id == null) {
                item = { item_id: value.value, item_text: value.label };
            }
            else {
                item = { item_id: value.id, item_text: value.label };
            }
            list.push(item);
        });
        return list;
    };
    UtilService.prototype.carregaAnimaJS = function () {
        var _this = this;
        var animeFile = "../assets/js/anime.min.js";
        var slippryFile = "../assets/js/slippry.min.js";
        var loginFile = "../assets/js/login.js";
        var filesToLoad = [animeFile, slippryFile, loginFile];
        var sequence = Promise.resolve();
        filesToLoad.forEach(function (file) {
            sequence = sequence.then(function () {
                return _this.loadScript(file);
            });
        });
    };
    /**
      * Loads a script and adds it to the head.
      * @param fileName
      * @returns a Promise that will resolve with the file name
      */
    UtilService.prototype.loadScript = function (fileName) {
        return new Promise(function (resolve) {
            //console.log('Zone: Loading file... ' + fileName);
            var script = document.createElement('script');
            script.src = fileName;
            script.type = 'text/javascript';
            script.onload = function () {
                //console.log('\tDone');
                resolve(fileName);
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/services/validar/validar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/validar/validar.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarService", function() { return ValidarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/http.service */ "./src/app/services/util/http.service.ts");
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




var ValidarService = /** @class */ (function (_super) {
    __extends(ValidarService, _super);
    function ValidarService(http) {
        var _this = _super.call(this, http) || this;
        _this.setApiUrl('/v1/validar');
        return _this;
    }
    ValidarService.prototype.validarDocumento = function (idDocumento) {
        var response = this.http.get(this.getApiUrl() + "/" + idDocumento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response['data']; }));
        return response;
    };
    ValidarService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ValidarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ValidarService);
    return ValidarService;
}(_util_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    CODE_GOOGLE_ANALYTICS: 'G-X13TSG43G3',
    LOCK_GOOGLE_ANALYTICS: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/util/app-injector.service */ "./src/app/services/util/app-injector.service.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_bootstraper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/bootstraper */ "./src/app/bootstraper.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef) => {
//    AppInjector.setInjector(moduleRef.injector);
// });
var bootstrapApp = function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .then(function (moduleRef) {
        app_services_util_app_injector_service__WEBPACK_IMPORTED_MODULE_2__["AppInjector"].setInjector(moduleRef.injector);
    })
        .catch(function (err) { return console.error(err); });
};
var bootstrapper = new _app_bootstraper__WEBPACK_IMPORTED_MODULE_5__["Bootstrapper"](bootstrapApp);
bootstrapper.startup();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Assina.Net\Projetos\GitHub\Assina.Net.Portal\assina.net.web.portal-v1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map