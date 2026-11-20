<div align="center">


# TripHelper

### 해외여행 정보 통합 플랫폼 | Travel Information Hub

**목적지 하나만 고르면, 여행 준비에 필요한 정보와 내 일정까지 한 곳에서**

[![Live](https://img.shields.io/badge/Live-jhkr1.github.io%2Ftriphelper-2563eb?logo=google-chrome&logoColor=white)](https://jhkr1.github.io/triphelper/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## 프로젝트 배경 및 문제 정의

### 스크린샷

<details>
<summary>메인 페이지 (지구본)</summary>
<img src="./docs/screenshots/home.png" alt="메인 페이지 스크린샷" width="800">
</details>
<details>
<summary>나라 정보 페이지 (주요 관광지)</summary>
<img src="./docs/screenshots/destination.png" alt="나라 정보 페이지 스크린샷" width="800">
</details>
<details>
<summary>내 여행 플래너 (지도 동선 · 장소 간 이동)</summary>
<img src="./docs/screenshots/trip.png" alt="내 여행 플래너 스크린샷" width="800">
</details>

<br/>

해외여행을 다녀온 뒤, **정보의 파편화** 문제를 직접 경험했습니다.

> 여행 준비를 위해 환율은 네이버, 날씨는 기상 앱, 현지 매너는 블로그, 회화는 번역기, 비자 정보는 외교부 사이트…
> 평균적으로 **5~7개의 서비스**를 오가며 정보를 수집해야 했고, 이 과정에서 정보의 신뢰도와 최신성도 보장되지 않았습니다.

**TripHelper**는 이 문제를 해결하기 위해 시작했습니다.
여행 준비에 필요한 핵심 정보(환율·날씨·매너·회화·비자 등)를 한 페이지에 모으고,
그 정보를 바탕으로 **날짜별 일정을 지도 위에서 짜는 플래너**까지 연결했습니다.

---

## 수치로 보는 프로젝트

| 지표 | 수치 |
|------|------|
| **지원 국가** | 27개국 (아시아 10, 유럽 12, 아메리카 3, 오세아니아 2) |
| **나라 페이지** | 국가당 최대 10개 섹션 · 빌드 시 27개 페이지를 정적 HTML로 생성 |
| **주요 관광지** | 216곳 (국가당 8곳, 사진·좌표·한국어 설명 포함) |
| **회화 표현** | 16개 언어 · 128개 표현 (발음 + 음성 재생) |
| **지원 언어** | 한국어 / 영어 (홈·나라 페이지. 플래너는 한국어) |
| **환율 추이** | 최근 7일 일별 데이터 병렬 수집 |
| **날씨** | 실시간 + 5일 예보(나라 페이지) / 최대 16일 예보(플래너 날짜별) |
| **연동 외부 서비스** | 모두 무료·API 키 불필요 (환율, 날씨·공기질, 위키백과·위키데이터, OpenStreetMap 검색, 벡터 지도) |
| **서버·DB** | 없음 — 정적 사이트로 배포, 일정은 브라우저에 저장 |

---

## 주요 기능

### 지구본으로 여행지 고르기
- D3 직교 투영 지구본: 드래그로 회전, 핀을 누르면 그 나라로 회전한 뒤 나라 페이지로 이동
- 검색창(한/영 키워드), 인기 여행지 칩

### 나라 정보 페이지 (`/destinations/japan/` 등)
- **주요 관광지**: 사진 카드 + "일정에 담기" 버튼으로 내 여행에 바로 추가
- **실시간 환율 + 계산기 + 7일 추이 차트** (Canvas로 직접 구현)
- **날씨 · 5일 예보 · 공기질** (PM2.5 · UV · AQI)
- 국가 한눈에 보기, 필수 매너 & 팁, 기념품, 마트·약국 추천템, 여행 준비 필수템, 비자 정보
- **필수 회화 + 음성 재생** (Web Speech API, 나라별 언어 코드로 발음)
- 스크롤을 따라오는 목차, 현재 읽는 섹션 표시

### 내 여행 플래너 (`/trip/`)
- **여행 설정**: 나라 · 도시(자유 입력, 실제 도시인지 확인) · 날짜, 날짜 추가/삭제
- **일정표 + 지도**: 일차별 색 번호 마커와 경로, 지명 한국어 표시, 마우스 휠 확대
- **장소 추가**: 이름만 입력하면 위치를 자동으로 찾아 지도에 표시 (후보가 여럿이면 선택, 못 찾으면 지도에서 직접 지정)
- **장소 사이 이동**: 가까우면 도보 시간, 멀면 거리 + 대중교통 길찾기(한국은 카카오맵, 해외는 구글 지도로 연결)
- **근처 추천**: 담은 장소 반경 1km의 유명한 곳을 사진과 도보 거리로 추천
- **날짜별 날씨 예보 · 환율**, 관광지 사진
- **가방별 체크리스트**: 나라별 필수템으로 기본 목록, 비 예보가 있으면 우산 등 제안
- **링크 공유**: 일정 전체를 주소 안에 담아 서버 없이 공유

### 공통
- 라이트/다크 모드(깜빡임 없이 적용), 한/영 전환, 반응형, 선 아이콘(이모지 미사용)

---

## 기술 스택 및 아키텍처

### 사용 기술

| 영역 | 기술 |
|------|------|
| **프레임워크** | Next.js 16 (App Router, 정적 출력 `output: "export"`) |
| **UI** | React 19, TypeScript 5, 전역 CSS(디자인 토큰 + 다크 모드) |
| **지구본** | D3 (geoOrthographic) + world-atlas |
| **지도** | MapLibre GL JS + OpenFreeMap 벡터 타일 |
| **차트** | Canvas API (라이브러리 없이 직접 구현) |
| **음성** | Web Speech API |
| **환율** | @fawazahmed0/currency-api (jsdelivr CDN) |
| **날씨·공기질** | Open-Meteo (Forecast · Air Quality · Geocoding) |
| **장소·도시 검색** | OpenStreetMap Nominatim, 위키백과 |
| **관광지·사진** | 위키백과 · 위키데이터 · 위키미디어 공용 |
| **폰트** | Pretendard |
| **개발 환경** | Docker (`node:26-alpine`) |

### 주요 기술적 의사결정

**① Vanilla JS → Next.js + React + TypeScript 전환**
처음에는 빌드 도구 없는 순수 JS로 시작했지만, 플래너(일정·지도·체크리스트·근처 추천·설정이 서로 연결)를 추가하면서 화면 전체를 다시 그리는 구조의 한계가 드러났습니다.
→ 상태를 컴포넌트 단위로 나누기 위해 React로 전환하고, 나라 정보 페이지의 검색 노출을 지키기 위해 Next.js의 정적 생성을 선택했습니다.

**② 서버 없는 정적 출력**
환율·날씨 등 실시간 데이터는 모두 브라우저에서 공개 API로 받으므로 서버가 필요 없습니다.
→ `output: "export"`로 33개 페이지를 HTML로 미리 만들어 정적 호스팅에 배포합니다. (정적 출력과 함께 쓸 수 없는 Cache Components는 끔)

**③ 좌표 순서 실수를 타입으로 차단**
데이터는 `[위도, 경도]`, 지도 라이브러리(D3·MapLibre)는 `[경도, 위도]`를 써서 순서 실수가 생기기 쉬웠습니다.
→ 좌표를 `{ lat, lng }` 객체로 통일하고, 지도용 변환은 `toLngLatTuple()` 하나로만 하도록 했습니다.

**④ DB 없이 일정 저장·공유**
일정은 브라우저(localStorage)에 자동 저장하고 `useSyncExternalStore`로 React와 연결했습니다. 공유는 일정 전체를 압축해 주소(`#t=…`)에 담아 서버 없이 처리합니다.

**⑤ 비용 0원 지도·검색**
구글 지도 API(유료) 대신 MapLibre + OpenFreeMap(무료 벡터 지도)을 쓰고, 지명 레이어를 `name:ko → name` 순으로 바꿔 한국어 지명을 보여 줍니다.
대중교통 시간처럼 무료로 정확히 계산할 수 없는 정보는 카카오맵·구글 지도 길찾기 링크로 넘깁니다.

**⑥ 관광지 데이터는 "목록은 사람이, 사진·좌표는 자동으로"**
위키백과 위치 검색으로 자동 수집하면 행정구역·사건 문서가 섞였습니다.
→ 대표 관광지 목록은 직접 정하고, 사진·좌표·한국어 이름·설명만 스크립트(`web/scripts/build-attractions.mjs`)로 가져오도록 했습니다.

**⑦ 환율 API 선택 (KRW 지원 여부)**
초기 Frankfurter(ECB 기반)는 KRW를 지원하지 않아 170개 통화를 지원하는 `@fawazahmed0/currency-api`로 교체했습니다. 네이버(하나은행 고시)와 비교해 평균 0.5% 차이로, 참고용 기준 환율임을 화면에 표시합니다.

**⑧ 병렬 요청 + 응답 캐싱**
환율(7일치)·날씨·공기질을 `Promise.all`로 병렬 요청하고, 같은 주소의 재요청은 메모리 캐시에서 바로 돌려줍니다. 관광지 사진과 근처 추천 결과는 브라우저에 저장해 다시 요청하지 않습니다.

---

## 프로젝트 구조

```
triphelper/
├── README.md
├── .github/workflows/pages.yml  # GitHub Pages 배포 (main에 push하면 자동)
├── netlify.toml                 # 예전 Netlify 설정 (사용 안 함, 주석 처리)
├── docs/screenshots/            # README 스크린샷
├── supabase/migrations/         # DB 변경 (RLS · 권한 · RPC)
└── web/                         # Next.js 앱
    ├── public/                  # 로고, ads.txt, 지도 작업 파일
    ├── scripts/
    │   └── build-attractions.mjs   # 주요 관광지 데이터 생성 (위키백과)
    └── src/
        ├── app/                 # 라우트 (App Router)
        │   ├── page.tsx               # 홈 (지구본)
        │   ├── destinations/[slug]/   # 나라 페이지 27개 (정적 생성)
        │   ├── trip/                  # 내 여행 플래너
        │   ├── layout.tsx             # 메타데이터, 테마, 폰트, 애드센스
        │   └── sitemap.ts             # sitemap.xml 자동 생성
        ├── components/
        │   ├── home/            # Globe, HomeStage
        │   ├── destination/     # 환율·날씨·관광지·회화 섹션
        │   ├── trip/            # 플래너 (지도, 일정표, 체크리스트, 설정)
        │   ├── layout/          # 상단 바, 푸터
        │   ├── providers/       # 언어·테마 (useSyncExternalStore)
        │   └── ui/              # 선 아이콘
        ├── data/                # 27개국 정보, 회화, 관광지 (TypeScript 데이터)
        ├── i18n/                # 한/영 문구
        ├── lib/                 # 환율·날씨·장소 검색·일정 모델·저장소
        └── types/               # 데이터 타입
```

---

## 로컬 실행

Node.js 20.9 이상이 필요합니다.

```bash
git clone https://github.com/jhkr1/triphelper.git
cd triphelper/web
npm install
npm run dev        # → http://localhost:3000
```

Docker로 실행하는 경우 (Node.js 설치 없이):

```bash
docker run -it --rm -p 3000:3000 -v "$PWD/web:/app" -w /app node:26-alpine \
  sh -c "npm install && npm run dev -- -H 0.0.0.0"
```

> Windows 폴더를 Docker에 연결하면 파일 변경이 자동 감지되지 않을 수 있습니다. 코드를 고친 뒤 개발 서버를 다시 시작하세요.

### 빌드 · 배포

```bash
cd web
npm run build      # → web/out/ 에 정적 사이트 생성
```

배포는 **GitHub Actions + GitHub Pages**로 합니다 ([`.github/workflows/pages.yml`](./.github/workflows/pages.yml)).
`main`에 push하면 `web/`을 정적 사이트로 빌드해 https://jhkr1.github.io/triphelper/ 에 올립니다 (보통 몇 분 걸립니다).

- 사이트 주소에 `/triphelper`가 붙으므로 빌드할 때 `BASE_PATH`를 넘깁니다 (워크플로가 저장소 이름으로 자동 설정).
- 처음 한 번 저장소 Settings에서 준비합니다.
  - **Pages → Build and deployment → Source**: GitHub Actions
  - **Secrets and variables → Actions → Variables**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_AUTH_PROVIDERS` (예: `kakao`). 모두 브라우저에 공개되는 값이라 Secrets가 아닌 Variables에 넣습니다.
- 개발할 때는 같은 값을 `web/.env.local`에 넣습니다 (커밋하지 않음).

> 예전에는 Netlify로 배포했습니다. [`netlify.toml`](./netlify.toml)은 참고용으로 주석 처리해 두었고, 지금은 쓰지 않습니다.

---

## 지원 국가 (27개)

| | | | |
|---|---|---|---|
| 한국 | 일본 | 프랑스 | 스페인 |
| 미국 | 이탈리아 | 터키 | 멕시코 |
| 영국 | 독일 | 그리스 | 오스트리아 |
| 중국 | 캐나다 | 헝가리 | 스위스 |
| 네덜란드 | 포르투갈 | 필리핀 | 베트남 |
| 호주 | 태국 | 대만 | 홍콩 |
| 싱가포르 | 말레이시아 | 인도네시아 | |

---

## 데이터 출처

- 관광지 사진·설명: [위키백과](https://ko.wikipedia.org) · [위키미디어 공용](https://commons.wikimedia.org) (각 이미지의 라이선스는 위키미디어 공용 문서 참고)
- 지도: © [OpenStreetMap](https://www.openstreetmap.org/copyright) 기여자, [OpenFreeMap](https://openfreemap.org), [OpenMapTiles](https://openmaptiles.org)
- 날씨·공기질: [Open-Meteo](https://open-meteo.com)
- 환율: [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)

---

## 라이선스

MIT License

---

<div align="center">

**© 2025 TripHelper.**
해외여행 정보의 파편화 문제를 해결하기 위해 시작한 프로젝트입니다.

</div>
