export enum SistemaTipoAtributoEnum {
   CONSULTA_CONTRATO_MOSTRAR_PARTES
}
export namespace SistemaTipoAtributoEnum {
   export function toString(sistemaTipoAtributoEnum: SistemaTipoAtributoEnum): string {
      return SistemaTipoAtributoEnum[sistemaTipoAtributoEnum];
   }

   export function parse(sistemaTipoAtributoEnum: string): SistemaTipoAtributoEnum {
      return SistemaTipoAtributoEnum[sistemaTipoAtributoEnum];
   }

   export function label(sistemaTipoAtributoEnum: SistemaTipoAtributoEnum): string {
      switch (sistemaTipoAtributoEnum) {
         case SistemaTipoAtributoEnum.CONSULTA_CONTRATO_MOSTRAR_PARTES:
            return "Mostrar partes na listagem do contrato";
         default:
            return ""
      }
   }

}
