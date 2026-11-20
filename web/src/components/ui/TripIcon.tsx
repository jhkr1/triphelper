import type { ReactNode, SVGProps } from "react";

/*
 * TripHelper 전용 아이콘. Icon 컴포넌트가 이 그림을 쓴다 (링크 아이콘만 예외).
 * - 여행 아이콘: 면을 채운 모양 + 뚫린 구멍(evenodd). 장소=동그란 핀, 숙소=둥근 네모+초승달, 메모=접힌 모서리.
 *   색은 currentColor라 그날 색(1일차 파랑, 2일차 초록…)을 그대로 입힌다.
 * - 조작 아이콘: 1.75px 가는 선, 각진 끝. 눈에 덜 띄게 회색으로 쓴다.
 */

const SUN_RAYS = Array.from({ length: 8 }, (_, i) => (
  <rect key={i} x="11" y="1.2" width="2" height="3.6" rx="1" transform={`rotate(${i * 45} 12 12)`} />
));
const SMALL_CLOUD = "M7.6 14.5h9.6a3.3 3.3 0 0 0 .4-6.6A5.4 5.4 0 0 0 7.2 7 3.75 3.75 0 0 0 7.6 14.5Z";

const FILLED = {
  place: <path fillRule="evenodd" d="M12 2C7.6 2 4 5.4 4 9.7 4 15.3 12 22 12 22s8-6.7 8-12.3C20 5.4 16.4 2 12 2Zm0 4.6a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />,
  // 숙소 = 둥근 네모 + 초승달 (그날 밤 묵는 곳)
  stay: <path fillRule="evenodd" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm6.6 3.8a5.5 5.5 0 1 0 3.9 9.4 4.4 4.4 0 0 1-3.9-9.4Z" />,
  memo: (
    <>
      <path fillRule="evenodd" d="M6 3h8v4.5A1.5 1.5 0 0 0 15.5 9H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1.5 9v1.8h9V12Zm0 3.6v1.8h6v-1.8Z" />
      <path d="M15.6 3.4 19.6 7.4H16a.4.4 0 0 1-.4-.4Z" opacity=".5" />
    </>
  ),
  comment: (
    <path
      fillRule="evenodd"
      d="M6 3.5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.3L6.5 21v-3.5H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm2 6.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm4 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm4 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
    />
  ),
  sun: <><circle cx="12" cy="12" r="4.6" />{SUN_RAYS}</>,
  cloud: <path d="M7.5 19.5h10a3.9 3.9 0 0 0 .4-7.8A6.3 6.3 0 0 0 6.4 10.6 4.5 4.5 0 0 0 7.5 19.5Z" />,
  rain: (
    <>
      <path d={SMALL_CLOUD} />
      <rect x="7.5" y="16.5" width="2" height="4.5" rx="1" />
      <rect x="11.5" y="17.5" width="2" height="4.5" rx="1" />
      <rect x="15.5" y="16.5" width="2" height="4.5" rx="1" />
    </>
  ),
  cloudSun: (
    <>
      <circle cx="8.5" cy="8.5" r="4.2" fill="#f59e0b" />
      <path d="M9.6 20.5h8.6a3.6 3.6 0 0 0 .4-7.2 5.6 5.6 0 0 0-10.7-.9 4.1 4.1 0 0 0 1.7 8.1Z" />
    </>
  ),
  fog: (
    <>
      <path d={SMALL_CLOUD} />
      <rect x="4.5" y="16.5" width="15" height="2" rx="1" />
      <rect x="7.5" y="20" width="10" height="2" rx="1" />
    </>
  ),
  storm: (
    <>
      <path d={SMALL_CLOUD} />
      <path d="M12.8 15.6 10 19.8h2.6L11.4 23l4-5h-2.6l1.4-2.4Z" />
    </>
  ),
  moon: <path d="M14.5 3a9 9 0 1 0 6.6 15.1A7.3 7.3 0 0 1 14.5 3Z" />,
  snow: (
    <>
      <path d={SMALL_CLOUD} />
      <circle cx="8.5" cy="18" r="1.4" />
      <circle cx="12.5" cy="20.4" r="1.4" />
      <circle cx="16.5" cy="18" r="1.4" />
    </>
  ),
  grip: <><rect x="8" y="4.5" width="2.6" height="2.6" rx=".6" /><rect x="13.4" y="4.5" width="2.6" height="2.6" rx=".6" /><rect x="8" y="10.7" width="2.6" height="2.6" rx=".6" /><rect x="13.4" y="10.7" width="2.6" height="2.6" rx=".6" /><rect x="8" y="16.9" width="2.6" height="2.6" rx=".6" /><rect x="13.4" y="16.9" width="2.6" height="2.6" rx=".6" /></>,
} satisfies Record<string, ReactNode>;

const STROKED = {
  close: <path d="m6.5 6.5 11 11m0-11-11 11" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  minus: <path d="M5.5 12h13" />,
  trash: <path d="M4.5 7h15M9.5 7V4.5h5V7m-8 0 1 13h9l1-13" />,
  chevronDown: <path d="m7 10 5 5 5-5" />,
  link: <path d="m10 14 4-4m-5.2 1.3-2 2a3 3 0 0 0 4.2 4.2l2-2m2-6 2-2a3 3 0 0 1 4.2 4.2l-2 2" />,
  copy: <path d="M8.5 8.5h11v11h-11Zm-4 7v-11h11" />,
  menu: <path d="M4.5 7h15M4.5 12h15M4.5 17h9" />,
} satisfies Record<string, ReactNode>;

export type TripIconName = keyof typeof FILLED | keyof typeof STROKED;
export const TRIP_ICONS = [...Object.keys(FILLED), ...Object.keys(STROKED)] as TripIconName[];

interface Props extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: TripIconName;
  size?: number | string;
}

export function TripIcon({ name, size = "1em", className, ...rest }: Props) {
  const filled = name in FILLED;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className ? `ticon ${className}` : "ticon"}
      {...(filled
        ? { fill: "currentColor" }
        : { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const })}
      {...rest}
    >
      {filled ? FILLED[name as keyof typeof FILLED] : STROKED[name as keyof typeof STROKED]}
    </svg>
  );
}
