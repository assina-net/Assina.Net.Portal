export enum StatusEnum {
   INATIVO,
   ATIVO
}
export namespace StatusEnum {
   export function toString(status: StatusEnum): string {
      return StatusEnum[status];
   }

   export function parse(status: string): StatusEnum {
      return StatusEnum[status];
   }

   export function label(status: StatusEnum): string {
      switch (status) {
         case StatusEnum.INATIVO:
            return "INATIVO";
         case StatusEnum.ATIVO:
            return "ATIVO";
         default:
            return ""
      }
   }

   export function booltoEnum(status: any): StatusEnum {
      if (status === StatusEnum.ATIVO || status === true || status === 'true' || status === 'ATIVO' || status === '1' || status === 1) {
         return StatusEnum.ATIVO;
      }
      return StatusEnum.INATIVO;
   }

   export function enumToBool(status: any): any {
      return booltoEnum(status) === StatusEnum.ATIVO;
   }

}
