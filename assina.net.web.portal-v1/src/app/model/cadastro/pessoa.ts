import { TipoPessoaEnum } from "../enum/tipoPessoaEnum";
import { Cliente } from "./cliente";

export class Pessoa {
    constructor(public id: string,
        public nomeRazaoSocial: string,
        public cpfCnpj: string,
        public nome: string,
        public tipoPessoa: TipoPessoaEnum,
        public email: string,
        public cliente: Cliente) {
    }
}
