# TripHelper - AI Powered Travel Concierge

여행 준비를 위한 맞춤형 가이드: 필수 매너, 기념품, 현지 추천템, 필수 회화까지 한 곳에서 확인하세요.

## 🚀 배포 방법

### 방법 1: Netlify (가장 간단)

1. [Netlify](https://www.netlify.com/)에 가입
2. "Add new site" → "Deploy manually" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭
4. 배포 완료! 자동으로 URL 생성

**또는 Git 연동:**
1. GitHub에 프로젝트 업로드
2. Netlify에서 "Import from Git" 선택
3. 저장소 연결 후 자동 배포

### 방법 2: Vercel

1. [Vercel](https://vercel.com/)에 가입
2. "Add New Project" 클릭
3. GitHub 저장소 연결 또는 폴더 업로드
4. 자동 배포 완료

### 방법 3: GitHub Pages

1. GitHub에 저장소 생성
2. Settings → Pages
3. Source를 "main" 브랜치로 설정
4. 저장 후 `https://[username].github.io/[repository-name]` 접속

### 방법 4: Cloudflare Pages

1. [Cloudflare Pages](https://pages.cloudflare.com/) 접속
2. "Create a project" 클릭
3. Git 저장소 연결 또는 직접 업로드
4. 배포 완료

## 📁 프로젝트 구조

```
TripHelper/
├── index.html          # 메인 HTML 파일
├── script.js           # JavaScript 로직
├── styles.css          # 스타일시트
├── Gemini_Generated_Image_vosqf0vosqf0vosq-Photoroom.png  # 로고 이미지
└── README.md          # 이 파일
```

## ✨ 기능

- 🌍 16개 국가 여행 정보 제공
- 💱 실시간 환율 정보 및 계산기
- 🌤️ 실시간 날씨 정보
- 🌙 다크 모드 지원
- 🌐 한국어/영어 다국어 지원
- 📱 반응형 디자인

## 🔧 기술 스택

- 순수 HTML/CSS/JavaScript
- Open-Meteo API (날씨)
- ExchangeRate-API (환율)

## 📝 배포 전 체크리스트

- [x] 코드 최적화 완료
- [x] 보안 검토 완료 (XSS 방지)
- [x] SEO 메타 태그 설정
- [x] 반응형 디자인 확인
- [ ] 도메인 설정 (선택사항)
- [ ] Google Analytics 추가 (선택사항)

## 🌐 커스텀 도메인 설정

배포 후 도메인을 연결하려면:
1. 도메인 구매 (예: Namecheap, GoDaddy)
2. 배포 플랫폼에서 도메인 설정
3. DNS 레코드 추가
4. SSL 인증서 자동 발급 (대부분 플랫폼에서 자동)

## 📧 문의

문제가 발생하거나 질문이 있으시면 이슈를 등록해주세요.

