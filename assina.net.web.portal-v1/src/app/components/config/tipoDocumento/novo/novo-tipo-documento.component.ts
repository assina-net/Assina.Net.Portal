import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { TipoDocumentoNovoPapelModalComponent } from '../modal/novoPapel/tipoDocumento-novo-papel-modal.component';
import { TipoDocumentoPapelModalComponent } from '../modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component';

import { TipoDocumentoService } from 'app/services/config/tipoDocumento/tipoDocumento.service';
import { UtilService } from 'app/services/util/util.service';
import { LOGGER } from 'app/services/util/logger.service';
import { ResponseApi } from 'app/model/util/response-api';
import { PdfService } from '../../../../services/util/pdf.service';
import { ImageCroppedEvent } from "ngx-image-cropper";

@Component({
    selector: 'app-novo-tipo-documento',
    templateUrl: './novo-tipo-documento.component.html',
    styleUrls: ['./novo-tipo-documento.component.scss']
})
export class NovoTipoDocumentoComponent extends PadraoNovoComponent {

    @ViewChild('form', { static: true }) form: NgForm;


    partes: IDadosLista = { listagem: [], dirty: false };
    observadores: IDadosLista = { listagem: [], dirty: false };

    papeis: IDadosLista = { listagem: [], dirty: false };
    titulosPapeis = ['Ação', 'Papel', 'Token', 'Certificado'];

    tipoDocumentoPapelForm = TipoDocumentoPapelModalComponent

    papelObservador = { id: "" };

    listCombos = [];
    listPartes = [];
    tipoClienteList = [];
    tipoClienteSelecionandos = [];

    papelList = [];
    papelListCadastroParte = [];
    papelSelecionandos = [];
    salvaPapelSelecionados = [];
    papelPosicaoId: any;

    dropdownSettings = {};

    tipoDocumentoNovoPapelModalComponent = TipoDocumentoNovoPapelModalComponent;

    posicaoAtual = { crooper: { x1: 0, x2: 80, y1: 0, y2: 80 }, width: 0, height: 0 };
    contador: number = 0;
    imgBase64: any;
    imgList: any;
    pdfModelo: any;
    fileContent: string = "";
    data: any;
    file: any;
    url = null;
    content = null;
    dados: IDadosLista;
    isNextPage: boolean;
    isPreviousPage: boolean;
    isLastPage: boolean = false;
    isAllPage: boolean = false;
    isLastPageEnabled: boolean = false;
    isAllPageEnabled: boolean = false;

    listagem: any[];
    nomeCampo: string = "";
    paginaAtual: number = 1;
    cols = ["#", "Tag", "Descrição", "Página"];
    colsPosicao = ["#", "Papel", "X", "Y", "Width", "Height", "Página"];
    colspan: number = this.cols.length;
    public posicao: any;

    constructor(route: ActivatedRoute,
        private tipoDocumentoService: TipoDocumentoService,
        private modalService: NgbModal,
        private pdfService: PdfService) {
        super(route);
        this.titulo = "Novo Tipo Documento";
        this.navegacao = " > Config > Tipo Documento > Novo";
        this.rota = "/config/tipoDocumento";
        //this.entidade = { id: "", status : "ATIVO", cliente: { id: this.shared.clienteSelecionado.cliente.id } };

        //Para carregar os combos
        this.entidade = null; //[]; tem que ser null para o getNew funcionar
        this.httpService = this.tipoDocumentoService;

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            item_token: 'item_token',
            item_certificate: 'item_certificate',
            itemsShowLimit: 10,
            allowSearchFilter: true,
            searchPlaceholderText: 'Procurar',
            enableCheckAll: false

        };

    }


    get podeVoltar() {
        return this.consultando || (!this.editando && Boolean(this.form.pristine));
    }

    get TipoDocumento() {

        if (this.entidade == null) {
            return { nome: "", identificacao: "" };
        }

        return this.entidade;
    }

    set TipoDocumento(data) {
        this.entidade = data;
       
    }

    afterRetrieveData() {

        this.listCombos = this.entidade.listCombos;
        this.listPartes = this.entidade.partes;


        // coloca somente o tipoDocumento para Post
        this.entidade = this.entidade.tipoDocumento;
        if ( this.entidade.assina == null )
            this.entidade.assina = false;
        if ( this.entidade.validacaoOnLine == null )
            this.entidade.validacaoOnLine = false;
        if ( this.entidade.qrcode == null )
            this.entidade.qrcode = false;

        this.posicao = {};

        if (this.entidade.cliente.id != this.shared.clienteSelecionado.cliente.id) {
            this.consultando = true;
        }

        if (!this.entidade.posicoesAssinatura) {
            this.entidade.posicoesAssinatura = [];
        }

        //carrega combos enviados da base de dados
        this.carregaCombosDaBaseDados();

        this.contratoPartesInit(this.listPartes);
        this.contratoPapeisInit(this.entidade.papeis)

        //seleciona os itens que já estao no objeto
        this.InicializaItensSelecionados();

    }

    private InicializaItensSelecionados() {
        this.tipoClienteSelecionandos = [];
        if (this.entidade.tipoDocumentoTipoClientes != null) {
            this.entidade.tipoDocumentoTipoClientes.forEach(value => {
                let item = { item_id: value.segmento.id, item_text: value.segmento.nome };
                this.tipoClienteSelecionandos.push(item);
            });
        }

        this.papelSelecionandos = [];
        if (this.entidade.papeis != null) {
            this.entidade.papeis.forEach(value => {
                let item = { item_id: value.papel.id, item_text: value.papel.nome, item_token: value.token, item_certificate: value.certificate };
                this.papelSelecionandos.push(item);
            });
        }

        this.salvaPapelSelecionados = this.papelSelecionandos;
    }

    private carregaCombosDaBaseDados() {
        this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);
        this.papelObservador = this.listCombos['Papel'].find(papel => papel.value == 'OBSERVADOR');
        this.papelListCadastroParte = this.listCombos['Papel'].filter(papel => papel.value != 'OBSERVADOR');

        //this.papelListCadastroParte = this.papelListCadastroParte.filter(papel1 =>
        //  !this.entidade.papeis.some(entPapel => entPapel.papel.id === papel1.id)
        //);

        this.papelList = this.utilService.preencheCombos(this.papelListCadastroParte);


    }

    beforeSave() {
        this.TrataListaTipoCliente();

        this.TrataListaTipoPapel();
    }

    private TrataListaTipoPapel() {
        let lstPapel = [];

        this.papelSelecionandos.forEach(papel => {
            let achou = false;
            if (this.entidade.papeis != undefined) {
                this.entidade.papeis.forEach(value => {
                    if (papel.item_id == value.papel.id || papel.item_id == value.id) {
                        lstPapel.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                this.listCombos['Papel'].forEach(value => {
                    if (papel.item_id == value.value || papel.item_id == value.id) {
                        lstPapel.push({ id: "", papel: { id: value.id, identificacao: value.value, nome: value.label, token: value.token, certificate: value.certificate } });
                        return;
                    }
                });
            }
        });
        this.entidade.papeis = lstPapel;
    }

    private TrataListaTipoCliente() {
        let lstTipoCliente = [];

        this.tipoClienteSelecionandos.forEach(tipoCliente => {
            let achou = false;
            if (this.entidade.tipoDocumentoTipoClientes != undefined) {
                this.entidade.tipoDocumentoTipoClientes.forEach(value => {
                    if (tipoCliente.item_id == value.segmento.id && value.id != "") {
                        lstTipoCliente.push(value);
                        achou = true;
                        return;
                    }
                });
            }
            if (!achou) {
                this.listCombos['TipoCliente'].forEach(value => {
                    if (tipoCliente.item_id == value.id) {
                        lstTipoCliente.push({
                            id: "",
                            segmento: { id: value.id, identificacao: value.value, nome: value.label }
                        });
                        return;
                    }
                });
            }
        });

        this.entidade.tipoDocumentoTipoClientes = lstTipoCliente;
    }

    cadastrarNovoPapel() {
        const modalRef = this.modalService.open(
            this.tipoDocumentoNovoPapelModalComponent, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        }
        );

        //se nao zerar a lista antes nao atualiza o objeto na tela
        let novoPapel = { id: "", nome: "", identificacao: "" }
        let papelListTemp = this.papelList;
        this.papelList = [];
        let papelSelecionandosTemp = this.papelSelecionandos
        this.papelSelecionandos = [];

        modalRef.componentInstance.instance = novoPapel;
        modalRef.componentInstance.listaOriginal = papelListTemp;
        modalRef.result.then((result) => {
            if (result && result != 'close') {
                if (result == "incluido") {
                    this.incluiNovoPapel(papelListTemp, papelSelecionandosTemp, novoPapel);
                } else {
                    this.papelList = papelListTemp;
                }
            }
        }).catch((result) => {
            console.log(result);
        });

    }

    onItemSelect(value: any) {
        this.papelSelecionandos = this.salvaPapelSelecionados;
        this.papelSelecionandos.push({ 'item_id': value.item_id, 'item_text': value.item_text, 'item_token': false, 'item_certificate': false });
        this.salvaPapelSelecionados = this.papelSelecionandos;
    }

    onItemDeSelect(value: any) {
        this.papelSelecionandos = this.salvaPapelSelecionados;
        this.papelSelecionandos.forEach((element, index) => {
            if (element.item_id == value.item_id) this.papelSelecionandos.splice(index, 1);
        });
        this.salvaPapelSelecionados = this.papelSelecionandos;
    }

    private incluiNovoPapel(papelListTemp, papelSelecionandosTemp, novoPapel) {
        let bExistente: boolean = false;
        this.listCombos['Papel'].forEach(value => {
            if (novoPapel.identificacao.toUpperCase() == value.value.toUpperCase()) {
                novoPapel = { id: value.id, identificacao: value.value, nome: value.label, token: value.token, certificate: value.certificate };
                bExistente = true;
                return;
            }
        });


        //inclui na listagem que veio do banco para poder salvar
        if (!bExistente) {
            this.listCombos['Papel'].push({ id: novoPapel.id, value: novoPapel.identificacao, label: novoPapel.nome, token: novoPapel.token, certificate: novoPapel.certificate });

            //incluina listagem de seleção
            let item = { item_id: novoPapel.identificacao, item_text: novoPapel.nome, item_token: novoPapel.token, item_certificate: novoPapel.certificate };
            papelListTemp.push(item);
            papelListTemp.sort((a, b) => (a.item_text.toUpperCase() < b.item_text.toUpperCase() ? -1 : 1));
        }
        this.papelList = papelListTemp;

        //ja seleciona o item
        let itemSelecionado = { item_id: novoPapel.identificacao, item_text: novoPapel.nome, item_token: novoPapel.item_token, item_certificate: novoPapel.item_certificate };
        papelSelecionandosTemp.push(itemSelecionado);
        this.papelSelecionandos = papelSelecionandosTemp;
    }

    adicionaPosicao() {
        this.posicao.papel = this.entidade.papeis.filter(p => p.id === this.papelPosicaoId)[0];
        
        this.entidade.posicoesAssinatura.push(this.posicao);
        this.posicao = {};
    }

    excluirPosicao(item) {
        const index = this.entidade.posicoesAssinatura.indexOf(item, 0);
        if (index != -1) this.entidade.posicoesAssinatura.splice(index, 1);
    }

    get contratoParteModal() {
        return this.partes;
    }

    get contratoObservadoresModal() {
        return this.observadores;
    }

    setInitialPosition() {
        this.posicaoAtual.crooper = { x1: 0, x2: 80, y1: 0, y2: 80 };
    }


    adicionouContratoParte() {
        this.listPartes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.listPartes = this.entidade.contrato.partes.concat(this.observadores.listagem);
    }

    adicionouObservador() {

        this.observadores.listagem.forEach(observador => {
            if (observador.papel.length == 0) {
                observador.papel.push({ id: "", papel: this.papelObservador });
            }
        })
        this.listPartes = JSON.parse(JSON.stringify(this.partes.listagem));
        this.listPartes = this.listPartes.concat(this.observadores.listagem);
    }



    contratoPapeisInit(listagem) {

        this.papeis = { listagem: [], dirty: false };
        console.log(this.papeis);

        if (listagem != null) {

            listagem.forEach(item => {
                if ( item.token == null )
                    item.token = false;
                if ( item.certificate == null )
                    item.certificate = false;
                this.papeis.listagem.push(item);
            });

        }
    }


    contratoPartesInit(listagem) {

        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };


        if (listagem != null) {

            listagem.forEach(item => {

                if (item.papel.length == 0 && item.contatos.length == 0) {
                    this.partes.listagem.push(item);
                } else {
                    for (var ipapel in item.papel) {
                        let papel = item.papel[ipapel];
                        if (this.papelObservador && papel.papel.id == this.papelObservador.id) {
                            this.observadores.listagem.push(item);
                        } else {
                            this.partes.listagem.push(item);
                        }
                        //pode verificar somente o primeiro
                        break;
                    }
                    ;
                }

                for (var icontato in item.contatos) {
                    let contato = item.contatos[icontato];
                    if (contato.papel.length == 0) {
                        this.partes.listagem.push(item);
                    } else {
                        for (var ipapel in contato.papel) {
                            let papel = contato.papel[ipapel];
                            if (papel.papel.id == this.papelObservador.id) {
                                this.observadores.listagem.push(item);
                            } else {
                                this.partes.listagem.push(item);
                            }
                            //pode verificar somente o primeiro
                            break;
                        }
                        ;
                    }
                    //pode verificar somente o primeiro
                    break;
                }
                ;
            });

        }
    }

    salvar(validar?: boolean) {
        this.message = null;
        if (validar == undefined || validar == true) {
            this.checkCustomErrors();
            if (this.form.invalid) {
                UtilService.setAsTouched(this.form.form);
                this.showMessage({
                    type: 'danger',
                    text: "Existem informações inválidas ou nulas. Favor verificar!"
                });
                return;
            }
            if (!this.validateForm()) {
                return;
            }
        }
        this.loading.show();
        this.beforeSave();

        this.entidade.papeis = this.papeis.listagem;

        let tipoDocumentoRequest = {
            tipoDocumento: this.entidade,
            cliente: this.shared.clienteSelecionado.cliente,
            partes: this.listPartes
        }
        this.httpService.saveUpdate(tipoDocumentoRequest).subscribe((responseApi: ResponseApi) => {
            if (this.afterSave(responseApi)) {
                LOGGER.log('saveUpdate', responseApi);
            } else {
                this.loading.hide();
                this.cancelar();
                this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} salvo com sucesso!`);
            }
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    selecionaAssinatura(item) {
        this.posicaoAtual.crooper.x1 = item.x;
        this.posicaoAtual.crooper.y1 = item.y;
        this.posicaoAtual.height = item.height;
        this.posicaoAtual.width = item.width;
    }

    papelListCadastroParteDocumento() {

        let idSelecionados = this.papelSelecionandos.map(item => item.item_id);

        return this.papelListCadastroParte.filter(p => idSelecionados.includes(p.id));
    }

    onFileUploaded(event: any) {
        if (this.imgBase64) {
            this.imgBase64 = undefined;
        }
        this.getPdfArrayByte(event.target.files[0]);
    }

    getPdfArrayByte(file) {
        this.loading.show();
        this.utilService
            .getFile(file)
            .then((res: any) => {
                this.convertPdfToImg(res.base64StringFile);
                this.pdfModelo = res.bytes;
            })
            .catch((err) => {
                this.loading.hide();
                this.errorHandler.handle(err);
            });
    }

    convertPdfToImg(pdf) {
        this.pdfService
            .convertPdfToImage(pdf)
            .then((img: any) => {
                this.imgList = this.criaListaImagens(img.data);
                this.contador = -1;
                this.isLastPage = false;
                this.isAllPage = false;
                this.isAllPageEnabled = true;
                this.isLastPageEnabled = true;


                this.nextImage();
                this.loading.hide();
            })
            .catch((err) => {
                this.errorHandler.handle(err);
            });
    }

    criaListaImagens(lista = []) {
        return lista.map((img) => "data:@file/png;base64,".concat(img));
    }

    imageCropped(event: ImageCroppedEvent) {
        this.posicao.x = event.cropperPosition.x1;
        this.posicao.y = event.cropperPosition.y1;
        this.posicao.width = event.width;
        this.posicao.height = event.height;
        if (this.isLastPage)
            this.posicao.pagina = -1
        else if (this.isAllPage)
            this.posicao.pagina = 0
        else
            this.posicao.pagina = this.contador + 1;
    }

    nextImage() {
        this.contador++;
        this.imgBase64 = this.imgList[this.contador];
        this.isNextPage = this.contador + 1 < this.imgList.length - 1;
        this.isPreviousPage = this.contador - 1 >= 0;
        this.posicao.pagina = this.contador;
    }

    previousImage() {
        this.contador--;
        this.imgBase64 = this.imgList[this.contador];
        this.isNextPage = this.contador < this.imgList.length - 1;
        this.isPreviousPage = this.contador - 1 >= 0;
        this.posicao.pagina = this.contador;
    }

    lastPage() {
        this.isLastPage = !this.isLastPage
        this.contador = this.imgList.length - 1;

        if (this.isLastPage) {
            this.imgBase64 = this.imgList[this.contador];
            this.isNextPage = false;
            this.isPreviousPage = false;
            this.isAllPageEnabled = false;
        } else {
            this.contador = this.imgList.length;
            this.isAllPageEnabled = true;
            this.previousImage();
        }
    }

    allPage() {
        this.isAllPage = !this.isAllPage
        this.contador = this.imgList.length - 1;

        if (this.isAllPage) {
            this.imgBase64 = this.imgList[0];
            this.isNextPage = false;
            this.isPreviousPage = false;
            this.isLastPageEnabled = false;
        } else {
            this.contador = -1;
            this.nextImage();
            this.isLastPageEnabled = true;
        }
    }

    get tipoDocumentoPapeisModal() {
        return this.papeis;
    }

    get dadosComplementaresPapel() {
        let dadosComplementares = {
            comboPapeis: this.papelList
        };
        return dadosComplementares;
    }

    adicionouPapel() {
        this.entidade.papeis = this.papeis.listagem;
    }



}
