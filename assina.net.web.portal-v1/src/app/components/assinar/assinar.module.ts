import { CommonModule, DecimalPipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskPipe } from 'ngx-mask';
import { ENumAsStringPipe } from '../util/pipe/enumPipe';
import { PhonePipe } from '../util/pipe/phonePipe';
import { ValuesPipe } from '../util/pipe/valuesPipe';
import { UtilModule } from '../util/util.module';
import { AssinarRoutingModule } from './assinar-routing.module';
import { ListaAssinaPadraoComponent } from './padrao/lista/lista-assina-padrao.component';
import { DetalheAssinaComponent } from './padrao/detalhe/detalhe-assina.component';
import { ListaPendenteComponent } from './pendente/lista/lista-pendente.component';
import { DetalhePendenteComponent } from './pendente/detalhe/detalhe-pendente.component';
import { VisualizarModalComponent } from './padrao/modal/visualizar/visualizar-modal.component';
import { AssinarModalComponent } from './padrao/modal/assinar/assinar-modal.component';
import { CancelarModalComponent } from './padrao/modal/cancelar/cancelar-modal.component';
import { ListaVigenteComponent } from './vigente/lista/lista-vigente.component';
import { DetalheVigenteComponent } from './vigente/detalhe/detalhe-vigente.component';
import { RecusarModalComponent } from './padrao/modal/recusar/recusar-modal.component';
import { ListaRecusadoComponent } from './recusado/lista/lista-recusado.component';
import { DetalheRecusadoComponent } from './recusado/detalhe/detalhe-recusado.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilModule,
        AssinarRoutingModule
    ],
    exports: [],
    declarations: [
        ListaAssinaPadraoComponent,
        DetalheAssinaComponent,
        ListaPendenteComponent,
        DetalhePendenteComponent,
        VisualizarModalComponent,
        AssinarModalComponent,
        CancelarModalComponent,
        ListaVigenteComponent,
        DetalheVigenteComponent,
        ListaRecusadoComponent,
        DetalheRecusadoComponent,
        RecusarModalComponent
    ],
    providers: [
        ENumAsStringPipe, ValuesPipe, UpperCasePipe, DecimalPipe, MaskPipe, PhonePipe
    ],
    entryComponents: [
        AssinarModalComponent,
        CancelarModalComponent,
        VisualizarModalComponent,
        RecusarModalComponent,
    ]
})
export class AssinarModule {
}
