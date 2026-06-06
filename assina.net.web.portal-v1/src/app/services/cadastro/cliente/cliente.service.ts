import { Injectable } from '@angular/core';
import { Usuario } from '../../../model/cadastro/usuario';
import { HttpService } from '../../util/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../util/sistema-base.api";
import { map } from "rxjs/operators";
import { Page } from "../../../model/util/page";

@Injectable({
    providedIn: 'root'
})
export class ClienteService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/cliente');
    }

    buscaFiltro(filtro, action?): Observable<any> {
        if (action) {
            return this.http.post(this.getApiUrl() + action, filtro).pipe(map(response => response['data']));
        }
        return this.http.post(this.getApiUrl() + "/filtrar", filtro).pipe(map(response => response['data']));
    }

    getUsuarioCpfCnpj(usuario: Usuario) {
        return this.http.post(this.getApiUrl() + '/getUsuarioCpfCnpj', usuario).pipe(map(response => response['data']));
    }

    getClientes(usuario: Usuario) {
        return this.http.post(this.getApiUrl() + '/getClientes', usuario);
    }

    
}
