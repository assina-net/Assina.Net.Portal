import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ListaAssinaPadraoComponent } from 'app/components/assinar/padrao/lista/lista-assina-padrao.component';
import { DocumentoRecusadoService } from 'app/services/assinar/documento/documentoRecusado.service';
import { StatusContratoEnum } from 'app/model/enum/statusContratoEnum';



@Component({
     selector: 'app-lista-documento',
     templateUrl: '../../padrao/lista/lista-assina.component.html',
     styleUrls: ['../../padrao/lista/lista-assina.component.css']
})
export class ListaRecusadoComponent extends ListaAssinaPadraoComponent {

     constructor(modalService: NgbModal,
          private documentoRecusadoService: DocumentoRecusadoService) {
          super(modalService);

          //this.exibirSelecao = true;
          //this.podeCancelar = true;

          this.titulo = "Documentos recusados";
          this.navegacao = " > Assinaturas > Vigentes > Listagem";
          this.rota = "/assinar/recusado";

          this.filtro = {};
          this.filtro.status = 'ATIVO';
          this.filtro.liberadoAssinatura = true;
          this.filtro.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
          this.filtro.partes = [{ nomeRazaoSocial: "", cpfCnpj: "" }]
          if (this.shared.perfilUsuario == 'ROLE_ASSINADOR') {
               this.filtro.partes[0].cpfCnpj = this.shared.usuario.pessoa.cpfCnpj;
          }


          this.page = {
               number: 0,
               size: 30,
               order: 'dataCriacao,DESC'
          };
          this.httpService = this.documentoRecusadoService;
          this.opcoesStatusContrato = this.utilService.enumToKeyValue(StatusContratoEnum);
          this.excluirPerfilAssinador = true;
     }


    
     

     contratoDownload() {

          this.documentoRecusadoService.getDownload(this.objetoSelecionado).subscribe((responseApi: any) => {
               let item = { anexo64: "", nomeArquivo: "" }
               item.anexo64 = responseApi.arquivoByte;
               item.nomeArquivo = responseApi.arquivoNome;
               this.utilService.download(item);

          }, err => {
               this.errorHandler.handle(err);
          });
     }


}


