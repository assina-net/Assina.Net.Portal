import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
   selector: 'app-message',
   template: `
    <small class="form-text text-muted danger" *ngIf="temErro()">
      {{text}}
    </small>
  `,
   styles: []
})
export class MessageComponent {

   @Input() control: FormControl;
   @Input() error: string;
   @Input() text: string;
   @Input() touched: boolean;

   temErro() {
      if (this.touched) {
         return this.control.hasError(this.error) && this.control.touched;
      } else {
         return this.control.hasError(this.error) && this.control.dirty;
      }
   }

}
