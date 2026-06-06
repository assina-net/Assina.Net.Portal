export enum PapelContratoEnum {
      PARTE,
      TESTEMUNHA,
      ADMINSITRADOR,
      AVALISTA,
      CEDENTE,
      CESSIONARIO,
      CONTRATADA,
      CONTRATANTE,
      DEVEDORSOLIDARIO,
      EMITENTE,
      ENDOSSANTE,
      ENDOSSATARIO,
      FOMENTADA,
      FOMENTADORA,
      GESTOR,
      INTERVENIENTE,
      COMPRADORA,
      VENDEDORA,
      PROCURADOR,
      REPRESENTANTELEGAL,
      RESPONSAVELSOLIDARIO,
      VALIDADOR,
      RECEBEDOR,
      APROVADOR,
      FIADOR,
      LOCADOR,
      LOCATARIO,
      SEGURADO,
      CORRETORASEGUROS
}

export namespace PapelContratoEnum {
      export function toString(papelContrato: PapelContratoEnum): string {
            return PapelContratoEnum[papelContrato];
      }

      export function parse(papelContrato: string): PapelContratoEnum {
            return PapelContratoEnum[papelContrato];
      }

      export function label(papelContrato: PapelContratoEnum): string {
            switch (papelContrato) {
                  case PapelContratoEnum.PARTE:
                        return "Assinar como parte";
                  case PapelContratoEnum.TESTEMUNHA:
                        return "Assinar como testemunha";
                  case PapelContratoEnum.ADMINSITRADOR:
                        return "Assinar como administrador";
                  case PapelContratoEnum.AVALISTA:
                        return "Assinar como avalista";
                  case PapelContratoEnum.CEDENTE:
                        return "Assinar como cedente";
                  case PapelContratoEnum.CESSIONARIO:
                        return "Assinar como cessionário";
                  case PapelContratoEnum.CONTRATADA:
                        return "Assinar como contratada";
                  case PapelContratoEnum.CONTRATANTE:
                        return "Assinar como contratante";
                  case PapelContratoEnum.DEVEDORSOLIDARIO:
                        return "Assinar como devedor solidário";
                  case PapelContratoEnum.EMITENTE:
                        return "Assinar como emitente";
                  case PapelContratoEnum.ENDOSSANTE:
                        return "Assinar como endossante";
                  case PapelContratoEnum.ENDOSSATARIO:
                        return "Assinar como endossatário";
                  case PapelContratoEnum.FOMENTADA:
                        return "Assinar como Fomentada";
                  case PapelContratoEnum.FOMENTADORA:
                        return "Assinar como Fomentadora";
                  case PapelContratoEnum.GESTOR:
                        return "Assinar como gestor";
                  case PapelContratoEnum.INTERVENIENTE:
                        return "Assinar como interveniente";
                  case PapelContratoEnum.COMPRADORA:
                        return "Assinar como parte compradora";
                  case PapelContratoEnum.VENDEDORA:
                        return "Assinar como parte vendedora";
                  case PapelContratoEnum.PROCURADOR:
                        return "Assinar como procurador";
                  case PapelContratoEnum.REPRESENTANTELEGAL:
                        return "Assinar como representante legal";
                  case PapelContratoEnum.RESPONSAVELSOLIDARIO:
                        return "Assinar como responsável solidário";
                  case PapelContratoEnum.VALIDADOR:
                        return "Assinar como validador";
                  case PapelContratoEnum.RECEBEDOR:
                        return "Assinar para acusar recebimento";
                  case PapelContratoEnum.APROVADOR:
                        return "Assinar para aprovar";
                  case PapelContratoEnum.FIADOR:
                        return "Assinar como fiador";
                  case PapelContratoEnum.LOCADOR:
                        return "Assinar como locador";
                  case PapelContratoEnum.LOCATARIO:
                        return "Assinar como locatário";
                  case PapelContratoEnum.SEGURADO:
                        return "Assinar como segurado";
                  case PapelContratoEnum.CORRETORASEGUROS:
                        return "Assinar como corretora de seguros";

                  default:
                        return ""
            }

      }

}
