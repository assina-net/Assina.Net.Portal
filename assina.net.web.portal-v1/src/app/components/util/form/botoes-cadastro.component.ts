import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-botoes-cadastro',
   template: `

   <div class="crud-actions form-actions col-md-12 text-right clearfix modal-footer">
      <ng-content select="[inicio]" ></ng-content>
      <button *ngIf="!consultando" type="submit" 
         class="{{cssCustom}} btn btn-lg btn-raised btn-primary mr-1" >
         <!--<i class="fa fa-check"></i>--> {{labelSalvar}}
      </button>
      <button *ngIf="!podeVoltar && cancelarEvent.observers.length > 0" type="button" 
         class="{{cssCustom}} btn btn-lg btn-raised btn-grey mr-1" (click)="cancelar()">
      <!-- <i class="fa fa-ban"></i>--> {{labelCancelar}}
      </button>
      <button *ngIf="podeVoltar" type="button" 
         class="{{cssCustom}} btn btn-lg btn-raised btn-grey mr-1" (click)="voltar()">
      <!--<i class="fa fa-repeat"></i>--> {{labelVoltar}}
      </button>
      <button type="button" 
         class="{{cssCustom}} btn btn-lg btn-raised btn-danger mr-1" *ngIf="editando" (click)="excluir()">
      <!--<i class="fa fa-times"></i>--> Excluir
      </button>
      <ng-content select="[fim]" ></ng-content>
   </div>
   `,
   styles: []
})
export class BotoesCadastroComponent implements OnInit {

   @Input() podeVoltar: boolean;
   @Input() editando: boolean;
   @Input() consultando?: boolean = false;

   @Input() labelSalvar: string = "Salvar";
   @Input() labelVoltar: string = "Voltar";
   @Input() labelCancelar: string = "Cancelar";
   @Input() cssCustom: string = "";
   
   

   @Output() cancelarEvent: EventEmitter<any> = new EventEmitter();
   @Output() voltarEvent: EventEmitter<any> = new EventEmitter();
   @Output() excluirEvent: EventEmitter<any> = new EventEmitter();

   constructor() { }

   ngOnInit() {
   }

   cancelar() {
      this.cancelarEvent.emit();
   }

   voltar() {
      this.voltarEvent.emit();
   }

   excluir() {
      this.excluirEvent.emit();
   }

}
