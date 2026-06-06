import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAlert } from 'app/services/util/dialog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
  selector: 'app-assinar-modal',
  templateUrl: './tipoDocumento-novo-papel-modal.component.html',
  styleUrls: ['./tipoDocumento-novo-papel-modal.component.scss']

})
export class TipoDocumentoNovoPapelModalComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @Input() instance: any;
  @Input() listaOriginal: any[];
  message: IAlert;

  modal: boolean = true;
  constructor(private activeModal: NgbActiveModal,
    protected shared: SharedService) {

  }

  ngOnInit() {
    if (this.instance) {

    }
  }


  get Papel() {
    return this.instance;
  }

  set Papel(data) {
    this.instance = data;
  }




  classUpperCase() {
    return this.shared.classUpperCase;
  }

  perfilUsuarioAdmin(){
      let result = this.shared.perfilUsuarioAdmin();
      return result
  }
}