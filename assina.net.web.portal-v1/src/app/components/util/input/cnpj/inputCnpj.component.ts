import { ControlValueAccessor, NG_VALUE_ACCESSOR,  FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, forwardRef, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { isCNPJ } from 'brazilian-values';

@Component({
     selector: 'input-cnpj',
     template: ` <input type="text" [(ngModel)]="value" class="form-control"
                      placeholder="Informe"      [required]="required"
                      id="cnpj"
                      maxlength="18"    mask="00.000.000/0000-00"
                     (change)="cnpjChange()" #cnpj="ngModel"  >
               <small class="form-text text-muted danger"
                    *ngIf="cnpj.errors?.required && (cnpj.dirty || cnpj.touched)">Informe o CNPJ.
               </small>
               <small class="form-text text-muted danger"
                    *ngIf="cnpjInvalido && (cnpj.dirty || cnpj.touched)">CNPJ inválido
               </small>`,
     styles: [],
     providers: [
          {
               provide: NG_VALUE_ACCESSOR,
               useExisting: forwardRef(() => InputCnpjComponent),
               multi: true
          }
     ]
})
export class InputCnpjComponent implements ControlValueAccessor {


     @ViewChild('cnpj', { static: true, read: ElementRef })
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
     private _required: any = true;
     @Input()
     get required(): Boolean { return this._required; }
     set required(value: Boolean) { this._required = value; }

     //fim implementações do ngModel



     cnpjInvalido: boolean
     @Output() public cnpjChangeEvent: EventEmitter<any> = new EventEmitter();

     cnpjChange() {
          if (this.validarCNPJ()) {
               this.cnpjChangeEvent.emit(this.value);
          }
     }

     validarCNPJ() {
          if (!isCNPJ(this.val)) {
               //this.cpf.setErrors({cpfInvalido:true})
               this.cnpjInvalido = true;
               return false;
          } else {
               // this.cpf.setErrors({cpfInvalido:false})
               this.cnpjInvalido = false;
               return true;
          }
     }

}

