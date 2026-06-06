import { Component } from '@angular/core';
import { ListaSistemaAtributoComponent } from '../../sistemaAtributo/lista/lista-sistema-atributo.component';

@Component({
  selector: 'app-parametros-cliente-documento',
  templateUrl: '../../sistemaAtributo/lista/lista-sistema-atributo.component.html',
  styleUrls: ['../../sistemaAtributo/lista/lista-sistema-atributo.component.scss']
})
export class ListaAlertasComponent extends ListaSistemaAtributoComponent {

  constructor() {
    super();

    this.titulo = "Lista Configurações de Alerta";
    this.navegacao = " > Config > Alertas > Listagem";
    this.rota = "/config/alertas";

    this.Categoria = "PARAMETROS_ALERTA";

    this.page = {
      number: 0,
      size: 30,
      order: ''
    };
  }

}
