import { Component, Input, TemplateRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { IDadosLista } from 'app/components/padrao/novo/padrao-novo.component';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { UtilModule } from 'app/components/util/util.module';
import { DialogService } from "app/services/util/dialog.service";
import { SharedService } from 'app/services/util/shared.service';



@Component({
   selector: 'app-complete-tab-form',
   template: `
   <form class="form form-horizontal" autocomplete="off" novalidate>
      <div class="form-body">
         <h4 class="form-section mb-0 border-bottom-0" *ngIf="titulo || (showButtons && permiteIncluir)">
            <div>
               <span *ngIf="titulo">
                 <i class="fa fa-angle-double-right"></i>
                  <span>{{titulo}}</span>
                  <a class="btn btn-primary btn-flat ml-1 mr-2 mb-0 p-1" placement="top" ngbTooltip="Incluir"
                        (click)="incluir()" *ngIf="showButtons && permiteIncluir">
                        <i class="fa fa-plus-circle font-medium-5"></i>
                  </a>
               </span>
               <div class="btn-group btn-group-justified btn-group-raised" *ngIf="!titulo">
                  <button class="btn btn-raised btn-primary mr-2" type="button" (click)="incluir()" *ngIf="showButtons  && permiteIncluir">
                     <i class="fa fa-plus"></i> {{novoRegistro}}
                  </button>
               </div>
               <span class="badge badge-warning font-medium-3" *ngIf="isListagemVazia()">
                  Informe pelo menos um registro
               </span>
               <span class="badge badge-secondary" *ngIf="isListagemModificada()">
                  Clique em 'Salvar' para gravar as modificações
               </span>
            </div>
         </h4>
         <div class="table-responsive table-wrapper-scroll-x mb-0">
            <table class="table-style1 table mb-0" *ngIf="true">
               <thead class="thead-light">
                  <tr>
                     <th class="p-1" *ngFor="let c of cols; let i = index" [ngClass]="{'sw-fixed-width': i==0, 'sw-display-none': !showButtons && !permiteExibirDocumento && i==0}">
                        {{c}}
                     </th>
                  </tr>
               </thead>
               <tbody  [ngStyle]="classUpperCase()">
                  <tr *ngFor="let item of listagem; let i = index">
                     <td style="padding: 0" *ngIf="showButtons">

                     <a class="btn btn-danger btn-flat mb-0 p-1" placement="top" ngbTooltip="Excluir"
                           *ngIf="permiteExcluir"
                           (click)="excluir(item)">
                           <i class="fa fa-times-circle font-medium-4"></i>
                        </a>

                     <a class="btn btn-warning btn-flat mb-0 p-1 mr-1" placement="top" ngbTooltip="Editar"
                           *ngIf="permiteEditarItem(item)"
                           (click)="editar(item, i)">
                           <!--<i class="fa fa-edit font-medium-4"></i>-->
                           <img src="../../../assets/img/icones/lapis.png"/>
                        </a>



                        <a class="btn btn-info btn-flat mb-0 p-1" placement="top" ngbTooltip="Exibir Documento"
                          *ngIf="permiteExibirDocumento"
                          (click)="exibirDocumento(item)">
                          <!--<i class="fa fa-eye font-medium-4"></i>-->
                          <img src="../../../assets/img/icones/lupa.png"/>
                        </a>

                     </td>
                     <td style="padding: 0" *ngIf="!showButtons && permiteExibirDocumento">
                        <a class="btn btn-info btn-flat mb-0 p-1" placement="top" ngbTooltip="Exibir Documento"
                          *ngIf="permiteExibirDocumento"
                          (click)="exibirDocumento(item)">
                          <!--<i class="fa fa-eye font-medium-4"></i>-->
                          <img src="../../../assets/img/icones/lupa.png"/>
                        </a>
                     </td>

                     <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item  }">
                     </ng-container>
                  </tr>
               </tbody>
               <tr *ngIf="!listagem || listagem.length==0">
                  <td [colSpan]="colspan">Nenhum registro encontrado</td>
               </tr>
            </table>
         </div>
      </div>
      <app-confirm-dialog></app-confirm-dialog>
   </form>

  `,
   styles: [`
   .sw-fixed-width {width: 90px;min-width:90px;}
   .sw-display-none {display: none;}
  `],
   encapsulation: ViewEncapsulation.None,

})
export class CompleteTabFormComponent {

   @Input() titulo: string;
   @Input() tituloModal: string ;
   @Input() content: any;
   @Input() viewerDoc: any;
   @Input() required: boolean = false;
   @Input() itemTemplate: TemplateRef<any>;
   @Input() large: boolean = true;
   @Input() sizeExibir: any = 'lg';
   @Input()

   @Output('change') changeEvent = new EventEmitter<any>();
   @Output('permiteEditarItem') permiteEditarItemEvent = new EventEmitter<any>();


   private _dados: IDadosLista;
   private _colspan: number;
   private _dadosComplementares: {};

   private _cols = [];
   private _showButtons: boolean;
   private _permiteIncluir: boolean = true;
   private _permiteEditar: boolean = true;
   private _permiteExcluir: boolean = true;
   private _permiteExibirDocumento: boolean = false;

   private _bloqueiaEdicao: boolean = false;
   private _retornaListaCompleta: boolean = false;

   private _index: number;
   private _novoRegistro: string = "Novo Registro";
   private _mensagemExclusao: string = "Deseja excluir este item ?";



   constructor(private modalService: NgbModal,
      private dialog: DialogService,
      private shared: SharedService
   ) { }

   @Input('dados')
   set dados(dados: IDadosLista) {
      this._dados = dados;
   }

   get dados() {
      return this._dados;
   }

   @Input('dadosComplementares')
   set dadosComplementares(dadosComplementares: {}) {
      this._dadosComplementares = dadosComplementares;
   }

   get dadosComplementares() {
      return this._dadosComplementares;
   }

   get listagem() {
      return this._dados.listagem;
   }

   get modified() {
      return this._dados.dirty;
   }

   @Input('cols')
   set cols(value: string[]) {
      this._cols = value;
      if (this._cols) {
         this._colspan = this._cols.length + 1;
         if (!this.showButtons) {
            this._colspan--;
         }
      }
   }

   get cols() {
      return this._cols;
   }

   @Input('showButtons')
   set showButtons(value: boolean) {
      this._showButtons = value;
   }

   get showButtons() {
      return this._showButtons;
   }

   @Input('permiteIncluir')
   set permiteIncluir(value: boolean) {
      this._permiteIncluir = value;
   }

   get permiteIncluir() {
      return this._permiteIncluir;
   }

   @Input('permiteEditar')
   set permiteEditar(value: boolean) {
      this._permiteEditar = value;
   }

   get permiteEditar() {
      return this._permiteEditar;
   }

   @Input('permiteExcluir')
   set permiteExcluir(value: boolean) {
      this._permiteExcluir = value;
   }

   get permiteExcluir() {
      return this._permiteExcluir;
   }

   @Input('permiteExibirDocumento')
   set permiteExibirDocumento(value: boolean) {
      this._permiteExibirDocumento = value;
   }

   get permiteExibirDocumento() {
      return this._permiteExibirDocumento;
   }

   @Input('bloqueiaEdicao')
   set bloqueiaEdicao(value: boolean) {
      this._bloqueiaEdicao = value;
   }

   get bloqueiaEdicao() {
      return this._bloqueiaEdicao;
   }

   @Input('novoRegistro')
   set novoRegistro(value: string) {
      this._novoRegistro = value;
   }
   get novoRegistro() {
      return this._novoRegistro;
   }
   @Input('mensagemExclusao')
   set mensagemExclusao(value: string) {
      this._mensagemExclusao = value;
   }
   get mensagemExclusao() {
      return this._mensagemExclusao;
   }

   @Input('retornaListaCompleta')
   set retornaListaCompleta(value: boolean) {
      this._retornaListaCompleta = value;
   }
   get retornaListaCompleta() {
      return this._retornaListaCompleta;
   }


   get colspan() {
      return this._colspan;
   }

   incluir() {
      const modalRef = this.modalService.open(
         this.content, {
         backdrop: 'static', centered: true, keyboard: false, size: this.large ? 'lg' : null
      }
      );

      if (this._dadosComplementares) {
         modalRef.componentInstance.dadosComplementares = this._dadosComplementares;
      }

      if (this._retornaListaCompleta) {
         modalRef.componentInstance.instance = JSON.parse(JSON.stringify(this._dados.listagem));
      }

      modalRef.componentInstance.titulo = this.tituloModal;
      
      modalRef.result.then((result) => {
         if (result && result != 'close') {
            //console.log(result);
            if (result.status != undefined) {
               result.status = StatusEnum.booltoEnum(result.status);
            }

            this._dados.dirty = true;

            if (this._retornaListaCompleta && Array.isArray(result)) {
               this._dados.listagem = result;
            } else if (Array.isArray(result) && result.length > 0) {
                for (var i = 0, len = result.length; i < len; ++i) {
                  this._dados.listagem.push(result[i]);
               }
            } else {
               this._dados.listagem.push(result);
            }

            this.changeEvent.emit();
         }
      }).catch((result) => {
         console.log(result);
      });
   }

   editar(item, i) {
      this._index = i;
      const modalRef = this.modalService.open(
         this.content, {
         backdrop: 'static', centered: true, keyboard: false, size: this.large ? 'lg' : null
      }
      );

      modalRef.componentInstance.instance = JSON.parse(JSON.stringify(item));
      if (this._dadosComplementares) {
         modalRef.componentInstance.dadosComplementares = this._dadosComplementares;
      }

      modalRef.componentInstance.titulo = this.tituloModal;

      modalRef.result.then((result) => {
         if (result && result != 'close') {
            //console.log(result);
            if (result.status != undefined) {
               result.status = StatusEnum.booltoEnum(result.status);
            }

            this._dados.dirty = true;
            this._dados.listagem.splice(this._index, 1, result);

            this.changeEvent.emit();
         }
      }).catch((result) => {
         console.log(result);
      });
   }

   excluir(item) {
      const index = this._dados.listagem.indexOf(item, 0);
      if (index != -1) {
         this.dialog.confirmDelete(this.mensagemExclusao)
            .then((candelete: boolean) => {
               if (candelete) {
                  this._dados.dirty = true;
                  this._dados.listagem.splice(index, 1);
                  this.changeEvent.emit();
               }
            });

      }
   }


   exibirDocumento(item, i) {
      this._index = i;
      const modalRef = this.modalService.open(
         this.viewerDoc, {
         backdrop: 'static', centered: true, keyboard: false, size: this.sizeExibir
      }
      );
      modalRef.componentInstance.instance = JSON.parse(JSON.stringify(item));
      modalRef.result.then((result) => {
         if (result && result != 'close') {
            //console.log(result);
            if (result.status != undefined) {
               result.status = StatusEnum.booltoEnum(result.status);
            }

            this._dados.dirty = true;
            this._dados.listagem.splice(this._index, 1);
            this._dados.listagem.push(result);

            this.changeEvent.emit();
         }
      }).catch((result) => {
         console.log(result);
      });
   }

   isListagemVazia() {
      return this.required && this._showButtons &&
         (!this._dados || this._dados.listagem.length == 0);
   }

   isListagemModificada() {
      return this.modified;
   }

   permiteEditarItem(item) {

      if (item != undefined && item._permiteEditar != undefined) {
         return item._permiteEditar
      } else {
         return this._permiteEditar;
      }

   }

   classUpperCase() {
      return this.shared.classUpperCase;
   }

}
