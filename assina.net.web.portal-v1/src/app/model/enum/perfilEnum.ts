export enum PerfilEnum {
   ROLE_ADMIN,
   ROLE_USUARIO,
   ROLE_ADMIN_CLIENTE,
   ROLE_ASSINADOR,
   ROLE_SUPORTE,
   ROLE_DIRETORIA,
   ROLE_FINANCEIRO,
   ROLE_INTEGRACAO
}
export namespace PerfilEnum {
   export function toString(perfil: PerfilEnum): string {
      return PerfilEnum[perfil];
   }

   export function parse(perfil: string): PerfilEnum {
      return PerfilEnum[perfil];
   }

   export function label(perfil: PerfilEnum): string {
      switch (perfil) {
         case PerfilEnum.ROLE_ADMIN:
            return "ADMINISTRADOR";
         case PerfilEnum.ROLE_USUARIO:
            return "USUÁRIO";
         case PerfilEnum.ROLE_ADMIN_CLIENTE:
            return "ADMINISTRADOR CLIENTE";
         case PerfilEnum.ROLE_ASSINADOR:
            return "ASSINADO";
         case PerfilEnum.ROLE_SUPORTE:
            return "SUPORTE";
         case PerfilEnum.ROLE_DIRETORIA:
            return "DIRETORIA";
         case PerfilEnum.ROLE_FINANCEIRO:
            return "FINANCEIRO";
         case PerfilEnum.ROLE_INTEGRACAO:
            return "INTEGRACAO";
         default:
            return ""
      }
   }

}
