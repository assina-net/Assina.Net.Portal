import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { ResponseApi } from '../../../../../model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-assinar-modal',
    templateUrl: './assinar-modal.component.html',
    styleUrls: ['./assinar-modal.component.scss']

})
export class AssinarModalComponent implements OnInit {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;
    @Input() emailsParaAssinatura = [];
    @Input() celularesParaAssinatura = [];
    @Input() papel = [];
    @Input() documento: any = {};
    @Input() documentos: any = {};
    @Input() contratoList = [];
    whatsappParaAssinatura = [];
    parte: any = {};
    message: IAlert;
    codigoDigitado: string;
    rota: string;
    certificados = [];
    aliasCertificado: any;
    tipoCertificadoAN: string;
    pinCertificado: string = "";
    assindorRodando: boolean;
    versaoAssinador: boolean;
    envioSelecionado: any;
    tipoEnvio: string;

    versaoAssinadorInstalada : string = "";
    versaoAssinadorAtual: string = "1.1.2";
    urlDownloadAssinador : string = `https://www.assina.net/assinador/windows/AssinadorAssinaNet-Install.exe?v=${this.versaoAssinadorAtual}`;

    protected shared: SharedService;
    protected router: Router;
    protected errorHandler: ErrorHandlerService;
    protected loading: NgxSpinnerService;
    //protected activeModal: NgbActiveModal


    constructor(private utilService: UtilService,
        private documentoService: DocumentoService,
        private activeModal: NgbActiveModal,
        private dialog: DialogService) {

        const injector = AppInjector.getInjector();
        this.loading = injector.get(NgxSpinnerService);
        this.shared = SharedService.getInstance();
        this.errorHandler = injector.get(ErrorHandlerService);
        this.router = injector.get(Router);

        this.rota = '/assinar/documento';

    }

    ngOnInit() {

        if (this.instance) {
            this.parte = this.instance;
            if (this.parte.contrato != undefined) {
                if (this.parte.contrato.partes != undefined) {
                    this.parte.contrato.partes = [];
                }
                if (this.parte.contrato.documentos != undefined) {
                    this.parte.contrato.documentos = [];
                }
            }
            
            //limpa se o cliente nao assina via email
            if(! this.exibeEmail())
                this.emailsParaAssinatura = [];

            if ( this.emailsParaAssinatura.length > 0 && this.exibeEmail() ){
                this.envioSelecionado = {'tipo': 'EMAIL', 'item':this.emailsParaAssinatura[0]} ;
                this.tipoEnvio = 'EMAIL'
            }
            if ( this.celularesParaAssinatura.length > 0 ){
                
                if ( this.exibeWhatsApp() ){
                    this.tipoEnvio = 'WHATSAPP';
                    //duplicata a lista de celular para whatsapp
                    this.whatsappParaAssinatura = [...this.celularesParaAssinatura]
                } else {
                    this.tipoEnvio = 'SMS';
                    //limpa se o cliente nao assina via whatsapp
                    this.whatsappParaAssinatura = [];
                }
                //limpa se o cliente nao assina via sms
                if ( !this.exibeSMS() ){
                    this.celularesParaAssinatura = [];
                }else{ 
                    this.envioSelecionado = {'tipo': this.tipoEnvio, 'item':this.celularesParaAssinatura[0]} ;
                }
            }
            

            this.buscaCertificadosLocal();
        } else {
            this.parte = "";
        }
    }

    tokenCodigoResult(retorno) {
        this.shared.usuario.tokenAssinatura = retorno.tokenAssinatura;
        this.shared.usuario.validadeTokenAssinatura = retorno.validadeTokenAssinatura;
        this.dialog.success(retorno.mensagem);
    }

    enviaCodigo() {
        this.loading.show();

        let tokenSolicitacaoRequest = { contrato: this.parte.contrato, 
                                        usuario: this.shared.usuario,
                                        tipoEnvio:  this.envioSelecionado.tipo,
                                        destino: this.envioSelecionado.item  }

        this.documentoService.enviaCodigo(tokenSolicitacaoRequest).subscribe((responseApi: string) => {
            this.tokenCodigoResult(responseApi);
            this.loading.hide();
        }, err => {
            this.loading.hide();
            this.errorHandler.handle(err);
        });
    }


    assinarViaCodigo() {
        if (this.codigoDigitado == this.shared.usuario.tokenAssinatura && this.shared.usuario.tokenAssinatura != undefined) {

            let contratoParteAssinatura = { contratoParte: this.parte, usuario: this.shared.usuario, contratos: this.instance.contratos }

            this.loading.show();

            if (this.instance.assinandoLote) {
                this.documentoService.assinarViaCodigoLote(contratoParteAssinatura).subscribe((responseApi: ResponseApi) => {
                    this.loading.hide();
                    this.dialog.success('Documentos Assinados com sucesso!');
                    this.activeModal.close("assinado");
                    //document.getElementById('btnFechar').click();
                    //this.router.navigate([this.rota, this.parte.contrato.id], {skipLocationChange: true});
                }, err => {
                    this.loading.hide();
                    this.errorHandler.handle(err);
                });

            } else {
                this.documentoService.assinarViaCodigo(contratoParteAssinatura).subscribe((responseApi: ResponseApi) => {
                    this.loading.hide();
                    this.dialog.success('Documentos Assinados com sucesso!');
                    this.activeModal.close("assinado");
                    //document.getElementById('btnFechar').click();
                    //this.router.navigate([this.rota, this.parte.contrato.id], {skipLocationChange: true});
                }, err => {
                    this.loading.hide();
                    this.errorHandler.handle(err);
                });
            }
        } else {
            this.showMessage({
                type: 'danger',
                text: 'Código digitado não é o mesmo enviado.'
            });
        }
    }

    certificadosLocalInit(listagem) {
        if (listagem.length == 0) {
            listagem.push({ nome: "Certficado não encontrado.", tipoCertificadoAN: "" });
        }
        this.certificados = listagem;
        if (listagem[0].podeAssinar) {
            this.aliasCertificado = listagem[0];
            this.tipoCertificadoAN = listagem[0].tipoCertificadoAN;
        }
    }


    buscaCertificadosLocal() {
        let cnpj: string = "";

        if (this.parte.contratoPartePJ != undefined &&
            this.parte.contratoPartePJ != "") {
            cnpj = this.parte.contratoPartePJ.cpfCnpj;
        }

        let busca = { cpf: this.parte.cpfCnpj, cnpj: this.parte.cnpjs, assinaturaLote: this.parte.assinandoLote }

        this.documentoService.listaCertificados(busca).subscribe((retorno: any) => {
            this.assindorRodando = true;
            this.certificadosLocalInit(retorno);
            this.documentoService.verificaAssinadorVersao().subscribe((retorno: any) => {
                this.versaoAssinadorInstalada = retorno;
                if (this.versaoAssinadorAtual == retorno) {
                    this.versaoAssinador = true;
                } else {
                    this.versaoAssinador = false;
                }
            }, err => {
                this.versaoAssinador = false;
            });

        }, err => {
            this.assindorRodando = false;
            let retorno = [];
            retorno.push({ nome: "Assinador não disponível", tipoCertificadoAN: "" });
            this.certificadosLocalInit(retorno);
        });
    }

    mensagemAssinaturaCertificadoLocal(retorno) {
        if (retorno.resultado = 'Sucesso') {
            this.dialog.success(retorno.mensagem);
        } else if (retorno.resultado = 'Alerta') {
            this.dialog.warning(retorno.mensagem);
        }
    }

    assinarViaCertificadoLocal() {
        /*
        if( this.tipoCertificadoAN == "A3" &&
                this.pinCertificado == ""){
            this.dialog.warning('Favor inserir o PIN do certificado.');
            return;
        }
        */

        this.loading.show();

        let contratoParteAssinatura = { contratoParte: this.parte, usuario: this.shared.usuario }

        this.documentoService.contratoParteAssinaturaRequest(contratoParteAssinatura).subscribe((config: any) => {
            let contratoParteAssinatura = config;
            contratoParteAssinatura.contratoParte = this.parte;
            contratoParteAssinatura.usuario = this.shared.usuario;
            contratoParteAssinatura.nomeCertificado = this.aliasCertificado.nome;
            contratoParteAssinatura.pinCertificado = this.pinCertificado;
            contratoParteAssinatura.contratos = this.instance.contratos;

            if (this.instance.assinandoLote) {
                this.documentoService.assinarViaCertificadoLocalLote(contratoParteAssinatura).subscribe((responseApi: ResponseApi) => {
                    this.loading.hide();
                    this.mensagemAssinaturaCertificadoLocal(responseApi);
                    this.activeModal.close("assinado");
                }, err => {
                    this.loading.hide();
                    this.errorHandler.handle(err);
                });
            } else {
                this.documentoService.assinarViaCertificadoLocal(contratoParteAssinatura).subscribe((retorno: any) => {
                    this.loading.hide();
                    this.mensagemAssinaturaCertificadoLocal(retorno);
                    this.activeModal.close("assinado");
                }, err => {
                    this.loading.hide();
                    this.errorHandler.handle(err);
                });
            }
        }, err => {
            this.loading.hide();
            this.errorHandler.handle(err);
        });

    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

    MudouCertificado() {
        this.certificados.forEach(certificado => {
            if (certificado.nome == this.aliasCertificado.nome) {
                this.tipoCertificadoAN = certificado.tipoCertificadoAN;
                return;
            }
        })
    }


    selecionarLinha(item) {
        if (item.podeAssinar) {
            if (item.valido) {
                this.aliasCertificado = item;
                this.tipoCertificadoAN = this.aliasCertificado.tipoCertificadoAN;
            } else {
                this.dialog.warning('Este certificado está vencido não pode ser usado!');
            }
        } else {
            this.dialog.warning('Este certificado não pode ser usado por este usuario!');
        }

    }


    selecionarGrid(pitem) {
        var estilo = '';
        if (this.aliasCertificado) {
            if (pitem.nome == this.aliasCertificado.nome) {
                estilo = "linhaSelecionada";
            }
        }
        if (!pitem.podeAssinar) {
            estilo += ' red';
        }
        return estilo;
    }


    selecionarLinhaEnvio(item, tipoEnvio) {       
        this.envioSelecionado = {'tipo': tipoEnvio, 'item':item};
        this.tipoEnvio = tipoEnvio;
    }

    selecionarGridEnvio(pitem) {
        var estilo = '';
        if (this.envioSelecionado) {
            if (pitem.tipo == this.envioSelecionado.tipo &&
                pitem.item == this.envioSelecionado.item) {
                estilo = "linhaSelecionada";
            }
        }
        return estilo;
    }

    assinaViaAssinaturaEletronica() {
        let temPapelComToken: boolean;
        temPapelComToken = false;

        if(Object.keys(this.documentos).length > 0){
            for(let b=0;b<this.documentos.length;b++){
                this.documentos[b].tipoDocumento.papeis.forEach(papelValue => {
                    if(this.papel.length == 0){
                        if(papelValue.token === true){
                            temPapelComToken = true;
                        }
                    }else{
                        for(let z=0;z<this.papel.length;z++){
                            if(this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true){
                                temPapelComToken = true;
                            }
                        }
                    }
                })
            }
        }else{
            if(Object.keys(this.documento).length === 0){
                for(let x=0;x<this.contratoList.length;x++){
                    this.contratoList[x].contrato.documentos.forEach(documento => {
                        documento.tipoDocumento.papeis.forEach(papelValue => {
                            if(this.papel.length == 0){
                                if(papelValue.token === true){
                                    temPapelComToken = true;
                                }
                            }else{
                                for(let z=0;z<this.papel.length;z++){
                                    if(this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true){
                                        temPapelComToken = true;
                                    }
                                }
                            }
                        })
                    });
                }
            }else{
                this.documento.tipoDocumento.papeis.forEach(papelValue => {
                    if(this.papel.length == 0){
                        if(papelValue.token === true){
                            temPapelComToken = true;
                        }
                    }else{
                        for(let z=0;z<this.papel.length;z++){
                            if(this.papel[z].papel.id == papelValue.papel.id && papelValue.token === true){
                                temPapelComToken = true;
                            }
                        }
                    }
                })
            }
        }

        if(temPapelComToken){
            if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"] == undefined &&
                this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"] == undefined  &&
                this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] == undefined )
                return true;

            return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"]) ||
                    this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"]) ||
                    this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] )
        }else{
            return false;
        }
    }

    exibeEmail(){
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"] == undefined )
            return true;

        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_EMAIL"] ) 
    }

    exibeSMS(){
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"] == undefined )
            return false;

        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_SMS"] ) 
    }

    exibeWhatsApp(){
        if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] == undefined )
            return false;

        return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_WHATSAPP"] ) 
    }

    exibeEscolhaViaAssinaturaEletronica() {
        let lista = [];
        lista.push(this.whatsappParaAssinatura);
        lista.push(this.celularesParaAssinatura);
        lista.push(this.emailsParaAssinatura);        

        return lista.length > 1;
    }

    assinaViaCertificadoDigital() {
        let temPapelComCertificado: boolean;
        temPapelComCertificado = false;

        if(Object.keys(this.documentos).length > 0){
            for(let b=0;b<this.documentos.length;b++){
                this.documentos[b].tipoDocumento.papeis.forEach(papelValue => {
                    if(this.papel.length == 0){
                        if(papelValue.certificate === true){
                            temPapelComCertificado = true;
                        }
                    }else{
                        for(let z=0;z<this.papel.length;z++){
                            if(this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true){
                                temPapelComCertificado = true;
                            }
                        }
                    }
                })
            }
        } else{
            if(Object.keys(this.documento).length === 0 ){
                for(let x=0;x<this.contratoList.length;x++){
                    this.contratoList[x].contrato.documentos.forEach(documento => {
                        documento.tipoDocumento.papeis.forEach(papelValue => {
                            if(this.papel.length == 0){
                                if(papelValue.certificate === true){
                                    temPapelComCertificado = true;
                                }
                            }else{
                                for(let z=0;z<this.papel.length;z++){
                                    if(this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true){
                                        temPapelComCertificado = true;
                                    }
                                }
                            }
                        })
                    });
                }
            }else{
                this.documento.tipoDocumento.papeis.forEach(papelValue => {
                    if(this.papel.length == 0){
                        if(papelValue.certificate === true){
                            temPapelComCertificado = true;
                        }
                    }else{
                        for(let z=0;z<this.papel.length;z++){
                            if(this.papel[z].papel.id == papelValue.papel.id && papelValue.certificate === true){
                                temPapelComCertificado = true;
                            }
                        }
                    }
                })
            }
        }

        if(temPapelComCertificado){
            if (this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_CERTIFICADO"] == undefined)
                return true;

            return this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["ASSINAR_VIA_CERTIFICADO"])
        }else{
            return false;
        }
    }

  

}