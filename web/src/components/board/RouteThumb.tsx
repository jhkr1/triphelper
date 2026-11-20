import { dayColor } from "@/components/trip/TripMap";

type Pt = [number, number];

/**
 * 동선 그림: 지도 타일 없이 좌표만 선으로 이은 작은 그림 (가볍고 외부 요청 없음).
 * preview = 날짜별 [위도, 경도] 목록. mini는 사진 위에 겹쳐 쓰는 작은 판.
 */
export function RouteThumb({ preview, label, mini }: { preview: Pt[][]; label: string; mini?: boolean }) {
  const W = mini ? 120 : 320, H = mini ? 76 : 168, PAD = mini ? 12 : 26;
  const pts = preview.flat();
  const bg = mini
    ? <rect width={W} height={H} rx="10" className="rthumb__mini" />
    : <><rect width={W} height={H} className="rthumb__bg" /><rect width={W} height={H} fill="url(#rthumb-grid)" /></>;
  const defs = !mini && (
    <defs>
      <pattern id="rthumb-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" className="rthumb__dot" />
      </pattern>
    </defs>
  );

  // 장소가 한 곳이거나 모두 같은 자리면 선을 그릴 수 없으니 핀 하나로
  const distinct = new Set(pts.map((p) => p.join(","))).size;
  if (distinct < 2) {
    return (
      <svg className={mini ? "rthumb rthumb--mini" : "rthumb"} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} ${pts.length ? "장소 1곳" : "(위치 정보 없음)"}`}>
        {defs}{bg}
        <g transform={`translate(${W / 2 - 14} ${H / 2 - 20})`}>
          <path d="M14 0C6.3 0 0 6.1 0 13.6 0 23.8 14 36 14 36s14-12.2 14-22.4C28 6.1 21.7 0 14 0Z" fill={pts.length ? dayColor(0) : "none"} className={pts.length ? undefined : "rthumb__empty"} />
          <circle cx="14" cy="13.5" r="5" fill="#fff" opacity={pts.length ? 1 : 0} />
        </g>
      </svg>
    );
  }

  // 위도에 따라 경도 간격이 줄어드는 것을 보정한 단순 투영
  const lat0 = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const k = Math.cos((lat0 * Math.PI) / 180);
  const xs = pts.map((p) => p[1] * k), ys = pts.map((p) => -p[0]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min((W - PAD * 2) / Math.max(maxX - minX, 1e-6), (H - PAD * 2) / Math.max(maxY - minY, 1e-6));
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const at = (p: Pt) => [W / 2 + (p[1] * k - cx) * scale, H / 2 + (-p[0] - cy) * scale] as const;
  const r = mini ? 3 : 5;

  return (
    <svg className={mini ? "rthumb rthumb--mini" : "rthumb"} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} 동선 미리보기`}>
      {defs}{bg}
      {preview.map((day, i) => day.length > 1 && (
        <polyline key={`l${i}`} points={day.map((p) => at(p).join(",")).join(" ")} fill="none" stroke={dayColor(i)} strokeWidth={mini ? 2 : 3} strokeLinejoin="round" strokeLinecap="round" opacity=".9" />
      ))}
      {preview.map((day, i) => day.map((p, j) => {
        const [x, y] = at(p);
        return <circle key={`p${i}-${j}`} cx={x} cy={y} r={r} fill={dayColor(i)} stroke="#fff" strokeWidth={mini ? 1.2 : 2} />;
      }))}
    </svg>
  );
}

/** 게시판 카드 머리: 대표 사진(있으면) + 작은 동선 그림, 사진이 없으면 동선 그림만 */
export function PostThumb({ covers, preview, label }: { covers: string[]; preview: Pt[][]; label: string }) {
  if (!covers.length) return <div className="pthumb"><RouteThumb preview={preview} label={label} /></div>;
  const hasRoute = new Set(preview.flat().map((p) => p.join(","))).size >= 2;
  return (
    <div className={`pthumb pthumb--${covers.length}`}>
      {covers.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element -- 위키미디어 외부 이미지
        <img key={src} src={src} alt={i === 0 ? `${label} 대표 사진` : ""} loading="lazy" referrerPolicy="no-referrer" />
      ))}
      {hasRoute && <RouteThumb preview={preview} label={label} mini />}
    </div>
  );
}
