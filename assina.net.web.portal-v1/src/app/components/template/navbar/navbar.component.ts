import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../model/cadastro/usuario';
import { SharedService } from '../../../services/util/shared.service';
import { UsuarioService } from '../../../services/cadastro/usuario/usuario.service';
import { ResponseApi } from '../../../model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { URL_API } from "app/services/util/sistema-base.api";

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

    @ViewChild('menu', { static: false }) menu: NgbDropdown;
    @ViewChild('menuList', { static: false }) menuList: ElementRef;

    placement = 'bottom-right';

    public isCollapsed = true;
    public shared: SharedService;
    public usuario: Usuario;


    protected errorHandler: ErrorHandlerService;

    constructor(private userService: UsuarioService,
        private router: Router) {
        this.shared = SharedService.getInstance();
        this.usuario = this.shared.usuario;
    }

    canDeactivate(): Promise<boolean> | boolean {
        return true;
    }

    setPlacement(dir) {
        setTimeout(() => {
            if (dir === 'rtl') {
                this.placement = 'bottom-left';
            } else if (dir === 'ltr') {
                this.placement = 'bottom-right';
            }
        }, 3000);
    }

    ngOnInit() {
        $('#dropdownBasic2').removeClass('dropdown-toggle');
    }

    signOut(): void {
        this.shared.logout();
        this.router.navigate(['/login']);
    }

    addUser(): void {
        this.router.navigate(['/cadastro/usuario/novo']);
    }

    addContract(): void {
        this.router.navigate(['/cadastro/contrato/novo']);
    }

    goSign(): void {
        this.router.navigate(['/assinar/pendente/lista']);
    }

    trocarSenha(): void {
        this.router.navigate(['/cadastro/usuario/alterarsenha']);
    }

    perfilUsuario(): void {
        this.router.navigate(['/cadastro/usuario/perfil/' + this.shared.usuario.id  ]);
    }

    getPorta(): string {
        let url = `${URL_API}`;
        if (url.substring(6).includes(":")) {
            let iPosicao = url.substring(6).indexOf(':')+1;
            let porta = url.substring(6).substring(iPosicao, iPosicao + 4);
            if( porta != location.port){
                return porta;        
            }

        }
        return "";
    }

    podeIncluirContrato(){
        return this.shared.podeIncluirContrato();
    }

    podeIncluirUsuario(){
        return this.shared.podeIncluirUsuario();
    }



}
