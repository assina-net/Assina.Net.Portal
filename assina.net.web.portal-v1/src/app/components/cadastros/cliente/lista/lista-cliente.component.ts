import { Component } from '@angular/core';
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { ClienteService } from 'app/services/cadastro/cliente/cliente.service';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { Usuario } from "app/model/cadastro/usuario";
import { Pessoa } from "app/model/cadastro/pessoa";
import { ResponseApi } from "app/model/util/response-api";

@Component({
    selector: 'app-lista-cliente',
    templateUrl: './lista-cliente.component.html',
    styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent extends PadraoListaComponent {

    tipoPlano: any;
    tipoCliente: any;
    tipoClienteList = [];
    tipoPlanoList = [];

    constructor(private clienteService: ClienteService) {
        super();

        this.titulo = "Lista de Clientes";
        this.navegacao = " > Cadastro > Cliente > Listagem";
        this.rota = "/cadastro/cliente";

        this.filtro = {
            id: '', status: 'ATIVO', naoMostrar: false, 
            pessoa: new Pessoa('', '', '', '', null, '', null),
            segmento:{id:''},
            plano:{id:''}
        }


        this.page = {
            number: 0,
            size: 30,
            order: 'pessoa.nomeRazaoSocial,ASC'
        }

        this.httpService = this.clienteService;
        this.buscarCombos();
    }

    filtrar() {
        super.filtrar();
    }

    clienteChange() {        
        this.filtro.cliente.id = this.shared.clienteSelecionado.cliente.id;
        this.listagem = [];        
        this.page.number=0;
        super.filtrar();
    }

    perfilEditar() {
        let result = PerfilEnum.parse(this.shared.perfilUsuario) != PerfilEnum.ROLE_ASSINADOR;
        return result;
    }

    afterRetrieveCombo() {
        if (this.listCombos != undefined)
            this.tipoClienteList = this.utilService.preencheCombos(this.listCombos['TipoCliente']);
            this.tipoPlanoList = this.utilService.preencheCombos(this.listCombos['TipoPlano'])
    }

    classLowerCase() {
        return this.shared.classLowerCase;
    }

}


