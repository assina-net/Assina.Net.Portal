import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogService, IAlert } from 'app/services/util/dialog.service';
import { UtilService } from 'app/services/util/util.service';
import { TermoService } from 'app/services/termo/termo.service';
import { SharedService } from 'app/services/util/shared.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { AppInjector } from 'app/services/util/app-injector.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as LZString from 'lz-string';

@Component({
    selector: 'app-termo-aceite-visualizar-modal',
    templateUrl: './termo-aceite-visualizar-modal.component.html',
    styleUrls: ['./termo-aceite-visualizar-modal.component.scss']

})

export class TermoAceiteVisualizarModalComponent {

    @ViewChild('form', { static: true }) form: NgForm;
    @Input() instance: any;

    termo: any = {};
    
}