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
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { ResponseApi } from '../../../../model/util/response-api';
import { PessoaTelefoneModalComponent } from 'app/components/cadastros/pessoa/modal/telefone/pessoa-telefone-modal.component'


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent extends PadraoNovoComponent {

  @ViewChild('form', { static: true }) form: NgForm;

  dados: IDadosLista = { listagem: [], dirty: false };

  page: Page;
  filtro: Usuario;
  pages: Array<number>;


  opcoesPerfil: any;
  barColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  strengthLabels = ['  Insegura', '  Fraca', '  Média', '  Forte', '  Segura'];
  Status: typeof StatusEnum = StatusEnum;
  cpfAnterior: string = null;
  usuarioExistente: boolean = false;
  senhaValida: boolean = false;


  
  listCombos = [];
  tipoTelefoneList = [];

  titulosTelefone = ['Ação', 'Tipo', 'Telefone', 'Complemento'];
  telefones: IDadosLista = { listagem: [], dirty: false };
  pessoaTelefoneModal = PessoaTelefoneModalComponent;


  constructor(route: ActivatedRoute,
    private usuarioService: UsuarioService,
    //private utilService: UtilServic
    ) {
    super(route);

    this.titulo = "Cadastro de Usuário";
    this.navegacao = " > Cadastro > Usuário > Cadastro";
    this.rota = "/cadastro/usuario";
    this.formulario = "Usuário";

    // this.entidade = {
    //   usuario: new Usuario(null, '', '', '', StatusEnum.ATIVO, PerfilEnum.ROLE_USUARIO, new Pessoa('', '', '', '', TipoPessoaEnum.FISICA, ''), null, null),
    //   cliente: { id: this.shared.clienteSelecionado.cliente.id },
    //   perfil: PerfilEnum.ROLE_USUARIO,
    //   status: StatusEnum.ATIVO,
    //   perfilClienteSelecionado : this.shared.clienteSelecionado.perfil
    // };

    this.entidade = null;
    this.httpService = this.usuarioService;

    this.opcoesPerfil =
      this.utilService.enumToKeyValue(PerfilEnum);
  }


  get cliente() {
    if (this.entidade == null) {
      return { id: "", pessoa: new Pessoa('', '', '', '', TipoPessoaEnum.FISICA, '', null) };
    }

    return this.entidade;
  }

  set cliente(data) {
    this.entidade = data;
  }


  findById(id: string) {
    this.loading.show();

    let usuarioCliente = { usuario: { id: id }, cliente: { id: this.shared.clienteSelecionado.cliente.id } };

    this.usuarioService.findByIdEditar(usuarioCliente).subscribe((responseApi: ResponseApi) => {
      this.entidade = responseApi.data;
      this.iniciado = true;
      if (this.route.queryParams) {
        this.route.queryParams.subscribe(params => {
          this.consultando = params["consultar"] == 'true';
          this.afterRetrieveData();
          this.desabilita(this.consultando);
        });
      } else {
        this.afterRetrieveData();
        this.desabilita(this.consultando);
      }
      this.loading.hide();
    }, err => {
      this.iniciado = true;
      this.errorHandler.handle(err);
    });
  }

  excluir() {
    this.message = null;
    this.dialog.confirmDelete('Deseja excluir este registro ?')
      .then((candelete: boolean) => {
        this.loading.show();
        let usuarioCliente = { id: this.entidade.id,
                               usuario: { id: this.entidade.usuario.id }, 
                               cliente: { id: this.shared.clienteSelecionado.cliente.id } 
                              };
        if (candelete) {
          const registro = ""; //this.entidade.pessoa.nomeRazaoSocial;
          this.usuarioService.inativar(usuarioCliente).subscribe((responseApi: ResponseApi) => {
            this.loading.hide();
            this.cancelar();
            this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} excluído com sucesso!`);
          }, err => {
            this.errorHandler.handle(err);
          });
        } else {
          this.loading.hide();
        }
      });
  }


  get usuarioCliente() {
    return this.entidade;
  }

  set usuarioCliente(data) {
    this.entidade = data;
  }

  cancelar() {
    this.dados = { listagem: [], dirty: false };
    super.cancelar();
  }

  afterRetrieveData() {

    
    this.listCombos = this.entidade.listCombos;

    
    this.entidade = {
         usuario:  this.entidade.usuario,
         cliente: { id: this.shared.clienteSelecionado.cliente.id },
         perfil: PerfilEnum.ROLE_USUARIO,
         status: StatusEnum.ATIVO,
         perfilClienteSelecionado : this.shared.clienteSelecionado.perfil
    };


    this.entidade.cliente.id = this.shared.clienteSelecionado.cliente.id;
    //this.entidade.perfil = this.shared.perfilUsuario;
    this.entidade.senha = '';
    this.cpfAnterior = this.entidade.usuario.pessoa.cpfCnpj;
    this.entidade.status = StatusEnum.parse(this.entidade.status);
    this.entidade.perfilClienteSelecionado = this.shared.clienteSelecionado.perfil;

    if ( this.entidade.usuario.pessoa.pessoaTelefone != undefined)
      this.telefones.listagem = this.entidade.usuario.pessoa.pessoaTelefone;

    //carrega combos enviados da base de dados
    this.carregaCombosDaBaseDados();

    // this.filtro = this.filtro = new Usuario(this.entidade.id, '', '', '', null, null,  new Pessoa('','','','',null,''));
    // this.page =  new Pageable(0, 10, 'ASC', 'empresa.rzSocialNome', {'idUsuario': this.entidade.id});
  }



  beforeSave() {
  }

  showHidePassword(tipo) {
    this.utilService.showHidePassword('show_hide_password_' + tipo);
  }

  get podeVoltar() {
    return this.consultando || (!this.editando && !this.dados.dirty && Boolean(this.form.pristine));
  }

  get formDirty() {
    return this.form.dirty || this.dados.dirty;
  }


  perfilAdmin() {
    return this.shared.perfilUsuario == 'ROLE_ADMIN';
  }

  PreencheDadosUsuario(usuario: any) {
    if (usuario != null) {
      this.entidade.usuario.id = usuario.id;
      this.entidade.usuario.pessoa.id = usuario.pessoa.id;
      this.entidade.status = StatusEnum.ATIVO;
      if (usuario.status == 'ATIVO') {
        this.entidade.usuario.pessoa.nomeRazaoSocial = usuario.pessoa.nomeRazaoSocial;
        this.entidade.usuario.pessoa.email = usuario.pessoa.email;
        this.entidade.usuario.login = usuario.login;
        this.usuarioExistente = true;
      }
    } else {
      //se o anterior era um usuario que ja existia, entao limpa o id
      if (this.usuarioExistente) {
        this.entidade.usuario.id = null;
      }
      this.usuarioExistente = false;
    }
  }

  alterouCpf() {
    if (this.entidade.usuario.pessoa.cpfCnpj != null && this.entidade.usuario.pessoa.cpfCnpj != this.cpfAnterior) {
      this.usuarioService.getUsuarioCpfCnpj(this.entidade.usuario).subscribe((responseApi: ResponseApi) => {
        this.PreencheDadosUsuario(responseApi);
      }, err => {
        this.errorHandler.handle(err);
      });
    }
  }


  private carregaCombosDaBaseDados() {
    this.tipoTelefoneList = this.utilService.preencheCombos(this.listCombos['TipoTelefone']);
  }

  get dadosComplementaresTelefone() {
    let dadosComplementares = {
      combotipoTelefone: this.tipoTelefoneList,
      origem: "Cliente"
    };
    return dadosComplementares;
  }

  adicionouTelefone() {
    this.entidade.usuario.pessoa.pessoaTelefone = this.telefones.listagem;
  }

  classLowerCase() {
    return this.shared.classLowerCase;
  }
}
