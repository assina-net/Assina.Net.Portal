import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaParametrosEmailComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Parâmetros Cliente";
    this.navegacao = " > Config > Parametros E-mail > Listagem";
    this.rota = "/config/parametrosEmail";

    this.Categoria = "PARAMETROS_EMAIL";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
