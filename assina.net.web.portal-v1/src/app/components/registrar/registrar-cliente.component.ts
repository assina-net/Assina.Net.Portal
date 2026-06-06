import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoPessoaEnum } from '../../model/enum/tipoPessoaEnum';
import { RegistroService } from 'app/services/registrar/registro.service';
import { ResponseApi } from '../../model/util/response-api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { UtilService } from 'app/services/util/util.service';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { AppInjector } from "app/services/util/app-injector.service";
import { SharedService } from 'app/services/util/shared.service';


@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;

  entidade = null;
  message: IAlert;
  cadastrado = null;
  clienteNovo = true;
  usuarioNovo = true;
  recaptcha2: boolean = false;

  protected dialog: DialogService;
  protected shared: SharedService;

  constructor(route: ActivatedRoute,
    private registroService: RegistroService,
    private errorHandler: ErrorHandlerService,
    private loading: NgxSpinnerService,
    private utilService: UtilService
    
  ) {

    const injector = AppInjector.getInjector();
    this.dialog = injector.get(DialogService);
    this.shared = injector.get(SharedService);
  }


  ngOnInit() {
    this.cadastrado = false;

    this.entidade = {
      idPlano: "C526767A-8789-4C55-9E44-6C9B7FC83B52", //plano gratuito
      nomeRazaoSocial: null,
      rgie: null,
      cpfCnpj: null,
      nomeRazaoSocialResponsavel: null,
      cpfCnpjResponsavel: null,
      tipoPessoa: TipoPessoaEnum.label(TipoPessoaEnum.FISICA),
      email: null,
      celular: null,
      indicacao: null
    };
  }

  get cliente() {
    return this.entidade;
  }

  set cliente(data) {
    this.entidade = data;
  }


  salvar() {

    // if(!this.recaptcha2) {
    //   this.showMessage({
    //     type: 'danger',
    //     text: "Desafio captcha inválidao. Favor verificar!"
    //   });
    //   return;
    // }

    if (this.form.invalid) {
      UtilService.setAsTouched(this.form.form);
      this.showMessage({
        type: 'danger',
        text: "Existem informações inválidas ou nulas. Favor verificar!"
      });
      return;
    }

    this.loading.show();
    this.registroService.registar(this.entidade).subscribe((responseApi: ResponseApi) => {
      this.cadastrado = responseApi;
      this.loading.hide();
    }, err => {
      this.cadastrado = false;
      this.errorHandler.handle(err);
      this.loading.hide();
    });

  }

  showMessage(message: IAlert) {
    this.message = message;
    this.dialog.showMessage(message);
  }

  alterouCliente(cpfCnpj: any) {
    this.registroService.cliente(cpfCnpj).subscribe((responseApi: ResponseApi) => {
      if (responseApi == null) {
        this.clienteNovo = true;
      } else {
        this.clienteNovo = false;
        this.showMessage({
          type: 'danger',
          text: 'Cliente já cadastrado em nosso sistema.'
        });
      }
    }, err => {
      this.errorHandler.handle(err);
    });
  }



  handleSuccess() {
    this.recaptcha2 = true;
  }

  handleLoad() {
    this.recaptcha2 = false;
  }

  classLowerCase() {
    return this.shared.classLowerCase;
  }
  





  // alterouCpfCNPJ(campoCpfCnpj) {
  //   var cpfCnpj = undefined;
  //   if (campoCpfCnpj == 'cliente')
  //     cpfCnpj = this.cliente.cpfCnpj
  //   else if (campoCpfCnpj == 'responsavel')
  //     cpfCnpj = this.cliente.cpfCnpj

  //   this.registroService.cliente(cpfCnpj).subscribe((responseApi: ResponseApi) => {
  //     if (campoCpfCnpj == 'cliente')
  //       this.PreencheDadosCliente(responseApi);
  //     else if (campoCpfCnpj == 'responsavel')
  //       this.PreencheDadosUsuario(responseApi);
  //   }, err => {
  //     this.errorHandler.handle(err);
  //   });
  // }

  // PreencheDadosUsuario(pessoa: any) {
  //   if (pessoa == null) {
  //     return;
  //   }
  //   this.parte.nomeRazaoSocial = pessoa.nomeRazaoSocial;
  //   this.parte.email = pessoa.email;
  //   let lstCelular = [{ numero: "" }];
  //   if (pessoa.pessoaTelefone != null) {
  //     let telefoneComTipo = pessoa.pessoaTelefone.filter(t => t.tipoTelefone != null);
  //     lstCelular = telefoneComTipo.filter(t => t.tipoTelefone.identificacao == "CELULAR");
  //   }

  //   if (lstCelular.length > 0)
  //     this.parte.celular = lstCelular[0].numero;

  // }

}
