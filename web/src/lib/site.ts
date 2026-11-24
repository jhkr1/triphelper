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
/** 개인정보 보호책임자·문의 이메일 (개인정보처리방침에 공개됨). 비어 있으면 '준비 중'으로 보인다 */
export const CONTACT_EMAIL = "";
/** public/ 폴더 파일 주소 (예: withBase("/maplibre-gl-worker.mjs")) */
export const withBase = (path: string) => BASE_PATH + path;

/**
 * 카카오톡·메신저 링크 미리보기(og:image). 1200×630 (public/og-image.png)
 * Next는 페이지에서 openGraph를 정하면 레이아웃의 openGraph를 통째로 바꾸므로, 페이지마다 og()로 이미지까지 넣는다.
 * 주소는 metadataBase(SITE_URL/) 기준 상대 경로라 /triphelper가 자동으로 붙는다.
 */
export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "TripHelper - 여행 정보부터 일정·동선까지 한 곳에서" };

export const og = (o: { title: string; description: string; url: string }) => ({
  type: "website" as const,
  siteName: "TripHelper",
  locale: "ko_KR",
  images: [OG_IMAGE],
  ...o,
});
