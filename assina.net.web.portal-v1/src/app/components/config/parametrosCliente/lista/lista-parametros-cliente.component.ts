import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaParametrosClienteComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Parâmetros Cliente";
    this.navegacao = " > Config > Tipo Documento > Listagem";
    this.rota = "/config/parametrosCliente";

    this.Categoria = "PARAMETROS_CLIENTE";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
