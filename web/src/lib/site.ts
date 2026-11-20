/*
 * 사이트 주소. GitHub Pages(https://jhkr1.github.io/triphelper/)는 주소 끝에 저장소 이름이 붙어서
 * 모든 경로 앞에 BASE_PATH(/triphelper)가 필요하다. Next의 <Link>·router·메타데이터는 자동으로 붙이고,
 * 직접 만드는 주소(공유 링크, public 파일)만 이 값을 쓴다.
 * 값은 빌드 때 정한다: next.config.ts의 BASE_PATH · SITE_ORIGIN 환경 변수 (로컬 개발은 접두사 없음).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://jhkr1.github.io";
/** 끝에 / 없음. 예: https://jhkr1.github.io/triphelper */
export const SITE_URL = SITE_ORIGIN + BASE_PATH;
/** public/ 폴더 파일 주소 (예: withBase("/maplibre-gl-worker.mjs")) */
export const withBase = (path: string) => BASE_PATH + path;
