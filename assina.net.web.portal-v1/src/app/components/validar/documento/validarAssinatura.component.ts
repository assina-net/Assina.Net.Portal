 import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidarService } from '../../../services/validar/validar.service';
import { TemplateService } from '../../template/template.service';
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { ResponseApi } from "app/model/util/response-api";
import * as LZString from 'lz-string';
import { UtilService } from 'app/services/util/util.service';

declare var $: any;

@Component({
    selector: 'app-validarDocumento',
    templateUrl: './validarAssinatura.component.html',
    styles: [
        'assets/css/reset.min.css',
        'assets/css/slippry.css',
    ],
    styleUrls: [
        './validarAssinatura.component.css'
    ]
})
export class ValidarAssinaturaComponent implements OnInit {

    @ViewChild('pdfViewer', { static: true }) pdfViewer;

    esconder = true;
    token: string;
    navigate: string;
    numeroDocumento: string;
    documentoPDF: any = {};
    byteArray: Uint8Array;



    constructor(private validarService: ValidarService,
        private loading: NgxSpinnerService,
        private template: TemplateService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private errorHandler: ErrorHandlerService,
        private utilService: UtilService
   ) {
       
    }


    ngOnInit() {
      //  $.getScript('../../assets/js/anime.min.js');
      //  $.getScript('../../assets/js/slippry.min.js');
      //  $.getScript('../../assets/js/login.js');

        this.activatedRoute.queryParams.subscribe(params => {
            this.numeroDocumento = params['documento'];
            if ( this.numeroDocumento)
                this.validarDocumento();
        });
    }



    validarDocumento() {     
        this.loading.show();   
        this.validarService.validarDocumento(this.numeroDocumento).subscribe((responseApi: ResponseApi) => {
            this.pdfInit(responseApi)
            this.loading.hide();
        }, err => {
            this.errorHandler.handle(err);
            this.loading.hide();
        });
    }

    pdfInit(documento) {
        var documentoPDFDescompactado = LZString["decompressFromUTF16"](documento.documentoPDF);
        this.documentoPDF = "data:application/pdf;base64," + documentoPDFDescompactado;
        this.byteArray = new Uint8Array(atob(documentoPDFDescompactado).split('').map(char => char.charCodeAt(0)));
        this.pdfViewer.pdfSrc = this.byteArray; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
    }


}
