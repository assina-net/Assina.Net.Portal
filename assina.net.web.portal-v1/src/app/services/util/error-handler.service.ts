import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ResponseApi } from "app/model/util/response-api";
import { NgxSpinnerService } from "ngx-spinner";
import { isNullOrUndefined } from "util";
import { DialogService } from "./dialog.service";
import { SharedService } from "./shared.service";

@Injectable()
export class ErrorHandlerService {

   constructor(
      private dialog: DialogService,
      private loading: NgxSpinnerService,
      private router: Router,
   ) { }

   handle(errorResponse: any) {
      this.loading.hide();

      if (this.deveIgnorarErroSessaoExpirada(errorResponse)) {
         return;
      }

      let msg: string;
      let erro: ResponseApi = errorResponse['error'];
      if (erro && !isNullOrUndefined(erro.errors)) {
         const total = erro.errors.length - 1;
         if (erro.errors[total] == null) {
            msg = "Erro não tratado. Contate o responsável pelo sistema.";
         } else {
            msg = erro.errors[total].slice(0, 500);
            for (let i = 0; i < total; i++) {
               this.dialog.error(erro.errors[i].slice(0, 500));
            }
         }
      } else if (errorResponse instanceof HttpErrorResponse) {
         msg = 'Ocorreu um erro ao processar a sua solicitação.<br/>';
         if (errorResponse.error instanceof ErrorEvent) {
            // client-side error
            msg += `Erro: ${errorResponse.error.message}`;
         } else {
            // server-side error
            const status = errorResponse.status;
            if (status == 404) {
               msg += '<span class="yellow">Recurso ou método não disponível!</span>';
            } else {
               msg += `Código erro: ${errorResponse.status}<br/>Mensagem: ${errorResponse.message.slice(0, 500)}`;
            }
            console.error('Ocorreu um erro', errorResponse);
         }
      } else {
         msg = `Erro ao processar serviço remoto. `;
         msg += `Tente novamente`;

         console.error('Ocorreu um erro', errorResponse);
      }

      this.dialog.error(msg);
   }

   private deveIgnorarErroSessaoExpirada(errorResponse: any) {
      if (!(errorResponse instanceof HttpErrorResponse) || errorResponse.status !== 401) {
         return false;
      }

      const shared = SharedService.getInstance();
      return shared.sessaoExpirada || this.router.url.indexOf('/login') >= 0;
   }

}
