"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { salvarPosicoes } from "@/lib/actions/posicoes";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Doc = { id: string; nome: string; url: string };
type Parte = { id: string; nome: string };
type Pos = {
  contratoDocumentoId: string;
  contratoParteId: string;
  pagina: number;
  x: number;
  y: number;
  largura: number;
  altura: number;
};

const CORES = ["#34b563", "#17a6d4", "#FF8D60", "#9b59b6", "#e84393", "#f1c40f"];
const LARGURA = 0.26;
const ALTURA = 0.07;
const clamp = (v: number, max: number) => Math.max(0, Math.min(max, v));

export function PosicionarForm({
  contratoId,
  docs,
  partes,
  posicoesIniciais,
}: {
  contratoId: string;
  docs: Doc[];
  partes: Parte[];
  posicoesIniciais: Pos[];
}) {
  const router = useRouter();
  const [parteSel, setParteSel] = useState(partes[0]?.id ?? "");
  const [posicoes, setPosicoes] = useState<Pos[]>(posicoesIniciais);
  const [numPaginas, setNumPaginas] = useState<Record<string, number>>({});
  const [salvando, setSalvando] = useState(false);
  const [msg, setMsg] = useState("");
  const drag = useRef<{ idx: number; rect: DOMRect } | null>(null);

  const cor = (parteId: string) => CORES[Math.max(0, partes.findIndex((p) => p.id === parteId)) % CORES.length];

  function addBox(docId: string, pagina: number, e: React.MouseEvent<HTMLDivElement>) {
    if (!parteSel) return setMsg("Selecione um signatário primeiro.");
    if ((e.target as HTMLElement).dataset.box) return; // clicou num box existente
    const rect = e.currentTarget.getBoundingClientRect();
    const fx = (e.clientX - rect.left) / rect.width;
    const fy = (e.clientY - rect.top) / rect.height;
    setPosicoes((ps) => [
      ...ps,
      {
        contratoDocumentoId: docId,
        contratoParteId: parteSel,
        pagina,
        x: clamp(fx - LARGURA / 2, 1 - LARGURA),
        y: clamp(fy - ALTURA / 2, 1 - ALTURA),
        largura: LARGURA,
        altura: ALTURA,
      },
    ]);
  }

  function onDragStart(idx: number, e: React.PointerEvent) {
    e.stopPropagation();
    const overlay = (e.currentTarget as HTMLElement).parentElement!;
    drag.current = { idx, rect: overlay.getBoundingClientRect() };
    window.addEventListener("pointermove", onDragMove);
    window.addEventListener("pointerup", onDragEnd);
  }
  function onDragMove(e: PointerEvent) {
    if (!drag.current) return;
    const { idx, rect } = drag.current;
    const fx = clamp((e.clientX - rect.left) / rect.width - LARGURA / 2, 1 - LARGURA);
    const fy = clamp((e.clientY - rect.top) / rect.height - ALTURA / 2, 1 - ALTURA);
    setPosicoes((ps) => ps.map((p, i) => (i === idx ? { ...p, x: fx, y: fy } : p)));
  }
  function onDragEnd() {
    drag.current = null;
    window.removeEventListener("pointermove", onDragMove);
    window.removeEventListener("pointerup", onDragEnd);
  }

  function remover(idx: number) {
    setPosicoes((ps) => ps.filter((_, i) => i !== idx));
  }

  async function salvar() {
    setSalvando(true);
    setMsg("");
    const r = await salvarPosicoes(contratoId, posicoes);
    setSalvando(false);
    if (!r.ok) return setMsg(r.erro || "Erro ao salvar");
    router.push(`/contratos/${contratoId}`);
  }

  return (
    <div>
      {/* seletor de signatário */}
      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <span className="text-sm font-medium text-gray-600">Signatário:</span>
        {partes.map((p) => (
          <button
            key={p.id}
            onClick={() => setParteSel(p.id)}
            className={`rounded-full px-3 py-1 text-sm ${parteSel === p.id ? "text-white" : "text-gray-700"}`}
            style={{ background: parteSel === p.id ? cor(p.id) : "#eef1f4" }}
          >
            {p.nome}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400">Clique no documento para posicionar · arraste para mover</span>
        <button
          onClick={salvar}
          disabled={salvando}
          className="h-9 rounded-md bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        >
          {salvando ? "Salvando..." : "Salvar posições"}
        </button>
      </div>
      {msg && <p className="mb-3 rounded-md bg-danger/10 px-3 py-2 text-sm text-red-700">{msg}</p>}

      {docs.map((doc) => (
        <div key={doc.id} className="mb-8">
          <h2 className="mb-2 text-sm font-medium text-gray-700">{doc.nome}</h2>
          <Document
            file={doc.url}
            onLoadSuccess={({ numPages }) => setNumPaginas((n) => ({ ...n, [doc.id]: numPages }))}
            loading={<p className="text-sm text-gray-400">Carregando PDF…</p>}
            error={<p className="text-sm text-red-600">Não foi possível carregar o PDF.</p>}
          >
            {Array.from({ length: numPaginas[doc.id] ?? 0 }, (_, pagina) => (
              <div key={pagina} className="relative mx-auto mb-4 w-fit border border-gray-200 shadow-sm">
                <Page pageNumber={pagina + 1} width={720} renderTextLayer={false} renderAnnotationLayer={false} />
                {/* overlay para clique/posicionamento */}
                <div className="absolute inset-0 cursor-crosshair" onClick={(e) => addBox(doc.id, pagina, e)}>
                  {posicoes.map((p, idx) =>
                    p.contratoDocumentoId === doc.id && p.pagina === pagina ? (
                      <div
                        key={idx}
                        data-box="1"
                        onPointerDown={(e) => onDragStart(idx, e)}
                        className="absolute flex cursor-move items-center justify-center rounded text-[10px] font-semibold text-white"
                        style={{
                          left: `${p.x * 100}%`,
                          top: `${p.y * 100}%`,
                          width: `${p.largura * 100}%`,
                          height: `${p.altura * 100}%`,
                          background: cor(p.contratoParteId) + "cc",
                          border: `1px solid ${cor(p.contratoParteId)}`,
                        }}
                      >
                        {partes.find((x) => x.id === p.contratoParteId)?.nome?.split(" ")[0] ?? "Assinatura"}
                        <button
                          data-box="1"
                          onPointerDown={(e) => { e.stopPropagation(); }}
                          onClick={(e) => { e.stopPropagation(); remover(idx); }}
                          className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white text-[10px] text-gray-700 shadow"
                        >
                          ×
                        </button>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </Document>
        </div>
      ))}
    </div>
  );
}
