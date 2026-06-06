import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaParametrosSmsComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Parâmetros SMS";
    this.navegacao = " > Config > Parametros SMS > Listagem";
    this.rota = "/config/parametrosSms";

    this.Categoria = "PARAMETROS_SMS";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
