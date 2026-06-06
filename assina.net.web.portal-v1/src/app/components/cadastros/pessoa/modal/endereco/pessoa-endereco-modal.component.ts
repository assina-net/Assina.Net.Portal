import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IHttpService } from 'app/services/util/http.service';
import { SharedService } from 'app/services/util/shared.service';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { ClienteService } from 'app/services/cadastro/cliente/cliente.service';
import { ResponseApi } from 'app/model/util/response-api';

@Component({
    selector: 'app-pessoa-endereco-modal',
    templateUrl: './pessoa-endereco-modal.component.html',
    styleUrls: ['./pessoa-endereco-modal.component.scss']
})
export class PessoaEnderecoModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;
    @Input() instanceList: any;


    enderecoEdit: any = { status: 'ATIVO', tipoEndereco: { id: "", nome: "" } };
    message: IAlert;
    titulo: string;
    origem: string = "Pessoa";


    protected shared: SharedService;
    protected errorHandler: ErrorHandlerService;

    tipoEnderecoList = [];
    _dadosComplementares: any;

    constructor(private utilService: UtilService,
        private clienteService: ClienteService,
        private dialog: DialogService,
        private loading: NgxSpinnerService) {
        const injector = AppInjector.getInjector();
        this.shared = injector.get(SharedService);
        this.errorHandler = injector.get(ErrorHandlerService);

    }

    ngOnInit() {

        if (this.instance) {
            this.enderecoEdit = this.instance;
            this.titulo = "Cadastro > " + this.origem + " > Editar Endereço";
        } else {
            this.enderecoEdit = { status: 'ATIVO', tipoEndereco: { id: "", nome: "" } };
            this.titulo = "Cadastro > " + this.origem + " > Novo Endereço";
        }
    }

    antesSalvarEvent() {
        let item = this.tipoEnderecoList.find(x => x.item_id == this.enderecoEdit.tipoEndereco.id);
        if (item != undefined)
            this.enderecoEdit.tipoEndereco.nome = item.item_text;
        this.instance = this.enderecoEdit;
    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    set dadosComplementares(dadosComplementares: any) {
        this._dadosComplementares = dadosComplementares;

        if (dadosComplementares.combotipoEndereco != undefined) {
            this.tipoEnderecoList = dadosComplementares.combotipoEndereco;
        }

        if (dadosComplementares.origem != undefined) {
            this.origem = dadosComplementares.origem;
        }

    }

    preencheEndereco(data) {
        try {
        this.enderecoEdit.endereco = data.logradouro;
        this.enderecoEdit.bairro = data.bairro;
        this.enderecoEdit.municipio = data.localidade;
        this.enderecoEdit.estado = data.uf;
        }catch{}
    }
    cepChange() {
        this.loading.show();
        this.clienteService.buscaEndereco( this.enderecoEdit.cep).subscribe((responseApi: ResponseApi) => {
            this.preencheEndereco(responseApi.data);
            this.loading.hide();
         }, err => {
            this.errorHandler.handle(err);
         });
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }
}
