const DOWNLOADS = [
  {
    os: "macOS (Apple Silicon)",
    icon: "🍎",
    arquivo: "/downloads/assinador-assinanet_0.1.0_aarch64.dmg",
    req: "macOS 12+ · M1/M2/M3",
  },
  {
    os: "Linux (.deb)",
    icon: "🐧",
    arquivo: "/downloads/assinador-assinanet_0.1.0_amd64.deb",
    req: "Debian/Ubuntu x86_64",
  },
  {
    os: "Linux (.rpm)",
    icon: "🐧",
    arquivo: "/downloads/assinador-assinanet_0.1.0_x86_64.rpm",
    req: "Fedora/RHEL x86_64",
  },
];

export default function AssinadorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-branco.png" alt="Assina.net" className="mx-auto mb-4 h-9 rounded bg-brand-navy px-3 py-2" />
          <h1 className="font-heading text-2xl font-semibold text-brand-slate">Assinador Assina.net</h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
            App para assinar documentos com seu <strong>certificado digital</strong> (A1 em arquivo).
            A chave privada nunca sai da sua máquina — o app apenas devolve a assinatura ao site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {DOWNLOADS.map((d) => (
            <div key={d.os} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="text-4xl">{d.icon}</div>
              <div className="mt-2 font-semibold text-gray-800">{d.os}</div>
              <div className="mb-4 text-xs text-gray-400">{d.req}</div>
              <a
                href={d.arquivo}
                className="inline-flex h-10 items-center rounded-md bg-brand px-4 text-sm font-medium text-white hover:bg-brand-dark"
              >
                Baixar
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Windows em breve. macOS Intel sob demanda.
        </p>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">
          <h2 className="mb-2 font-heading font-semibold text-brand-slate">Como usar</h2>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Baixe e instale o Assinador para o seu sistema.</li>
            <li>Abra o app e selecione seu certificado A1 (.pfx) + senha.</li>
            <li>No link de assinatura, clique em <strong>“Assinar com certificado digital”</strong>.</li>
            <li>A assinatura é aplicada ao documento automaticamente.</li>
          </ol>
          <p className="mt-3 text-xs text-gray-400">
            macOS: na 1ª vez, clique com o botão direito no app → Abrir (app ainda não assinado pela Apple).
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">Assina.net</p>
      </div>
    </main>
  );
}
