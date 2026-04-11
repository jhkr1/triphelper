# 무료 API를 활용한 추가 기능 제안서

## 현재 상태
- ✅ 환율 계산기 UI (구현됨, API 미연결)
- ✅ 날씨 정보 UI (구현됨, API 미연결)
- ✅ 현지 시간 표시 UI (구현됨, API 미연결)

---

## 1. 날씨 정보 API

### 추천 API: OpenWeatherMap (무료 티어)
- **무료 한도**: 1,000 calls/day, 60 calls/minute
- **URL**: `https://api.openweathermap.org/data/2.5/weather`
- **필요한 정보**: API Key (무료 가입)

### 추가 가능한 기능
- ✅ 실시간 날씨 정보 (온도, 습도, 풍속)
- ✅ 날씨 아이콘 표시
- ✅ 5일 날씨 예보
- ✅ 시간대별 날씨 정보
- ✅ 자외선 지수 (UV Index)
- ✅ 체감 온도
- ✅ 강수 확률

### 구현 예시
```javascript
// 현재 날씨
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`)

// 5일 예보
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=kr`)
```

### 대안 API
- **WeatherAPI.com**: 1,000,000 calls/month 무료
- **Open-Meteo**: 완전 무료, 제한 없음 (비상업적 용도)

---

## 2. 환율 정보 API

### 추천 API: ExchangeRate-API (무료 티어)
- **무료 한도**: 1,500 requests/month
- **URL**: `https://api.exchangerate-api.com/v4/latest/{currency}`
- **특징**: API Key 불필요

### 추가 가능한 기능
- ✅ 실시간 환율 정보
- ✅ 환율 변동 추이 (차트)
- ✅ 과거 환율 데이터
- ✅ 여러 통화 동시 비교
- ✅ 환율 알림 기능 (사용자 설정)

### 구현 예시
```javascript
// 실시간 환율
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(res => res.json())
  .then(data => {
    const krwRate = data.rates.KRW;
  });
```

### 대안 API
- **Fixer.io**: 100 requests/month 무료
- **CurrencyAPI**: 300 requests/month 무료
- **Frankfurter.app**: 완전 무료, 제한 없음

---

## 3. 현지 시간 정보 API

### 추천 API: WorldTimeAPI (완전 무료)
- **무료 한도**: 제한 없음
- **URL**: `http://worldtimeapi.org/api/timezone/{timezone}`
- **특징**: API Key 불필요

### 추가 가능한 기능
- ✅ 정확한 현지 시간 표시
- ✅ 시간대 정보
- ✅ 일출/일몰 시간
- ✅ 공휴일 정보
- ✅ 서머타임(DST) 자동 처리

### 구현 예시
```javascript
// 서울 시간
fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul')
  .then(res => res.json())
  .then(data => {
    const localTime = new Date(data.datetime);
  });
```

### 대안 API
- **TimeZoneDB**: 1 request/second 무료
- **IPGeolocation Timezone API**: 1,000 requests/month 무료

---

## 4. 공항 정보 API

### 추천 API: AviationStack (무료 티어)
- **무료 한도**: 1,000 requests/month
- **URL**: `https://api.aviationstack.com/v1/airports`
- **필요한 정보**: API Key

### 추가 가능한 기능
- ✅ 주요 공항 정보
- ✅ 공항 코드 검색
- ✅ 공항 위치 정보
- ✅ 항공편 지연 정보
- ✅ 공항 시설 정보

### 구현 예시
```javascript
fetch(`https://api.aviationstack.com/v1/airports?access_key=${API_KEY}&search=${city}`)
```

### 대안 API
- **Amadeus API**: 개발자 무료 티어 제공
- **OpenSky Network**: 완전 무료 (실시간 항공편 정보)

---

## 5. 여행 안전 정보 API

### 추천 API: Travel Advisory API (정부 공개 데이터)
- **무료 한도**: 제한 없음
- **URL**: 각국 정부 API (예: 미국 국무부)
- **특징**: 공개 데이터

### 추가 가능한 기능
- ✅ 여행 경보 레벨 (1-4단계)
- ✅ 안전 주의사항
- ✅ 현지 뉴스 요약
- ✅ 긴급 연락처 정보
- ✅ 현지 법률 정보

### 구현 예시
```javascript
// 미국 국무부 여행 경보 (공개 데이터)
fetch('https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.json')
```

---

## 6. 통화 변환 계산기 고도화

### 현재: 기본 환율 계산
### 추가 가능한 기능
- ✅ 여러 통화 동시 계산
- ✅ 환율 변동 알림
- ✅ 환전 수수료 계산
- ✅ 최적 환전 시점 추천
- ✅ 환율 히스토리 차트

---

## 7. 지도 및 위치 정보

### 추천 API: Leaflet (오픈소스) + OpenStreetMap
- **무료 한도**: 제한 없음
- **특징**: 완전 무료, 오픈소스

### 추가 가능한 기능
- ✅ 목적지 지도 표시
- ✅ 주요 관광지 마커
- ✅ 공항/호텔 위치
- ✅ 대중교통 노선
- ✅ 거리 계산

### 구현 예시
```javascript
// Leaflet 라이브러리 사용
const map = L.map('map').setView([lat, lng], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
```

### 대안
- **Mapbox**: 50,000 map loads/month 무료
- **Google Maps**: $200 무료 크레딧/월

---

## 8. 번역 API (회화 섹션 강화)

### 추천 API: LibreTranslate (오픈소스)
- **무료 한도**: 제한 없음 (자체 호스팅)
- **URL**: 공개 인스턴스 사용 가능
- **특징**: 완전 무료

### 추가 가능한 기능
- ✅ 실시간 번역
- ✅ 발음 가이드 강화
- ✅ 문맥별 번역
- ✅ 오프라인 번역 (PWA)

### 구현 예시
```javascript
fetch('https://libretranslate.com/translate', {
  method: 'POST',
  body: JSON.stringify({
    q: text,
    source: 'ko',
    target: 'en'
  })
})
```

### 대안 API
- **MyMemory Translation API**: 10,000 words/day 무료
- **Google Cloud Translation**: $500 무료 크레딧

---

## 9. 여행 일정 추천

### 추천 API: Foursquare Places API (무료 티어)
- **무료 한도**: 50,000 requests/day
- **URL**: `https://api.foursquare.com/v3/places/search`
- **필요한 정보**: API Key

### 추가 가능한 기능
- ✅ 인기 관광지 추천
- ✅ 맛집 추천
- ✅ 쇼핑몰 정보
- ✅ 현지 이벤트 정보
- ✅ 리뷰 및 평점

### 구현 예시
```javascript
fetch('https://api.foursquare.com/v3/places/search?query=restaurant&ll=37.5665,126.9780', {
  headers: {
    'Authorization': API_KEY
  }
})
```

### 대안 API
- **TripAdvisor Content API**: 제한적 무료 티어
- **Yelp Fusion API**: 5,000 requests/day 무료

---

## 10. 비자 정보 자동 업데이트

### 추천: 정부 공개 데이터 + 웹 스크래핑
- **무료 한도**: 제한 없음
- **특징**: 공개 데이터 활용

### 추가 가능한 기능
- ✅ 비자 요구사항 자동 확인
- ✅ 비자 신청 링크
- ✅ 비자 처리 시간 정보
- ✅ 비자 수수료 정보
- ✅ 비자 상태 추적

---

## 11. 실시간 뉴스 및 이벤트

### 추천 API: NewsAPI (무료 티어)
- **무료 한도**: 100 requests/day
- **URL**: `https://newsapi.org/v2/everything`
- **필요한 정보**: API Key

### 추가 가능한 기능
- ✅ 목적지 관련 뉴스
- ✅ 현지 이벤트 정보
- ✅ 축제 및 행사 일정
- ✅ 교통 상황
- ✅ 특별 공지사항

### 구현 예시
```javascript
fetch(`https://newsapi.org/v2/everything?q=${country}&apiKey=${API_KEY}`)
```

---

## 12. 전기 플러그 타입 확인

### 추천: 정적 데이터 + API (선택적)
- **현재**: 수동 입력 데이터
- **개선**: API로 자동 확인

### 추가 가능한 기능
- ✅ 국가별 플러그 타입 자동 표시
- ✅ 전압/주파수 정보
- ✅ 어댑터 구매 링크

---

## 우선순위 추천

### 🔥 높은 우선순위 (즉시 구현 가능)
1. **날씨 정보 API** (OpenWeatherMap) - UI 이미 있음
2. **환율 정보 API** (ExchangeRate-API) - UI 이미 있음
3. **현지 시간 API** (WorldTimeAPI) - UI 이미 있음

### ⭐ 중간 우선순위 (사용자 경험 향상)
4. **지도 정보** (Leaflet + OpenStreetMap)
5. **번역 기능 강화** (LibreTranslate)
6. **여행 안전 정보** (정부 공개 데이터)

### 💡 낮은 우선순위 (추가 기능)
7. **공항 정보** (AviationStack)
8. **관광지 추천** (Foursquare)
9. **뉴스 및 이벤트** (NewsAPI)

---

## 구현 시 주의사항

### 1. API 키 관리
- ✅ 환경 변수 사용 (프로덕션)
- ✅ 클라이언트 사이드에서는 제한적 노출
- ✅ CORS 문제 해결 (프록시 서버 고려)

### 2. 성능 최적화
- ✅ API 응답 캐싱 (localStorage)
- ✅ 요청 제한 관리
- ✅ 에러 핸들링

### 3. 비용 관리
- ✅ 무료 티어 한도 모니터링
- ✅ 요청 빈도 제한
- ✅ 사용자별 요청 제한

### 4. 대안 계획
- ✅ API 장애 시 폴백 데이터
- ✅ 여러 API 제공자 준비
- ✅ 오프라인 모드 지원

---

## 예상 개발 시간

- 날씨/환율/시간 API 연결: **2-3시간**
- 지도 통합: **4-6시간**
- 번역 기능: **3-4시간**
- 안전 정보: **2-3시간**
- 전체 통합 및 테스트: **4-6시간**

**총 예상 시간**: 15-22시간

---

## 결론

현재 UI가 이미 구현되어 있는 **날씨, 환율, 현지 시간** 기능부터 API를 연결하는 것이 가장 효율적입니다. 이 세 가지만 연결해도 사용자 경험이 크게 향상됩니다.

추가로 **지도 기능**과 **번역 강화**를 구현하면 TripHelper가 더욱 강력한 여행 도우미가 될 것입니다.

