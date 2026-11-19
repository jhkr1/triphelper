import { dayColor } from "@/components/trip/TripMap";

/**
 * 목록 카드의 동선 그림: 지도 타일 없이 좌표만 선으로 이은 작은 그림 (가볍고 외부 요청 없음).
 * preview = 날짜별 [위도, 경도] 목록
 */
export function RouteThumb({ preview, label }: { preview: [number, number][][]; label: string }) {
  const W = 320, H = 168, PAD = 22;
  const pts = preview.flat();
  if (!pts.length) {
    return (
      <svg className="rthumb" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} (위치 정보 없음)`}>
        <rect width={W} height={H} rx="14" className="rthumb__bg" />
        <path d={`M${W / 2 - 18} ${H / 2 - 6}c0-10 8-18 18-18s18 8 18 18c0 14-18 30-18 30s-18-16-18-30Z`} className="rthumb__empty" />
      </svg>
    );
  }
  // 위도에 따라 경도 간격이 줄어드는 것을 보정한 단순 투영
  const lat0 = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const k = Math.cos((lat0 * Math.PI) / 180);
  const xs = pts.map((p) => p[1] * k), ys = pts.map((p) => -p[0]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const span = Math.max(maxX - minX, maxY - minY, 0.004);
  const scale = Math.min((W - PAD * 2) / Math.max(maxX - minX, span * 0.3), (H - PAD * 2) / Math.max(maxY - minY, span * 0.3));
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const at = (p: [number, number]) => [W / 2 + (p[1] * k - cx) * scale, H / 2 + (-p[0] - cy) * scale] as const;

  return (
    <svg className="rthumb" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} 동선 미리보기`}>
      <rect width={W} height={H} rx="14" className="rthumb__bg" />
      {preview.map((day, i) => day.length > 1 && (
        <polyline key={`l${i}`} points={day.map((p) => at(p).join(",")).join(" ")} fill="none" stroke={dayColor(i)} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" strokeDasharray="5 4" opacity=".85" />
      ))}
      {preview.map((day, i) => day.map((p, j) => {
        const [x, y] = at(p);
        return <circle key={`p${i}-${j}`} cx={x} cy={y} r="4.5" fill={dayColor(i)} stroke="#fff" strokeWidth="1.5" />;
      }))}
    </svg>
  );
}
