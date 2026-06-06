import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'app/model/util/page';
//import { UtilService } from 'app/services/util/util.service';
import { Usuario } from '../../../../model/cadastro/usuario';
import { Pessoa } from '../../../../model/cadastro/pessoa';
import { PerfilEnum } from '../../../../model/enum/perfilEnum';
import { StatusEnum } from '../../../../model/enum/statusEnum';
import { TipoPessoaEnum } from '../../../../model/enum/tipoPessoaEnum';
import { ClienteService } from 'app/services/cadastro/cliente/cliente.service';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { ResponseApi } from '../../../../model/util/response-api';
import { PessoaEnderecoModalComponent } from 'app/components/cadastros/pessoa/modal/endereco/pessoa-endereco-modal.component'
import { PessoaTelefoneModalComponent } from 'app/components/cadastros/pessoa/modal/telefone/pessoa-telefone-modal.component'


@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent extends PadraoNovoComponent {

  @ViewChild('form', { static: true }) form: NgForm;

  dados: IDadosLista = { listagem: [], dirty: false };

  page: Page;
  filtro: Usuario;
  pages: Array<number>;


  titulosEndereco = ['Ação', 'Tipo', 'Endereco', 'CEP'];
  enderecos: IDadosLista = { listagem: [], dirty: false };
  pessoaEnderecoModal = PessoaEnderecoModalComponent;


  titulosTelefone = ['Ação', 'Tipo', 'Telefone', 'Complemento'];
  telefones: IDadosLista = { listagem: [], dirty: false };
  pessoaTelefoneModal = PessoaTelefoneModalComponent;


  listCombos = [];
  tipoPlanoList = [];
  tipoClienteList = [];
  tipoPessoaList = [];
  tipoEnderecoList = [];
  tipoTelefoneList = [];



  opcoesPerfil: any;
  Status: typeof StatusEnum = StatusEnum;

  cpfAnterior: string = null;
  clienteExistente: boolean = false;
  senhaValida: boolean = false;

  constructor(route: ActivatedRoute,
    private clienteService: ClienteService,
    //private utilService: UtilService
    ) {
    super(route);

    this.titulo = "Cadastro de Cliente";
    this.navegacao = " > Cadastro > Cliente > Cadastro";
    this.rota = "/cadastro/cliente";
    this.formulario = "Cliente";

    this.entidade = null;
    this.httpService = this.clienteService;
    this.consultando = false;

    this.opcoesPerfil =
      this.utilService.enumToKeyValue(PerfilEnum);
  }

  get cliente() {
    if (this.entidade == null) {
      return { id: "", pessoa: new Pessoa('', '', '', '', TipoPessoaEnum.JURIDICA, '', null), segmento:{id:""}, plano:{id:""} };
    }

    return this.entidade;
  }

  set cliente(data) {
    this.entidade = data;
  }

  perfilUsuarioAdmin(){
    return this.shared.usuario.perfil==PerfilEnum.ROLE_ADMIN
  }

  cancelar() {
    this.dados = { listagem: [], dirty: false };
    super.cancelar();
  }

  afterRetrieveData() {

    this.listCombos = this.entidade.listCombos;

    // coloca somente o tipoDocumento para Post
    this.entidade = this.entidade.cliente;

    this.entidade.dataInicioContrato = this.dateFromISO8601(this.entidade.dataInicioContrato);
    this.entidade.dataFimContrato = this.dateFromISO8601(this.entidade.dataFimContrato);
    this.entidade.status = StatusEnum.parse(this.entidade.status);

    this.enderecos.listagem = this.entidade.pessoa.pessoaEndereco;

    this.telefones.listagem = this.entidade.pessoa.pessoaTelefone;

    //carrega combos enviados da base de dados
    this.carregaCombosDaBaseDados();

  }

  dateFromISO8601(isostr) {
    if (isostr == null) {
      return null;
    }
    var parts = isostr.match(/\d+/g);
    return parts[0] + '-' + parts[1] + '-' + parts[2];
  }


  private carregaCombosDaBaseDados() {

    this.tipoPlanoList = this.utilService.preencheCombos(this.listCombos['TipoPlano']);

    this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);

    this.tipoPessoaList = this.utilService.preencheCombos(this.listCombos['TipoPessoa']);

    this.tipoEnderecoList = this.utilService.preencheCombos(this.listCombos['TipoEndereco']);

    this.tipoTelefoneList = this.utilService.preencheCombos(this.listCombos['TipoTelefone']);

  }

  get dadosComplementaresTelefone() {
    let dadosComplementares = {
      combotipoTelefone: this.tipoTelefoneList,
      origem: "Cliente"
    };
    return dadosComplementares;
  }

  get dadosComplementaresEndereco() {
    let dadosComplementares = {
      combotipoEndereco: this.tipoEnderecoList,
      origem: "Cliente"
    };
    return dadosComplementares;
  }


  get podeVoltar() {
    return this.consultando || (!this.editando && !this.dados.dirty && Boolean(this.form.pristine));
  }

  get formDirty() {
    return this.form.dirty || this.dados.dirty;
  }


  protected afterSave(response: ResponseApi) {
    var clienteSalvo = response.data;
    if (this.entidade.id == null && clienteSalvo.id != null) {
      this.shared.clientes.push({ cliente: clienteSalvo, perfil: this.shared.usuario.perfil, sistemaAtributo: null });
    }
    return false;
  }

  adicionouEndereco() {
    this.entidade.pessoa.pessoaEndereco = this.enderecos.listagem;
  }

  adicionouTelefone() {
    this.entidade.pessoa.pessoaTelefone = this.telefones.listagem;
  }

  classLowerCase() {
    return this.shared.classLowerCase;
  }
  
}
