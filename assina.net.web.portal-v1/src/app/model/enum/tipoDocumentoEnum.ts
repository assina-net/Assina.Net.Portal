export enum TipoDocumentoEnum {
   ADITIVO,
   DUPLICATA,
   CONTRATO,
   CARTA_CESSAO,
   CONTRATO_SEGURO,
   ADENDO
}

export namespace TipoDocumentoEnum {
   export function toString(tipoDocumento: TipoDocumentoEnum): string {
      return TipoDocumentoEnum[tipoDocumento];
   }

   export function parse(tipoDocumento: string): TipoDocumentoEnum {
      return TipoDocumentoEnum[tipoDocumento];
   }

   export function label(tipoDocumento: TipoDocumentoEnum): string {
      switch (tipoDocumento) {
         case TipoDocumentoEnum.ADITIVO:
            return "ADITIVO";
         case TipoDocumentoEnum.DUPLICATA:
            return "DUPLICATA";
         case TipoDocumentoEnum.CONTRATO:
            return "CONTRATO";
         case TipoDocumentoEnum.CARTA_CESSAO:
            return "CARTA CESSAO";
         case TipoDocumentoEnum.CONTRATO_SEGURO:
            return "CONTRATO SEGURO";
         case TipoDocumentoEnum.ADENDO:
            return "ADENDO";
         default:
            return ""
      }
   }
}
