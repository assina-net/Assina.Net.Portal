import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'app/model/util/page';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { ContratoService } from '../../../../services/cadastro/cadastro/contrato.service';
//import { UtilService } from '../../../../services/util/util.service';

import { ContratoDocumentoModalComponent } from '../modal/contrato-documento/contrato-documento-modal.component';
import { ContratoDocumentoVisualizarModalComponent } from '../modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';

import { ResponseApi } from '../../../../model/util/response-api';

@Component({
    selector: 'app-novo-contrato',
    templateUrl: './novo-contrato.component.html',
    styleUrls: ['./novo-contrato.component.css']
})
export class NovoContratoComponent extends PadraoNovoComponent {

    @ViewChild('form', { static: true }) form: NgForm;

    partes: IDadosLista = { listagem: [], dirty: false };
    observadores: IDadosLista = { listagem: [], dirty: false };
    documentos: IDadosLista = { listagem: [], dirty: false };
    tipoDocumentoList = [];
    contratoPapelList = [];
    papelObservador = { id: "" };

    titulosPartes = ['Ação', 'Cpf/Cnpj', 'Nome/Razão Social', 'Assinaturas'];
    titulosDocumentos = ['Ação', 'Arquivo', 'Tipo Documento', 'Status Documento', 'Assinaturas'];

    page: Page;
    filtro: any;
    pages: Array<number>;
    arquivoNome: string;

    //contratoParteForm = ContratoParteModalComponent;

    contratoDocumentoForm = ContratoDocumentoModalComponent;

    contratoDocumentoVisualizarForm = ContratoDocumentoVisualizarModalComponent;


    constructor(route: ActivatedRoute,
        private contratoService: ContratoService,
        //  private utilService: UtilService,
        private documentoService: DocumentoService) {
        super(route);

        this.titulo = "Cadastro de Contrato";
        this.navegacao = " > Cadastro > Contrato > Cadastro";
        this.rota = "/cadastro/contrato";
        this.formulario = "Contrato";

        //Para carregar os combos
        this.entidade = null;
        this.httpService = this.contratoService;
    }

    get ContratoRequest() {
        if (this.entidade == null) {
            return { contrato: { statusContrato: 'NAOLIBERADOASSINTAURA'  } };
        }
        return this.entidade;
    }

    set ContratoRequest(data) {
        this.entidade = data;
    }

    cancelar() {
        this.partes = { listagem: [], dirty: false };
        this.documentos = { listagem: [], dirty: false };
        super.cancelar();
    }

    get podeVoltar() {
        return this.consultando || (!this.editando && !this.partes.dirty && Boolean(this.form.pristine));
    }

    afterRetrieveData() {

        this.tipoDocumentoList = this.entidade.listCombos['TipoDocumento'];
        this.contratoPapelList = this.entidade.listCombos['ContratoPapel'];
        //reseta para nao ficar trafegando entre cliente e servidor
        this.entidade.listCombos = {};

        this.papelObservador = this.contratoPapelList.find(papel => papel.value == 'OBSERVADOR');
        this.contratoPapelList = this.contratoPapelList.filter(papel => papel.value != 'OBSERVADOR');


        if (this.entidade.contrato.id != null) {
            this.contratoPartesInit(this.entidade.contrato.partes);
            this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        } else {
            this.entidade.contrato.status = 'ATIVO';
            this.entidade.contrato.statusContrato = 'NAOLIBERADOASSINTAURA';
            this.entidade.contrato.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
            this.entidade.contrato.remetente = this.shared.usuario;
            this.entidade.contrato.documentos = [];
            this.partes = { listagem: [], dirty: false };            
            this.observadores = { listagem: [], dirty: false };
        }

        this.consultando = this.entidade.contrato.statusContrato != 'NAOLIBERADOASSINTAURA' && this.entidade.contrato.statusContrato != 'RECUSADO';


    }

    contratoPartesInit(listagem) {

        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };

        listagem.forEach(item => {

            for (var ipapel in item.papel) {
                let papel = item.papel[ipapel];
                if (this.papelObservador != undefined && papel.papel.id == this.papelObservador.id) {
                    this.observadores.listagem.push(item);
                } else {
                    this.partes.listagem.push(item);
                }
                //pode verificar somente o primeiro
                break;
            };


            for (var icontato in item.contatos) {
                let contato = item.contatos[icontato];

                for (var ipapel in contato.papel) {
                    let papel = contato.papel[ipapel];
                    if (this.papelObservador != undefined && papel.papel.id == this.papelObservador.id) {
                        this.observadores.listagem.push(item);
                    } else {
                        this.partes.listagem.push(item);
                    }
                    //pode verificar somente o primeiro
                    break;
                };
                //pode verificar somente o primeiro
                break;
            };
        });
    }

    adicionouContratoParte() {
        this.entidade.contrato.partes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.entidade.contrato.partes = this.entidade.contrato.partes.concat(this.observadores.listagem);
    }

    adicionouObservador() {
        this.observadores.listagem.forEach(observador => {
            if (observador.papel.length == 0) {
                observador.papel.push({ id: "", papel: this.papelObservador });
            }
        })
        this.entidade.contrato.partes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.entidade.contrato.partes = this.entidade.contrato.partes.concat(this.observadores.listagem);
    }

    contratoDocumentosInit(listagem) {
        this.documentos = { listagem: listagem, dirty: false };
    }

    adicionouContratoDocumento() {
        this.loading.show();


        for (let i = 0; i < this.documentos.listagem.length; i++) {
            let doc = this.documentos.listagem[i];
            //verifica se é tipo de documento novo
            let achou = false;
            if (doc.nomeDocumento != undefined) {
                if (this.entidade.contrato.documentos != null) {
                    for (let j = 0; j < this.entidade.contrato.documentos.length; j++) {
                        let docContrato = this.entidade.contrato.documentos[j];
                        if (doc.documento == docContrato.documento &&
                            doc.tipoDocumento.id == docContrato.tipoDocumento.id &&
                            doc.nomeDocumento == docContrato.nomeDocumento) {
                            achou = true;
                            break;
                        }
                    }
                }

                if (!achou ) {                                        
                    //busca partes padrao
                    Promise.race([
                        this.buscaPartePadrao(doc.tipoDocumento)
                    ]);
                    this.entidade.contrato.documentos.push(doc)
                }
            }
        };

        this.entidade.contrato.documentos = this.entidade.contrato.documentos.filter( el =>   this.documentos.listagem.includes( el ) );
        
        this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        this.loading.hide();

        // this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
    }


    get formDirty() {
        return this.form.dirty || this.partes.dirty || this.documentos.dirty;
    }

    get contratoParteModal() {
        return this.partes;
    }

    get contratoObservadoresModal() {
        return this.observadores;
    }

    get dadosComplementaresDocumento() {
        let dadosComplementares = {
            combotipoDocumento: this.tipoDocumentoList,
            comboContratoPapel: this.contratoPapelList
        };
        return dadosComplementares;
    }

    get contratoDocumentoModal() {
        return this.documentos;
    }

    buscaPartePadrao(tipoDocumento) {

        let partesPadraoRequest = {
            cliente: this.shared.clienteSelecionado.cliente,
            tipoDocumento: tipoDocumento
        };

        this.contratoService.partesPadrao(partesPadraoRequest).subscribe((responseApi: any) => {

            let lista = responseApi;
            /*
            if (this.adicionarSomenteUsuario()) {
                let listagemFiltro = lista.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                if (listagemFiltro.length >= 1) {
                    lista = listagemFiltro;
                }
            }*/

            for (let i = 0; i < lista.length; i++) {
                let parte = lista[i];
                this.limpaIdPartePadrao(parte);
                if (parte.contatos != null) {

                    if (this.adicionarSomenteUsuario() && parte.cpfCnpj == this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                        let listagemFiltro = parte.contatos.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                        if (listagemFiltro.length >= 1) {
                            parte.contatos = listagemFiltro;
                        }
                    }

                    for (let j = 0; j < parte.contatos.length; j++) {
                        let contato = parte.contatos[j];
                        this.limpaIdPartePadrao(contato)
                    };
                }
            };

            if (this.entidade.contrato.partes != null)
                lista.forEach(parte => {
                    //procura parte ja no contrato
                    let parteExistente = this.entidade.contrato.partes.find(x => x.cpfCnpj == parte.cpfCnpj);
                    if (parteExistente == null)
                        this.entidade.contrato.partes.push(parte);
                    else {
                        parte.papel.forEach(papel => {
                            let papelExistente = parteExistente.papel.find(x => x.papel.id == papel.papel.id);
                            if (papelExistente == null)
                                parteExistente.papel.push(papel);
                        });

                        if (parte.contatos != null) {
                            parte.contatos.forEach(parte => {
                                //procura parte ja no contrato
                                let contatoExistente = parteExistente.contatos.find(x => x.cpfCnpj == parte.cpfCnpj);
                                if (contatoExistente == null)
                                    parteExistente.contatos.push(parte);
                                else {
                                    parte.papel.forEach(papel => {
                                        let papelExistente = contatoExistente.papel.find(x => x.papel.id == papel.papel.id);
                                        if (papelExistente == null)
                                            contatoExistente.papel.push(papel);
                                    });
                                }
                            });
                        }
                    }
                });
            else
                this.entidade.contrato.partes = responseApi;

            this.contratoPartesInit(this.entidade.contrato.partes);


        }, err => {
            this.errorHandler.handle(err);
        });
    }

    limpaIdPartePadrao(parte) {
        parte.id = null;
        parte.statusAssinatura = 'NAOLIBERADO';
        parte.status = 'ATIVO';
        parte.duplicatas = false;
        parte.papel.forEach(papel => {
            papel.id = null;
        });
    }

    adicionarSomenteUsuario() {
        if (this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["SOMENTE_INCLUIR_USUARIO_NO_CONTRATO"])) {
            return true;
        } else {
            return false;
        }
    }

    liberarAssinatura() {
        this.loading.show();
        this.entidade.contrato.usuarioSolicitacaoAssinatura = this.shared.usuario;
        this.contratoService.liberarAssinatura(this.entidade).subscribe((responseApi: ResponseApi) => {
            this.entidade = responseApi;
            this.loading.hide();
            if (this.entidade.contrato.validado) {
                this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} liberado para assinatura com sucesso!`);
                this.cancelar();
            } else {
                this.dialog.error(this.entidade.contrato.validacaoMensagem);
            }
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    contratoDownload() {
        this.documentoService.getDownload(this.entidade.contrato).subscribe((responseApi: any) => {
            let item = { anexo64: "", nomeArquivo: "" }
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            this.utilService.download(item);

            //let bytechars = atob(responseApi.arquivoByte);
            // let blob = new Blob([atob(responseApi.arquivoByte)], { type: "application/zip" });
            //this.utilService.downloadFile(blob, responseApi.arquivoNome);
        }, err => {
            this.errorHandler.handle(err);
        });
    }

}