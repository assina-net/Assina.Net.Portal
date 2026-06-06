import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'app-sortable-select',
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => SortableSelectComponent),
         multi: true
      }
   ],
   template: `
   <a [sortable-column]="sortColumn">
      <ng-content></ng-content>
   </a>
   <select class="form-control" [(ngModel)]="value" [id]="name" [name]="name"
      placeholder="Pesquisar..." (ngModelChange)="modelChange()">
      <option *ngFor="let opcao of opcoes" [value]="opcao.value">{{opcao.label}}</option>
   </select>
   `,
   styles: []
})
export class SortableSelectComponent implements ControlValueAccessor {

   @Input() column: string = null;
   @Input() name: string;
   @Input('value') val: string;
   @Input() opcoes: any;
   @Output('modelChange') filtrando = new EventEmitter<any>();

   onChange: any = () => { };
   onTouched: any = () => { };

   get value() {
      return this.val;
   }

   set value(val) {
      this.val = val;
      this.onChange(val);
      this.onTouched();
   }

   get sortColumn() {
      return this.column ? this.column : this.name;
   }

   registerOnChange(fn) {
      this.onChange = fn;
   }

   registerOnTouched(fn) {
      this.onTouched = fn;
   }

   writeValue(value) {
      //if (value) {
      this.value = value;
      //}
   }

   modelChange() {
      return this.filtrando.emit();
   }

}
