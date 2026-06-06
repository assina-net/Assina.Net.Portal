import { Injectable, isDevMode } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class LOGGER {

   constructor() { }

   static log(...msg: any[]) {
      if (isDevMode()) {
         console.log('Log', msg);
      }
   }

   static error(...msg: any[]) {
      if (isDevMode()) {
         console.error('Erro', msg);
      }
   }

   static info(...msg: any[]) {
      if (isDevMode()) {
         console.info('Informação', msg);
      }
   }

   static warn(...msg: any[]) {
      if (isDevMode()) {
         console.warn('Aviso', msg);
      }
   }

}
