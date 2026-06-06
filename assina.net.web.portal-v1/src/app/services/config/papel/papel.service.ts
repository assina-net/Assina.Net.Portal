import { Injectable } from '@angular/core';
import { HttpService } from '../../util/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PapelService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/config/papel');
    }


    novoPapelTipoDocumento(papel: any, tipoDocumento: any): Observable<any> {
        let novoPapelTipoDocumentoRequest = {
            papel : papel,
            idTipoDocumento: tipoDocumento
        }
        let response = this.http.post(this.getApiUrl() + "/novoPapelTipoDocumento", novoPapelTipoDocumentoRequest).pipe(map(response => response['data']));
        return response;
    }
}
