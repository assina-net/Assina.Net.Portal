import { PerfilEnum } from "../enum/perfilEnum";
import { StatusEnum } from "../enum/statusEnum";
import { Pessoa } from "./pessoa";

export class Usuario {
    constructor(public id: string,
        public login: string,
        public senha: string,
        public nome: string,
        public status: StatusEnum,
        public perfil: PerfilEnum,
        public pessoa: Pessoa,
        public tokenAssinatura: string,
        public validadeTokenAssinatura:Date) {
    }
}
