// 게시판 추천 동선 데이터 3 (2026-11 추가: 괌·몽골·체코·아랍에미리트·라오스). 형식은 seed-routes.mjs와 같다.

/** 위키백과 문서에 좌표가 없거나 문서가 없는 곳: OpenStreetMap 검색어 */
export const NEW_OSM = {
  "Guam Premier Outlets": "Guam Premier Outlets, Tamuning",
  "Inarajan Natural Pool": "Inarajan Pool, Guam",
  "Turtle Rock (Terelj)": "Мэлхий хад",
  "State Department Store (Ulaanbaatar)": "State Department Store, Ulaanbaatar",
  "Bogd Khan Palace Museum": "Bogd Khan Palace Museum, Ulaanbaatar",
  "Al Fahidi Historical Neighbourhood": "Al Fahidi Historical Neighbourhood, Dubai",
  "Dubai Desert Conservation Reserve": "Dubai Desert Conservation Reserve",
  "Blue Lagoon (Vang Vieng)": "Blue Lagoon 1, Vang Vieng",
  "Luang Prabang Night Market": "Night Market, Sisavangvong Road, Luang Prabang",
  "Mount Phousi": "Phousi, Luang Prabang",
};

export const NEW_ROUTES = [
  {
    country: "guam", city: "투몬", nights: 3,
    title: "괌 3박 4일 · 투몬 바다와 남부 해안 드라이브",
    summary: "투몬 호텔가에 묵으며 바다와 쇼핑을 즐기고, 하루는 렌터카로 남부 해안을 도는 동선이에요. 첫날은 투몬 해변과 사랑의 절벽, 둘째 날은 북쪽 끝 리티디안과 하갓냐 시내, 셋째 날은 솔레다드 요새와 이나라한 자연 풀장을 거쳐 아웃렛에서 쇼핑해요.",
    tags: ["가족", "커플", "자연", "렌터카"],
    days: [
      [
        ["Antonio B. Won Pat International Airport", "괌 국제공항", "10:00", "공항", ""],
        ["Tumon Bay", "투몬 해변", "13:00", "명소", "2시간 30분", "호텔이 모인 괌 여행의 중심이에요. 물이 얕고 잔잔해 스노클링하기 좋아요."],
        ["Two Lovers Point", "사랑의 절벽", "16:30", "명소", "1시간", "투몬만이 내려다보이는 전망대예요. 해 질 녘 풍경이 아름다워요."],
        ["Micronesia Mall", "마이크로네시아 몰", "18:30", "쇼핑", "2시간"],
      ],
      [
        ["Ritidian Point", "리티디안 포인트", "09:30", "명소", "2시간 30분", "괌 북쪽 끝 야생동물 보호구역의 해변이에요. 여는 요일과 시간이 정해져 있어 미리 확인하세요."],
        ["Guam Museum", "괌 박물관", "13:30", "명소", "1시간", "차모로 문화와 괌의 역사를 볼 수 있어요."],
        ["Plaza de España (Hagåtña)", "스페인 광장", "15:00", "명소", "30분"],
        ["Dulce Nombre de Maria Cathedral Basilica", "하갓냐 대성당", "15:30", "명소", "30분"],
      ],
      [
        ["Fort Nuestra Señora de la Soledad", "솔레다드 요새", "10:00", "명소", "1시간", "남부 우마탁 마을 언덕 위 스페인 시대 요새예요. 남쪽 해안 도로는 경치가 좋아 드라이브 코스로 인기예요."],
        ["Inarajan Natural Pool", "이나라한 자연 풀장", "11:30", "명소", "2시간", "바닷물이 바위에 갇혀 생긴 천연 수영장이에요. 파도가 높은 날은 들어가지 마세요."],
        ["War in the Pacific National Historical Park", "태평양 전쟁 국립역사공원", "15:00", "명소", "1시간"],
        ["Guam Premier Outlets", "괌 프리미어 아웃렛", "17:00", "쇼핑", "2시간"],
      ],
      [
        ["Tumon Bay", "투몬 해변 산책", "09:00", "명소", "1시간 30분"],
        ["Antonio B. Won Pat International Airport", "괌 국제공항", "13:00", "공항", ""],
      ],
    ],
  },
  {
    country: "mongolia", city: "울란바토르", nights: 3,
    title: "몽골 3박 4일 · 울란바토르와 테를지 게르 캠프",
    summary: "처음 몽골에 가는 분을 위한 짧은 동선이에요. 첫날은 울란바토르 시내, 둘째 날은 칭기스칸 기마상을 지나 테를지 국립공원 게르 캠프에서 하룻밤 묵고, 셋째 날 아침 거북바위를 본 뒤 시내로 돌아와요. 초원은 일교차가 크니 겉옷을 챙기세요.",
    tags: ["친구", "자연", "첫 여행"],
    days: [
      [
        ["Chinggis Khaan International Airport", "칭기스칸 국제공항", "10:00", "공항", "", "시내까지 차로 1시간 정도 걸려요. 교통 체증이 심한 시간대는 더 걸려요."],
        ["Sükhbaatar Square", "수흐바타르 광장", "13:00", "명소", "1시간"],
        ["National Museum of Mongolia", "몽골 국립박물관", "14:30", "명소", "1시간 30분"],
        ["Zaisan Memorial", "자이승 전망대", "17:30", "명소", "1시간", "울란바토르 시내가 한눈에 보이는 언덕이에요. 계단이 꽤 많아요."],
      ],
      [
        ["Gandantegchinlen Monastery", "간단 사원", "09:30", "명소", "1시간", "몽골 최대의 불교 사원이에요. 본당의 대형 관음상을 볼 수 있어요."],
        ["Chinggis Khaan Equestrian Statue", "칭기스칸 기마상", "12:30", "명소", "1시간 30분", "울란바토르에서 차로 1시간 30분쯤이에요. 말 머리 부분 전망대에 올라갈 수 있어요."],
        ["Gorkhi-Terelj National Park", "테를지 국립공원", "15:30", "명소", "3시간", "게르 캠프에서 하룻밤 묵는 일정이 일반적이에요. 승마 체험은 캠프에서 예약해요."],
      ],
      [
        ["Turtle Rock (Terelj)", "거북바위", "09:00", "명소", "30분"],
        ["Bogd Khan Palace Museum", "복드칸 궁전 박물관", "15:30", "명소", "1시간"],
        ["State Department Store (Ulaanbaatar)", "국영 백화점", "17:30", "쇼핑", "1시간 30분", "위층에 캐시미어와 기념품 매장이 모여 있어요."],
      ],
      [
        ["Choijin Lama Temple Museum", "초이진 라마 사원 박물관", "10:00", "명소", "1시간"],
        ["Chinggis Khaan International Airport", "칭기스칸 국제공항", "13:00", "공항", ""],
      ],
    ],
  },
  {
    country: "czech-republic", city: "프라하", nights: 3,
    title: "프라하 3박 4일 · 구시가와 프라하성, 체스키크룸로프 당일치기",
    summary: "프라하의 대표 명소를 걸어서 둘러보고 하루는 체스키크룸로프에 다녀오는 동선이에요. 첫날은 구시가 광장과 카를교, 둘째 날은 프라하성과 페트린 전망대, 셋째 날은 버스로 체스키크룸로프 당일치기를 해요.",
    tags: ["커플", "역사·문화", "뚜벅이"],
    days: [
      [
        ["Václav Havel Airport Prague", "바츨라프 하벨 공항", "10:00", "공항", ""],
        ["Old Town Square", "구시가 광장", "13:00", "명소", "1시간"],
        ["Prague astronomical clock", "천문 시계", "14:00", "명소", "30분", "매시 정각에 인형이 움직여요. 사람이 많이 모이니 소지품에 주의하세요."],
        ["Charles Bridge", "카를교", "16:00", "명소", "1시간", "이른 아침이나 저녁에 가면 덜 붐벼요."],
        ["Lennon Wall", "존 레넌 벽", "17:30", "명소", "30분"],
      ],
      [
        ["Prague Castle", "프라하성", "09:00", "명소", "3시간", "성 비투스 대성당과 황금소로는 통합 입장권으로 들어가요. 오전 일찍 가면 덜 붐벼요."],
        ["Golden Lane", "황금소로", "11:30", "명소", "30분"],
        ["Strahov Monastery", "스트라호프 수도원", "13:30", "명소", "1시간", "바로크 양식 도서관이 유명해요."],
        ["Petřín Lookout Tower", "페트린 전망대", "15:30", "명소", "1시간"],
        ["Dancing House", "댄싱 하우스", "18:00", "명소", "30분"],
      ],
      [
        ["Český Krumlov", "체스키크룸로프", "10:30", "명소", "5시간", "프라하에서 버스로 약 3시간이에요. 당일치기라면 아침 일찍 출발하고 돌아오는 표도 미리 예매하세요."],
        ["Český Krumlov Castle", "체스키크룸로프 성", "12:30", "명소", "1시간 30분"],
      ],
      [
        ["Wenceslas Square", "바츨라프 광장", "10:00", "명소", "1시간"],
        ["Municipal House", "시민회관", "11:00", "명소", "30분"],
        ["Václav Havel Airport Prague", "바츨라프 하벨 공항", "14:00", "공항", ""],
      ],
    ],
  },
  {
    country: "united-arab-emirates", city: "두바이", nights: 3,
    title: "두바이 3박 4일 · 올드 두바이부터 아부다비 그랜드 모스크까지",
    summary: "옛 두바이의 시장과 초고층 빌딩, 사막 사파리, 아부다비 당일치기를 함께 담은 동선이에요. 첫날은 알 파히디와 두바이 크릭, 부르즈 할리파 야경, 둘째 날은 아부다비의 모스크와 루브르, 셋째 날은 미래 박물관과 팜 주메이라, 오후 사막 사파리예요.",
    tags: ["커플", "쇼핑", "역사·문화"],
    days: [
      [
        ["Dubai International Airport", "두바이 국제공항", "08:00", "공항", ""],
        ["Al Fahidi Historical Neighbourhood", "알 파히디 역사 지구", "10:00", "명소", "1시간 30분", "바람탑이 있는 옛 두바이 골목이에요."],
        ["Dubai Creek", "두바이 크릭", "12:00", "명소", "1시간", "아브라(전통 수상 택시)를 타고 건너편 시장으로 가요."],
        ["Dubai Gold Souk", "골드 수크", "13:00", "쇼핑", "1시간"],
        ["Burj Khalifa", "부르즈 할리파", "17:00", "명소", "1시간 30분", "전망대는 시간 지정 입장권이라 해 질 녘 시간대는 일찍 매진돼요."],
        ["Dubai Fountain", "두바이 분수", "19:00", "명소", "30분", "저녁에는 30분마다 분수 쇼가 열려요."],
      ],
      [
        ["Sheikh Zayed Grand Mosque", "셰이크 자이드 그랜드 모스크", "10:00", "명소", "2시간", "두바이에서 차로 약 1시간 30분이에요. 팔다리를 가리는 옷을 입어야 하고 여성은 머리도 가려야 해요."],
        ["Louvre Abu Dhabi", "루브르 아부다비", "14:00", "명소", "2시간"],
        ["Qasr Al Watan", "카스르 알 와탄", "17:00", "명소", "1시간 30분"],
      ],
      [
        ["Museum of the Future", "미래 박물관", "10:00", "명소", "1시간 30분", "시간 지정 입장권을 미리 예약하세요."],
        ["Palm Jumeirah", "팜 주메이라", "12:30", "명소", "2시간"],
        ["Dubai Desert Conservation Reserve", "사막 사파리", "15:30", "명소", "4시간", "호텔 픽업이 포함된 투어 상품이 많아요. 듄 배싱(사막 질주)은 멀미가 날 수 있어요."],
      ],
      [
        ["Burj Al Arab", "부르즈 알 아랍", "10:00", "명소", "1시간", "주메이라 공공 해변에서 외관을 보기 좋아요."],
        ["Dubai International Airport", "두바이 국제공항", "15:00", "공항", ""],
      ],
    ],
  },
  {
    country: "laos", city: "루앙프라방", nights: 3,
    title: "라오스 3박 4일 · 비엔티안에서 방비엥, 루앙프라방까지 기차 여행",
    summary: "라오스-중국 철도로 세 도시를 잇는 동선이에요. 첫날은 비엔티안의 탓 루앙과 빠뚜싸이, 둘째 날은 기차로 방비엥에 가서 블루 라군, 셋째 날은 루앙프라방에서 꽝시 폭포와 푸시산 일몰을 봐요. 마지막 날은 새벽 탁밧을 조용히 지켜보고 왕궁 박물관을 둘러봐요.",
    tags: ["친구", "자연", "가성비", "뚜벅이"],
    days: [
      [
        ["Wattay International Airport", "왓타이 국제공항", "10:00", "공항", ""],
        ["Pha That Luang", "탓 루앙", "12:00", "명소", "1시간", "라오스의 상징인 황금 불탑이에요."],
        ["Patuxai", "빠뚜싸이", "14:00", "명소", "1시간"],
        ["Wat Si Saket", "왓 시사켓", "15:30", "명소", "1시간"],
        ["Haw Phra Kaew", "호파깨우", "17:00", "명소", "1시간", "옛 왕실 사원을 박물관으로 쓰는 곳이에요. 해 질 녘에는 근처 메콩강변 산책로를 걸어 보세요."],
      ],
      [
        ["Vientiane railway station", "비엔티안역", "08:30", "교통", "", "방비엥까지 고속 열차로 약 1시간이에요. 표는 여권 정보로 미리 예매하세요."],
        ["Vang Vieng", "방비엥", "10:30", "명소", "3시간", "카약·튜빙·열기구 같은 액티비티는 현지 여행사에서 예약해요."],
        ["Blue Lagoon (Vang Vieng)", "블루 라군", "14:30", "명소", "2시간"],
      ],
      [
        ["Luang Prabang railway station", "루앙프라방역", "10:30", "교통", ""],
        ["Kuang Si Falls", "꽝시 폭포", "13:00", "명소", "3시간", "에메랄드빛 계단식 폭포예요. 수영할 수 있는 구역이 정해져 있어요."],
        ["Mount Phousi", "푸시산", "17:30", "명소", "1시간", "일몰 명소라 해 지기 전에 붐벼요. 계단이 300개가 넘어요."],
        ["Luang Prabang Night Market", "루앙프라방 야시장", "19:00", "쇼핑", "1시간 30분"],
      ],
      [
        ["Wat Xieng Thong", "왓 씨엥통", "08:00", "명소", "1시간", "새벽 탁밧(탁발 행렬)은 멀리서 조용히 보고 플래시는 쓰지 마세요."],
        ["Royal Palace, Luang Prabang", "왕궁 박물관", "10:00", "명소", "1시간 30분", "반바지·민소매 차림으로는 들어갈 수 없어요."],
        ["Luang Prabang International Airport", "루앙프라방 국제공항", "15:00", "공항", ""],
      ],
    ],
  },
];
