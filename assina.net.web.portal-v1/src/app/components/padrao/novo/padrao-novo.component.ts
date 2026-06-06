import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { LOGGER } from 'app/services/util/logger.service';
import { UtilService } from 'app/services/util/util.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ResponseApi } from 'app/model/util/response-api';
import { AppInjector } from 'app/services/util/app-injector.service';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { IHttpService } from 'app/services/util/http.service';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';


export interface IDadosLista {
   listagem: any[];
   dirty: boolean;
}
@Component({
   selector: '',
   templateUrl: './padrao-novo.component.html',
   styleUrls: ['./padrao-novo.component.scss']
})
export class PadraoNovoComponent implements OnInit {

   @ViewChild('form', { static: false }) form: NgForm;

   titulo: string;
   navegacao: string;
   rota: string;
   entidade: any;
   message: IAlert;
   formulario: string = '';
   consultando: boolean = false;
   iniciado: boolean = false;

   modalView: boolean = false;

   protected dialog: DialogService;
   protected httpService: IHttpService;
   protected loading: NgxSpinnerService;
   protected shared: SharedService;
   protected router: Router;
   protected errorHandler: ErrorHandlerService;
   protected utilService : UtilService;

   constructor(
      protected route: ActivatedRoute
   ) {
      const injector = AppInjector.getInjector();
      this.dialog = injector.get(DialogService);
      this.loading = injector.get(NgxSpinnerService);
      this.shared = injector.get(SharedService);
      this.router = injector.get(Router);
      this.errorHandler = injector.get(ErrorHandlerService);
      this.utilService =  injector.get(UtilService);
      this.shared = SharedService.getInstance();
   }

   //@HostListener('window:beforeunload')
   canDeactivate(): Promise<boolean> | boolean {
      return !this.formDirty || this.consultando;
   }

   ngOnInit() {
      this.rota = `${this.rota}/lista`;
      const id: string = this.route.snapshot.params['id'];
      if (id !== undefined) {
         this.findById(id);
      } else {
         if (this.entidade == null) {
            this.getNew();
         }
         this.novoRegistro();
         this.iniciado = true;
      }
      this.additionalFormInit();
   }

   protected novoRegistro() { }
   protected additionalFormInit() { }

   getNew() {
      this.loading.show();
      this.httpService.getNew().subscribe((responseApi: ResponseApi) => {
         this.entidade = responseApi.data;
         this.iniciado = true;
         this.afterRetrieveData();
         this.loading.hide();
      }, err => {
         this.iniciado = true;
         this.errorHandler.handle(err);
      });
   }


   findById(id: string) {
      this.loading.show();
      this.httpService.findById(id).subscribe((responseApi: ResponseApi) => {
         this.entidade = responseApi.data;
         this.iniciado = true;
         if (this.route.queryParams) {
            this.route.queryParams.subscribe(params => {
               this.consultando = params["consultar"] == 'true';
               this.afterRetrieveData();
               this.desabilita(this.consultando);
            });
         } else {
            this.afterRetrieveData();
            this.desabilita(this.consultando);
         }
         this.loading.hide();
      }, err => {
         this.iniciado = true;
         this.errorHandler.handle(err);
      });
   }

   protected afterRetrieveData() { }

   salvar(validar?: boolean) {
      this.message = null;
      if (validar == undefined || validar == true) {
         this.checkCustomErrors();
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
      }
      this.loading.show();
      this.beforeSave();
      this.httpService.saveUpdate(this.entidade).subscribe((responseApi: ResponseApi) => {
         if (this.afterSave(responseApi)) {
            LOGGER.log('saveUpdate', responseApi);
         } else {
            this.loading.hide();
            this.cancelar();
            this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} salvo com sucesso!`);
         }
      }, err => {
         this.errorHandler.handle(err);
      });
   }

   protected checkCustomErrors() { };
   protected validateForm(): Boolean { return true };
   protected beforeSave() { }
   protected afterSave(response: ResponseApi): Boolean { return false };
   protected afterExclusao(entidade: any) { };

   excluir() {
      this.message = null;
      this.dialog.confirmDelete('Deseja excluir este registro ?')
         .then((candelete: boolean) => {
            this.loading.show();
            if (candelete) {
               const registro = this.entidade.numero;
               this.httpService.delete(this.entidade.id).subscribe((responseApi: ResponseApi) => {
                  this.afterExclusao(this.entidade);
                  this.loading.hide();
                  this.cancelar();
                  this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} excluído com sucesso!`);
               }, err => {
                  this.errorHandler.handle(err);
               });
            } else {
               this.loading.hide();
            }
         });
   }

   cancelar() {
      this.message = null;
      //this.form.resetForm(this.entidade);
      Object.keys(this.form.controls).forEach(key => {
         this.form.controls[key].markAsPristine();
      });
      this.voltar();
   }

   showMessage(message: IAlert) {
      this.message = message;
      this.dialog.showMessage(message);
   }

   get editando() {
      return !this.consultando && Boolean(this.entidade && this.entidade.id);
   }

   get inserindo() {
      return !this.consultando && Boolean(this.entidade && this.entidade.id == null);
   }

   get podeVoltar() {
      return !this.editando && Boolean(this.form.pristine);
   }

   get formDirty() {
      return this.form && this.form.dirty;
   }

   get formInvalid() {
      return this.form && this.form.invalid;
   }

   voltar() {
      this.router.navigate([this.rota], { skipLocationChange: true });
   }

   protected desabilita(sim: boolean) {
      if (sim == true) {
         Object.keys(this.form.controls).forEach(key => {
            //console.log(this.form.controls[key]);
            this.form.controls[key].disable();
         });
      }
   }

   clienteSistema() {
      return this.shared.clienteSelecionado.cliente.segmento.identificacao == 'SISTEMA'
   }

   mostraObservador() {
      if (this.shared.clienteSelecionado != null &&
         this.shared.clienteSelecionado.sistemaAtributo != null &&
         this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["MOSTRAR_OBSERVADOR_NO_CONTRATO"])) {
         return true;
      } else {
         return false;
      }
   }

   classUpperCase() {
      return this.shared.classUpperCase;
   }

   perfilUsuarioAdmin(){
      return this.shared.usuario.perfil==PerfilEnum.ROLE_ADMIN
    }
  

}
