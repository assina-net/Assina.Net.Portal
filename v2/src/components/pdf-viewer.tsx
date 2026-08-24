"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Worker servido localmente (public/) — o unpkg estava falhando (CORS/versão).
// O arquivo é copiado de pdfjs-dist no prebuild (ver package.json "prebuild").
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

/** Visualizador de PDF embutido (rolável). Documentos = [{nome, url}]. */
export function PdfViewer({ docs, width = 640 }: { docs: { nome: string; url: string }[]; width?: number }) {
  return (
    <div className="space-y-6">
      {docs.map((d, i) => (
        <DocViewer key={i} doc={d} width={width} />
      ))}
    </div>
  );
}

function DocViewer({ doc, width }: { doc: { nome: string; url: string }; width: number }) {
  const [paginas, setPaginas] = useState(0);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{doc.nome}</span>
        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-blue hover:underline">
          Abrir em nova aba
        </a>
      </div>
      <div className="max-h-[70vh] overflow-auto rounded-lg border border-gray-200 bg-gray-100 p-2">
        <Document
          file={doc.url}
          onLoadSuccess={({ numPages }) => setPaginas(numPages)}
          loading={<p className="p-4 text-sm text-gray-400">Carregando documento…</p>}
          error={<p className="p-4 text-sm text-red-600">Não foi possível carregar o documento.</p>}
        >
          {Array.from({ length: paginas }, (_, i) => (
            <div key={i} className="mx-auto mb-3 w-fit bg-white shadow-sm">
              <Page pageNumber={i + 1} width={width} renderTextLayer={false} renderAnnotationLayer={false} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}
