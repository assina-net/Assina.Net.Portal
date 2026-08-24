import { describe, it, expect } from "vitest";
import { rotuloMes, ultimosMeses, agruparPorMes, csvCampo, montarCsv } from "./relatorios";

describe("rotuloMes", () => {
  it("YYYY-MM vira MM/YYYY", () => {
    expect(rotuloMes("2026-06")).toBe("06/2026");
  });
});

describe("ultimosMeses", () => {
  it("retorna N meses terminando no mês base", () => {
    const r = ultimosMeses(new Date(Date.UTC(2026, 5, 15)), 3); // junho
    expect(r).toEqual(["2026-04", "2026-05", "2026-06"]);
  });
  it("atravessa a virada de ano", () => {
    const r = ultimosMeses(new Date(Date.UTC(2026, 1, 10)), 3); // fevereiro
    expect(r).toEqual(["2025-12", "2026-01", "2026-02"]);
  });
});

describe("agruparPorMes", () => {
  it("conta datas dentro dos buckets e zera os vazios", () => {
    const meses = ["2026-05", "2026-06"];
    const datas = [
      new Date(Date.UTC(2026, 5, 1)),
      new Date(Date.UTC(2026, 5, 20)),
      new Date(Date.UTC(2026, 4, 3)),
      new Date(Date.UTC(2025, 0, 1)), // fora da janela → ignorado
    ];
    expect(agruparPorMes(datas, meses)).toEqual([
      { mes: "05/2026", total: 1 },
      { mes: "06/2026", total: 2 },
    ]);
  });
});

describe("csvCampo", () => {
  it("não escapa texto simples", () => {
    expect(csvCampo("abc")).toBe("abc");
  });
  it("escapa quando há ; aspas ou quebra", () => {
    expect(csvCampo("a;b")).toBe('"a;b"');
    expect(csvCampo('di"z')).toBe('"di""z"');
  });
  it("nulo vira vazio", () => {
    expect(csvCampo(null)).toBe("");
  });
});

describe("montarCsv", () => {
  it("monta cabeçalho + linhas com ; e BOM", () => {
    const csv = montarCsv(["A", "B"], [["1", "x;y"], [2, null]]);
    expect(csv.startsWith("﻿")).toBe(true);
    expect(csv).toContain("A;B");
    expect(csv).toContain('1;"x;y"');
    expect(csv.trim().endsWith("2;")).toBe(true);
  });
});
