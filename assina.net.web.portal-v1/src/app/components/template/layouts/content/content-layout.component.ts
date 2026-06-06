import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-content-layout',
   template: `
    <div class="wrapper" *ngIf="esconder">
      <div class="content-wrapper">
         <div class="container-fluid">
            <router-outlet></router-outlet>
         </div>
      </div>
    </div>
    <router-outlet *ngIf="!esconder"></router-outlet>
    `,
   styleUrls: ['./content-layout.component.scss']
})

export class ContentLayoutComponent {

   public esconder: boolean;

}
