/** 위도·경도. 지도 라이브러리에 넘길 때는 반드시 toLngLatTuple()로 변환한다. */
export interface LatLng {
  lat: number;
  lng: number;
}

/** 다국어 필드 대부분은 한국어 기본값 + 선택적 영어(En) 값 구조 */
export interface InfoItem {
  title: string;
  description: string;
}

/** 여행 필수템. 상품 링크가 붙은 항목(설명 없음)은 추천 상품으로 따로 보여 준다. */
export interface EssentialItem {
  title: string;
  description?: string;
  titleEn?: string;
  link?: string;
  iframe?: string;
}

export interface Product {
  title: string;
  titleEn?: string;
  link?: string;
  iframe?: string;
  image?: string;
}

export interface Phrase {
  source: string;
  pronunciation: string;
  pronunciationEn: string;
  meaning: string;
  meaningEn: string;
}

export interface Currency {
  /** ISO 4217 통화 코드 (예: JPY) */
  code: string;
  name: string;
  nameEn: string;
  symbol: string;
}

export interface City {
  /** 영어 이름 (날씨 API 검색에 사용) */
  name: string;
  nameKo: string;
}

export interface CountryProfile {
  capital: string;
  capitalKo: string;
  region: string;
  regionKo: string;
  population: number;
  languages: string[];
  languagesKo: string[];
  drivingSide: "left" | "right";
}

/** 주요 관광지 (src/data/attractions.ts, 위키백과에서 수집) */
export interface Attraction {
  /** 한국어 이름 (한국어 문서가 없으면 영어) */
  name: string;
  nameEn: string;
  /** 사진·출처용 위키백과 문서 ("센소지" 또는 "en:Senso-ji") */
  wiki: string;
  image: string;
  location: LatLng;
  /** 가까운 대표 도시 (한국어) */
  city: string;
  /** 한 줄 설명 (한국어 문서가 있을 때) */
  summary: string;
}

export interface Destination {
  /** 주소용 이름 (예: japan → /destinations/japan) */
  slug: string;
  /** ISO 3166-1 alpha-2 소문자 (예: jp) */
  countryCode: string;
  /** ISO 3166-1 숫자 코드. 지구본에서 나라 영역 강조에 사용. 홍콩·싱가포르는 지도 데이터가 없어 null */
  isoNumeric: number | null;
  /** 지구본 핀 위치 */
  center: LatLng;
  name: string;
  nameEn: string;
  keywords: string[];
  flag: string;
  /** BCP 47 언어 태그 (회화 음성 재생용, 예: ja-JP) */
  languageCode: string;
  summary: string;
  summaryEn: string;
  currency: Currency;
  cities: City[];
  manners: InfoItem[];
  mannersEn?: InfoItem[];
  souvenirs: InfoItem[];
  souvenirsEn?: InfoItem[];
  market: InfoItem[];
  marketEn?: InfoItem[];
  essentials: EssentialItem[];
  essentialsEn?: EssentialItem[];
  visa: InfoItem[];
  visaEn: InfoItem[];
  /** src/data/phrases.ts 의 phraseSets 키 */
  phraseSet: string;
  profile: CountryProfile;
  /**
   * 비자·여행경보·결제처럼 바뀔 수 있는 정보를 마지막으로 확인한 날 (YYYY-MM-DD).
   * 없거나 1년이 지나면 scripts/check-countries.mjs 가 경고한다.
   */
  reviewedAt?: string;
}
