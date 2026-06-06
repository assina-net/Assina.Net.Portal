import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/security/auth.guard';
import { PendingChangesGuard } from './components/security/changes.guard';
import { ContentLayoutComponent } from './components/template/layouts/content/content-layout.component';
import { FullLayoutComponent } from './components/template/layouts/full/full-layout.component';
import { CONTENT_ROUTES } from './components/template/routes/content-layout.routes';
import { FULL_ROUTES } from './components/template/routes/full-layout.routes';

const appRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   { path: '', component: FullLayoutComponent, data: { title: 'Full Views' }, children: FULL_ROUTES, canActivate: [AuthGuard], canDeactivate: [PendingChangesGuard] },
   { path: '', component: ContentLayoutComponent, data: { title: 'Content Views' }, children: CONTENT_ROUTES },
   { path: '**', redirectTo: '404' }
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', enableTracing: false, useHash: true })],
   exports: [RouterModule]
})

export class AppRoutingModule {

}
