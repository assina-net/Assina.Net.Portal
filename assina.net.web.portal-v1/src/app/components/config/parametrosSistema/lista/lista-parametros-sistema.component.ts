import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaParametrosSistemaComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Parametros Sistema";
    this.navegacao = " > Config > Parâmetros Sistema > Listagem";
    this.rota = "/config/parametrosSistema";

    this.Categoria = "SISTEMA";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
