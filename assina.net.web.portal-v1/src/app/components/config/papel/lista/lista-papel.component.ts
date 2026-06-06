import { Component } from '@angular/core';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { PapelService } from 'app/services/config/papel/papel.service';
import { PerfilEnum } from '../../../../model/enum/perfilEnum';

@Component({
  selector: 'app-lista-papel',
  templateUrl: './lista-papel.component.html',
  styleUrls: ['./lista-papel.component.scss']
})
export class ListaPapelComponent extends PadraoListaComponent {

  constructor(private papelService: PapelService) {
    super();

    this.titulo = "Lista de Papéis";
    this.navegacao = " > Config > Papel > Listagem";
    this.rota = "/config/papel";
    this.filtro = { id: '', status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente };
    this.page = {
      number: 0,
      size: 30,
      order: 'nome'
    };

    this.httpService = this.papelService;
  }


  clienteChange() {
    this.listagem = [];
    this.filtro.cliente = this.shared.clienteSelecionado.cliente;
    this.page.number=0;
    super.filtrar();
  }
}
