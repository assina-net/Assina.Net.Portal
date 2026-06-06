import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { IDadosLista, PadraoNovoComponent } from '../../../../padrao/novo/padrao-novo.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PapelContratoEnum } from 'app/model/enum/papelContratoEnum';
import { TipoPessoaEnum } from 'app/model/enum/tipoPessoaEnum';
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { ContratoService } from 'app/services/cadastro/cadastro/contrato.service';

@Component({
    selector: 'app-contrato-parte-modal',
    templateUrl: './contrato-parte-modal.component.html',
    styleUrls: ['./contrato-parte-modal.component.scss']
})
export class ContratoParteModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;
    @Input() instanceList: any;
    @Input() titulo;

    parte: any = {};
    partes: any[] = [];
    message: IAlert;
    cpfCnpjAnterior: string;
    protected shared: SharedService;
    protected errorHandler: ErrorHandlerService;


    contratoParteContatoForm = ContratoParteModalComponent;
    contatos: IDadosLista = { listagem: [], dirty: false };
    titulosPartesContato = ['Ação', 'Nome', 'CPF', 'E-mail', 'Assinaturas'];


    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    tipoPessoaList = [];
    _dadosComplementares: any;

    constructor(private utilService: UtilService,
        private contratoService: ContratoService,
        private dialog: DialogService) {
        const injector = AppInjector.getInjector();
        this.shared = injector.get(SharedService);
        this.errorHandler = injector.get(ErrorHandlerService);
    }

    ngOnInit() {

        let opcoesTipoPessoa = this.utilService.enumToKeyValue(TipoPessoaEnum);
        opcoesTipoPessoa.forEach(opcao => {
            this.tipoPessoaList.push({ item_id: opcao.value, item_text: opcao.label })
        });

        if (this.instance) {
            this.cpfCnpjAnterior = this.instance.cpfCnpj;
            this.parte = this.instance;
            if (this.parte.contatos != undefined) {
                let listagem = this.parte.contatos.slice();
                this.contatos = { listagem: listagem, dirty: false };
            }

            if (this.parte.papel != undefined) {
                this.SelecionaPapeis(this.parte.papel);
            }

        } else {
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

    }

    SelecionaPapeis(papel: any) {
        papel.forEach(value => {
            let pesquisa = this._dadosComplementares.comboContratoPapel.filter(p => p.id == value.papel.id);
            if (pesquisa.length > 0) {
                let item = { item_id: value.papel.id, item_text: value.papel.nome };
                this.selectedItems.push(item);
            }
        })
    }

    PreencheDadosPessoa(pessoa: any) {
        if (pessoa == null) {
            return;
        }
        this.parte.nomeRazaoSocial = pessoa.nomeRazaoSocial;
        this.parte.email = pessoa.email;
        let lstCelular = [{ numero: "" }];
        if (pessoa.pessoaTelefone != null) {
            let telefoneComTipo = pessoa.pessoaTelefone.filter(t => t.tipoTelefone != null);
            lstCelular = telefoneComTipo.filter(t => t.tipoTelefone.identificacao == "CELULAR");
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
            let listagem = pessoa.pessoasFisica.slice();
            let listagem2 = [];

            if (this.adicionarSomenteUsuario()) {
                let listagemFiltro = listagem.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                if (listagemFiltro.length >= 1) {
                    listagem = listagemFiltro;
                }
            }

            listagem.forEach(item => {
                let listaPapel = [];

                item.papel.forEach(pap => {
                    let itemPapel = { id: "", papel: pap.papel }
                    listaPapel.push(itemPapel);
                });

                if (item.pessoaFisica.pessoaTelefone != null) {
                    let telefoneComTipo = pessoa.pessoaTelefone.filter(t => t.tipoTelefone != null);
                    lstCelular = telefoneComTipo.filter(t => t.tipoTelefone.identificacao == "CELULAR");
                } else {
                    lstCelular = [{ numero: "" }];
                }

                let celular = "";
                if (lstCelular.length > 0)
                    celular = lstCelular[0].numero;

                let itemContato = {
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

                listagem2.push(itemContato);

            })

            this.contatos = { listagem: listagem2, dirty: false };
            this.parte.contatos = this.contatos.listagem
        }
    }

    alterouCpfCNPJ() {
        this.partes.length = 0;
        if (this._dadosComplementares['comboPreRequisito']) {
            this._dadosComplementares['comboPreRequisito'].forEach(value => {
                if (value.tipoPessoa == 'FISICA') {
                    if (this.parte.cpfCnpj != value.cpfCnpj) { //&& this.parte.duplicatas == value.duplicatas) {
                        if (!this.partes.includes(value))
                            this.partes.push(value);
                    }
                } else {
                    value.contatos.forEach(contato => {
                        if (this.parte.cpfCnpj != contato.cpfCnpj) { // && this.parte.duplicatas == contato.duplicatas) {
                            if (!this.partes.includes(contato))
                                this.partes.push(contato);
                        }
                    })
                }
            });
        }

        if (this.parte.cpfCnpj != null && this.parte.cpfCnpj != this.cpfCnpjAnterior) {

            let ContratoParteRequest = {
                contratoParte: this.parte,
                usuario: this.shared.usuario,
                clienteSelecionado: this.shared.clienteSelecionado.cliente.id
            }

            this.contratoService.getDadosPessoa(ContratoParteRequest).subscribe((responseApi: ResponseApi) => {
                this.PreencheDadosPessoa(responseApi);
            }, err => {
                this.errorHandler.handle(err);
            });
        }

    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    get contratoParteContatoModal() {
        return this.contatos;
    }

    get dadosComplementares() {
        let dadosComplementares = {
            comboPreRequisito: this.partes,
            comboContratoPapel: this._dadosComplementares.comboContratoPapel,
            dropdownList: this.dropdownList
        }
        return dadosComplementares;
    }

    set dadosComplementares(dadosComplementares: any) {

        this._dadosComplementares = dadosComplementares;

        if (dadosComplementares.comboContratoPapel != undefined) {
            dadosComplementares.comboContratoPapel.forEach(opcao => {
                this.dropdownList.push({ item_id: opcao.id, item_text: opcao.label })
            });
        }

        //passa para a parte fisica da pessoa juridica
        if (dadosComplementares.dropdownList != undefined) {
            this.dropdownList = dadosComplementares.dropdownList
        }

        this.alterouCpfCNPJ();
    }

    adicionouContratoContatoParte() {
        this.parte.contatos = this.contatos.listagem;

    }


    antesSalvarEvent() {

        let lstPapel = [];

        this.selectedItems.forEach(papel => {
            let achou = false;
            if (this.parte.papel != undefined) {
                this.parte.papel.forEach(value => {
                    if (papel.item_id == value.papel.id) {
                        lstPapel.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                this._dadosComplementares.comboContratoPapel.forEach(value => {
                    if (papel.item_id == value.id) {
                        lstPapel.push({ id: "", papel: { id: value.id, nome: value.label, descricao: value.label } });
                        return;
                    }
                });
            }
        })

        this.parte.papel = lstPapel;
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }

    classLowerCase() {
        return this.shared.classLowerCase;
    }

    adicionarSomenteUsuario() {
        if (this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["SOMENTE_INCLUIR_USUARIO_NO_CONTRATO"])) {
            return true;
        } else {
            return false;
        }
    }


    desabilitarCampos() {
        if (this.parte.contrato != undefined && this.parte.contrato != null &&
            this.parte.contrato.statusContrato != undefined && this.parte.contrato.statusContrato != null) {
            return this.parte.contrato.statusContrato != 'NAOLIBERADOASSINTAURA'
        } else {
            return false;
        }
    }


    existeContrato() {
        if (this.parte.contrato != undefined && this.parte.contrato != null) {
            return true
        } else {
            return false;
        }
    }
}
