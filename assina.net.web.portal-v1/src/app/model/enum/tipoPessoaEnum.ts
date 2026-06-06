export enum TipoPessoaEnum {
   FISICA,
   JURIDICA
}
export namespace TipoPessoaEnum {
   export function toString(tipoPessoa: TipoPessoaEnum): string {
      return TipoPessoaEnum[tipoPessoa];
   }

   export function parse(tipoPessoa: string): TipoPessoaEnum {
      return TipoPessoaEnum[tipoPessoa];
   }

   export function label(tipoPessoa: TipoPessoaEnum): string {
      switch (tipoPessoa) {
         case TipoPessoaEnum.FISICA:
            return "FISICA";
         case TipoPessoaEnum.JURIDICA:
            return "JURIDICA";
         default:
            return ""
      }
   }
}
