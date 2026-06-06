import { Component } from '@angular/core';
import { PadraoListaComponent } from '../../../padrao/lista/padrao-lista.component';
import { ContratoService } from 'app/services/cadastro/cadastro/contrato.service';
import { StatusContratoEnum } from 'app/model/enum/statusContratoEnum';
import { SistemaTipoAtributoEnum } from 'app/model/enum/SistemaTipoAtributoEnum';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from "app/model/util/response-api";

@Component({
    selector: 'app-lista-contrato',
    templateUrl: './lista-contrato.component.html',
    styleUrls: ['./lista-contrato.component.css']
})
export class ListaContratoComponent extends PadraoListaComponent {

    opcoesStatusContrato: any;
    selection = [];
    tudoSelecionado: boolean;
    fomentada: string;
    segurado: string;
    listagemOriginal = [];

    public shared: SharedService;

    constructor(private contratoService: ContratoService) {
        super();

        this.shared = SharedService.getInstance();

        this.titulo = "Lista de Contratos";
        //this.navegacao = " > Cadastro > Contrato > Listagem";
        this.rota = "/cadastro/contrato";

        this.filtro = {};
        this.filtro.status = 'ATIVO';
        this.filtro.statusContrato = 'NAOLIBERADOASSINTAURA';
        this.filtro.dataStatusContrato = null;

        this.filtro.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
        this.page = {
            number: 0,
            size: 30,
            order: 'dataCriacao,DESC'
        };
        this.httpService = this.contratoService;

        this.opcoesStatusContrato = this.utilService.enumToKeyValue(StatusContratoEnum);

    }

    afterRetrieveData() {
        this.listagemOriginal = this.listagem;
    }

    filtrar() {
        super.filtrar();
    }


    clienteChange() {
        this.listagem = [];
        this.selection = [];
        this.filtro.custodiante.id = this.shared.clienteSelecionado.cliente.id;        
        this.page.number=0;
        super.filtrar();
    }

    alteranaSelecao(contrato) {
        if (this.verificaSePodeLiberar(contrato)) {
            var idx = this.selection.indexOf(contrato.id);
            // Is currently selected
            if (idx > -1) {
                this.selection.splice(idx, 1);
            }
            // Is newly selected
            else {
                this.selection.push(contrato.id);
            }
        } else {
            this.dialog.warning("Este documento não está válido para liberacao no momento.<br><br>" + contrato.validacaoMensagem);
        }
    }

    selecionaTudo() {
        this.selection = [];
        this.listagem.forEach(item => {
            if (this.verificaSePodeLiberar(item))
                this.selection.push(item.id);
        })
        this.tudoSelecionado = true;
    }

    limpaSelecao() {
        this.selection = [];
        this.tudoSelecionado = false;
    }

    verificaSePodeLiberar(contrato) {
        return contrato.validado;
    }

    filtarFomentada() {
        let listaFiltrada: any[] = new Array();;

        this.listagemOriginal.forEach(contrato => {
        contrato.mapPapel['FOMENTADA'].forEach(
            parte => {
                if (parte.nomeRazaoSocial.includes(this.fomentada) ||
                    parte.cpfCnpj.includes(this.fomentada)) {
                    if (!listaFiltrada.includes(contrato)) {
                        listaFiltrada.push(contrato);
                    }
                }
            }
        )
        })

        this.listagem = listaFiltrada
    }

    filtarSegurado() {
        let listaFiltrada: any[] = new Array();;

        this.listagemOriginal.forEach(contrato => {
        contrato.mapPapel['SEGURADO'].forEach(
            parte => {
                if (parte.nomeRazaoSocial.includes(this.segurado) ||
                    parte.cpfCnpj.includes(this.segurado)) {
                    if (!listaFiltrada.includes(contrato)) {
                        listaFiltrada.push(contrato);
                    }
                }
            }
        )
        })

        this.listagem = listaFiltrada
    }

    liberarAssinatura() {
        this.loading.show();
        let contratoLiberacaoLoteRequest = {
            usuario: this.shared.usuario,
            contratos: this.selection
        }
        this.contratoService.liberarAssinaturaLote(contratoLiberacaoLoteRequest).subscribe((responseApi: ResponseApi) => {
            this.selection = [];
            this.tudoSelecionado = false;
            super.filtrar();
        }, err => {
            this.errorHandler.handle(err);
        });
    }
}
