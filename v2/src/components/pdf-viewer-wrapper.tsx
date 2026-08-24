"use client";

import dynamic from "next/dynamic";

// react-pdf só roda no browser → sem SSR.
const PdfViewer = dynamic(() => import("./pdf-viewer").then((m) => m.PdfViewer), {
  ssr: false,
  loading: () => <p className="text-sm text-gray-400">Carregando documento…</p>,
});

export function PdfViewerWrapper(props: React.ComponentProps<typeof PdfViewer>) {
  return <PdfViewer {...props} />;
}
