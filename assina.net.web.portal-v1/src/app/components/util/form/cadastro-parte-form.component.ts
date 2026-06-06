import { Component, Input, TemplateRef, ViewEncapsulation, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { IDadosLista } from 'app/components/padrao/novo/padrao-novo.component';
import { StatusEnum } from 'app/model/enum/statusEnum';
import { UtilModule } from 'app/components/util/util.module';
import { DialogService } from "app/services/util/dialog.service";
import { ContratoParteModalComponent } from 'app/components/cadastros/contrato/modal/contrato-parte/contrato-parte-modal.component';
import { ContratoService } from 'app/services/cadastro/cadastro/contrato.service';
import { ResponseApi } from 'app/model/util/response-api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { SharedService } from 'app/services/util/shared.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
    selector: 'app-cadastro-parte-form',
    template: `     <ng-template #tooltipParte>
                        <span *ngIf="!contratoAssinado">Reenviar solicitação de assinatura</span>
                        <span *ngIf="contratoAssinado">Reenviar contrato vigente</span>
                    </ng-template>
                    <ng-template #tooltipObservador>
                        <span *ngIf="!contratoAssinado">Reenviar solicitação de observador</span>
                        <span *ngIf="contratoAssinado">Reenviar contrato vigente</span>
                    </ng-template>
                    <app-complete-tab-form [content]="contratoParteForm" [dados]="dados"
                                           [dadosComplementares]="dadosComplementares"
                                           [cols]="titulosPartes"
                                           (change)="change()"
                                           (permiteEditarItem)="permiteEditarItem"
                                           [novoRegistro]="novoRegistro"
                                           [mensagemExclusao]="mensagemExclusao"
                                           [itemTemplate]="detalheParte"
                                           [showButtons]="showButtons"
                                           [permiteEditar]="permiteEditar"
                                           [permiteIncluir]="permiteIncluir"
                                           [permiteExcluir]="permiteExcluir"
                                           [permiteExibirDocumento]="permiteExibirDocumento"
                                           [tituloModal]= "tituloModal"
                                           >
                        <ng-template #detalheParte let-item>
                            <!--<td>{{item.cpfCnpj}}</td>-->
                            <td> 
                                <div style="display: inline-flex;">
                                    <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                            this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&
                                            tipoCadastro=='OBSERVADOR' &&
                                            (item.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&
                                            item.tipoPessoa=='FISICA'"
                                        class=" d-block"
                                        (click)="reenviaEmail(item)"
                                        style="font-size: small;margin-right:5px"
                                        [ngbTooltip]="tooltipObservador">
                                        <i class="fa fa-envelope-o"></i>
                                    </span>
                                    {{item.nomeRazaoSocial}}
                                </div>
                            </td>
                            <td *ngIf="item.tipoPessoa=='FISICA'&& tipoCadastro == 'PARTES'"  >

                                <span style="display: inline-flex;font-size: xx-small;">
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&
                                                     tipoCadastro!='OBSERVADOR'  &&
                                                     (item.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&
                                                     item.tipoPessoa=='FISICA'"
                                              class=" d-block"
                                              (click)="reenviaEmail(item)"
                                              style="font-size: small;margin-right:5px"
                                              [ngbTooltip]="tooltipParte">
                                               <i class="fa fa-envelope-o"></i>
                                        </span>

                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     item.tipoPessoa=='FISICA' &&
                                                     item.statusAssinatura=='NAOASSINADO' "
                                              class="bg-danger d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Não assinado"
                                              data-bg-color="primary"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     item.tipoPessoa=='FISICA' &&
                                                     item.statusAssinatura=='NAOLIBERADO'"
                                              class="bg-grey d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinatura não liberada"
                                              data-bg-color="grey"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     item.tipoPessoa=='FISICA' &&
                                                     item.statusAssinatura=='ASSINADO'"
                                              class="bg-success d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinado"
                                              data-bg-color="success"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     item.tipoPessoa=='FISICA' &&
                                                     item.statusAssinatura=='ASSINADOPARCIAL'"
                                              class="bg-warning d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinado Parcial"
                                              data-bg-color="primary"></span>


                                        <div >
                                            <div *ngFor="let papel of item.papel" style="display: inline-table">
                                                <span style="display: inline-flex;font-size: x-small;">
                                                    <span style="margin-left:5px">{{papel.papel.nome}}</span>
                                                </span>
                                            </div> 
                                        </div>
                                </span>
                            </td>
                            <td *ngIf="item.tipoPessoa=='JURIDICA'  && tipoCadastro == 'PARTES'">
                                <div *ngFor="let contato of item.contatos" style="display: block">

                                     <span style="display: inline-flex;font-size: xx-small;">

                                        <span *ngIf="statusContrato != 'NAOLIBERADOASSINTAURA' &&
                                                     this.shared.perfilUsuario != 'ROLE_ASSINADOR' &&                                                    
                                                     (contato.statusAssinatura=='NAOASSINADO' || contratoAssinado ) &&
                                                     tipoCadastro!='OBSERVADOR'  &&
                                                     contato.tipoPessoa=='FISICA'"
                                                     class=" d-block"
                                                     (click)="reenviaEmail(contato)"
                                                     style="font-size: small;margin-right:5px"
                                                     [ngbTooltip]="tooltipParte">
                                            <i class="fa fa-envelope-o"></i>
                                        </span>

                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     contato.tipoPessoa=='FISICA' &&
                                                     contato.statusAssinatura=='NAOASSINADO' "
                                              class="bg-danger d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Não assinado"
                                              data-bg-color="primary"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     contato.tipoPessoa=='FISICA' &&
                                                     contato.statusAssinatura=='NAOLIBERADO' "
                                              class="bg-grey d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinatura não liberada"
                                              data-bg-color="grey"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     contato.tipoPessoa=='FISICA' &&
                                                     contato.statusAssinatura=='ASSINADO'"
                                              class="bg-success d-block rounded-circle"
                                              style="margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinado"
                                              data-bg-color="success"></span>
                                        <span *ngIf="statusContrato!= 'NAOLIBERADOASSINTAURA' &&
                                                     contato.tipoPessoa=='FISICA' &&
                                                     contato.statusAssinatura=='ASSINADOPARCIAL'"
                                              class="bg-warning d-block rounded-circle"
                                              style="color:#F77E17;margin-top:4px;width:10px; height:10px;"
                                              ngbTooltip="Assinado Parcial"
                                              data-bg-color="primary"></span>
                                         <span style="margin-left:5px">{{contato.nomeRazaoSocial}}</span>
                                     </span><br>
                                    <div *ngFor="let papel of contato.papel" style="display: inline-table">
                                     <span style="display: inline-flex;font-size: x-small;">
                                                        <span style="margin-left:5px">{{papel.papel.nome}}</span>
                                                    </span>

                                    </div>
                                </div>
                            </td>
                        </ng-template>
                    </app-complete-tab-form>
  `,
    styles: [`
    table {
        border-collapse: initial;}
    .table .thead-light th {
        color: #495057;
        background-color: #e6e6e6;
        border: #a6a6a5 1px solid;
        border-radius:0.25rem;


    }
   .sw-fixed-width {width: 90px;min-width:90px;}
   .sw-display-none {display: none;}
  `],
    encapsulation: ViewEncapsulation.None,

})
export class CadastroParteFormComponent {


    _dados: IDadosLista = { listagem: [], dirty: false };
    @Input() contratoPapelList = [];
    @Input() showButtons: boolean;
    @Input() permiteIncluir: boolean = true;
    @Input() permiteEditar: boolean = true;
    @Input() permiteExcluir: boolean = true;
    @Input() permiteExibirDocumento: boolean = false;
    @Input() contratoAssinado: boolean = false;
    @Input() novoRegistro: string = "Nova Parte";
    @Input() mensagemExclusao: string = "'Deseja retirar esta parte para assinatura ? '";
    @Input() tituloModal: string = "Cadastro > Contrato > Contrato Partes";
    _tipoCadastro: string = 'PARTES';



    @Input() statusContrato: string;
    @Output('change') changeEvent = new EventEmitter<any>();

    /* titulosPartes = ['Ação', 'Cpf/Cnpj', 'Nome/Razão Social', 'Assinaturas'];*/
    titulosPartes = ['Ação', 'Nome/Razão Social', 'Assinaturas'];


    contratoParteForm: any;


    constructor(private contratoService: ContratoService,
        private loading: NgxSpinnerService,
        private dialog: DialogService,
        private errorHandler: ErrorHandlerService,
        private shared: SharedService,
    ) {
        this.contratoParteForm = ContratoParteModalComponent;
    }

    change() {
        this.changeEvent.emit();
    }


    @Input('dados')
    set dados(dados: IDadosLista) {
        this._dados = dados;
        if (this._dados != undefined) {
            this._dados.listagem.forEach(value =>
                value = Object.assign(value, { _permiteEditar: this.permiteEditarItem(value) })
            )
        }
    }

    get dados() {
        return this._dados;
    }


    @Input('tipoCadastro')
    set tipoCadastro(tipoCadastro) {
        this._tipoCadastro = tipoCadastro;
        if (tipoCadastro == 'OBSERVADOR') {
            this.titulosPartes = ['Ação', 'Nome/Razão Social'];
        }

    }


    get tipoCadastro() {
        return this._tipoCadastro;
    }


    get dadosComplementares() {
        if (this.dados.listagem == undefined) {
            return undefined;
        }
        let dadosComplementares = {
            comboPreRequisito: JSON.parse(JSON.stringify(this.dados.listagem)),
            comboContratoPapel: this.contratoPapelList
        }
        return dadosComplementares;

    }

    reenviaEmail(parte) {
        this.loading.show();
        this.contratoService.reenviaSolicitacaoAssintura(parte).subscribe((responseApi: ResponseApi) => {
            this.loading.hide();
            this.dialog.success('Email enviado para o e-mail: ' + parte.email);
        }, err => {
            this.errorHandler.handle(err);
        });

        let email = parte.email;
    }


    permiteEditarItem(item) {
        let result = false;

        if ( this.shared.perfilUsuarioAdmin() || this.shared.verificaPerfilClienteSelecionado(PerfilEnum.ROLE_USUARIO)  ) {
            if (item.tipoPessoa == 'FISICA') {
                result = item.statusAssinatura != 'ASSINADO';
            }

            if (item.tipoPessoa == 'JURIDICA') {
                if (item.contatos.length == 0) {
                    return true;
                }
                item.contatos.forEach(contato => {
                    if (contato.statusAssinatura != 'ASSINADO') {
                        result = true;
                        return;
                    };
                })

            }
        }

        return result;
    }


}
