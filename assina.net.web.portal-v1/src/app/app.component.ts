import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { NgSelectConfig } from "@ng-select/ng-select";
import { Globals } from './globals';
import {environment} from 'environments/environment';


declare let gtag: Function


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   public esconder = false;

   //Locale Select
   constructor(private config: NgSelectConfig, private globals: Globals, public router: Router) {
      this.config.placeholder = "selecione";
      this.config.notFoundText = "Item não encontrado";
      this.config.typeToSearchText = "Digite para pesquisar";
      this.config.loadingText = "Carregando...";
      this.config.clearAllText = "Limpar"
        
       this.router.events.subscribe(event => {
         const script = document.createElement('script');
         script.async = true;
         script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.CODE_GOOGLE_ANALYTICS;
         document.head.prepend(script);
         if (event instanceof NavigationEnd) {
             window['ga-disable-' + environment.CODE_GOOGLE_ANALYTICS] = environment.LOCK_GOOGLE_ANALYTICS;
             gtag('config', environment.CODE_GOOGLE_ANALYTICS, 
                 {
                     'page_path': event.urlAfterRedirects
                 }
             )
         }
     })

   }

   get fileProgress() {
      return this.globals.progress;
   }

}
