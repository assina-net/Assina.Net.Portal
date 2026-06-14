import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaAssinaPadraoComponent } from 'app/components/assinar/padrao/lista/lista-assina-padrao.component';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { StatusContratoEnum } from 'app/model/enum/statusContratoEnum';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
    selector: 'app-lista-documento',
    templateUrl: '../../padrao/lista/lista-assina.component.html',
    styleUrls: ['../../padrao/lista/lista-assina.component.css']
})
export class ListaPendenteComponent extends ListaAssinaPadraoComponent {


    constructor(modalService: NgbModal,
        private documentoService: DocumentoService) {
        super(modalService);

        this.exibirSelecao = true;
        this.podeAssinar = true;

        this.titulo = "Documentos pendentes";
      //  this.navegacao = " > Assinaturas > Pendentes > Listagem";
        this.rota = "/assinar/pendente";

        this.filtro = {};
        this.filtro.status = 'ATIVO';
        this.filtro.liberadoAssinatura = true;
        this.filtro.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
        this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }]

        if (this.shared.verificaPerfilClienteSelecionado(PerfilEnum.ROLE_ASSINADOR)) {
            this.filtro.partes[0].cpfCnpj = this.shared.usuario.pessoa.cpfCnpj;
        }

        this.page = {
            number: 0,
            size: 30,
            order: 'dataSolicitacaoAssinatura,DESC'
        };
        this.httpService = this.documentoService;
        this.opcoesStatusContrato = this.utilService.enumToKeyValue(StatusContratoEnum);
    }





}


