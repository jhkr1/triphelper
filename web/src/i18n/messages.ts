import { legacyTranslations } from "@/data/legacy-translations";

export type Lang = "ko" | "en";
export const LANGS: Lang[] = ["ko", "en"];

/** 기존 사이트 문구 + 새 화면 문구. 문구 키는 두 언어에 모두 있어야 한다. */
const ko = {
  ...legacyTranslations.ko,
  "nav.home": "홈",
  "nav.trip": "내 여행",
  "hero.badge": "AI POWERED TRAVEL CONCIERGE",
  "hero.title": "어디로 떠나시나요?",
  "hero.sub": "지구본을 돌려 핀을 누르거나, 목적지를 검색하세요.",
  "globe.hint": "드래그로 회전 · 두 손가락으로 확대 · 핀을 눌러 선택",
  "globe.zoomIn": "지구본 확대",
  "globe.zoomOut": "지구본 축소",
  "globe.label": "여행지를 선택할 수 있는 지구본",
  "chips.label": "인기 여행지",
  "chips.all": "전체 여행지",
  "chips.matches": "검색어와 맞는 여행지",
  "chips.more": "+{count}개국 더 보기",
  "chips.less": "접기",
  "continent.Asia": "아시아",
  "continent.Europe": "유럽",
  "continent.Americas": "아메리카",
  "continent.Oceania": "오세아니아",
  "sections.exchange": "환율 & 계산기",
  "sections.weather": "날씨 · 예보 · 공기질",
  "ui.insight": "꼭 알아둘 팁",
  "ui.back": "지구본으로 돌아가기",
  "ui.listen": "발음 듣기",
  "ui.visa": "비자",
  "ui.destination": "DESTINATION",
  "quickInfo.rateTime": "기준일:",
  "quickInfo.rateNote": "참고용 기준 환율입니다. 은행·환전소의 실제 환율과 다를 수 있습니다.",
  "quickInfo.rateFallback": "환율 서버에 연결하지 못해 대략적인 값을 보여 드립니다. 실제 환율과 차이가 클 수 있습니다.",
  "quickInfo.leftDriving": "좌측통행",
  "quickInfo.rightDriving": "우측통행",
  "airQuality.summary": "대표 도시 기준 최신 시간대 예보로 PM2.5와 UV 지수를 보여 줍니다.",
  "trip.planHere": "{country} 여행 일정 짜기",
  "sections.attractions": "주요 관광지",
  "attractions.add": "일정에 담기",
  "attractions.added": "담음",
  "attractions.addedToast": "{name}을(를) 여행지 바구니에 담았습니다. 내 여행에서 원하는 날로 끌어다 놓으세요.",
  "attractions.viewTrip": "내 여행에서 보기",
  "attractions.newTripConfirm": "{country} 여행으로 새 일정을 만들어 담을까요? 지금 일정은 지워집니다.",
  "attractions.credit": "사진·설명: 위키백과 (위키미디어 공용)",
} as const;

const en: Record<keyof typeof ko, string> = {
  ...legacyTranslations.en,
  "nav.home": "Home",
  "nav.trip": "My trip",
  "hero.badge": "AI POWERED TRAVEL CONCIERGE",
  "hero.title": "Where to next?",
  "hero.sub": "Spin the globe and tap a pin, or search for a destination.",
  "globe.hint": "Drag to rotate · pinch to zoom · tap a pin",
  "globe.zoomIn": "Zoom in on the globe",
  "globe.zoomOut": "Zoom out of the globe",
  "globe.label": "Globe for choosing a destination",
  "chips.label": "Popular destinations",
  "chips.all": "All destinations",
  "chips.matches": "Matching destinations",
  "chips.more": "+{count} more",
  "chips.less": "Show less",
  "continent.Asia": "Asia",
  "continent.Europe": "Europe",
  "continent.Americas": "Americas",
  "continent.Oceania": "Oceania",
  "sections.exchange": "Exchange Rate & Calculator",
  "sections.weather": "Weather, Forecast & Air",
  "ui.insight": "Know before you go",
  "ui.back": "Back to the globe",
  "ui.listen": "Listen to pronunciation",
  "ui.visa": "Visa",
  "ui.destination": "DESTINATION",
  "quickInfo.rateTime": "As of:",
  "quickInfo.rateNote": "Reference rate only. Actual bank or exchange-counter rates may differ.",
  "quickInfo.rateFallback": "Couldn't reach the rate server, so this is an approximate value and may differ noticeably.",
  "quickInfo.leftDriving": "Left",
  "quickInfo.rightDriving": "Right",
  "airQuality.summary": "PM2.5 and UV are based on the latest hourly forecast for the lead city.",
  "trip.planHere": "Plan a trip to {country}",
  "sections.attractions": "Top Attractions",
  "attractions.add": "Add to my trip",
  "attractions.added": "Saved",
  "attractions.addedToast": "Saved {name}. Drag it onto a day in My trip.",
  "attractions.viewTrip": "Open my trip",
  "attractions.newTripConfirm": "Start a new {country} trip and add this place? Your current trip will be replaced.",
  "attractions.credit": "Photos & descriptions: Wikipedia (Wikimedia Commons)",
};

export const messages = { ko, en } as const;
export type MessageKey = keyof typeof ko;

/** "{query}" 같은 자리표시를 채워 문구를 돌려준다. */
export function translate(lang: Lang, key: MessageKey, params: Record<string, string | number> = {}): string {
  let text: string = messages[lang][key] ?? messages.ko[key] ?? key;
  for (const [k, v] of Object.entries(params)) text = text.replace(`{${k}}`, String(v));
  return text;
}
