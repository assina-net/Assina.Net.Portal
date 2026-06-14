import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'app/model/util/page';
import { IDadosLista, PadraoNovoComponent } from '../../../padrao/novo/padrao-novo.component';
import { ContratoService } from '../../../../services/cadastro/cadastro/contrato.service';
//import { UtilService } from '../../../../services/util/util.service';

import { ContratoDocumentoModalComponent } from '../modal/contrato-documento/contrato-documento-modal.component';
import { ContratoDocumentoVisualizarModalComponent } from '../modal/contrato-documento-visualizar/contrato-documento-visualizar-modal.component';
import { DocumentoService } from 'app/services/assinar/documento/documento.service';

import { ResponseApi } from '../../../../model/util/response-api';

@Component({
    selector: 'app-novo-contrato',
    templateUrl: './novo-contrato.component.html',
    styleUrls: ['./novo-contrato.component.css']
})
export class NovoContratoComponent extends PadraoNovoComponent {

    @ViewChild('form', { static: true }) form: NgForm;

    partes: IDadosLista = { listagem: [], dirty: false };
    observadores: IDadosLista = { listagem: [], dirty: false };
    documentos: IDadosLista = { listagem: [], dirty: false };
    tipoDocumentoList = [];
    contratoPapelList = [];
    papelObservador = { id: "" };

    titulosPartes = ['Ação', 'Cpf/Cnpj', 'Nome/Razão Social', 'Assinaturas'];
    titulosDocumentos = ['Ação', 'Arquivo', 'Tipo Documento', 'Status Documento', 'Assinaturas'];

    page: Page;
    filtro: any;
    pages: Array<number>;
    arquivoNome: string;

    //contratoParteForm = ContratoParteModalComponent;

    contratoDocumentoForm = ContratoDocumentoModalComponent;

    contratoDocumentoVisualizarForm = ContratoDocumentoVisualizarModalComponent;

    prepararVisualizacaoDocumento = (documento, abrirModal) => {
        if (documento.documento) {
            abrirModal(documento);
            return;
        }

        this.loading.show();
        this.contratoService.getDocumentoPDF(documento).subscribe((responseApi: ResponseApi) => {
            this.loading.hide();

            const mensagemApi = this.getMensagemVisualizacao(responseApi);
            if (mensagemApi || !responseApi || !responseApi.data || !responseApi.data.documentoPDF) {
                this.dialog.warning(mensagemApi ||
                    'Não foi possível visualizar este documento agora. Verifique se o arquivo está disponível no armazenamento.');
                return;
            }

            documento.documento = responseApi.data.documentoPDF;
            abrirModal(documento);
        }, err => {
            this.loading.hide();
            const mensagemApi = this.getMensagemVisualizacao(err && err.error);
            if (mensagemApi) {
                this.dialog.warning(mensagemApi);
                return;
            }
            this.errorHandler.handle(err);
        });
    }


    constructor(route: ActivatedRoute,
        private contratoService: ContratoService,
        //  private utilService: UtilService,
        private documentoService: DocumentoService) {
        super(route);

        this.titulo = "Cadastro de Contrato";
        this.navegacao = " > Cadastro > Contrato > Cadastro";
        this.rota = "/cadastro/contrato";
        this.formulario = "Contrato";

        //Para carregar os combos
        this.entidade = null;
        this.httpService = this.contratoService;
    }

    private getMensagemVisualizacao(responseApi: ResponseApi): string {
        if (responseApi && responseApi.errors && responseApi.errors.length) {
            return responseApi.errors[responseApi.errors.length - 1];
        }
        return null;
    }

    get ContratoRequest() {
        if (this.entidade == null) {
            return { contrato: { statusContrato: 'NAOLIBERADOASSINTAURA'  } };
        }
        return this.entidade;
    }

    set ContratoRequest(data) {
        this.entidade = data;
    }

    cancelar() {
        this.partes = { listagem: [], dirty: false };
        this.documentos = { listagem: [], dirty: false };
        super.cancelar();
    }

    get podeVoltar() {
        return this.consultando || (!this.editando && !this.partes.dirty && Boolean(this.form.pristine));
    }

    afterRetrieveData() {

        this.tipoDocumentoList = this.entidade.listCombos['TipoDocumento'];
        this.contratoPapelList = this.entidade.listCombos['ContratoPapel'];
        //reseta para nao ficar trafegando entre cliente e servidor
        this.entidade.listCombos = {};

        this.papelObservador = this.contratoPapelList.find(papel => papel.value == 'OBSERVADOR');
        this.contratoPapelList = this.contratoPapelList.filter(papel => papel.value != 'OBSERVADOR');


        if (this.entidade.contrato.id != null) {
            this.contratoPartesInit(this.entidade.contrato.partes);
            this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        } else {
            this.entidade.contrato.status = 'ATIVO';
            this.entidade.contrato.statusContrato = 'NAOLIBERADOASSINTAURA';
            this.entidade.contrato.custodiante = { id: this.shared.clienteSelecionado.cliente.id };
            this.entidade.contrato.remetente = this.shared.usuario;
            this.entidade.contrato.documentos = [];
            this.partes = { listagem: [], dirty: false };            
            this.observadores = { listagem: [], dirty: false };
        }

        this.consultando = this.entidade.contrato.statusContrato != 'NAOLIBERADOASSINTAURA' && this.entidade.contrato.statusContrato != 'RECUSADO';


    }

    contratoPartesInit(listagem) {

        this.partes = { listagem: [], dirty: false };
        this.observadores = { listagem: [], dirty: false };

        if (!listagem) {
            return;
        }

        listagem.forEach(item => {
            if (this.parteEhObservador(item)) {
                this.observadores.listagem.push(item);
            } else {
                this.partes.listagem.push(item);
            }
        });
    }

    adicionouContratoParte() {
        this.sincronizaPartesContrato();
    }

    adicionouObservador() {
        this.observadores.listagem.forEach(observador => {
            if (observador.papel.length == 0) {
                observador.papel.push({ id: "", papel: this.papelObservador });
            }
        })
        this.sincronizaPartesContrato();
    }

    contratoDocumentosInit(listagem) {
        this.documentos = { listagem: listagem, dirty: false };
    }

    adicionouContratoDocumento() {
        this.loading.show();


        for (let i = 0; i < this.documentos.listagem.length; i++) {
            let doc = this.documentos.listagem[i];
            //verifica se é tipo de documento novo
            let achou = false;
            if (doc.nomeDocumento != undefined) {
                if (this.entidade.contrato.documentos != null) {
                    for (let j = 0; j < this.entidade.contrato.documentos.length; j++) {
                        let docContrato = this.entidade.contrato.documentos[j];
                        if (this.mesmoDocumentoContrato(doc, docContrato)) {
                            achou = true;
                            break;
                        }
                    }
                }

                if (!achou ) {                                        
                    //busca partes padrao
                    Promise.race([
                        this.buscaPartePadrao(doc.tipoDocumento)
                    ]);
                    this.entidade.contrato.documentos.push(doc)
                }
            }
        };

        this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
        
        this.contratoDocumentosInit(JSON.parse(JSON.stringify(this.entidade.contrato.documentos)));
        this.loading.hide();

        // this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
    }

    private mesmoDocumentoContrato(documentoA, documentoB) {
        if (documentoA.id && documentoB.id) {
            return documentoA.id == documentoB.id;
        }

        return documentoA.documento == documentoB.documento &&
            documentoA.tipoDocumento &&
            documentoB.tipoDocumento &&
            documentoA.tipoDocumento.id == documentoB.tipoDocumento.id &&
            documentoA.nomeDocumento == documentoB.nomeDocumento;
    }


    get formDirty() {
        return this.form.dirty || this.partes.dirty || this.documentos.dirty;
    }

    protected validateForm(): Boolean {
        this.sincronizaPartesContrato();
        const pendencias = this.validarDuplicidadePessoaPapel();

        if (pendencias.length > 0) {
            this.dialog.warningPersistent(this.montaMensagemDuplicidadePessoaPapel(pendencias));
            return false;
        }

        return true;
    }

    protected beforeSave() {
        this.entidade.contrato.documentos = JSON.parse(JSON.stringify(this.documentos.listagem));
        this.limpaArquivosJaPersistidos(this.entidade.contrato.documentos);
        this.sincronizaPartesContrato();
    }

    get contratoParteModal() {
        return this.partes;
    }

    get contratoObservadoresModal() {
        return this.observadores;
    }

    get contratoPapelListDocumentos() {
        const papeisDocumentos = this.getPapeisDocumentos(this.contratoDocumentoModal.listagem);

        return this.contratoPapelList.filter(papel => papeisDocumentos[papel.id]);
    }

    get dadosComplementaresDocumento() {
        let dadosComplementares = {
            combotipoDocumento: this.tipoDocumentoList,
            comboContratoPapel: this.contratoPapelList
        };
        return dadosComplementares;
    }

    get contratoDocumentoModal() {
        return this.documentos;
    }

    buscaPartePadrao(tipoDocumento) {

        let partesPadraoRequest = {
            cliente: this.shared.clienteSelecionado.cliente,
            tipoDocumento: tipoDocumento
        };

        this.contratoService.partesPadrao(partesPadraoRequest).subscribe((responseApi: any) => {

            let lista = responseApi;
            /*
            if (this.adicionarSomenteUsuario()) {
                let listagemFiltro = lista.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                if (listagemFiltro.length >= 1) {
                    lista = listagemFiltro;
                }
            }*/

            for (let i = 0; i < lista.length; i++) {
                let parte = lista[i];
                this.limpaIdPartePadrao(parte);
                if (parte.contatos != null) {

                    if (this.adicionarSomenteUsuario() && parte.cpfCnpj == this.shared.clienteSelecionado.cliente.pessoa.cpfCnpj) {
                        let listagemFiltro = parte.contatos.filter(item => item.pessoaFisica.cpfCnpj == this.shared.usuario.pessoa.cpfCnpj);
                        if (listagemFiltro.length >= 1) {
                            parte.contatos = listagemFiltro;
                        }
                    }

                    for (let j = 0; j < parte.contatos.length; j++) {
                        let contato = parte.contatos[j];
                        this.limpaIdPartePadrao(contato)
                    };
                }
            };

            if (this.entidade.contrato.partes != null)
                lista.forEach(parte => {
                    //procura parte ja no contrato
                    let parteExistente = this.entidade.contrato.partes.find(x => x.cpfCnpj == parte.cpfCnpj);
                    if (parteExistente == null)
                        this.entidade.contrato.partes.push(parte);
                    else {
                        parte.papel.forEach(papel => {
                            let papelExistente = parteExistente.papel.find(x => x.papel.id == papel.papel.id);
                            if (papelExistente == null)
                                parteExistente.papel.push(papel);
                        });

                        if (parte.contatos != null) {
                            parte.contatos.forEach(parte => {
                                //procura parte ja no contrato
                                let contatoExistente = parteExistente.contatos.find(x => x.cpfCnpj == parte.cpfCnpj);
                                if (contatoExistente == null)
                                    parteExistente.contatos.push(parte);
                                else {
                                    parte.papel.forEach(papel => {
                                        let papelExistente = contatoExistente.papel.find(x => x.papel.id == papel.papel.id);
                                        if (papelExistente == null)
                                            contatoExistente.papel.push(papel);
                                    });
                                }
                            });
                        }
                    }
                });
            else
                this.entidade.contrato.partes = responseApi;

            this.contratoPartesInit(this.entidade.contrato.partes);


        }, err => {
            this.errorHandler.handle(err);
        });
    }

    limpaIdPartePadrao(parte) {
        parte.id = null;
        parte.statusAssinatura = 'NAOLIBERADO';
        parte.status = 'ATIVO';
        parte.duplicatas = false;
        parte.papel.forEach(papel => {
            papel.id = null;
        });
    }

    adicionarSomenteUsuario() {
        if (this.shared.clienteSelecionado.sistemaAtributo != null &&
            this.utilService.booleanValue(this.shared.clienteSelecionado.sistemaAtributo["SOMENTE_INCLUIR_USUARIO_NO_CONTRATO"])) {
            return true;
        } else {
            return false;
        }
    }

    liberarAssinatura() {
        const pendencias = this.validarPendenciasLiberacao();
        if (pendencias.length > 0) {
            this.dialog.warningPersistent(this.montaMensagemPendenciasLiberacao(pendencias));
            return;
        }

        this.loading.show();
        this.entidade.contrato.usuarioSolicitacaoAssinatura = this.shared.usuario;
        this.contratoService.liberarAssinatura(this.entidade).subscribe((responseApi: ResponseApi) => {
            this.entidade = responseApi;
            this.loading.hide();
            if (this.entidade.contrato.validado) {
                this.dialog.success(`${this.formulario ? this.formulario : 'Registro'} liberado para assinatura com sucesso!`);
                this.cancelar();
            } else {
                this.dialog.warningPersistent(this.entidade.contrato.validacaoMensagem);
            }
        }, err => {
            this.errorHandler.handle(err);
        });
    }

    private validarPendenciasLiberacao() {
        let pendencias: any[] = [];
        const contrato = this.ContratoRequest.contrato;

        if (this.form.invalid) {
            Object.keys(this.form.controls).forEach(key => {
                this.form.controls[key].markAsTouched();
            });
            pendencias.push({ tipo: "geral", texto: "Preencha os campos obrigatorios do contrato." });
        }

        if (!contrato.documentos || contrato.documentos.length == 0) {
            pendencias.push({ tipo: "geral", texto: "Adicione pelo menos um documento para assinatura." });
            return pendencias;
        }

        const papeisDocumento = this.getPapeisDocumentos(contrato.documentos);
        const papeisPartes = this.getPapeisPartes(contrato.partes);

        if (!contrato.partes || contrato.partes.length == 0) {
            pendencias.push({ tipo: "geral", texto: "Informe as partes que irao assinar o contrato." });
        }

        this.validarDuplicidadePessoaPapel().forEach(pendencia => pendencias.push(pendencia));

        contrato.documentos.forEach(documento => {
            if (!documento.papel || documento.papel.length == 0) {
                pendencias.push({
                    tipo: "documento",
                    documento: this.nomeDocumento(documento),
                    texto: "informe ao menos um papel de assinatura"
                });
                return;
            }

            documento.papel.forEach(papelDocumento => {
                const papel = this.getPapel(papelDocumento);
                if (papel && !papeisPartes[papel.id]) {
                    pendencias.push({
                        tipo: "papelDocumento",
                        documento: this.nomeDocumento(documento),
                        papel: papel.nome
                    });
                }
            });
        });

        Object.keys(papeisPartes).forEach(papelId => {
            if (!papeisDocumento[papelId]) {
                pendencias.push({
                    tipo: "geral",
                    texto: "Existe parte informada como \"" + papeisPartes[papelId] +
                        "\", mas nenhum documento exige este papel."
                });
            }
        });

        return pendencias;
    }

    private montaMensagemPendenciasLiberacao(pendencias) {
        const pendenciasGerais = pendencias.filter(pendencia => pendencia.tipo == "geral");
        const pendenciasDuplicidade = pendencias.filter(pendencia => pendencia.tipo == "duplicidadePessoaPapel");
        const pendenciasDocumento = pendencias.filter(pendencia => pendencia.tipo == "documento");
        const papeisPorDocumento = {};
        let linhas = [];

        pendencias.filter(pendencia => pendencia.tipo == "papelDocumento").forEach(pendencia => {
            if (!papeisPorDocumento[pendencia.documento]) {
                papeisPorDocumento[pendencia.documento] = [];
            }

            if (!papeisPorDocumento[pendencia.documento].includes(pendencia.papel)) {
                papeisPorDocumento[pendencia.documento].push(pendencia.papel);
            }
        });

        if (pendenciasGerais.length > 0) {
            linhas.push("<strong>Antes de liberar:</strong>");
            pendenciasGerais.forEach(pendencia => {
                linhas.push("- " + pendencia.texto);
            });
        }

        if (pendenciasDuplicidade.length > 0) {
            if (linhas.length > 0) {
                linhas.push("<br>");
            }
            linhas.push("<strong>Revise partes duplicadas:</strong>");
            pendenciasDuplicidade.forEach(pendencia => {
                linhas.push("- " + pendencia.texto);
            });
        }

        if (pendenciasDocumento.length > 0 || Object.keys(papeisPorDocumento).length > 0) {
            if (linhas.length > 0) {
                linhas.push("<br>");
            }
            linhas.push("<strong>Complete as assinaturas dos documentos:</strong>");
        }

        pendenciasDocumento.forEach(pendencia => {
            linhas.push("- <strong>" + pendencia.documento + "</strong>: " + pendencia.texto + ".");
        });

        Object.keys(papeisPorDocumento).forEach(documento => {
            linhas.push("- <strong>" + documento + "</strong>: informe quem assina como " +
                papeisPorDocumento[documento].join(", ") + ".");
        });

        return linhas.join("<br>");
    }

    private validarDuplicidadePessoaPapel() {
        let pendencias = [];
        const assinaturasDiretas = this.getAssinaturasDiretas();
        const assinaturasRepresentantes = this.getAssinaturasRepresentantes();

        assinaturasDiretas.forEach(assinaturaDireta => {
            assinaturasRepresentantes
                .filter(assinaturaRepresentante =>
                    assinaturaRepresentante.cpfCnpj == assinaturaDireta.cpfCnpj &&
                    assinaturaRepresentante.papelId == assinaturaDireta.papelId)
                .forEach(assinaturaRepresentante => {
                    pendencias.push({
                        tipo: "duplicidadePessoaPapel",
                        texto: assinaturaDireta.nome + " esta informado como parte direta e representante de " +
                            assinaturaRepresentante.empresa + " para assinar como " + assinaturaDireta.papel +
                            ". Mantenha apenas uma entrada para este papel."
                    });
                });
        });

        return pendencias;
    }

    private montaMensagemDuplicidadePessoaPapel(pendencias) {
        let linhas = [
            "<strong>Revise as partes antes de salvar:</strong>"
        ];

        pendencias.forEach(pendencia => {
            linhas.push("- " + pendencia.texto);
        });

        return linhas.join("<br>");
    }

    private getAssinaturasDiretas() {
        let assinaturas = [];

        if (!this.partes || !this.partes.listagem) {
            return assinaturas;
        }

        this.partes.listagem
            .filter(parte => parte && parte.tipoPessoa == "FISICA")
            .forEach(parte => {
                this.getPapeisParte(parte).forEach(papel => {
                    assinaturas.push({
                        cpfCnpj: parte.cpfCnpj,
                        nome: parte.nomeRazaoSocial,
                        papelId: papel.id,
                        papel: papel.nome
                    });
                });
            });

        return assinaturas;
    }

    private getAssinaturasRepresentantes() {
        let assinaturas = [];

        if (!this.partes || !this.partes.listagem) {
            return assinaturas;
        }

        this.partes.listagem
            .filter(parte => parte && parte.tipoPessoa == "JURIDICA" && parte.contatos)
            .forEach(parte => {
                parte.contatos.forEach(contato => {
                    this.getPapeisParte(contato).forEach(papel => {
                        assinaturas.push({
                            cpfCnpj: contato.cpfCnpj,
                            nome: contato.nomeRazaoSocial,
                            empresa: parte.nomeRazaoSocial,
                            papelId: papel.id,
                            papel: papel.nome
                        });
                    });
                });
            });

        return assinaturas;
    }

    private getPapeisParte(parte) {
        let papeis = [];

        if (!parte || !parte.papel) {
            return papeis;
        }

        parte.papel.forEach(papelParte => {
            const papel = this.getPapel(papelParte);
            if (papel) {
                papeis.push(papel);
            }
        });

        return papeis;
    }

    private getPapeisDocumentos(documentos) {
        let papeis = {};
        if (!documentos) {
            return papeis;
        }

        documentos.forEach(documento => {
            if (documento.papel) {
                documento.papel.forEach(papelDocumento => {
                    const papel = this.getPapel(papelDocumento);
                    if (papel) {
                        papeis[papel.id] = papel.nome;
                    }
                });
            }
        });

        return papeis;
    }

    private getPapeisPartes(partes) {
        let papeis = {};
        if (!partes) {
            return papeis;
        }

        partes.forEach(parte => {
            this.adicionaPapeisParte(papeis, parte);

            if (parte.contatos) {
                parte.contatos.forEach(contato => {
                    this.adicionaPapeisParte(papeis, contato);
                });
            }
        });

        return papeis;
    }

    private adicionaPapeisParte(papeis, parte) {
        if (!parte || parte.status == "INATIVO" || !parte.papel) {
            return;
        }

        parte.papel.forEach(papelParte => {
            const papel = this.getPapel(papelParte);
            if (papel) {
                papeis[papel.id] = papel.nome;
            }
        });
    }

    private sincronizaPartesContrato() {
        const partes = this.normalizaPartes(this.partes.listagem);
        const observadores = this.normalizaPartes(this.observadores.listagem);

        this.partes.listagem = partes;
        this.observadores.listagem = observadores;
        this.entidade.contrato.partes = JSON.parse(JSON.stringify(partes.concat(observadores)));
    }

    private normalizaPartes(listagem) {
        let resultado = [];
        if (!listagem) {
            return resultado;
        }

        listagem.forEach(parte => {
            if (!parte) {
                return;
            }

            const parteExistente = resultado.find(item => item.cpfCnpj == parte.cpfCnpj);
            if (!parteExistente) {
                resultado.push(parte);
                return;
            }

            this.mesclaPapeisParte(parteExistente, parte);
            this.mesclaContatosParte(parteExistente, parte);
        });

        return resultado;
    }

    private mesclaPapeisParte(destino, origem) {
        if (!origem || !origem.papel) {
            return;
        }

        if (!destino.papel) {
            destino.papel = [];
        }

        origem.papel.forEach(papelOrigem => {
            const papel = this.getPapel(papelOrigem);
            if (papel && !destino.papel.some(papelDestino => {
                const papelExistente = this.getPapel(papelDestino);
                return papelExistente && papelExistente.id == papel.id;
            })) {
                destino.papel.push(papelOrigem);
            }
        });
    }

    private mesclaContatosParte(destino, origem) {
        if (!origem || !origem.contatos) {
            return;
        }

        if (!destino.contatos) {
            destino.contatos = [];
        }

        origem.contatos.forEach(contatoOrigem => {
            const contatoExistente = destino.contatos.find(contato => contato.cpfCnpj == contatoOrigem.cpfCnpj);
            if (!contatoExistente) {
                destino.contatos.push(contatoOrigem);
                return;
            }

            this.mesclaPapeisParte(contatoExistente, contatoOrigem);
        });
    }

    private parteEhObservador(parte) {
        if (!parte || !this.papelObservador || !this.papelObservador.id) {
            return false;
        }

        if (parte.papel && parte.papel.some(papel => {
            const papelParte = this.getPapel(papel);
            return papelParte && papelParte.id == this.papelObservador.id;
        })) {
            return true;
        }

        if (parte.contatos) {
            return parte.contatos.some(contato =>
                contato.papel && contato.papel.some(papel => {
                    const papelParte = this.getPapel(papel);
                    return papelParte && papelParte.id == this.papelObservador.id;
                }));
        }

        return false;
    }

    private getPapel(item) {
        if (!item) {
            return null;
        }

        const papel = item.papel ? item.papel : item;
        if (!papel || !papel.id) {
            return null;
        }

        return {
            id: papel.id,
            nome: papel.nome || papel.descricao || papel.identificacao || "Papel"
        };
    }

    private nomeDocumento(documento) {
        return documento.nomeDocumento || documento.identificador || "Documento";
    }

    private limpaArquivosJaPersistidos(documentos) {
        if (!documentos) {
            return;
        }

        documentos.forEach(documento => {
            const documentoJaPersistido = documento.id || documento.documentoOriginalSHA256;
            if (documentoJaPersistido) {
                documento.documento = null;
                documento.documentoOriginal = null;
                documento.documentoAssinado = null;
            }
        });
    }

    contratoDownload() {
        this.documentoService.getDownload(this.entidade.contrato).subscribe((responseApi: any) => {
            let item = { anexo64: "", nomeArquivo: "" }
            item.anexo64 = responseApi.arquivoByte;
            item.nomeArquivo = responseApi.arquivoNome;
            this.utilService.download(item);

            //let bytechars = atob(responseApi.arquivoByte);
            // let blob = new Blob([atob(responseApi.arquivoByte)], { type: "application/zip" });
            //this.utilService.downloadFile(blob, responseApi.arquivoNome);
        }, err => {
            this.errorHandler.handle(err);
        });
    }

}
