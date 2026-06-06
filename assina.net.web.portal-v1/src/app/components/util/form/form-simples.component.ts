import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppInjector } from "../../../services/util/app-injector.service";
import { SharedService } from "../../../services/util/shared.service";

declare var $: any;
@Component({
   selector: 'app-form-simples',
   template: `
   <section id="principal" *ngIf="!modal">
      <div class="row ">
      <div class="text-center col-sm-12">
            <div class="content-header primary col-sm-12 text-center px-md-5" style=" border-bottom:1px solid #34b563; padding:20px 0 10px;">{{titulo}}</div>
            <!--<p class="content-sub-header col-sm-10"><a data-action="close" (click)="home()" title="Página inicial">
               </a>{{navegacao}}</p>-->


         </div>
      </div>

      <div class="content-form row text-left">
         <!--Tabset Starts-->
         <div class="content-body col-md-12 col-lg-12">
            <div class="card">
               <div class="card-body">
                  <div class="card-block">
                     <ng-container *ngTemplateOutlet="content"></ng-container>
                  </div>
               </div>
            </div>
         </div>
         <!--Tabset Ends-->
      </div>
   </section>
   <div *ngIf="modal">
      <div class="modal-header">
         <h5 class="modal-title">{{titulo}}</h5>
      </div>
      <div class="content-form row text-left">
         <!--Tabset Starts-->
         <div class="content-body col-md-12 col-lg-12">
            <div class="card">
               <div class="card-body">
                  <div class="card-block">
                     <ng-container *ngTemplateOutlet="content"></ng-container>
                  </div>
               </div>
            </div>
         </div>
         <!--Tabset Ends-->
      </div>
      <!--
      <div class="modal-body" style="padding:0 1rem;">
         <ng-container *ngTemplateOutlet="content"></ng-container>
      </div>
      -->
   </div>

   <ng-template #content>
      <ng-content></ng-content>
   </ng-template>

   `,
   styleUrls: []
})
export class FormSimplesComponent {


   @Input('titulo') titulo: string;
   @Input('navegacao') navegacao: string;
   @Input('rota') rota: string;
   @Input() modal?: boolean = false;

   constructor(protected router: Router,
      protected shared: SharedService) {

   }

   expand() {
      if (this.modal == undefined || !this.modal) {
         $('a[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
         $('.main-panel').toggleClass('card-fullscreen panel-min');
         $('.content-wrapper').toggleClass('card-fullscreen');
      }
   }

   home() {
      if (this.modal == undefined || !this.modal) {
         if ($('.main-panel').hasClass('card-fullscreen')) {
            $('.main-panel').removeClass('card-fullscreen');
            $('.main-panel').addClass('panel-min');
            $('.content-wrapper').removeClass('card-fullscreen');
         }
         this.router.navigate([this.rota ? this.rota : '/']);
      }
   }

   classUpperCase() {
      return this.shared.classUpperCase;
   }



}
