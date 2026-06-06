import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { SharedService } from 'app/services/util/shared.service';
import { AppInjector } from 'app/services/util/app-injector.service';

export interface ComponentCanDeactivate {
   canDeactivate: () => boolean | Promise<boolean>;
}

@Injectable()
export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {

   protected shared: SharedService;

   constructor(private modalService: NgbModal) {
      const injector = AppInjector.getInjector();
      this.shared = injector.get(SharedService);

   };

   canDeactivate(component: ComponentCanDeactivate): boolean | Promise<boolean> {
      return ( component.canDeactivate() || this.shared.usuario == null) ? true : this.openConfirmDialog();
   }

   openConfirmDialog() {
      return this.modalService.open(
         ConfirmationComponent, {backdrop: 'static', centered: true, keyboard: false}
      ).result;
   }

}
