import { Injectable } from '@angular/core';
import { HttpService } from '../../util/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TipoDocumentoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/config/tipoDocumento');
    }

}
