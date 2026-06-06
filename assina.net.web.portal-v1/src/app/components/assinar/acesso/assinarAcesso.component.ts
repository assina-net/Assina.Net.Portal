import { Component, OnInit,  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StatusEnum } from '../../../model/enum/statusEnum';
import { TipoPessoaEnum } from '../../../model/enum/tipoPessoaEnum';
import { Usuario } from '../../../model/cadastro/usuario';
import { Pessoa } from '../../../model/cadastro/pessoa';
import { SharedService } from 'app/services/util/shared.service';
import { DocumentoService } from '../../../services/assinar/documento/documento.service';
import { TemplateService } from '../../template/template.service';
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { ResponseApi } from "app/model/util/response-api";
import { TermoService } from 'app/services/termo/termo.service';
import { TermoAceiteModalComponent } from 'app/components/termos/modal/termo-aceite/termo-aceite-modal.component'
import { PerfilEnum } from 'app/model/enum/perfilEnum';
import { UtilService } from 'app/services/util/util.service';

declare var $: any;

@Component({
    selector: 'app-assinarAcesso',
    templateUrl: './assinarAcesso.component.html',
    styles: [
        'assets/css/reset.min.css',
        'assets/css/slippry.css',
    ],
    styleUrls: [
        './assinarAcesso.component.css'
    ]
})
export class AssinarAcessoComponent implements OnInit {

    usuario = new Usuario(null, '', '', '', StatusEnum.INATIVO, null, new Pessoa('', '', '', '', TipoPessoaEnum.FISICA, '', null), null, null);
    shared: SharedService;
    message: string;
    descBtnEntrar: string = 'Visualizar';
    esconder = true;
    token: string;
    cpf: string;
    navigate: string;
    
   termoAceiteModal = TermoAceiteModalComponent;


    constructor(private documentoService: DocumentoService,
        private loading: NgxSpinnerService,
        private template: TemplateService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private errorHandler: ErrorHandlerService,
        private termoService: TermoService,
        private modalService: NgbModal,
        private utilService: UtilService) {
        this.shared = SharedService.getInstance();

        this.activatedRoute.queryParams.subscribe(params => {
            this.token = params['token'];
        });
    }


    ngOnInit() {
        this.utilService.carregaAnimaJS();
        //$.getScript('../../assets/js/anime.min.js');
        //$.getScript('../../assets/js/slippry.min.js');
        //$.getScript('../../assets/js/login.js');
        //this.logar();
    }


    UserInit(userAuthentication) {
        this.shared.token = userAuthentication.token;
        this.shared.usuario = userAuthentication.usuario;
        this.shared.clientes = userAuthentication.clientes;
        if (this.shared.clientes.length > 0) {            
                //verifica se é do perfil sem ser assinador tem preferencia
                let  Ususáriocliente =  this.shared.clientes.filter(x => PerfilEnum.parse(x.perfil) != PerfilEnum.ROLE_ASSINADOR);
                if ( Ususáriocliente.length ==0){
                    Ususáriocliente = this.shared.clientes;
                }else 
                this.shared.clienteSelecionado = Ususáriocliente[0];
                let clientesLink  = this.shared.clientes.filter(x => (x.cliente.id) == userAuthentication.idCliente)

                if (clientesLink.length  > 0)
                    this.shared.clienteSelecionado = clientesLink[0];

                this.shared.perfilUsuario = this.shared.clienteSelecionado.perfil;                
        }
        this.shared.prefs = this.template.getMenuPrefs();
        this.navigate = 'assinar/pendente/detalhe/' + userAuthentication.idContrato;
        this.buscaTermos();
    }

    logar() {
        this.loading.show();
        this.message = '';
        this.usuario.login = this.usuario.login.toUpperCase();
        this.shared.clienteSelecionado = null;
        this.shared.clientes = null;

        this.documentoService.assinarDocumento(this.token, this.cpf).subscribe((responseApi: ResponseApi) => {
            this.UserInit(responseApi)
            this.loading.hide();
            this.descBtnEntrar = 'Sair';
        }, err => {            
            this.errorHandler.handle(err);
            this.loading.hide();
        });
    }

    termosPendentes(termosResponse) {
        if (termosResponse) {
            this.exibirTermos();
        } else {
            this.router.navigate([this.navigate]);
        }
    }

    buscaTermos() {
        this.termoService.getTermosPendentes(this.shared.usuario).subscribe((responseApi: ResponseApi) => {
            this.termosPendentes(responseApi)
        }, err => {
            this.errorHandler.handle(err);
        });
        return null;
    }


    exibirTermos() {
        const modalRef = this.modalService.open(
            this.termoAceiteModal, {
            backdrop: 'static', centered: true, keyboard: false, size: 'lg'
        }
        );
        modalRef.componentInstance.urlNavigate = this.navigate;

    }

}
