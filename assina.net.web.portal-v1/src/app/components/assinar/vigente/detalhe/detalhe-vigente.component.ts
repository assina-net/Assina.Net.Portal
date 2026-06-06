import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
//import { UtilService } from 'app/services/util/util.service';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { DetalheAssinaComponent } from 'app/components/assinar/padrao/detalhe/detalhe-assina.component'

@Component({
    selector: 'app-detalhe-documento',
    templateUrl: '../../padrao/detalhe/detalhe-assina.component.html',
    styleUrls: ['../../padrao/detalhe/detalhe-assina.component.css']
})
export class DetalheVigenteComponent extends DetalheAssinaComponent {

    constructor(route: ActivatedRoute,
        modalService: NgbModal,
        //utilService: UtilService,
        documentoService: DocumentoService) {
        super(route, modalService,//utilService,
             documentoService);

        this.mensagemCancelamento = "Deseja cancelar a vigência deste contrato ?";

        this.titulo = "Detalhe do contrato";
        this.navegacao = " > Assinaturas > Vigentes > Detalhar";
        this.rota = "/assinar/vigente/";

        this.entidade = {
            contrato: {
                status: "ATIVO", statusContrato: "NAOLIBERADOASSINTAURA"
                , remetente: this.shared.usuario, custodiante: { id: this.shared.clienteSelecionado.cliente.id },
                partes: [], documentos: []
            }
        };


    }


}

