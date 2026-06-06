import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { TermoService } from 'app/services/termo/termo.service';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as LZString from 'lz-string';
import { TermoAceiteVisualizarModalComponent } from 'app/components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component'

@Component({
    selector: 'app-termo-aceite-modal',
    templateUrl: './termo-aceite-modal.component.html',
    styleUrls: ['./termo-aceite-modal.component.scss']

})

export class TermoAceiteModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;

    documento: any = {};
    termos: any = [];
    message: IAlert;
    urlNavigate: string;
    termosPendentes: string;

    termoAceiteVisualizarModal = TermoAceiteVisualizarModalComponent;

    protected errorHandler: ErrorHandlerService;
    protected shared: SharedService;
    protected loading: NgxSpinnerService;

    constructor(private utilService: UtilService,
        private termoService: TermoService,
        private dialog: DialogService,
        private activeModal: NgbActiveModal,
        private router: Router,
        private modalService: NgbModal) {
        const injector = AppInjector.getInjector();
        this.errorHandler = injector.get(ErrorHandlerService);
        this.shared = injector.get(SharedService);
        this.loading = injector.get(NgxSpinnerService);
    }

    ngOnInit() {
        this.buscaTermos();

    }

    pdfInit(termosResponse) {
        this.termosPendentes = "";
        let prefixo: string = "";

        termosResponse.forEach(termoResponse => {
            var termoDescompactado = LZString["decompressFromUTF16"](termoResponse.documento);
            termoResponse.documento = "data:application/pdf;base64," + termoDescompactado;
            this.termos.push(termoResponse);
            if (termoResponse.tipoTermo == "TERMO_DE_PRIVACIDADE_SISTEMA")
                this.termosPendentes += prefixo + "a " + termoResponse.nome;
            else
                this.termosPendentes += prefixo + "o " + termoResponse.nome;
            prefixo = ' e com '
        });
        this.termosPendentes = "Li e concordo com " + this.termosPendentes + " da Assina.net";
    }

    buscaTermos() {
        this.termoService.getTermosParaAssinaturaPDF(this.shared.usuario).subscribe((responseApi: ResponseApi) => {
            this.pdfInit(responseApi)
        }, err => {
            this.errorHandler.handle(err);
        });
        return null;
    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }

    fecharTermosAceitos() {
        var todosAceitos = true;

        for (let index = 0; index < this.termos.length; index++) {
            var termo = this.termos[index];
            if (!termo.aceite) {
                todosAceitos = false;
                break;
            }
        }

        if (todosAceitos) {

            //salvar e fechar o modal

            this.salvar();


        } else {
            this.showMessage({
                type: 'danger',
                text: "É nescessário aceitar todos os termos."
            });
        }



    }

    salvar() {
        this.message = null;

        this.loading.show();
        let termoAceiteRequest = { usuario: this.shared.usuario, termos: this.termos }

        this.termoService.termosAceite(termoAceiteRequest).subscribe((responseApi: ResponseApi) => {
            this.loading.hide();
            this.dialog.success('Termos aceitos com sucesso!');
            this.activeModal.close("assinado");

            if (this.urlNavigate) {
                this.router.navigate([this.urlNavigate]);
            }
        }, err => {
            this.errorHandler.handle(err);
        });
    }


    exibirTermo(item) {
        const modalRef = this.modalService.open(
            this.termoAceiteVisualizarModal, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        }
        );
        modalRef.componentInstance.termo = item;

    }

}