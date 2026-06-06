import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

   {
      path: '', title: 'Cadastro', icon: 'icon-book-open', class: 'has-sub', badge: '',
      badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
      isExternalLink: false, submenu: [
         {
            path: '/cadastro/cliente/lista', title: 'Clientes', icon: 'ft-file', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 90000200
         },
         {
            path: '/cadastro/usuario/lista', title: 'Usuários', icon: 'ft-users', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 9000100
         },
         {
            path: '/cadastro/contrato/lista', title: 'Documentos', icon: 'ft-file', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 90000000
         },

      ]
   },
   {
      path: '', title: 'Assinaturas', icon: 'ft-file-minus', class: 'has-sub', badge: '', menuId: 80000000,
      badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
      isExternalLink: false, submenu: [
         {
            path: '/assinar/pendente/lista', title: 'Pendentes', icon: 'ft-check-square', class: '', menuId: 80000100,
            badge: '', badgeClass: '', isExternalLink: false, submenu: []
         },
         {
            path: '/assinar/recusado/lista', title: 'Recusados', icon: 'ft-check-square', class: '', menuId: 80000200,
            badge: '', badgeClass: '', isExternalLink: false, submenu: []
         },
         {
            path: '/assinar/vigente/lista', title: 'Vigentes', icon: 'ft-check-square', class: '', menuId: 80000300,
            badge: '', badgeClass: '', isExternalLink: false, submenu: []
         }
      ]
   },
   {
      path: '', title: 'Configurações', icon: 'ft-file-minus', class: 'has-sub', badge: '',
      badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', menuId: 60000000,
      isExternalLink: false, submenu: [
         {
            path: '/config/tipoDocumento', title: 'Tipo Documento', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000100
         },
         {
            path: '/config/papel', title: 'Papel', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000500
         },
         {
            path: '/config/parametrosCliente', title: 'Parâmetros Cliente', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
         },{
            path: '/config/parametrosEmail', title: 'Parâmetros E-mail', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60001000
         },{
            path: '/config/parametrosWhatsApp', title: 'Parâmetros WhatsApp', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
         },{
            path: '/config/parametrosSms', title: 'Parâmetros SMS', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000200
         },
         {
            path: '/config/emailsTemplate', title: 'Templates E-mail', icon: 'ft-mail', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000600
         },
         {
            path: '/config/whatsappTemplate', title: 'Templates WhatsApp', icon: 'ft-mail', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000600
         },
         {
            path: '/config/alertas', title: 'Alertas', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000300
         },
         {
            path: '/config/parametrosSistema', title: 'Parâmetros Sistema', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000700
         },
         {
            path: '/config/termos', title: 'Termos', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000800
         },
         {
            path: '/config/segmentos', title: 'Segmentos', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 60000900
         }
      ]
   },
   {
      path: '', title: 'Manuais', icon: 'ft-file-minus', class: 'has-sub', badge: '',
      badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', menuId: 50000000,
      isExternalLink: false, submenu: [
         {
            path: '/desenv', title: 'Tutorial', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 50000100
         },
         {
            path: '/desenv', title: 'Integração', icon: 'ft-check-square', class: '',
            badge: '', badgeClass: '', isExternalLink: false, submenu: [], menuId: 50000200
         }

      ]
   },

];
