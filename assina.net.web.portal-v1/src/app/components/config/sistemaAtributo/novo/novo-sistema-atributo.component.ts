import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppInjector } from "app/services/util/app-injector.service";
import { SharedService } from 'app/services/util/shared.service';
import { UtilService } from 'app/services/util/util.service';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { SistemaAtributoService } from 'app/services/config/sistemaAtributo/sistemaAtributo.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as LZString from 'lz-string';

@Component({
  selector: 'app-sistema-atributo',
  templateUrl: './novo-sistema-atributo.component.html',
  styleUrls: ['./novo-sistema-atributo.component.scss']
})
export class NovoSistemaAtributoComponent extends PadraoNovoComponent {

  @ViewChild('form', { static: true }) form: NgForm;

  protected sistemaAtributoService: SistemaAtributoService;
  //protected shared: SharedService;
  protected util: UtilService;

  private documentoPDF;
  byteArray: Uint8Array;
  private editorConfig: AngularEditorConfig;
  private diasSemanaSettings: {};
  private diasSemana: any[];
  private horariosSettings: {};
  private horarios: any[];
  private comboValores: [{ item_id: 0, item_text: '' }];


  constructor(route: ActivatedRoute) {
    const injector = AppInjector.getInjector();
    super(route);
    this.sistemaAtributoService = injector.get(SistemaAtributoService);
   // this.shared = injector.get(SharedService);
    this.util = injector.get(UtilService);
    this.entidade = { tipoAtributo: { descricao: "", tipoValor: "" } };
    this.httpService = this.sistemaAtributoService;

    this.diasSemanaSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 7,
      allowSearchFilter: true,
      searchPlaceholderText: 'Procurar',
      enableCheckAll: true
    };

    this.diasSemana = [{ item_id: 1, item_text: 'Domingo' },
    { item_id: 2, item_text: 'Segunda' },
    { item_id: 3, item_text: 'Terça' },
    { item_id: 4, item_text: 'Quarta' },
    { item_id: 5, item_text: 'Quinta' },
    { item_id: 6, item_text: 'Sexta' },
    { item_id: 7, item_text: 'Sábado' }]

    this.horariosSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 10,
      allowSearchFilter: false,
      searchPlaceholderText: 'Procurar',
      enableCheckAll: false
    };

    this.horarios = []
    for (let index = 0; index < 24; index++) {
      let horario = ("00" + index + ":00").slice(-5);
      this.horarios.push({ item_id: horario, item_text: horario });
    }


    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'no',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
      ],
      customClasses: [
      ],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: false,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
        [],
        [
          'customClasses',
          'insertImage',
          'insertVideo'
        ]
      ]
    };
  }

  afterRetrieveData() {
    if (this.entidade.cliente == null) {
      this.entidade.cliente = this.shared.clienteSelecionado.cliente;
    }

    if (this.entidade.tipoAtributo.tipoValor == 'BOOLEAN') {
      this.entidade.valorAtributo = this.util.booleanValue(this.entidade.valorAtributo)
    }

    if (this.entidade.tipoAtributo.tipoValor == 'DIASSEMANA'
      || this.entidade.tipoAtributo.tipoValor == 'HORARIOS') {
      this.comboValores = JSON.parse(this.entidade.valorAtributo);
    }

    if (this.entidade.tipoAtributo.tipoValor == 'PDF' &&  this.entidade.valorAtributo != null ) {
      var documentoPDFDescompactado = LZString["decompressFromUTF16"](this.entidade.valorAtributo);        
      this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
      this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(char => char.charCodeAt(0)));
    }

  }

  protected afterSave(atributoSalvo) {
    if (this.shared.clienteSelecionado.sistemaAtributo[this.entidade.tipoAtributo.tipoAtributo] != undefined) {
      this.shared.clienteSelecionado.sistemaAtributo[this.entidade.tipoAtributo.tipoAtributo] = this.entidade.valorAtributo
    } else {
      //Adiciona um novo item no sistema Atributo
      let item = { [this.entidade.tipoAtributo.tipoAtributo]: this.entidade.valorAtributo };
      let itens = Object.assign(JSON.parse(JSON.stringify(this.shared.clienteSelecionado.sistemaAtributo)), item);
      this.shared.clienteSelecionado.sistemaAtributo = itens;

    }
    return false;
  }

  afterExclusao(entidade: any) {
    this.shared.clienteSelecionado.sistemaAtributo[entidade.tipoAtributo.tipoAtributo] = undefined;
    return true;
  };


  get podeVoltar() {
    return this.consultando || (!this.editando && Boolean(this.form.pristine));
  }

  get SistemaAtributo() {
    return this.entidade;
  }

  set SistemaAtributo(data) {
    this.entidade = data;
  }

  protected beforeSave() {
    if (this.entidade.tipoAtributo.tipoValor == 'DIASSEMANA' ||
      this.entidade.tipoAtributo.tipoValor == 'HORARIOS') {
      if (this.comboValores != undefined) {
        this.entidade.valorAtributo = JSON.stringify(this.comboValores.sort((a, b) => (a.item_id > b.item_id ? 1 : -1)));
      } else {
        this.entidade.valorAtributo = null;
      }
    }
  }

  uploadArquivo(event) {
    var files = event.target.files;
    if (files.length > 1) {
      this.message.text = "Enviar somente um arquivo";
      return;
    }
    this.util.getFile(files[0]).then((data) => {
      this.documentoPDF = "data:application/pdf;base64," +this.util.byteArrayToBase64( data['bytes']);             
      this.entidade.valorAtributo =  LZString["compressToUTF16"](this.util.byteArrayToBase64(data['bytes']));
    });
  }

  
}
