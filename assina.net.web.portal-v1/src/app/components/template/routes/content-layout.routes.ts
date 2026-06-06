import { Routes } from '@angular/router';
import { NotfoundComponent } from 'app/components/security/pages/notfound.component';
import { LoginComponent } from '../../security/login/login.component';
import { SenhaRecuperacaoComponent } from '../../security/senhaRecuperacao/senhaRecuperacao.component';
import { AssinarAcessoComponent } from 'app/components/assinar/acesso/assinarAcesso.component';
import { ValidarAssinaturaComponent } from 'app/components/validar/documento/validarAssinatura.component';
import { RegistrarClienteComponent } from 'app/components/registrar/registrar-cliente.component';


// Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const CONTENT_ROUTES: Routes = [
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'validarChaveAcesso',
      component: AssinarAcessoComponent
   },
   {
      path: 'validarAssinatura',
      component: ValidarAssinaturaComponent
   },
   {
      path: 'recuperarSenha',
      component: SenhaRecuperacaoComponent
   },
   {
      path: 'registrar',
      component: RegistrarClienteComponent
   },
   {
      path: '404',
      component: NotfoundComponent
   }
];