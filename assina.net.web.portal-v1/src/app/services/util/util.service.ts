import { Injectable, isDevMode } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppInjector } from 'app/services/util/app-injector.service';

@Injectable({
   providedIn: 'root'
})
export class UtilService {

   protected loading: NgxSpinnerService;

   constructor() {
      const injector = AppInjector.getInjector();
      this.loading = injector.get(NgxSpinnerService);
    }

   enumToKeyValue(pEnum: any, filter?: boolean) {
      const keyValue = [];
      let keys = null;
      if (filter !== undefined && filter == true) {
         keys = pEnum.values();
      } else {
         keys = Object.keys(pEnum)
            .filter(f => !isNaN(Number(f)))
            .map(k => parseInt(k));
      }
      for (const k of keys) {
         let value = pEnum[k] == undefined ? k : pEnum[k];
         keyValue.push({ key: k, value: value, label: pEnum.label(k) });
      }

      return keyValue;
   }

   byteArrayToBase64(bytes) {
      return btoa(bytes.map((item) => String.fromCharCode(item)).join(""));
   }

   download(item) {
      let byte = item.anexo64;
      let bytechars = atob(byte);
      let byteNumbers = new Array(bytechars.length);
      for (let i = 0; i < bytechars.length; i++) {
         byteNumbers[i] = bytechars.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray]);

      var fileName = item.nomeArquivo;
      if (navigator && navigator.msSaveBlob) {
         window.navigator.msSaveBlob(blob, fileName);
      } else {
         var link = document.createElement('a');
         let url = URL.createObjectURL(blob);
         link.setAttribute("href", url);
         link.setAttribute("download", fileName);
         link.style.visibility = "hidden";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      }
   }

   downloadFile(blob, fileName) {
      // let blob = new Blob([byteArray], { type: "application/octet-stream" });
      if (navigator && navigator.msSaveBlob) {
         window.navigator.msSaveBlob(blob, fileName);
      } else {
         var link = document.createElement('a');
         let url = URL.createObjectURL(blob);
         link.setAttribute("href", url);
         link.setAttribute("download", fileName);
         link.style.visibility = "hidden";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      }
   }

   downloadPdf(byteArray, fileName) {
      let blob = new Blob([byteArray], { type: "application/pdf" });
      if (navigator && navigator.msSaveBlob) {
         window.navigator.msSaveBlob(blob, fileName);
      } else {
         var link = document.createElement('a');
         let url = URL.createObjectURL(blob);
         link.setAttribute("href", url);
         link.setAttribute("download", fileName);
         link.style.visibility = "hidden";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      }
   }

   openPdf(bytes) {
      const byteCharacters = atob(bytes);
      let byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      window.open().location.href = window.URL.createObjectURL(new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' }));
   }

   openXml(xml) {
      window.open().location.href = window.URL.createObjectURL(new Blob([xml], { type: 'text/xml' }));
   }

   showHidePassword(id) {
      const input = `#${id} input`;
      const icon = `#${id} i`;
      if ($(input).attr("type") == "text") {
         $(input).attr('type', 'password');
      } else if ($(input).attr("type") == "password") {
         $(input).attr('type', 'text');
      }
      $(icon).toggleClass("fa-eye fa-eye-slash");
   }

   dateStructToDate(data: NgbDateStruct) {
      const dataStr = data.month + "/" + data.day + "/" + data.year;
      return new Date(dataStr);
   }

   static setAsTouched(group: FormGroup | FormArray) {
      group.markAsTouched();
      for (let i in group.controls) {
         if (group.controls[i] instanceof FormControl) {
            group.controls[i].markAsTouched();
            group.controls[i].markAsDirty();
            if (isDevMode()) {
               if (group.controls[i].invalid) {
                  console.log(i, group.controls[i]);
               }
            }
         } else {
            this.setAsTouched(group.controls[i]);
         }
      }
   }

   static setAsDisabled(group: FormGroup | FormArray) {
      for (let i in group.controls) {
         if (group.controls[i] instanceof FormControl) {
            group.controls[i].disable();
         } else {
            this.setAsDisabled(group.controls[i]);
         }
      }
   }

   static setProgress(option: boolean) {
      if (option) {
         document.getElementsByTagName("body")[0].classList.remove('content-loading');
         document.getElementsByTagName("body")[0].classList.add('progress-loading');
      } else {
         document.getElementsByTagName("body")[0].classList.remove('progress-loading');
         document.getElementsByTagName("body")[0].classList.add('content-loading');
      }
   }

   static getLocalISOTime(): string {
      var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
      return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -8);
   }

   static copyText(val: string) {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
   }

   getFile(file: File, fileSize?: number) {
      //if (!fileSize) fileSize = 2 ** 21 * 5; //(10MB)
      if (!fileSize) fileSize = 2 ** 21 * 25; //(50MB) Bonatte - 2021-03-18
      let size = fileSize / 1024 / 1024;
      if (file.size > fileSize) {
         return Promise.reject(`Tamanho do arquivo não pode exceder ${size}MB`);
      }
      let reader = new FileReader();
      

      return new Promise((resolve, reject) => {
         reader.onerror = () => {
            reader.abort();
            reject("Erro ao pegar Arquivo");
         };
         //this.loading.show();
         reader.onloadstart = () => {
            //alert(`iniciando o upload do arquivo ${file.name}`);
            this.loading.show();
         };
         reader.onloadend = () => {
            //alert(`finalizando o upload do arquivo ${file.name}`);
            this.loading.hide();
         };
         reader.onprogress = () => {
            //ver como faz..
         }

         reader.onload = function () {
            //TRansforma em Byte
            // @ts-ignore
            let bytes = Array.from(new Uint8Array(this.result));

            // Transforma em Base64
            let base64StringFile = btoa(bytes.map((item: number) => String.fromCharCode(item)).join(""));

            resolve({
               bytes: bytes,
               base64StringFile: base64StringFile,
               fileName: file.name,
               fileType: file.type
            });
         };
         reader.readAsArrayBuffer(file);

      });
   }

   booleanValue(value) {
      // if (value == undefined) {
      //    return false;
      // }

      if (value == "true" || value == true)
         return true;
      else {
         return false;
      }
   }

   
   preencheCombos(dados: any[]) {
      let list = [];
      dados.forEach(value => {
         var item: {};
         if (value.id == null) {
            item = { item_id: value.value, item_text: value.label };
         } else {
            item = { item_id: value.id, item_text: value.label };
         }
         list.push(item);
      });
      return list;
   }

   carregaAnimaJS(){
      const animeFile = `../assets/js/anime.min.js`;
      const slippryFile = `../assets/js/slippry.min.js`;
      const loginFile = `../assets/js/login.js`;

      const filesToLoad = [animeFile, slippryFile, loginFile];

      let sequence: Promise<any> = Promise.resolve();
      filesToLoad.forEach((file: string) => {
          sequence = sequence.then(() => {
            return this.loadScript(file);
          });
        });

   }
   
   /**
     * Loads a script and adds it to the head.
     * @param fileName
     * @returns a Promise that will resolve with the file name
     */
  loadScript(fileName: string): Promise<any> {
   return new Promise(resolve => {
     //console.log('Zone: Loading file... ' + fileName);
     const script = document.createElement('script');
     script.src = fileName;
     script.type = 'text/javascript';
     script.onload = () => {
       //console.log('\tDone');
       resolve(fileName);
     };
     document.getElementsByTagName('head')[0].appendChild(script);
   });
 }

}
