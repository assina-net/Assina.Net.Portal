import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from "@ng-select/ng-select";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatetimeMaskDirective } from 'app/directives/datetime-mask.directive';
import { NumericMaskDirective } from 'app/directives/numeric-mask.directive';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
//import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { CustomFormsModule } from 'ng2-validation';
import { CardModule } from 'ngx-card/ngx-card';
import { NgxMaskModule } from "ngx-mask";
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { PadraoListaComponent } from '../padrao/lista/padrao-lista.component';
import { PadraoNovoComponent } from '../padrao/novo/padrao-novo.component';
import { BotoesCadastroComponent } from './form/botoes-cadastro.component';
import { BotoesListaComponent } from './form/botoes-lista.component';
import { CompleteTabFormComponent } from './form/complete-tab-form.component';
import { CadastroParteFormComponent } from './form/cadastro-parte-form.component';
import { ContratoParteModalComponent } from 'app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component';
import { SenhaAlterarFormComponent } from './form/senha/senha-alterar-form.component';

import { DynamicTableComponent } from './form/dynamic-table.component';
import { FormSimplesComponent } from './form/form-simples.component';
import { MessageComponent } from './message/message.component';
import { ConfirmDialogComponent } from "./message/confirm/confirm-dialog.component";
import { ConfirmDialogService } from 'app/components/util/message/confirm/confirm-dialog.service';


import { ComboClienteComponent } from 'app/components/util/combo/cliente/comboCliente.component';
import { InputCpfComponent } from 'app/components/util/input/cpf/inputCpf.component';
import { InputCnpjComponent } from 'app/components/util/input/cnpj/inputCnpj.component';

import { ModalSimplesComponent } from './modal/modal-simples.component';
import { PaginationComponent } from './paginator/paginacao.component';
import { ENumAsStringPipe } from './pipe/enumPipe';
import { PhonePipe } from './pipe/phonePipe';
import { PipesModule } from './pipes.module';
import { SortService } from "./sort/sort.service";
import { SortableColumnComponent } from "./sort/sortable-column.component";
import { SortableDateComponent } from "./sort/sortable-date.component";
import { SortableInputComponent } from './sort/sortable-input.component';
import { SortableSelectComponent } from './sort/sortable-select.component';
import { SortableTableDirective } from "./sort/sortable-table.directive";


import { MatTabsModule, MatToolbarModule, MatTreeModule, MatIconModule } from '@angular/material';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
   imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      CustomFormsModule,
      NgbAlertModule,
      UiSwitchModule,
      NgxMaskModule,
      NgSelectModule,
      NgMultiSelectDropDownModule,
      NgbModule,
      NgxUpperCaseDirectiveModule,
      CardModule,
      // PasswordStrengthBarModule,
      PipesModule.forRoot(),
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
      PdfViewerModule,
      PdfJsViewerModule,
      FormsModule,
      ReactiveFormsModule,
      InfiniteScrollModule
   ],
   declarations: [
      PadraoListaComponent,
      PadraoNovoComponent,
      PaginationComponent,
      SortableColumnComponent,
      SortableTableDirective,
      SortableInputComponent,
      SortableSelectComponent,
      SortableDateComponent,
      AutofocusDirective,
      FormSimplesComponent,
      BotoesListaComponent,
      BotoesCadastroComponent,
      DynamicTableComponent,
      CompleteTabFormComponent,
      CadastroParteFormComponent,
      ContratoParteModalComponent,
      SenhaAlterarFormComponent,
      ModalSimplesComponent,
      MessageComponent,
      ConfirmDialogComponent,
      ComboClienteComponent,
      InputCpfComponent,
      InputCnpjComponent,
      NumericMaskDirective,
      DatetimeMaskDirective,

   ],
   exports: [
      RouterModule,
      CommonModule,
      FormsModule,
      CustomFormsModule,
      NgbAlertModule,
      UiSwitchModule,
      NgbModule,
      NgxMaskModule,
      NgSelectModule,
      NgMultiSelectDropDownModule,
      NgxUpperCaseDirectiveModule,
      OwlDateTimeModule,
      OwlNativeDateTimeModule,
      CardModule,
      // PasswordStrengthBarModule,
      PadraoListaComponent,
      PadraoNovoComponent,
      PaginationComponent,
      SortableColumnComponent,
      SortableTableDirective,
      SortableInputComponent,
      SortableSelectComponent,
      SortableDateComponent,
      AutofocusDirective,
      FormSimplesComponent,
      BotoesListaComponent,
      BotoesCadastroComponent,
      DynamicTableComponent,
      ModalSimplesComponent,
      CompleteTabFormComponent,
      CadastroParteFormComponent,
      SenhaAlterarFormComponent,
      ContratoParteModalComponent,
      MessageComponent,
      ConfirmDialogComponent,
      ComboClienteComponent,
      InputCpfComponent,
      InputCnpjComponent,
      ENumAsStringPipe,
      PhonePipe,
      NumericMaskDirective,
      DatetimeMaskDirective,
      PdfViewerModule,
      PdfJsViewerModule,
      MatToolbarModule,
      MatTabsModule,
      MatTreeModule,
      MatIconModule,
      InfiniteScrollModule

   ],
   providers: [
      SortService,
      NgbActiveModal,
      ConfirmDialogService,

   ],
   entryComponents: [
      ContratoParteModalComponent
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilModule {
}
