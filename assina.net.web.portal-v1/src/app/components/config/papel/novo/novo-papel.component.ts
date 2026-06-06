import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { PapelService } from 'app/services/config/papel/papel.service';
//import { UtilService } from '../../../../services/util/util.service';

@Component({
  selector: 'app-novo-papel',
  templateUrl: './novo-papel.component.html',
  styleUrls: ['./novo-papel.component.scss']
})
export class NovoPapelComponent extends PadraoNovoComponent {

  @ViewChild('form', { static: true }) form: NgForm;
  modal: boolean = false;

  listCombos = [];
  tipoClienteList = [];
  tipoClienteSelecionandos = [];

  papelList = [];
  papelSelecionandos = [];

  dropdownSettings = {};

  constructor(route: ActivatedRoute,
    private papelService: PapelService,
    //private utilService: UtilService
    ) {
    super(route);
    this.titulo = "Novo Papel";
    this.navegacao = " > Config > Papel > Novo";
    this.rota = "/config/papel";

    //Para carregar os combos
    //this.entidade = [];
//     this.entidade = {
//       identificacao: '',
//       nome: '',
//       assina: null,
//       status: 'ATIVO',
//       papelTipoCLiente: [],
//       cliente: this.shared.clienteSelecionado.cliente
//     }
    this.entidade = null; // se nao for null o getNedw nao funciona
    this.httpService = this.papelService;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      searchPlaceholderText: 'Procurar',
      enableCheckAll: false

    };

  }

  afterRetrieveData() {

    this.listCombos = this.entidade.listCombos;

    // coloca somente o tipoDocumento para Post
    this.entidade = this.entidade.papel;

    if (this.entidade.cliente.id != this.shared.clienteSelecionado.cliente.id) {
      this.consultando = true;
    }

    //carrega combos enviados da base de dados
    this.carregaCombosDaBaseDados();

    //seleciona os itens que já estao no objeto
    this.InicializaItensSelecionados();

  }

  beforeSave() {
    this.TrataListaTipoCliente();
  }

  private TrataListaTipoCliente() {
    let lstTipoCliente = [];

    this.tipoClienteSelecionandos.forEach(tipoCliente => {
      let achou = false;
      if (this.entidade.papelTipoClientes != undefined) {
        this.entidade.papelTipoClientes.forEach(value => {
          if (tipoCliente.item_id == value.segmento.id && value.id != "") {
            lstTipoCliente.push(value);
            achou = true;
            return;
          }
        });
      }
      if (!achou) {
        this.listCombos['TipoCliente'].forEach(value => {
          if (tipoCliente.item_id == value.id) {
            lstTipoCliente.push({ id: "", segmento: { id: value.id, identificacao: value.value, nome: value.label } });
            return;
          }
        });
      }
    });

    this.entidade.papelTipoClientes = lstTipoCliente;
  }

  private carregaCombosDaBaseDados() {
    this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);
  }

  private InicializaItensSelecionados() {
    this.tipoClienteSelecionandos = [];
    if (this.entidade.papelTipoClientes != null) {
      this.entidade.papelTipoClientes.forEach(value => {
        let item = { item_id: value.segmento.id, item_text: value.segmento.nome };
        this.tipoClienteSelecionandos.push(item);
      });
    }

  }


  get podeVoltar() {
    return this.consultando || (!this.editando && Boolean(this.form.pristine));
  }

  get Papel() {
    return this.entidade;
  }

  set Papel(data) {
    this.entidade = data;
  }
}
