import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from '../security/changes.guard';
import { RoleGuard } from '../security/role.guard';
import { ListaUsuarioComponent } from './usuario/lista/lista-usuario.component';
import { NovoUsuarioComponent } from './usuario/novo/novo-usuario.component';
import { AlterarSenhaComponent } from './usuario/alterar-senha/alterar-senha.component';
import { NovoContratoComponent } from './contrato/novo/novo-contrato.component';
import { ListaContratoComponent } from './contrato/lista/lista-contrato.component';
import { NovoClienteComponent } from './cliente/novo/novo-cliente.component';
import { ListaClienteComponent } from './cliente/lista/lista-cliente.component';
import { PerfilUsuarioComponent } from './usuario/perfil/perfil-usuario.component';


const routes: Routes = [
    {
        path: 'cadastro',
        children: [
            {
                path: 'usuario',
                canActivate: [RoleGuard],
                data: { menuId: 9000100 },
                children: [
                    { path: 'novo', component: NovoUsuarioComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoUsuarioComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaUsuarioComponent },
                    { path: 'alterarsenha', component: AlterarSenhaComponent },
                    { path: 'alterarsenha/:id', component: AlterarSenhaComponent },
                    { path: 'perfil/:id', component: PerfilUsuarioComponent, canDeactivate: [PendingChangesGuard] },
                ]
            },
            {
                path: 'contrato',
                canActivate: [RoleGuard],
                data: { menuId: 90000000 },
                children: [
                    { path: 'novo', component: NovoContratoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoContratoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaContratoComponent },
                ]
            },
            {
                path: 'cliente',
                canActivate: [RoleGuard],
                data: { menuId: 90000200 },
                children: [
                    { path: 'novo', component: NovoClienteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoClienteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaClienteComponent },
                ]
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CadastrosRoutingModule {
}

