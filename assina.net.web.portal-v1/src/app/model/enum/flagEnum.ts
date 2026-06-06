export enum FlagEnum {
   NAO,
   SIM
}
export namespace FlagEnum {
   export function toString(flag: FlagEnum): string {
      return FlagEnum[flag];
   }

   export function parse(flag: string): FlagEnum {
      return FlagEnum[flag];
   }

   export function label(flag: FlagEnum): string {
      switch (flag) {
         case FlagEnum.NAO:
            return "Não";
         case FlagEnum.SIM:
            return "Sim";
         default:
            return ""
      }
   }

   export function booltoEnum(flag: any): FlagEnum {
      if (Boolean(flag) === true) {
         return FlagEnum.SIM;
      } else {
         return FlagEnum.NAO
      }
   }

   export function enumToBool(flag: any): any {
      return parse(FlagEnum.toString(flag)) === FlagEnum.SIM;
   }

}
