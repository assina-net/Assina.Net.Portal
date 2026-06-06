import { Component, Input, OnInit } from '@angular/core';
import { ValuesPipe } from '../pipe/valuesPipe';

@Component({
  selector: 'app-dynamic-table',
  template: `
    <div class="table-wrapper-scroll-x mb-0">
      <table class="table table-hover mb-0" *ngIf="true">
        <thead class="thead-light">
            <tr>
              <th class="p-1" *ngFor="let c of cols; let i = index" [ngClass]="{'sw-min-width': i==0, 'sw-display-none': !showButtons && i==0}">
                {{c}}
              </th>
            </tr>
        </thead>
        <tbody [ngStyle]="classUpperCase()" >
            <tr *ngFor="let reg of listagem">
              <td style="padding: 0" *ngIf="showButtons">
                  <button class="btn btn-warning btn-flat mb-0 p-1 mr-1" placement="top" ngbTooltip="Editar"
                    (click)="editar(reg)">
                    <i class="fa fa-edit font-medium-4"></i>
                  </button>
                  <button class="btn btn-danger btn-flat mb-0 p-1" placement="top" ngbTooltip="Excluir"
                    (click)="excluir(reg)">
                    <i class="fa fa-times-circle font-medium-4"></i>
                  </button>
              </td>
              <td style="padding: 0" class="p-1 valign-middle" *ngFor="let item of rows; let i = index">
                  <span>{{reg[item] | values:pipes[i]}}</span>
              </td>
            </tr>
        </tbody>
        <tr *ngIf="!listagem.length">
            <td [colSpan]="colspan">Nenhum registro encontrado</td>
        </tr>
      </table>
    </div>
  `,
  styles: ['.sw-min-width {min-width: 90px;} .sw-display-none {display: none;}'],
  providers: [ValuesPipe],
})
export class DynamicTableComponent implements OnInit {

  private _colspan: number;
  private _cols = [];
  private _rows = [];
  private _pipes = [];
  private _listagem = [];
  private _showButtons: boolean;

  constructor() { }

  ngOnInit() {
  }

  @Input('cols')
  set cols(value: string[]) {
    this._cols = value;
    if (this._cols) {
      this._colspan = this._cols.length;
    }
  }

  get cols() {
    return this._cols;
  }

  @Input('rows')
  set rows(value: string[]) {
    this._rows = value;
  }

  get rows() {
    return this._rows;
  }

  @Input('pipes')
  set pipes(value: any[]) {
    this._pipes = value;
  }

  get pipes() {
    return this._pipes;
  }

  @Input('listagem')
  set listagem(value: any[]) {
    this._listagem = value;
  }

  get listagem() {
    return this._listagem;
  }

  @Input('showButtons')
  set showButtons(value: boolean) {
    this._showButtons = value;
  }

  get showButtons() {
    return this._showButtons;
  }

  get colspan() {
    return this._colspan;
  }

  incluir() {
    console.log('Chamou Incluir...');
  }

  editar(item) {
    console.log('Chamou editar...', item);
  }

  excluir(item) {
    console.log('Chamou excluir...', item);
    const index = this._listagem.indexOf(item, 0);
    if (index != -1) {
      this._listagem.splice(index, 1);
    }
  }

}
