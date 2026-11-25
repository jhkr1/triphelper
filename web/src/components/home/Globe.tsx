"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as d3 from "d3";
// selection.transition()/interrupt()는 이 모듈이 불러와질 때 덧붙는다. 번들러가 빼지 않도록 명시적으로 불러온다.
import "d3-transition";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { DestinationSummary } from "@/lib/destinations";
import { toLngLatTuple } from "@/lib/geo";
import { Icon } from "@/components/ui/Icon";

interface GlobeProps {
  list: DestinationSummary[];
  activeSlug: string | null;
  labelOf: (d: DestinationSummary) => string;
  onSelect: (d: DestinationSummary) => void;
  ariaLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  /** 확대 배율이 바뀔 때마다 (제스처 중 매 프레임). 1 = 기본 크기 */
  onZoom?: (k: number) => void;
}

const W = 800;
const R = 372;
const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

/**
 * D3 직교 투영 지구본. 드래그로 회전, 지원하는 나라 땅(작은 곳은 점) 클릭 또는 Tab·Enter로 선택.
 * D3가 SVG를 직접 다루므로 React는 <svg> 자리만 만들고, 그리기는 effect 안에서 한다.
 */
export function Globe({ list, activeSlug, labelOf, onSelect, ariaLabel, zoomInLabel, zoomOutLabel, onZoom }: GlobeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  // 최신 props를 effect 안의 D3 콜백에서 읽기 위한 ref
  const latest = useRef({ activeSlug, labelOf, onSelect, onZoom });
  useLayoutEffect(() => {
    latest.current = { activeSlug, labelOf, onSelect, onZoom };
  });
  const api = useRef<{ draw: () => void; rotateTo: (d: DestinationSummary) => void; zoomBy: (factor: number) => void } | null>(null);
  // 버튼 활성/비활성용 현재 배율 (제스처가 끝날 때만 갱신해서 매 프레임 렌더링을 피한다)
  const [zoomK, setZoomK] = useState(MIN_ZOOM);
  const onZoomEnd = useRef(setZoomK);

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
    // 나라 땅: 지원하는 나라(.on)를 밝게 칠하고, 그 땅을 누르면 고른다 (나라마다 점을 찍으면 어지러워서)
    const countryLayer = svg.append("g").attr("class", "countries");
    svg.append("path").attr("class", "rim");
    const graticule = d3.geoGraticule10();
    let countries: d3.Selection<SVGPathElement, Feature<Geometry, { name: string }>, SVGGElement, unknown> | null = null;
    let interacted = false;
    // 마우스를 올렸거나 키보드 초점이 있는 나라 (땅과 이름표를 함께 강조)
    let hoverSlug: string | null = null;
    const byIso = new Map(list.filter((d) => d.isoNumeric != null).map((d) => [d.isoNumeric!, d]));
    const setHover = (slug: string | null) => { hoverSlug = slug; draw(); };

    // 나라마다 이름표 자리 하나. 키보드로 고르는 단추 역할도 한다.
    // 지도에 모양이 있는 나라(.pin--area)는 점을 그리지 않고(CSS), 모양이 없는 작은 곳만 작은 점을 그린다
    const pins = svg.append("g").selectAll<SVGGElement, DestinationSummary>("g.pin").data(list, (d) => d.slug).join("g")
      .attr("class", (d) => (d.isoNumeric == null ? "pin" : "pin pin--area")).attr("tabindex", 0).attr("role", "button")
      .on("click", (_, d) => latest.current.onSelect(d))
      .on("keydown", (e: KeyboardEvent, d) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); latest.current.onSelect(d); }
      })
      .on("focus", (_, d) => setHover(d.slug))
      .on("blur", () => setHover(null));
    pins.append("circle").attr("class", "ring").attr("r", 8);
    pins.append("circle").attr("class", "dot").attr("r", 4);
    pins.append("circle").attr("class", "hit").attr("r", 13);
    // 땅 위 이름은 나라 가운데에, 작은 점의 이름은 점 오른쪽에
    pins.append("text").attr("text-anchor", (d) => (d.isoNumeric == null ? "start" : "middle")).attr("x", (d) => (d.isoNumeric == null ? 10 : 0)).attr("y", 5);

    function draw() {
      const { activeSlug: activeNow, labelOf: label } = latest.current;
      const active = list.find((d) => d.slug === activeNow) ?? null;
      const rotation = proj.rotate();
      const center: [number, number] = [-rotation[0], -rotation[1]];
      svg.select(".sphere").attr("d", path({ type: "Sphere" }));
      svg.select(".grat").attr("d", path(graticule));
      svg.select(".rim").attr("d", path({ type: "Sphere" }));
      if (countries) {
        countries.attr("d", path)
          .classed("sel", (f) => Number(f.id) === active?.isoNumeric)
          .classed("hover", (f) => hoverSlug != null && byIso.get(Number(f.id))?.slug === hoverSlug);
        // 고른 나라의 테두리가 이웃 나라에 가리지 않게 맨 위로
        countries.filter(".sel").raise();
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
      pins.classed("active", (d) => d.slug === activeNow).classed("hover", (d) => d.slug === hoverSlug);
      pins.filter(".active").raise();
    }

    // 나라를 골라 확대를 되돌리는 중에는 zoom "start"가 회전 연출을 끊지 않게 한다
    let resetting = false;

    function rotateTo(d: DestinationSummary) {
      interacted = true;
      svg.interrupt();
      // 확대한 채로 골랐으면 원래 크기로 되돌려, 지구본 전체와 날아가는 비행기가 함께 보이게 한다
      if (d3.zoomTransform(el!).k > MIN_ZOOM + 0.001) {
        resetting = true;
        if (reduceMotion) {
          zoom.transform(svg, d3.zoomIdentity);
          resetting = false;
        } else {
          zoom.transform(
            svg.transition("zoom-reset").duration(700).ease(d3.easeCubicInOut).on("end interrupt", () => { resetting = false; }),
            d3.zoomIdentity,
          );
        }
      }
      const r0 = proj.rotate();
      const r1: [number, number, number] = [-d.center.lng, -d.center.lat * 0.85, 0];
      while (r1[0] - r0[0] > 180) r1[0] -= 360;
      while (r1[0] - r0[0] < -180) r1[0] += 360;
      if (reduceMotion) { proj.rotate(r1); draw(); return; }
      const i = d3.interpolate(r0, r1);
      svg.transition().duration(1300).ease(d3.easeCubicInOut).tween("rotate", () => (k) => { proj.rotate(i(k)); draw(); });
    }

    // 한 손가락(마우스) 드래그 = 회전, 두 손가락 핀치(트랙패드는 Ctrl+휠) = 확대.
    // d3.zoom이 둘 다 처리하고, 확대 배율은 투영 크기(scale)에 반영한다.
    let last = d3.zoomIdentity;
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([MIN_ZOOM, MAX_ZOOM])
      // 일반 휠은 페이지 스크롤에 양보하고, Ctrl+휠(트랙패드 핀치)만 확대로 쓴다
      .filter((e: MouseEvent | WheelEvent | TouchEvent) => (e.type === "wheel" ? (e as WheelEvent).ctrlKey : !(e as MouseEvent).button))
      .on("start", () => {
        if (resetting) return;
        interacted = true;
        svg.interrupt();
      })
      .on("zoom", (e: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        const t = e.transform;
        if (t.k === last.k) {
          // 배율이 그대로면 이동 = 회전. 확대할수록 덜 돌아가게 해서 손가락을 따라오는 느낌을 유지한다
          const s = 0.35 / t.k;
          const r = proj.rotate();
          proj.rotate([r[0] + (t.x - last.x) * s, Math.max(-65, Math.min(65, r[1] - (t.y - last.y) * s))]);
        }
        last = t;
        latest.current.onZoom?.(t.k);
        proj.scale(R * t.k);
        draw();
      })
      .on("end", (e: d3.D3ZoomEvent<SVGSVGElement, unknown>) => onZoomEnd.current(e.transform.k));
    svg.call(zoom).on("dblclick.zoom", null);

    function zoomBy(factor: number) {
      interacted = true;
      zoom.scaleBy(svg.transition("zoom-btn").duration(reduceMotion ? 0 : 250), factor);
    }

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
      const land = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string }>;
      countries = countryLayer.selectAll<SVGPathElement, Feature<Geometry, { name: string }>>("path").data(land.features).join("path")
        .attr("class", (f) => (byIso.has(Number(f.id)) ? "land on" : "land"))
        .on("click", (_, f) => { const d = byIso.get(Number(f.id)); if (d) latest.current.onSelect(d); })
        .on("mouseenter", (_, f) => { const d = byIso.get(Number(f.id)); if (d) setHover(d.slug); })
        .on("mouseleave", () => setHover(null));
      // 땅을 누를 수 있게 됐으니 나라 이름표의 점은 감춘다 (못 불러오면 점으로 남아 계속 고를 수 있다)
      svg.classed("has-land", true);
      draw();
    }).catch(() => { /* 지도 경계 없이도 점과 검색은 동작 */ });

    draw();
    api.current = { draw, rotateTo, zoomBy };
    return () => {
      cancelled = true;
      timer?.stop();
      svg.interrupt();
      svg.interrupt("zoom-btn");
      svg.interrupt("zoom-reset");
      svg.on(".zoom", null);
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

  return (
    <div className="globe-box">
      <svg id="globe" ref={svgRef} viewBox={`0 0 ${W} ${W}`} role="img" aria-label={ariaLabel} />
      <div className="globe-zoom">
        <button type="button" aria-label={zoomInLabel} disabled={zoomK >= MAX_ZOOM - 0.01} onClick={() => api.current?.zoomBy(1.6)}>
          <Icon name="plus" />
        </button>
        <button type="button" aria-label={zoomOutLabel} disabled={zoomK <= MIN_ZOOM + 0.01} onClick={() => api.current?.zoomBy(1 / 1.6)}>
          <Icon name="minus" />
        </button>
      </div>
    </div>
  );
}
