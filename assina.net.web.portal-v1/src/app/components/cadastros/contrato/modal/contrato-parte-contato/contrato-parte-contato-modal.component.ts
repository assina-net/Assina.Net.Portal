import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { SharedService } from 'app/services/util/shared.service';
import { IDadosLista, PadraoNovoComponent } from '../../../../padrao/novo/padrao-novo.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
    selector: 'app-contrato-parte-contato-modal',
    templateUrl: './contrato-parte-contato-modal.component.html',
    styleUrls: ['./contrato-parte-contato-modal.component.scss']
})
export class ContratoParteContatoModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;

    contato: any = {};
    message: IAlert;

    constructor(private utilService: UtilService,
        private dialog: DialogService,
        protected shared: SharedService) {
    }

    ngOnInit() {
        if (this.instance) {
            this.contato = this.instance;

            //let listagem = this.parte.contatos.slice();
            //this.contatos = {listagem: listagem, dirty: false};

        } else {
            this.contato.tipoPessoa = "FISICA";
            this.contato.status = "ATIVO";
            this.contato.nome = "";
            this.contato.statusAssinatura = 'NAOASSINADO'
        }

    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }
    classLowerCase() {
        return this.shared.classLowerCase;
    }
}
