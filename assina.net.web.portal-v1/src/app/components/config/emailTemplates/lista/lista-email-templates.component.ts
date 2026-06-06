import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaEmailTemplatesComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista E-mail Templates";
    this.navegacao = " > Config > E-mail Templates > Listagem";
    this.rota = "/config/emailsTemplate";

    this.Categoria = "EMAIL_TEMPLATES";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
