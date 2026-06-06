import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NovoSistemaAtributoComponent } from '../../sistemaAtributo/novo/novo-sistema-atributo.component';

@Component({
  selector: 'app-novo-parametros-cliente',
  templateUrl: '../../sistemaAtributo/novo/novo-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/novo/novo-sistema-atributo.component.scss']
})
export class NovoWhatsAppTemplatesComponent extends NovoSistemaAtributoComponent {

  @ViewChild('form', { static: true }) form: NgForm;

  constructor(route: ActivatedRoute) {
    super(route);

    this.titulo = "WhatsApp Template";
    this.navegacao = " > Config > WhatsApp Templates > Editar";
    this.rota = "/config/whatsappTemplate";

  }


}
