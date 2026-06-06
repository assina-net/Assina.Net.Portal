import { CommonModule, DecimalPipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskPipe } from 'ngx-mask';
import { ENumAsStringPipe } from '../util/pipe/enumPipe';
import { PhonePipe } from '../util/pipe/phonePipe';
import { ValuesPipe } from '../util/pipe/valuesPipe';
import { UtilModule } from '../util/util.module';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { ListaUsuarioComponent } from './usuario/lista/lista-usuario.component';
import { NovoUsuarioComponent } from './usuario/novo/novo-usuario.component';
import { PerfilUsuarioComponent } from './usuario/perfil/perfil-usuario.component';
import { AlterarSenhaComponent } from './usuario/alterar-senha/alterar-senha.component';
import { ListaContratoComponent } from './contrato/lista/lista-contrato.component';
import { NovoContratoComponent } from './contrato/novo/novo-contrato.component';
//import { ContratoParteContatoModalComponent } from './contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component';
//import { ContratoDocumentoModalComponent } from './contrato/modal/contrato-documento/contrato-documento-modal.component';
//import { ContratoDocumentoVisualizarModalComponent } from './contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component';
import { SenhaAlterarFormComponent } from 'app/components/util/form/senha/senha-alterar-form.component';
import { NovoClienteComponent } from './cliente/novo/novo-cliente.component';
import { ListaClienteComponent } from './cliente/lista/lista-cliente.component';
import { PessoaEnderecoModalComponent } from './pessoa/modal/endereco/pessoa-endereco-modal.component'
import { PessoaTelefoneModalComponent } from './pessoa/modal/telefone/pessoa-telefone-modal.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilModule,
        CadastrosRoutingModule,
    ],
    exports: [],
    declarations: [
        ListaUsuarioComponent,
        NovoUsuarioComponent,
        PerfilUsuarioComponent,
        AlterarSenhaComponent,
        ListaContratoComponent,
       // ContratoParteContatoModalComponent,
       // ContratoDocumentoModalComponent,
       // ContratoDocumentoVisualizarModalComponent,
        NovoContratoComponent,
        NovoClienteComponent,
        ListaClienteComponent,
        PessoaEnderecoModalComponent,
        PessoaTelefoneModalComponent,
    ],
    providers: [
        ENumAsStringPipe, ValuesPipe, UpperCasePipe, DecimalPipe, MaskPipe, PhonePipe
    ],
    entryComponents: [
       // ContratoParteContatoModalComponent,
       // ContratoDocumentoModalComponent,
       // ContratoDocumentoVisualizarModalComponent,
        PessoaEnderecoModalComponent,
        PessoaTelefoneModalComponent,
    ]
})
export class CadastrosModule {
}

