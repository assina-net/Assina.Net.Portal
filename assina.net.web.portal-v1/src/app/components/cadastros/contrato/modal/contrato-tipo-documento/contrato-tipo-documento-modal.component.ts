import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoDocumentoService } from 'app/services/config/tipoDocumento/tipoDocumento.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { ResponseApi } from 'app/model/util/response-api';

@Component({
  selector: 'app-contrato-tipo-documento-modal',
  templateUrl: './contrato-tipo-documento-modal.component.html',
  styleUrls: ['./contrato-tipo-documento-modal.component.scss']
})
export class ContratoTipoDocumentoModalComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;
  modal: boolean = false;

  entidade: any;

  message: IAlert;
  protected dialog: DialogService;
  protected errorHandler: ErrorHandlerService;
  ngOnInit() { }

  constructor(route: ActivatedRoute,
    private tipoDocumentoService: TipoDocumentoService,
    protected shared: SharedService,
    private activeModal: NgbActiveModal
  ) {
    const injector = AppInjector.getInjector();
    this.dialog = injector.get(DialogService);
    this.errorHandler = injector.get(ErrorHandlerService);
    this.entidade = { tipoDocumento :{ id: null, nome: null, identificacao: null, assina: true, status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente },
                      cliente : this.shared.clienteSelecionado.cliente, partes:[] };
  }

  salvar() {
    this.message = null;

    this.tipoDocumentoService.save(this.entidade).subscribe((responseApi: ResponseApi) => {
      this.dialog.success(`Tipo Documento salvo com sucesso!`);
      this.activeModal.close(responseApi);
    }, err => {
      this.errorHandler.handle(err);
    });
  }

  voltar() {
    this.activeModal.close('close');
  }

  classUpperCase() {
    return this.shared.classUpperCase;
  }

  get tipoDocumento() {
    return this.entidade.tipoDocumento;
  }

  set tipoDocumento(data) {
    this.entidade.tipoDocumento = data;
  }

  perfilUsuarioAdmin() {
    return this.shared.usuario.perfil == PerfilEnum.ROLE_ADMIN
  }

}
