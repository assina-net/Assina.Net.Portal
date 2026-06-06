import { Component } from '@angular/core';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { AppInjector } from "app/services/util/app-injector.service";
import { SistemaAtributoService } from 'app/services/config/sistemaAtributo/sistemaAtributo.service';
import { SharedService } from 'app/services/util/shared.service';

@Component({
  selector: 'app-lista-sistema-atributo',
  templateUrl: './lista-sistema-atributo.component.html',
  styleUrls: ['./lista-sistema-atributo.component.scss']
})
export class ListaSistemaAtributoComponent extends PadraoListaComponent {


  protected sistemaAtributoService: SistemaAtributoService;
  protected shared: SharedService
  //protected route: ActivatedRoute;
  filtro = { cliente: this.shared.clienteSelecionado.cliente.id, categoria: '', valorAtributo:'', descricao:'' };

  constructor() {
    super();
    const injector = AppInjector.getInjector();
    this.sistemaAtributoService = injector.get(SistemaAtributoService);
    this.httpService = this.sistemaAtributoService;

    this.shared = injector.get(SharedService);

  }

  set Categoria(value) {
    this.filtro.categoria = value;
  }

  clienteChange() {
    this.filtro.cliente = this.shared.clienteSelecionado.cliente.id;
    this.page.number=0;
    this.listagem = [];
    super.filtrar();
  }

  afterExclusao(response: any) {
    this.shared.clienteSelecionado.sistemaAtributo[response.tipoAtributo.tipoAtributo] = undefined;
    return true;
  };


  getValores(value: string) {
    return JSON.parse(value);
  }

}
