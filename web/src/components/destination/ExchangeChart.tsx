"use client";

import { useEffect, useRef, useState } from "react";
import type { RatePoint } from "@/lib/exchange";
import type { Lang } from "@/i18n/messages";
import type { Theme } from "@/components/providers/AppProviders";

interface Props {
  history: RatePoint[];
  from: string;
  to: string;
  lang: Lang;
  theme: Theme;
}

interface Point extends RatePoint { x: number; y: number }

const HEIGHT = 220;

/** 최근 7일 환율 추이 (캔버스로 직접 그림) */
export function ExchangeChart({ history, from, to, lang, theme }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [chartWidth, setChartWidth] = useState(400);
  const [hover, setHover] = useState<Point | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || history.length < 2) return;

    const render = () => {
      const width = wrap.clientWidth || 400;
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dark = theme === "dark";
      const text = dark ? "#cbd5e1" : "#64748b";
      const line = dark ? "#60a5fa" : "#2563eb";
      const fill = dark ? "rgba(96,165,250,.12)" : "rgba(37,99,235,.12)";
      const grid = dark ? "rgba(148,163,184,.24)" : "rgba(15,23,42,.1)";

      canvas.width = width * dpr;
      canvas.height = HEIGHT * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${HEIGHT}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, HEIGHT);

      const padX = 36, padTop = 20, padBottom = 42;
      const gw = width - padX * 2, gh = HEIGHT - padTop - padBottom;
      const rates = history.map((h) => h.rate);
      const min = Math.min(...rates), max = Math.max(...rates), range = max - min || 1;

      ctx.strokeStyle = grid;
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padTop + (gh / 4) * i;
        ctx.beginPath(); ctx.moveTo(padX, y); ctx.lineTo(width - padX, y); ctx.stroke();
      }

      const pts: Point[] = history.map((h, i) => ({
        ...h,
        x: padX + (gw / Math.max(history.length - 1, 1)) * i,
        y: padTop + gh - ((h.rate - min) / range) * gh,
      }));

      ctx.beginPath();
      ctx.moveTo(pts[0].x, HEIGHT - padBottom);
      pts.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.lineTo(pts[pts.length - 1].x, HEIGHT - padBottom);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();

      ctx.beginPath();
      pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.lineWidth = 3;
      ctx.strokeStyle = line;
      ctx.stroke();

      ctx.fillStyle = line;
      pts.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill(); });

      ctx.font = "11px sans-serif";
      ctx.fillStyle = text;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      pts.forEach((p, i) => {
        if (i === 0 || i === pts.length - 1 || i % 2 === 0) ctx.fillText(p.date.slice(5).replace("-", "/"), p.x, HEIGHT - padBottom + 12);
      });
      setPoints(pts);
      setChartWidth(width);
    };

    render();
    const ro = new ResizeObserver(render);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [history, theme]);

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const closest = points.reduce<Point | null>((best, p) => (!best || Math.abs(p.x - x) < Math.abs(best.x - x) ? p : best), null);
    setHover(closest);
  };

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <canvas ref={canvasRef} className="currency-chart" onMouseMove={onMove} onMouseLeave={() => setHover(null)} />
      {hover && (
        <div
          className="chart-tooltip"
          style={{ opacity: 1, left: Math.min(chartWidth - 140, Math.max(8, hover.x - 60)), top: Math.max(8, hover.y - 54) }}
        >
          <strong>{hover.date}</strong>
          <span>
            1 {from} = {hover.rate.toLocaleString(lang === "en" ? "en-US" : "ko-KR", { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {to}
          </span>
        </div>
      )}
    </div>
  );
}
