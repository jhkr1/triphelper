window.TripHelperGlobe = (() => {
  // 국가별 [경도, 위도], ISO 숫자 코드(지도 강조용)
  const GEO = {
    "한국": [[126.98, 37.57], 410], "일본": [[139.69, 35.69], 392], "프랑스": [[2.35, 46.8], 250],
    "스페인": [[-3.7, 40.42], 724], "미국": [[-97, 38.5], 840], "이탈리아": [[12.5, 42.0], 380],
    "터키": [[34.5, 39.2], 792], "멕시코": [[-102, 23.5], 484], "영국": [[-1.8, 52.8], 826],
    "독일": [[10.4, 51.2], 276], "그리스": [[22.5, 39.0], 300], "오스트리아": [[14.5, 47.5], 40],
    "중국": [[104, 35.8], 156], "캐나다": [[-100, 57], 124], "헝가리": [[19.5, 47.2], 348],
    "스위스": [[8.2, 46.8], 756], "네덜란드": [[5.3, 52.2], 528], "포르투갈": [[-8.2, 39.6], 620],
    "필리핀": [[122, 12.8], 608], "베트남": [[106, 16.5], 704], "호주": [[134, -25.5], 36],
    "태국": [[101, 15.2], 764], "대만": [[121, 23.7], 158], "홍콩": [[114.17, 22.32], null],
    "싱가포르": [[103.82, 1.35], null], "말레이시아": [[102, 4.2], 458], "인도네시아": [[113.9, -2.5], 360],
  };

  // 지구본 좌표가 있는 목적지만 추려서 번호를 매김
  function buildList(destinations) {
    return destinations
      .filter((d) => GEO[d.name])
      .map((d, i) => ({ ...d, coord: GEO[d.name][0], iso: GEO[d.name][1], no: i + 1 }));
  }

  function create({ selector, list, getActive, getLabel, onSelect }) {
    const d3 = window.d3;
    const topojson = window.topojson;
    if (!d3 || !topojson) return null;

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = 800, R = 372;
    const svg = d3.select(selector);
    if (svg.empty()) return null;

    const proj = d3.geoOrthographic().scale(R).translate([W / 2, W / 2]).clipAngle(90).rotate([-110, -22]);
    const path = d3.geoPath(proj);
    const defs = svg.append("defs");
    const grad = defs.append("radialGradient").attr("id", "ocean").attr("cx", "35%").attr("cy", "30%").attr("r", "80%");
    grad.append("stop").attr("offset", "0").attr("class", "ocean-stop--1");
    grad.append("stop").attr("offset", ".6").attr("class", "ocean-stop--2");
    grad.append("stop").attr("offset", "1").attr("class", "ocean-stop--3");
    svg.append("path").attr("class", "sphere");
    svg.append("path").attr("class", "grat");
    svg.append("path").attr("class", "land");
    svg.append("path").attr("class", "land land--dest");
    svg.append("path").attr("class", "rim");
    const pinLayer = svg.append("g");
    const graticule = d3.geoGraticule10();
    let land = null;
    let interacted = false;

    const pins = pinLayer.selectAll("g.pin").data(list, (d) => d.name).join("g")
      .attr("class", "pin").attr("tabindex", 0).attr("role", "button")
      .on("click", (_, d) => onSelect(d))
      .on("keydown", (e, d) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(d); } });
    pins.append("circle").attr("class", "pulse").attr("r", 5);
    pins.append("circle").attr("class", "dot").attr("r", 5);
    pins.append("circle").attr("class", "hit").attr("r", 13);
    pins.append("text").attr("x", 12).attr("y", 5);

    function draw() {
      const active = getActive();
      const center = proj.rotate().map((v) => -v);
      svg.select(".sphere").attr("d", path({ type: "Sphere" }));
      svg.select(".grat").attr("d", path(graticule));
      svg.select(".rim").attr("d", path({ type: "Sphere" }));
      if (land) {
        svg.select(".land:not(.land--dest)").attr("d", path(land));
        // 선택한 나라 하나만 강조
        const sel = active && active.iso ? Number(active.iso) : null;
        const feats = sel == null ? [] : land.features.filter((f) => Number(f.id) === sel);
        svg.select(".land--dest").attr("d", path({ type: "FeatureCollection", features: feats }));
      }
      pins.each(function (d) {
        const visible = d3.geoDistance(d.coord, center) < Math.PI / 2 - 0.04;
        const p = proj(d.coord);
        d3.select(this).attr("display", visible ? null : "none").attr("transform", `translate(${p})`);
        d3.select(this).select("text").text(getLabel(d));
      });
      pins.classed("active", (d) => active === d);
      pins.filter(".active").raise();
    }

    function stop() { interacted = true; svg.interrupt(); }

    function rotateTo(coord) {
      const r0 = proj.rotate();
      const r1 = [-coord[0], -coord[1] * 0.85];
      while (r1[0] - r0[0] > 180) r1[0] -= 360;
      while (r1[0] - r0[0] < -180) r1[0] += 360;
      if (reduceMotion) { proj.rotate(r1); draw(); return; }
      const i = d3.interpolate(r0, r1);
      svg.transition().duration(1300).ease(d3.easeCubicInOut).tween("rotate", () => (k) => { proj.rotate(i(k)); draw(); });
    }

    svg.call(d3.drag()
      .on("start", () => { interacted = true; svg.interrupt(); })
      .on("drag", (e) => {
        const r = proj.rotate();
        proj.rotate([r[0] + e.dx * 0.35, Math.max(-65, Math.min(65, r[1] - e.dy * 0.35))]);
        draw();
      }));

    if (!reduceMotion) {
      d3.timer(() => {
        if (interacted) return true; // 사용자가 만지면 자동 회전 중지
        const r = proj.rotate(); proj.rotate([r[0] + 0.12, r[1]]); draw();
      });
    }
    draw();

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => { land = topojson.feature(topo, topo.objects.countries); draw(); })
      .catch(() => { /* 지도 로드 실패 시에도 핀/검색은 동작 */ });

    return { draw, rotateTo, stop };
  }

  return { buildList, create };
})();
