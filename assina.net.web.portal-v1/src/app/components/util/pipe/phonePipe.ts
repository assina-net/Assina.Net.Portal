import { Pipe, PipeTransform } from "@angular/core";
import { MaskPipe } from "ngx-mask";
import { Mascaras } from "../util.mascaras";

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

   constructor(private maskPipe: MaskPipe) { }

   transform(value: any, _args: any): any {
      if (value && value.length == 11) {
         return this.maskPipe.transform(value, Mascaras.TELEFONE2);
      }
      return this.maskPipe.transform(value, Mascaras.TELEFONE);
   }

}
