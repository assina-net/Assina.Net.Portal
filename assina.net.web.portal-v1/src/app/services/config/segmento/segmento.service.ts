import { Injectable } from '@angular/core';
import { HttpService } from '../../util/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SegmentoService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/config/segmento');
    }

}
