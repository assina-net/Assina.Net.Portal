import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'app/model/util/page';
//import { UtilService } from 'app/services/util/util.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IDadosLista, PadraoNovoComponent } from 'app/components/padrao/novo/padrao-novo.component';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { VisualizarModalComponent } from 'app/components/assinar/padrao/modal/visualizar/visualizar-modal.component';
import { AssinarModalComponent } from 'app/components/assinar/padrao/modal/assinar/assinar-modal.component';
import { CancelarModalComponent } from 'app/components/assinar/padrao/modal/cancelar/cancelar-modal.component';
import { RecusarModalComponent } from 'app/components/assinar/padrao/modal/recusar/recusar-modal.component';
import { StatusEnum } from 'app/model/enum/statusEnum';
import * as LZString from 'lz-string';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
    selector: 'app-detalhe-assina',
    templateUrl: '../../padrao/detalhe/detalhe-assina.component.html',
    styleUrls: ['../../padrao/detalhe/detalhe-assina.component.css']
})
export class DetalheAssinaComponent extends PadraoNovoComponent {

    @ViewChild('form', { static: true }) form: NgForm;

    partes: IDadosLista = { listagem: [], dirty: false };
    observadores: IDadosLista = { listagem: [], dirty: false };
    documentos: IDadosLista = { listagem: [], dirty: false };
    parte: any;
    logListagem = [];

    emailsParaAssinatura = [];
    celularesParaAssinatura = [];

    titulosPartes = ['Ação', 'Nome/Razão Social', 'Assinaturas'];
    titulosDocumentos = ['Ação', 'Arquivo', 'Tipo', 'Status'];
    mensagemCancelamento: string;
    mensagemRecusar: string;

    podeCancelar: boolean;

    page: Page;
    filtro: any;
    pages: Array<number>;
    arquivoNome: string;
    _somenteUmDocumento: boolean;
    public documentoPDF: any = {};
    documentoPDFDescompactadoValues;
    byteArray: Uint8Array;
    blob: Blob;
    documento: any = {};

    contratoParte: any;

    alterouDadosParte: boolean = false;


    visualizarModalForm = VisualizarModalComponent;

    assinarModalForm = AssinarModalComponent;
    cancelarModalForm = CancelarModalComponent;
    recusarModalForm = RecusarModalComponent;

    protected errorHandler: ErrorHandlerService;
    protected loading: NgxSpinnerService;

    constructor(route: ActivatedRoute,
        private modalService: NgbModal,
        //private utilService: UtilService,
        private documentoService: DocumentoService) {
        super(route);
        this.httpService = documentoService;

        this.podeCancelar = this.shared.perfilUsuarioAdmin();


        const injector = AppInjector.getInjector();
        this.loading = injector.get(NgxSpinnerService);
        this.errorHandler = injector.get(ErrorHandlerService);
    }

    afterRetrieveData() {
        this.contratoPartesInit(this.entidade.contrato.partes);
        this.contratoDocumentosInit(this.entidade.contrato.documentos);
        this.contratoLogInit(this.entidade.contratoLog)
    }

    get ContratoRequest() {
        return this.entidade;
    }

    set ContratoRequest(data) {
        this.entidade = data;
    }

    get contratoDocumentoModal() {
        return this.documentos;
    }

    get somenteUmDocumento() {
        return this._somenteUmDocumento;
    }





    get contratoObservadoresModal() {
        return this.observadores;
    }

    TemObservadores() {
        return this.observadores.listagem.length > 0;
    }


    contratoLogInit(listagem) {
        this.logListagem = listagem;
        this.entidade.contratoLog = [];
    }

    contratoPartesInit(listagem) {

        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };

        for (var iItem in listagem) {
            let item = listagem[iItem];

            if (item.tipoPessoa == "FISICA") {
                if (this.observador(item)) {
                    this.observadores.listagem.push(item);
                } else {
                    this.partes.listagem.push(item);
                }
            } else {
                for (var icontato in item.contatos) {
                    let contato = item.contatos[icontato];

                    if (this.observador(contato)) {
                        this.observadores.listagem.push(item);
                    } else {
                        this.partes.listagem.push(item);
                    }
                    //pode verificar somente o primeiro papel
                    break;
                };
            }
        };
    }

    contratoDocumentosInit(listagem) {
        this.documentos = { listagem: listagem, dirty: false };
        this.entidade.contratoDocumento = this.documentos.listagem;
        if (this.documentos.listagem == null) {
            this._somenteUmDocumento = false;
        } else {
            this._somenteUmDocumento = this.documentos.listagem.length == 1;
            if (this._somenteUmDocumento) {
                let documento = { documentoPDF: this.documentos.listagem[0].documento }
                this.pdfInit(documento);
                //zera o pdf para nao trafegar a toa
                this.documentos.listagem[0].documento = null;
                this.documento = this.documentos.listagem[0];
            }
        }
    }

    pdfInit(documento) {
        var documentoPDFDescompactado = LZString["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(char => char.charCodeAt(0)));
    }

    pdfInitByteArray(documento) {
        this.documentoPDFDescompactadoValues = LZString["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + this.documentoPDFDescompactadoValues;
        this.byteArray = new Uint8Array(atob(this.documentoPDFDescompactadoValues).split('').map(char => char.charCodeAt(0)));
    }

    buscaPDF() {
        this.documentoService.getDocumentoPDF(this.documento).subscribe((responseApi: ResponseApi) => {
            this.pdfInit(responseApi)
        }, err => {
            this.errorHandler.handle(err);
        });
        return null;
    }

    get formDirty() {
        return this.form.dirty || this.documentos.dirty;
    }


    montaListaEmailCelular() {
        this.emailsParaAssinatura = [];
        this.celularesParaAssinatura = [];
        this.emailsParaAssinatura.push(this.shared.usuario.pessoa.email);
        //if (this.shared.usuario.pessoa.celular != "" && this.shared.usuario.pessoa.celular != null)
        // this.celularesParaAssinatura.push(this.shared.usuario.pessoa.celular);
        this.partes.listagem.forEach(parte => {
            let achouParte: boolean = false;
            if (parte.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO') {
                if (parte.email != undefined && parte.email != "" && parte.email != null && !this.emailsParaAssinatura.includes(parte.email))
                    this.emailsParaAssinatura.push(parte.email);

                if ( parte.cpfCnpj != this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj )
                    if (parte.celular != undefined && parte.celular != "" && parte.celular != null && !this.celularesParaAssinatura.includes(parte.celular))
                        this.celularesParaAssinatura.push(parte.celular);

                achouParte = true;
                return;
            }
            if (!achouParte && parte.cpfCnpj != this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                parte.contatos.forEach(contato => {
                    if (contato.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO') {
                        if (contato.email != undefined && contato.email != "" && contato.celular != null && !this.emailsParaAssinatura.includes(contato.email))
                            this.emailsParaAssinatura.push(contato.email);

                        if (contato.celular != undefined && contato.celular != "" && contato.celular != null && !this.celularesParaAssinatura.includes(contato.celular))
                            this.celularesParaAssinatura.push(contato.celular);

                        return;
                    }
                })
            }
        });
    }


    verificaAssinadorAtivo() {
        this.documentoService.verificaAssinadorAtivo().subscribe((responseApi: string) => {
            this.dialog.success(responseApi);
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    exibirTodosDocumentos(){
        this.loading.show();
        this.documentoService.getDocumentosPDF(this.documentos.listagem).subscribe((responseApi: ResponseApi) => {
            this.pdfInitByteArray(responseApi);

            const modalRef = this.modalService.open(
                this.visualizarModalForm, {
                backdrop: 'static', centered: true, keyboard: false, size: 'xl'
            }
            );

            modalRef.componentInstance.byteArray = this.byteArray;
            modalRef.componentInstance.documentoPDFDescompactado = this.documentoPDFDescompactadoValues;
            modalRef.componentInstance.documentoPDF = this.documentoPDF;

            this.loading.hide();
        }, err => {
            this.loading.hide();
            this.errorHandler.handle(err);
        });
    }

    large: boolean = false;
    exibirAssinar() {

        this.montaListaEmailCelular();

        const modalRef = this.modalService.open(
            this.assinarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        }
        );

        var partesCNPJ: string[] = [];
        this.partes.listagem.forEach(parte => {
            if (parte.tipoPessoa == 'JURIDICA') {
                parte.contatos.forEach(contato => {
                    if (contato.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj) {
                        partesCNPJ.push(parte.cpfCnpj);
                    }
                })
            }
        })

        var contrato = {
            contrato: this.entidade.contrato,
            cnpjs: partesCNPJ,
            assinandoLote: false
        };

        var pessoa = Object.assign(JSON.parse(JSON.stringify(this.shared.usuario.pessoa)), contrato);

        modalRef.componentInstance.instance = pessoa;
        modalRef.componentInstance.emailsParaAssinatura = this.emailsParaAssinatura;
        modalRef.componentInstance.celularesParaAssinatura = this.celularesParaAssinatura;
        modalRef.componentInstance.documento = this.documento;
        modalRef.componentInstance.documentos = this.documentos.listagem;

        let breakValue: boolean;
        breakValue = false;

        let papel = [];

        for(let x=0;x<this.partes.listagem.length;x++){
            for(let y=0;y<this.partes.listagem[x].contatos.length;y++){
                if(this.partes.listagem[x].contatos[y].cpfCnpj == pessoa.cpfCnpj){
                    breakValue = true;
                    for(let z=0;z<this.partes.listagem[x].contatos[y].papel.length;z++){
                        papel.push(this.partes.listagem[x].contatos[y].papel[z]);
                    }
                }
                if(breakValue){
                    break;
                }
            }
            if(breakValue){
                break;
            }
        }

        if(papel.length == 0){
           let lstpapel= this.partes.listagem.filter( p => p.cpfCnpj == pessoa.cpfCnpj).map(p => p.papel);
           for(let a=0;a<lstpapel[0].length;a++){
            papel.push(lstpapel[0].at(a));
           }
        }



        modalRef.componentInstance.papel = papel;

        modalRef.result.then((result) => {
            if (result && result != 'close') {

                if (result == "assinado") {
                    this.ngOnInit();
                }

                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }



            }
        }).catch((result) => {
            console.log(result);
        });
    }



    contratoDownload(event: any) {
        event.target.disabled = true;
        this.loading.show();
        this.documentoService.getDownload(this.entidade.contrato).subscribe((responseApi: any) => {
            let item = { anexo64: "", nomeArquivo: "" }
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            this.utilService.download(item);
            event.target.disabled = false;
            this.loading.hide();
        }, err => {
            this.loading.hide();
            event.target.disabled = false; 
            this.errorHandler.handle(err);
        });
    }



    voltar() {
        this.router.navigate([this.rota], { skipLocationChange: true });
    }

    salvarContratoParte() {

    }

    adicionouContratoParte() {
        this.documentoService.salvarPartesAlteradas(this.partes.listagem).subscribe((responseApi: any) => {
            this.dialog.success(responseApi);
        }, err => {
            this.errorHandler.handle(err);
        });
    }


    exibirCancelar() {
        const modalRef = this.modalService.open(
            this.cancelarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        }
        );

        modalRef.componentInstance.instance = [this.entidade.contrato.id];
        modalRef.componentInstance.rota = this.rota;
        modalRef.componentInstance.mensagemCancelamento = this.mensagemCancelamento;

        modalRef.result.then((result) => {
            if (result && result != 'close') {

                if (result == "cancelado") {
                    this.ngOnInit();
                }

                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }

            }
        }).catch((result) => {
            console.log(result);
        });
    }

    exibirRecusar() {
        const modalRef = this.modalService.open(
            this.recusarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: null
        }
        );

        modalRef.componentInstance.instance = [this.entidade.contrato.id];
        modalRef.componentInstance.rota = this.rota;
        modalRef.componentInstance.mensagemRecusar = this.mensagemRecusar;

        modalRef.result.then((result) => {
            if (result && result != 'close') {

                if (result == "recusado") {
                    this.ngOnInit();
                }

                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }

            }
        }).catch((result) => {
            console.log(result);
        });
    }

    exibirDocumento() {
        const modalRef = this.modalService.open(
            this.visualizarModalForm, {
            backdrop: 'static', centered: true, keyboard: false, size: 'xl'
        }
        );

        var documentoModal = JSON.parse(JSON.stringify(this.documento));

        modalRef.componentInstance.instance = documentoModal;
        modalRef.result.then((result) => {
            if (result && result != 'close') {
                //console.log(result);
                if (result.status != undefined) {
                    result.status = StatusEnum.booltoEnum(result.status);
                }
            }
        }).catch((result) => {
            console.log(result);
        });
    }

    observador(parte) {
        for (var iPapel in parte.papel) {
            let papel = parte.papel[iPapel];
            if (papel.papel.identificacao == "OBSERVADOR") {
                return true;
            } else {
                return false;
            }
        }
    }

    permiteEditar(){
       return this.shared.perfilUsuarioAdmin() || this.shared.verificaPerfilClienteSelecionado(PerfilEnum.ROLE_USUARIO)  
    }


}

