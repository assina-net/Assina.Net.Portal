import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
//import { UtilService } from 'app/services/util/util.service';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { DetalheAssinaComponent } from 'app/components/assinar/padrao/detalhe/detalhe-assina.component'

@Component({
    selector: 'app-detalhe-pendente',
    templateUrl: '../../padrao/detalhe/detalhe-assina.component.html',
    styleUrls: ['../../padrao/detalhe/detalhe-assina.component.css']
})
export class DetalhePendenteComponent extends DetalheAssinaComponent {


    constructor(route: ActivatedRoute,
        modalService: NgbModal,
        //utilService: UtilService,
        documentoService: DocumentoService) {
        super(route, modalService, //utilService, 
            documentoService);

        this.mensagemCancelamento = "Deseja cancelar a assinatura deste contrato ?";
        this.mensagemRecusar = "Deseja recusar a assinatura deste contrato ?";

        this.titulo = "Detalhe do contrato";
        this.navegacao = " > Assinaturas > Pendentes > Detalhar";
        this.rota = "/assinar/pendente/";

        this.entidade = {
            contrato: {
                status: "ATIVO", statusContrato: "NAOLIBERADOASSINTAURA"
                , remetente: this.shared.usuario, custodiante: { id: this.shared.clienteSelecionado.cliente.id },
                partes: [], documentos: []
            }
        };


    }

}

