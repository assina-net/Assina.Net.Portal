import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAlert } from 'app/services/util/dialog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
  selector: 'app-assinar-modal',
  templateUrl: './tipoDocumento-papel-modal.component.html',
  styleUrls: ['./tipoDocumento-papel-modal.component.scss']

})
export class TipoDocumentoPapelModalComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;
  @Input() listaOriginal: any[];
  message: IAlert;

  papelEdit: any = { status: 'ATIVO', token: false, 'certificate': false, papel: { id: "", nome: "" } };


  _dadosComplementares: any;
  papelList = [];

  modal: boolean = true;
  constructor(private activeModal: NgbActiveModal,
    protected shared: SharedService) {

  }

  ngOnInit() {

    if (this.instance) {
      this.papelEdit = this.instance;
      //this.titulo = "Cadastro > " + this.origem + " > Editar Telefone";
    } else {
      this.papelEdit = { token: false, 'certificate': false, papel: { id: "", nome: "" } };
      //this.titulo = "Cadastro > " + this.origem + " > Novo Telefone"
    }
  }


  set dadosComplementares(dadosComplementares: any) {
    this._dadosComplementares = dadosComplementares;

    if (dadosComplementares.comboPapeis != undefined) {
      this.papelList = dadosComplementares.comboPapeis;
    }
  }

 
  classUpperCase() {
    return this.shared.classUpperCase;
  }

  perfilUsuarioAdmin() {
    let result = this.shared.perfilUsuarioAdmin();
    return result
  }

  antesSalvarEvent() {
    let item = this.papelList.find(x => x.item_id == this.papelEdit.papel.id);
    if (item != undefined)
        this.papelEdit.papel.nome = item.item_text;
    this.instance = this.papelEdit;
}

}