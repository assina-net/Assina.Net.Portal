"use client";

import dynamic from "next/dynamic";

// react-pdf/pdf.js só funciona no browser → carrega sem SSR.
const PosicionarForm = dynamic(() => import("./posicionar-form").then((m) => m.PosicionarForm), {
  ssr: false,
  loading: () => <p className="text-sm text-gray-400">Carregando editor de documento…</p>,
});

export function PosicionarWrapper(props: React.ComponentProps<typeof PosicionarForm>) {
  return <PosicionarForm {...props} />;
}
