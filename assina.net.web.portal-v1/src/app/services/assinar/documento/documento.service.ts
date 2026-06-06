import { Injectable } from '@angular/core';
import { Usuario } from '../../../model/cadastro/usuario';
import { HttpService } from '../../util/http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../util/sistema-base.api";
import { map } from "rxjs/operators";
import { Page } from "../../../model/util/page";


@Injectable({
    providedIn: 'root'
})
export class DocumentoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/assinar');
    }

    assinarDocumento(chaveAcesso: string, cpf: string) {
        let payload = {
            chaveAcesso : chaveAcesso,
            cpf : cpf
        }
        return this.http.post(this.getApiUrl() + '/validarChaveAcesso', payload).pipe(map(response => response['data']));
    }

    buscaFiltro(filtro, action?): Observable<any> {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(map(response => response['data']));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(map(response => response['data']));
    }

    getDocumentos(contrato: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/documentos", contrato).pipe(map(response => response['data']));
    }

    getPartesUsuario(contratoParteAssinarRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/partesUsuario", contratoParteAssinarRequest).pipe(map(response => response['data']));
        return response;
    }

    getDocumentoPDF(documento: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/documentoPdf", documento).pipe(map(response => response['data']));
    }

    getDocumentosPDF(documentos: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/documentosPdf", documentos).pipe(map(response => response['data']));
    }

    enviaCodigo(tokenSolicitacaoRequest: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/enviaCodigo", tokenSolicitacaoRequest).pipe(map(response => response['data']));
    }

    assinarViaCodigo(ContratoParteAssinaturaRequest: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/assinarViaCodigo", ContratoParteAssinaturaRequest).pipe(map(response => response['data']));
    }

    assinarViaCodigoLote(ContratoParteAssinaturaRequest: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/assinarViaCodigoLote", ContratoParteAssinaturaRequest).pipe(map(response => response['data']));
    }


    getDownload(contrato: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/download", contrato).pipe(map(response => response['data']));
    }

    getLog(contrato: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/log", contrato).pipe(map(response => response['data']));
    }

    contratoParteAssinaturaRequest(contratoParte: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/contratoParteAssinaturaRequest", contratoParte).pipe(map(response => response['data']));
    }

    salvarPartesAlteradas(partes: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/salvarPartesAlteradas", partes).pipe(map(response => response['data']));
    }

    assinarViaCertificadoLocal(contratoParte: any): Observable<any> {

        let config={};
        config["timeout"]=600000;
        config["data"]=contratoParte ? contratoParte: {};

        //return this.http.post("http://localhost:3030/api/v1/assinador/assinarViaCertificadoLocal", config ).pipe(map(response => response['data']));
        return this.http.post("http://127.0.0.1:3030/api/v1/assinador/assinarViaCertificadoLocal", contratoParte ).pipe(map(response => response['data']));
    }

    assinarViaCertificadoLocalLote(contratoParte: any): Observable<any> {
        return this.http.post("http://localhost:3030/api/v1/assinador/assinarViaCertificadoLocalLote", contratoParte).pipe(map(response => response['data']));
    }

    listaCertificados(cpfCnpj: any): Observable<any> {
        return this.http.post("http://localhost:3030/api/v1/assinador/listaCertificado", cpfCnpj).pipe(map(response => response['data']));
    }

    verificaAssinadorAtivo(): Observable<any> {
        return this.http.get("http://localhost:3030/api/v1/assinador").pipe(map(response => response['data']));
    }

    verificaAssinadorVersao(): Observable<any> {
        return this.http.get("http://localhost:3030/api/v1/assinador/versao").pipe(map(response => response['data']));
    }

    
}
