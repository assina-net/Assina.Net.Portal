import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaParametrosWhatsAppComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Parâmetros WhatsApp";
    this.navegacao = " > Config > Parâmetros WhatsApp > Listagem";
    this.rota = "/config/parametrosWhatsApp";

    this.Categoria = "PARAMETROS_WHATSAPP";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
