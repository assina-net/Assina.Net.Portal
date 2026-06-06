import { Component } from '@angular/core';
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { Usuario } from "app/model/cadastro/usuario";
import { Pessoa } from "app/model/cadastro/pessoa";
import { ResponseApi } from "app/model/util/response-api";

@Component({
    selector: 'app-lista-usuario',
    templateUrl: './lista-usuario.component.html',
    styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent extends PadraoListaComponent {

    opcoesPerfil: any;

    constructor(private usuarioService: UsuarioService) {
        super();

        this.titulo = "Lista de Usuários";
        this.navegacao = " > Cadastro > Usuário > Listagem";
        this.rota = "/cadastro/usuario";


        if (this.perfilEditar()) {
            this.filtro = {
                cliente: { id: this.shared.clienteSelecionado.cliente.id, pessoa: new Pessoa('', '', '', '', null, '', null) },
                usuario: new Usuario('', '', '', '', StatusEnum.ATIVO, null, new Pessoa('', '', '', '', null, '', null), null, null),
                status: StatusEnum.label(StatusEnum.ATIVO)
            };


            this.page = {
                number: 0,
                size: 30,
                order: 'usuario.pessoa.nomeRazaoSocial,ASC'
            };

        } else {
            this.filtro = {
                cliente: null,
                usuario: new Usuario(this.shared.usuario.id, '', '', '', StatusEnum.ATIVO, null, new Pessoa('', '', '', '', null, '', null), null, null),
                perfilClienteSelecionado: this.shared.clienteSelecionado.perfil,
                status: StatusEnum.label(StatusEnum.ATIVO)
            };

            this.page = {
                number: 0,
                size: 30,
                order: 'pessoa.nomeRazaoSocial,ASC'
            };
        }


        this.httpService = this.usuarioService;

        this.opcoesPerfil = this.utilService.enumToKeyValue(PerfilEnum);
    }


    filtrar() {
        super.filtrar();
    }

    clienteChange() {
        if (this.filtro.perfilClienteSelecionado != this.shared.clienteSelecionado.perfil) {
            if (this.perfilEditar()) {
                this.filtro.cliente = { id: this.shared.clienteSelecionado.cliente.id, pessoa: new Pessoa('', '', '', '', null, '', null) };
                this.filtro.usuario = new Usuario('', '', '', '', StatusEnum.ATIVO, null, new Pessoa('', '', '', '', null, '', null), null, null);
                this.page.order = 'usuario.pessoa.nomeRazaoSocial,ASC'
            } else {
                this.filtro.cliente = null;
                this.filtro.usuario = new Usuario(this.shared.usuario.id, '', '', '', StatusEnum.ATIVO, null, new Pessoa('', '', '', '', null, '', null), null, null),
                    this.page.order = 'pessoa.nomeRazaoSocial,ASC'
            }
        } else if (this.perfilEditar()) {
            this.filtro.cliente.id = this.shared.clienteSelecionado.cliente.id;
        }

        this.filtro.perfilClienteSelecionado = this.shared.clienteSelecionado.perfil;
        this.page.number=0;
        this.listagem = [];
        super.filtrar();
    }

    perfilEditar() {
        let result = PerfilEnum.parse(this.shared.clienteSelecionado.perfil) == PerfilEnum.ROLE_ADMIN;
        return result;
    }

    excluir() {
        if (!this.objetoSelecionado) {
            this.dialog.warning(
                'Selecione um registro'
            );
            return;
        }
        this.dialog.confirmDelete('Deseja excluir este registro ?')
            .then((candelete: boolean) => {
                this.loading.show();
                if (candelete && this.beforeExclusao()) {
                    this.message = {};
                    let usuarioCliente = { id: null, usuario: { id: this.objetoSelecionado.id }, cliente: { id: this.shared.clienteSelecionado.cliente.id } };
                    this.usuarioService.inativar(usuarioCliente).subscribe((responseApi: ResponseApi) => {
                        this.loading.hide();
                        this.dialog.success(
                            'Registro excluído com sucesso!'
                        );
                        this.findAll(this.page, this.filtro);
                    }, err => {
                        this.errorHandler.handle(err);
                    });
                } else {
                    this.loading.hide();
                }
            });
    }

    classLowerCase() {
        return this.shared.classLowerCase;
    }
}


