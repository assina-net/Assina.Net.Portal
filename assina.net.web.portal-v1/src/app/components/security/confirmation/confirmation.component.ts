import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
   template: `
   <div class="alert-box">
      <div class="modal-header">
         <h4 class="modal-title">Atenção!!!</h4>
      </div>
      <div class="modal-body">
         Existem informações não salvas. Deseja prosseguir?
      </div>
      <div class="modal-footer">
         <button type="button" class="btn btn-raised btn-secondary" (click)="onCancel()"> Não </button>
         <button type="button" class="btn btn-raised btn-danger mr-1" (click)="onConfirm()"> Sim </button>
      </div>
   </div>
   `
})
export class ConfirmationComponent {

   constructor(public activeModal: NgbActiveModal) { }

   public onConfirm(): void {
      this.activeModal.close(true);
   }

   public onCancel(): void {
      this.activeModal.close(false);
   }

}
