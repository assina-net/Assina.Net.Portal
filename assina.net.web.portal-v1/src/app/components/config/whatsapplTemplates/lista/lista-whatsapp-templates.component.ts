import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaWhatsAppTemplatesComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista WhatsApp Templates";
    this.navegacao = " > Config > WhatsApp Templates > Listagem";
    this.rota = "/config/whatsappTemplate";

    this.Categoria = "WHATSAPP_TEMPLATES";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
