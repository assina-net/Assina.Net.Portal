import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from '../security/changes.guard';
import { RoleGuard } from '../security/role.guard';
import { NovoParametroClienteComponent } from './parametrosCliente/novo/novo-parametros-cliente.component';
import { ListaParametrosClienteComponent } from './parametrosCliente/lista/lista-parametros-cliente.component'
import { NovoTipoDocumentoComponent } from './tipoDocumento/novo/novo-tipo-documento.component';
import { ListaTipoDocumentoComponent } from './tipoDocumento/lista/lista-tipo-documento.component'
import { NovoPapelComponent } from './papel/novo/novo-papel.component';
import { ListaPapelComponent } from './papel/lista/lista-papel.component'
import { NovoEmailTemplatesComponent } from './emailTemplates/novo/novo-email-templates.component';
import { ListaEmailTemplatesComponent } from './emailTemplates/lista/lista-email-templates.component'
import { NovoAlertaComponent } from './alertas/novo/novo-alerta.component';
import { ListaAlertasComponent } from './alertas/lista/lista-alertas.component'
import { NovoParametroSistemaComponent } from './parametrosSistema/novo/novo-parametros-sistema.component';
import { ListaParametrosSistemaComponent } from './parametrosSistema/lista/lista-parametros-sistema.component'
import { NovoTermoComponent } from './termo/novo/novo-termo.component';
import { ListaTermosComponent } from './termo/lista/lista-termos.component'
import { NovoSegmentoComponent } from './segmento/novo/novo-segmento.component';
import { ListaSegmentoComponent } from './segmento/lista/lista-segmento.component'
import { NovoParametroEmailComponent } from './email/novo/novo-parametros-email.component';
import { ListaParametrosEmailComponent } from './email/lista/lista-parametros-email.component'
import { NovoParametroWhatsAppComponent } from './whatsapp/novo/novo-parametros-whatsapp.component';
import { ListaParametrosWhatsAppComponent } from './whatsapp/lista/lista-parametros-whatsapp.component'
import { NovoParametroSmsComponent } from './sms/novo/novo-parametros-sms.component';
import { ListaParametrosSmsComponent } from './sms/lista/lista-parametros-sms.component'
import { NovoWhatsAppTemplatesComponent } from './whatsapplTemplates/novo/novo-whatsapp-templates.component';
import { ListaWhatsAppTemplatesComponent } from './whatsapplTemplates/lista/lista-whatsapp-templates.component';


const routes: Routes = [
    {
        path: 'config',
        children: [
            {
                path: 'tipoDocumento',
                canActivate: [RoleGuard],
                data: { menuId: '60000101' },
                children: [
                    { path: 'novo', component: NovoTipoDocumentoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoTipoDocumentoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaTipoDocumentoComponent },
                    { path: '', component: ListaTipoDocumentoComponent },
                ]
            },
            {
                path: 'papel',
                canActivate: [RoleGuard],
                data: { menuId: '60000501' },
                children: [
                    { path: 'novo', component: NovoPapelComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoPapelComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaPapelComponent },
                    { path: '', component: ListaPapelComponent },
                ]
            },
            {
                path: 'parametrosCliente',
                canActivate: [RoleGuard],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: NovoParametroClienteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoParametroClienteComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaParametrosClienteComponent },
                    { path: '', component: ListaParametrosClienteComponent },
                ]
            },
            {
                path: 'parametrosEmail',
                canActivate: [RoleGuard],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: NovoParametroEmailComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoParametroEmailComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaParametrosEmailComponent },
                    { path: '', component: ListaParametrosEmailComponent },
                ]
            },
            {
                path: 'parametrosWhatsApp',
                canActivate: [RoleGuard],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: NovoParametroWhatsAppComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoParametroWhatsAppComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaParametrosWhatsAppComponent },
                    { path: '', component: ListaParametrosWhatsAppComponent },
                ]
            },
            {
                path: 'parametrosSms',
                canActivate: [RoleGuard],
                data: { menuId: '60000202' },
                children: [
                    { path: 'novo', component: NovoParametroSmsComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoParametroSmsComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaParametrosSmsComponent },
                    { path: '', component: ListaParametrosSmsComponent },
                ]
            },
            {
                path: 'emailsTemplate',
                canActivate: [RoleGuard],
                data: { menuId: '60000601' },
                children: [
                    { path: 'novo', component: NovoEmailTemplatesComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoEmailTemplatesComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaEmailTemplatesComponent },
                    { path: '', component: ListaEmailTemplatesComponent },
                ]
            },
            {
                path: 'whatsappTemplate',
                canActivate: [RoleGuard],
                data: { menuId: '60000601' },
                children: [
                    { path: 'novo', component: NovoWhatsAppTemplatesComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoWhatsAppTemplatesComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaWhatsAppTemplatesComponent },
                    { path: '', component: ListaWhatsAppTemplatesComponent },
                ]
            },
            {
                path: 'alertas',
                canActivate: [RoleGuard],
                data: { menuId: '60000701' },
                children: [
                    { path: 'novo', component: NovoAlertaComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoAlertaComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaAlertasComponent },
                    { path: '', component: ListaAlertasComponent },
                ]
            },
            {
                path: 'parametrosSistema',
                canActivate: [RoleGuard],
                data: { menuId: '60000901' },
                children: [
                    { path: 'novo', component: NovoParametroSistemaComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoParametroSistemaComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaParametrosSistemaComponent },
                    { path: '', component: ListaParametrosSistemaComponent },
                ]
            },
            {
                path: 'termos',
                canActivate: [RoleGuard],
                data: { menuId: '60001001' },
                children: [
                    { path: 'novo', component: NovoTermoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoTermoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaTermosComponent },
                    { path: '', component: ListaTermosComponent },
                ]
            },
            {
                path: 'segmentos',
                canActivate: [RoleGuard],
                data: { menuId: '60001101' },
                children: [
                    { path: 'novo', component: NovoSegmentoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'novo/:id', component: NovoSegmentoComponent, canDeactivate: [PendingChangesGuard] },
                    { path: 'lista', component: ListaSegmentoComponent },
                    { path: '', component: ListaSegmentoComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfigRoutingModule {
}

