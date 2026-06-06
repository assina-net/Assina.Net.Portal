import { Injectable, Injector } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppInjector } from './app-injector.service';

@Injectable({
   providedIn: 'root'
})
export class ModalService {

   constructor(private ngbModal: NgbModal,
      private activeModal: NgbActiveModal) { }

   open<T, R>(
      content: any,
      config?: Partial<T>,
      options?: NgbModalOptions
   ): Observable<R> {
      const modal = this.ngbModal.open(
         content,
         { backdrop: 'static', ...options }
      );

      Object.assign(modal.componentInstance, config);

      return from(modal.result).pipe(
         catchError(error => {
            console.warn(error);
            return of(undefined);
         })
      );
   }

}
