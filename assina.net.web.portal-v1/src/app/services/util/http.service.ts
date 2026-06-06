import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusEnum } from '../../model/enum/statusEnum';
import { URL_API } from "./sistema-base.api";
import { Page } from "../../model/util/page";
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';

export interface IHttpService {

    saveUpdate(entity: any);

    save(entity: any);

    findAll(pageable: Page, filtro: any);

    findById(id: string);

    delete(id: string);

    getComUrl(caminho: string, id: string);

    getNew();

    buscaEndereco(cep: string);

    buscarCombos();
}

@Injectable({
    providedIn: 'root'
})
export class HttpService implements IHttpService {

    private apiUrl: string;

    protected shared: SharedService;

    constructor(protected http: HttpClient) {
        const injector = AppInjector.getInjector();
        this.shared = injector.get(SharedService);
    }

    getApiUrl() {
        return this.apiUrl;
    }

    saveUpdate(entity: any) {
        if (entity.status != undefined) {
            entity.status = StatusEnum.booltoEnum(entity.status);
        }
        if (entity.id != null && entity.id != '') {
            return this.http.put(`${this.apiUrl}`, entity);
        } else {
            entity.id = null;
            return this.http.post(`${this.apiUrl}`, entity);
        }
    }

    save(entity: any) {
        return this.http.post(`${this.apiUrl}`, entity);
    }

    post(caminho: string, objeto: any) {
        return this.http.post(`${this.apiUrl}` + caminho, objeto);
    }

    findAll(pageable: Page, filtro: any) {
        return this.http.post(`${this.apiUrl}/buscarFiltro?` +
            'size=' + pageable.size +
            '&page=' + pageable.number +
            (pageable.order ? '&sort=' + pageable.order : '')
            , filtro);
    }

    findById(id: string) {
        let idRequest = {
            id: id,
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        }

        return this.http.post(`${this.apiUrl}/findById`, idRequest);
        //return this.http.get(`${this.apiUrl}/${id}`);
    }

    //findById(id: string) {
    //    return this.http.get(`${this.apiUrl}/${id}`);
    //}

    get() {
        return this.http.get(`${this.apiUrl}`);
    }

    getComUrl(caminho: string, id: string) {
        return this.http.get(`${this.apiUrl}/` + caminho + `/${id}`);
    }

    delete(id: string) {

        var reqHeader = new HttpHeaders({
            "Content-Type": "application/json",
        });

        let idRequest = {
            id: id,
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        }

        const httpOptions = {
            headers: reqHeader,
            body: idRequest,
        };

        return this.http.delete<any>(`${this.apiUrl}`, httpOptions);
    }

    protected setApiUrl(url: string) {
        this.apiUrl = `${URL_API}${url}`;
    }

    //somente quando a tela tem combos, para buscar os dados
    getNew() {

        let idRequest = {
            usuario: this.shared.usuario,
            idCliente: this.shared.clienteSelecionado.cliente.id
        }

        return this.http.post(`${this.apiUrl}/new`, idRequest);
    }

    buscaEndereco(cep: string) {
        cep = cep.replace('-', '');
        let apiCep = `${URL_API}/v1/cep/${cep}`;
        return this.http.get(apiCep);
    }

     buscarCombos() {
        return this.http.get(`${this.apiUrl}/buscarCombos`);
    }

}
