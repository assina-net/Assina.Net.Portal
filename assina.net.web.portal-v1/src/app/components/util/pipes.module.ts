import { CommonModule, CurrencyPipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskPipe } from 'ngx-mask';
import { ENumAsStringPipe } from './pipe/enumPipe';
import { KeyValuePipe } from './pipe/keyValuePipe';
import { PhonePipe } from './pipe/phonePipe';
import { ValuesPipe } from './pipe/valuesPipe';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      KeyValuePipe,
      ValuesPipe,
      ENumAsStringPipe,
      PhonePipe,
   ],
   exports: [
      CommonModule,
      KeyValuePipe,
      ValuesPipe,
      ENumAsStringPipe,
      PhonePipe,
   ],
})
export class PipesModule {

   static forRoot() {
      return {
         ngModule: PipesModule,
         providers: [DecimalPipe, UpperCasePipe, MaskPipe],
      };
   }

}
