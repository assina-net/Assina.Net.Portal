import { Injectable } from '@angular/core';
import { HttpService } from '../util/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from "../util/sistema-base.api";
import { map } from "rxjs/operators";
import { Page } from "../../model/util/page";

@Injectable({
    providedIn: 'root'
})
export class RegistroService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/registro');
    }

    registar(registro) {
        return this.http.post(this.getApiUrl() , registro).pipe(map(response => response['data']));
    }

    cliente(cpfCnpj) {
        let apiCliente = this.getApiUrl() + `/cliente/${cpfCnpj}`;
        return this.http.get(apiCliente).pipe(map(response => response['data']));
    }
}
