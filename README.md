<div align="center">

# ✈️ TripHelper

### 해외여행 정보 통합 플랫폼 | Travel Information Hub

**목적지 하나만 검색하면, 여행에 필요한 모든 정보를 한 곳에서**

[![Live](https://img.shields.io/badge/Live-triphelper.kr-2563eb?logo=google-chrome&logoColor=white)](https://triphelper.kr)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 🧭 프로젝트 배경 및 문제 정의

해외여행을 다녀온 뒤, **정보의 파편화** 문제를 직접 경험했습니다.

> 여행 준비를 위해 환율은 네이버, 날씨는 기상 앱, 현지 매너는 블로그, 회화는 번역기, 비자 정보는 외교부 사이트…
> 평균적으로 **5~7개의 서비스**를 오가며 정보를 수집해야 했고, 이 과정에서 정보의 신뢰도와 최신성도 보장되지 않았습니다.

**TripHelper**는 이 문제를 해결하기 위해 시작했습니다.  
여행 준비에 필요한 핵심 정보(환율·날씨·매너·회화·비자 등)를 **단일 검색창** 하나로 접근할 수 있도록 설계했습니다.

---

## 📊 수치로 보는 프로젝트

| 지표 | 수치 |
|------|------|
| **지원 국가** | 27개국 (아시아 10, 유럽 12, 아메리카 3, 오세아니아 2) |
| **카테고리 수** | 국가당 최대 9개 정보 카테고리 |
| **정보 항목 수** | 국가당 평균 40+ 개 정보 항목 |
| **지원 언어** | 한국어 / 영어 (전체 UI + 콘텐츠 완전 이중화) |
| **연동 외부 API** | 3개 (환율, 날씨+대기질, 국가 프로필) |
| **환율 추이 데이터** | 과거 7일치 일별 데이터 병렬 수집 |
| **날씨 예보** | 5일치 일별 예보 + 실시간 기온/습도/풍속 |
| **회화 표현 수** | 국가당 평균 8~10개 (발음 + TTS 재생 지원) |
| **JS 모듈 수** | 8개 모듈로 관심사 분리 (data / core / services / ui) |
| **빌드 도구 의존성** | 0개 (순수 Vanilla JS, 빌드 없이 즉시 배포 가능) |

---

## ✨ 주요 기능

### 💱 실시간 환율 + 계산기 + 추이 차트
- `@fawazahmed0/currency-api` (170개 통화 지원, 무료)를 사용해 실시간 환율 조회
- KRW를 지원하지 않는 Frankfurter(ECB) 대신 별도 API를 선택하는 **의도적 기술 결정**
- 과거 7일치 환율 데이터를 **병렬 요청(Promise.all)** 으로 수집 → Canvas API로 직접 시각화
- 금액 입력 시 실시간 환산 (정수 단위로 표시, UX 최적화)

### 🌤️ 실시간 날씨 + 대기질 + 5일 예보
- Open-Meteo API (무료, 무제한) 사용
- Geocoding API → 도시 좌표 자동 조회 → 날씨/대기질 병렬 요청
- PM2.5 · UV 지수 · AQI 정보 제공

### 🌍 27개국 여행 정보 큐레이션
- 필수 매너 & 팁 / 기념품 추천 / 마트·약국 추천템 / 여행 필수템 / 비자 정보
- 쿠팡 파트너스 제휴 상품 카드 (iframe + 링크 지원)

### 💬 필수 회화 + TTS 발음 재생
- Web Speech API를 활용한 브라우저 내장 TTS 음성 재생
- 국가별 언어 코드(`ja-JP`, `fr-FR` 등)로 정확한 발음 재생

### 🌐 완전한 한/영 이중화
- UI 텍스트 전체 + 콘텐츠(매너, 기념품, 회화 등) 모두 한국어/영어 별도 작성
- 언어 전환 시 현재 목적지 유지하며 즉시 리렌더링

---

## 🛠️ 기술 스택 및 아키텍처

### 사용 기술

| 영역 | 기술 |
|------|------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES2020+) |
| **차트** | Canvas API (라이브러리 없이 직접 구현) |
| **TTS** | Web Speech API |
| **환율 API** | @fawazahmed0/currency-api (jsdelivr CDN, 무료) |
| **날씨 API** | Open-Meteo (무료, API 키 불필요) |
| **대기질 API** | Open-Meteo Air Quality (무료) |
| **국가 정보 API** | RestCountries v3 (무료) |
| **서버** | Express.js (정적 파일 서빙) |
| **폰트** | Noto Sans KR, Plus Jakarta Sans, Manrope (Google Fonts) |

### 모듈 구조

```
js/
├── app.js                # 앱 진입점, 이벤트 바인딩, 상태 관리
├── core/
│   └── utils.js          # 공통 유틸 (날짜 포맷, 이스케이프, 날씨 코드 매핑 등)
├── data/
│   ├── destinations.js   # 27개국 여행 정보 데이터
│   ├── phrases.js        # 국가별 필수 회화 데이터
│   ├── products.js       # 공통 추천 상품 데이터
│   └── translations.js   # 한/영 UI 번역 텍스트
├── services/
│   └── api.js            # 외부 API 호출 + 캐싱 (Map 기반 in-memory cache)
└── ui/
    ├── render.js         # DOM 렌더링 함수 모음
    └── chart.js          # Canvas 기반 환율 추이 차트 렌더러
```

### 주요 기술적 의사결정

**① 프레임워크 미사용 (Vanilla JS)**  
React·Vue 등 프레임워크 없이 순수 JavaScript만 사용.  
→ 번들러·빌드 도구 없이 정적 파일 그대로 배포 가능, CDN/Netlify에서 즉시 운영.  
→ 외부 의존성 0개 → 보안 취약점과 버전 충돌 리스크 없음.

**② API 선택 (KRW 지원 여부) **  
초기 Frankfurter(ECB 기반) 사용 시 KRW가 지원 통화 목록에 없어 전체 환율 기능이 fallback으로 빠지는 문제 발생.  
→ 170개 통화를 지원하는 `@fawazahmed0/currency-api`로 교체. 운영 안정성 확보.

**③ 병렬 API 요청 (Promise.all)**  
환율(7일치) + 날씨 + 대기질을 순차 요청 시 최대 ~3,000ms의 지연 발생.  
→ `Promise.all`로 병렬화하여 체감 로딩 시간 단축.

**④ In-memory 응답 캐싱**  
동일 URL 재요청 시 API 호출 없이 캐시에서 즉시 반환 (Map 기반).  
→ 언어 전환·테마 전환 시 불필요한 API 재호출 방지.

---

## 📁 프로젝트 구조

```
TripHelper/
├── index.html              # 메인 HTML (Template 태그 기반 동적 렌더링)
├── styles.css              # 전체 스타일 (다크 모드, 반응형 포함)
├── server.js               # Express 정적 서버
├── js/                     # JavaScript 모듈 (위 참고)
├── triphelper_image.png    # 로고 이미지
├── ads.txt                 # Google AdSense 인증
└── _redirects              # Netlify SPA 리디렉션 설정
```

---

## 🚀 로컬 실행

```bash
git clone https://github.com/jhkr1/triphelper.git
cd triphelper

# Node.js 서버로 실행
npm start
# → http://localhost:3000

# 또는 Python으로 실행
python -m http.server 8000
# → http://localhost:8000
```

> `index.html`을 브라우저로 직접 열어도 동작합니다. (빌드 과정 없음)

---

## 🌍 지원 국가 (27개)

| | | | |
|---|---|---|---|
| 🇰🇷 한국 | 🇯🇵 일본 | 🇫🇷 프랑스 | 🇪🇸 스페인 |
| 🇺🇸 미국 | 🇮🇹 이탈리아 | 🇹🇷 터키 | 🇲🇽 멕시코 |
| 🇬🇧 영국 | 🇩🇪 독일 | 🇬🇷 그리스 | 🇦🇹 오스트리아 |
| 🇨🇳 중국 | 🇨🇦 캐나다 | 🇭🇺 헝가리 | 🇨🇭 스위스 |
| 🇳🇱 네덜란드 | 🇵🇹 포르투갈 | 🇵🇭 필리핀 | 🇻🇳 베트남 |
| 🇦🇺 호주 | 🇹🇭 태국 | 🇹🇼 대만 | 🇭🇰 홍콩 |
| 🇸🇬 싱가포르 | 🇲🇾 말레이시아 | 🇮🇩 인도네시아 | |

---

## 📝 라이선스

MIT License

---

<div align="center">

**© 2025 TripHelper.**  
해외여행 정보의 파편화 문제를 해결하기 위해 시작한 프로젝트입니다. ✈️

</div>
