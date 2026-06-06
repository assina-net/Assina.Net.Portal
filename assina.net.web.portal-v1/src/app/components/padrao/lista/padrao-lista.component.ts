import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { ErrorHandlerService } from "app/services/util/error-handler.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { StatusEnum } from "../../../model/enum/statusEnum";
import { Page } from "../../../model/util/page";
import { ResponseApi } from "../../../model/util/response-api";
import { AppInjector } from "../../../services/util/app-injector.service";
import { DialogService } from "../../../services/util/dialog.service";
import { HttpService, IHttpService } from "../../../services/util/http.service";
import { SharedService } from "../../../services/util/shared.service";
import { UtilService } from "../../../services/util/util.service";
import { PerfilEnum } from 'app/model/enum/perfilEnum';



interface IFiltro {
    name: string,
    value: any
}

@Component({
    selector: '',
    templateUrl: './padrao-lista.component.html',
    styleUrls: ['./padrao-lista.component.scss']
})
export class PadraoListaComponent implements OnInit {

    titulo: string;
    navegacao: string;
    rota: string;
    gerarAssinatura: boolean;
    page: any;
    filtro: any;
    pages: Array<number>;
    objetoSelecionado: any;
    message: {};
    listagem = [];
    filtros: IFiltro[] = [];
    campoFiltro = [];
    opcoesStatus: any;


    listCombos = [];

    protected dialog: DialogService;
    protected httpService: IHttpService;
    protected loading: NgxSpinnerService;
    protected shared: SharedService;
    protected router: Router;
    protected utilService: UtilService;
    protected errorHandler: ErrorHandlerService;

    selecionarLinha = function (objeto) {
        this.objetoSelecionado = objeto;
    };

    filtroSubject: Subject<string> = new Subject<string>();

    constructor() {
        const injector = AppInjector.getInjector();
        this.dialog = injector.get(DialogService);
        this.httpService = injector.get(HttpService);
        this.loading = injector.get(NgxSpinnerService);
        this.shared = injector.get(SharedService);
        this.router = injector.get(Router);
        this.utilService = injector.get(UtilService);
        this.errorHandler = injector.get(ErrorHandlerService);
        this.gerarAssinatura = false;
        this.shared = SharedService.getInstance();

        this.filtroSubject.pipe(debounceTime(800))
            .subscribe(model => {
                this.filtrar()
            });

        this.opcoesStatus =
            this.utilService.enumToKeyValue(StatusEnum);

    }

    ngOnInit() {
        this.filtrar();
        this.additionalFormInit();
    }

    protected additionalFormInit() {
    }



    findAll(pageable: Page, filtro: any) {
        this.loading.show();
        this.objetoSelecionado = null;
        this.httpService.findAll(pageable, filtro).subscribe((responseApi: ResponseApi) => {
            if (this.listagem.length == 0) {
                this.listagem = responseApi['data']['content'];
            }
            else {
                this.listagem = this.listagem.concat(responseApi['data']['content']);
            }
            this.pages = new Array(responseApi['data']['totalPages']);
            let order = this.page.order;
            this.page = responseApi['data'];
            this.page.order = order;
            this.afterRetrieveData();
            this.loading.hide();
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    protected afterRetrieveData() { }

    editar(consultar?: boolean) {
        if (!this.objetoSelecionado) {
            this.dialog.warning(
                'Selecione um registro'
            );
            return;
        }

        const navigationExtras: NavigationExtras = {
            skipLocationChange: true,
            queryParams: {
                "consultar": consultar != undefined ? consultar : false
            }
        };

        this.router.navigate([`${this.rota}/novo`, this.objetoSelecionado.id], navigationExtras);

    }

    incluir() {
        this.router.navigate([`${this.rota}/novo`], { skipLocationChange: true });
    }

    detalhar(consultar?: boolean) {
        if (!this.objetoSelecionado) {
            this.dialog.warning(
                'Selecione um registro'
            );
            return;
        }
        const navigationExtras: NavigationExtras = {
            skipLocationChange: true,
            queryParams: {
                "consultar": consultar != undefined ? consultar : false
            }
        };

        this.router.navigate([`${this.rota}/detalhe`, this.objetoSelecionado.id], navigationExtras);
    }


    filtrar() {
        this.findAll(this.page, this.filtro);
    }




    beforeExclusao() {
        return true;
    }

    protected afterExclusao(response: any) { };

    excluir() {
        if (!this.objetoSelecionado) {
            this.dialog.warning(
                'Selecione um registro'
            );
            return;
        }
        this.dialog.confirmDelete('Deseja excluir este registro ?')
            .then((candelete: boolean) => {
                this.loading.show();
                if (candelete && this.beforeExclusao()) {
                    this.message = {};
                    this.httpService.delete(this.objetoSelecionado.id).subscribe((responseApi: ResponseApi) => {
                        this.afterExclusao(this.objetoSelecionado);
                        this.loading.hide();
                        this.dialog.success(
                            'Registro excluído com sucesso!'
                        );
                        let index = this.listagem.findIndex(d => d.id === this.objetoSelecionado.id);
                        this.listagem.splice(index, 1);
                    }, err => {
                        this.errorHandler.handle(err);
                    });
                } else {
                    this.loading.hide();
                }
            });
    }

    changePage(event) {
        this.page.number = event.page;
        this.page.size = event.size;
        this.filtrar()
    }

    onSorted($event) {
        this.page.order = $event.sortColumn + ',' + $event.sortDirection;
        this.filtrar();
    }

    filtrando() {
        this.listagem = [];
        this.page.number = 0;
        this.filtroSubject.next();
    }

    legendaGrid(pitem) {
        var estilo = '';
        if (this.objetoSelecionado) {
            if (pitem.id == this.objetoSelecionado.id) {
                estilo = "linhaSelecionada";
            }
        }
        if (pitem.status != undefined && pitem.status == StatusEnum.INATIVO) {
            estilo += ' red';
        }
        return estilo;
    }

    classUpperCase() {
        return this.shared.classUpperCase;
    }

    protected afterRetrieveCombo() { };

    buscarCombos() {
        this.httpService.buscarCombos().subscribe((responseApi: ResponseApi) => {
            this.listCombos = responseApi.data.listCombos;
            this.afterRetrieveCombo();
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    onScroll() {
        this.page.number++;
        this.filtrar();
    }

    perfilUsuarioAdmin() {
        return this.shared.usuario.perfil == PerfilEnum.ROLE_ADMIN
    }

}
