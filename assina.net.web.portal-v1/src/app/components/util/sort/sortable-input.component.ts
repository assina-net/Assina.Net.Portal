import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'app-sortable-input',
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => SortableInputComponent),
         multi: true
      }
   ],
   template: `
   <a [sortable-column]="sortColumn" [sort-direction]="sort" *ngIf="hasSort">
      <ng-content></ng-content>
   </a>
   <div *ngIf="currency; else falsyTemplate">
       <input type="tel" [(ngModel)]="value" [name]="name" class="form-control" appNumericMask
              [id]="name" placeholder="Pesquisar..." (ngModelChange)="modelChange()">
   </div>
   <ng-template #falsyTemplate>
       <input type="text" [(ngModel)]="value" [name]="name" class="form-control" upperCase
          [id]="name" placeholder="Pesquisar..." (ngModelChange)="modelChange()">
   </ng-template>
   `,
   styles: []
})
export class SortableInputComponent implements ControlValueAccessor {

   @Input() column: string = null;
   @Input() name: string;
   @Input() sort: string = null;
   @Input('value') val: string;
   @Input() currency?: boolean;
   @Input() hasSort?: boolean = true;
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
