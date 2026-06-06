import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from 'app/services/util/shared.service';
import { UsuarioService } from 'app/services/cadastro/usuario/usuario.service';
import { ResponseApi } from 'app/model/util/response-api';
import { ErrorHandlerService } from 'app/services/util/error-handler.service';
import { PerfilEnum } from 'app/model/enum/perfilEnum';

@Component({
   selector: 'combo-pessoa-cliente',
   template: `
   <div style="padding:15px 0px;" >
      <ul *ngIf="this.clientePorPerfil.length > 0" class="row list-unstyled" >
         <li class="col-md-12" ngbDropdown [placement] = "placement" >
               <label for="inputClienteSelecionado" class= "text-capitalize font-medium-2 font-weight-normal" style = "letter-spacing: normal;">Clientes</label>
         </li>
         <li class="col-md-12" ngbDropdown [placement] = "placement" >
               <select id="inputClienteSelecionado" [(ngModel)]="_clienteSelecionado"
                  (ngModelChange) = "clienteChange()"
                  name = "clienteSelecionado" 
                  class="form-control" 
                  style = "background-color:#efefef;"
                  #clienteSelecionado = "ngModel" >
                  <option *ngFor="let cliente of clientePorPerfil" [value] = "cliente.cliente.id">{{ cliente.cliente.pessoa.nomeRazaoSocial }}</option>
               </select>
         </li>
      </ul>      
   </div>
  `,
   styles: []
})
export class ComboClienteComponent {

   @Input() control: FormControl;
   @Input() error: string;
   @Input() touched: boolean;
   @Output() public clienteChangeEvent: EventEmitter<any> = new EventEmitter();
   @Input() excluirPerfilAssinador: boolean;
   @Input() somentePerfilAdministrador: boolean;
   @Input() mostrarSistema: boolean;


   _clienteSelecionado: string;
   clientes: any[];

   public shared: SharedService;
   protected errorHandler: ErrorHandlerService;

   constructor(private userService: UsuarioService) {
      this.shared = SharedService.getInstance();
      this.carregaComboClientes();
      this.excluirPerfilAssinador = false;
      this.mostrarSistema = false;
      this.somentePerfilAdministrador = false;
   }

   temErro() {
      if (this.touched) {
         return this.control.hasError(this.error) && this.control.touched;
      } else {
         return this.control.hasError(this.error) && this.control.dirty;
      }
   }

   @Input('clienteSelecionado')
   public set clienteSelecionado(clienteSelecionado: string) {
      this._clienteSelecionado = clienteSelecionado;
   }

   public get clienteSelecionado() {
      return this._clienteSelecionado;
   }

   public get clientePorPerfil() {
      var cliente;
      if (this.somentePerfilAdministrador) {
         cliente = this.clientes.filter(x => PerfilEnum.parse(x.perfil) == PerfilEnum.ROLE_ADMIN || PerfilEnum.parse(x.perfil) == PerfilEnum.ROLE_ADMIN_CLIENTE);
      } else if (this.excluirPerfilAssinador) {
         cliente = this.clientes.filter(x => x.perfil != null && PerfilEnum.parse(x.perfil) != PerfilEnum.ROLE_ASSINADOR);
      } else {
         cliente = this.clientes;
      }

      if (!this.mostrarSistema) {
         cliente = cliente.filter(x => x.cliente.segmento.identificacao != 'SISTEMA');
      }
      cliente.sort((a, b) => (a.cliente.pessoa.nomeRazaoSocial.toUpperCase() < b.cliente.pessoa.nomeRazaoSocial.toUpperCase() ? -1 : 1));

      let clienteSelecionado = cliente.find(x => x.cliente.id == this._clienteSelecionado);
      if (clienteSelecionado == undefined) {
         if (cliente.length > 0) {
            this._clienteSelecionado = cliente[0].cliente.id
            this.clienteChange();
         }else{
            this._clienteSelecionado = undefined;
         }
      }

      return cliente;

   }

   clienteChange() {
      let clienteSelecionado = this.shared.clientes.find(x => x.cliente.id == this._clienteSelecionado);
      this.shared.clienteSelecionado = clienteSelecionado
      this.shared.perfilUsuario = clienteSelecionado.perfil;
      this.clienteChangeEvent.emit();

   }

   carregaComboClientes() {
      if (this.clientes == undefined) {
         if (this.shared.clientes == undefined) {
            this.userService.getClientes(this.shared.usuario).subscribe((responseApi: ResponseApi) => {
               this.shared.clientes = responseApi.data;
               if (this.shared.clientes.length > 0) {
                  this.shared.clienteSelecionado = this.shared.clientes[0];
                  this.carregaVariaveisShared();
                  this.clienteChangeEvent.emit();
               }
            }, err => {
               this.errorHandler.handle(err);
            });
         } else {
            this.carregaVariaveisShared();
         }
      }
   }

   carregaVariaveisShared() {
      this._clienteSelecionado = this.shared.clienteSelecionado.cliente.id;
      let pesquisa = this.shared.clientes.find(x => x.cliente.id == this._clienteSelecionado);
      this.shared.perfilUsuario = pesquisa.perfil;
      this.clientes = this.shared.clientes;
   }

}
