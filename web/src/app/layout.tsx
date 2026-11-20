import type { Metadata, Viewport } from "next";
import { AppProviders } from "@/components/providers/AppProviders";
import { OG_IMAGE, og, SITE_URL } from "@/lib/site";
import "./globals.css";
const DESCRIPTION =
  "TripHelper - 29개국 여행 정보와 지도 위 일정 플래너. 필수 매너, 기념품, 현지 마트 추천템, 비자 정보, 필수 회화부터 날짜별 동선 짜기와 공유까지 한 곳에서.";
const OG_DESCRIPTION = "29개국 여행 정보 · 지도 위 날짜별 일정 플래너 · 나라별 여행 동선 게시판";

export const metadata: Metadata = {
  // 끝의 /까지 넣어야 /triphelper 같은 접두사가 상대 주소에 붙는다
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "TripHelper - AI Powered Travel Concierge | 여행 도우미",
    template: "%s | TripHelper",
  },
  description: DESCRIPTION,
  keywords: ["여행 가이드", "여행 준비", "여행 필수템", "여행 회화", "여행 매너", "기념품 추천", "해외 여행", "여행 정보", "여행 체크리스트"],
  authors: [{ name: "TripHelper" }],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  alternates: { canonical: "/" },
  openGraph: og({
    url: "/",
    title: "TripHelper · 여행 정보부터 일정·동선까지 한 곳에서",
    description: OG_DESCRIPTION,
  }),
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  other: { "google-adsense-account": "ca-pub-7884227538941923" },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

// DARK MODE OFF: 저장된 테마를 그리기 전에 적용해 다크 모드 깜빡임을 막던 스크립트 (다크 모드를 켜면 head의 <script>와 함께 되살린다)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TripHelper",
    alternateName: "여행 도우미",
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    applicationCategory: "TravelApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    inLanguage: ["ko"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TripHelper",
    url: `${SITE_URL}/`,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["ko", "en"],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* 인라인 스크립트는 브라우저에서 내용이 비어 보여 hydration 경고가 나므로 suppressHydrationWarning (Next.js 문서 방식) */}
        {/* DARK MODE OFF: <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: themeScript }} /> */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin=""
        />
        {/* 애드센스 스크립트는 지금 광고를 쓰지 않아 뺐다 (사이트 확인용 메타 태그와 ads.txt만 유지).
            다시 쓸 때는 next/script 대신 일반 async 스크립트로 넣는다: data-nscript 속성을 거부함 */}
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
