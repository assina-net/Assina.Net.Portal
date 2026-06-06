import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../../services/util/shared.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { menuPrefs } from '../../template.service';

const fireRefreshEventOnWindow = function () {
   const evt = document.createEvent('HTMLEvents');
   evt.initEvent('resize', true, false);
   window.dispatchEvent(evt);
};

declare var $: any;
@Component({
   selector: 'app-full-layout',
   template: `
   <div class="wrapper" [dir]="options.direction">
   <div class="app-sidebar" data-active-color="blue" data-background-color="blue" >
         <app-sidebar #sidebar></app-sidebar>
         <!--<div class="sidebar-background"></div>-->
      </div>
      <app-navbar #navbar></app-navbar>
      <div class="main-panel panel-min" style="height: 0;">
         <div class="main-content" style="min-height: calc(100vh - 92px);">
               <div class="content-wrapper" style="padding:0 8px !important;">
                  <div class="container-fluid" style="padding:0 8px !important;">
                     <router-outlet></router-outlet>
                     <!--<img id="img-inicial" src="assets/img/tela-inicial.png" style="width:100%;"/>-->
                  </div>
               </div>
         </div>
         <app-footer></app-footer>
      </div>
      <app-customizer (directionEvent)="getOptions($event)"></app-customizer>
   </div>
   `,
   styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent implements OnInit {

   @ViewChild('sidebar',{static: false}) sidebar: SidebarComponent;
   @ViewChild('navbar',{static: false}) navbar: NavbarComponent;

   options = {
      direction: 'ltr'
   };

   menu: menuPrefs;
   shared: SharedService;

   constructor(
      private elementRef: ElementRef,
   ) {
      this.shared = SharedService.getInstance();
   }

   ngOnInit() {
       // sidebar toggle event listner
       this.elementRef.nativeElement.querySelector('#sidebarToggle')
           .addEventListener('click', this.onClick.bind(this));
       // customizer events
       this.elementRef.nativeElement.querySelector('#cz-compact-menu')
           .addEventListener('click', this.onClick.bind(this));
      //  this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
      //      .addEventListener('click', this.onClick.bind(this));

      this.menu = this.shared.prefs;
      this.options.direction = this.menu.direction;

      $('.app-sidebar').attr('data-background-color', this.menu.color);
      $('.app-sidebar').attr('data-image', this.menu.image);
      $('.app-sidebar').attr('data-display', this.menu.display);
      $('.app-sidebar').attr('data-compact', this.menu.compact);

      $('.cz-compact-menu').trigger('click');
   }

   onClick(event) {
       // initialize window resizer event on sidebar toggle click event
       setTimeout(() => { fireRefreshEventOnWindow() }, 300);

   }

   canDeactivate(): Promise<boolean> | boolean {
      return true;
   }

   getOptions($event): void {
      this.options = $event;
      const dir = this.options.direction;
      this.navbar.setPlacement(dir);
      this.shared.prefs.direction = dir;
      localStorage.setItem('sisweb-menu-direction', dir);
   }

   change(event) {
      this.sidebar.carregarAcessos();
      $('#sidebarLogo').trigger('click');
   }

}
