import { Injectable } from '@angular/core';
import { HttpService } from '../util/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Usuario } from '../../model/cadastro/usuario';

@Injectable({
    providedIn: 'root'
})
export class ValidarService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/validar');
    }

    validarDocumento(idDocumento: String): Observable<any> {
        let response = this.http.get(this.getApiUrl() + "/" + idDocumento).pipe(map(response => response['data']));
        return response;
    }

}
