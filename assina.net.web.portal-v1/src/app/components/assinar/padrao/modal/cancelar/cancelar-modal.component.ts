import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { DocumentoVigenteService } from 'app/services/assinar/documento/documentoVigente.service';
import { ResponseApi } from '../../../../../model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-cancelar-modal',
    templateUrl: './cancelar-modal.component.html',
    styleUrls: ['./cancelar-modal.component.scss']

})
export class CancelarModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;

    motivoCancelamento: string;
    message: IAlert;
    rota: string;
    mensagemCancelamento: string;

    protected shared: SharedService;
    protected router: Router;
    protected errorHandler: ErrorHandlerService;
    protected loading: NgxSpinnerService;


    constructor(private utilService: UtilService,
        private documentoVigenteService: DocumentoVigenteService,
        private activeModal: NgbActiveModal,
        private dialog: DialogService) {

        const injector = AppInjector.getInjector();
        this.loading = injector.get(NgxSpinnerService);
        this.shared = SharedService.getInstance();
        this.errorHandler = injector.get(ErrorHandlerService);
        this.router = injector.get(Router);
    }

    ngOnInit() {
    }



    cancelarDocumento() {

        this.dialog.confirmCancel(this.mensagemCancelamento)
            .then((canCancel: boolean) => {
                if (canCancel) {
                    let contratoCancelamentoRequest = {
                        usuario: this.shared.usuario,
                        contratos: this.instance,
                        motivo: this.motivoCancelamento
                    }
                    this.loading.show();
                    this.documentoVigenteService.cancelarDocumento(contratoCancelamentoRequest).subscribe((responseApi: ResponseApi) => {
                        this.loading.hide();
                        this.dialog.success('Documentos cancelados com sucesso!');
                        this.activeModal.close("cancelado");
                        this.router.navigate([this.rota], { skipLocationChange: true });
                    }, err => {
                        this.loading.hide();
                        this.errorHandler.handle(err);
                    });
                }
            });
    }


    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }


    classUpperCase() {
        return this.shared.classUpperCase;
     }

}