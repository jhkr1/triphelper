"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { GeoJSONSource, LngLatBounds as LngLatBoundsType, MapLibreMap, Marker as MarkerType } from "maplibre-gl";
import type { LatLng } from "@/types/destination";
import type { TripDay } from "@/types/trip";
import { toLngLatTuple } from "@/lib/geo";
import { getPhoto } from "@/lib/places";

export const DAY_COLORS = ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#0ea5e9"];
export const dayColor = (i: number) => DAY_COLORS[i % DAY_COLORS.length];

type MapLib = typeof import("maplibre-gl");

interface Props {
  days: TripDay[];
  /** "all" 또는 일차 번호 */
  mapDay: "all" | number;
  onMapDayChange: (d: "all" | number) => void;
  center: LatLng;
  /** 지정하면 "지도에서 위치 지정" 모드: 다음 클릭 위치를 넘긴다 */
  onPick?: (p: LatLng) => void;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * 일정 지도: MapLibre(벡터 지도) + OpenFreeMap 타일 — 무료, API 키 불필요.
 * 지명은 한국어 → 없으면 현지 이름, 일차별 색 번호 마커와 점선 경로.
 */
export function TripMap({ days, mapDay, onMapDayChange, center, onPick }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ lib: MapLib; map: MapLibreMap } | null>(null);
  const markersRef = useRef<MarkerType[]>([]);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const pickRef = useRef(onPick);
  useLayoutEffect(() => { pickRef.current = onPick; });
  const initialCenter = useRef(center);

  // 지도 만들기 (브라우저에서만, 라이브러리는 필요할 때 불러옴)
  useEffect(() => {
    let cancelled = false;
    import("maplibre-gl").then((lib) => {
      if (cancelled || !boxRef.current) return;
      // 번들 안에서는 worker 위치를 자동으로 찾지 못하므로, public/에 복사해 둔 파일을 지정 (package.json의 copy:maplibre-worker)
      lib.setWorkerUrl("/maplibre-gl-worker.mjs");
      const map = new lib.Map({
        container: boxRef.current,
        style: "https://tiles.openfreemap.org/styles/positron",
        center: toLngLatTuple(initialCenter.current),
        zoom: 10,
        scrollZoom: true, // 마우스 휠로 확대/축소
      });
      map.addControl(new lib.NavigationControl({ showCompass: false }), "bottom-right");
      map.on("load", () => {
        // 지명 레이어를 "한국어 이름 → 없으면 현지 이름" 순으로 (도로 번호 같은 레이어는 그대로)
        for (const layer of map.getStyle().layers) {
          const tf = layer.type === "symbol" ? layer.layout?.["text-field"] : undefined;
          if (tf && JSON.stringify(tf).includes("name")) {
            map.setLayoutProperty(layer.id, "text-field", ["coalesce", ["get", "name:ko"], ["get", "name"]]);
          }
        }
        map.addSource("route", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
        map.addLayer({
          id: "route", type: "line", source: "route",
          paint: { "line-color": ["get", "color"], "line-width": 3, "line-opacity": 0.75, "line-dasharray": [2, 2] },
        });
        if (!cancelled) setReady(true);
      });
      map.on("click", (e) => {
        const pick = pickRef.current;
        if (pick) pick({ lat: e.lngLat.lat, lng: e.lngLat.lng });
      });
      mapRef.current = { lib, map };
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => {
      cancelled = true;
      mapRef.current?.map.remove();
      mapRef.current = null;
    };
  }, []);

  // 마커·경로 다시 그리기
  useEffect(() => {
    const m = mapRef.current;
    if (!ready || !m) return;
    const { lib, map } = m;
    markersRef.current.forEach((mk) => mk.remove());
    markersRef.current = [];
    const bounds: LngLatBoundsType = new lib.LngLatBounds();
    const lines: GeoJSON.Feature<GeoJSON.LineString, { color: string }>[] = [];

    days.forEach((day, di) => {
      if (mapDay !== "all" && mapDay !== di) return;
      const located = day.places.filter((p) => p.location);
      located.forEach((p) => {
        const n = day.places.indexOf(p) + 1;
        const el = document.createElement("div");
        el.className = "mk";
        el.style.background = dayColor(di);
        el.textContent = String(n);
        el.title = p.name;
        const info = `<b>${di + 1}일차 · ${n}. ${esc(p.name)}</b><br>${esc(p.time)}${p.duration ? ` · ${esc(p.duration)}` : ""}`;
        const popup = new lib.Popup({ offset: 16 }).setHTML(`<div class="pop">${info}</div>`);
        const photoKey = p.wiki;
        if (photoKey || p.image) {
          popup.on("open", async () => {
            const src = p.image ?? (photoKey ? (await getPhoto(photoKey))?.src : undefined);
            if (src) popup.setHTML(`<div class="pop"><img src="${esc(src)}" alt="">${info}</div>`);
          });
        }
        markersRef.current.push(new lib.Marker({ element: el }).setLngLat(toLngLatTuple(p.location!)).setPopup(popup).addTo(map));
        bounds.extend(toLngLatTuple(p.location!));
      });
      if (located.length > 1) {
        lines.push({
          type: "Feature", properties: { color: dayColor(di) },
          geometry: { type: "LineString", coordinates: located.map((p) => toLngLatTuple(p.location!)) },
        });
      }
    });
    map.getSource<GeoJSONSource>("route")?.setData({ type: "FeatureCollection", features: lines });
    if (!bounds.isEmpty()) map.fitBounds(bounds, { padding: 70, maxZoom: 14, duration: 600 });
  }, [ready, days, mapDay]);

  // 여행지(도시)가 바뀌면 그 위치로
  useEffect(() => {
    const m = mapRef.current;
    if (!ready || !m) return;
    const hasPlaces = days.some((d) => d.places.some((p) => p.location));
    if (!hasPlaces) m.map.flyTo({ center: toLngLatTuple(center), zoom: 11 });
    // days는 의도적으로 제외: 장소가 바뀔 때는 위 effect가 경계에 맞춘다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, center.lat, center.lng]);

  // 위치 지정 모드에서는 십자 커서
  useEffect(() => {
    const canvas = mapRef.current?.map.getCanvas();
    if (canvas) canvas.style.cursor = onPick ? "crosshair" : "";
  }, [onPick, ready]);

  return (
    <div className="card mapcard">
      <div className="mapchips" aria-label="지도 표시 일차">
        <button type="button" aria-pressed={mapDay === "all"} onClick={() => onMapDayChange("all")}>전체</button>
        {days.map((_, i) => (
          <button key={i} type="button" aria-pressed={mapDay === i} onClick={() => onMapDayChange(i)}>
            <i style={{ background: dayColor(i) }} />{i + 1}일차
          </button>
        ))}
      </div>
      <div className="trip-map" ref={boxRef} role="region" aria-label="일정 지도">
        {failed && <p style={{ padding: 24, color: "var(--mute)" }}>지도를 불러오지 못했습니다.</p>}
      </div>
    </div>
  );
}
