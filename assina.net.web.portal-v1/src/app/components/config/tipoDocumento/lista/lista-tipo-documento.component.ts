import { Component } from '@angular/core';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { TipoDocumentoService } from 'app/services/config/tipoDocumento/tipoDocumento.service';
import { PerfilEnum } from '../../../../model/enum/perfilEnum';



@Component({
  selector: 'app-lista-tipo-documento',
  templateUrl: './lista-tipo-documento.component.html',
  styleUrls: ['./lista-tipo-documento.component.scss']
})
export class ListaTipoDocumentoComponent extends PadraoListaComponent {



  constructor(private tipoDocumentoService: TipoDocumentoService) {
    super();

    this.titulo = "Lista de Tipo Documento";
    this.navegacao = " > Config > Tipo Documento > Listagem";
    this.rota = "/config/tipoDocumento";
    this.filtro = { id: '', status: 'ATIVO', cliente: this.shared.clienteSelecionado.cliente };
    this.page = {
      number: 0,
      size: 30,
      order: 'nome'
    };

    this.httpService = this.tipoDocumentoService;
  }


  clienteChange() {
    this.listagem = [];
    this.filtro.cliente = this.shared.clienteSelecionado.cliente;
    this.page.number=0;
    super.filtrar();
  }

  perfilUsuarioAdmin(){
    //return this.shared.usuario.perfil==PerfilEnum.ROLE_ADMIN
      let result = this.shared.perfilUsuarioAdmin();
      return result
  }


}
