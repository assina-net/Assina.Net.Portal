import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'app/services/util/shared.service';

declare var $: any;

@Component({
   selector: 'app-customizer',
   templateUrl: './customizer.component.html',
   styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

   options = {
      direction: 'ltr'
   };

   @Output() directionEvent = new EventEmitter<Object>();

   constructor(private shared: SharedService) {
      this.shared = SharedService.getInstance();
      this.options.direction = this.shared.prefs.direction;
   }

   ngOnInit() {
      // Customizer JS File
      $.getScript('./assets/js/customizer.js');
   }

   sendOptions() {
      this.directionEvent.emit(this.options);
   }

}
