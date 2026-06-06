import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
//import { UtilService } from 'app/services/util/util.service';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';

import { NovoContratoComponent } from 'app/components/cadastros/contrato/novo/novo-contrato.component';
import { ContratoService } from 'app/services/cadastro/cadastro/contrato.service';

@Component({
    selector: 'app-detalhe-documento',
    templateUrl: '../../../cadastros/contrato/novo/novo-contrato.component.html',
    styleUrls: ['../../../cadastros/contrato/novo/novo-contrato.component.css']
})
export class DetalheRecusadoComponent extends NovoContratoComponent {



    constructor(route: ActivatedRoute,
        modalService: NgbModal,
  //      utilService: UtilService,
        contratoService: ContratoService,
        documentoService: DocumentoService) {

           
        super(route, contratoService,// utilService,
             documentoService);

        
        //this.mensagemCancelamento = "Deseja cancelar a vigência deste contrato ?";

        this.titulo = "Detalhe do contrato";
        this.navegacao = " > Assinaturas > Recuaadas > Detalhar";
        this.rota = "/assinar/recusado/";

     
       


    }


}

