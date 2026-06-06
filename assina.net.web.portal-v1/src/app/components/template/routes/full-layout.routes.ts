import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DesenvolvimentoComponent } from '../../desenvolvimento/desenvolvimento.component';

import { AuthGuard } from '../../security/auth.guard';

// Route for content layout with sidebar, navbar and footer
export const FULL_ROUTES: Routes = [
   {
      path: '',
      loadChildren: './components/cadastros/cadastros.module#CadastrosModule',
      canActivate: [AuthGuard],
   },
    {
      path: '',
      loadChildren: './components/assinar/assinar.module#AssinarModule',
      canActivate: [AuthGuard],
   },
   {
      path: '',
      loadChildren: './components/config/config.module#ConfigModule',
      canActivate: [AuthGuard],
   },
   {
      path: 'desenv',
      component: DesenvolvimentoComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
   },
];
