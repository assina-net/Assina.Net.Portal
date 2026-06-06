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
export class DocumentoRecusadoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/recusado');
    }


    buscaFiltro(filtro, action?): Observable<any> {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(map(response => response['data']));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(map(response => response['data']));
    }

    getDownload(contrato: any): Observable<any> {
        return this.http.post(this.getApiUrl() + "/download", contrato).pipe(map(response => response['data']));
    }

    recusarDocumento(contratoCancelamentoRequest: any) {
        return this.http.post(this.getApiUrl() + "/recusarDocumento", contratoCancelamentoRequest).pipe(map(response => response['data']));
    }

}
