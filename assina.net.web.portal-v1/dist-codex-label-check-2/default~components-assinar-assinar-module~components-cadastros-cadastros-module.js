(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-assinar-assinar-module~components-cadastros-cadastros-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/novo/novo-contrato.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cadastros/contrato/novo/novo-contrato.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-simples [titulo]=\"titulo\" [navegacao]=\"navegacao\" [rota]=\"rota\">\r\n\r\n\r\n\r\n\r\n    <form class=\"form form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"salvar()\" autocomplete=\"off\" novalidate>\r\n        <div class=\"form-body\">\r\n            <h4 class=\"form-section mb-1\">\r\n                <div *ngIf=\"!editando && !consultando\">\r\n                    <!--i class=\"fa fa-plus\"></i>--> Novo cadastro</div>\r\n                <div *ngIf=\"editando && !consultando\">\r\n                    <!--<i class=\"fa fa-edit\"></i>--> Editando cadastro</div>\r\n                <div *ngIf=\"consultando\">\r\n                    <!--<i class=\"fa fa-eye\"></i>--> Consultando cadastro</div>\r\n            </h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputIdentificador\" class=\"control-label\">Identificador</label>\r\n                    <input type=\"text\" [(ngModel)]=\"ContratoRequest.contrato.identificador\" name=\"identificador\"\r\n                        [ngStyle]=\"classUpperCase()\" class=\"form-control\" id=\"inputIdentificador\"\r\n                        #identificador=\"ngModel\" placeholder=\"Informe\" upperCase minlength=\"3\" maxlength=\"255\" required\r\n                        appAutofocus>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificador.errors?.required && (identificador.dirty || identificador.touched)\">Informe\r\n                        o Identificador\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"identificador.errors?.minlength && (identificador.dirty || identificador.touched)\">Informe\r\n                        no mínimo 3 carateres\r\n                    </small>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"inputAssunto\" class=\"control-label\">Assunto</label>\r\n                    <input type=\"text\" [(ngModel)]=\"ContratoRequest.contrato.assunto\" name=\"x\" class=\"form-control\"\r\n                        [ngStyle]=\"classUpperCase()\" id=\"inputAssunto\" #assunto=\"ngModel\" placeholder=\"Informe\"\r\n                        upperCase maxlength=\"255\" required>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"assunto.errors?.required && (assunto.dirty || assunto.touched)\">Informe o Assunto\r\n                    </small>\r\n                    <small class=\"form-text text-muted danger\"\r\n                        *ngIf=\"assunto.errors?.pattern && (assunto.dirty || assunto.touched)\">Informe apenas letras e\r\n                        números [Aa-Zz][0-9]\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n            <fieldset class=\"contrato-detail-panel\">\n                <legend>Arquivos</legend>\n                    <app-complete-tab-form [content]=\"contratoDocumentoForm\" [dados]=\"contratoDocumentoModal\"\n                        [dadosComplementares]=\"dadosComplementaresDocumento\" [cols]=\"titulosDocumentos\"\n                        [showButtons]=\"!consultando\" [novoRegistro]=\"'Novo Arquivo'\"\n                        [mensagemExclusao]=\"'Deseja excluir o documento ? '\" [permiteEditar]=\"false\"\n                        [viewerDoc]=\"contratoDocumentoVisualizarForm\" [permiteExibirDocumento]=\"true\"\n                        [beforeExibirDocumento]=\"prepararVisualizacaoDocumento\"\n                        [retornaListaCompleta]=\"true\" (change)=\"adicionouContratoDocumento()\"\n                        [itemTemplate]=\"detalheArquivo\">\n                        <ng-template #detalheArquivo let-item>\r\n                            <td>{{item.nomeDocumento}}</td>\r\n                            <td>{{item.tipoDocumento.nome}}</td>\r\n                            <td>{{item.descStatusDocumento}}</td>\r\n                            <td>\r\n                                <div *ngFor=\"let papel of item.papel\" style=\"display: inline-table\">\r\n                                    <span style=\"display: inline-flex;font-size: x-small;\">\r\n                                        <span style=\"margin-left:5px\">{{papel.papel.nome}}</span>\r\n                                    </span>\r\n\r\n                                </div>\r\n                            </td>\r\n                        </ng-template>\r\n                    </app-complete-tab-form>\r\n\r\n                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\n                        {{ message.text }}\n                    </ngb-alert>\n            </fieldset>\n\n            <fieldset class=\"contrato-detail-panel\" *ngIf=\"contratoDocumentoModal.listagem.length > 0\">\n                <legend>Partes</legend>\n                    <app-cadastro-parte-form [dados]=\"contratoParteModal\" [contratoPapelList]=\"contratoPapelListDocumentos\"\n                        [showButtons]=\"!consultando\" (change)=\"adicionouContratoParte()\"\n                        [statusContrato]=\"ContratoRequest.contrato.statusContrato\">\n                    </app-cadastro-parte-form>\n\r\n                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\n                        {{ message.text }}\n                    </ngb-alert>\n            </fieldset>\n\n            <fieldset class=\"contrato-detail-panel\" *ngIf=\"contratoDocumentoModal.listagem.length > 0 && mostraObservador()\">\n                <legend>Observadores</legend>\n                    <app-cadastro-parte-form [dados]=\"contratoObservadoresModal\" [contratoPapelList]=\"[]\"\n                        [showButtons]=\"!consultando\" (change)=\"adicionouObservador()\"\n                        [statusContrato]=\"ContratoRequest.contrato.statusContrato\"\n                        [novoRegistro]=\"'Novo Observador'\"\r\n                        [tipoCadastro]=\"'OBSERVADOR'\"\r\n                        [mensagemExclusao]=\"'Deseja retirar esta parte para assinatura ? '\"\r\n                        >\r\n                    </app-cadastro-parte-form>\r\n\r\n                    <ngb-alert *ngIf=\"message\" type=\"{{message.type}}\" (close)=\"message = null\">\n                        {{ message.text }}\n                    </ngb-alert>\n            </fieldset>\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n\r\n                <app-botoes-cadastro [editando]=\"editando\" [podeVoltar]=\"podeVoltar\" [consultando]=\"consultando\"\r\n                    (cancelarEvent)=\"cancelar()\" (voltarEvent)=\"voltar()\" (excluirEvent)=\"excluir()\">\r\n                    \r\n                    <div inicio>\r\n                        <button class=\"btn btn-lg btn-raised btn-blue-as\" type=\"button\" (click)=\"contratoDownload()\"\r\n                            *ngIf=\"ContratoRequest.contrato.statusContrato=='ASSINADO'\">\r\n                            <!--<i class=\"fa fa-download\"></i>--> Download\r\n                        </button>\r\n                        <button class=\"btn btn-lg  btn-raised btn-primary\" type=\"button\" (click)=\"liberarAssinatura()\"\r\n                            [hidden]=\"consultando\">\r\n                            <!-- <i class=\"fa fa-edit\"></i>--> Salvar e liberar para assinatura\r\n                        </button>\r\n                    </div>\r\n                    \r\n                </app-botoes-cadastro>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n</app-form-simples>\n"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/novo/novo-contrato.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/novo/novo-contrato.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contrato-detail-panel {\n   border: 1px solid #a6a9ae;\n   border-radius: 0.25rem;\n   margin: 0.55rem 0 0;\n   padding: 0.45rem 0.45rem 0.35rem;\n}\n\n.contrato-detail-panel legend {\n   color: #595959;\n   font-size: 0.9rem;\n   font-weight: 600;\n   line-height: 1;\n   margin: 0;\n   padding: 0 0.35rem;\n   width: auto;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form .form-body,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form .form-body {\n   padding: 0;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form .form-section,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form .form-section {\n   padding: 0;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form .btn-group,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form .btn-group {\n   margin-bottom: 0.35rem;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form button.btn,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form button.btn {\n   background-color: #7edba0 !important;\n   border-color: #7edba0 !important;\n   color: #ffffff !important;\n   font-size: 0.9rem;\n   line-height: 1.1;\n   padding: 0.45rem 0.8rem;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form button.btn:hover,\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form button.btn:focus,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form button.btn:hover,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form button.btn:focus {\n   background-color: #67c98b !important;\n   border-color: #67c98b !important;\n   color: #ffffff !important;\n}\n\n:host ::ng-deep .contrato-detail-panel app-complete-tab-form button.btn .fa,\n:host ::ng-deep .contrato-detail-panel app-cadastro-parte-form button.btn .fa {\n   font-size: 1rem;\n}\n\n:host ::ng-deep .contrato-detail-panel table th {\n   padding-bottom: 0.45rem;\n   padding-top: 0.45rem;\n}\n\n:host ::ng-deep .contrato-detail-panel .table td {\n   padding-bottom: 0.35rem;\n   padding-top: 0.35rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRhc3Ryb3MvY29udHJhdG8vbm92by9ub3ZvLWNvbnRyYXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx5QkFBeUI7R0FDekIsc0JBQXNCO0dBQ3RCLG1CQUFtQjtHQUNuQixnQ0FBZ0M7QUFDbkM7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsU0FBUztHQUNULGtCQUFrQjtHQUNsQixXQUFXO0FBQ2Q7O0FBRUE7O0dBRUcsVUFBVTtBQUNiOztBQUVBOztHQUVHLFVBQVU7QUFDYjs7QUFFQTs7R0FFRyxzQkFBc0I7QUFDekI7O0FBRUE7O0dBRUcsb0NBQW9DO0dBQ3BDLGdDQUFnQztHQUNoQyx5QkFBeUI7R0FDekIsaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQix1QkFBdUI7QUFDMUI7O0FBRUE7Ozs7R0FJRyxvQ0FBb0M7R0FDcEMsZ0NBQWdDO0dBQ2hDLHlCQUF5QjtBQUM1Qjs7QUFFQTs7R0FFRyxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csdUJBQXVCO0dBQ3ZCLG9CQUFvQjtBQUN2Qjs7QUFFQTtHQUNHLHVCQUF1QjtHQUN2QixvQkFBb0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhZGFzdHJvcy9jb250cmF0by9ub3ZvL25vdm8tY29udHJhdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmF0by1kZXRhaWwtcGFuZWwge1xuICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTlhZTtcbiAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICBtYXJnaW46IDAuNTVyZW0gMCAwO1xuICAgcGFkZGluZzogMC40NXJlbSAwLjQ1cmVtIDAuMzVyZW07XG59XG5cbi5jb250cmF0by1kZXRhaWwtcGFuZWwgbGVnZW5kIHtcbiAgIGNvbG9yOiAjNTk1OTU5O1xuICAgZm9udC1zaXplOiAwLjlyZW07XG4gICBmb250LXdlaWdodDogNjAwO1xuICAgbGluZS1oZWlnaHQ6IDE7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwIDAuMzVyZW07XG4gICB3aWR0aDogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250cmF0by1kZXRhaWwtcGFuZWwgYXBwLWNvbXBsZXRlLXRhYi1mb3JtIC5mb3JtLWJvZHksXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY2FkYXN0cm8tcGFydGUtZm9ybSAuZm9ybS1ib2R5IHtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIGFwcC1jb21wbGV0ZS10YWItZm9ybSAuZm9ybS1zZWN0aW9uLFxuOmhvc3QgOjpuZy1kZWVwIC5jb250cmF0by1kZXRhaWwtcGFuZWwgYXBwLWNhZGFzdHJvLXBhcnRlLWZvcm0gLmZvcm0tc2VjdGlvbiB7XG4gICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY29tcGxldGUtdGFiLWZvcm0gLmJ0bi1ncm91cCxcbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIGFwcC1jYWRhc3Ryby1wYXJ0ZS1mb3JtIC5idG4tZ3JvdXAge1xuICAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250cmF0by1kZXRhaWwtcGFuZWwgYXBwLWNvbXBsZXRlLXRhYi1mb3JtIGJ1dHRvbi5idG4sXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY2FkYXN0cm8tcGFydGUtZm9ybSBidXR0b24uYnRuIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWRiYTAgIWltcG9ydGFudDtcbiAgIGJvcmRlci1jb2xvcjogIzdlZGJhMCAhaW1wb3J0YW50O1xuICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgIHBhZGRpbmc6IDAuNDVyZW0gMC44cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY29tcGxldGUtdGFiLWZvcm0gYnV0dG9uLmJ0bjpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIGFwcC1jb21wbGV0ZS10YWItZm9ybSBidXR0b24uYnRuOmZvY3VzLFxuOmhvc3QgOjpuZy1kZWVwIC5jb250cmF0by1kZXRhaWwtcGFuZWwgYXBwLWNhZGFzdHJvLXBhcnRlLWZvcm0gYnV0dG9uLmJ0bjpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIGFwcC1jYWRhc3Ryby1wYXJ0ZS1mb3JtIGJ1dHRvbi5idG46Zm9jdXMge1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzY3Yzk4YiAhaW1wb3J0YW50O1xuICAgYm9yZGVyLWNvbG9yOiAjNjdjOThiICFpbXBvcnRhbnQ7XG4gICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY29tcGxldGUtdGFiLWZvcm0gYnV0dG9uLmJ0biAuZmEsXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRyYXRvLWRldGFpbC1wYW5lbCBhcHAtY2FkYXN0cm8tcGFydGUtZm9ybSBidXR0b24uYnRuIC5mYSB7XG4gICBmb250LXNpemU6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIHRhYmxlIHRoIHtcbiAgIHBhZGRpbmctYm90dG9tOiAwLjQ1cmVtO1xuICAgcGFkZGluZy10b3A6IDAuNDVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY29udHJhdG8tZGV0YWlsLXBhbmVsIC50YWJsZSB0ZCB7XG4gICBwYWRkaW5nLWJvdHRvbTogMC4zNXJlbTtcbiAgIHBhZGRpbmctdG9wOiAwLjM1cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/cadastros/contrato/novo/novo-contrato.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cadastros/contrato/novo/novo-contrato.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NovoContratoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoContratoComponent", function() { return NovoContratoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../padrao/novo/padrao-novo.component */ "./src/app/components/padrao/novo/padrao-novo.component.ts");
/* harmony import */ var _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/cadastro/cadastro/contrato.service */ "./src/app/services/cadastro/cadastro/contrato.service.ts");
/* harmony import */ var _modal_contrato_documento_contrato_documento_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/contrato-documento/contrato-documento-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component.ts");
/* harmony import */ var _modal_contrato_documento_visualizar_contrato_documento_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component */ "./src/app/components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component.ts");
/* harmony import */ var app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/assinar/documento/documento.service */ "./src/app/services/assinar/documento/documento.service.ts");
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





//import { UtilService } from '../../../../services/util/util.service';



var NovoContratoComponent = /** @class */ (function (_super) {
    __extends(NovoContratoComponent, _super);
    function NovoContratoComponent(route, contratoService, 
    //  private utilService: UtilService,
    documentoService) {
        var _this = _super.call(this, route) || this;
        _this.contratoService = contratoService;
        _this.documentoService = documentoService;
        _this.partes = { listagem: [], dirty: false };
        _this.observadores = { listagem: [], dirty: false };
        _this.documentos = { listagem: [], dirty: false };
        _this.tipoDocumentoList = [];
        _this.contratoPapelList = [];
        _this.papelObservador = { id: "" };
        _this.titulosPartes = ['Ação', 'Cpf/Cnpj', 'Nome/Razão Social', 'Assinaturas'];
        _this.titulosDocumentos = ['Ação', 'Arquivo', 'Tipo Documento', 'Status Documento', 'Assinaturas'];
        //contratoParteForm = ContratoParteModalComponent;
        _this.contratoDocumentoForm = _modal_contrato_documento_contrato_documento_modal_component__WEBPACK_IMPORTED_MODULE_5__["ContratoDocumentoModalComponent"];
        _this.contratoDocumentoVisualizarForm = _modal_contrato_documento_visualizar_contrato_documento_visualizar_modal_component__WEBPACK_IMPORTED_MODULE_6__["ContratoDocumentoVisualizarModalComponent"];
        _this.prepararVisualizacaoDocumento = function (documento, abrirModal) {
            if (documento.documento) {
                abrirModal(documento);
                return;
            }
            _this.loading.show();
            _this.contratoService.getDocumentoPDF(documento).subscribe(function (responseApi) {
                _this.loading.hide();
                var mensagemApi = _this.getMensagemVisualizacao(responseApi);
                if (mensagemApi || !responseApi || !responseApi.data || !responseApi.data.documentoPDF) {
                    _this.dialog.warning(mensagemApi ||
                        'Não foi possível visualizar este documento agora. Verifique se o arquivo está disponível no armazenamento.');
                    return;
                }
                documento.documento = responseApi.data.documentoPDF;
                abrirModal(documento);
            }, function (err) {
                _this.loading.hide();
                var mensagemApi = _this.getMensagemVisualizacao(err && err.error);
                if (mensagemApi) {
                    _this.dialog.warning(mensagemApi);
                    return;
                }
                _this.errorHandler.handle(err);
            });
        };
        _this.titulo = "Cadastro de Contrato";
        _this.navegacao = " > Cadastro > Contrato > Cadastro";
        _this.rota = "/cadastro/contrato";
        _this.formulario = "Contrato";
        //Para carregar os combos
        _this.entidade = null;
        _this.httpService = _this.contratoService;
        return _this;
    }
    NovoContratoComponent.prototype.getMensagemVisualizacao = function (responseApi) {
        if (responseApi && responseApi.errors && responseApi.errors.length) {
            return responseApi.errors[responseApi.errors.length - 1];
        }
        return null;
    };
    Object.defineProperty(NovoContratoComponent.prototype, "ContratoRequest", {
        get: function () {
            if (this.entidade == null) {
                return { contrato: { statusContrato: 'NAOLIBERADOASSINTAURA' } };
            }
            return this.entidade;
        },
        set: function (data) {
            this.entidade = data;
        },
        enumerable: true,
        configurable: true
    });
    NovoContratoComponent.prototype.cancelar = function () {
        this.partes = { listagem: [], dirty: false };
        this.documentos = { listagem: [], dirty: false };
        _super.prototype.cancelar.call(this);
    };
    Object.defineProperty(NovoContratoComponent.prototype, "podeVoltar", {
        get: function () {
            return this.consultando || (!this.editando && !this.partes.dirty && Boolean(this.form.pristine));
        },
        enumerable: true,
        configurable: true
    });
    NovoContratoComponent.prototype.afterRetrieveData = function () {
        this.tipoDocumentoList = this.entidade.listCombos['TipoDocumento'];
        this.contratoPapelList = this.entidade.listCombos['ContratoPapel'];
        //reseta para nao ficar trafegando entre cliente e servidor
        this.entidade.listCombos = {};
        this.papelObservador = this.contratoPapelList.find(function (papel) { return papel.value == 'OBSERVADOR'; });
        this.contratoPapelList = this.contratoPapelList.filter(function (papel) { return papel.value != 'OBSERVADOR'; });
        if (this.entidade.contrato.id != null) {
            this.contratoPartesInit(this.entidade.contrato.partes);
            this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        }
        else {
            this.entidade.contrato.status = 'ATIVO';
            this.entidade.contrato.statusContrato = 'NAOLIBERADOASSINTAURA';
            this.entidade.contrato.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
            this.entidade.contrato.remetente = this.shared.usuario;
            this.entidade.contrato.documentos = [];
            this.partes = { listagem: [], dirty: false };
            this.observadores = { listagem: [], dirty: false };
        }
        this.consultando = this.entidade.contrato.statusContrato != 'NAOLIBERADOASSINTAURA' && this.entidade.contrato.statusContrato != 'RECUSADO';
    };
    NovoContratoComponent.prototype.contratoPartesInit = function (listagem) {
        var _this = this;
        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };
        if (!listagem) {
            return;
        }
        listagem.forEach(function (item) {
            if (_this.parteEhObservador(item)) {
                _this.observadores.listagem.push(item);
            }
            else {
                _this.partes.listagem.push(item);
            }
        });
    };
    NovoContratoComponent.prototype.adicionouContratoParte = function () {
        this.sincronizaPartesContrato();
    };
    NovoContratoComponent.prototype.adicionouObservador = function () {
        var _this = this;
        this.observadores.listagem.forEach(function (observador) {
            if (observador.papel.length == 0) {
                observador.papel.push({ id: "", papel: _this.papelObservador });
            }
        });
        this.sincronizaPartesContrato();
    };
    NovoContratoComponent.prototype.contratoDocumentosInit = function (listagem) {
        this.documentos = { listagem: listagem, dirty: false };
    };
    NovoContratoComponent.prototype.adicionouContratoDocumento = function () {
        this.loading.show();
        for (var i = 0; i < this.documentos.listagem.length; i++) {
            var doc = this.documentos.listagem[i];
            //verifica se é tipo de documento novo
            var achou = false;
            if (doc.nomeDocumento != undefined) {
                if (this.entidade.contrato.documentos != null) {
                    for (var j = 0; j < this.entidade.contrato.documentos.length; j++) {
                        var docContrato = this.entidade.contrato.documentos[j];
                        if (this.mesmoDocumentoContrato(doc, docContrato)) {
                            achou = true;
                            break;
                        }
                    }
                }
                if (!achou) {
                    //busca partes padrao
                    Promise.race([
                        this.buscaPartePadrao(doc.tipoDocumento)
                    ]);
                    this.entidade.contrato.documentos.push(doc);
                }
            }
        }
        ;
        this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
        this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        this.loading.hide();
        // this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
    };
    NovoContratoComponent.prototype.mesmoDocumentoContrato = function (documentoA, documentoB) {
        if (documentoA.id && documentoB.id) {
            return documentoA.id == documentoB.id;
        }
        return documentoA.documento == documentoB.documento &&
            documentoA.tipoDocumento &&
            documentoB.tipoDocumento &&
            documentoA.tipoDocumento.id == documentoB.tipoDocumento.id &&
            documentoA.nomeDocumento == documentoB.nomeDocumento;
    };
    Object.defineProperty(NovoContratoComponent.prototype, "formDirty", {
        get: function () {
            return this.form.dirty || this.partes.dirty || this.documentos.dirty;
        },
        enumerable: true,
        configurable: true
    });
    NovoContratoComponent.prototype.validateForm = function () {
        this.sincronizaPartesContrato();
        var pendencias = this.validarDuplicidadePessoaPapel();
        if (pendencias.length > 0) {
            this.dialog.warningPersistent(this.montaMensagemDuplicidadePessoaPapel(pendencias));
            return false;
        }
        return true;
    };
    NovoContratoComponent.prototype.beforeSave = function () {
        this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
        this.limpaArquivosJaPersistidos(this.entidade.contrato.documentos);
        this.sincronizaPartesContrato();
    };
    Object.defineProperty(NovoContratoComponent.prototype, "contratoParteModal", {
        get: function () {
            return this.partes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoContratoComponent.prototype, "contratoObservadoresModal", {
        get: function () {
            return this.observadores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoContratoComponent.prototype, "contratoPapelListDocumentos", {
        get: function () {
            var papeisDocumentos = this.getPapeisDocumentos(this.contratoDocumentoModal.listagem);
            return this.contratoPapelList.filter(function (papel) { return papeisDocumentos[papel.id]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoContratoComponent.prototype, "dadosComplementaresDocumento", {
        get: function () {
            var dadosComplementares = {
                combotipoDocumento: this.tipoDocumentoList,
                comboContratoPapel: this.contratoPapelList
            };
            return dadosComplementares;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoContratoComponent.prototype, "contratoDocumentoModal", {
        get: function () {
            return this.documentos;
        },
        enumerable: true,
        configurable: true
    });
    NovoContratoComponent.prototype.buscaPartePadrao = function (tipoDocumento) {
        var _this = this;
        var partesPadraoRequest = {
            cliente: this.shared.clienteSelecionado.cliente,
            tipoDocumento: tipoDocumento
        };
        this.contratoService.partesPadrao(partesPadraoRequest).subscribe(function (responseApi) {
            var lista = responseApi;
            /*
            if (this.adicionarSomenteUsuario()) {
                let listagemFiltro = lista.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                if (listagemFiltro.length >= 1) {
                    lista = listagemFiltro;
                }
            }*/
            for (var i = 0; i < lista.length; i++) {
                var parte = lista[i];
                _this.limpaIdPartePadrao(parte);
                if (parte.contatos != null) {
                    if (_this.adicionarSomenteUsuario() && parte.cpfCnpj == _this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                        var listagemFiltro = parte.contatos.filter(function (item) { return item.pessoaFisica.cpfCnpj == _this.shared.usuario.pessoa.cpfCnpj; });
                        if (listagemFiltro.length >= 1) {
                            parte.contatos = listagemFiltro;
                        }
                    }
                    for (var j = 0; j < parte.contatos.length; j++) {
                        var contato = parte.contatos[j];
                        _this.limpaIdPartePadrao(contato);
                    }
                    ;
                }
            }
            ;
            if (_this.entidade.contrato.partes != null)
                lista.forEach(function (parte) {
                    //procura parte ja no contrato
                    var parteExistente = _this.entidade.contrato.partes.find(function (x) { return x.cpfCnpj == parte.cpfCnpj; });
                    if (parteExistente == null)
                        _this.entidade.contrato.partes.push(parte);
                    else {
                        parte.papel.forEach(function (papel) {
                            var papelExistente = parteExistente.papel.find(function (x) { return x.papel.id == papel.papel.id; });
                            if (papelExistente == null)
                                parteExistente.papel.push(papel);
                        });
                        if (parte.contatos != null) {
                            parte.contatos.forEach(function (parte) {
                                //procura parte ja no contrato
                                var contatoExistente = parteExistente.contatos.find(function (x) { return x.cpfCnpj == parte.cpfCnpj; });
                                if (contatoExistente == null)
                                    parteExistente.contatos.push(parte);
                                else {
                                    parte.papel.forEach(function (papel) {
                                        var papelExistente = contatoExistente.papel.find(function (x) { return x.papel.id == papel.papel.id; });
                                        if (papelExistente == null)
                                            contatoExistente.papel.push(papel);
                                    });
                                }
                            });
                        }
                    }
                });
            else
                _this.entidade.contrato.partes = responseApi;
            _this.contratoPartesInit(_this.entidade.contrato.partes);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    NovoContratoComponent.prototype.limpaIdPartePadrao = function (parte) {
        parte.id = null;
        parte.statusAssinatura = 'NAOLIBERADO';
        parte.status = 'ATIVO';
        parte.duplicatas = false;
        parte.papel.forEach(function (papel) {
            papel.id = null;
        });
    };
    NovoContratoComponent.prototype.adicionarSomenteUsuario = function () {
        if (this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["SOMENTE_INCLUIR_USUARIO_NO_CONTRATO"])) {
            return true;
        }
        else {
            return false;
        }
    };
    NovoContratoComponent.prototype.liberarAssinatura = function () {
        var _this = this;
        var pendencias = this.validarPendenciasLiberacao();
        if (pendencias.length > 0) {
            this.dialog.warningPersistent(this.montaMensagemPendenciasLiberacao(pendencias));
            return;
        }
        this.loading.show();
        this.entidade.contrato.usuarioSolicitacaoAssinatura = this.shared.usuario;
        this.contratoService.liberarAssinatura(this.entidade).subscribe(function (responseApi) {
            _this.entidade = responseApi;
            _this.loading.hide();
            if (_this.entidade.contrato.validado) {
                _this.dialog.success((_this.formulario ? _this.formulario : 'Registro') + " liberado para assinatura com sucesso!");
                _this.cancelar();
            }
            else {
                _this.dialog.warningPersistent(_this.entidade.contrato.validacaoMensagem);
            }
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    NovoContratoComponent.prototype.validarPendenciasLiberacao = function () {
        var _this = this;
        var pendencias = [];
        var contrato = this.ContratoRequest.contrato;
        if (this.form.invalid) {
            Object.keys(this.form.controls).forEach(function (key) {
                _this.form.controls[key].markAsTouched();
            });
            pendencias.push({ tipo: "geral", texto: "Preencha os campos obrigatorios do contrato." });
        }
        if (!contrato.documentos || contrato.documentos.length == 0) {
            pendencias.push({ tipo: "geral", texto: "Adicione pelo menos um documento para assinatura." });
            return pendencias;
        }
        var papeisDocumento = this.getPapeisDocumentos(contrato.documentos);
        var papeisPartes = this.getPapeisPartes(contrato.partes);
        if (!contrato.partes || contrato.partes.length == 0) {
            pendencias.push({ tipo: "geral", texto: "Informe as partes que irao assinar o contrato." });
        }
        this.validarDuplicidadePessoaPapel().forEach(function (pendencia) { return pendencias.push(pendencia); });
        contrato.documentos.forEach(function (documento) {
            if (!documento.papel || documento.papel.length == 0) {
                pendencias.push({
                    tipo: "documento",
                    documento: _this.nomeDocumento(documento),
                    texto: "informe ao menos um papel de assinatura"
                });
                return;
            }
            documento.papel.forEach(function (papelDocumento) {
                var papel = _this.getPapel(papelDocumento);
                if (papel && !papeisPartes[papel.id]) {
                    pendencias.push({
                        tipo: "papelDocumento",
                        documento: _this.nomeDocumento(documento),
                        papel: papel.nome
                    });
                }
            });
        });
        Object.keys(papeisPartes).forEach(function (papelId) {
            if (!papeisDocumento[papelId]) {
                pendencias.push({
                    tipo: "geral",
                    texto: "Existe parte informada como \"" + papeisPartes[papelId] +
                        "\", mas nenhum documento exige este papel."
                });
            }
        });
        return pendencias;
    };
    NovoContratoComponent.prototype.montaMensagemPendenciasLiberacao = function (pendencias) {
        var pendenciasGerais = pendencias.filter(function (pendencia) { return pendencia.tipo == "geral"; });
        var pendenciasDuplicidade = pendencias.filter(function (pendencia) { return pendencia.tipo == "duplicidadePessoaPapel"; });
        var pendenciasDocumento = pendencias.filter(function (pendencia) { return pendencia.tipo == "documento"; });
        var papeisPorDocumento = {};
        var linhas = [];
        pendencias.filter(function (pendencia) { return pendencia.tipo == "papelDocumento"; }).forEach(function (pendencia) {
            if (!papeisPorDocumento[pendencia.documento]) {
                papeisPorDocumento[pendencia.documento] = [];
            }
            if (!papeisPorDocumento[pendencia.documento].includes(pendencia.papel)) {
                papeisPorDocumento[pendencia.documento].push(pendencia.papel);
            }
        });
        if (pendenciasGerais.length > 0) {
            linhas.push("<strong>Antes de liberar:</strong>");
            pendenciasGerais.forEach(function (pendencia) {
                linhas.push("- " + pendencia.texto);
            });
        }
        if (pendenciasDuplicidade.length > 0) {
            if (linhas.length > 0) {
                linhas.push("<br>");
            }
            linhas.push("<strong>Revise partes duplicadas:</strong>");
            pendenciasDuplicidade.forEach(function (pendencia) {
                linhas.push("- " + pendencia.texto);
            });
        }
        if (pendenciasDocumento.length > 0 || Object.keys(papeisPorDocumento).length > 0) {
            if (linhas.length > 0) {
                linhas.push("<br>");
            }
            linhas.push("<strong>Complete as assinaturas dos documentos:</strong>");
        }
        pendenciasDocumento.forEach(function (pendencia) {
            linhas.push("- <strong>" + pendencia.documento + "</strong>: " + pendencia.texto + ".");
        });
        Object.keys(papeisPorDocumento).forEach(function (documento) {
            linhas.push("- <strong>" + documento + "</strong>: informe quem assina como " +
                papeisPorDocumento[documento].join(", ") + ".");
        });
        return linhas.join("<br>");
    };
    NovoContratoComponent.prototype.validarDuplicidadePessoaPapel = function () {
        var pendencias = [];
        var assinaturasDiretas = this.getAssinaturasDiretas();
        var assinaturasRepresentantes = this.getAssinaturasRepresentantes();
        assinaturasDiretas.forEach(function (assinaturaDireta) {
            assinaturasRepresentantes
                .filter(function (assinaturaRepresentante) {
                return assinaturaRepresentante.cpfCnpj == assinaturaDireta.cpfCnpj &&
                    assinaturaRepresentante.papelId == assinaturaDireta.papelId;
            })
                .forEach(function (assinaturaRepresentante) {
                pendencias.push({
                    tipo: "duplicidadePessoaPapel",
                    texto: assinaturaDireta.nome + " esta informado como parte direta e representante de " +
                        assinaturaRepresentante.empresa + " para assinar como " + assinaturaDireta.papel +
                        ". Mantenha apenas uma entrada para este papel."
                });
            });
        });
        return pendencias;
    };
    NovoContratoComponent.prototype.montaMensagemDuplicidadePessoaPapel = function (pendencias) {
        var linhas = [
            "<strong>Revise as partes antes de salvar:</strong>"
        ];
        pendencias.forEach(function (pendencia) {
            linhas.push("- " + pendencia.texto);
        });
        return linhas.join("<br>");
    };
    NovoContratoComponent.prototype.getAssinaturasDiretas = function () {
        var _this = this;
        var assinaturas = [];
        if (!this.partes || !this.partes.listagem) {
            return assinaturas;
        }
        this.partes.listagem
            .filter(function (parte) { return parte && parte.tipoPessoa == "FISICA"; })
            .forEach(function (parte) {
            _this.getPapeisParte(parte).forEach(function (papel) {
                assinaturas.push({
                    cpfCnpj: parte.cpfCnpj,
                    nome: parte.nomeRazaoSocial,
                    papelId: papel.id,
                    papel: papel.nome
                });
            });
        });
        return assinaturas;
    };
    NovoContratoComponent.prototype.getAssinaturasRepresentantes = function () {
        var _this = this;
        var assinaturas = [];
        if (!this.partes || !this.partes.listagem) {
            return assinaturas;
        }
        this.partes.listagem
            .filter(function (parte) { return parte && parte.tipoPessoa == "JURIDICA" && parte.contatos; })
            .forEach(function (parte) {
            parte.contatos.forEach(function (contato) {
                _this.getPapeisParte(contato).forEach(function (papel) {
                    assinaturas.push({
                        cpfCnpj: contato.cpfCnpj,
                        nome: contato.nomeRazaoSocial,
                        empresa: parte.nomeRazaoSocial,
                        papelId: papel.id,
                        papel: papel.nome
                    });
                });
            });
        });
        return assinaturas;
    };
    NovoContratoComponent.prototype.getPapeisParte = function (parte) {
        var _this = this;
        var papeis = [];
        if (!parte || !parte.papel) {
            return papeis;
        }
        parte.papel.forEach(function (papelParte) {
            var papel = _this.getPapel(papelParte);
            if (papel) {
                papeis.push(papel);
            }
        });
        return papeis;
    };
    NovoContratoComponent.prototype.getPapeisDocumentos = function (documentos) {
        var _this = this;
        var papeis = {};
        if (!documentos) {
            return papeis;
        }
        documentos.forEach(function (documento) {
            if (documento.papel) {
                documento.papel.forEach(function (papelDocumento) {
                    var papel = _this.getPapel(papelDocumento);
                    if (papel) {
                        papeis[papel.id] = papel.nome;
                    }
                });
            }
        });
        return papeis;
    };
    NovoContratoComponent.prototype.getPapeisPartes = function (partes) {
        var _this = this;
        var papeis = {};
        if (!partes) {
            return papeis;
        }
        partes.forEach(function (parte) {
            _this.adicionaPapeisParte(papeis, parte);
            if (parte.contatos) {
                parte.contatos.forEach(function (contato) {
                    _this.adicionaPapeisParte(papeis, contato);
                });
            }
        });
        return papeis;
    };
    NovoContratoComponent.prototype.adicionaPapeisParte = function (papeis, parte) {
        var _this = this;
        if (!parte || parte.status == "INATIVO" || !parte.papel) {
            return;
        }
        parte.papel.forEach(function (papelParte) {
            var papel = _this.getPapel(papelParte);
            if (papel) {
                papeis[papel.id] = papel.nome;
            }
        });
    };
    NovoContratoComponent.prototype.sincronizaPartesContrato = function () {
        var partes = this.normalizaPartes(this.partes.listagem);
        var observadores = this.normalizaPartes(this.observadores.listagem);
        this.partes.listagem = partes;
        this.observadores.listagem = observadores;
        this.entidade.contrato.partes = JSON.parse(JSON.stringify(partes.concat(observadores)));
    };
    NovoContratoComponent.prototype.normalizaPartes = function (listagem) {
        var _this = this;
        var resultado = [];
        if (!listagem) {
            return resultado;
        }
        listagem.forEach(function (parte) {
            if (!parte) {
                return;
            }
            var parteExistente = resultado.find(function (item) { return item.cpfCnpj == parte.cpfCnpj; });
            if (!parteExistente) {
                resultado.push(parte);
                return;
            }
            _this.mesclaPapeisParte(parteExistente, parte);
            _this.mesclaContatosParte(parteExistente, parte);
        });
        return resultado;
    };
    NovoContratoComponent.prototype.mesclaPapeisParte = function (destino, origem) {
        var _this = this;
        if (!origem || !origem.papel) {
            return;
        }
        if (!destino.papel) {
            destino.papel = [];
        }
        origem.papel.forEach(function (papelOrigem) {
            var papel = _this.getPapel(papelOrigem);
            if (papel && !destino.papel.some(function (papelDestino) {
                var papelExistente = _this.getPapel(papelDestino);
                return papelExistente && papelExistente.id == papel.id;
            })) {
                destino.papel.push(papelOrigem);
            }
        });
    };
    NovoContratoComponent.prototype.mesclaContatosParte = function (destino, origem) {
        var _this = this;
        if (!origem || !origem.contatos) {
            return;
        }
        if (!destino.contatos) {
            destino.contatos = [];
        }
        origem.contatos.forEach(function (contatoOrigem) {
            var contatoExistente = destino.contatos.find(function (contato) { return contato.cpfCnpj == contatoOrigem.cpfCnpj; });
            if (!contatoExistente) {
                destino.contatos.push(contatoOrigem);
                return;
            }
            _this.mesclaPapeisParte(contatoExistente, contatoOrigem);
        });
    };
    NovoContratoComponent.prototype.parteEhObservador = function (parte) {
        var _this = this;
        if (!parte || !this.papelObservador || !this.papelObservador.id) {
            return false;
        }
        if (parte.papel && parte.papel.some(function (papel) {
            var papelParte = _this.getPapel(papel);
            return papelParte && papelParte.id == _this.papelObservador.id;
        })) {
            return true;
        }
        if (parte.contatos) {
            return parte.contatos.some(function (contato) {
                return contato.papel && contato.papel.some(function (papel) {
                    var papelParte = _this.getPapel(papel);
                    return papelParte && papelParte.id == _this.papelObservador.id;
                });
            });
        }
        return false;
    };
    NovoContratoComponent.prototype.getPapel = function (item) {
        if (!item) {
            return null;
        }
        var papel = item.papel ? item.papel : item;
        if (!papel || !papel.id) {
            return null;
        }
        return {
            id: papel.id,
            nome: papel.nome || papel.descricao || papel.identificacao || "Papel"
        };
    };
    NovoContratoComponent.prototype.nomeDocumento = function (documento) {
        return documento.nomeDocumento || documento.identificador || "Documento";
    };
    NovoContratoComponent.prototype.limpaArquivosJaPersistidos = function (documentos) {
        if (!documentos) {
            return;
        }
        documentos.forEach(function (documento) {
            var documentoJaPersistido = documento.id || documento.documentoOriginalSHA256;
            if (documentoJaPersistido) {
                documento.documento = null;
                documento.documentoOriginal = null;
                documento.documentoAssinado = null;
            }
        });
    };
    NovoContratoComponent.prototype.contratoDownload = function () {
        var _this = this;
        this.documentoService.getDownload(this.entidade.contrato).subscribe(function (responseApi) {
            var item = { anexo64: "", nomeArquivo: "" };
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            _this.utilService.download(item);
            //let bytechars = atob(responseApi.arquivoByte);
            // let blob = new Blob([atob(responseApi.arquivoByte)], { type: "application/zip" });
            //this.utilService.downloadFile(blob, responseApi.arquivoNome);
        }, function (err) {
            _this.errorHandler.handle(err);
        });
    };
    NovoContratoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"] },
        { type: app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_7__["DocumentoService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NovoContratoComponent.prototype, "form", void 0);
    NovoContratoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-novo-contrato',
            template: __webpack_require__(/*! raw-loader!./novo-contrato.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cadastros/contrato/novo/novo-contrato.component.html"),
            styles: [__webpack_require__(/*! ./novo-contrato.component.css */ "./src/app/components/cadastros/contrato/novo/novo-contrato.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cadastro_cadastro_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"],
            app_services_assinar_documento_documento_service__WEBPACK_IMPORTED_MODULE_7__["DocumentoService"]])
    ], NovoContratoComponent);
    return NovoContratoComponent;
}(_padrao_novo_padrao_novo_component__WEBPACK_IMPORTED_MODULE_3__["PadraoNovoComponent"]));



/***/ }),

/***/ "./src/app/model/enum/statusContratoEnum.ts":
/*!**************************************************!*\
  !*** ./src/app/model/enum/statusContratoEnum.ts ***!
  \**************************************************/
/*! exports provided: StatusContratoEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusContratoEnum", function() { return StatusContratoEnum; });
var StatusContratoEnum;
(function (StatusContratoEnum) {
    StatusContratoEnum[StatusContratoEnum["NAOLIBERADOASSINTAURA"] = 0] = "NAOLIBERADOASSINTAURA";
    StatusContratoEnum[StatusContratoEnum["ASSINADO"] = 1] = "ASSINADO";
    StatusContratoEnum[StatusContratoEnum["LIBERADOASSINATURA"] = 2] = "LIBERADOASSINATURA";
    StatusContratoEnum[StatusContratoEnum["PARCIALMENTEASSINADO"] = 3] = "PARCIALMENTEASSINADO";
    StatusContratoEnum[StatusContratoEnum["GERANDOASSINATURAS"] = 4] = "GERANDOASSINATURAS";
})(StatusContratoEnum || (StatusContratoEnum = {}));
(function (StatusContratoEnum) {
    function toString(status) {
        return StatusContratoEnum[status];
    }
    StatusContratoEnum.toString = toString;
    function parse(status) {
        return StatusContratoEnum[status];
    }
    StatusContratoEnum.parse = parse;
    function label(status) {
        switch (status) {
            case StatusContratoEnum.NAOLIBERADOASSINTAURA:
                return "NÃO LIBERADO PARA ASSINATURA";
            case StatusContratoEnum.ASSINADO:
                return "ASSINADO";
            case StatusContratoEnum.LIBERADOASSINATURA:
                return "LIBERADO ASSINATURA";
            case StatusContratoEnum.PARCIALMENTEASSINADO:
                return "PARCIALMENTE ASSINADO";
            case StatusContratoEnum.GERANDOASSINATURAS:
                return "GERANDO ASSINATURAS";
            default:
                return "";
        }
    }
    StatusContratoEnum.label = label;
})(StatusContratoEnum || (StatusContratoEnum = {}));


/***/ })

}]);
//# sourceMappingURL=default~components-assinar-assinar-module~components-cadastros-cadastros-module.js.map