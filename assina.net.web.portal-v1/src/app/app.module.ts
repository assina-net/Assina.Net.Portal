import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDateParserFormatter, NgbDatepickerI18n, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from "@ng-select/ng-select";
import { ChartistModule } from 'ng-chartist';
import { NgxMaskModule } from "ngx-mask";
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TermoAceiteModalComponent } from './components/termos/modal/termo-aceite/termo-aceite-modal.component';
import { TermoAceiteVisualizarModalComponent } from './components/termos/modal/termo-aceite-visualizar/termo-aceite-visualizar-modal.component'
import { DesenvolvimentoComponent } from './components/desenvolvimento/desenvolvimento.component';
import { AuthGuard } from './components/security/auth.guard';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { PendingChangesGuard } from './components/security/changes.guard';
import { ConfirmationComponent } from './components/security/confirmation/confirmation.component';
import { LoginComponent } from './components/security/login/login.component';
import { SenhaRecuperacaoComponent } from './components/security/senhaRecuperacao/senhaRecuperacao.component';
import { AssinarAcessoComponent } from './components/assinar/acesso/assinarAcesso.component';
import { ValidarAssinaturaComponent } from './components/validar/documento/validarAssinatura.component';
import { RegistrarClienteComponent } from './components/registrar/registrar-cliente.component';
import { NotfoundComponent } from './components/security/pages/notfound.component';
import { RoleGuard } from './components/security/role.guard';
import { ContentLayoutComponent } from './components/template/layouts/content/content-layout.component';
import { ImgInicial } from './components/template/layouts/img-inicial/img-inicial';
import { FullLayoutComponent } from './components/template/layouts/full/full-layout.component';
import { PageLayoutComponent } from './components/template/layouts/page/page-layout.component';
import { TemplateModule } from './components/template/template.module';
import { TemplateService } from './components/template/template.service';
import { CustomDatepickerI18n, I18n } from './config/CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from './config/NgbDatePTParserFormatter';
import { Globals } from './globals';
import { UsuarioService } from './services/cadastro/usuario/usuario.service';
import { DialogService } from './services/util/dialog.service';
import { ErrorHandlerService } from './services/util/error-handler.service';
import { HttpService } from './services/util/http.service';
import { ModalService } from './services/util/modal.service';
import { SelectService } from "./services/util/select.service";
import { SharedService } from './services/util/shared.service';
import { UtilService } from './services/util/util.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UtilModule } from './components/util/util.module';

import { ContratoParteContatoModalComponent } from './components/cadastros/contrato/modal/contrato-parte-contato/contrato-parte-contato-modal.component';
import { ContratoDocumentoModalComponent } from './components/cadastros/contrato/modal/contrato-documento/contrato-documento-modal.component';
import { ContratoDocumentoVisualizarModalComponent } from './components/cadastros/contrato/modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component';
import { PdfService } from './services/util/pdf.service';

import { ContratoPapelModalComponent } from './components/cadastros/contrato/modal/contrato-papel/contrato-papel-modal.component';
import { ContratoTipoDocumentoModalComponent } from './components/cadastros/contrato/modal/contrato-tipo-documento/contrato-tipo-documento-modal.component';

registerLocaleData(ptBr);

@NgModule({
   declarations: [
      AppComponent,
      ConfirmationComponent,
      ContentLayoutComponent,
      DashboardComponent,
      DesenvolvimentoComponent,
      ImgInicial,
      FullLayoutComponent,
      LoginComponent,
      SenhaRecuperacaoComponent,
      AssinarAcessoComponent,
      ValidarAssinaturaComponent,
      RegistrarClienteComponent,
      PageLayoutComponent,
      NotfoundComponent,
      TermoAceiteModalComponent,
      TermoAceiteVisualizarModalComponent,
      ContratoParteContatoModalComponent,
      ContratoDocumentoModalComponent,
      ContratoDocumentoVisualizarModalComponent,
      ContratoPapelModalComponent,
      ContratoTipoDocumentoModalComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      ChartistModule,
      FormsModule,
      HttpClientModule,
      NgbModule,
      NgSelectModule,
      NgxMaskModule.forRoot(),
      NgxPaginationModule,
      InfiniteScrollModule,
      NgxSpinnerModule,
      NgxUpperCaseDirectiveModule,
      TemplateModule,
      ToastrModule.forRoot({
         timeOut: 4000,
         positionClass: 'toast-top-center',
         preventDuplicates: true,
      }),
      NgMultiSelectDropDownModule.forRoot(),
      PasswordStrengthBarModule,
      AngularEditorModule,
      UtilModule,

   ],
   providers: [
      Globals,
      AuthGuard,
      RoleGuard,
      PendingChangesGuard,
      HttpService,
      DialogService,
      SelectService,
      SharedService,
      TemplateService,
      UsuarioService,
      UtilService,
      ErrorHandlerService,
      ModalService,
      PdfService,
      I18n,
      {
         provide: NgbDatepickerI18n,
         useClass: CustomDatepickerI18n
      },
      {
         provide: NgbDateParserFormatter,
         useClass: NgbDatePTParserFormatter
      },
      {
         provide: LOCALE_ID,
         useValue: 'pt'
      },
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      },
   ],
   entryComponents: [
      ConfirmationComponent,
      TermoAceiteModalComponent,
      TermoAceiteVisualizarModalComponent,
      ContratoParteContatoModalComponent,
      ContratoDocumentoModalComponent,
      ContratoDocumentoVisualizarModalComponent,
      ContratoPapelModalComponent,
      ContratoTipoDocumentoModalComponent
   ],
   bootstrap: [AppComponent]
})
export class AppModule {
}
