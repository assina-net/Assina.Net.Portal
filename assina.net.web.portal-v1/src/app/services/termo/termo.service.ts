import { Injectable } from '@angular/core';
import { HttpService } from '../util/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Usuario } from '../../model/cadastro/usuario';

@Injectable({
    providedIn: 'root'
})
export class TermoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/termo');
    }

    getTermosPendentes(usuario: Usuario): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/termosPendentes", usuario).pipe(map(response => response['data']));
        return response;
    }

    getTermosParaAssinaturaPDF(usuario: Usuario): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/termosParaAssinatura", usuario).pipe(map(response => response['data']));
        return response;
    }

    termosAceite(termoAceiteRequest: any): Observable<any> {
        let response = this.http.post(this.getApiUrl() + "/termosAceite", termoAceiteRequest).pipe(map(response => response['data']));
        return response;
    }

}
