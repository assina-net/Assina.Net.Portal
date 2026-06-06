import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilModule } from 'app/components/util/util.module';
import { DialogService, IAlert } from "app/services/util/dialog.service";
import { UtilService } from 'app/services/util/util.service';
import { SharedService } from 'app/services/util/shared.service';
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { ResponseApi } from "app/model/util/response-api";


@Component({
    selector: 'senha-alterar-form',
    template: `
      <form class="form form-horizontal" #form="ngForm" (ngSubmit)="trocarSenha()" autocomplete="off" novalidate>
          <div class="form-body">
              <div class="row">
                <div class="col-md-4">
                    <label for="inputPassword" class="control-label">Senha</label>
                    <div class="input-group mb-0" id="show_hide_password_n">
                        <input type="password" [(ngModel)]="senhaNova" name="y" class="form-control"
                               id="inputPassword" placeholder="**********"
                               #senha="ngModel" [required]="true" minlength="3" maxlength="30">
                            <div class="input-group-append">
                            <div class="input-group-text" (click)="showHidePassword('n')">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <small class="form-text text-muted danger"
                           *ngIf="senha.errors?.required && (senha.dirty || senha.touched)">Informe a Senha
                    </small>
                    <small class="form-text text-muted danger"
                           *ngIf="senha.errors?.minlength && (senha.dirty || senha.touched)">Informe no mínimo 6
                        caracteres
                    </small>
                </div>
                <div style="margin-top: 28px;">f
                            <ng2-password-strength-bar *ngIf="senhaNova"
                                                       [passwordToCheck]="senhaNova"
                                                       [barColors]="barColors"
                                                       [strengthLabels]="strengthLabels">
                            </ng2-password-strength-bar>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                    <label for="inputPasswordC" class="control-label">Confirmar Senha</label>
                    <div class="input-group mb-0" id="show_hide_password_c">
                        <input type="password" [(ngModel)]="senhaConfirmacao" name="senhaConfirma" class="form-control"
                               id="inputPasswordC" placeholder="**********"
                               #senhaConfirma="ngModel" [required]="senhaNova != senhaConfirmacao"
                               maxlength="30">
                        <div class="input-group-append" >
                            <div class="input-group-text" (click)="showHidePassword('c')">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <small class="form-text text-muted danger"
                           *ngIf="senhaConfirma.errors?.required && (senhaConfirma.dirty || senhaConfirma.touched)">
                        Informe a Senha de confirmação
                    </small>
                </div>
              </div>
          </div>
          <ngb-alert *ngIf="message" type="{{message.type}}" (close)="message = null">
            {{ message.text }}
          </ngb-alert>

          <app-botoes-cadastro [editando]="true" [podeVoltar]="false"
            [consultando]="false">
          </app-botoes-cadastro>
      </form>
  `,
    styles: [],
})

export class SenhaAlterarFormComponent {

    @ViewChild('form', { static: false }) form: NgForm;
    message: IAlert;
    senhaNova: string = null;
    senhaConfirmacao: string = null;
    senhaValida: boolean = false;

    barColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    strengthLabels = ['  Insegura', '  Fraca', '  Média', '  Forte', '  Segura'];


    constructor(private utilService: UtilService,
        private loading: NgxSpinnerService,
        private errorHandler: ErrorHandlerService,
        private dialog: DialogService,
        private shared: SharedService,
        private usuarioService: UsuarioService) {

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




