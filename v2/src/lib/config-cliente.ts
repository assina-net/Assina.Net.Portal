import { prisma } from "@/lib/db";

export type ConfigCliente = {
  prazoExpiracaoDias: number;
  prazoLembreteDias: number;
  mensagemConvite: string | null;
};

export const CONFIG_PADRAO: ConfigCliente = {
  prazoExpiracaoDias: 30,
  prazoLembreteDias: 3,
  mensagemConvite: null,
};

/** Configuração do cliente (com defaults). */
export async function getConfig(clienteId: string): Promise<ConfigCliente> {
  const c = await prisma.configuracaoCliente.findUnique({ where: { clienteId } });
  return {
    prazoExpiracaoDias: c?.prazoExpiracaoDias ?? CONFIG_PADRAO.prazoExpiracaoDias,
    prazoLembreteDias: c?.prazoLembreteDias ?? CONFIG_PADRAO.prazoLembreteDias,
    mensagemConvite: c?.mensagemConvite ?? CONFIG_PADRAO.mensagemConvite,
  };
}
