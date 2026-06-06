import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaTermosComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Termos";
    this.navegacao = " > Config > Termos > Listagem";
    this.rota = "/config/termos";

    this.Categoria = "TERMOS";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
