import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { ContratoService } from '../../../../../services/cadastro/cadastro/contrato.service';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from '../../../../../model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from '../../../../../services/util/app-injector.service';
import * as LZString from 'lz-string';

@Component({
    selector: 'app-contrato-documento-visualizar-modal',
    templateUrl: './contrato-documento-visualizar-modal.component.html',
    styleUrls: ['./contrato-documento-visualizar-modal.component.scss']

})
export class ContratoDocumentoVisualizarModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @ViewChild('pdfViewer', { static: true }) pdfViewer;
    @Input() instance: any;

    documento: any = {};
    documentoPDF: any = {};
    byteArray: Uint8Array;
    message: IAlert;
    carregando = false;

    protected errorHandler: ErrorHandlerService;
    protected shared: SharedService;

    constructor(private utilService: UtilService,
        private contratoService: ContratoService,
        private dialog: DialogService) {
        const injector = AppInjector.getInjector();
        this.errorHandler = injector.get(ErrorHandlerService);
        this.shared = injector.get(SharedService);
    }

    ngOnInit() {
        if (this.instance) {
            this.documento = this.instance;
            if (this.documento.documento == null) {
                this.carregando = true;
                this.buscaPDF();
            } else {
                this.pdfInit({ documentoPDF: this.documento.documento})
            }
        } else {
            this.documento = "";
            this.carregando = false;
        }

    }


    pdfInit(documento) {
        var documentoPDFDescompactado = LZString["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(char => char.charCodeAt(0)));
        this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
        this.carregando = false;
    }

    buscaPDF() {
        this.contratoService.getDocumentoPDF(this.documento).subscribe((responseApi: ResponseApi) => {
            this.carregando = false;
            const mensagemApi = this.getMensagemApi(responseApi);
            if (mensagemApi) {
                this.showMessage({
                    type: 'warning',
                    text: mensagemApi
                });
                return;
            }
            this.pdfInit(responseApi.data)
        }, err => {
            this.carregando = false;
            const mensagemApi = this.getMensagemApi(err && err.error);
            if (mensagemApi || (err && err.status == 401)) {
                this.showMessage({
                    type: 'warning',
                    text: mensagemApi || 'Sua sessão expirou. Faça login novamente.'
                });
                return;
            }
            this.errorHandler.handle(err);
        });
        return null;
    }

    private getMensagemApi(responseApi: ResponseApi): string {
        if (responseApi && responseApi.errors && responseApi.errors.length) {
            return responseApi.errors[responseApi.errors.length - 1];
        }
        return null;
    }


    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }

}
