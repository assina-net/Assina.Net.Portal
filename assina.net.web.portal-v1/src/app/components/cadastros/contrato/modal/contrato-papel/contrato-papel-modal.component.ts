import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PapelService } from 'app/services/config/papel/papel.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { ResponseApi } from 'app/model/util/response-api';

@Component({
  selector: 'app-contrato-papel-modal',
  templateUrl: './contrato-papel-modal.component.html',
  styleUrls: ['./contrato-papel-modal.component.scss']
})
export class ContratoPapelModalComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;
  modal: boolean = false;

  entidade: any;
  tipoDocumento: any;

  message: IAlert;
  protected dialog: DialogService;
  protected errorHandler: ErrorHandlerService;
  ngOnInit() { }

  constructor(route: ActivatedRoute,
    private papelService: PapelService,
    protected shared: SharedService,
    private activeModal: NgbActiveModal
  ) {
    const injector = AppInjector.getInjector();
    this.dialog = injector.get(DialogService);
    this.errorHandler = injector.get(ErrorHandlerService);
    this.entidade = { id: null, nome: null, identificacao: null, assina: true, status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente };
  }

  salvar() {
    this.message = null;

    this.papelService.novoPapelTipoDocumento(this.entidade, this.tipoDocumento).subscribe((responseApi: ResponseApi) => {
      this.dialog.success(`Papel salvo com sucesso!`);
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

  get papel() {
    return this.entidade;
  }

  set papel(data) {
    this.entidade = data;
  }

  perfilUsuarioAdmin() {
    return this.shared.usuario.perfil == PerfilEnum.ROLE_ADMIN
  }

}
