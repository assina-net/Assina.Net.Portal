import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'app/model/util/page';
import { UtilService } from 'app/services/util/util.service';
import { Usuario } from '../../../../model/cadastro/usuario';
import { Pessoa } from '../../../../model/cadastro/pessoa';
import { PerfilEnum } from '../../../../model/enum/perfilEnum';
import { StatusEnum } from '../../../../model/enum/statusEnum';
import { TipoPessoaEnum } from '../../../../model/enum/tipoPessoaEnum';
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { ResponseApi } from '../../../../model/util/response-api';

@Component({
    selector: 'app-alterar-senha-usuario',
    templateUrl: './alterar-senha.component.html',
    styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {


    titulo: string = null;
    navegacao: string = null;

    constructor() {
        this.titulo = "Alteração senha";
        this.navegacao = " > Alterar Senha";
    }

}