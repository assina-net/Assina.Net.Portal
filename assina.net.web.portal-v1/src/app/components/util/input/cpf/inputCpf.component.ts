import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, forwardRef, Renderer2, ElementRef, ViewChild } from '@angular/core';

import { isCPF } from 'brazilian-values';

@Component({
     selector: 'input-cpf',
     template: ` <input type="text" [(ngModel)]="value" class="form-control"
                      placeholder="Informe"      [required]="required"
                      id="cpf"
                      maxlength="14"    mask="000.000.000-00"
                     (change)="cpfChange()" #cpf="ngModel"  >
               <small class="form-text text-muted danger"
                    *ngIf="cpf.errors?.required && (cpf.dirty || cpf.touched)">Informe o CPF.
               </small>
               <small class="form-text text-muted danger"
                    *ngIf="cpfInvalido && (cpf.dirty || cpf.touched)">CPF inválido
               </small>`,
     styles: [],
     providers: [
          {
               provide: NG_VALUE_ACCESSOR,
               useExisting: forwardRef(() => InputCpfComponent),
               multi: true
          }
     ]
})
export class InputCpfComponent implements ControlValueAccessor {



     @ViewChild('cpf', { static: true, read: ElementRef })
     inputElementRef: ElementRef;

     constructor(private _renderer: Renderer2) { }


     //inicio implementações do ngModel
     onChange: any = () => { }
     onTouch: any = () => { }

     val = "" // this is the updated value that the class accesses
     set value(val) {  // this value is updated by programmatic changes
          if (val !== undefined && this.val !== val) {
               this.val = val
               this.onChange(val)
               this.onTouch(val)
          }
     }

     get value() {
          return this.val;
     }
     // this method sets the value programmatically
     writeValue(value: any) {
          this.value = value
     }
     // upon UI element value changes, this method gets triggered
     registerOnChange(fn: any) {
          this.onChange = fn
     }
     // upon touching the element, this method gets triggered
     registerOnTouched(fn: any) {
          this.onTouch = fn
     }

     setDisabledState(isDisabled: boolean): void {
          this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
     }

     //
     private _required: any;
     @Input()
     get required(): Boolean { return this._required; }
     set required(value: Boolean) { this._required = value; }


     //fim implementações do ngModel



     cpfInvalido: boolean
     @Output() public cpfChangeEvent: EventEmitter<any> = new EventEmitter();

     cpfChange() {
          if (this.validarCPF()) {
               this.cpfChangeEvent.emit(this.value);
          }
     }

     validarCPF() {
          if (!isCPF(this.val)) {
               //this.cpf.setErrors({cpfInvalido:true})
               this.cpfInvalido = true;
               return false;
          } else {
               // this.cpf.setErrors({cpfInvalido:false})
               this.cpfInvalido = false;
               return true;
          }
     }

}

