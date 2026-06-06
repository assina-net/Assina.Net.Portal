import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
   selector: '[appNumericMask]',
})
export class NumericMaskDirective implements OnInit {

   @Input() options: { prefix?: string, suffix?: string, digits?: number, allowMinus?: boolean };

   constructor(private el: ElementRef) {
   }

   ngOnInit() {
      if (this.options == undefined) this.options = {};
      new Inputmask(
         {
            alias: 'numeric',
            radixPoint: ',',
            inputType: 'number',
            autoUnmask: true,
            unmaskAsNumber: true,
            rightAlign: false,
            positionCaretOnClick: 'none',
            showMaskOnHover: false,
            showMaskOnFocus: false,
            undoOnEscape: false,
            nullable: true,
            digitsOptional: true,
            enforceDigitsOnBlur: false,
            allowMinus: this.options.allowMinus ? this.options.allowMinus : false,
            suffix: this.options.suffix ? this.options.suffix : '',
            prefix: this.options.prefix ? this.options.prefix : '',
            digits: this.options.digits ? this.options.digits : 2,
         }
      ).mask(this.el.nativeElement);
   }

}
