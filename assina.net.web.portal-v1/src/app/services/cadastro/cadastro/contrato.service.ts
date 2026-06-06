import { Injectable } from '@angular/core';
import { HttpService } from '../../util/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ContratoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/contrato');
    }

    buscaFiltro(filtro, action?): Observable<any> {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(map(response => response['data']));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(map(response => response['data']));
    }

    getDocumentoPDF(documento: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/documentoPdf", documento).pipe(map(response => response['data']));
        return response;
    }

    liberarAssinatura(contratoRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/liberarAssinatura", contratoRequest).pipe(map(response => response['data']));
        return response;
    }

    liberarAssinaturaLote(contratoLiberacaoLoteRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/liberarAssinaturaLote", contratoLiberacaoLoteRequest).pipe(map(response => response['data']));
        return response;
    }

    reenviaSolicitacaoAssintura(contratoParteResponse: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/reenviaSolicitacaoAssintura", contratoParteResponse).pipe(map(response => response['data']));
        return response;
    }

    getDadosPessoa(ContratoParteRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/dadosPessoa", ContratoParteRequest).pipe(map(response => response['data']));
        return response;
    }

    assinaDocumento(contrato: any): Observable<any> {
        return this.http.post("http://localhost:3030/api/v1/assinador", contrato).pipe(map(response => response['data']));
    }

    verificaAtivo(): Observable<any> {
        return this.http.get("http://localhost:3030/api/v1/assinador").pipe(map(response => response['data']));
    }

    
    partesPadrao(partesPadraoRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/partesPadrao", partesPadraoRequest).pipe(map(response => response['data']));
        return response;
    }


}
