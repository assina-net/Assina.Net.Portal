import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaAssinaPadraoComponent } from 'app/components/assinar/padrao/lista/lista-assina-padrao.component';
import { DocumentoVigenteService } from 'app/services/assinar/documento/documentoVigente.service';
import { StatusContratoEnum } from 'app/model/enum/statusContratoEnum';



@Component({
     selector: 'app-lista-documento',
     templateUrl: '../../padrao/lista/lista-assina.component.html',
     styleUrls: ['../../padrao/lista/lista-assina.component.css']
})
export class ListaVigenteComponent extends ListaAssinaPadraoComponent {

     constructor(modalService: NgbModal,
          private documentoVigenteService: DocumentoVigenteService) {
          super(modalService);

          this.exibirSelecao = true;
          this.fazDownload = true;
          //this.podeCancelar = true;

          this.titulo = "Documentos vigentes";
          this.navegacao = " > Assinaturas > Vigentes > Listagem";
          this.rota = "/assinar/vigente";
          this.gerarAssinatura=true && this.shared.perfilUsuariSistema();
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
          this.httpService = this.documentoVigenteService;
          this.opcoesStatusContrato = this.utilService.enumToKeyValue(StatusContratoEnum);
     }

     contratoDownload(event: any) {
          event.target.disabled = true;
          if (this.selection.length == 0) {
               this.download(this.objetoSelecionado, event, true);
          } else {
               let listaDownload = this.listagem.filter(c => this.selection.includes(c.id));
               let ultimoDoc = listaDownload[listaDownload.length - 1]
               listaDownload.forEach(contrato => {
                    this.download(contrato, event, ultimoDoc == contrato);
               })
          }
     }

     download(contrato: any, event: any, habilitaBotao: boolean) {
          this.documentoVigenteService.getDownload(contrato).subscribe((responseApi: any) => {
               let item = { anexo64: "", nomeArquivo: "" };
               item.anexo64 = responseApi.arquivoByte;
               item.nomeArquivo = responseApi.arquivoNome;
               this.utilService.download(item);
               if (habilitaBotao)
                    event.target.disabled = false;
          }, err => {
               event.target.disabled = false;
               this.errorHandler.handle(err);
          })
     }

     gerarAssinaturaNovamente(contrato: any) {
          this.documentoVigenteService.gerarAssinaturaNovamente(this.objetoSelecionado).subscribe((responseApi: any) => {
          this.dialog.success(`Solicitação de nova geração de assinatura(s) realizada com sucesso !`);
          }, err => {
               this.errorHandler.handle(err);
          })
     }
}


