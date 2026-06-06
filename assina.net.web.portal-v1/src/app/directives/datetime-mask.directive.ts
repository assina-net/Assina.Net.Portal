import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
   selector: '[appDatetimeMask]'
})
export class DatetimeMaskDirective implements AfterViewInit {

   @Input() options?: { inputFormat?: string, displayFormat?: string, outputFormat?: string };

   constructor(private el: ElementRef) {
   }

   ngAfterViewInit() {
      if (this.el.nativeElement.type !== 'datetime-local') {
         // if (this.el.nativeElement.readonly || this.el.nativeElement.disabled) {
         //    const value = this.el.nativeElement.value;
         //    this.el.nativeElement.value = new Date(value).toLocaleString();
         //    return;
         // }
         new Inputmask(
            {
               alias: 'datetime',
               clearIncomplete: false,
               autoUnmask: true,
               tabThrough: false,
               shiftPositions: false,
               undoOnEscape: false,
               primeiraVez: true,
               placeholder: 'dd/mm/yyyy --:--',
               inputFormat: this.options && this.options.inputFormat ? this.options.inputFormat : 'dd/mm/yyyy HH:MM',
               outputFormat: this.options && this.options.outputFormat ? this.options.outputFormat : 'yyyy-mm-ddTHH:MM',
               onUnMask: function (maskedValue, unmaskedValue) {
                  var isValid = new RegExp(this.opts.regex).test(this.maskset.buffer.join(''));
                  if (!isValid) {
                     return '';
                  }
                  let hora = maskedValue.slice(-5);
                  let data = maskedValue.slice(0, 10).split('/').reverse().join('-');
                  data += 'T' + hora;
                  return data;
               },
               onBeforeMask: function (value, opts) {
                  if (value && opts.primeiraVez == true) {
                     opts.primeiraVez = false;
                     value = new Date(value).toLocaleString();
                  }
                  return value;
               }
            }
         ).mask(this.el.nativeElement);
      }
   }

}
