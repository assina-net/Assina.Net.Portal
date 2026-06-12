import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CurrentUser } from '../../../model/cadastro/currentUser';
import { StatusEnum } from '../../../model/enum/statusEnum';
import { TipoPessoaEnum } from '../../../model/enum/tipoPessoaEnum';
import { Usuario } from '../../../model/cadastro/usuario';
import { Pessoa } from '../../../model/cadastro/pessoa';
import { SharedService } from '../../../services/util/shared.service';
import { UsuarioService } from '../../../services/cadastro/usuario/usuario.service';
import { TemplateService } from '../../template/template.service';
import { DialogService } from 'app/services/util/dialog.service';
import { ResponseApi } from 'app/model/util/response-api';
import { TermoService } from 'app/services/termo/termo.service';
import { TermoAceiteModalComponent } from 'app/components/termos/modal/termo-aceite/termo-aceite-modal.component'
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { UtilService } from 'app/services/util/util.service';
import { GoogleAnalyticsService } from "app/services/google-analytics.service";

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        'assets/css/reset.min.css',
        'assets/css/slippry.css',
    ],
    styleUrls: [
        './login.component.css'
    ]
})
export class LoginComponent implements OnInit {

    usuario = new Usuario(null, '', '', '', StatusEnum.INATIVO, null, new Pessoa('', '', '', '', TipoPessoaEnum.FISICA, '', null), null, null);
    shared: SharedService;
    message: string;
    descBtnEntrar: string = 'Entrar';
    esconder = true;
    navigate: string;
    termoAceiteModal = TermoAceiteModalComponent;



    constructor(private userService: UsuarioService,
        private loading: NgxSpinnerService,
        private template: TemplateService,
        private router: Router,
        private dialog: DialogService,
        private errorHandler: ErrorHandlerService,
        private termoService: TermoService,
        private modalService: NgbModal,
        private utilService: UtilService,
        public googleService: GoogleAnalyticsService,) {
        this.shared = SharedService.getInstance();
    }

    ngOnInit() {
        this.utilService.carregaAnimaJS();
        
        //const animeFile = `../assets/js/anime.min.js`;
        //const slippryFile = `../assets/js/slippry.min.js`;
        //const loginFile = `../assets/js/login.js`;
  
        //const filesToLoad = [animeFile, slippryFile, loginFile];

        //let sequence: Promise<any> = Promise.resolve();
        //filesToLoad.forEach((file: string) => {
         //   sequence = sequence.then(() => {
          //    return this.loadScript(file);
           // });
          //});

        //$.getScript('../../../assets/js/anime.min.js');
        //$.getScript('../../../assets/js/slippry.min.js');
        //$.getScript('../../../assets/js/login.js');
    }

    

    logar() {
        
        this.googleService.eventEmitter("login", "login-inicio", "", 1);
        this.loading.show();
        this.message = '';
        this.usuario.login = this.usuario.login.toUpperCase();
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;

        this.userService.login(this.usuario).subscribe((userAuthentication: CurrentUser) => {
            this.shared.sessaoExpirada = false;
            this.shared.token = userAuthentication.token;
            this.shared.usuario = userAuthentication.usuario;
            this.shared.clientes = userAuthentication.clientes;
            if (this.shared.clientes.length > 0) {

                //verifica se é do perfil sem ser assinador tem preferencia
                let  Ususáriocliente =  this.shared.clientes.filter(x => PerfilEnum.parse(x.perfil) != PerfilEnum.ROLE_ASSINADOR);
                if ( Ususáriocliente.length ==0){
                    Ususáriocliente = this.shared.clientes;
                }

                this.shared.clienteSelecionado = Ususáriocliente[0];
                this.shared.perfilUsuario = Ususáriocliente[0].perfil;                
            }
            this.shared.prefs = this.template.getMenuPrefs();
            this.navigate = '/';
            this.buscaTermos();
            this.googleService.eventEmitter("login", "login-sucesso", "", 1);

        }, err => {
            this.googleService.eventEmitter("login", "login-erro", "", 1);
            this.shared.token = null;
            this.shared.usuario = null;
            this.message = 'Erro ';
            this.loading.hide();
        });
    }

    lostPassword() {
        this.loading.show();
        this.userService.lostPassword(this.usuario).subscribe((responseApi: ResponseApi) => {
            this.dialog.success("Enviado para o email");
            this.loading.hide();
        }, err => {
            this.loading.hide();
        });
    }

    termosPendentes(termosResponse) {
        if (termosResponse) {
            this.exibirTermos();            
        } else {
            this.router.navigate([this.navigate]);
            this.loading.hide();
            this.descBtnEntrar = 'Sair';
        }
    }

    buscaTermos() {
        this.termoService.getTermosPendentes(this.shared.usuario).subscribe((responseApi: ResponseApi) => {
            this.termosPendentes(responseApi)
        }, err => {
            this.errorHandler.handle(err);
        });
        return null;
    }


    exibirTermos() {
        const modalRef = this.modalService.open(
            this.termoAceiteModal, {
            backdrop: 'static', centered: true, keyboard: false
        }
        );
        modalRef.componentInstance.urlNavigate = this.navigate;        
        this.loading.hide();

    }

    documentValidation() {        
        this.navigate = '/validarAssinatura';
        this.router.navigate([this.navigate])
    }

    newCliente() {        
        this.navigate = '/registrar';
        this.router.navigate([this.navigate])
    }


}
