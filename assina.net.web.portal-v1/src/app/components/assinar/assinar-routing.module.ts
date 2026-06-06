import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from '../security/changes.guard';
import { RoleGuard } from '../security/role.guard';
import { ListaPendenteComponent } from './pendente/lista/lista-pendente.component';
import { DetalhePendenteComponent } from './pendente/detalhe/detalhe-pendente.component';
import { ListaVigenteComponent } from './vigente/lista/lista-vigente.component';
import { DetalheVigenteComponent } from './vigente/detalhe/detalhe-vigente.component';
import { ListaRecusadoComponent } from './recusado/lista/lista-recusado.component';
import { DetalheRecusadoComponent } from './recusado/detalhe/detalhe-recusado.component';

const routes: Routes = [
    {
        path: 'assinar',
        children: [
            {
                path: 'pendente',
                canActivate: [RoleGuard],
                data: { menuId: 80000100 },
                children: [
                    { path: 'detalhe', component: DetalhePendenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'detalhe/:id', component: DetalhePendenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo', component: DetalhePendenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: DetalhePendenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaPendenteComponent }
                ]
            },
            {
                path: 'vigente',
                canActivate: [RoleGuard],
                data: { menuId: 80000200 },
                children: [
                    { path: 'detalhe', component: DetalheVigenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'detalhe/:id', component: DetalheVigenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo', component: DetalheVigenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: DetalheVigenteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaVigenteComponent }
                ]
            },
            {
                path: 'recusado',
                canActivate: [RoleGuard],
                data: { menuId: 80000300 },
                children: [
                    { path: 'detalhe', component: DetalheRecusadoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'detalhe/:id', component: DetalheRecusadoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo', component: DetalheRecusadoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: DetalheRecusadoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaRecusadoComponent }
                ]
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssinarRoutingModule {
}

