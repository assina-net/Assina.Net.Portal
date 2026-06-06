import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-page-layout',
   template: `
   <div class="row text-left">
      <div class="col-sm-12">
         <div class="content-header">{{titulo}}</div>
         <p class="content-sub-header"><a routerLink="/"><i class="fa fa-home"></i></a> {{navegacao}}</p>
      </div>
   </div>

   <div class="content-form row text-left">
      <div class="col-md-12 col-lg-12">
         <div class="card">
            <div class="card-body">
               <div class="card-block">
                  <router-outlet></router-outlet>
               </div>
            </div>
         </div>
      </div>
   </div>
   `,
   styleUrls: ['./page-layout.component.scss']
})

export class PageLayoutComponent {

   @Input('titulo') titulo: string;
   @Input('navegacao') navegacao: string;

}
