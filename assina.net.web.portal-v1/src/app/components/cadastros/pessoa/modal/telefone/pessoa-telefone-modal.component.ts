import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { IDadosLista } from '../../../../padrao/novo/padrao-novo.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PapelContratoEnum } from 'app/model/enum/papelContratoEnum';
import { TipoPessoaEnum } from 'app/model/enum/tipoPessoaEnum';
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { ContratoService } from 'app/services/cadastro/cadastro/contrato.service';

@Component({
    selector: 'app-pessoa-telefone-modal',
    templateUrl: './pessoa-telefone-modal.component.html',
    styleUrls: ['./pessoa-telefone-modal.component.scss']
})
export class PessoaTelefoneModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;
    @Input() instanceList: any;
    

    telefoneEdit: any = { status: 'ATIVO', tipoTelefone: { id: "", nome: "" } };
    message: IAlert;    
    titulo: string;
    origem: string = "Pessoa";

    protected shared: SharedService;
    protected errorHandler: ErrorHandlerService;

    tipoTelefoneList = [];
    _dadosComplementares: any;

    constructor(private utilService: UtilService,
        private contratoService: ContratoService,
        private dialog: DialogService) {
        const injector = AppInjector.getInjector();
        this.shared = injector.get(SharedService);
        this.errorHandler = injector.get(ErrorHandlerService);
    }

    ngOnInit() {

        if (this.instance) {
            this.telefoneEdit = this.instance;
            this.titulo = "Cadastro > " + this.origem + " > Editar Telefone";
        } else {
            this.telefoneEdit = { status: 'ATIVO', tipoTelefone: { id: "", nome: "" } };
            this.titulo = "Cadastro > " + this.origem + " > Novo Telefone"
        }
    }

    antesSalvarEvent() {
        let item = this.tipoTelefoneList.find(x => x.item_id == this.telefoneEdit.tipoTelefone.id);
        if (item != undefined)
            this.telefoneEdit.tipoTelefone.nome = item.item_text;
        this.instance = this.telefoneEdit;
    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    set dadosComplementares(dadosComplementares: any) {
        this._dadosComplementares = dadosComplementares;

        if (dadosComplementares.combotipoTelefone != undefined) {
            this.tipoTelefoneList = dadosComplementares.combotipoTelefone;
        }

        if (dadosComplementares.origem != undefined) {
            this.origem = dadosComplementares.origem;
        }

    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }
}
