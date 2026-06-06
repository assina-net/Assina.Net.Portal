import { Injectable } from "@angular/core";

export interface menuPrefs {
   color: string;
   image: string;
   display: string;
   compact: string;
   direction: string;
}

@Injectable()
export class TemplateService {

   private userPrefs: menuPrefs;

   constructor() {
      this.userPrefs = {color: 'black', image: `assets/img/sidebar-bg/01.jpg`, display: 'block', compact: 'false', direction: 'ltr'};
   }

   getMenuPrefs(){
      const color = localStorage.getItem('sisweb-menu-color');
      const image = localStorage.getItem('sisweb-menu-image');
      const display = localStorage.getItem('sisweb-menu-image-display');
      const compact = localStorage.getItem('sisweb-menu-compact');
      const direction = localStorage.getItem('sisweb-menu-direction');
      if (color) {
         this.userPrefs = {color, image, display, compact, direction};
      } else {
         this.setMenuPrefs(this.userPrefs);
      }
      return this.userPrefs;
   }

   setMenuPrefs(prefs: menuPrefs){
      localStorage.setItem('sisweb-menu-color', prefs.color);
      localStorage.setItem('sisweb-menu-image', prefs.image);
      localStorage.setItem('sisweb-menu-image-display', prefs.display);
      localStorage.setItem('sisweb-menu-compact', prefs.compact);
      localStorage.setItem('sisweb-menu-direction', prefs.direction);
   }

}
