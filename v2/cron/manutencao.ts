// Handler do SST Cron (Lambda separada). Apenas chama a rota de manutenção do app
// com o segredo — sem dependências da app (bundle leve).
export async function handler() {
  const url = process.env.CRON_URL!;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
  });
  const corpo = await res.text();
  console.log("cron/manutencao →", res.status, corpo);
  return { status: res.status, corpo };
}
