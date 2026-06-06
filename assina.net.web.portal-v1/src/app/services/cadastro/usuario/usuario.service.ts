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
export class UsuarioService extends HttpService {

    constructor(http: HttpClient) {
        super(http);
        this.setApiUrl('/v1/usuario');
    }

    login(usuario: Usuario) {
        return this.http.post(`${URL_API}/v1/auth`, usuario);
    }

    lostPassword(usuario: Usuario) {
        return this.http.post(`${URL_API}/v1/lost`, usuario).pipe(map(response => response['data']));;
    }

    validarTokenAlterSenha(token: any) {
        return this.http.post(`${URL_API}/v1/validarTokenAlterSenha`, token).pipe(map(response => response['data']));;
    }

    trocarSenha(usuario: any) {
        return this.http.post(this.getApiUrl() + "/trocarSenha", usuario).pipe(map(response => response['data']));
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

    findAll(pageable: Page, filtro: any) {
        return this.http.post(`${this.getApiUrl()}/buscarFiltro?` +
            'size=' + pageable.size +
            '&page=' + pageable.number +
            (pageable.order ? '&sort=' + pageable.order : '')
            , filtro);
    }

    findByIdEditar(usuarioCliente: any) {


        // var reqHeader = new HttpHeaders({
        //     "Content-Type": "application/json",
        // });

        // const httpOptions = {
        //     headers: reqHeader,
        //     body: usuarioCliente,
        // };
        // return this.http.get<any>(this.getApiUrl() + '/findByIdEditar', httpOptions);
        return this.http.post(this.getApiUrl() + '/findByIdEditar', usuarioCliente)
    }


    inativar(usuarioCliente: any) {
        return this.http.post(this.getApiUrl() + '/inativar', usuarioCliente)
    }



}
