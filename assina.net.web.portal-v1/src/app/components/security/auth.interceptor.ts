import { Injectable } from '@angular/core';
import { SharedService } from '../../services/util/shared.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogService } from 'app/services/util/dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   shared: SharedService;
   private expirandoSessao = false;

   constructor(
      private router: Router,
      private dialog: DialogService,
      private loading: NgxSpinnerService,
      private modalService: NgbModal
   ) {
      this.shared = SharedService.getInstance();
   }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authRequest: any;
      if (this.shared.isLoggedIn()) {
         authRequest = req.clone({
            setHeaders: {
               'Authorization': this.shared.token
            }
         });
         return this.trataRetorno(next.handle(authRequest), req);
      } else {
         return this.trataRetorno(next.handle(req), req);
      }
   }

   private trataRetorno(response: Observable<HttpEvent<any>>, req: HttpRequest<any>): Observable<HttpEvent<any>> {
      return response.pipe(
         catchError((error: HttpErrorResponse) => {
            if (this.sessaoExpirada(error, req)) {
               this.encerrarSessaoExpirada();
               return EMPTY;
            }

            return throwError(error);
         })
      );
   }

   private sessaoExpirada(error: HttpErrorResponse, req: HttpRequest<any>) {
      return error.status === 401
         && !this.requisicaoLogin(req)
         && (this.shared.isLoggedIn() || Boolean(this.shared.token));
   }

   private requisicaoLogin(req: HttpRequest<any>) {
      return req.url.indexOf('/v1/auth') >= 0;
   }

   private encerrarSessaoExpirada() {
      this.loading.hide();

      if (!this.expirandoSessao) {
         this.expirandoSessao = true;
         this.shared.sessaoExpirada = true;
         this.fecharJanelasAbertas();
         this.shared.logout();
         this.dialog.dismiss();
         this.dialog.warning('Sua sessão expirou. Faça login novamente.');
         this.router.navigate(['/login']).then(() => this.expirandoSessao = false);
      }
   }

   private fecharJanelasAbertas() {
      this.modalService.dismissAll();
      document.body.classList.remove('modal-open');
      Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop'), (backdrop: HTMLElement) => {
         if (backdrop.parentNode) {
            backdrop.parentNode.removeChild(backdrop);
         }
      });
   }
}
