import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { SharedService } from 'app/services/util/shared.service';
import * as LZString from 'lz-string';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratoPapelModalComponent } from 'app/components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component';
import { ContratoTipoDocumentoModalComponent } from 'app/components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component';

import { StatusEnum } from "app/model/enum/statusEnum";
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
    selector: 'app-contrato-documento-modal',
    templateUrl: './contrato-documento-modal.component.html',
    styleUrls: ['./contrato-documento-modal.component.scss']
})
export class ContratoDocumentoModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;

    documento: any = {};
    tela: any = {};
    message: IAlert;


    tipoDocumentoList = [];
    dropdownList = [];

    dropdownSettings = {};
    _dadosComplementares: any


    novoPapelComponentForm = ContratoPapelModalComponent;
    novoTipoDocumentoComponentForm = ContratoTipoDocumentoModalComponent;

    constructor(private utilService: UtilService,
        private dialog: DialogService,
        protected shared: SharedService,
        private modalService: NgbModal,
        private activeModal: NgbActiveModal,) {
    }

    ngOnInit() {
        if (this.instance) {
            this.documento = this.instance;
        } else {
            this.documento = [];
            this.resetTela();
        }

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false

        };

    }

    private resetTela() {
        this.tela.nomeDocumento = "";
        this.tela.tipoDocumento = "";
        this.form.resetForm();
        this.tela.papel = [];
        this.dropdownList = [];
        this.message = null;

    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }


    uploadArquivo(event) {

        var files = event.target.files;
        var lstPapel = [];

        this.message = null;
        if (this.tela.tipoDocumento.length == 0) {
            this.message = {
                type: 'danger',
                text: "Escolha o tipo de documento"
            }
            return;
        }

        if (this.tela.papel.length == 0) {
            this.message = {
                type: 'danger',
                text: "Escolha o papel para assinar este documento"
            }
            return;
        }

        this.tela.papel.forEach(papel => {

            this._dadosComplementares.comboContratoPapel.forEach(value => {
                if (papel.item_id == value.id) {
                    let item = { id: "", papel: { id: value.id, nome: value.label } };
                    lstPapel.push(item);
                    return;
                }
            });
        })


        let resultTipoDocumento = this._dadosComplementares.combotipoDocumento.find(tipoDocumento => tipoDocumento.id === this.tela.tipoDocumento);
        let erro = false;
        for (var i = 0; i < event.target.files.length; i++) {
            this.utilService.getFile(event.target.files[i]).then((data) => {
                let documento = {
                    documento: LZString["compressToUTF16"](this.utilService.byteArrayToBase64(data['bytes'])),
                    nomeDocumento: data['fileName'],
                    papel: lstPapel,
                    tipoDocumento: { id: resultTipoDocumento.id, nome: resultTipoDocumento.label },
                    statusDocumento: 'NAOASSINADO',
                    descStatusDocumento: 'NÃO ASSINADO',
                    status: 'ATIVO'
                }

                if (!documento.nomeDocumento.toLowerCase().endsWith("pdf")) {
                    this.message = {
                        type: 'danger',
                        text: "Arquivo enviado com formato inválido para assinatura"
                    }
                    erro = true;
                    return;
                }

                if (documento.documento.length < 5) {
                    this.message = {
                        type: 'danger',
                        text: "Verique o arquivo enviado, tamanho muito pequeno"
                    }
                    erro = true;
                    return;
                }
                this.documento.push(documento);
                this.resetTela();
            });
        }
    }


    tipoDocumentoChange() {

        if (this.tela.tipoDocumento == null || this.tela.tipoDocumento == "")
            return;

        let result = this._dadosComplementares.combotipoDocumento.find(tipoDocumento => tipoDocumento.id === this.tela.tipoDocumento);
        this.tela.papel = [];
        this.dropdownList = [];
        result.subList.forEach(papel => {
            let item = { item_id: papel.id, item_text: papel.label };
            this.dropdownList.push(item);
            this.tela.papel.push(item);
        })
    }


    set dadosComplementares(dadosComplementares: any) {
        this._dadosComplementares = dadosComplementares;

        this._dadosComplementares.combotipoDocumento.forEach(opcao => {
            // if (opcao.tipoCliente.includes(this.shared.clienteSelecionado.cliente.tipoCliente))
            this.tipoDocumentoList.push({ item_id: opcao.id, item_text: opcao.label })
        });

    }


    remover(documento) {
        const index = this.documento.indexOf(documento, 0);
        if (index != -1) {
            this.dialog.confirmDelete("Confirma a remoção deste documento ?")
                .then((candelete: boolean) => {
                    if (candelete) {
                        this.documento.splice(index, 1);
                    }
                });


            //this.tela.documentos.splice(index, 1);
            //this.documento.splice(index, 1);

        }
    }

    get liberadoUpload() {
        return this.tela.papel.length == 0;
    }

    salvar() {

        this.message = null;
        if (this.documento.length == 0) {
            this.message = {
                type: 'danger',
                text: "Não foi enviado nenhum arquivo"
            }
            return;
        }
        this.activeModal.close(this.documento);
    }
    classUpperCase() {
        return this.shared.classUpperCase;
    }


    incluirPapel() {
        const modalRef = this.modalService.open(
            this.novoPapelComponentForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        }
        );

        let papelTemp = this.tela.papel;
        let dropdownListTemp = this.dropdownList;
        this.tela.papel = []
        this.dropdownList = []


        modalRef.componentInstance.tipoDocumento = this.tela.tipoDocumento;

        modalRef.result.then((result) => {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }
                this.novoPapelIncluido(result, papelTemp, dropdownListTemp);
            } else {
                this.tela.papel = papelTemp;
                this.dropdownList = dropdownListTemp;
            }
        }).catch((result) => {
            console.log(result);
        });
    }

    disableAddPapel() {
        return this.tela.tipoDocumento == null || this.tela.tipoDocumento == ""
    }

    private novoPapelIncluido(data: any, papelTemp: any, dropdownListTemp: any) {

        let item = { item_id: data.id, item_text: data.nome };
        dropdownListTemp.push(item);
        papelTemp.push(item);

        this.tela.papel = papelTemp;
        this.dropdownList = dropdownListTemp;

        let itemPapel = { id: data.id, label: data.nome };

        let result = this._dadosComplementares.combotipoDocumento.find(tipoDocumento => tipoDocumento.id === this.tela.tipoDocumento);
        result.subList.push(itemPapel)

        this._dadosComplementares.comboContratoPapel.push(itemPapel);

    }

    incluirTipoDocumento() {
        const modalRef = this.modalService.open(
            this.novoTipoDocumentoComponentForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        }
        );

        //let tipoDocumentoTemp = this.tela.tipoDocumento;
        let dropdownListTemp = this.tipoDocumentoList;
        //this.tela.tipoDocumento = null;
        this.tipoDocumentoList = []

        modalRef.result.then((result) => {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }
                this.novoTipoDocumentoIncluido(result, dropdownListTemp);
            } else {
                // this.tela.tipoDocumento = tipoDocumentoTemp;
                this.tipoDocumentoList = dropdownListTemp;
            }
        }).catch((result) => {
            console.log(result);
        });
    }

    private novoTipoDocumentoIncluido(data: any, dropdownListTemp: any) {
        let tipoDocumento = data.data.tipoDocumento;
        let item = { item_id: tipoDocumento.id, item_text: tipoDocumento.nome };
        dropdownListTemp.push(item);

        this.tela.tipoDocumento = tipoDocumento.id;
        this.tipoDocumentoList = dropdownListTemp;

        let itemTipoDocumento = { id: tipoDocumento.id, label: tipoDocumento.nome, subList: [] };
        this._dadosComplementares.combotipoDocumento.push(itemTipoDocumento);

        this.tipoDocumentoChange();
    }

    perfilUsuarioAdmin(){
        let result = this.shared.perfilUsuarioAdmin();
        return result;
    }

}