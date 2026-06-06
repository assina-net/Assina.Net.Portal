import { Component } from '@angular/core';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { SegmentoService } from 'app/services/config/segmento/segmento.service';

@Component({
  selector: 'app-lista-segmento',
  templateUrl: './lista-segmento.component.html',
  styleUrls: ['./lista-segmento.component.scss']
})
export class ListaSegmentoComponent extends PadraoListaComponent {

  constructor(private segmentoService: SegmentoService) {
    super();

    this.titulo = "Lista de Segmentos";
    this.navegacao = " > Config > Segmentos > Listagem";
    this.rota = "/config/segmentos";
    this.filtro = { id: '', status: 'ATIVO' };
    this.page = {
      number: 0,
      size: 30,
      order: 'nome'
    };

    this.httpService = this.segmentoService;
  }

}
