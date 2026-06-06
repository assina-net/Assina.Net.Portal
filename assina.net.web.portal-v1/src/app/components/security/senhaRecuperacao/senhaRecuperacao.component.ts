import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilService } from 'app/services/util/util.service';
import { Usuario } from 'app/model/cadastro/usuario';
import { Pessoa } from 'app/model/cadastro/pessoa';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { TipoPessoaEnum } from 'app/model/enum/tipoPessoaEnum';
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { ResponseApi } from 'app/model/util/response-api';
import { SharedService } from 'app/services/util/shared.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { TemplateService } from '../../template/template.service';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { CurrentUser } from 'app/model/cadastro/currentUser';


declare var $: any;

@Component({
    selector: 'app-recuperar-senha',
    templateUrl: './senhaRecuperacao.component.html',
    styles: [
        'assets/css/reset.min.css',
        'assets/css/slippry.css',
    ],
    styleUrls: [
        './senhaRecuperacao.component.css'
    ]
})
export class SenhaRecuperacaoComponent implements OnInit {


    barColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    strengthLabels = ['  Insegura', '  Fraca', '  Média', '  Forte', '  Segura'];

    @ViewChild('form', { static: false }) form: NgForm;
    message: IAlert;
    senhaNova: string = null;
    senhaConfirmacao: string = null;
    senhaValida: boolean = false;
    token: string = null;

    usuario = new Usuario(null, '', '', '', StatusEnum.INATIVO, null, new Pessoa('', '', '', '', TipoPessoaEnum.FISICA, '', null), null, null);
    shared: SharedService;
    descBtnEntrar: string = 'Entrar';
    tokenValido = false;


    constructor(private usuarioService: UsuarioService,
        private loading: NgxSpinnerService,
        private template: TemplateService,
        private dialog: DialogService,
        private utilService: UtilService,
        private errorHandler: ErrorHandlerService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.shared = SharedService.getInstance();
        //this.titulo = "Alteração senha";
        //this.navegacao = " > Alterar Senha";

        this.activatedRoute.queryParams.subscribe(params => {
            this.token = params['token'];
        });
    }

    ngOnInit() {
        this.utilService.carregaAnimaJS();
        //$.getScript('../../../assets/js/anime.min.js');
        //$.getScript('../../../assets/js/slippry.min.js');
        //$.getScript('../../../assets/js/login.js');
        this.validarToken();
    }

    UserInit(userAuthentication) {
        this.shared.token = userAuthentication.token;
        this.shared.usuario = userAuthentication.usuario;
    }

    validarToken() {
        this.loading.show();
        this.message = null;
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;

        this.usuarioService.validarTokenAlterSenha(this.token).subscribe((responseApi: ResponseApi) => {
            this.UserInit(responseApi)
            this.tokenValido = true;
            this.loading.hide();
        }, err => {
            this.router.navigate(['/']);
            this.errorHandler.handle(err);
            this.loading.hide();
        });
    }

    showHidePassword(tipo) {
        this.utilService.showHidePassword('show_hide_password_' + tipo);
    }

    trocarSenha() {
        if (this.form.invalid) {
            UtilService.setAsTouched(this.form.form);
            this.showMessage({
                type: 'danger',
                text: "Existem informações inválidas ou nulas. Favor verificar!"
            });
            return;
        }
        if (!this.validateForm()) {
            return;
        }

        this.loading.show();
        let usuario = Object.assign(this.shared.usuario, { senha: this.senhaNova });

        this.usuarioService.trocarSenha(usuario).subscribe((responseApi: ResponseApi) => {
            this.dialog.success(responseApi.data);

            this.usuarioService.login(usuario).subscribe((userAuthentication: CurrentUser) => {
                this.shared.token = userAuthentication.token;
                this.shared.usuario = userAuthentication.usuario;
                this.shared.clientes = userAuthentication.clientes;
                if (this.shared.clientes.length > 0) {
                    this.shared.clienteSelecionado = this.shared.clientes[0];
                    this.shared.perfilUsuario = this.shared.clientes[0].perfil;                    
                }
                this.shared.prefs = this.template.getMenuPrefs();
                this.router.navigate(['/']);
                this.loading.hide();
                this.descBtnEntrar = 'Sair';
            }, err => {
                this.shared.token = null;
                this.shared.usuario = null;
                this.loading.hide();
            });

            this.loading.hide();
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    validateForm() {
        if (this.senhaNova != this.senhaConfirmacao) {
            this.showMessage({
                type: 'danger',
                text: 'A senha de confirmação não confere com a senha informada'
            });
            return false;
        }
        return true;
    }

    showMessage(message: IAlert) {
        this.message = message;
        this.dialog.showMessage(message);
    }

}
