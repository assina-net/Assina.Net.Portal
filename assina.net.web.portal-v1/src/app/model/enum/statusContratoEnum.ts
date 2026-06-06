export enum StatusContratoEnum {
   NAOLIBERADOASSINTAURA,
   ASSINADO,
   LIBERADOASSINATURA,
   PARCIALMENTEASSINADO,
   GERANDOASSINATURAS
}
export namespace StatusContratoEnum {
   export function toString(status: StatusContratoEnum): string {
      return StatusContratoEnum[status];
   }

   export function parse(status: string): StatusContratoEnum {
      return StatusContratoEnum[status];
   }

   export function label(status: StatusContratoEnum): string {
      switch (status) {
         case StatusContratoEnum.NAOLIBERADOASSINTAURA:
            return "NÃO LIBERADO PARA ASSINATURA";
         case StatusContratoEnum.ASSINADO:
            return "ASSINADO";
         case StatusContratoEnum.LIBERADOASSINATURA:
            return "LIBERADO ASSINATURA";
         case StatusContratoEnum.PARCIALMENTEASSINADO:
            return "PARCIALMENTE ASSINADO";
         case StatusContratoEnum.GERANDOASSINATURAS:
            return "GERANDO ASSINATURAS";
         default:
            return ""
      }
   }
}
