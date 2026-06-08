import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
   selector: 'app-botoes-lista',
   template: `
   <div class="crud-actions btn-group-justified btn-group-raised">
      <ng-content select="[inicio]" ></ng-content>
      <button *ngIf="permiteIncluir" class="btn btn-raised btn-lg btn-primary mr-1" type="button" (click)="incluir()">
         <!--<i class="fa fa-plus"></i>-->Novo
      </button>
      <button *ngIf="permiteEditar"  class="btn btn-raised btn-lg btn-blue-as mr-1" type="button" (click)="editar()"
         [disabled]="selecionado">
        <!--<i class="fa fa-edit"></i>--> Editar
      </button>
      <button class="btn btn-raised btn-lg btn-danger mr-1" type="button" (click)="excluir()"
         [disabled]="selecionado" *ngIf="podeExcluir">
        <!--<i class="fa fa-times"></i>--> Excluir
      </button>
      <ng-content select="[fim]" ></ng-content>
   </div>
   `,
   styles: []
})
export class BotoesListaComponent implements OnInit {

   @Input() selecionado: boolean = false;
   @Input() permiteIncluir: boolean = true;
   @Input() permiteEditar: boolean = true;
   @Input() permiteExcluir: boolean = true;

   @Output() public incluirEvent: EventEmitter<any> = new EventEmitter();
   @Output() public editarEvent: EventEmitter<any> = new EventEmitter();
   @Output() public excluirEvent?: EventEmitter<any> = new EventEmitter();

   constructor() { }

   ngOnInit() {
   }

   incluir() {
      this.incluirEvent.emit();
   }

   editar() {
      this.editarEvent.emit();
   }

   excluir() {
      this.excluirEvent.emit();
   }

   get podeExcluir() {
      return (this.permiteExcluir == false) ? this.permiteExcluir : this.excluirEvent.observers.length > 0;
   }

}
