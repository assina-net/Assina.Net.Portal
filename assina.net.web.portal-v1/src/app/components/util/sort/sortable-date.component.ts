import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-sortable-date',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SortableDateComponent),
            multi: true
        }
    ],
    template: `
        <a [sortable-column]="name">
            <ng-content></ng-content>
        </a>
        <input type="date" [(ngModel)]="value" [name]="name" class="form-control" upperCase
               [id]="name" placeholder="Pesquisar..." (ngModelChange)="modelChange()">
    `,
    styles: []
})
export class SortableDateComponent implements ControlValueAccessor {

    @Input() name: string;
    @Input('value') val: string;
    @Input() currency?: boolean;
    @Output('modelChange') filtrando = new EventEmitter<any>();

    get value() {
        return this.val;
    }

    set value(val) {
        this.val = val;
        this.onChange(val);
        this.onTouched();
    }

    onChange: any = () => {
    };

    onTouched: any = () => {
    };

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
