import { Usuario } from './usuario';

export class CurrentUser {
  public token: string;
  public usuario: Usuario;
  public clientes: any[];
  public id: string;
}
