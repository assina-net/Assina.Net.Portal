import { CommonModule, DecimalPipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskPipe } from 'ngx-mask';
import { ENumAsStringPipe } from '../util/pipe/enumPipe';
import { PhonePipe } from '../util/pipe/phonePipe';
import { ValuesPipe } from '../util/pipe/valuesPipe';
import { UtilModule } from '../util/util.module';

import { ConfigRoutingModule } from './config-routing.module';
import { NovoSistemaAtributoComponent } from './sistemaAtributo/novo/novo-sistema-atributo.component';
import { ListaSistemaAtributoComponent } from './sistemaAtributo/lista/lista-sistema-atributo.component';
import { ListaTipoDocumentoComponent } from './tipoDocumento/lista/lista-tipo-documento.component';
import { NovoTipoDocumentoComponent } from './tipoDocumento/novo/novo-tipo-documento.component';
import { TipoDocumentoNovoPapelModalComponent } from './tipoDocumento/modal/novoPapel/tipoDocumento-novo-papel-modal.component';
import { TipoDocumentoPapelModalComponent } from './tipoDocumento/modal/tipoDocumentoPapelModal/tipoDocumento-papel-modal.component';
import { ListaParametrosClienteComponent } from './parametrosCliente/lista/lista-parametros-cliente.component';
import { NovoParametroClienteComponent } from './parametrosCliente/novo/novo-parametros-cliente.component';
import { NovoPapelComponent } from './papel/novo/novo-papel.component';
import { ListaPapelComponent } from './papel/lista/lista-papel.component'
import { ListaEmailTemplatesComponent } from './emailTemplates/lista/lista-email-templates.component';
import { NovoEmailTemplatesComponent } from './emailTemplates/novo/novo-email-templates.component';
import { NovoAlertaComponent } from './alertas/novo/novo-alerta.component';
import { ListaAlertasComponent } from './alertas/lista/lista-alertas.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
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
import {ImageCropperModule} from 'ngx-image-cropper';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilModule,
        ConfigRoutingModule,
        AngularEditorModule,
        ImageCropperModule
    ],
    exports: [],
    declarations: [
        NovoSistemaAtributoComponent,
        ListaSistemaAtributoComponent,
        ListaTipoDocumentoComponent,
        NovoTipoDocumentoComponent,
        ListaParametrosClienteComponent,
        NovoParametroClienteComponent,
        NovoPapelComponent,
        ListaPapelComponent,
        TipoDocumentoNovoPapelModalComponent,
        TipoDocumentoPapelModalComponent,
        ListaEmailTemplatesComponent,
        NovoEmailTemplatesComponent,
        NovoAlertaComponent,
        ListaAlertasComponent,
        NovoParametroSistemaComponent,
        ListaParametrosSistemaComponent,
        NovoTermoComponent,
        ListaTermosComponent,
        NovoSegmentoComponent,
        ListaSegmentoComponent,
        NovoParametroEmailComponent,
        ListaParametrosEmailComponent,
        NovoParametroWhatsAppComponent,
        ListaParametrosWhatsAppComponent,
        NovoParametroSmsComponent,
        ListaParametrosSmsComponent,
        NovoWhatsAppTemplatesComponent,
        ListaWhatsAppTemplatesComponent
    ],
    providers: [
        ENumAsStringPipe, ValuesPipe, UpperCasePipe, DecimalPipe, MaskPipe, PhonePipe
    ],
    entryComponents: [
        TipoDocumentoPapelModalComponent,
        TipoDocumentoNovoPapelModalComponent
    ]
})
export class ConfigModule {
}
