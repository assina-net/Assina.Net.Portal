import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';
import { ResponseApi } from '../../../../../model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { SharedService } from 'app/services/util/shared.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { NgxSpinnerService } from "ngx-spinner";

import { of } from 'rxjs';
import * as LZString from 'lz-string';

interface nodeTree {
  name: string;
  // level: number;
  icon?: string;
  iconExpanded?: string;
  children?: nodeTree[];
}

// const GetLevel = (node: TestData) => node.level;
// const IsExpandable = (node: TestData) => node.children && node.children.length > 0;
const GetChildren = (node: nodeTree) => of(node.children);
// const TC = new FlatTreeControl(GetLevel, IsExpandable);
const TC = new NestedTreeControl(GetChildren);



@Component({
  selector: 'app-assinar-visualizar-modal',
  templateUrl: './visualizar-modal.component.html',
  styleUrls: ['./visualizar-modal.component.scss']

})
export class VisualizarModalComponent implements OnInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('pdfViewer', { static: true }) pdfViewer;
  @Input() instance: any;

  documento: any = {};
  documentoPDF: any = {};
  byteArray: Uint8Array;
  message: IAlert;


  tc = TC;
  data = [];

  protected errorHandler: ErrorHandlerService;
  protected loading: NgxSpinnerService;

  constructor(private utilService: UtilService,
    private documentoService: DocumentoService,
    private dialog: DialogService,
    private shared: SharedService) {
    const injector = AppInjector.getInjector();
    this.errorHandler = injector.get(ErrorHandlerService);
    this.loading = injector.get(NgxSpinnerService);
  }

  ngOnInit() {

    if (this.instance) {
      this.documento = this.instance;
      this.buscaPDF();
    } else {
      this.documento = "";
      this.pdfViewer.pdfSrc = this.byteArray;
      this.pdfViewer.refresh();
    }

  }


  pdfInit(documento) {

    var documentoPDFDescompactado = LZString["decompressFromUTF16"](documento.documentoPDF);
    this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
    this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(char => char.charCodeAt(0)));
    this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
    this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf

    this.data = null;
    if (documento.assinaturas != null) {
      documento.assinaturas.forEach(assinatura => {
        if (this.data == null)
          this.data = [];

        var novaAssinatura: nodeTree;
        novaAssinatura = { name: assinatura.nomeRazaoSocial, icon: 'folder', iconExpanded: 'folder_open' };

        let papel: nodeTree = { name: 'Papel', icon: 'assignment', iconExpanded: 'assignment', children: [{ name: assinatura.papel.nome }] };
        novaAssinatura.children = [];
        novaAssinatura.children.push(papel)

        let certificado: nodeTree = {
          name: 'certificado', icon: 'verified_user', iconExpanded: 'verified_user', children: []
        };

        let emissor: nodeTree = {
          name: assinatura.emissorCertificado, icon: 'assignment_ind', iconExpanded: 'assignment_ind', children: []
        };

        let nomeCertificado: nodeTree = { name: assinatura.nomeCertificado };

        if (assinatura.responsavel != null) {
          let responsavel: nodeTree = { name: assinatura.responsavel + ':' + assinatura.responsavelCPF };
          nomeCertificado.children = [];
          nomeCertificado.children.push(responsavel);
        }


        emissor.children = [];
        emissor.children.push(nomeCertificado);

        certificado.children = [];
        certificado.children.push(emissor);

        novaAssinatura.children.push(certificado);

        let data: nodeTree = { name: 'Data', icon: 'schedule', iconExpanded: 'schedule', children: [{ name: assinatura.dataAssinatura }] }
        novaAssinatura.children.push(data);


        this.tc.expand(novaAssinatura);
        this.tc.expand(papel);

        this.data.push(novaAssinatura)

      });

      this.tc.expandAll;
    }

    //this.documentoPDF =  documento.documentoOriginal;
  }

  buscaPDF() {
    this.loading.show();
    this.documentoService.getDocumentoPDF(this.documento).subscribe((responseApi: ResponseApi) => {
      this.pdfInit(responseApi)
      this.loading.hide();
    }, err => {
      this.loading.hide();
      this.errorHandler.handle(err);
    });
    return null;
  }


  showMessage(message: IAlert) {
    this.message = message;
    this.dialog.showMessage(message);
  }




  hasChild(_: number, node: any) {
    console.log(node);
    return node.children != null && node.children.length > 0;
  }



  classUpperCase() {
    return this.shared.classUpperCase;
  }

}