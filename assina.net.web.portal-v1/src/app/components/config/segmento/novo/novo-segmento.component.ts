import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { SegmentoService } from 'app/services/config/segmento/segmento.service';

@Component({
  selector: 'app-novo-segmento',
  templateUrl: './novo-segmento.component.html',
  styleUrls: ['./novo-segmento.component.scss']
})
export class NovoSegmentoComponent extends PadraoNovoComponent {

  @ViewChild('form', { static: true }) form: NgForm;
  modal: boolean = false;


  constructor(route: ActivatedRoute,
    private segmentoService: SegmentoService) {
    super(route);
    this.titulo = "Novo Segmento";
    this.navegacao = " > Config > Segmentos > Novo";
    this.rota = "/config/segmentos";

    //Para carregar os combos
    this.entidade = {id:'', nome:'', identificacao:'', status:'ATIVO'};
    this.httpService = this.segmentoService;
  }


  get podeVoltar() {
    return this.consultando || (!this.editando && Boolean(this.form.pristine));
  }

  get Segmento() {
    return this.entidade;
  }

  set Segmento(data) {
    this.entidade = data;
  }

}
