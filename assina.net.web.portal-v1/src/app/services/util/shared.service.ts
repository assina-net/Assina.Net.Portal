import { Injectable, isDevMode } from '@angular/core';
import { menuPrefs } from '../../components/template/template.service';
import { Usuario } from '../../model/cadastro/usuario';
import { AppInjector } from "app/services/util/app-injector.service";
import { UtilService } from 'app/services/util/util.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Injectable()
export class SharedService {

    public static instance: SharedService = null;
    usuario: Usuario;
    token: string;
    prefs: menuPrefs;
    clienteSelecionado: any = { cliente: { id: "", segmento: { id: "", identificacao: "" } } };
    perfilUsuario: string;
    clientes: any;


    protected utilService: UtilService;

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SharedService();
        }
        return this.instance;
    }

    constructor() {

        const injector = AppInjector.getInjector();
        this.utilService = injector.get(UtilService);
        return SharedService.instance = SharedService.instance || this;
    }

    isLoggedIn(): boolean {
        if (this.usuario == null) {
            return false;
        }
        return this.usuario.login !== '';
    }

    temAcesso(menu: number) {
        var podeAcesar = false;

        if (this.verificaPerfilMenu(PerfilEnum.ROLE_ADMIN)) {
            podeAcesar = true;
        } else {

            //documentos
            if (menu == 90000000) {
                let sohAssinador = true;
                if (this.clientes.filter(c => c.perfil != 'ROLE_ASSINADOR').length > 0)
                    sohAssinador = false;
                // for (let cliente of this.clientes) {
                //     if (cliente.perfil != 'ROLE_ASSINADOR') {
                //         sohAssinador = false;
                //         break;
                //     }
                // }
                podeAcesar = !sohAssinador;
            }


            if ((menu == 80000100 || menu == 80000200 || menu == 80000300 ||
                menu == 60000100 || menu == 60000500 || menu == 60001000) &&
                this.verificaPerfilMenu(PerfilEnum.ROLE_ADMIN_CLIENTE)) {
                podeAcesar = true;
            }


            if ((menu == 80000100 || menu == 80000200 || menu == 80000300) &&
                this.clientes.filter(c => c.perfil != 'ROLE_ASSINADOR').length > 0)
                podeAcesar = true;

            if ((menu == 80000100 || menu == 80000300) &&
                this.clientes.filter(c => c.perfil == 'ROLE_ASSINADOR').length > 0)
                podeAcesar = true;

            if (menu >= 50000000 && menu <= 60000000)
                podeAcesar = true;
        }
        return podeAcesar;
    }

    podeIncluirContrato(){
        if ( !this.verificaPerfilMenu(PerfilEnum.ROLE_ADMIN_CLIENTE))
            return this.clientes.filter(c => c.perfil != 'ROLE_ASSINADOR').length > 0
        else
            return true
    }

    podeIncluirUsuario(){
        return PerfilEnum.parse(this.usuario.perfil.toString()) == PerfilEnum.ROLE_ADMIN || 
        PerfilEnum.parse(this.perfilUsuario.toString()) == PerfilEnum.ROLE_ADMIN 
    }

    podeNavegar(menu: number) {
        // return isDevMode();
        return true;
    }

    logout() {
        this.token = null;
        this.usuario = null;
        this.clienteSelecionado = null;
        this.perfilUsuario = null;
        this.clientes = null;
    }

    verificaPerfilMenu(perfil: PerfilEnum) {
        var existePerfil: boolean = false;
        existePerfil = PerfilEnum.parse(this.usuario.perfil.toString()) == perfil;        
        if (!existePerfil) {
            existePerfil = PerfilEnum.parse(this.perfilUsuario.toString()) == perfil;
            if (!existePerfil) {
                if (this.clientes.filter(c => PerfilEnum.parse(c.perfil) == perfil).length > 0)
                    existePerfil = true;
            }
        }
        return existePerfil;
    }

    verificaPerfilClienteSelecionado(perfil: PerfilEnum) {        
        return PerfilEnum.parse(this.clienteSelecionado.perfil) == perfil;
    }

    perfilUsuarioAdmin() {
        let admin:boolean = this.perfilUsuariSistema() ;
        if (!admin)
                admin = PerfilEnum.parse(this.perfilUsuario.toString()) == PerfilEnum.ROLE_ADMIN_CLIENTE ||
                        this.verificaPerfilClienteSelecionado(PerfilEnum.ROLE_ADMIN_CLIENTE)
        return admin
    }

    perfilUsuariSistema() {
        let admin:boolean =  PerfilEnum.parse(this.usuario.perfil.toString()) == PerfilEnum.ROLE_ADMIN || 
                             PerfilEnum.parse(this.perfilUsuario.toString()) == PerfilEnum.ROLE_ADMIN  //this.usuario.perfil == PerfilEnum.ROLE_ADMIN
        return admin
    }

    get classUpperCase() {

        if (this.clienteSelecionado != null &&
            this.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.clienteSelecionado.sistemaAtributo["CAMPOS_UPPERCASE"])) {
            return { "text-transform": "uppercase" };
        } else {
            return { "text-transform": "none" };
        }
    }
    get classLowerCase() {
        return { "text-transform": "lowercase" };
    }
}
