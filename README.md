<div align="center">

# ✈️ TripHelper

### AI Powered Travel Concierge | 여행 도우미

**당신의 다음 여정을 위한 맞춤형 인사이트와 준비 리스트**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 🌟 소개

**TripHelper**는 여행 준비를 위한 올인원 가이드입니다. 목적지를 검색하면 필수 매너부터 회화까지 한 곳에서 확인할 수 있어요.

### 주요 기능

- 🌍 **27개 국가 정보 제공** - 한국, 일본, 프랑스, 스페인, 미국, 이탈리아, 터키, 멕시코, 영국, 독일, 그리스, 오스트리아, 중국, 캐나다, 헝가리, 스위스, 네덜란드, 포르투갈, 필리핀, 베트남, 호주, 태국, 대만, 홍콩, 싱가포르, 말레이시아, 인도네시아
- 💱 **실시간 환율 정보** - 최신 환율 조회 및 환율 계산기
- 📈 **환율 추이 차트** - 과거 환율 데이터를 시각화하여 제공
- 🌤️ **실시간 날씨 정보** - 목적지의 현재 날씨와 상세 정보
- 📝 **필수 매너 & 팁** - 현지 문화와 예절 가이드
- 🛍️ **기념품 추천** - 꼭 사야 할 기념품 리스트
- 🏪 **현지 마트/약국 추천템** - 실용적인 현지 상품 정보
- 🎒 **여행 준비 필수템** - 전기 어댑터, 교통카드, 인터넷 등
- 💬 **필수 회화** - 발음과 뜻이 포함된 실용 회화 표현
- 🌙 **다크 모드** - 눈의 피로를 줄이는 다크 테마 지원
- 🌐 **다국어 지원** - 한국어/영어 자유 전환
- 📱 **반응형 디자인** - 모바일, 태블릿, 데스크톱 모든 기기 지원

---

## 🚀 빠른 시작

### 로컬에서 실행하기

1. 저장소 클론 또는 다운로드
```bash
git clone https://github.com/your-username/TripHelper.git
cd TripHelper
```

2. 웹 서버 실행
   - Python 3: `python -m http.server 8000`
   - Node.js: `npm start`
   - 또는 브라우저에서 `index.html` 직접 열기

3. 브라우저에서 실행한 서버 주소로 접속
   - Python 3: `http://localhost:8000`
   - Node.js: `http://localhost:3000`

### 배포하기

이 프로젝트는 정적 프론트엔드 중심 사이트라서 다양한 플랫폼에 쉽게 배포할 수 있습니다.

#### Netlify (추천)

1. [Netlify](https://www.netlify.com/)에 가입
2. "Add new site" → "Deploy manually" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭
4. 배포 완료! 자동으로 URL 생성

**또는 Git 연동:**
1. GitHub에 프로젝트 업로드
2. Netlify에서 "Import from Git" 선택
3. 저장소 연결 후 자동 배포

#### GitHub Pages

1. GitHub에 저장소 생성
2. Settings → Pages
3. Source를 "main" 브랜치로 설정
4. 저장 후 `https://[username].github.io/[repository-name]` 접속

#### Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com/) 접속
2. "Create a project" 클릭
3. Git 저장소 연결 또는 직접 업로드
4. 배포 완료

---

## 📁 프로젝트 구조

```
TripHelper/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── server.js           # 정적 파일 서빙용 Express 서버
├── js/
│   ├── app.js          # 앱 진입점
│   ├── core/           # 공통 유틸리티
│   ├── data/           # 번역/회화/국가 데이터
│   ├── services/       # 무료 API 연동
│   └── ui/             # 렌더링 및 차트
├── triphelper_image.png  # 로고 이미지
├── README.md          # 이 파일
├── ADSENSE_GUIDE.md   # Google AdSense 설정 가이드
└── FREE_API_FEATURES.md # 추가 기능 아이디어 메모
```

---

## 🛠️ 기술 스택

- **Frontend**: 순수 HTML5, CSS3, JavaScript (Vanilla JS)
- **API**:
  - [Open-Meteo API](https://open-meteo.com/) - 날씨 정보
  - [ExchangeRate-API](https://www.exchangerate-api.com/) - 환율 정보
- **Server**: Express (정적 파일 서빙)
- **폰트**: Noto Sans KR, Plus Jakarta Sans, Manrope
- **아이콘**: 이모지 기반

---

## ✨ 사용 방법

1. **목적지 검색**: 검색창에 여행하고 싶은 국가를 입력하세요
   - 예: "한국", "일본", "프랑스", "Korea", "Japan", "France"

2. **정보 확인**: 검색 결과에서 다음 정보를 확인할 수 있습니다:
   - 💱 실시간 환율 및 환율 계산기
- 🌤️ 현재 날씨 정보
- 🌫️ 공기질 정보
- 📅 5일 예보
- 🧭 국가 기본 정보(수도, 인구, 지역, 언어, 운전 방향)
- 📝 필수 매너 & 팁
   - 🛍️ 꼭 사야 할 기념품
   - 🏪 현지 마트/약국 추천템
   - 🎒 여행 준비 필수템
   - 💬 필수 회화 (발음 포함)

3. **다크 모드**: 우측 상단의 🌙 버튼으로 다크 모드 전환

4. **언어 전환**: 우측 상단의 🌐 버튼으로 한국어/영어 전환

---

## 🌍 지원 국가 (27개)

| 국가 | 국가 | 국가 | 국가 |
|------|------|------|------|
| 🇰🇷 한국 | 🇯🇵 일본 | 🇫🇷 프랑스 | 🇪🇸 스페인 |
| 🇺🇸 미국 | 🇮🇹 이탈리아 | 🇹🇷 터키 | 🇲🇽 멕시코 |
| 🇬🇧 영국 | 🇩🇪 독일 | 🇬🇷 그리스 | 🇦🇹 오스트리아 |
| 🇨🇳 중국 | 🇨🇦 캐나다 | 🇭🇺 헝가리 | 🇨🇭 스위스 |
| 🇳🇱 네덜란드 | 🇵🇹 포르투갈 | 🇵🇭 필리핀 | 🇻🇳 베트남 |
| 🇦🇺 호주 | 🇹🇭 태국 | 🇹🇼 대만 | 🇭🇰 홍콩 |
| 🇸🇬 싱가포르 | 🇲🇾 말레이시아 | 🇮🇩 인도네시아 | |

---

## 🎨 주요 특징

### 실시간 데이터
- 환율 정보는 실시간으로 업데이트됩니다
- 날씨 정보는 Open-Meteo API를 통해 최신 데이터를 제공합니다

### 사용자 경험
- 깔끔하고 직관적인 인터페이스
- 빠른 검색 및 로딩 속도
- 모바일 친화적 디자인

### 접근성
- 키보드 네비게이션 지원
- 스크린 리더 호환
- 시맨틱 HTML 구조

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

---

## 🤝 기여하기

버그 리포트, 기능 제안, Pull Request를 환영합니다!

1. 이 저장소를 Fork하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 열어주세요

---

## 📧 문의

문제가 발생하거나 질문이 있으면 이슈를 등록해주세요.

---

<div align="center">

**© 2025 TripHelper. 여행의 모든 순간을 함께합니다.** ✈️

Made with ❤️ for travelers around the world

</div>
