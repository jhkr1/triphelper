"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";
// selection.transition()/interrupt()는 이 모듈이 불러와질 때 덧붙는다. 번들러가 빼지 않도록 명시적으로 불러온다.
import "d3-transition";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { DestinationSummary } from "@/lib/destinations";
import { toLngLatTuple } from "@/lib/geo";

interface GlobeProps {
  list: DestinationSummary[];
  activeSlug: string | null;
  labelOf: (d: DestinationSummary) => string;
  onSelect: (d: DestinationSummary) => void;
  ariaLabel: string;
}

const W = 800;
const R = 372;

/**
 * D3 직교 투영 지구본. 드래그로 회전, 핀 클릭/Enter로 선택.
 * D3가 SVG를 직접 다루므로 React는 <svg> 자리만 만들고, 그리기는 effect 안에서 한다.
 */
export function Globe({ list, activeSlug, labelOf, onSelect, ariaLabel }: GlobeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // 최신 props를 effect 안의 D3 콜백에서 읽기 위한 ref
  const latest = useRef({ activeSlug, labelOf, onSelect });
  useLayoutEffect(() => {
    latest.current = { activeSlug, labelOf, onSelect };
  });
  const api = useRef<{ draw: () => void; rotateTo: (d: DestinationSummary) => void } | null>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svg = d3.select(el);
    svg.selectAll("*").remove();

    const proj = d3.geoOrthographic().scale(R).translate([W / 2, W / 2]).clipAngle(90).rotate([-110, -22]);
    const path = d3.geoPath(proj);
    const grad = svg.append("defs").append("radialGradient").attr("id", "ocean").attr("cx", "35%").attr("cy", "30%").attr("r", "80%");
    grad.append("stop").attr("offset", "0").attr("class", "ocean-stop--1");
    grad.append("stop").attr("offset", ".6").attr("class", "ocean-stop--2");
    grad.append("stop").attr("offset", "1").attr("class", "ocean-stop--3");
    svg.append("path").attr("class", "sphere");
    svg.append("path").attr("class", "grat");
    svg.append("path").attr("class", "land");
    svg.append("path").attr("class", "land land--dest");
    svg.append("path").attr("class", "rim");
    const graticule = d3.geoGraticule10();
    let land: FeatureCollection<Geometry, { name: string }> | null = null;
    let interacted = false;

    const pins = svg.append("g").selectAll<SVGGElement, DestinationSummary>("g.pin").data(list, (d) => d.slug).join("g")
      .attr("class", "pin").attr("tabindex", 0).attr("role", "button")
      .on("click", (_, d) => latest.current.onSelect(d))
      .on("keydown", (e: KeyboardEvent, d) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); latest.current.onSelect(d); }
      });
    pins.append("circle").attr("class", "pulse").attr("r", 5);
    pins.append("circle").attr("class", "dot").attr("r", 5);
    pins.append("circle").attr("class", "hit").attr("r", 13);
    pins.append("text").attr("x", 12).attr("y", 5);

    function draw() {
      const { activeSlug: activeNow, labelOf: label } = latest.current;
      const active = list.find((d) => d.slug === activeNow) ?? null;
      const rotation = proj.rotate();
      const center: [number, number] = [-rotation[0], -rotation[1]];
      svg.select(".sphere").attr("d", path({ type: "Sphere" }));
      svg.select(".grat").attr("d", path(graticule));
      svg.select(".rim").attr("d", path({ type: "Sphere" }));
      if (land) {
        svg.select(".land:not(.land--dest)").attr("d", path(land));
        // 선택한 나라 하나만 회색으로 강조
        const feats = active?.isoNumeric == null ? [] : land.features.filter((f) => Number(f.id) === active.isoNumeric);
        svg.select(".land--dest").attr("d", path({ type: "FeatureCollection", features: feats }));
      }
      pins.each(function (d) {
        const lngLat = toLngLatTuple(d.center);
        const visible = d3.geoDistance(lngLat, center) < Math.PI / 2 - 0.04;
        const p = proj(lngLat);
        const g = d3.select(this);
        g.attr("display", visible && p ? null : "none");
        if (p) g.attr("transform", `translate(${p[0]},${p[1]})`).attr("aria-label", label(d));
        g.select("text").text(label(d));
      });
      pins.classed("active", (d) => d.slug === activeNow);
      pins.filter(".active").raise();
    }

    function rotateTo(d: DestinationSummary) {
      interacted = true;
      svg.interrupt();
      const r0 = proj.rotate();
      const r1: [number, number, number] = [-d.center.lng, -d.center.lat * 0.85, 0];
      while (r1[0] - r0[0] > 180) r1[0] -= 360;
      while (r1[0] - r0[0] < -180) r1[0] += 360;
      if (reduceMotion) { proj.rotate(r1); draw(); return; }
      const i = d3.interpolate(r0, r1);
      svg.transition().duration(1300).ease(d3.easeCubicInOut).tween("rotate", () => (k) => { proj.rotate(i(k)); draw(); });
    }

    svg.call(
      d3.drag<SVGSVGElement, unknown>()
        .on("start", () => { interacted = true; svg.interrupt(); })
        .on("drag", (e) => {
          const r = proj.rotate();
          proj.rotate([r[0] + e.dx * 0.35, Math.max(-65, Math.min(65, r[1] - e.dy * 0.35))]);
          draw();
        }),
    );

    // 사용자가 만지기 전까지 천천히 자동 회전
    const timer = reduceMotion ? null : d3.timer(() => {
      if (interacted) { timer?.stop(); return; }
      const r = proj.rotate();
      proj.rotate([r[0] + 0.12, r[1]]);
      draw();
    });

    let cancelled = false;
    // 나라 경계 데이터는 필요할 때 따로 불러온다 (첫 화면 용량 절약)
    import("world-atlas/countries-110m.json").then((mod) => {
      if (cancelled) return;
      const topo = (mod.default ?? mod) as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
      land = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string }>;
      draw();
    }).catch(() => { /* 지도 경계 없이도 핀과 검색은 동작 */ });

    draw();
    api.current = { draw, rotateTo };
    return () => {
      cancelled = true;
      timer?.stop();
      svg.interrupt();
      svg.on(".drag", null);
      api.current = null;
    };
  }, [list]);

  // 선택·언어가 바뀌면 다시 그리고, 선택한 나라로 회전
  useEffect(() => {
    api.current?.draw();
  }, [labelOf]);
  useEffect(() => {
    const d = list.find((x) => x.slug === activeSlug);
    if (d) api.current?.rotateTo(d);
    else api.current?.draw();
  }, [activeSlug, list]);

  return <svg id="globe" ref={svgRef} viewBox={`0 0 ${W} ${W}`} role="img" aria-label={ariaLabel} />;
}
