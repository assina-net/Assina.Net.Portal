import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SharedService } from 'app/services/util/shared.service';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class RoleGuard implements CanActivate {

   public shared: SharedService;

   constructor(private router: Router) {
      this.shared = SharedService.getInstance();
   }

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.shared.podeNavegar(next.data.menuId)) {
         return true;
      }

      this.router.navigate(['/']);
      return false;
   }

}
