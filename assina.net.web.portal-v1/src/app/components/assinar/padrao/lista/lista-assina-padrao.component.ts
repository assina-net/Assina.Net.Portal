import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PadraoListaComponent } from 'app/components/padrao/lista/padrao-lista.component';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { DialogService } from "app/services/util/dialog.service";
import { AppInjector } from "app/services/util/app-injector.service";
import { AssinarModalComponent } from 'app/components/assinar/padrao/modal/assinar/assinar-modal.component';
import { CancelarModalComponent } from 'app/components/assinar/padrao/modal/cancelar/cancelar-modal.component';
import { Page } from "app/model/util/page";
import { ResponseApi } from "app/model/util/response-api";
import { PerfilEnum } from 'app/model/enum/perfilEnum';


@Component({
  selector: 'app-lista-documento',
  templateUrl: '../../padrao/lista/lista-assina.component.html',
  styleUrls: ['../../padrao/lista/lista-assina.component.css']
})
export class ListaAssinaPadraoComponent extends PadraoListaComponent {


  opcoesStatusContrato: any;
  selection = [];
  emailsParaAssinatura = [];
  celularesParaAssinatura = [];
  tudoSelecionado: boolean;
  exibirSelecao: boolean;
  podeAssinar: boolean;
  fazDownload: boolean;
  podeCancelar: boolean;
  excluirPerfilAssinador: boolean;
  contratoList: any = [];

  assinarModalForm = AssinarModalComponent;
  cancelarModalForm = CancelarModalComponent;

  protected dialog: DialogService;

  constructor(private modalService: NgbModal) {
    super()

    const injector = AppInjector.getInjector();
    this.dialog = injector.get(DialogService);

    this.tudoSelecionado = false;
    this.exibirSelecao = false;
    this.podeAssinar = false;
    this.fazDownload = false;
    this.podeCancelar = this.shared.perfilUsuarioAdmin();
    this.excluirPerfilAssinador = false;
  }


  findAll(pageable: Page, filtro: any) {
    this.loading.show();
    this.objetoSelecionado = null;

    let contratoFiltroRequest = {
      usuario: this.shared.usuario,
      contrato: filtro
    }

    this.httpService.findAll(pageable, contratoFiltroRequest).subscribe((responseApi: ResponseApi) => {

      if (this.listagem.length == 0) {
        this.listagem = responseApi['data']['content'];
      }
      else {
        this.listagem = this.listagem.concat(responseApi['data']['content']);
      }


      this.pages = new Array(responseApi['data']['totalPages']);
      let order = this.page.order;
      this.page = responseApi['data'];
      this.page.order = order;
      this.afterRetrieveData();
      this.loading.hide();
    }, err => {
      this.errorHandler.handle(err);
    });
  }

  // filtrar() {
  //   this.findAll(this.page, this.filtro);
  // }

  clienteChange() {
    this.listagem = [];
    this.selection = [];
    this.tudoSelecionado = false;    
    this.filtro.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
    this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }]
    if (this.shared.verificaPerfilClienteSelecionado(PerfilEnum.ROLE_ASSINADOR)) {
      this.filtro.partes[0].cpfCnpj = this.shared.usuario.pessoa.cpfCnpj;
    }
    this.page.number=0;
    this.filtrar();
  }

  clienteSegmento(){
    return this.shared.clienteSelecionado.cliente.segmento.identificacao
  }

  verificaSePodeSelecionar(contrato) {
    let podeSelecionar: boolean = false;
    let mensagem : string = "Não existe uma pendência de assinatura sua para este documento.";

   if(this.shared.perfilUsuarioAdmin()) {
      podeSelecionar = true;
      return { podeSelecionar };
  }



    //se não vai assinar então retorna sempre true, para marcar o item
    if (this.podeAssinar) {
      contrato.partes.forEach(parte => {
        if (parte.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO' && parte.statusAssinatura != 'NAOLIBERADO') {
          podeSelecionar = true;
          return;
        }
        if (!podeSelecionar) {
          parte.contatos.forEach(contato => {
            if (contato.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO' && contato.statusAssinatura != 'NAOLIBERADO') {
              podeSelecionar = true;
              return;
            }
          })
        }

      })
    }
    if (this.fazDownload) {
      if (contrato.statusContrato == 'ASSINADO') {
        podeSelecionar = true;
      } else {
        podeSelecionar = false;
      }
    }


    return { podeSelecionar, mensagem } ;


  }

  montaListaEmailCelular() {
    this.emailsParaAssinatura = [];
    this.celularesParaAssinatura = [];
    if (this.shared.usuario.pessoa.email != "" && this.shared.usuario.pessoa.email != null)
      this.emailsParaAssinatura.push(this.shared.usuario.pessoa.email);
    //if (this.shared.usuario.pessoa.celular != "" && this.shared.usuario.pessoa.celular != null)
    // this.celularesParaAssinatura.push(this.shared.usuario.pessoa.celular);

    this.listagem.forEach(contrato => {
      let achouParte: boolean = false;
      contrato.partes.forEach(parte => {
        if (parte.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && parte.statusAssinatura != 'ASSINADO') {

          if (parte.email != undefined && parte.email != "" && parte.email != null && !this.emailsParaAssinatura.includes(parte.email))
            this.emailsParaAssinatura.push(parte.email);

          if ( parte.cpfCnpj != this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj )
            if (parte.celular != undefined && parte.celular != "" && parte.celular != null && !this.celularesParaAssinatura.includes(parte.celular))
              this.celularesParaAssinatura.push(parte.celular);

          achouParte = true;
          return;
        }
        if (!achouParte &&  parte.cpfCnpj != this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
          parte.contatos.forEach(contato => {
            if (contato.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj && contato.statusAssinatura != 'ASSINADO') {

              if (contato.email != undefined && contato.email != "" && contato.email != null && !this.emailsParaAssinatura.includes(contato.email))
                this.emailsParaAssinatura.push(contato.email);

              if (contato.celular != undefined && contato.celular != "" && contato.celular != null && !this.celularesParaAssinatura.includes(contato.celular))
                this.celularesParaAssinatura.push(contato.celular);

              return;
            }
          })
        }
      })
    });
  }

  alteranaSelecao(contrato) {
    var validacao = this.verificaSePodeSelecionar(contrato);
    if (validacao.podeSelecionar) {
      var idx = this.selection.indexOf(contrato.id);
      // Is currently selected
      if (idx > -1) {
        this.selection.splice(idx, 1);
      }
      // Is newly selected
      else {
        this.selection.push(contrato.id);
      }
    } else {
      this.dialog.warning(validacao.mensagem );
    }
  }

  selecionaTudo() {
    this.selection = [];
    this.listagem.forEach(item => {
      if (this.verificaSePodeSelecionar(item).podeSelecionar)
        this.selection.push(item.id);
    })
    this.tudoSelecionado = true;
  }

  limpaSelecao() {
    this.selection = [];
    this.tudoSelecionado = false;
  }


  large: boolean = false;
  exibirAssinar() {
    if (this.selection.length == 0) {
      this.dialog.warning("É preciso selecionar um documento para assinatura");
      return;
    }

    this.montaListaEmailCelular();

    const modalRef = this.modalService.open(
      this.assinarModalForm, {
      backdrop: 'static', centered: true, keyboard: false, size: 'lg'
    }
    );

    var custodiante = this.shared.clienteSelecionado.cliente;
    var contrato = {
      contrato: { custodiante: custodiante, assunto: 'assinatura em lote' },
      contratos: this.selection,
      assinandoLote: true
    };
    var pessoa = Object.assign(JSON.parse(JSON.stringify(this.shared.usuario.pessoa)), contrato);

    modalRef.componentInstance.instance = pessoa;
    modalRef.componentInstance.emailsParaAssinatura = this.emailsParaAssinatura;
    modalRef.componentInstance.celularesParaAssinatura = this.celularesParaAssinatura;

    for(let i=0;i<this.selection.length;i++){
      this.httpService.findById(this.selection[i]).subscribe((responseApi: ResponseApi) => {
        this.contratoList.push(responseApi.data);
      })
    }

    modalRef.componentInstance.contratoList = this.contratoList;

    modalRef.result.then((result) => {
      if (result && result != 'close') {

        if (result == "assinado") {
          this.listagem = [];
          this.ngOnInit();
        }

        //console.log(result);
        if (result.status != undefined) {
          result.status = StatusEnum.booltoEnum(result.status);
        }



      }
    }).catch((result) => {
      console.log(result);
    });
  }

  exibirCancelar() {
    if (this.selection.length == 0) {
      this.dialog.warning("É preciso selecionar um documento para cancelar");
      return;
    }

    const modalRef = this.modalService.open(
      this.cancelarModalForm, {
      backdrop: 'static', centered: true, keyboard: false, size: null
    }
    );

    var custodiante = this.shared.clienteSelecionado.cliente;

    modalRef.componentInstance.instance = this.selection;

    modalRef.result.then((result) => {
      if (result && result != 'close') {

        if (result == "cancelado") {
          this.ngOnInit();
        }

        //console.log(result);
        if (result.status != undefined) {
          result.status = StatusEnum.booltoEnum(result.status);
        }

      }
    }).catch((result) => {
      console.log(result);
    });
  }


  // onScroll() {
  //   this.page.number++;
  //   this.filtrar();
  // }


  observador(parte) {
    for (var iPapel in parte.papel) {
      let papel = parte.papel[iPapel];
      if (papel.papel.identificacao == "OBSERVADOR") {
        return true;
      } else {
        return false;
      }
    }
  }

  
  perfilAdmin() {
    return this.shared.perfilUsuarioAdmin;
  }


}



