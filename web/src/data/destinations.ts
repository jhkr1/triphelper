// 기존 사이트 데이터(js/data)에서 변환함. 이제 이 파일을 직접 수정한다.
import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    "slug": "south-korea",
    "countryCode": "kr",
    "isoNumeric": 410,
    "center": {
      "lat": 37.57,
      "lng": 126.98
    },
    "name": "한국",
    "nameEn": "South Korea",
    "keywords": [
      "한국",
      "대한민국",
      "korea",
      "south korea"
    ],
    "flag": "🇰🇷",
    "languageCode": "ko-KR",
    "summary": "현대적인 도시와 전통이 공존하는 한국 여행을 위한 핵심 가이드.",
    "summaryEn": "Essential guide for traveling to South Korea, where modern cities and tradition coexist.",
    "currency": {
      "code": "KRW",
      "name": "대한민국 원",
      "nameEn": "South Korean Won",
      "symbol": "₩"
    },
    "manners": [
      {
        "title": "대중교통 예의",
        "description": "지하철과 버스 등 대중교통에서는 통화나 큰 소리를 자제하는 것이 좋습니다. 노약자석은 반드시 비워두시고, 출퇴근 시간대에는 가방을 앞으로 메는 것이 안전합니다."
      },
      {
        "title": "식당 문화",
        "description": "한국에서는 팁 문화가 일반적이지 않습니다. 계산은 카운터에서 선불로 하거나, 자리에서 '계산해주세요'라고 호출하면 됩니다. 물은 대부분 무료로 제공됩니다."
      },
      {
        "title": "인사 예절",
        "description": "어른께는 가볍게 고개 숙여 인사하는 것이 예의입니다. 두 손으로 물건을 주고받는 것이 정중하며, 특히 명함이나 돈을 받을 때는 반드시 두 손을 사용하는 것이 좋습니다."
      },
      {
        "title": "쓰레기 처리",
        "description": "한국은 공공 쓰레기통이 많지 않으므로 작은 휴지나 봉투를 챙겨 개인 쓰레기를 수거하는 것이 좋습니다. 재활용품은 분리배출이 엄격하게 시행되므로 주의가 필요합니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "사찰, 군부대, 박물관 등 일부 구역에서는 사진 촬영이 제한될 수 있습니다. 방문 전 안내 표지판을 확인하고, 촬영이 금지된 곳에서는 삼가시기 바랍니다."
      },
      {
        "title": "화장실 이용",
        "description": "한국의 공중화장실은 대부분 무료이며, 지하철역, 공원, 대형마트 등에서 쉽게 찾을 수 있습니다. 휴지는 휴지통에 버리며, 변기 옆에 있는 휴지통을 사용하시기 바랍니다. 일부 화장실에는 휴지가 없을 수 있으니 작은 휴지나 물티슈를 챙기는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "전통 공예품",
        "description": "한지로 만든 부채, 매듭 장신구, 전통 문양 소품 등이 인기 기념품입니다. 인사동이나 명동의 전통 공예품 가게에서 구매할 수 있으며, 한국의 전통 문화를 담은 선물로 좋습니다."
      },
      {
        "title": "K-뷰티 제품",
        "description": "한국 스킨케어 브랜드의 마스크팩, 앰플 세트, 선크림 등이 대표적인 기념품입니다. 올리브영, 롭스 등 드러그스토어에서 다양한 브랜드와 가격대의 제품을 만나볼 수 있습니다."
      },
      {
        "title": "지역 특산품",
        "description": "전주 비빔밥 소스, 보성 녹차, 제주 감귤 초콜릿, 부산 어묵 등 지역별 특색 있는 식품들이 좋은 선물이 됩니다. 공항 면세점이나 지역 특산품 매장에서 구매할 수 있습니다."
      },
      {
        "title": "한류 굿즈",
        "description": "아이돌 앨범, 응원봉, 키링, 포토카드 등 K-pop 관련 굿즈는 전 세계적으로 인기가 높습니다. 명동, 홍대 등에 있는 굿즈샵에서 구매할 수 있으며, 다양한 그룹의 상품을 만나볼 수 있습니다."
      },
      {
        "title": "면세점 인기 상품",
        "description": "프리미엄 김 세트, 홍삼 캔디, 전통주 등이 면세점에서 인기입니다. 특히 인천공항 면세점은 세계 최대 규모로 다양한 상품을 구매할 수 있으며, 출국 전 미리 주문하여 픽업할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "편의점 추천템",
        "description": "CU, GS25, 세븐일레븐 등 편의점에서 즉석 삼각김밥, 컵라면, 바나나맛 우유, 떡볶이, 순대 등 다양한 간식을 저렴하게 구매할 수 있습니다. 24시간 운영되며 전국 어디서나 쉽게 찾을 수 있습니다."
      },
      {
        "title": "대형마트 상품",
        "description": "이마트, 홈플러스 등 대형마트의 PB(자체 브랜드) 제품인 김치, 라면, 즉석떡볶이 소스, 간장, 된장 등이 가성비 좋은 선물용 상품입니다. 대량 구매 시 더욱 저렴합니다."
      },
      {
        "title": "약국 필수템",
        "description": "동전파스(근육통 완화), 후시딘(구강염 치료), 정관장 홍삼정 스틱 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품이며, 약사에게 상담을 받을 수 있습니다."
      },
      {
        "title": "드러그스토어 뷰티템",
        "description": "올리브영, 롭스 등 드러그스토어에서 의약외품 밴드, 멀티비타민, 마스크팩, 선크림 등을 구매할 수 있습니다. 다양한 브랜드와 가격대가 있으며, 할인 행사가 자주 열립니다."
      },
      {
        "title": "생활용품",
        "description": "한방 파스, 모기 물린 데 바르는 롤온 제품, 발가락 사이 곰팡이 치료제 등 실용적인 생활용품들이 약국이나 드러그스토어에서 구매 가능합니다. 여행 중 필요한 소소한 용품들을 쉽게 찾을 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "인터넷 연결",
        "description": "LTE/5G 무제한 eSIM을 사전 구매하거나, 공항에서 포켓와이파이를 대여할 수 있습니다. 주요 통신사는 KT, SKT, LG U+이며, 공항에서 바로 구매 가능합니다. 온라인으로 미리 예약하면 더 저렴하게 이용할 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "티머니(T-money) 또는 캐시비(Cashbee) 교통카드를 공항 편의점이나 지하철역에서 구매할 수 있습니다. 버스, 지하철, 택시 모두 사용 가능하며, 편의점이나 지하철역에서 간편하게 충전할 수 있습니다."
      },
      {
        "title": "결제 수단",
        "description": "해외 결제 수수료가 없는 카드를 준비하거나, 네이버 페이, 카카오페이를 설정하면 편리합니다. 대부분의 가게에서 카드 결제가 가능하며, 일부 소상공인은 현금만 받기도 하므로 소액 현금을 준비하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 항공 지연, 여행 취소, 소지품 분실 등을 보장하는 여행자 보험 가입을 강력히 권장합니다. 한국은 의료비가 비싸므로 보험 가입이 필수이며, 여행 전 미리 가입하는 것이 좋습니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "한국은 봄(4~5월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 봄에는 벚꽃이 피고, 가을에는 단풍이 아름답습니다. 여름(6~8월)은 장마와 무더위가 있고, 겨울(12~2월)은 추우나 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Public Transportation Etiquette",
        "description": "On subways and buses, it's best to avoid phone calls or loud noises. Always keep priority seats empty for those who need them. During rush hours, carrying your bag in front of you is safer and more considerate."
      },
      {
        "title": "Restaurant Culture",
        "description": "Tipping is not customary in South Korea. Payment is usually made upfront at the counter, or you can call for the bill at your table by saying 'gyesanhaejuseyo' (please calculate). Water is typically provided free of charge."
      },
      {
        "title": "Greeting Etiquette",
        "description": "It's polite to bow slightly when greeting elders. Using both hands when giving or receiving items shows respect. This is especially important when exchanging business cards or money."
      },
      {
        "title": "Waste Disposal",
        "description": "Public trash cans are scarce in Korea, so it's advisable to carry small bags or tissues to collect your personal waste. Recycling separation is strictly enforced, so be mindful of proper disposal."
      },
      {
        "title": "Photography Rules",
        "description": "Photography may be restricted in some areas such as temples, military zones, and museums. Always check signage before taking photos and respect any restrictions in place."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in South Korea are mostly free and can be easily found at subway stations, parks, and large supermarkets. Dispose of toilet paper in the trash bin next to the toilet. Some restrooms may not have toilet paper, so it's good to carry small tissues or wet wipes."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Traditional Crafts",
        "description": "Hanji (Korean paper) fans, knot accessories, and traditional pattern items are popular souvenirs that represent Korean culture. You can find them at traditional craft shops in Insadong or Myeongdong, where you'll discover authentic Korean craftsmanship."
      },
      {
        "title": "K-Beauty Products",
        "description": "Korean skincare brand mask packs, ampoule sets, and sunscreens are representative souvenirs. You can find a wide variety of brands and price ranges at drugstores like Olive Young and LOHB's, which are easily accessible throughout the country."
      },
      {
        "title": "Regional Specialties",
        "description": "Regional food items like Jeonju bibimbap sauce, Boseong green tea, Jeju tangerine chocolate, and Busan fish cakes make great gifts. These are available at regional specialty stores and can also be purchased at airport duty-free shops."
      },
      {
        "title": "K-Pop Merchandise",
        "description": "K-pop related goods like idol albums, light sticks, keyrings, and photo cards are popular worldwide. You can purchase them at merchandise shops in Myeongdong and Hongdae, where you'll find a wide selection of items from various K-pop groups."
      },
      {
        "title": "Duty-Free Favorites",
        "description": "Premium seaweed sets, ginseng candy, and traditional liquors are popular at duty-free shops. Incheon Airport has one of the world's largest duty-free shopping areas, and you can pre-order items online for convenient pickup before departure."
      }
    ],
    "marketEn": [
      {
        "title": "Convenience Store Items",
        "description": "At convenience stores like CU, GS25, and 7-Eleven, you can buy instant triangle kimbap, cup noodles, banana milk, tteokbokki, and sundae at affordable prices. These stores are open 24 hours and can be found throughout the country."
      },
      {
        "title": "Supermarket Products",
        "description": "PB (private brand) products from large supermarkets like E-mart and Homeplus, such as kimchi, ramen, instant tteokbokki sauce, soy sauce, and doenjang, are great value-for-money gift items. Bulk purchases offer even better deals."
      },
      {
        "title": "Pharmacy Essentials",
        "description": "Popular items at pharmacies include coin patches (for muscle pain relief), Fusidin (for oral inflammation), and Cheong Kwan Jang ginseng sticks. These are over-the-counter medicines available without a prescription, and pharmacists can provide consultation."
      },
      {
        "title": "Beauty Drugstore Items",
        "description": "At drugstores like Olive Young and LOHB's, you can purchase bandages, multivitamins, mask packs, and sunscreens. There's a wide variety of brands and price ranges available, and discount events are frequent."
      },
      {
        "title": "Daily Necessities",
        "description": "Practical daily items like traditional patches, mosquito bite roll-on products, and athlete's foot treatments are available at pharmacies and drugstores. These stores make it easy to find small items you might need during your trip."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "South Korea uses Type F plugs (220V, 60Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase an LTE/5G unlimited eSIM or rent a pocket WiFi at the airport. Major carriers are KT, SKT, and LG U+, and you can purchase directly at the airport. Booking online in advance often offers better rates."
      },
      {
        "title": "Transportation Card",
        "description": "You can purchase a T-money or Cashbee transportation card at airport convenience stores or subway stations. These cards work on buses, subways, and taxis, and can be easily recharged at convenience stores or subway stations."
      },
      {
        "title": "Payment Methods",
        "description": "Prepare a card with no foreign transaction fees, or set up Naver Pay or Kakao Pay for convenience. Most stores accept card payments, though some small businesses may only accept cash, so it's good to carry some small bills."
      },
      {
        "title": "Travel Insurance",
        "description": "It's highly recommended to purchase travel insurance that covers medical expenses, flight delays, trip cancellations, and lost items. Medical costs in Korea can be expensive, so insurance is essential. Purchase it before your trip begins."
      },
      {
        "title": "Best Time to Visit",
        "description": "South Korea is best visited in spring (April-May) and autumn (September-October). Spring features cherry blossoms, and autumn offers beautiful fall foliage. Summer (June-August) has monsoon season and heat, while winter (December-February) is cold but great for skiing."
      }
    ],
    "visa": [
      {
        "title": "비자 불필요",
        "description": "한국인은 한국 입국 시 비자가 필요하지 않습니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter South Korea visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months."
      }
    ],
    "cities": [
      {
        "name": "Seoul",
        "nameKo": "서울"
      },
      {
        "name": "Busan",
        "nameKo": "부산"
      },
      {
        "name": "Jeju City",
        "nameKo": "제주"
      }
    ],
    "phraseSet": "korean",
    "profile": {
      "capital": "Seoul",
      "capitalKo": "서울",
      "region": "Asia · Eastern Asia",
      "regionKo": "아시아 · 동아시아",
      "population": 51700000,
      "languages": [
        "Korean"
      ],
      "languagesKo": [
        "한국어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "japan",
    "countryCode": "jp",
    "isoNumeric": 392,
    "center": {
      "lat": 35.69,
      "lng": 139.69
    },
    "name": "일본",
    "nameEn": "Japan",
    "keywords": [
      "일본",
      "japan",
      "日本",
      "nihon"
    ],
    "flag": "🇯🇵",
    "languageCode": "ja-JP",
    "summary": "섬세한 서비스와 다양한 지역 문화를 즐길 수 있는 일본 여행 체크리스트.",
    "summaryEn": "Travel checklist for Japan, where you can enjoy meticulous service and diverse regional cultures.",
    "currency": {
      "code": "JPY",
      "name": "일본 엔",
      "nameEn": "Japanese Yen",
      "symbol": "¥"
    },
    "manners": [
      {
        "title": "대중교통 예의",
        "description": "지하철에서 통화는 금지이며, 무음 모드를 유지하는 것이 좋습니다. 출퇴근 시간대에는 가방을 앞으로 메는 것이 예의입니다."
      },
      {
        "title": "식당 문화",
        "description": "일본에서는 팁을 주지 않습니다. 계산은 보통 계산대에서 선불로 하며, 일부 식당에서는 테이블에서 계산을 요청할 수도 있습니다."
      },
      {
        "title": "가정 방문 예절",
        "description": "가정집 방문 시 작은 선물을 준비하면 좋습니다. 실내에서는 반드시 신발을 벗어야 하며, 신발은 현관에 정돈하여 둡니다."
      },
      {
        "title": "쓰레기 처리",
        "description": "쓰레기는 분리배출이 일반적이며, 공공 쓰레기통이 적습니다. 편의점이나 지하철역의 쓰레기통을 이용하거나, 개인 쓰레기는 호텔로 가져가는 것이 좋습니다."
      },
      {
        "title": "신사/사찰 방문",
        "description": "신사/사찰에서는 삼배 대신 2번 인사, 2번 박수 후 다시 인사하는 것이 일반적입니다. 참배 전 손을 씻는 정화 의식도 있습니다."
      },
      {
        "title": "화장실 이용",
        "description": "일본의 화장실은 매우 깨끗하고 고급 기능이 많습니다. 휴지는 변기에 버리며, 휴지통이 없는 경우가 많습니다. 공중화장실은 대부분 무료이며, 지하철역, 편의점, 백화점 등에서 쉽게 찾을 수 있습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "과자 및 스낵",
        "description": "도쿄 바나나, 시로이 코이비토, 킷캣 지역 한정판 등이 인기 기념품입니다. 각 지역별로 특색 있는 과자들이 있어 선물용으로 좋습니다."
      },
      {
        "title": "전통 공예품",
        "description": "유젠 손수건, 하시(젓가락), 도자기 등 전통 공예품이 인기입니다. 교토, 가나자와 등 전통 공예품으로 유명한 지역에서 구매할 수 있습니다."
      },
      {
        "title": "전통 과자 및 주류",
        "description": "전통 과자 와가시와 지역 사케, 위스키 등이 좋은 선물이 됩니다. 각 지역별 특산 주류도 다양하게 구매할 수 있습니다."
      },
      {
        "title": "뷰티 제품",
        "description": "드럭스토어에서 시세이도, 오르비스, 로토제약 등 일본 뷰티 브랜드 제품을 구매할 수 있습니다. 마스크팩, 선크림, 아이크림 등이 인기입니다."
      },
      {
        "title": "면세점 상품",
        "description": "나리타 한정 위스키, 하카타 도자기 등 면세점 한정 상품들이 인기입니다. 공항 면세점에서 구매하면 더 저렴하게 살 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "드럭스토어 상비약",
        "description": "이부키 통증 패치, 오타이산 위장약 등이 약국이나 드럭스토어에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "편의점 추천템",
        "description": "편의점에서 온천 달걀, 오니기리, 프리미엄 커피 등을 구매할 수 있습니다. 24시간 운영되며 전국 어디서나 쉽게 찾을 수 있습니다."
      },
      {
        "title": "생활용품",
        "description": "닌텐도 캐릭터 문구, 무지(MUJI) 정리용품 등이 인기입니다. 일본의 실용적이고 디자인이 뛰어난 생활용품들을 만나볼 수 있습니다."
      },
      {
        "title": "키친템",
        "description": "닌자 칼, 교토 마차 가루 등 주방용품이 좋은 선물이 됩니다. 일본의 정교한 주방 도구들은 전 세계적으로 인기가 높습니다."
      },
      {
        "title": "뷰티템",
        "description": "료한(양치) 시트, 사보리노 마스크 등 뷰티 제품들이 드럭스토어에서 구매 가능합니다. 다양한 브랜드와 가격대가 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "일본은 콘센트 타입 A (100V, 50/60Hz)를 사용합니다. 전압이 낮으므로 전압 변환기가 필요할 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "인터넷 및 교통패스",
        "description": "eSIM을 사전 구매하거나, JR 패스 모바일 발권을 준비하는 것이 좋습니다. JR 패스는 외국인 전용으로 온라인에서 미리 구매할 수 있습니다."
      },
      {
        "title": "일본 eSIM",
        "titleEn": "Japan eSIM",
        "link": "https://link.coupang.com/a/c5SfTd",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrwJ\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "스이카(Suica) 또는 파스모(Pasmo) 교통카드를 모바일 앱으로 구매하거나 공항에서 구입할 수 있습니다. 버스, 지하철, 편의점 등에서 사용 가능합니다."
      },
      {
        "title": "현금 준비",
        "description": "일본은 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "자연재해 및 의료 커버를 포함한 여행자 보험 가입을 권장합니다. 일본은 지진이 빈번하므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "일본은 봄(3~5월)과 가을(9~11월)이 가장 여행하기 좋은 시기입니다. 봄에는 벚꽃이 만개하고, 가을에는 단풍이 아름답습니다. 여름(6~8월)은 장마와 무더위가 있고, 겨울(12~2월)은 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Public Transportation Etiquette",
        "description": "Phone calls are prohibited on subways, and it's best to keep your phone on silent mode. During rush hours, carrying your bag in front of you is considered polite."
      },
      {
        "title": "Restaurant Culture",
        "description": "Tipping is not practiced in Japan. Payment is usually made upfront at the counter, though some restaurants may allow you to call for the bill at your table."
      },
      {
        "title": "Home Visit Etiquette",
        "description": "It's good to bring a small gift when visiting homes. You must remove your shoes when entering indoors, and arrange them neatly at the entrance."
      },
      {
        "title": "Waste Disposal",
        "description": "Waste separation is common, and public trash cans are scarce. Use trash cans at convenience stores or subway stations, or take your personal waste back to your hotel."
      },
      {
        "title": "Shrine/Temple Visits",
        "description": "At shrines/temples, it's customary to bow twice, clap twice, then bow again (instead of three bows). There's also a purification ritual of washing your hands before worship."
      },
      {
        "title": "Restroom Usage",
        "description": "Japanese restrooms are very clean and often feature advanced functions. Dispose of toilet paper in the toilet, as trash cans are rarely provided. Public restrooms are mostly free and can be easily found at subway stations, convenience stores, and department stores."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Snacks and Confectionery",
        "description": "Tokyo Banana, Shiroi Koibito, and regional KitKat limited editions are popular souvenirs. Each region has unique confectionery items that make great gifts."
      },
      {
        "title": "Traditional Crafts",
        "description": "Yuzen handkerchiefs, hashi (chopsticks), and ceramics are popular traditional crafts. You can find them in regions famous for traditional crafts like Kyoto and Kanazawa."
      },
      {
        "title": "Traditional Sweets and Alcohol",
        "description": "Traditional wagashi sweets and regional sake and whisky make great gifts. Each region offers a variety of local specialty alcoholic beverages."
      },
      {
        "title": "Beauty Products",
        "description": "You can purchase Japanese beauty brand products like Shiseido, Orbis, and Rohto Pharmaceutical at drugstores. Mask packs, sunscreens, and eye creams are particularly popular."
      },
      {
        "title": "Duty-Free Items",
        "description": "Duty-free exclusive items like Narita limited whisky and Hakata ceramics are popular. You can purchase them at lower prices at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Drugstore Essentials",
        "description": "Ibuki pain patches and Otaisan stomach medicine are popular at pharmacies and drugstores. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Convenience Store Recommendations",
        "description": "You can purchase onsen eggs, onigiri, and premium coffee at convenience stores. These stores are open 24 hours and can be found throughout the country."
      },
      {
        "title": "Daily Items",
        "description": "Nintendo character stationery and MUJI organization products are popular. You can find practical and well-designed daily items unique to Japan."
      },
      {
        "title": "Kitchen Items",
        "description": "Ninja knives and Kyoto matcha powder make great gifts. Japanese precision kitchen tools are popular worldwide."
      },
      {
        "title": "Beauty Items",
        "description": "Beauty products like Ryo-han (toothpaste) sheets and Sabolino masks are available at drugstores. There's a wide variety of brands and price ranges."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Japan uses Type A plugs (100V, 50/60Hz). The voltage is low, so a voltage converter may be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Internet and Transportation Pass",
        "description": "It's good to pre-purchase an eSIM or prepare a JR Pass mobile ticket. The JR Pass is exclusively for foreigners and can be purchased online in advance."
      },
      {
        "title": "Transportation Card",
        "description": "You can purchase a Suica or Pasmo transportation card via mobile app or at the airport. These cards work on buses, subways, and at convenience stores."
      },
      {
        "title": "Cash Preparation",
        "description": "Japan is still largely a cash-based society, so small cash is needed. Check convenience store ATM locations or exchange money at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes natural disaster and medical coverage. Earthquakes are frequent in Japan, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Japan is best visited in spring (March-May) and autumn (September-November). Spring features full cherry blossoms, and autumn offers beautiful fall foliage. Summer (June-August) has rainy season and heat, while winter (December-February) is great for skiing."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      },
      {
        "title": "입국 시 필요 서류",
        "description": "유효한 여권, 왕복 항공권, 숙박 예약 확인서를 준비하시기 바랍니다. 입국 심사 시 여행 목적과 체류 기간을 물어볼 수 있습니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Japan visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      },
      {
        "title": "Required Documents",
        "description": "Prepare a valid passport, round-trip ticket, and accommodation confirmation. Immigration may ask about your travel purpose and length of stay."
      }
    ],
    "cities": [
      {
        "name": "Tokyo",
        "nameKo": "도쿄"
      },
      {
        "name": "Osaka",
        "nameKo": "오사카"
      },
      {
        "name": "Kyoto",
        "nameKo": "교토"
      }
    ],
    "phraseSet": "japanese",
    "profile": {
      "capital": "Tokyo",
      "capitalKo": "도쿄",
      "region": "Asia · Eastern Asia",
      "regionKo": "아시아 · 동아시아",
      "population": 124500000,
      "languages": [
        "Japanese"
      ],
      "languagesKo": [
        "일본어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "france",
    "countryCode": "fr",
    "isoNumeric": 250,
    "center": {
      "lat": 46.8,
      "lng": 2.35
    },
    "name": "프랑스",
    "nameEn": "France",
    "keywords": [
      "프랑스",
      "france",
      "파리",
      "paris"
    ],
    "flag": "🇫🇷",
    "languageCode": "fr-FR",
    "summary": "예술과 미식의 나라 프랑스를 여유 있게 즐기기 위한 실용 정보.",
    "summaryEn": "Practical information for enjoying France, the country of art and gastronomy, at your own pace.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "프랑스에서는 팁이 의무는 아니며, 서비스 요금이 이미 계산서에 포함되어 있는 경우가 많습니다. 영수증에 'service compris' 또는 'service inclus'가 표시되어 있으면 추가 팁이 필요 없습니다. 서비스에 만족했다면 총 금액의 5~10% 정도를 팁으로 남길 수 있습니다. 호텔 벨보이에게는 가방당 1유로, 하우스키핑에는 하루 1~2유로, 택시는 요금 반올림 또는 짧은 거리면 1유로 추가가 일반적입니다."
      },
      {
        "title": "인사 예절",
        "description": "상점에 들어갈 때 직원과 인사할 때 반드시 'Bonjour'라고 먼저 인사하는 것이 중요합니다. 나갈 때는 'Au revoir'라고 인사하는 것이 예의입니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통에서 검표가 수시로 이루어지니 티켓을 꼭 소지하세요. 무임승차 시 높은 벌금이 부과되므로 주의가 필요합니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "박물관 및 성당 내부는 플래시 촬영이 금지되어 있으며, 일부 장소는 사진 촬영이 완전히 금지됩니다. 안내 표지판을 확인하시기 바랍니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 프랑스인들은 조용한 대화를 선호합니다."
      },
      {
        "title": "화장실 이용",
        "description": "프랑스의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역이나 공원의 공중화장실은 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "과자 및 식품",
        "description": "라뒤레 마카롱, 파리 바게트 초콜릿, 카망베르 치즈 등이 인기 기념품입니다. 프랑스의 대표적인 미식 문화를 담은 선물로 좋습니다."
      },
      {
        "title": "향수 및 화장품",
        "description": "그라스 향수, 디퓨저, 니치 향수 브랜드 샘플 세트 등이 인기입니다. 프랑스는 향수의 본고장으로 다양한 고급 향수를 만나볼 수 있습니다."
      },
      {
        "title": "디자인 소품",
        "description": "에펠탑 및 루브르 관련 디자인 소품들이 좋은 선물이 됩니다. 파리의 대표적인 랜드마크를 모티브로 한 다양한 상품들이 있습니다."
      },
      {
        "title": "기념품",
        "description": "프랑스산 에코백, 파리 일러스트 엽서 등이 인기입니다. 실용적이면서도 파리의 분위기를 담은 기념품들을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "고급 와인, 디올/샤넬 향수 한정판 등이 면세점에서 인기입니다. 공항 면세점에서 구매하면 더 저렴하게 살 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "슈퍼마켓 추천템",
        "description": "에쉬레 버터, 보르디에 버터, 마들렌 등이 프랑스 슈퍼마켓에서 인기입니다. 프랑스의 고급 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 베스트셀러",
        "description": "비오더마 클렌징워터, 눅스 오일, 아벤느 저자극 라인 등이 약국에서 인기입니다. 프랑스 약국은 화장품도 함께 판매하는 경우가 많습니다."
      },
      {
        "title": "약국 상비약",
        "description": "몬프티커 약국에서 멀티비타민, 감기약, 파스 등을 구매할 수 있습니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "미식 선물용 식료품",
        "description": "치즈, 와인, 생하몽 등 미식 선물용 식료품들이 좋은 선물이 됩니다. 프랑스의 다양한 지역 특산품을 만나볼 수 있습니다."
      },
      {
        "title": "파리 바자르 상품",
        "description": "파리 바자르에서 파운드 케이크, 크래커 세트 등을 구매할 수 있습니다. 프랑스의 전통 과자들을 저렴하게 살 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "프랑스는 콘센트 타입 C/E (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "인터넷 연결",
        "description": "eSIM을 사전 구매하거나, 현지 통신사 선불 유심(Orange, SFR)을 사전 구매하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "파리에서는 Navigo Easy 카드를 구매하거나 일회용 티켓을 사용할 수 있습니다. Navigo Easy 카드는 지하철, 버스, 트램, RER에서 사용 가능하며, 티켓은 탑승 전에 반드시 개찰기에 찍어야 합니다. 찍지 않으면 무임승차로 간주되어 높은 벌금이 부과됩니다."
      },
      {
        "title": "보안 용품",
        "description": "금고가 없는 숙소는 휴대용 와이어록, 여행용 자물쇠를 준비하는 것이 좋습니다. 특히 저가 숙소나 공유 숙소에서는 필수입니다."
      },
      {
        "title": "여행자 보험",
        "description": "소지품 분실, 의료 커버를 포함한 여행자 보험 가입을 권장합니다. 프랑스는 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "프랑스는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 성수기로 관광객이 많고 비싸지만, 날씨가 좋아 야외 활동에 적합합니다. 겨울(12~2월)은 추우나 크리스마스 마켓과 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is not mandatory in France, and service charges are often already included in the bill. If the receipt shows 'service compris' or 'service inclus', no additional tip is needed. If you're satisfied with the service, you can leave 5-10% of the total amount. For hotel bellboys, 1 euro per bag and 1-2 euros per day for housekeeping are typical. For taxis, rounding up the fare or adding 1 euro for short distances is common."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Always greet shop staff with 'Bonjour' first when entering. It's also polite to say 'Au revoir' when leaving."
      },
      {
        "title": "Public Transportation",
        "description": "Ticket inspections are frequent on public transportation, so always carry your ticket. Fines for fare evasion are high, so be careful."
      },
      {
        "title": "Photography Rules",
        "description": "Flash photography is prohibited in museums and cathedrals; some places ban photography entirely. Always check signage before taking photos."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid loud phone calls or shouting in public places. French people prefer quiet conversations."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in France are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Public restrooms at subway stations and parks are usually paid."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Confectionery and Food",
        "description": "Ladurée macarons, Paris baguette chocolate, and Camembert cheese are popular souvenirs. These make great gifts representing French gastronomic culture."
      },
      {
        "title": "Perfumes and Cosmetics",
        "description": "Grasse perfumes, diffusers, and niche perfume brand sample sets are popular. France is the birthplace of perfumery, and you can find a wide variety of high-end perfumes."
      },
      {
        "title": "Design Items",
        "description": "Eiffel Tower and Louvre-related design items make great gifts. There are various products featuring Paris's iconic landmarks as motifs."
      },
      {
        "title": "Souvenirs",
        "description": "French eco-bags and Paris illustration postcards are popular. You can find practical souvenirs that capture the atmosphere of Paris."
      },
      {
        "title": "Duty-Free Items",
        "description": "Premium wines and Dior/Chanel limited edition perfumes are popular at duty-free shops. You can purchase them at lower prices at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Supermarket Recommendations",
        "description": "Échiré butter, Bordier butter, and madeleines are popular at French supermarkets. You can purchase high-quality French ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Bestsellers",
        "description": "Bioderma cleansing water, Nuxe oil, and Avène sensitive skin line are popular at pharmacies. French pharmacies often sell cosmetics as well."
      },
      {
        "title": "Pharmacy Essentials",
        "description": "You can purchase multivitamins, cold medicine, and patches at Monoprix pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Gourmet Gift Items",
        "description": "Cheese, wine, and saucisson make great gourmet gifts. You can find a variety of regional specialty products from different parts of France."
      },
      {
        "title": "Paris Market Items",
        "description": "You can purchase pound cakes and cracker sets from Paris markets. You can find traditional French pastries at affordable prices."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "France uses Type C/E plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-purchase an eSIM or local carrier prepaid SIM (Orange, SFR). You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Transportation Card",
        "description": "In Paris, you can purchase a Navigo Easy card or use single-use tickets. The Navigo Easy card works on subways, buses, trams, and RER. Tickets must be validated at the machine before boarding. Failure to validate may result in a high fine for fare evasion."
      },
      {
        "title": "Security Items",
        "description": "For accommodations without safes, it's good to prepare a portable wire lock and travel padlock. This is especially essential for budget or shared accommodations."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes lost items and medical coverage. Medical costs in France can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "France is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is peak season with many tourists and higher prices, but the weather is great for outdoor activities. Winter (December-February) is cold but great for Christmas markets and skiing."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(프랑스 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      },
      {
        "title": "입국 시 필요 서류",
        "description": "유효한 여권, 왕복 항공권, 숙박 예약 확인서, 여행자 보험 증서를 준비하시기 바랍니다. 입국 심사 시 여행 목적과 체류 기간을 물어볼 수 있습니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter France (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months, and you must have a return ticket."
      },
      {
        "title": "Required Documents",
        "description": "Prepare a valid passport, round-trip ticket, accommodation confirmation, and travel insurance certificate. Immigration may ask about your travel purpose and length of stay."
      }
    ],
    "cities": [
      {
        "name": "Paris",
        "nameKo": "파리"
      },
      {
        "name": "Nice",
        "nameKo": "니스"
      },
      {
        "name": "Lyon",
        "nameKo": "리옹"
      }
    ],
    "phraseSet": "french",
    "profile": {
      "capital": "Paris",
      "capitalKo": "파리",
      "region": "Europe · Western Europe",
      "regionKo": "유럽 · 서유럽",
      "population": 68000000,
      "languages": [
        "French"
      ],
      "languagesKo": [
        "프랑스어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "spain",
    "countryCode": "es",
    "isoNumeric": 724,
    "center": {
      "lat": 40.42,
      "lng": -3.7
    },
    "name": "스페인",
    "nameEn": "Spain",
    "keywords": [
      "스페인",
      "spain",
      "barcelona",
      "madrid"
    ],
    "flag": "🇪🇸",
    "languageCode": "es-ES",
    "summary": "정열과 예술이 살아 있는 스페인을 즐겁게 여행하기 위한 체크리스트.",
    "summaryEn": "Checklist for enjoying Spain, where passion and art come alive.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "스페인에서는 팁이 필수는 아니며, 서비스 요금이 이미 계산서에 포함되어 있는 경우가 많습니다. 레스토랑에서는 서비스에 만족했다면 소액의 팁(1~2유로)을 남기는 것이 일반적입니다. 카페나 바에서는 잔돈을 남기거나 음료 한 잔당 1유로 미만의 팁을 주는 경우가 많습니다. 택시는 요금 반올림 또는 짧은 거리면 1유로 추가가 일반적이며, 호텔 벨보이에게는 가방당 1유로, 하우스키핑에는 하루 1유로 정도가 일반적입니다."
      },
      {
        "title": "소매치기 주의",
        "description": "바르셀로나 등 도심에서는 소매치기 예방을 위해 가방을 앞으로 메는 것이 좋습니다. 특히 관광지와 대중교통에서는 더욱 주의가 필요합니다."
      },
      {
        "title": "성당/건축물 방문",
        "description": "성당/가우디 건축물 방문 시 민소매, 짧은 하의는 제한될 수 있습니다. 얇은 가디건이나 스카프를 준비하는 것이 좋습니다."
      },
      {
        "title": "식당 이용",
        "description": "식당에서 물은 유료인 경우가 많으니 주문 전에 확인하시기 바랍니다. 생수는 보통 유료이며, 수돗물을 요청할 수도 있습니다."
      },
      {
        "title": "식사 시간",
        "description": "저녁 식사는 늦게 시작하므로(보통 오후 8시 이후), 인기 맛집은 사전 예약이 안전합니다. 점심은 오후 2시경에 시작됩니다."
      },
      {
        "title": "화장실 이용",
        "description": "스페인의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 기념품",
        "description": "하몬, 이베리코 살라미, 엑스트라 버진 올리브오일 등이 인기 기념품입니다. 스페인의 대표적인 미식 문화를 담은 선물로 좋습니다."
      },
      {
        "title": "플라멩코 소품",
        "description": "카스타네츠, 손부채, 드레스 액세서리 등 플라멩코 관련 소품들이 인기입니다. 안달루시아 지역에서 구매할 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "스페인 세라믹, 톨레도 가위, 마요르카 진주 등 전통 공예품이 좋은 선물이 됩니다. 각 지역별 특색 있는 공예품을 만나볼 수 있습니다."
      },
      {
        "title": "지역 와인",
        "description": "리오하, 카바 스파클링 와인 등 지역별 특산 와인들이 인기입니다. 스페인은 세계적인 와인 생산국으로 다양한 와인을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "마르케스 데 리스칼 와인, 로에베 향수 등이 면세점에서 인기입니다. 공항 면세점에서 구매하면 더 저렴하게 살 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "Mercadona 추천템",
        "description": "토르티야, 감바스 알 아히요 밀키트, 호르차타 등이 Mercadona 슈퍼마켓에서 인기입니다. 스페인의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "El Corte Inglés Gourmet",
        "description": "트러플 소금, 잼 등이 El Corte Inglés Gourmet 코너에서 구매 가능합니다. 고급 식재료들을 만나볼 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "엔솔(소화제), Nolotil 진통제, 아프터선 젤 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "요리 재료",
        "description": "빠에야 키트, 사프란, 치미추리 소스 등이 좋은 선물이 됩니다. 스페인 요리를 집에서 재현할 수 있는 재료들을 구매할 수 있습니다."
      },
      {
        "title": "현지 브랜드",
        "description": "현지 초콜릿 브랜드 Valor 핫초콜릿 믹스 등이 인기입니다. 스페인의 전통 과자와 초콜릿을 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "스페인은 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "Renfe 열차 예약 앱과 모바일 탑승권을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "바르셀로나에서는 T-Casual(10회권) 또는 T-10 카드를 구매할 수 있으며, 마드리드에서는 Multi Card를 사용할 수 있습니다. 티켓은 탑승 전에 반드시 개찰기에 찍어야 하며, 찍지 않으면 무임승차로 간주되어 벌금이 부과됩니다."
      },
      {
        "title": "인터넷 연결",
        "description": "Orange/Movistar eSIM 또는 Holafly 유럽 무제한 데이터를 사전 구매하는 것이 좋습니다. 유럽 여러 국가를 여행할 계획이라면 Holafly가 유리합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "관광지 예약",
        "description": "도심 관광지 예약은 온라인 선결제로 대기 시간을 절약할 수 있습니다. 특히 인기 관광지는 미리 예약하는 것이 필수입니다."
      },
      {
        "title": "여행자 보험",
        "description": "도난 및 의료 커버를 포함한 여행자 보험 가입을 권장합니다. 스페인은 소매치기가 빈번하므로 보험 가입이 중요합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "스페인은 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 매우 덥지만 해변 지역을 즐기기에 좋고, 겨울(12~2월)은 남부 지역이 온화하여 여행하기 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is not mandatory in Spain, and service charges are often already included in the bill. In restaurants, leaving a small tip (1-2 euros) is common if you're satisfied with the service. In cafes and bars, leaving small change or less than 1 euro per drink is typical. For taxis, rounding up the fare or adding 1 euro for short distances is common. For hotel bellboys, 1 euro per bag and 1 euro per day for housekeeping are typical."
      },
      {
        "title": "Pickpocketing Prevention",
        "description": "In city centers like Barcelona, carry bags in front to prevent pickpocketing. Be especially careful at tourist spots and on public transportation."
      },
      {
        "title": "Cathedral/Building Visits",
        "description": "Sleeveless tops and short bottoms may be restricted when visiting cathedrals/Gaudi buildings. It's good to prepare a thin cardigan or scarf."
      },
      {
        "title": "Restaurant Usage",
        "description": "Water is often charged in restaurants, so check before ordering. Bottled water is usually paid, but you can also request tap water."
      },
      {
        "title": "Meal Times",
        "description": "Dinner starts late (usually after 8 PM), so popular restaurants should be reserved in advance. Lunch starts around 2 PM."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Spain are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food Souvenirs",
        "description": "Jamón, Iberico salami, and extra virgin olive oil are popular souvenirs. These make great gifts representing Spanish gastronomic culture."
      },
      {
        "title": "Flamenco Items",
        "description": "Flamenco-related items like castanets, hand fans, and dress accessories are popular. You can find them in the Andalusia region."
      },
      {
        "title": "Traditional Crafts",
        "description": "Spanish ceramics, Toledo scissors, and Majorca pearls make great gifts. You can find unique crafts from different regions."
      },
      {
        "title": "Regional Wines",
        "description": "Regional wines like Rioja and Cava sparkling wine are popular. Spain is a world-renowned wine-producing country, and you can purchase a wide variety of wines."
      },
      {
        "title": "Duty-Free Items",
        "description": "Marqués de Riscal wine and Loewe perfume are popular at duty-free shops. You can purchase them at lower prices at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Mercadona Recommendations",
        "description": "Tortilla, gambas al ajillo meal kit, and horchata are popular at Mercadona supermarkets. You can purchase representative Spanish ingredients at affordable prices."
      },
      {
        "title": "El Corte Inglés Gourmet",
        "description": "You can purchase truffle salt and jam from the El Corte Inglés Gourmet section. You can find high-quality ingredients there."
      },
      {
        "title": "Pharmacy Essentials",
        "description": "Enso (digestive), Nolotil pain reliever, and after-sun gel are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Cooking Ingredients",
        "description": "Paella kit, saffron, and chimichurri sauce make great gifts. You can purchase ingredients to recreate Spanish dishes at home."
      },
      {
        "title": "Local Brands",
        "description": "Local chocolate brand Valor hot chocolate mix is popular. You can find traditional Spanish pastries and chocolates."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Spain uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save the Renfe train booking app and mobile tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "In Barcelona, you can purchase a T-Casual (10-trip) or T-10 card. In Madrid, you can use a Multi Card. Tickets must be validated at the machine before boarding. Failure to validate may result in fines for fare evasion."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-purchase Orange/Movistar eSIM or Holafly unlimited European data. If you plan to travel to multiple European countries, Holafly is advantageous."
      },
      {
        "title": "Attraction Booking",
        "description": "Booking city center attractions online in advance can save waiting time. Especially for popular attractions, advance booking is essential."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes theft and medical coverage. Pickpocketing is frequent in Spain, so insurance is important."
      },
      {
        "title": "Best Time to Visit",
        "description": "Spain is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is very hot but great for beach regions, while winter (December-February) is mild in southern regions, making it good for travel."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(스페인 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Spain (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Madrid",
        "nameKo": "마드리드"
      },
      {
        "name": "Barcelona",
        "nameKo": "바르셀로나"
      },
      {
        "name": "Seville",
        "nameKo": "세비야"
      }
    ],
    "phraseSet": "spanish",
    "profile": {
      "capital": "Madrid",
      "capitalKo": "마드리드",
      "region": "Europe · Southern Europe",
      "regionKo": "유럽 · 남유럽",
      "population": 48600000,
      "languages": [
        "Spanish"
      ],
      "languagesKo": [
        "스페인어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "united-states",
    "countryCode": "us",
    "isoNumeric": 840,
    "center": {
      "lat": 38.5,
      "lng": -97
    },
    "name": "미국",
    "nameEn": "United States",
    "keywords": [
      "미국",
      "usa",
      "united states",
      "america"
    ],
    "flag": "🇺🇸",
    "languageCode": "en-US",
    "summary": "넓은 대륙 여행에 대비한 미국 여행 필수 준비 사항.",
    "summaryEn": "Essential preparations for traveling across the vast continent of the United States.",
    "currency": {
      "code": "USD",
      "name": "미국 달러",
      "nameEn": "US Dollar",
      "symbol": "$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "레스토랑과 택시에서 15~20% 팁이 일반적입니다. 서비스 요금이 포함되어 있지 않은 경우가 많으므로 팁을 준비하는 것이 필수입니다."
      },
      {
        "title": "입국 심사",
        "description": "입국 심사 시 농산물, 육류, 현금 1만 달러 이상 소지 여부를 신고해야 합니다. 신고하지 않으면 벌금이 부과될 수 있으므로 주의가 필요합니다."
      },
      {
        "title": "교통",
        "description": "대중교통보다는 자동차 이동이 많으니 교통규칙을 숙지하시기 바랍니다. 특히 주별로 교통법규가 다를 수 있으므로 주의가 필요합니다."
      },
      {
        "title": "사진 촬영",
        "description": "사진 촬영은 개인 주택, 군사 시설 앞에서는 허가 없이 삼가시기 바랍니다. 사진 촬영이 금지된 곳에서는 안내 표지판을 확인하세요."
      },
      {
        "title": "주류 구매",
        "description": "주류 구매는 ID 확인이 필수이므로 여권을 항상 지참하시기 바랍니다. 만 21세 이상만 주류를 구매할 수 있습니다."
      },
      {
        "title": "화장실 이용",
        "description": "미국의 공중화장실은 대부분 무료이며, 대형 체인점(스타벅스, 맥도날드, 타겟 등)에서도 무료로 이용할 수 있습니다. 공원, 쇼핑몰, 휴게소 등에서도 쉽게 찾을 수 있습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "주류 및 식품",
        "description": "지역 특산 위스키, 크래프트 맥주, 메이플 시럽 등이 인기 기념품입니다. 각 주별로 특색 있는 주류와 식품을 구매할 수 있습니다."
      },
      {
        "title": "아웃도어 브랜드",
        "description": "메이드 인 USA 아웃도어 브랜드 굿즈(Patagonia, REI 등)가 인기입니다. 미국의 고품질 아웃도어 제품들을 만나볼 수 있습니다."
      },
      {
        "title": "기념품",
        "description": "국립공원 기념품, 주별 엽서, 마그넷 등이 좋은 선물이 됩니다. 각 주와 국립공원의 특색 있는 기념품을 구매할 수 있습니다."
      },
      {
        "title": "전자제품",
        "description": "애플, 마이크로소프트 등 전자제품 신제품이 인기입니다. 미국에서 출시된 최신 제품을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "유명 화장품 세트, 디자이너 아웃렛 한정 에디션 등이 면세점에서 인기입니다. 공항 면세점이나 아웃렛에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "Trader Joe's 추천템",
        "description": "에브리띵 베이글 시즈닝, 냉동 만두 등이 Trader Joe's에서 인기입니다. 독특한 식품들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "Whole Foods",
        "description": "유기농 간식, Kombucha 음료 등이 Whole Foods에서 구매 가능합니다. 건강한 식품들을 만나볼 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "타이레놀, 네이처메이드 비타민 등이 약국(CVS, Walgreens)에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "Costco 상품",
        "description": "전기담요, 멀티비타민, 단백질 바 등이 Costco에서 구매 가능합니다. 대량 구매 시 더욱 저렴합니다."
      },
      {
        "title": "Target 상품",
        "description": "여행용 세면도구, 미니 응급약 키트 등이 Target에서 구매 가능합니다. 실용적인 여행용품들을 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "미국은 콘센트 타입 A/B (120V, 60Hz)를 사용합니다. 전압 차이로 전압 변환기가 필요할 수 있으므로 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "입국 서류",
        "description": "ESTA 또는 비자, 여권 유효기간을 미리 확인하시기 바랍니다. ESTA는 온라인으로 신청할 수 있으며, 승인까지 시간이 걸릴 수 있습니다."
      },
      {
        "title": "기내 수하물 규정",
        "description": "TSA 규정에 맞는 액체류 100ml 이하를 지퍼백에 준비하시기 바랍니다. 기내 반입 시 별도 검사를 받게 됩니다."
      },
      {
        "title": "인터넷 연결",
        "description": "현지 SIM/eSIM 또는 T-Mobile, AT&T를 공항에서 구입할 수 있습니다. 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "미국/캐나다/멕시코 eSIM",
        "titleEn": "USA/Canada/Mexico eSIM",
        "link": "https://link.coupang.com/a/c5Skau",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrHa\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "여행자 보험",
        "description": "의료비가 비싸므로 높은 보장액으로 가입하는 것을 권장합니다. 미국의 의료비는 매우 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "미국은 지역별로 기후가 다르지만, 일반적으로 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 뉴욕, 시카고 등 동부는 봄과 가을이 온화하고, 캘리포니아는 연중 온화합니다. 여름(6~8월)은 전국적으로 덥지만 야외 활동에 좋고, 겨울(12~2월)은 북부 지역이 춥지만 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "15-20% tipping is standard in restaurants and taxis. Service charges are often not included, so preparing tips is essential."
      },
      {
        "title": "Customs Declaration",
        "description": "Declare agricultural products, meat, and cash over $10,000 at customs. Failure to declare may result in fines, so be careful."
      },
      {
        "title": "Transportation",
        "description": "Car travel is more common than public transportation, so familiarize yourself with traffic rules. Traffic regulations may vary by state, so be careful."
      },
      {
        "title": "Photography",
        "description": "Avoid photography of private homes and military facilities without permission. Check signage for photography restrictions."
      },
      {
        "title": "Alcohol Purchase",
        "description": "ID verification is required for alcohol purchases, so always carry your passport. Only those 21 and older can purchase alcohol."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in the United States are free, and you can use them for free at large chain stores (Starbucks, McDonald's, Target, etc.). You can also easily find them at parks, shopping malls, and rest areas."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Alcohol and Food",
        "description": "Regional specialty whisky, craft beer, and maple syrup are popular souvenirs. You can purchase unique alcoholic beverages and foods from each state."
      },
      {
        "title": "Outdoor Brands",
        "description": "Made in USA outdoor brand goods (Patagonia, REI, etc.) are popular. You can find high-quality outdoor products from the United States."
      },
      {
        "title": "Souvenirs",
        "description": "National park souvenirs, state postcards, and magnets make great gifts. You can purchase unique souvenirs from each state and national park."
      },
      {
        "title": "Electronics",
        "description": "Latest electronics from Apple, Microsoft, etc. are popular. You can purchase the latest products released in the United States at lower prices."
      },
      {
        "title": "Duty-Free Items",
        "description": "Famous cosmetics sets and designer outlet limited editions are popular at duty-free shops. You can purchase them at airport duty-free shops or outlets."
      }
    ],
    "marketEn": [
      {
        "title": "Trader Joe's Recommendations",
        "description": "Everything Bagel seasoning and frozen dumplings are popular at Trader Joe's. You can purchase unique food items at affordable prices."
      },
      {
        "title": "Whole Foods",
        "description": "You can purchase organic snacks and Kombucha drinks at Whole Foods. You can find healthy food items there."
      },
      {
        "title": "Pharmacy Essentials",
        "description": "Tylenol and Nature Made vitamins are popular at pharmacies (CVS, Walgreens). These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Costco Products",
        "description": "You can purchase electric blankets, multivitamins, and protein bars at Costco. Bulk purchases offer even better deals."
      },
      {
        "title": "Target Products",
        "description": "You can purchase travel toiletries and mini first aid kits at Target. You can find practical travel items there."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "The United States uses Type A/B plugs (120V, 60Hz). A voltage converter may be necessary due to voltage differences, so check your device's voltage range before traveling."
      },
      {
        "title": "Entry Documents",
        "description": "Check ESTA or visa and passport validity in advance. ESTA can be applied for online, and approval may take time."
      },
      {
        "title": "Carry-on Regulations",
        "description": "Prepare liquids 100ml or less in ziplock bags per TSA regulations. You will be subject to separate inspection when carrying them on board."
      },
      {
        "title": "Internet Connection",
        "description": "You can purchase local SIM/eSIM or T-Mobile, AT&T at the airport. Buying online in advance is often cheaper."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase insurance with high coverage due to expensive medical costs. Medical costs in the United States are very expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "The United States varies by region, but generally spring (April-June) and autumn (September-October) are the best times to visit. The East Coast (New York, Chicago) has mild spring and autumn, while California is mild year-round. Summer (June-August) is hot nationwide but great for outdoor activities, while winter (December-February) is cold in northern regions but great for skiing."
      }
    ],
    "visa": [
      {
        "title": "ESTA 신청 필요",
        "description": "한국인은 미국 입국 시 ESTA(전자여행허가) 신청이 필요합니다. 관광 목적으로 90일간 체류 가능하며, 온라인으로 신청할 수 있습니다. 승인까지 72시간 이내 소요되며, 유효기간은 2년입니다."
      },
      {
        "title": "ESTA 신청 방법",
        "description": "미국 국토안보부 공식 웹사이트(esta.cbp.dhs.gov)에서 신청할 수 있습니다. 수수료는 약 $21이며, 승인 여부는 이메일로 통보됩니다."
      }
    ],
    "visaEn": [
      {
        "title": "No Visa Required",
        "description": "US citizens do not need a visa to enter the United States."
      }
    ],
    "cities": [
      {
        "name": "New York",
        "nameKo": "뉴욕"
      },
      {
        "name": "Los Angeles",
        "nameKo": "로스앤젤레스"
      },
      {
        "name": "San Francisco",
        "nameKo": "샌프란시스코"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Washington, D.C.",
      "capitalKo": "워싱턴 D.C.",
      "region": "Americas · North America",
      "regionKo": "아메리카 · 북아메리카",
      "population": 335000000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "italy",
    "countryCode": "it",
    "isoNumeric": 380,
    "center": {
      "lat": 42,
      "lng": 12.5
    },
    "name": "이탈리아",
    "nameEn": "Italy",
    "keywords": [
      "이탈리아",
      "italy",
      "로마",
      "venice"
    ],
    "flag": "🇮🇹",
    "languageCode": "it-IT",
    "summary": "역사와 미식이 가득한 이탈리아 여행을 수월하게 도와줄 가이드.",
    "summaryEn": "Guide to help you travel through Italy, full of history and gastronomy.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "코페르토(자리세)",
        "description": "식당에서는 1~2유로의 코페르토(자리세)가 포함될 수 있습니다. 이는 테이블 사용료로 별도로 청구되는 경우가 많습니다."
      },
      {
        "title": "팁 문화",
        "description": "이탈리아에서는 계산서에 'coperto'(자리세)나 'servizio'(서비스 요금)가 포함되어 있으면 추가 팁이 필요하지 않습니다. 서비스에 만족했다면 소액의 팁(몇 유로)을 남기는 경우가 있지만, 필수는 아닙니다. 택시는 요금 반올림 또는 짧은 거리면 1유로 추가가 일반적이며, 호텔 벨보이에게는 가방당 1유로, 하우스키핑에는 하루 1유로 정도가 일반적입니다."
      },
      {
        "title": "성당 방문",
        "description": "성당 방문 시 짧은 하의, 민소매는 제한되니 얇은 가디건을 준비하시기 바랍니다. 일부 성당에서는 가디건을 대여해주기도 합니다."
      },
      {
        "title": "소매치기 주의",
        "description": "도시 관광지에서는 소매치기에 주의하고, 가방을 앞으로 메는 것이 좋습니다. 특히 로마, 밀라노, 나폴리 등 대도시에서는 더욱 주의가 필요합니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통 탑승 전에 티켓을 개찰기에 꼭 찍어야 합니다. 찍지 않으면 무임승차로 간주되어 높은 벌금이 부과될 수 있습니다."
      },
      {
        "title": "화장실 이용",
        "description": "이탈리아의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 기념품",
        "description": "모데나 발사믹 식초, 트러플 오일, 올리브오일 등이 인기 기념품입니다. 이탈리아의 대표적인 미식 문화를 담은 선물로 좋습니다."
      },
      {
        "title": "전통 공예품",
        "description": "베네치아 무라노 글라스, 가죽 장인 제품 등이 인기입니다. 이탈리아의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "커피 제품",
        "description": "에스프레소 커피, 카페 보르본 캡슐 등이 좋은 선물이 됩니다. 이탈리아의 커피 문화를 집에서 즐길 수 있습니다."
      },
      {
        "title": "파스타 및 치즈",
        "description": "파스타, 페스토 소스, 그라나 파다노 치즈 등이 인기입니다. 이탈리아 요리를 집에서 재현할 수 있는 재료들을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "구찌, 프라다 등 이탈리아 명품이 면세점에서 인기입니다. 공항 면세점이나 아웃렛에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Coop/Esselunga 마트의 파스타, 티라미수 재료 등이 인기입니다. 이탈리아의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "Eataly 상품",
        "description": "Eataly의 파스타 소스, 바질 페스토, 디저트 등이 구매 가능합니다. 이탈리아의 고급 식재료들을 만나볼 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "Tachipirina(진통제), 멀티비타민 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "치즈 및 햄",
        "description": "Parmigiano Reggiano, 프로슈토 슬라이스 등이 좋은 선물이 됩니다. 이탈리아의 대표적인 치즈와 햄을 구매할 수 있습니다."
      },
      {
        "title": "천연 화장품",
        "description": "L'Erbolario 천연 화장품, 핸드크림 등이 인기입니다. 이탈리아의 천연 화장품 브랜드를 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "이탈리아는 콘센트 타입 C/F/L (230V, 50Hz)를 사용합니다. L 타입 멀티어댑터를 추천하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "Trenitalia, Italo 열차 모바일 티켓을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "로마에서는 BIT 카드나 일회용 티켓을 구매할 수 있으며, 밀라노에서는 ATM 카드를 사용할 수 있습니다. 티켓은 탑승 전에 반드시 개찰기에 찍어야 하며, 찍지 않으면 무임승차로 간주되어 높은 벌금이 부과됩니다."
      },
      {
        "title": "인터넷 연결",
        "description": "TIM, Vodafone 이탈리아 유심/eSIM을 사전 구매하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "도시세 준비",
        "description": "도시세(City Tax)는 현금 결제가 필요할 수 있으니 소액 유로를 준비하는 것이 좋습니다. 일부 호텔에서는 카드 결제도 가능합니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료 서비스, 도난 보장을 포함한 여행자 보험 가입을 권장합니다. 이탈리아는 소매치기가 빈번하므로 보험 가입이 중요합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "이탈리아는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 매우 덥고 관광객이 많지만 해변 지역을 즐기기에 좋고, 겨울(12~2월)은 추우나 크리스마스와 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Coperto (Cover Charge)",
        "description": "Restaurants may include a 1-2 euro coperto (cover charge). This is often charged separately as a table service fee."
      },
      {
        "title": "Tipping Culture",
        "description": "In Italy, if the bill includes 'coperto' (cover charge) or 'servizio' (service charge), no additional tip is needed. If you're satisfied with the service, leaving a small tip (a few euros) is common but not mandatory. For taxis, rounding up the fare or adding 1 euro for short distances is common. For hotel bellboys, 1 euro per bag and 1 euro per day for housekeeping are typical."
      },
      {
        "title": "Cathedral Visits",
        "description": "Short bottoms and sleeveless tops are restricted when visiting cathedrals, so bring a light cardigan. Some cathedrals also rent cardigans."
      },
      {
        "title": "Pickpocketing Prevention",
        "description": "Be cautious of pickpocketing in city tourist areas, and carry bags in front. Be especially careful in large cities like Rome, Milan, and Naples."
      },
      {
        "title": "Public Transportation",
        "description": "Always validate your ticket at the machine before boarding public transportation. Failure to validate may result in a high fine for fare evasion."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Italy are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food Souvenirs",
        "description": "Modena balsamic vinegar, truffle oil, and olive oil are popular souvenirs. These make great gifts representing Italian gastronomic culture."
      },
      {
        "title": "Traditional Crafts",
        "description": "Venetian Murano glass and leather artisan products are popular. You can find traditional Italian craftsmanship."
      },
      {
        "title": "Coffee Products",
        "description": "Espresso coffee and Caffè Borbone capsules make great gifts. You can enjoy Italian coffee culture at home."
      },
      {
        "title": "Pasta and Cheese",
        "description": "Pasta, pesto sauce, and Grana Padano cheese are popular. You can purchase ingredients to recreate Italian dishes at home."
      },
      {
        "title": "Duty-Free Items",
        "description": "Italian luxury brands like Gucci and Prada are popular at duty-free shops. You can purchase them at airport duty-free shops or outlets."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Pasta and tiramisu ingredients from Coop/Esselunga markets are popular. You can purchase representative Italian ingredients at affordable prices."
      },
      {
        "title": "Eataly Products",
        "description": "You can purchase pasta sauce, basil pesto, and desserts from Eataly. You can find high-quality Italian ingredients there."
      },
      {
        "title": "Pharmacy Essentials",
        "description": "Tachipirina (pain reliever) and multivitamins are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Cheese and Ham",
        "description": "Parmigiano Reggiano and prosciutto slices make great gifts. You can purchase representative Italian cheeses and hams."
      },
      {
        "title": "Natural Cosmetics",
        "description": "L'Erbolario natural cosmetics and hand cream are popular. You can find Italian natural cosmetic brands."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Italy uses Type C/F/L plugs (230V, 50Hz). A Type L multi-adapter is recommended. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save Trenitalia and Italo train mobile tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "In Rome, you can purchase a BIT card or single-use tickets. In Milan, you can use an ATM card. Tickets must be validated at the machine before boarding. Failure to validate may result in a high fine for fare evasion."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-purchase TIM or Vodafone Italy SIM/eSIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "City Tax Preparation",
        "description": "City Tax may require cash payment, so it's good to prepare small euros. Some hotels also accept card payments."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes medical services and theft coverage. Pickpocketing is frequent in Italy, so insurance is important."
      },
      {
        "title": "Best Time to Visit",
        "description": "Italy is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is very hot and crowded but great for beach regions, while winter (December-February) is cold but great for Christmas and skiing."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(이탈리아 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Italy (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Rome",
        "nameKo": "로마"
      },
      {
        "name": "Venice",
        "nameKo": "베네치아"
      },
      {
        "name": "Florence",
        "nameKo": "피렌체"
      }
    ],
    "phraseSet": "italian",
    "profile": {
      "capital": "Rome",
      "capitalKo": "로마",
      "region": "Europe · Southern Europe",
      "regionKo": "유럽 · 남유럽",
      "population": 58900000,
      "languages": [
        "Italian"
      ],
      "languagesKo": [
        "이탈리아어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "turkey",
    "countryCode": "tr",
    "isoNumeric": 792,
    "center": {
      "lat": 39.2,
      "lng": 34.5
    },
    "name": "튀르키예",
    "nameEn": "Türkiye",
    "keywords": [
      "튀르키예",
      "터키",
      "turkey",
      "istanbul",
      "türkiye"
    ],
    "flag": "🇹🇷",
    "languageCode": "tr-TR",
    "summary": "동서양이 만나는 튀르키예를 깊이 있게 즐기기 위한 핵심 정보.",
    "summaryEn": "Essential information for deeply enjoying Türkiye, where East meets West.",
    "currency": {
      "code": "TRY",
      "name": "튀르키예 리라",
      "nameEn": "Turkish Lira",
      "symbol": "₺"
    },
    "manners": [
      {
        "title": "모스크 방문",
        "description": "모스크 입장 시 어깨와 무릎을 가리고, 여성은 스카프로 머리를 가리는 것이 필수입니다. 일부 모스크에서는 대여용 스카프를 제공하기도 합니다."
      },
      {
        "title": "팁 문화",
        "description": "튀르키예에서는 식당과 가이드 서비스에 5~10%의 팁이 일반적입니다. 서비스에 만족했다면 추가 팁을 주는 것이 예의입니다. 택시는 요금 반올림 정도로 팁을 주는 경우가 있으며, 호텔 벨보이에게는 가방당 TL5, 하우스키핑에는 하루 TL5 정도가 일반적입니다."
      },
      {
        "title": "차이(차) 문화",
        "description": "차이(차)로 환영을 받으면 한 잔 함께하는 것이 예의로 여겨집니다. 튀르키예의 대표적인 환대 문화입니다."
      },
      {
        "title": "시장 흥정",
        "description": "시장에서는 흥정이 기본이지만, 정중한 태도로 협상하시기 바랍니다. 웃으며 협상하는 것이 좋습니다."
      },
      {
        "title": "사진 촬영",
        "description": "사진 촬영 전에는 사람들의 동의를 구하는 것이 좋습니다. 특히 현지인들의 사진을 찍을 때는 반드시 허락을 받으세요."
      },
      {
        "title": "화장실 이용",
        "description": "튀르키예의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 일부 공중화장실은 휴지가 없을 수 있으니 휴지를 준비하는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "과자 및 식품",
        "description": "터키시 딜라이트(로쿰), 바클라바, 피스타치오 과자 등이 인기 기념품입니다. 튀르키예의 대표적인 과자들을 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "나자르본주, 튀르키예 타일, 전통 카펫/키리무 등이 인기입니다. 튀르키예의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "향신료",
        "description": "그랜드 바자르의 향신료 세트, 사프란 등이 좋은 선물이 됩니다. 튀르키예의 다양한 향신료를 구매할 수 있습니다."
      },
      {
        "title": "커피 세트",
        "description": "튀르키예 커피 세트, 커피포트(제즈베) 등이 인기입니다. 튀르키예의 전통 커피 문화를 집에서 즐길 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "로즈워터 향수, Atelier Rebul 제품 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "Migros 마트 추천템",
        "description": "수제 갈메, 수프 믹스, 드라이드 프루트 등이 Migros 마트에서 인기입니다. 튀르키예의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "Spice Bazaar",
        "description": "향신료, 허브 차, 석류 농축액 등이 Spice Bazaar에서 구매 가능합니다. 튀르키예의 다양한 향신료와 허브를 만나볼 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "Bepanthol 크림, Arko Nem 보습크림 등이 약국에서 인기입니다. 튀르키예의 인기 스킨케어 제품들을 구매할 수 있습니다."
      },
      {
        "title": "전통 과자",
        "description": "Lokumcu 만의 전통 과자 선물 세트가 좋은 선물이 됩니다. 튀르키예의 전통 과자들을 선물용으로 포장된 세트로 구매할 수 있습니다."
      },
      {
        "title": "생활용품",
        "description": "Derby 면도기, Eyüp Sabri Tuncer 콜로냐 등이 인기입니다. 튀르키예의 전통 생활용품들을 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "튀르키예는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "이스탄불카르트 교통카드를 공항에서 충전하는 것이 좋습니다. 버스, 지하철, 페리 등에서 사용 가능합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "Turkcell, Vodafone eSIM/유심을 사전 등록하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "튀르키예 eSIM",
        "titleEn": "Türkiye eSIM",
        "link": "https://link.coupang.com/a/c5SyVT",
        "iframe": "<iframe src=\"https://coupa.ng/ckJr2R\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "투어 예약",
        "description": "카파도키아 열기구 투어 등 인기 투어는 사전 예약이 필수입니다. 특히 성수기에는 예약이 어려울 수 있으니 미리 예약하시기 바랍니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료 서비스와 액티비티 사고 커버를 포함한 여행자 보험 가입을 권장합니다. 열기구 투어 등 액티비티를 즐길 계획이라면 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "튀르키예는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 매우 덥지만 해변과 튀르키예 리비에라를 즐기기에 좋고, 겨울(12~2월)은 추우나 이스탄불 등 도시 관광에는 적합합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Mosque Visits",
        "description": "Cover shoulders and knees when entering mosques; women should cover their heads with a scarf. Some mosques also provide rental scarves."
      },
      {
        "title": "Tipping Culture",
        "description": "In Türkiye, 5-10% tipping is common in restaurants and guide services. It's polite to leave additional tips if the service was good. For taxis, rounding up the fare is common. For hotel bellboys, TL5 per bag and TL5 per day for housekeeping are typical."
      },
      {
        "title": "Tea (Çay) Culture",
        "description": "It's considered polite to share a cup when welcomed with tea (çay). This is a representative hospitality culture of Türkiye."
      },
      {
        "title": "Market Bargaining",
        "description": "Bargaining is standard in markets, but negotiate politely. It's good to negotiate with a smile."
      },
      {
        "title": "Photography",
        "description": "It's good to ask for permission before taking photos of people. Especially when taking photos of locals, always get permission."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Türkiye are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Some public restrooms may not have toilet paper, so it's good to prepare tissues."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Sweets and Food",
        "description": "Turkish Delight (lokum), baklava, and pistachio sweets are popular souvenirs. You can find representative Turkish sweets."
      },
      {
        "title": "Traditional Crafts",
        "description": "Nazar boncuk, Turkish tiles, and traditional carpets/kilims are popular. You can find traditional Turkish craftsmanship."
      },
      {
        "title": "Spices",
        "description": "Spice sets from Grand Bazaar and saffron make great gifts. You can purchase a variety of Turkish spices."
      },
      {
        "title": "Coffee Set",
        "description": "Turkish coffee set and coffee pot (cezve) are popular. You can enjoy traditional Turkish coffee culture at home."
      },
      {
        "title": "Duty-Free Items",
        "description": "Rosewater perfume and Atelier Rebul products are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Migros Market Recommendations",
        "description": "Homemade halva, soup mix, and dried fruit are popular at Migros markets. You can purchase representative Turkish ingredients at affordable prices."
      },
      {
        "title": "Spice Bazaar",
        "description": "You can purchase spices, herbal tea, and pomegranate concentrate from Spice Bazaar. You can find a variety of Turkish spices and herbs."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Bepanthol cream and Arko Nem moisturizer are popular at pharmacies. You can purchase popular Turkish skincare products."
      },
      {
        "title": "Traditional Sweets",
        "description": "Traditional sweet gift sets from Lokumcu make great gifts. You can purchase Turkish traditional sweets in gift-wrapped sets."
      },
      {
        "title": "Daily Items",
        "description": "Derby razors and Eyüp Sabri Tuncer cologne are popular. You can find traditional Turkish daily items."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Türkiye uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "It's good to charge the Istanbulkart transportation card at the airport. This card works on buses, subways, and ferries."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-register Turkcell or Vodafone eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Tour Booking",
        "description": "Popular tours like Cappadocia hot air balloon must be booked in advance. Especially during peak season, booking may be difficult, so book in advance."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes medical services and activity accident coverage. If you plan to enjoy activities like hot air balloon tours, insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Türkiye is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is very hot but great for beaches and the Turkish Riviera, while winter (December-February) is cold but suitable for city tours like Istanbul."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Türkiye visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Istanbul",
        "nameKo": "이스탄불"
      },
      {
        "name": "Cappadocia",
        "nameKo": "카파도키아"
      },
      {
        "name": "Antalya",
        "nameKo": "안탈리아"
      }
    ],
    "phraseSet": "turkish",
    "profile": {
      "capital": "Ankara",
      "capitalKo": "앙카라",
      "region": "Asia · Western Asia",
      "regionKo": "아시아 · 서아시아",
      "population": 85300000,
      "languages": [
        "Turkish"
      ],
      "languagesKo": [
        "튀르키예어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "mexico",
    "countryCode": "mx",
    "isoNumeric": 484,
    "center": {
      "lat": 23.5,
      "lng": -102
    },
    "name": "멕시코",
    "nameEn": "Mexico",
    "keywords": [
      "멕시코",
      "mexico",
      "cancun",
      "mexico city"
    ],
    "flag": "🇲🇽",
    "languageCode": "es-MX",
    "summary": "다채로운 음식과 문화가 매력인 멕시코 여행 준비 가이드.",
    "summaryEn": "Preparation guide for traveling to Mexico, where diverse food and culture are the charm.",
    "currency": {
      "code": "MXN",
      "name": "멕시코 페소",
      "nameEn": "Mexican Peso",
      "symbol": "$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "멕시코에서는 레스토랑에서 10~15% 팁이 일반적이고, 카드 결제 시 팁 입력 가능 여부를 확인하시기 바랍니다. 서비스가 좋았으면 추가 팁을 주는 것이 예의입니다. 택시는 요금 반올림 정도로 충분하며, 호텔 벨보이에게는 가방당 20~50 페소, 하우스키핑에는 하루 20~50 페소 정도가 일반적입니다."
      },
      {
        "title": "택시 및 투어 팁",
        "description": "택시나 투어 기사에게는 소액 페소로 팁을 준비하는 것이 좋습니다. 보통 10~20 페소 정도가 적당합니다."
      },
      {
        "title": "수돗물 주의",
        "description": "수돗물은 바로 마시지 말고, 생수를 구입하거나 정수기를 사용하시기 바랍니다. 멕시코의 수돗물은 외국인에게는 안전하지 않을 수 있습니다."
      },
      {
        "title": "야간 안전",
        "description": "야간에는 인적 드문 골목을 피하고, 공용 택시보다는 라이드셰어(Uber, Didi 등)를 이용하는 것이 안전합니다."
      },
      {
        "title": "시장 흥정",
        "description": "시장 흥정 시 웃으며 정중하게 가격을 협상하시기 바랍니다. 흥정은 멕시코 시장 문화의 일부입니다."
      },
      {
        "title": "화장실 이용",
        "description": "멕시코의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 일부 공중화장실은 휴지가 없을 수 있으니 휴지를 준비하는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "주류 및 식품",
        "description": "테킬라, 메스칼, 멕시코 초콜릿 등이 인기 기념품입니다. 멕시코의 대표적인 주류와 식품을 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "오악사카 직조품, 전통 세라믹 '탈라베라' 등이 인기입니다. 멕시코의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "아트 프린트",
        "description": "프리다 칼로, 대문호 관련 아트 프린트 등이 좋은 선물이 됩니다. 멕시코의 대표적인 예술가들의 작품을 구매할 수 있습니다."
      },
      {
        "title": "향신료 및 소스",
        "description": "치폴레 소스, 살사, 타코 시즈닝 등이 인기입니다. 멕시코 요리를 집에서 재현할 수 있는 재료들을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "향신료 세트, 트로피칼 럼 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Soriana/La Comer 마트의 토르티야 칩, 살사, 마사카루 등이 인기입니다. 멕시코의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "Vick VapoRub, Next 감기약 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "현지 인기 간식",
        "description": "Duvalin, Pulparindo, Lucas 스낵 등이 인기입니다. 멕시코의 대표적인 간식들을 만나볼 수 있습니다."
      },
      {
        "title": "열대과일 및 향신료",
        "description": "Chedraui의 열대과일 건조칩, 향신료 믹스 등이 좋은 선물이 됩니다. 멕시코의 다양한 열대과일과 향신료를 구매할 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "Oxxo 편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 24시간 운영되며 전국 어디서나 쉽게 찾을 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "멕시코는 콘센트 타입 A/B (127V, 60Hz)를 사용합니다. 미국과 동일한 플러그를 사용하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "입국 서류",
        "description": "입국 시 FMM 관광카드를 보관하고, 출국 시 제출해야 합니다. 분실 시 벌금이 부과될 수 있으므로 주의가 필요합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "Telcel, AT&T 멕시코용 eSIM/유심을 사전 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "미국/캐나다/멕시코 eSIM",
        "titleEn": "USA/Canada/Mexico eSIM",
        "link": "https://link.coupang.com/a/c5Skau",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrHa\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "멕시코시티에서는 Metro 카드나 일회용 티켓을 구매할 수 있습니다. 지하철과 버스에서 사용 가능하며, 지하철 요금이 저렴하여 관광객에게 인기가 있습니다. 일부 노선은 혼잡할 수 있으니 주의가 필요합니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료, 도난, 자연재해 커버를 확인하는 여행자 보험 가입을 권장합니다. 멕시코는 의료비가 비싸므로 보험 가입이 필수입니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Mexico, 10-15% tipping is common in restaurants; check if tip can be entered when paying by card. It's polite to leave additional tips if the service was good. Rounding up for taxis is sufficient. For hotel bellboys, 20~50 pesos per bag and 20~50 pesos per day for housekeeping are typical."
      },
      {
        "title": "Taxi and Tour Tips",
        "description": "Prepare small peso tips for taxi or tour drivers. Usually 10-20 pesos is appropriate."
      },
      {
        "title": "Tap Water Caution",
        "description": "Don't drink tap water directly; buy bottled water or use a water purifier. Tap water in Mexico may not be safe for foreigners."
      },
      {
        "title": "Night Safety",
        "description": "Avoid deserted alleys at night, and use ride-sharing (Uber, Didi, etc.) instead of public taxis for safety."
      },
      {
        "title": "Market Bargaining",
        "description": "When bargaining in markets, negotiate prices politely with a smile. Bargaining is part of Mexican market culture."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Mexico are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Some public restrooms may not have toilet paper, so it's good to prepare tissues."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Alcohol and Food",
        "description": "Tequila, mezcal, and Mexican chocolate are popular souvenirs. You can find representative Mexican alcoholic beverages and foods."
      },
      {
        "title": "Traditional Crafts",
        "description": "Oaxaca woven products and traditional Talavera ceramics are popular. You can find traditional Mexican craftsmanship."
      },
      {
        "title": "Art Prints",
        "description": "Frida Kahlo and Diego Rivera art prints make great gifts. You can purchase works by representative Mexican artists."
      },
      {
        "title": "Spices and Sauces",
        "description": "Chipotle sauce, salsa, and taco seasoning are popular. You can purchase ingredients to recreate Mexican dishes at home."
      },
      {
        "title": "Duty-Free Items",
        "description": "Spice sets and tropical rum are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Tortilla chips, salsa, and masa harina from Soriana/La Comer markets are popular. You can purchase representative Mexican ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Vick VapoRub and Next cold medicine are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Local Popular Snacks",
        "description": "Duvalin, Pulparindo, and Lucas snacks are popular. You can find representative Mexican snacks."
      },
      {
        "title": "Tropical Fruits and Spices",
        "description": "Tropical fruit dried chips and spice mix from Chedraui make great gifts. You can purchase a variety of Mexican tropical fruits and spices."
      },
      {
        "title": "Convenience Store Products",
        "description": "Coffee, energy drinks, and travel snacks from Oxxo convenience stores are popular. These stores are open 24 hours and can be found throughout the country."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Mexico uses Type A/B plugs (127V, 60Hz). It uses the same plugs as the United States. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Entry Documents",
        "description": "Keep the FMM tourist card upon entry and submit it when leaving. Loss may result in fines, so be careful."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-prepare Telcel or AT&T Mexico eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Transportation Card",
        "description": "In Mexico City, you can purchase a Metro card or single-use tickets. These work on subways and buses. Subway fares are cheap and popular with tourists. Some lines can be crowded, so be careful."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and natural disaster. Medical costs in Mexico can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Mexico is best visited during the dry season (November-April). This period has less rain and pleasant weather. The rainy season (May-October) has more rain and high humidity, but resort areas are good for travel year-round. December-February is the most pleasant time during the dry season."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 180일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Mexico visa-free for up to 180 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Mexico City",
        "nameKo": "멕시코시티"
      },
      {
        "name": "Cancun",
        "nameKo": "칸쿤"
      },
      {
        "name": "Guadalajara",
        "nameKo": "과달라하라"
      }
    ],
    "phraseSet": "spanish",
    "profile": {
      "capital": "Mexico City",
      "capitalKo": "멕시코시티",
      "region": "Americas · North America",
      "regionKo": "아메리카 · 북아메리카",
      "population": 129000000,
      "languages": [
        "Spanish"
      ],
      "languagesKo": [
        "스페인어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "united-kingdom",
    "countryCode": "gb",
    "isoNumeric": 826,
    "center": {
      "lat": 52.8,
      "lng": -1.8
    },
    "name": "영국",
    "nameEn": "United Kingdom",
    "keywords": [
      "영국",
      "uk",
      "united kingdom",
      "london"
    ],
    "flag": "🇬🇧",
    "languageCode": "en-GB",
    "summary": "역사적 명소와 현대 문화가 공존하는 영국 여행을 위한 실전 팁.",
    "summaryEn": "Practical tips for traveling to the UK, where historical landmarks and modern culture coexist.",
    "currency": {
      "code": "GBP",
      "name": "영국 파운드",
      "nameEn": "British Pound",
      "symbol": "£"
    },
    "manners": [
      {
        "title": "줄 서기 문화",
        "description": "줄 서기 문화가 강하니 항상 차례를 지키고 양보하시기 바랍니다. 영국인들은 줄 서기를 매우 중요하게 생각합니다."
      },
      {
        "title": "펍 문화",
        "description": "펍에서는 바에서 주문 후 결제하며, 팁은 잔돈을 남기거나 카드로 추가하는 것이 일반적입니다. 서비스가 좋았으면 추가 팁을 주는 것이 예의입니다."
      },
      {
        "title": "팁 문화",
        "description": "영국에서는 계산서에 서비스 요금이 포함되어 있지 않다면, 총액의 10~15%를 팁으로 남기는 것이 일반적입니다. 서비스 요금이 포함되어 있으면 추가 팁은 선택 사항입니다. 택시는 요금의 10% 정도를 팁으로 주는 경우가 있으며, 호텔 벨보이에게는 가방당 £1, 하우스키핑에는 하루 £1 정도가 일반적입니다."
      },
      {
        "title": "에스컬레이터 예의",
        "description": "지하철 에스컬레이터에서는 오른쪽에 서고, 왼쪽은 비워두는 것이 규칙입니다. 왼쪽은 급히 지나가는 사람들을 위한 공간입니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "사진 촬영 제한 구역(박물관, 극장 등)을 확인하시기 바랍니다. 일부 장소에서는 플래시 촬영이 금지되거나 사진 촬영이 완전히 금지될 수 있습니다."
      },
      {
        "title": "야간 안전",
        "description": "어두운 골목이나 심야에는 대중교통 대신 공인 택시 이용을 권장합니다. 특히 런던에서는 블랙캡(공인 택시)을 이용하는 것이 안전합니다."
      },
      {
        "title": "화장실 이용",
        "description": "영국의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "티 및 홍차",
        "description": "해롯 백화점 티, 포트넘 앤 메이슨 홍차 등이 인기 기념품입니다. 영국의 대표적인 티 브랜드를 만나볼 수 있습니다."
      },
      {
        "title": "영국 브랜드",
        "description": "버버리, 바버 등 영국 브랜드 액세서리가 인기입니다. 영국의 전통적인 브랜드 제품들을 구매할 수 있습니다."
      },
      {
        "title": "디자인 소품",
        "description": "런던 아이, 타워브리지 디자인 소품들이 좋은 선물이 됩니다. 런던의 대표적인 랜드마크를 모티브로 한 상품들이 있습니다."
      },
      {
        "title": "과자 및 초콜릿",
        "description": "Cadbury 초콜릿, 쇼트브레드 쿠키 등이 인기입니다. 영국의 대표적인 과자와 초콜릿을 만나볼 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "몰튼브라운, 조말론 향수 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "Marks & Spencer",
        "description": "Marks & Spencer의 티, 비스킷, 프리미엄 잼 등이 인기입니다. 영국의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "Boots 약국",
        "description": "세룰러7, No7 뷰티 제품 등이 Boots 약국에서 인기입니다. 영국의 인기 스킨케어 제품들을 구매할 수 있습니다."
      },
      {
        "title": "Tesco 상품",
        "description": "Tesco Finest 시리즈, 크리스프, 잉글리시 머스타드 등이 좋은 선물이 됩니다. 영국의 대표적인 식재료들을 만나볼 수 있습니다."
      },
      {
        "title": "Pret a Manger",
        "description": "Pret a Manger 샌드위치, 콜드프레스 주스 등이 인기입니다. 영국의 대표적인 간식 체인점입니다."
      },
      {
        "title": "건강보조 식품",
        "description": "Holland & Barrett 건강보조 식품, 비타민 등이 인기입니다. 영국의 대표적인 건강식품 매장입니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "영국은 콘센트 타입 G (230V, 50Hz)를 사용합니다. 영국 전용 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "Oyster/Contactless 교통카드를 충전하는 것이 좋습니다. 버스는 현금 결제가 불가하므로 카드가 필수입니다."
      },
      {
        "title": "인터넷 연결",
        "description": "EE, Vodafone, Three eSIM 또는 유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "날씨 대비",
        "description": "우중 날씨 대비 방수 재킷, 휴대용 우산을 준비하는 것이 좋습니다. 영국은 날씨가 변덕스러워 갑작스러운 비가 올 수 있습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료 서비스, 항공 지연 보장을 포함한 여행자 보험 가입을 권장합니다. 영국은 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "영국은 봄(4~6월)과 여름(7~8월)이 가장 여행하기 좋은 시기입니다. 봄에는 날씨가 온화하고 꽃이 피며, 여름에는 가장 따뜻하고 일조량이 많습니다. 가을(9~10월)도 비교적 온화하지만 비가 자주 옵니다. 겨울(12~2월)은 춥고 비가 많지만 크리스마스 마켓을 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Queuing Culture",
        "description": "Queuing culture is strong, so always maintain order and be courteous. British people take queuing very seriously."
      },
      {
        "title": "Pub Culture",
        "description": "In pubs, order and pay at the bar; tip by leaving change or adding to card. It's polite to leave additional tips if the service was good."
      },
      {
        "title": "Tipping Culture",
        "description": "In the UK, if service charge is not included in the bill, leaving 10-15% of the total amount as a tip is common. If service charge is included, additional tips are optional. For taxis, around 10% of the fare is typical. For hotel bellboys, £1 per bag and £1 per day for housekeeping are typical."
      },
      {
        "title": "Escalator Etiquette",
        "description": "On subway escalators, stand on the right, leave the left clear. The left side is for people in a hurry."
      },
      {
        "title": "Photography Rules",
        "description": "Check photography restrictions (museums, theaters, etc.). Some places may prohibit flash photography or photography entirely."
      },
      {
        "title": "Night Safety",
        "description": "Use licensed taxis instead of public transport in dark alleys or late at night. Especially in London, using black cabs (licensed taxis) is safe."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in the UK are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Tea and Black Tea",
        "description": "Harrods department store tea and Fortnum & Mason black tea are popular souvenirs. You can find representative British tea brands."
      },
      {
        "title": "British Brands",
        "description": "Burberry and Barbour British brand accessories are popular. You can purchase traditional British brand products."
      },
      {
        "title": "Design Items",
        "description": "London Eye and Tower Bridge design items make great gifts. There are various products featuring London's iconic landmarks as motifs."
      },
      {
        "title": "Sweets and Chocolate",
        "description": "Cadbury chocolate and shortbread cookies are popular. You can find representative British sweets and chocolates."
      },
      {
        "title": "Duty-Free Items",
        "description": "Molton Brown and Jo Malone perfume are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Marks & Spencer",
        "description": "Tea, biscuits, and premium jam from Marks & Spencer are popular. You can purchase representative British ingredients at affordable prices."
      },
      {
        "title": "Boots Pharmacy",
        "description": "CeraVe and No7 beauty products are popular at Boots pharmacies. You can purchase popular British skincare products."
      },
      {
        "title": "Tesco Products",
        "description": "Tesco Finest series, crisps, and English mustard make great gifts. You can find representative British ingredients."
      },
      {
        "title": "Pret a Manger",
        "description": "Pret a Manger sandwiches and cold-pressed juice are popular. This is a representative British snack chain."
      },
      {
        "title": "Health Supplements",
        "description": "Holland & Barrett health supplements and vitamins are popular. This is a representative British health food store."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "The UK uses Type G plugs (230V, 50Hz). You'll need a UK-specific plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "It's good to recharge Oyster/Contactless transportation cards. Buses don't accept cash, so a card is essential."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare EE, Vodafone, or Three eSIM or SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Weather Preparation",
        "description": "It's good to prepare a waterproof jacket and portable umbrella for rainy weather. The UK has unpredictable weather, and sudden rain is possible."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes medical services and flight delay coverage. Medical costs in the UK can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "The UK is best visited in spring (April-June) and summer (July-August). Spring has mild weather and flowers, while summer is the warmest with the most sunshine. Autumn (September-October) is also relatively mild but often rainy. Winter (December-February) is cold and rainy but great for Christmas markets."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 6개월간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter the UK visa-free for up to 6 months for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "London",
        "nameKo": "런던"
      },
      {
        "name": "Edinburgh",
        "nameKo": "에딘버러"
      },
      {
        "name": "Manchester",
        "nameKo": "맨체스터"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "London",
      "capitalKo": "런던",
      "region": "Europe · Northern Europe",
      "regionKo": "유럽 · 북유럽",
      "population": 67700000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "germany",
    "countryCode": "de",
    "isoNumeric": 276,
    "center": {
      "lat": 51.2,
      "lng": 10.4
    },
    "name": "독일",
    "nameEn": "Germany",
    "keywords": [
      "독일",
      "germany",
      "berlin",
      "munich"
    ],
    "flag": "🇩🇪",
    "languageCode": "de-DE",
    "summary": "탄탄한 교통과 규범이 돋보이는 독일 여행 필수 팁 모음.",
    "summaryEn": "Essential tips for traveling to Germany, where solid transportation and norms stand out.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "시간 약속",
        "description": "시간 약속을 철저히 지키고, 지각 시 사전에 연락하시기 바랍니다. 독일인들은 시간 약속을 매우 중요하게 생각합니다."
      },
      {
        "title": "팁 문화",
        "description": "독일에서는 식당에서 5~10% 팁을 현금으로 건네거나 카드 결제 시 추가하는 것이 일반적입니다. 서비스가 좋았으면 추가 팁을 주는 것이 예의입니다. 택시는 요금 반올림 정도로 충분하며, 호텔 벨보이에게는 가방당 1~2유로, 하우스키핑에는 하루 1~2유로 정도가 일반적입니다."
      },
      {
        "title": "쓰레기 분리수거",
        "description": "쓰레기 분리수거 규칙이 엄격하니 표기를 확인하시기 바랍니다. 독일은 환경 보호에 매우 엄격합니다."
      },
      {
        "title": "대중교통 이용",
        "description": "지하철 검표가 수시로 있으니 티켓을 꼭 소지하시기 바랍니다. 무임승차 시 높은 벌금이 부과되므로 주의가 필요합니다."
      },
      {
        "title": "개인 공간 존중",
        "description": "개인 공간을 존중하고, 조용한 톤으로 대화하시기 바랍니다. 독일인들은 조용한 대화를 선호합니다."
      },
      {
        "title": "화장실 이용",
        "description": "독일의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 및 주류",
        "description": "리터스포트 초콜릿, 할렘 꿀, 독일 맥주 등이 인기 기념품입니다. 독일의 대표적인 식품과 주류를 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "바데세 라이너 향초, 카우보이 컵 등이 인기입니다. 독일의 전통 공예품을 구매할 수 있습니다."
      },
      {
        "title": "크리스마스 마켓 상품",
        "description": "크리스마스 마켓 글뤼바인 컵, 오너먼트 등이 좋은 선물이 됩니다. 독일의 대표적인 크리스마스 마켓 상품들을 만나볼 수 있습니다."
      },
      {
        "title": "독일 브랜드",
        "description": "포르쉐/벤츠 미니어처, 독일제 주방용품 등이 인기입니다. 독일의 대표적인 브랜드 제품들을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "바이텐세브 향수, 니베아 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "DM 드럭스토어",
        "description": "바세린 립밤, Balea 화장품, 비타민 등이 DM 드럭스토어에서 인기입니다. 독일의 대표적인 드럭스토어입니다."
      },
      {
        "title": "마트 상품",
        "description": "REWE, Edeka의 소시지, 프레첼, 치즈 등이 좋은 선물이 됩니다. 독일의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "Kytta Salbe, Voltaren 젤 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "과자 및 초콜릿",
        "description": "Rittersport 초콜릿, Haribo 젤리 등이 인기입니다. 독일의 대표적인 과자와 초콜릿을 만나볼 수 있습니다."
      },
      {
        "title": "자연 화장품",
        "description": "Rossmann의 Alverde 자연 화장품 등이 인기입니다. 독일의 천연 화장품 브랜드를 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "독일은 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "독일 철도 DB Navigator 앱과 QR 티켓을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "베를린에서는 Berlin WelcomeCard나 일일 티켓을 구매할 수 있으며, 뮌헨에서는 MVV 카드를 사용할 수 있습니다. 일부 지역에서는 티켓을 탑승 전에 개찰기에 찍어야 하며, 검표가 수시로 이루어지므로 티켓을 항상 소지해야 합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "유럽 eSIM 또는 Telekom, Vodafone 유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "일요일 휴무",
        "description": "일요일엔 상점이 대부분 휴무이니 식료품을 미리 준비하는 것이 좋습니다. 일부 편의점이나 기차역 상점은 영업하지만 대부분의 상점은 휴무입니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료, 항공 지연, 수하물 보장을 포함한 여행자 보험 가입을 권장합니다. 독일은 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "독일은 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 따뜻하지만 관광객이 많고, 겨울(12~2월)은 추우나 크리스마스 마켓과 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Time Commitment",
        "description": "Keep time commitments strictly; contact in advance if running late. Germans take time commitments very seriously."
      },
      {
        "title": "Tipping Culture",
        "description": "In Germany, restaurant tips are 5-10%, given in cash or added to card payment. It's polite to leave additional tips if the service was good. Rounding up for taxis is sufficient. For hotel bellboys, 1~2 euros per bag and 1~2 euros per day for housekeeping are typical."
      },
      {
        "title": "Waste Separation",
        "description": "Waste separation rules are strict, so check labels. Germany is very strict about environmental protection."
      },
      {
        "title": "Public Transportation",
        "description": "Subway ticket checks are frequent, so always carry your ticket. Fines for fare evasion are high, so be careful."
      },
      {
        "title": "Personal Space",
        "description": "Respect personal space and speak in a quiet tone. Germans prefer quiet conversations."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Germany are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food and Alcohol",
        "description": "Ritter Sport chocolate, Harz honey, and German beer are popular souvenirs. You can find representative German foods and alcoholic beverages."
      },
      {
        "title": "Traditional Crafts",
        "description": "Badesalz scented candles and cowboy cups are popular. You can purchase traditional German crafts."
      },
      {
        "title": "Christmas Market Items",
        "description": "Christmas market Glühwein cups and ornaments make great gifts. You can find representative German Christmas market items."
      },
      {
        "title": "German Brands",
        "description": "Porsche/Mercedes miniatures and German kitchenware are popular. You can purchase representative German brand products."
      },
      {
        "title": "Duty-Free Items",
        "description": "Wütensee perfume and Nivea sets are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "DM Drugstore",
        "description": "Vaseline lip balm, Balea cosmetics, and vitamins are popular at DM drugstores. This is a representative German drugstore."
      },
      {
        "title": "Market Products",
        "description": "Sausages, pretzels, and cheese from REWE and Edeka make great gifts. You can purchase representative German ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Kytta Salbe and Voltaren gel are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Sweets and Chocolate",
        "description": "Ritter Sport chocolate and Haribo gummies are popular. You can find representative German sweets and chocolates."
      },
      {
        "title": "Natural Cosmetics",
        "description": "Rossmann Alverde natural cosmetics are popular. You can find German natural cosmetic brands."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Germany uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save the German Railway DB Navigator app and QR tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "In Berlin, you can purchase a Berlin WelcomeCard or daily tickets. In Munich, you can use an MVV card. In some areas, tickets must be validated at the machine before boarding. Ticket checks are frequent, so always carry your ticket."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare European eSIM or Telekom, Vodafone SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Sunday Closures",
        "description": "Most stores are closed on Sundays, so it's good to prepare groceries in advance. Some convenience stores or train station shops are open, but most stores are closed."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes medical, flight delay, and baggage coverage. Medical costs in Germany can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Germany is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is warm but crowded with tourists, while winter (December-February) is cold but great for Christmas markets and skiing."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(독일 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Germany (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Berlin",
        "nameKo": "베를린"
      },
      {
        "name": "Munich",
        "nameKo": "뮌헨"
      },
      {
        "name": "Frankfurt",
        "nameKo": "프랑크푸르트"
      }
    ],
    "phraseSet": "german",
    "profile": {
      "capital": "Berlin",
      "capitalKo": "베를린",
      "region": "Europe · Western Europe",
      "regionKo": "유럽 · 서유럽",
      "population": 84300000,
      "languages": [
        "German"
      ],
      "languagesKo": [
        "독일어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "greece",
    "countryCode": "gr",
    "isoNumeric": 300,
    "center": {
      "lat": 39,
      "lng": 22.5
    },
    "name": "그리스",
    "nameEn": "Greece",
    "keywords": [
      "그리스",
      "greece",
      "athens",
      "santorini"
    ],
    "flag": "🇬🇷",
    "languageCode": "el-GR",
    "summary": "지중해의 햇살을 만끽할 수 있는 그리스 여행 핵심 가이드.",
    "summaryEn": "Essential guide for traveling to Greece, where you can enjoy the Mediterranean sunshine.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "그리스에서는 레스토랑 팁은 5~10% 정도, 현금으로 남기는 것이 일반적입니다. 서비스가 좋았으면 추가 팁을 주는 것이 예의입니다. 택시는 요금 반올림 정도로 충분하며, 호텔 벨보이에게는 가방당 1유로, 하우스키핑에는 하루 1유로 정도가 일반적입니다."
      },
      {
        "title": "교회/수도원 방문",
        "description": "교회나 수도원 방문 시 어깨와 무릎을 가린 복장을 준비하시기 바랍니다. 일부 장소에서는 가디건이나 스카프를 대여해주기도 합니다."
      },
      {
        "title": "현금 준비",
        "description": "섬 지역에서는 현금 사용이 잦으니 잔돈을 준비하는 것이 좋습니다. 특히 작은 섬에서는 카드 결제가 어려울 수 있습니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통 탑승권은 사전에 구매해 개찰기에 찍어야 합니다. 찍지 않으면 무임승차로 간주되어 벌금이 부과될 수 있습니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "교회나 수도원 내부는 플래시 촬영이 금지되어 있으며, 일부 장소는 사진 촬영이 완전히 금지됩니다. 안내 표지판을 확인하시기 바랍니다. 사람들의 사진을 찍을 때는 반드시 허락을 받으세요."
      },
      {
        "title": "화장실 이용",
        "description": "그리스의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 일부 공중화장실은 휴지가 없을 수 있으니 휴지를 준비하는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 기념품",
        "description": "올리브오일, 허니, 피스타치오 등이 인기 기념품입니다. 그리스의 대표적인 식품을 만나볼 수 있습니다."
      },
      {
        "title": "디저트",
        "description": "그리스 요거트 파우더, 할바 디저트 등이 좋은 선물이 됩니다. 그리스의 전통 디저트를 구매할 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "산토리니 블루 앤 화이트 도자기, 이콘 이미지 등이 인기입니다. 그리스의 전통 공예품을 만나볼 수 있습니다."
      },
      {
        "title": "주류",
        "description": "코린도스 와인, 우조(아니스 술) 등이 인기입니다. 그리스의 대표적인 주류를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "코렐라 천연 화장품 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "AB 바실로풀로스 마트의 올리브, 치즈, 허브 등이 인기입니다. 그리스의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "Korres, Apivita 스킨케어 등이 약국에서 인기입니다. 그리스의 인기 스킨케어 제품들을 구매할 수 있습니다."
      },
      {
        "title": "현지 베이커리",
        "description": "현지 베이커리에서 스파나코피타, 바클라바 등을 구매할 수 있습니다. 그리스의 전통 빵과 디저트를 만나볼 수 있습니다."
      },
      {
        "title": "Agora 시장",
        "description": "Agora 시장의 허브 티, 향신료 믹스 등이 좋은 선물이 됩니다. 그리스의 다양한 허브와 향신료를 구매할 수 있습니다."
      },
      {
        "title": "Mastiha 제품",
        "description": "Mastiha 기반 껌, 스킨케어 제품 등이 인기입니다. 그리스의 특산품인 Mastiha를 활용한 제품들을 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "그리스는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "페리 예약",
        "description": "페리표는 온라인 사전 예약 후 모바일 탑승권을 저장하는 것이 좋습니다. 특히 성수기에는 예약이 어려울 수 있으니 미리 예약하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "아테네에서는 Ath.ena Card를 구매하거나 일일 티켓을 사용할 수 있습니다. 지하철, 버스, 트램에서 사용 가능하며, 티켓은 탑승 전에 반드시 개찰기에 찍어야 합니다. 찍지 않으면 무임승차로 간주되어 벌금이 부과됩니다."
      },
      {
        "title": "인터넷 연결",
        "description": "Cosmote, Vodafone eSIM/유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "섬 여행 준비",
        "description": "섬 여행 시 방충제, 자외선 차단제, 모자가 필수입니다. 그리스의 섬은 햇빛이 강하고 모기가 많을 수 있습니다."
      },
      {
        "title": "여행자 보험",
        "description": "페리 지연, 의료 보장을 포함한 여행자 보험 가입을 권장합니다. 그리스는 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "그리스는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 매우 덥지만 해변과 섬 여행에 최적이며, 겨울(12~2월)은 비가 많지만 아테네 등 도시 관광에는 적합합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Greece, restaurant tips are typically 5-10%, usually left in cash. It's polite to leave additional tips if the service was good. Rounding up for taxis is sufficient. For hotel bellboys, 1 euro per bag and 1 euro per day for housekeeping are typical."
      },
      {
        "title": "Church/Monastery Visits",
        "description": "Prepare clothing that covers shoulders and knees when visiting churches or monasteries. Some places also rent cardigans or scarves."
      },
      {
        "title": "Cash Preparation",
        "description": "Cash is frequently used in island areas, so it's good to prepare small change. Especially on small islands, card payments may be difficult."
      },
      {
        "title": "Public Transportation",
        "description": "Public transportation tickets must be purchased in advance and validated at machines. Failure to validate may result in fines for fare evasion."
      },
      {
        "title": "Photography",
        "description": "It's polite to ask locals for permission before taking photos. Especially when taking photos of people, always get permission."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Greece are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Some public restrooms may not have toilet paper, so it's good to prepare tissues."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food Souvenirs",
        "description": "Olive oil, honey, and pistachios are popular souvenirs. You can find representative Greek foods."
      },
      {
        "title": "Desserts",
        "description": "Greek yogurt powder and halva dessert make great gifts. You can purchase traditional Greek desserts."
      },
      {
        "title": "Traditional Crafts",
        "description": "Santorini blue and white ceramics and icon images are popular. You can find traditional Greek crafts."
      },
      {
        "title": "Alcohol",
        "description": "Corinthian wine and ouzo (anise liquor) are popular. You can purchase representative Greek alcoholic beverages."
      },
      {
        "title": "Duty-Free Items",
        "description": "Korres natural cosmetics sets are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Olives, cheese, and herbs from AB Vasilopoulos markets are popular. You can purchase representative Greek ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Korres and Apivita skincare are popular at pharmacies. You can purchase popular Greek skincare products."
      },
      {
        "title": "Local Bakeries",
        "description": "You can purchase spanakopita and baklava from local bakeries. You can find traditional Greek breads and desserts."
      },
      {
        "title": "Agora Market",
        "description": "Herbal tea and spice mix from Agora market make great gifts. You can purchase a variety of Greek herbs and spices."
      },
      {
        "title": "Mastiha Products",
        "description": "Mastiha-based gum and skincare products are popular. You can find products using Mastiha, a Greek specialty."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Greece uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Ferry Booking",
        "description": "It's good to book ferry tickets online in advance and store mobile tickets. Especially during peak season, booking may be difficult, so book in advance."
      },
      {
        "title": "Transportation Card",
        "description": "In Athens, you can purchase an Ath.ena Card or daily tickets. These work on subways, buses, and trams. Tickets must be validated at the machine before boarding. Failure to validate may result in fines for fare evasion."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare Cosmote or Vodafone eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Island Travel Preparation",
        "description": "Insect repellent, sunscreen, and hat are essential for island travel. Greek islands have strong sunlight and may have many mosquitoes."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes ferry delay and medical coverage. Medical costs in Greece can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Greece is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is very hot but optimal for beaches and island travel, while winter (December-February) is rainy but suitable for city tours like Athens."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(그리스 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Greece (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Athens",
        "nameKo": "아테네"
      },
      {
        "name": "Santorini",
        "nameKo": "산토리니"
      },
      {
        "name": "Mykonos",
        "nameKo": "미코노스"
      }
    ],
    "phraseSet": "greek",
    "profile": {
      "capital": "Athens",
      "capitalKo": "아테네",
      "region": "Europe · Southern Europe",
      "regionKo": "유럽 · 남유럽",
      "population": 10400000,
      "languages": [
        "Greek"
      ],
      "languagesKo": [
        "그리스어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "austria",
    "countryCode": "at",
    "isoNumeric": 40,
    "center": {
      "lat": 47.5,
      "lng": 14.5
    },
    "name": "오스트리아",
    "nameEn": "Austria",
    "keywords": [
      "오스트리아",
      "austria",
      "vienna",
      "salzburg"
    ],
    "flag": "🇦🇹",
    "languageCode": "de-AT",
    "summary": "음악과 자연이 어우러진 오스트리아 여행을 위한 준비 리스트.",
    "summaryEn": "Preparation list for traveling to Austria, where music and nature blend together.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "인사 예절",
        "description": "인사 시 악수하며 눈을 맞추고 'Grüß Gott' 인사를 사용하는 것이 좋습니다. 오스트리아의 전통적인 인사 방식입니다."
      },
      {
        "title": "팁 문화",
        "description": "오스트리아에서는 레스토랑 팁은 5~10% 정도, 카드 결제 시 금액을 말로 알려주는 것이 일반적입니다. 서비스가 좋았으면 추가 팁을 주는 것이 예의입니다. 택시는 요금 반올림 정도로 충분하며, 호텔 벨보이에게는 가방당 1~2유로, 하우스키핑에는 하루 1~2유로 정도가 일반적입니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통 검표가 엄격하니 탑승 전에 티켓을 찍으시기 바랍니다. 무임승차 시 높은 벌금이 부과되므로 주의가 필요합니다."
      },
      {
        "title": "콘서트/오페라 관람",
        "description": "콘서트나 오페라 관람 시 드레스 코드를 준수하시기 바랍니다. 일부 고급 공연장에서는 정장을 요구하기도 합니다."
      },
      {
        "title": "소음 주의",
        "description": "조용한 주거지역에서는 밤 10시 이후 소음을 줄이시기 바랍니다. 오스트리아인들은 조용한 주거 환경을 중요하게 생각합니다."
      },
      {
        "title": "화장실 이용",
        "description": "오스트리아의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "초콜릿 및 굿즈",
        "description": "모차르트 초콜릿, 사운드 오브 뮤직 굿즈 등이 인기 기념품입니다. 오스트리아의 대표적인 문화 상품을 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "빈 포슬린, 크리스탈 스와로브스키 등이 인기입니다. 오스트리아의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "식품",
        "description": "알프스 허브티, 알베르트 코코아 등이 좋은 선물이 됩니다. 오스트리아의 대표적인 식품을 구매할 수 있습니다."
      },
      {
        "title": "주류",
        "description": "오스트리아 와인, 슈냅스 등이 인기입니다. 오스트리아의 대표적인 주류를 만나볼 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "바이오 히알루론 크림 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Spar Gourmet 치즈, 소시지, 알프스 꿀 등이 인기입니다. 오스트리아의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "Billa 마트",
        "description": "사워도우 브레드, 초콜릿 등이 Billa 마트에서 구매 가능합니다. 오스트리아의 대표적인 빵과 초콜릿을 만나볼 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "Em-eukal 캔디, Perskindol 젤 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "과자 및 초콜릿",
        "description": "Manner 웨하스, Zotter 초콜릿 등이 인기입니다. 오스트리아의 대표적인 과자와 초콜릿을 만나볼 수 있습니다."
      },
      {
        "title": "드럭스토어 상품",
        "description": "DM 드럭스토어 천연 화장품, 비타민 등이 인기입니다. 오스트리아의 대표적인 드럭스토어입니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "오스트리아는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "ÖBB 앱으로 열차 티켓과 자리를 예약하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "빈에서는 Vienna Card나 일일 티켓을 구매할 수 있습니다. 지하철(U-Bahn), 트램, 버스에서 사용 가능하며, 티켓은 탑승 전에 반드시 개찰기에 찍어야 합니다. 검표가 수시로 이루어지므로 티켓을 항상 소지해야 합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "A1, Magenta eSIM/유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "알프스 여행 준비",
        "description": "알프스 지역 여행 시 방한복, 미끄럼 방지 신발을 준비하는 것이 좋습니다. 특히 겨울철에는 필수입니다."
      },
      {
        "title": "여행자 보험",
        "description": "겨울 스포츠 활동 커버 여부를 확인하는 여행자 보험 가입을 권장합니다. 스키나 스노보드를 즐길 계획이라면 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "오스트리아는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 따뜻하고 음악 축제가 많으며, 겨울(12~2월)은 추우나 알프스 스키와 크리스마스 마켓을 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Greeting Etiquette",
        "description": "When greeting, shake hands and make eye contact, using 'Grüß Gott' greeting. This is a traditional Austrian greeting."
      },
      {
        "title": "Tipping Culture",
        "description": "In Austria, restaurant tips are 5-10%; verbally state the amount when paying by card. It's polite to leave additional tips if the service was good. Rounding up for taxis is sufficient. For hotel bellboys, 1~2 euros per bag and 1~2 euros per day for housekeeping are typical."
      },
      {
        "title": "Public Transportation",
        "description": "Public transportation ticket checks are strict, so validate your ticket before boarding. Fines for fare evasion are high, so be careful."
      },
      {
        "title": "Concert/Opera Viewing",
        "description": "Dress code is required for concerts or opera viewing. Some upscale venues may require formal attire."
      },
      {
        "title": "Noise Caution",
        "description": "Reduce noise after 10 PM in quiet residential areas. Austrians value quiet residential environments."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Austria are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Chocolate and Merchandise",
        "description": "Mozart chocolate and Sound of Music merchandise are popular souvenirs. You can find representative Austrian cultural products."
      },
      {
        "title": "Traditional Crafts",
        "description": "Vienna porcelain and Swarovski crystal are popular. You can find traditional Austrian craftsmanship."
      },
      {
        "title": "Food",
        "description": "Alps herbal tea and Albert cocoa make great gifts. You can purchase representative Austrian foods."
      },
      {
        "title": "Alcohol",
        "description": "Austrian wine and schnapps are popular. You can find representative Austrian alcoholic beverages."
      },
      {
        "title": "Duty-Free Items",
        "description": "Bio hyaluronic cream is popular at duty-free shops. You can purchase it at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Cheese, sausages, and Alps honey from Spar Gourmet are popular. You can purchase representative Austrian ingredients at affordable prices."
      },
      {
        "title": "Billa Market",
        "description": "You can purchase sourdough bread and chocolate from Billa markets. You can find representative Austrian breads and chocolates."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Em-eukal candy and Perskindol gel are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Sweets and Chocolate",
        "description": "Manner wafers and Zotter chocolate are popular. You can find representative Austrian sweets and chocolates."
      },
      {
        "title": "Drugstore Products",
        "description": "Natural cosmetics and vitamins from DM drugstores are popular. This is a representative Austrian drugstore."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Austria uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to book train tickets and seats through the ÖBB app. Booking online in advance can get you discounts."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare A1 or Magenta eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Transportation Card",
        "description": "In Vienna, you can purchase a Vienna Card or daily tickets. These work on subways (U-Bahn), trams, and buses. Tickets must be validated at the machine before boarding. Ticket checks are frequent, so always carry your ticket."
      },
      {
        "title": "Alps Travel Preparation",
        "description": "It's good to prepare warm clothing and non-slip shoes for Alps region travel. This is especially essential in winter."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that checks winter sports activity coverage. If you plan to enjoy skiing or snowboarding, insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Austria is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is warm with many music festivals, while winter (December-February) is cold but great for Alpine skiing and Christmas markets."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(오스트리아 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Austria (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Vienna",
        "nameKo": "빈"
      },
      {
        "name": "Salzburg",
        "nameKo": "잘츠부르크"
      },
      {
        "name": "Innsbruck",
        "nameKo": "인스브루크"
      }
    ],
    "phraseSet": "german",
    "profile": {
      "capital": "Vienna",
      "capitalKo": "빈",
      "region": "Europe · Western Europe",
      "regionKo": "유럽 · 서유럽",
      "population": 9100000,
      "languages": [
        "German"
      ],
      "languagesKo": [
        "독일어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "china",
    "countryCode": "cn",
    "isoNumeric": 156,
    "center": {
      "lat": 35.8,
      "lng": 104
    },
    "name": "중국",
    "nameEn": "China",
    "keywords": [
      "중국",
      "china",
      "beijing",
      "shanghai"
    ],
    "flag": "🇨🇳",
    "languageCode": "zh-CN",
    "summary": "광활한 대륙을 여행하며 필요한 중국 여행 핵심 팁.",
    "summaryEn": "Essential tips for traveling across the vast continent of China.",
    "currency": {
      "code": "CNY",
      "name": "중국 위안",
      "nameEn": "Chinese Yuan",
      "symbol": "¥"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "대부분 팁 문화가 없지만, 고급 호텔/투어에서는 소액 팁을 주는 것이 좋습니다. 일반 레스토랑에서는 팁이 필요 없습니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서는 큰 소리로 통화하거나 밀치지 않도록 주의하시기 바랍니다. 중국인들은 조용한 공공장소를 선호합니다."
      },
      {
        "title": "보안 검사",
        "description": "공항, 기차역 보안 검사가 엄격하니 시간 여유를 두고 이동하시기 바랍니다. 특히 국제선 공항은 더욱 엄격합니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "일부 정부 시설, 군사 구역은 사진 촬영이 금지입니다. 방문 전 안내 표지판을 확인하시기 바랍니다."
      },
      {
        "title": "인터넷 접속",
        "description": "무료 VPN 사용은 제한되니 합법적인 방식으로 인터넷을 준비하시기 바랍니다. 중국에서는 많은 해외 웹사이트가 차단되어 있습니다."
      },
      {
        "title": "화장실 이용",
        "description": "중국의 공중화장실은 대부분 무료이지만, 일부는 유료입니다. 휴지가 없는 경우가 많으니 휴지를 준비하는 것이 좋습니다. 서양식 변기보다는 양변기가 많은 편입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "차 및 차 세트",
        "description": "차(푸얼, 자스민), 전통 차 세트 등이 인기 기념품입니다. 중국의 대표적인 차 문화를 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "중국 비단 스카프, 자수 소품 등이 인기입니다. 중국의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "향신료 및 소스",
        "description": "청두 마라 향신료, 훠궈 소스 등이 좋은 선물이 됩니다. 중국 요리를 집에서 재현할 수 있는 재료들을 구매할 수 있습니다."
      },
      {
        "title": "도자기 및 서예 도구",
        "description": "도자기, 중국식 서예 도구 등이 인기입니다. 중국의 전통 예술을 만나볼 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "중국 백주, 중의약 건강식품 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Hema, Ole 마트의 딤섬 밀키트, 훠궈 재료 등이 인기입니다. 중국의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상품",
        "description": "Watsons 약국의 백초, Yunnan Baiyao 파우더 등이 인기입니다. 중국의 전통 의약품을 구매할 수 있습니다."
      },
      {
        "title": "소셜커머스",
        "description": "현지 소셜커머스에서 구입하는 간식, 건조 과일 등이 좋은 선물이 됩니다. 중국의 다양한 간식들을 만나볼 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "플루스테톨 감기약, Tiger Balm 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "티 브랜드",
        "description": "茶颜悦色 등 인기 티 브랜드 보틀 음료가 인기입니다. 중국의 대표적인 티 브랜드를 만나볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "중국은 콘센트 타입 A/C/I (220V, 50Hz)를 사용합니다. 멀티어댑터를 준비하는 것이 좋으며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "결제 시스템",
        "description": "Alipay, WeChat Pay 실명 인증 및 외국인 카드 연동을 준비하는 것이 좋습니다. 중국에서는 현금보다 모바일 결제가 더 일반적입니다."
      },
      {
        "title": "교통카드",
        "description": "베이징, 상하이 등 대도시에서는 교통카드를 구매하거나 Alipay, WeChat Pay를 통해 모바일 결제로 대중교통을 이용할 수 있습니다. 지하철과 버스에서 사용 가능하며, 일부 지역에서는 QR 코드 스캔으로 결제합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "eSIM은 제한되니 공항에서 China Unicom, China Mobile 유심을 구입하는 것이 좋습니다. 온라인으로 미리 구매할 수도 있습니다."
      },
      {
        "title": "중국/홍콩 eSIM",
        "titleEn": "China/Hong Kong eSIM",
        "link": "https://link.coupang.com/a/c5SqEI",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrSV\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "고속철 예약",
        "description": "고속철(고속열차) 티켓은 30일 전부터 예매 가능합니다. 특히 명절이나 연휴 기간에는 예매가 어려울 수 있으니 미리 예약하시기 바랍니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료, 여행 지연, 비자 연장 비용을 포함한 여행자 보험 가입을 권장합니다. 중국은 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "중국은 봄(4~5월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(6~8월)은 매우 덥고 습하지만, 겨울(12~2월)은 북부 지역이 춥지만 남부 지역은 비교적 온화합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping culture is mostly absent, but it's good to give small tips in luxury hotels/tours. Tips are not required at regular restaurants."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Be careful not to make loud phone calls or push in public places. Chinese people prefer quiet public spaces."
      },
      {
        "title": "Security Checks",
        "description": "Security checks at airports and train stations are strict, so allow extra time. International airports are especially strict."
      },
      {
        "title": "Photography Rules",
        "description": "Photography is prohibited at some government facilities and military zones. Check signage before visiting."
      },
      {
        "title": "Internet Access",
        "description": "Free VPN usage is restricted, so prepare internet access through legal means. Many foreign websites are blocked in China."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in China are free, but some are paid. Toilet paper is often not provided, so it's good to prepare tissues. Squat toilets are more common than Western-style toilets."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Tea and Tea Sets",
        "description": "Tea (Pu'er, jasmine) and traditional tea sets are popular souvenirs. You can find representative Chinese tea culture."
      },
      {
        "title": "Traditional Crafts",
        "description": "Chinese silk scarves and embroidery items are popular. You can find traditional Chinese craftsmanship."
      },
      {
        "title": "Spices and Sauces",
        "description": "Chengdu mala spices and hot pot sauce make great gifts. You can purchase ingredients to recreate Chinese dishes at home."
      },
      {
        "title": "Ceramics and Calligraphy Tools",
        "description": "Ceramics and Chinese calligraphy tools are popular. You can find traditional Chinese arts."
      },
      {
        "title": "Duty-Free Items",
        "description": "Chinese baijiu and traditional Chinese medicine health products are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Dim sum meal kits and hot pot ingredients from Hema and Ole markets are popular. You can purchase representative Chinese ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Products",
        "description": "Bai Cao and Yunnan Baiyao powder from Watsons pharmacies are popular. You can purchase traditional Chinese medicines."
      },
      {
        "title": "Social Commerce",
        "description": "Snacks and dried fruit from local social commerce make great gifts. You can find a variety of Chinese snacks."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Plustel cold medicine and Tiger Balm are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Tea Brands",
        "description": "Popular tea brand bottled drinks like Chayanyuese are popular. You can find representative Chinese tea brands."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "China uses Type A/C/I plugs (220V, 50Hz). It's good to prepare a multi-adapter. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Payment System",
        "description": "It's good to prepare Alipay and WeChat Pay real-name verification and foreign card linking. Mobile payments are more common than cash in China."
      },
      {
        "title": "Internet Connection",
        "description": "eSIM is restricted, so it's good to purchase China Unicom or China Mobile SIM at the airport. You can also purchase online in advance."
      },
      {
        "title": "Transportation Card",
        "description": "In major cities like Beijing and Shanghai, you can purchase transportation cards or use mobile payments (Alipay, WeChat Pay) for public transportation. These work on subways and buses. In some areas, payment is made by scanning QR codes."
      },
      {
        "title": "High-Speed Rail Booking",
        "description": "High-speed rail tickets can be booked 30 days in advance. Especially during holidays or peak periods, booking may be difficult, so book in advance."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that includes medical, travel delay, and visa extension costs. Medical costs in China can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "China is best visited in spring (April-May) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (June-August) is very hot and humid, while winter (December-February) is cold in northern regions but relatively mild in southern regions."
      }
    ],
    "visa": [
      {
        "title": "비자 필요",
        "description": "한국인은 중국 입국 시 비자 신청이 필요합니다. 관광 비자는 보통 30일 단수 입국 비자이며, 중국 대사관이나 영사관에서 신청할 수 있습니다. 신청 시 여권, 사진, 항공권 예약 확인서, 숙박 예약 확인서가 필요합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa Required",
        "description": "US citizens need to apply for a visa to enter China. Tourist visas are typically single-entry visas valid for 30 days. You can apply at the Chinese embassy or consulate. Required documents include passport, photos, flight reservation, and accommodation confirmation."
      }
    ],
    "cities": [
      {
        "name": "Beijing",
        "nameKo": "베이징"
      },
      {
        "name": "Shanghai",
        "nameKo": "상하이"
      },
      {
        "name": "Guangzhou",
        "nameKo": "광저우"
      }
    ],
    "phraseSet": "chinese",
    "profile": {
      "capital": "Beijing",
      "capitalKo": "베이징",
      "region": "Asia · Eastern Asia",
      "regionKo": "아시아 · 동아시아",
      "population": 1410000000,
      "languages": [
        "Chinese"
      ],
      "languagesKo": [
        "중국어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "canada",
    "countryCode": "ca",
    "isoNumeric": 124,
    "center": {
      "lat": 57,
      "lng": -100
    },
    "name": "캐나다",
    "nameEn": "Canada",
    "keywords": [
      "캐나다",
      "canada",
      "toronto",
      "vancouver",
      "montreal"
    ],
    "flag": "🇨🇦",
    "languageCode": "en-CA",
    "summary": "다채로운 자연과 다문화가 공존하는 캐나다 여행 준비 가이드.",
    "summaryEn": "Preparation guide for traveling to Canada, where diverse nature and multiculturalism coexist.",
    "currency": {
      "code": "CAD",
      "name": "캐나다 달러",
      "nameEn": "Canadian Dollar",
      "symbol": "$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "캐나다에서는 레스토랑에서 15~20%의 팁이 일반적입니다. 계산서에 팁이 포함되어 있는지 확인하고, 포함되지 않았다면 적절한 팁을 남기는 것이 좋습니다. 택시는 요금의 10~15%를 팁으로 주는 경우가 있으며, 호텔 벨보이에게는 가방당 CA$1~2, 하우스키핑에는 하루 CA$2~5 정도가 일반적입니다."
      },
      {
        "title": "줄 서기 문화",
        "description": "줄 서기 문화가 강하니 항상 차례를 지키고 양보하시기 바랍니다. 캐나다인들은 줄 서기를 매우 중요하게 생각합니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 조용한 대화를 선호합니다."
      },
      {
        "title": "환경 보호",
        "description": "캐나다는 환경 보호에 민감하므로 쓰레기 분리수거를 철저히 하시기 바랍니다. 특히 밴쿠버 등 서부 지역에서는 더욱 엄격합니다."
      },
      {
        "title": "야간 안전",
        "description": "야간에는 인적 드문 골목을 피하고, 대중교통이나 라이드셰어(Uber, Lyft 등)를 이용하는 것이 안전합니다."
      },
      {
        "title": "화장실 이용",
        "description": "캐나다의 공중화장실은 대부분 무료이며, 쇼핑몰, 공원, 대중교통역 등에서 쉽게 찾을 수 있습니다. 휴지는 휴지통에 버리며, 일부 화장실에는 휴지가 없을 수 있으니 작은 휴지를 챙기는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "메이플 시럽",
        "description": "캐나다의 대표적인 기념품인 메이플 시럽이 인기입니다. 다양한 등급과 용량으로 구매할 수 있습니다."
      },
      {
        "title": "아이스 와인",
        "description": "온타리오와 브리티시컬럼비아에서 생산되는 아이스 와인이 인기입니다. 캐나다의 특산품입니다."
      },
      {
        "title": "전통 공예품",
        "description": "원주민 공예품, 인유어트 조각품 등이 좋은 선물이 됩니다. 캐나다의 독특한 문화를 만나볼 수 있습니다."
      },
      {
        "title": "캐나다산 꿀",
        "description": "캐나다산 꿀과 꿀 제품들이 인기입니다. 특히 클로버 꿀이 유명합니다."
      },
      {
        "title": "면세점 상품",
        "description": "캐나다산 위스키, 메이플 시럽 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Loblaws, Metro 마트의 메이플 시럽, 캐나다산 치즈, 연어 등이 인기입니다. 캐나다의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "Tylenol, Advil 진통제, Buckley's 감기약 등이 약국에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
      },
      {
        "title": "현지 브랜드",
        "description": "Tim Hortons 커피, 캐나다산 초콜릿 등이 인기입니다. 캐나다의 대표적인 브랜드를 만나볼 수 있습니다."
      },
      {
        "title": "건강식품",
        "description": "캐나다산 베리류, 견과류 등이 좋은 선물이 됩니다. 캐나다의 다양한 건강식품을 구매할 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 24시간 운영되는 편의점이 많습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "캐나다는 콘센트 타입 A/B (120V, 60Hz)를 사용합니다. 미국과 동일한 플러그를 사용하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "입국 서류",
        "description": "한국 국적자는 캐나다 입국 시 전자여행허가(eTA)를 반드시 신청해야 합니다. 공식 수수료는 약 CA$7이며, 캐나다 정부 공식 웹사이트에서 신청할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "Rogers, Bell, Telus eSIM/유심을 사전 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "미국/캐나다/멕시코 eSIM",
        "titleEn": "USA/Canada/Mexico eSIM",
        "link": "https://link.coupang.com/a/c5Skau",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrHa\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "토론토에서는 Presto 카드를, 밴쿠버에서는 Compass 카드를 구매할 수 있습니다. 지하철, 버스, 스카이트레인 등에서 사용 가능하며, 온라인으로 충전할 수 있습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료, 도난, 여행 지연 커버를 확인하는 여행자 보험 가입을 권장합니다. 캐나다는 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "캐나다는 여름(6~8월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 여름에는 날씨가 따뜻하고 야외 활동에 최적이며, 가을에는 단풍이 아름답습니다. 봄(4~5월)은 눈이 녹고 꽃이 피는 시기이며, 겨울(12~2월)은 매우 춥지만 스키를 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Canada, 15-20% tipping is common in restaurants. Check if tip is included in the bill, and if not, leave an appropriate tip. For taxis, 10-15% of the fare is typical. For hotel bellboys, CA$1-2 per bag and CA$2-5 per day for housekeeping are typical."
      },
      {
        "title": "Queuing Culture",
        "description": "Queuing culture is strong, so always maintain order and be courteous. Canadians take queuing very seriously."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid making loud phone calls or shouting in public places. Quiet conversation is preferred."
      },
      {
        "title": "Environmental Protection",
        "description": "Canada is sensitive to environmental protection, so be thorough with waste separation. This is especially strict in western regions like Vancouver."
      },
      {
        "title": "Night Safety",
        "description": "Avoid deserted alleys at night, and use public transportation or ride-sharing (Uber, Lyft, etc.) for safety."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Canada are free and can be easily found in shopping malls, parks, and public transportation stations. Dispose of toilet paper in trash bins. Some restrooms may not have toilet paper, so it's good to prepare tissues."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Maple Syrup",
        "description": "Maple syrup, Canada's representative souvenir, is popular. You can purchase it in various grades and sizes."
      },
      {
        "title": "Ice Wine",
        "description": "Ice wine produced in Ontario and British Columbia is popular. This is a Canadian specialty."
      },
      {
        "title": "Traditional Crafts",
        "description": "Indigenous crafts and Inuit carvings make great gifts. You can find unique Canadian culture."
      },
      {
        "title": "Canadian Honey",
        "description": "Canadian honey and honey products are popular. Clover honey is especially famous."
      },
      {
        "title": "Duty-Free Items",
        "description": "Canadian whiskey and maple syrup sets are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Maple syrup, Canadian cheese, and salmon from Loblaws and Metro markets are popular. You can purchase representative Canadian ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Products",
        "description": "Tylenol, Advil pain relievers, and Buckley's cold medicine are popular at pharmacies. These are over-the-counter medicines available without a prescription."
      },
      {
        "title": "Local Brands",
        "description": "Tim Hortons coffee and Canadian chocolate are popular. You can find representative Canadian brands."
      },
      {
        "title": "Health Foods",
        "description": "Canadian berries and nuts make great gifts. You can purchase a variety of Canadian health foods."
      },
      {
        "title": "Convenience Store Products",
        "description": "Convenience store coffee, energy drinks, and travel snacks are popular. Many convenience stores are open 24 hours."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Canada uses Type A/B plugs (120V, 60Hz). It uses the same plugs as the United States. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Entry Documents",
        "description": "Korean nationals must apply for an Electronic Travel Authorization (eTA) before entering Canada. The official fee is approximately CA$7, and you can apply on the official Canadian government website."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-prepare Rogers, Bell, or Telus eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Transportation Card",
        "description": "In Toronto, you can purchase a Presto card. In Vancouver, you can purchase a Compass card. These work on subways, buses, and SkyTrain. You can recharge them online."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Canada can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Canada is best visited in summer (June-August) and autumn (September-October). Summer has warm weather and is optimal for outdoor activities, while autumn features beautiful fall foliage. Spring (April-May) is when snow melts and flowers bloom, while winter (December-February) is very cold but great for skiing."
      }
    ],
    "visa": [
      {
        "title": "eTA 신청 필요",
        "description": "한국인은 캐나다 입국 시 eTA(전자여행허가) 신청이 필요합니다. 관광 목적으로 6개월간 체류 가능하며, 온라인으로 신청할 수 있습니다. 수수료는 약 CA$7이며, 승인까지 보통 몇 분에서 몇 시간 소요됩니다."
      }
    ],
    "visaEn": [
      {
        "title": "No Visa Required",
        "description": "US citizens do not need a visa to enter Canada. You can stay for up to 6 months for tourism purposes."
      }
    ],
    "cities": [
      {
        "name": "Toronto",
        "nameKo": "토론토"
      },
      {
        "name": "Vancouver",
        "nameKo": "밴쿠버"
      },
      {
        "name": "Montreal",
        "nameKo": "몬트리올"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Ottawa",
      "capitalKo": "오타와",
      "region": "Americas · North America",
      "regionKo": "아메리카 · 북아메리카",
      "population": 40000000,
      "languages": [
        "English",
        "French"
      ],
      "languagesKo": [
        "영어",
        "프랑스어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "hungary",
    "countryCode": "hu",
    "isoNumeric": 348,
    "center": {
      "lat": 47.2,
      "lng": 19.5
    },
    "name": "헝가리",
    "nameEn": "Hungary",
    "keywords": [
      "헝가리",
      "hungary",
      "budapest",
      "부다페스트"
    ],
    "flag": "🇭🇺",
    "languageCode": "hu-HU",
    "summary": "다뉴브 강과 역사가 흐르는 헝가리 여행 준비 가이드.",
    "summaryEn": "Preparation guide for traveling to Hungary, where the Danube River and history flow.",
    "currency": {
      "code": "HUF",
      "name": "포린트",
      "nameEn": "Hungarian Forint",
      "symbol": "Ft"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "헝가리에서는 레스토랑에서 10% 정도의 팁이 일반적입니다. 계산서에 서비스 요금이 포함되어 있는지 확인하고, 포함되지 않았다면 팁을 남기는 것이 좋습니다. 택시는 요금 반올림 정도로 팁을 주는 경우가 있으며, 호텔 벨보이에게는 가방당 500~1000 포린트, 하우스키핑에는 하루 500~1000 포린트 정도가 일반적입니다."
      },
      {
        "title": "인사 예절",
        "description": "인사 시 악수하며 눈을 맞추는 것이 좋습니다. 헝가리어로 'Jó napot'(안녕하세요)라고 인사하는 것이 예의입니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통 탑승 전에 티켓을 개찰기에 꼭 찍어야 합니다. 찍지 않으면 무임승차로 간주되어 높은 벌금이 부과될 수 있습니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 조용한 대화를 선호합니다."
      },
      {
        "title": "사진 촬영 규칙",
        "description": "일부 박물관이나 성 내부는 플래시 촬영이 금지되어 있으며, 일부 장소는 사진 촬영이 완전히 금지됩니다. 안내 표지판을 확인하시기 바랍니다."
      },
      {
        "title": "화장실 이용",
        "description": "헝가리의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "와인",
        "description": "헝가리의 대표적인 와인인 토카이 와인과 에그리 비커버(Egri Bikavér)가 인기입니다. 헝가리는 세계적인 와인 생산국입니다."
      },
      {
        "title": "파프리카",
        "description": "헝가리 파프리카 가루와 파프리카 페이스트가 인기 기념품입니다. 헝가리 요리의 핵심 재료입니다."
      },
      {
        "title": "헝가리 도자기",
        "description": "헝가리 전통 도자기와 수공예품이 좋은 선물이 됩니다. 헝가리의 전통 공예 기술을 만나볼 수 있습니다."
      },
      {
        "title": "헝가리 초콜릿",
        "description": "헝가리산 초콜릿과 과자가 인기입니다. 특히 부다페스트의 전통 과자점에서 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "헝가리 와인, 파프리카 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Tesco, Spar 마트의 파프리카, 헝가리 치즈, 살라미 등이 인기입니다. 헝가리의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "헝가리 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 베이커리",
        "description": "현지 베이커리에서 구매하는 전통 빵과 과자가 인기입니다. 헝가리의 전통 빵 문화를 만나볼 수 있습니다."
      },
      {
        "title": "시장 상품",
        "description": "부다페스트의 중앙시장에서 구매하는 파프리카, 꿀, 와인 등이 좋은 선물이 됩니다. 헝가리의 다양한 특산품을 구매할 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 24시간 운영되는 편의점이 많습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "헝가리는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "헝가리 철도 MÁV 앱과 모바일 탑승권을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "부다페스트에서는 Budapest Card나 BKK 일일/다회권 티켓을 구매할 수 있습니다. 지하철, 버스, 트램에서 사용 가능하며, Budapest Card는 주요 관광지 할인 혜택도 받을 수 있습니다. 티켓은 탑승 전에 반드시 개찰기에 찍어야 합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "유럽 eSIM 또는 Telekom, Vodafone 헝가리 유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "여행자 보험",
        "description": "의료, 도난, 여행 지연 커버를 확인하는 여행자 보험 가입을 권장합니다. 헝가리는 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "헝가리는 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 상대적으로 적습니다. 여름(7~8월)은 덥지만 다뉴브 강 유람을 즐기기에 좋고, 겨울(12~2월)은 추우나 크리스마스 마켓을 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Hungary, around 10% tipping is common in restaurants. Check if service charge is included in the bill, and if not, leave a tip. For taxis, rounding up the fare is common. For hotel bellboys, 500-1000 forints per bag and 500-1000 forints per day for housekeeping are typical."
      },
      {
        "title": "Greeting Etiquette",
        "description": "When greeting, shake hands and make eye contact. It's polite to greet in Hungarian with 'Jó napot' (Hello)."
      },
      {
        "title": "Public Transportation",
        "description": "Always validate your ticket at the machine before boarding public transportation. Failure to validate may result in a high fine for fare evasion."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid making loud phone calls or shouting in public places. Quiet conversation is preferred."
      },
      {
        "title": "Photography Rules",
        "description": "Flash photography is prohibited in some museums or castle interiors, and some places completely prohibit photography. Check signage."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Hungary are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Wine",
        "description": "Tokaji wine and Egri Bikavér, representative Hungarian wines, are popular. Hungary is a world-renowned wine-producing country."
      },
      {
        "title": "Paprika",
        "description": "Hungarian paprika powder and paprika paste are popular souvenirs. These are essential ingredients in Hungarian cuisine."
      },
      {
        "title": "Hungarian Pottery",
        "description": "Hungarian traditional ceramics and handicrafts make great gifts. You can find traditional Hungarian craftsmanship."
      },
      {
        "title": "Hungarian Chocolate",
        "description": "Hungarian chocolate and sweets are popular. You can especially purchase them at traditional confectioneries in Budapest."
      },
      {
        "title": "Duty-Free Items",
        "description": "Hungarian wine and paprika sets are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Paprika, Hungarian cheese, and salami from Tesco and Spar markets are popular. You can purchase representative Hungarian ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Hungarian pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Bakeries",
        "description": "Traditional breads and sweets from local bakeries are popular. You can find traditional Hungarian bread culture."
      },
      {
        "title": "Market Products",
        "description": "Paprika, honey, and wine purchased at Budapest's Central Market make great gifts. You can purchase a variety of Hungarian specialties."
      },
      {
        "title": "Convenience Store Products",
        "description": "Convenience store coffee, energy drinks, and travel snacks are popular. Many convenience stores are open 24 hours."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Hungary uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save the Hungarian Railway MÁV app and mobile tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "In Budapest, you can purchase a Budapest Card or BKK daily/multi-trip tickets. These work on subways, buses, and trams. The Budapest Card also offers discounts at major tourist attractions. Tickets must be validated at the machine before boarding."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare European eSIM or Telekom, Vodafone Hungary SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Hungary can be expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Hungary is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists. Summer (July-August) is hot but great for Danube River cruises, while winter (December-February) is cold but great for Christmas markets."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(헝가리 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Hungary (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Budapest",
        "nameKo": "부다페스트"
      }
    ],
    "phraseSet": "hungarian",
    "profile": {
      "capital": "Budapest",
      "capitalKo": "부다페스트",
      "region": "Europe · Central Europe",
      "regionKo": "유럽 · 중앙유럽",
      "population": 9600000,
      "languages": [
        "Hungarian"
      ],
      "languagesKo": [
        "헝가리어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "switzerland",
    "countryCode": "ch",
    "isoNumeric": 756,
    "center": {
      "lat": 46.8,
      "lng": 8.2
    },
    "name": "스위스",
    "nameEn": "Switzerland",
    "keywords": [
      "스위스",
      "switzerland",
      "zurich",
      "geneva",
      "bern",
      "취리히",
      "제네바"
    ],
    "flag": "🇨🇭",
    "languageCode": "de-CH",
    "summary": "알프스와 호수가 어우러진 스위스 여행 준비 가이드.",
    "summaryEn": "Preparation guide for traveling to Switzerland, where the Alps and lakes blend together.",
    "currency": {
      "code": "CHF",
      "name": "스위스 프랑",
      "nameEn": "Swiss Franc",
      "symbol": "Fr"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "스위스에서는 서비스 요금이 계산서에 포함되어 있어 팁이 필수는 아닙니다. 서비스에 만족했다면 소액의 팁(5~10%)을 남기는 것이 일반적입니다. 택시는 요금 반올림 정도로 팁을 주는 경우가 있으며, 호텔 벨보이에게는 가방당 2~5 프랑, 하우스키핑에는 하루 2~5 프랑 정도가 일반적입니다."
      },
      {
        "title": "시간 엄수",
        "description": "스위스인들은 시간 엄수를 매우 중요하게 생각합니다. 약속 시간에 늦지 않도록 주의하시기 바랍니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 조용한 대화를 선호하며, 소음에 민감합니다."
      },
      {
        "title": "대중교통 이용",
        "description": "대중교통에서 검표가 수시로 이루어지니 티켓을 꼭 소지하시기 바랍니다. 무임승차 시 높은 벌금이 부과되므로 주의가 필요합니다."
      },
      {
        "title": "환경 보호",
        "description": "스위스는 환경 보호에 매우 민감하므로 쓰레기 분리수거를 철저히 하시기 바랍니다. 재활용이 잘 발달되어 있습니다."
      },
      {
        "title": "화장실 이용",
        "description": "스위스의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "스위스 초콜릿",
        "description": "린트, 토블로네, 밀카 등 세계적으로 유명한 스위스 초콜릿이 인기 기념품입니다. 다양한 브랜드와 맛을 만나볼 수 있습니다."
      },
      {
        "title": "스위스 시계",
        "description": "롤렉스, 오메가, 스와치 등 스위스 시계가 인기입니다. 스위스는 세계적인 시계 제조국입니다."
      },
      {
        "title": "스위스 치즈",
        "description": "그뤼에르, 엠멘탈, 아펜첼러 등 스위스 치즈가 좋은 선물이 됩니다. 스위스의 대표적인 특산품입니다."
      },
      {
        "title": "스위스 아미 나이프",
        "description": "빅토리녹스, 웽거 등 스위스 아미 나이프가 인기입니다. 실용적이고 고품질의 스위스 제품입니다."
      },
      {
        "title": "면세점 상품",
        "description": "스위스 초콜릿 세트, 시계 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Coop, Migros 마트의 스위스 치즈, 초콜릿, 요구르트 등이 인기입니다. 스위스의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "스위스 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 베이커리",
        "description": "현지 베이커리에서 구매하는 전통 빵과 과자가 인기입니다. 스위스의 전통 빵 문화를 만나볼 수 있습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 치즈, 꿀, 와인 등이 좋은 선물이 됩니다. 스위스의 다양한 특산품을 구매할 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 24시간 운영되는 편의점이 많습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "스위스는 콘센트 타입 C/J (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, J형 플러그는 스위스 전용입니다. 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통 예약",
        "description": "스위스 철도 SBB 앱과 모바일 탑승권을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "스위스 패스(Swiss Travel Pass)를 구매하면 일정 기간 동안 기차, 버스, 보트를 무제한으로 이용할 수 있습니다. 각 도시별로도 일일 티켓을 구매할 수 있으며, 티켓은 탑승 전에 반드시 개찰기에 찍어야 합니다."
      },
      {
        "title": "인터넷 연결",
        "description": "유럽 eSIM 또는 Swisscom, Sunrise eSIM/유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴합니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "여행자 보험",
        "description": "의료, 도난, 여행 지연 커버를 확인하는 여행자 보험 가입을 권장합니다. 스위스는 의료비가 매우 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "스위스는 여름(6~8월)과 겨울(12~2월)이 가장 여행하기 좋은 시기입니다. 여름에는 날씨가 따뜻하고 하이킹, 호수 수영 등 야외 활동에 최적이며, 겨울에는 알프스 스키 리조트가 세계적으로 유명합니다. 봄(4~6월)과 가을(9~10월)도 온화하고 단풍이 아름다워 여행하기 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Switzerland, service charges are included in the bill, so tipping is not mandatory. If you're satisfied with the service, leaving a small tip (5-10%) is common. For taxis, rounding up the fare is typical. For hotel bellboys, 2-5 francs per bag and 2-5 francs per day for housekeeping are typical."
      },
      {
        "title": "Punctuality",
        "description": "Swiss people take punctuality very seriously. Be careful not to be late for appointments."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid making loud phone calls or shouting in public places. Quiet conversation is preferred, and people are sensitive to noise."
      },
      {
        "title": "Public Transportation",
        "description": "Ticket checks are frequent on public transportation, so always carry your ticket. Fines for fare evasion are high, so be careful."
      },
      {
        "title": "Environmental Protection",
        "description": "Switzerland is very sensitive to environmental protection, so be thorough with waste separation. Recycling is well developed."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Switzerland are paid, and you often need to order a drink or snack to use restrooms in cafes or restaurants. Restrooms at subway stations are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Swiss Chocolate",
        "description": "World-famous Swiss chocolates like Lindt, Toblerone, and Milka are popular souvenirs. You can find various brands and flavors."
      },
      {
        "title": "Swiss Watches",
        "description": "Swiss watches like Rolex, Omega, and Swatch are popular. Switzerland is a world-renowned watchmaking country."
      },
      {
        "title": "Swiss Cheese",
        "description": "Swiss cheeses like Gruyère, Emmental, and Appenzeller make great gifts. These are representative Swiss specialties."
      },
      {
        "title": "Swiss Army Knife",
        "description": "Swiss Army knives from brands like Victorinox and Wenger are popular. These are practical and high-quality Swiss products."
      },
      {
        "title": "Duty-Free Items",
        "description": "Swiss chocolate sets and watches are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "Swiss cheese, chocolate, and yogurt from Coop and Migros markets are popular. You can purchase representative Swiss ingredients at affordable prices."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Swiss pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Bakeries",
        "description": "Traditional breads and sweets from local bakeries are popular. You can find traditional Swiss bread culture."
      },
      {
        "title": "Market Products",
        "description": "Cheese, honey, and wine purchased at local markets make great gifts. You can purchase a variety of Swiss specialties."
      },
      {
        "title": "Convenience Store Products",
        "description": "Convenience store coffee, energy drinks, and travel snacks are popular. Many convenience stores are open 24 hours."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Switzerland uses Type C/J plugs (230V, 50Hz). You'll need a European-style plug. Type J plugs are specific to Switzerland. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save the Swiss Railway SBB app and mobile tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "Purchasing a Swiss Travel Pass allows unlimited travel on trains, buses, and boats for a certain period. You can also purchase daily tickets for each city. Tickets must be validated at the machine before boarding."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to prepare European eSIM or Swisscom, Sunrise eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Switzerland are very expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Switzerland is best visited in summer (June-August) and winter (December-February). Summer has warm weather and is optimal for hiking, lake swimming, and other outdoor activities, while winter features world-famous Alpine ski resorts. Spring (April-June) and autumn (September-October) are also mild with beautiful fall foliage, making them great for travel."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(스위스 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Switzerland (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Zurich",
        "nameKo": "취리히"
      },
      {
        "name": "Geneva",
        "nameKo": "제네바"
      },
      {
        "name": "Bern",
        "nameKo": "베른"
      }
    ],
    "phraseSet": "german",
    "profile": {
      "capital": "Bern",
      "capitalKo": "베른",
      "region": "Europe · Western Europe",
      "regionKo": "유럽 · 서유럽",
      "population": 8900000,
      "languages": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ],
      "languagesKo": [
        "독일어",
        "프랑스어",
        "이탈리아어",
        "로만슈어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "netherlands",
    "countryCode": "nl",
    "isoNumeric": 528,
    "center": {
      "lat": 52.2,
      "lng": 5.3
    },
    "name": "네덜란드",
    "nameEn": "Netherlands",
    "keywords": [
      "네덜란드",
      "netherlands",
      "holland",
      "amsterdam",
      "암스테르담",
      "로테르담",
      "rotterdam"
    ],
    "flag": "🇳🇱",
    "languageCode": "nl-NL",
    "summary": "운하와 튤립이 아름다운 네덜란드 여행을 위한 실용 가이드.",
    "summaryEn": "Practical guide for traveling to the Netherlands, beautiful with canals and tulips.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "직설적인 대화 스타일",
        "description": "네덜란드인들은 매우 직접적이고 솔직한 대화를 선호합니다. 이는 무례함이 아니라 문화적 특성입니다. 정중하지만 직접적인 소통 방식을 이해하시기 바랍니다."
      },
      {
        "title": "팁 문화",
        "description": "네덜란드에서는 서비스 요금이 계산서에 포함되어 있어 팁이 필수는 아닙니다. 서비스에 만족했다면 소액의 팁(5~10%)을 남기는 것이 일반적입니다. 카페에서는 반올림 정도로 충분합니다."
      },
      {
        "title": "자전거 문화",
        "description": "네덜란드는 자전거 천국입니다. 자전거 도로를 존중하고, 자전거 경로를 침범하지 않도록 주의하세요. 자전거를 빌려 타는 경우 교통 규칙을 반드시 숙지하시기 바랍니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 조용한 대화를 선호하며, 특히 대중교통에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "시간 엄수",
        "description": "네덜란드인들은 시간을 매우 중요하게 생각합니다. 약속 시간에 정확히 도착하는 것이 중요하며, 늦을 경우 미리 연락하는 것이 좋습니다."
      },
      {
        "title": "화장실 이용",
        "description": "네덜란드의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "델프트 블루 도자기",
        "description": "네덜란드의 대표적인 도자기인 델프트 블루가 인기 기념품입니다. 전통적인 파란색 패턴의 도자기 제품들이 좋은 선물이 됩니다."
      },
      {
        "title": "튤립 구근",
        "description": "네덜란드의 상징인 튤립 구근이 인기입니다. 공항에서 구매할 수 있으며, 한국으로 반입 시 검역 규정을 확인하시기 바랍니다."
      },
      {
        "title": "치즈",
        "description": "고우다, 에담 등 네덜란드 치즈가 대표적인 기념품입니다. 다양한 종류와 맛을 만나볼 수 있습니다."
      },
      {
        "title": "클로그(나무신발)",
        "description": "전통적인 네덜란드 나무신발인 클로그가 인기입니다. 장식용이나 실용적인 제품 모두 구매할 수 있습니다."
      },
      {
        "title": "스트루프와플",
        "description": "네덜란드의 대표적인 과자인 스트루프와플이 좋은 선물이 됩니다. 다양한 맛과 포장 형태로 판매됩니다."
      }
    ],
    "market": [
      {
        "title": "알버트 하인 마트",
        "description": "네덜란드의 대형 마트인 알버트 하인(Albert Heijn)에서 치즈, 유제품, 스트루프와플 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "네덜란드 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 베이커리",
        "description": "현지 베이커리에서 구매하는 전통 빵과 과자가 인기입니다. 네덜란드의 전통 빵 문화를 만나볼 수 있습니다."
      },
      {
        "title": "치즈 가게",
        "description": "전문 치즈 가게에서 다양한 네덜란드 치즈를 구매할 수 있습니다. 시식 후 구매할 수 있어 좋습니다."
      },
      {
        "title": "편의점 상품",
        "description": "편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 네덜란드의 편의점은 다양한 상품을 판매합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "네덜란드는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "OV-chipkaart를 구매하여 대중교통을 이용할 수 있습니다. 기차, 버스, 트램, 지하철 모두 사용 가능하며, 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "유럽 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. 네덜란드는 WiFi가 잘 발달되어 있어 많은 곳에서 무료 WiFi를 이용할 수 있습니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "자전거 대여",
        "description": "네덜란드 여행 시 자전거를 대여하는 것이 좋습니다. 많은 도시에서 자전거 대여 서비스를 제공하며, 현지인처럼 자전거로 이동할 수 있습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 네덜란드는 의료비가 비싸므로 보험 가입이 중요합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "네덜란드는 봄(4~5월)과 여름(6~8월)이 가장 여행하기 좋은 시기입니다. 봄에는 튤립 축제가 열리고, 여름에는 날씨가 따뜻하여 야외 활동을 즐기기 좋습니다. 가을(9~10월)과 겨울(12~2월)은 비가 많고 날씨가 흐리지만, 실내 관광지가 많아 여행하기 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Direct Communication Style",
        "description": "Dutch people prefer very direct and honest conversations. This is not rudeness but a cultural characteristic. Understand that they communicate politely but directly."
      },
      {
        "title": "Tipping Culture",
        "description": "In the Netherlands, service charges are included in the bill, so tipping is not mandatory. If you're satisfied with the service, leaving a small tip (5~10%) is common. At cafes, rounding up is sufficient."
      },
      {
        "title": "Bicycle Culture",
        "description": "The Netherlands is a cycling paradise. Respect bicycle lanes and be careful not to encroach on bicycle paths. If you rent a bicycle, make sure to understand traffic rules."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid making phone calls or shouting loudly in public places. They prefer quiet conversations, especially on public transportation."
      },
      {
        "title": "Punctuality",
        "description": "Dutch people value time very highly. It's important to arrive exactly on time for appointments, and it's good to contact in advance if you're going to be late."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in the Netherlands are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. Subway station restrooms are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Delft Blue Pottery",
        "description": "Delft Blue, the representative pottery of the Netherlands, is a popular souvenir. Traditional blue-patterned pottery products make great gifts."
      },
      {
        "title": "Tulip Bulbs",
        "description": "Tulip bulbs, a symbol of the Netherlands, are popular. You can purchase them at the airport, but check quarantine regulations when importing to Korea."
      },
      {
        "title": "Cheese",
        "description": "Dutch cheeses like Gouda and Edam are representative souvenirs. You can find various types and flavors."
      },
      {
        "title": "Clogs (Wooden Shoes)",
        "description": "Traditional Dutch wooden shoes called clogs are popular. You can purchase both decorative and practical products."
      },
      {
        "title": "Stroopwafels",
        "description": "Stroopwafels, a representative Dutch cookie, make great gifts. They're sold in various flavors and packaging."
      }
    ],
    "marketEn": [
      {
        "title": "Albert Heijn Market",
        "description": "You can purchase cheese, dairy products, and stroopwafels at affordable prices at Albert Heijn, a large Dutch supermarket."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Dutch pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Bakeries",
        "description": "Traditional breads and sweets from local bakeries are popular. You can experience traditional Dutch bread culture."
      },
      {
        "title": "Cheese Shops",
        "description": "You can purchase various Dutch cheeses at specialty cheese shops. It's great because you can try before buying."
      },
      {
        "title": "Convenience Store Products",
        "description": "Convenience store coffee, energy drinks, and travel snacks are popular. Dutch convenience stores sell a variety of products."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "The Netherlands uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "You can purchase an OV-chipkaart to use public transportation. It works on trains, buses, trams, and subways, and can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a European eSIM or buy a local SIM at the airport. The Netherlands has well-developed WiFi, so you can use free WiFi in many places."
      },
      {
        "title": "Bicycle Rental",
        "description": "It's good to rent a bicycle when traveling in the Netherlands. Many cities offer bicycle rental services, allowing you to travel like locals."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in the Netherlands are expensive, so insurance is important."
      },
      {
        "title": "Best Time to Visit",
        "description": "The Netherlands is best visited in spring (April-May) and summer (June-August). Spring features tulip festivals, and summer has warm weather perfect for outdoor activities. Autumn (September-October) and winter (December-February) are rainy and cloudy, but there are many indoor attractions making it good for travel."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(네덜란드 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter the Netherlands (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Amsterdam",
        "nameKo": "암스테르담"
      },
      {
        "name": "Rotterdam",
        "nameKo": "로테르담"
      },
      {
        "name": "The Hague",
        "nameKo": "헤이그"
      }
    ],
    "phraseSet": "dutch",
    "profile": {
      "capital": "Amsterdam",
      "capitalKo": "암스테르담",
      "region": "Europe · Western Europe",
      "regionKo": "유럽 · 서유럽",
      "population": 17900000,
      "languages": [
        "Dutch"
      ],
      "languagesKo": [
        "네덜란드어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "portugal",
    "countryCode": "pt",
    "isoNumeric": 620,
    "center": {
      "lat": 39.6,
      "lng": -8.2
    },
    "name": "포르투갈",
    "nameEn": "Portugal",
    "keywords": [
      "포르투갈",
      "포르투칼",
      "portugal",
      "리스본",
      "lisbon",
      "포르토",
      "porto"
    ],
    "flag": "🇵🇹",
    "languageCode": "pt-PT",
    "summary": "태양과 해안이 아름다운 포르투갈 여행을 위한 가이드.",
    "summaryEn": "Guide for traveling to Portugal, beautiful with sun and coastline.",
    "currency": {
      "code": "EUR",
      "name": "유로",
      "nameEn": "Euro",
      "symbol": "€"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "포르투갈에서는 서비스 요금이 계산서에 포함되어 있어 팁이 필수는 아닙니다. 서비스에 만족했다면 소액의 팁(5~10%)을 남기는 것이 일반적입니다. 카페에서는 반올림 정도로 충분합니다."
      },
      {
        "title": "식사 시간",
        "description": "포르투갈의 식사 시간은 한국보다 늦습니다. 점심은 보통 오후 1시~2시, 저녁은 오후 8시~9시에 시작합니다. 레스토랑은 보통 오후 7시 30분 이후에 열립니다."
      },
      {
        "title": "인사 예절",
        "description": "포르투갈인들은 따뜻하고 친근한 인사를 선호합니다. 만날 때와 헤어질 때 악수나 포옹을 하는 것이 일반적이며, 가까운 사이에서는 볼에 키스(beso)를 하는 경우도 있습니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하거나 소리지르는 것을 삼가세요. 조용한 대화를 선호하며, 특히 교회나 박물관에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "대중교통 이용",
        "description": "포르투갈의 대중교통은 깨끗하고 안전합니다. 리스본과 포르토에서는 교통카드를 구매하여 지하철, 버스, 트램을 이용할 수 있습니다. 티켓은 반드시 검증해야 합니다."
      },
      {
        "title": "화장실 이용",
        "description": "포르투갈의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 지하철역의 화장실도 보통 유료입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "포르투갈 와인",
        "description": "포르토 와인, 빈호 베르데 등 포르투갈의 대표적인 와인이 인기 기념품입니다. 다양한 가격대와 품질의 와인을 만나볼 수 있습니다."
      },
      {
        "title": "아줄레주 타일",
        "description": "포르투갈의 전통 타일인 아줄레주가 인기입니다. 작은 타일 제품이나 타일 패턴이 들어간 소품들이 좋은 선물이 됩니다."
      },
      {
        "title": "코르크 제품",
        "description": "포르투갈은 세계 최대 코르크 생산국입니다. 코르크 지갑, 가방, 신발 등 다양한 코르크 제품이 인기입니다."
      },
      {
        "title": "파스텔 드 나타",
        "description": "포르투갈의 대표적인 과자인 파스텔 드 나타(에그 타르트)가 좋은 선물이 됩니다. 공항에서도 구매할 수 있습니다."
      },
      {
        "title": "올리브 오일",
        "description": "고품질 포르투갈 올리브 오일이 인기입니다. 다양한 브랜드와 가격대가 있으며, 현지 마트에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Pingo Doce, Continente 등 대형 마트에서 올리브 오일, 와인, 치즈, 통조림 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "포르투갈 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 베이커리",
        "description": "현지 베이커리에서 구매하는 전통 빵과 과자가 인기입니다. 포르투갈의 전통 빵 문화를 만나볼 수 있습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 생선 등이 좋습니다. 포르투갈의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "편의점 커피, 에너지 음료, 여행 간식 등이 인기입니다. 포르투갈의 편의점은 다양한 상품을 판매합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "포르투갈은 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "리스본에서는 Lisboa Card, 포르토에서는 Andante 카드를 구매하여 대중교통을 이용할 수 있습니다. 기차, 버스, 지하철, 트램 모두 사용 가능하며, 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "유럽 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. 포르투갈은 WiFi가 잘 발달되어 있어 많은 곳에서 무료 WiFi를 이용할 수 있습니다."
      },
      {
        "title": "유럽 eSIM",
        "titleEn": "Europe eSIM",
        "link": "https://link.coupang.com/a/c5Smk3",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrKH\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 포르투갈은 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "포르투갈은 봄(4~6월)과 가을(9~10월)이 가장 여행하기 좋은 시기입니다. 날씨가 온화하고 관광객이 적어 편안하게 여행할 수 있습니다. 여름(7~8월)은 덥지만 해변을 즐기기 좋고, 겨울(12~2월)은 온화하지만 비가 많을 수 있습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "In Portugal, service charges are included in the bill, so tipping is not mandatory. If you're satisfied with the service, leaving a small tip (5~10%) is common. At cafes, rounding up is sufficient."
      },
      {
        "title": "Meal Times",
        "description": "Portuguese meal times are later than in Korea. Lunch is usually around 1-2 PM, and dinner starts around 8-9 PM. Restaurants usually open after 7:30 PM."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Portuguese people prefer warm and friendly greetings. Handshakes or hugs when meeting and parting are common, and close friends may kiss on the cheek (beso)."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Avoid making phone calls or shouting loudly in public places. They prefer quiet conversations, especially in churches and museums."
      },
      {
        "title": "Public Transportation",
        "description": "Public transportation in Portugal is clean and safe. In Lisbon and Porto, you can purchase transportation cards to use subways, buses, and trams. Tickets must be validated."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Portugal are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. Subway station restrooms are usually paid as well."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Portuguese Wine",
        "description": "Port wine, Vinho Verde, and other representative Portuguese wines are popular souvenirs. You can find various price ranges and qualities."
      },
      {
        "title": "Azulejo Tiles",
        "description": "Azulejo, traditional Portuguese tiles, are popular. Small tile products or items with tile patterns make great gifts."
      },
      {
        "title": "Cork Products",
        "description": "Portugal is the world's largest cork producer. Cork wallets, bags, shoes, and various cork products are popular."
      },
      {
        "title": "Pastel de Nata",
        "description": "Pastel de Nata (egg tart), a representative Portuguese pastry, makes a great gift. You can also purchase them at the airport."
      },
      {
        "title": "Olive Oil",
        "description": "High-quality Portuguese olive oil is popular. There are various brands and price ranges available at local markets."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase olive oil, wine, cheese, and canned goods at affordable prices at large supermarkets like Pingo Doce and Continente."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Portuguese pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Bakeries",
        "description": "Traditional breads and sweets from local bakeries are popular. You can experience traditional Portuguese bread culture."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and fish purchased at local markets are good. You can purchase various Portuguese ingredients."
      },
      {
        "title": "Convenience Store Products",
        "description": "Convenience store coffee, energy drinks, and travel snacks are popular. Portuguese convenience stores sell a variety of products."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Portugal uses Type C/F plugs (230V, 50Hz). You'll need a European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Lisbon, you can purchase a Lisboa Card, and in Porto, an Andante card to use public transportation. They work on trains, buses, subways, and trams, and can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a European eSIM or buy a local SIM at the airport. Portugal has well-developed WiFi, so you can use free WiFi in many places."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Portugal are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Portugal is best visited in spring (April-June) and autumn (September-October). The weather is mild and there are fewer tourists, making it comfortable for travel. Summer (July-August) is hot but great for beaches, while winter (December-February) is mild but can be rainy."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (Schengen)",
        "description": "한국인은 Schengen 지역(포르투갈 포함)에서 180일 중 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 3개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry (Schengen)",
        "description": "US citizens can enter Portugal (Schengen area) visa-free for up to 90 days within a 180-day period for tourism purposes. Your passport must be valid for at least 3 months."
      }
    ],
    "cities": [
      {
        "name": "Lisbon",
        "nameKo": "리스본"
      },
      {
        "name": "Porto",
        "nameKo": "포르투"
      },
      {
        "name": "Faro",
        "nameKo": "파루"
      }
    ],
    "phraseSet": "portuguese",
    "profile": {
      "capital": "Lisbon",
      "capitalKo": "리스본",
      "region": "Europe · Southern Europe",
      "regionKo": "유럽 · 남유럽",
      "population": 10400000,
      "languages": [
        "Portuguese"
      ],
      "languagesKo": [
        "포르투갈어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "philippines",
    "countryCode": "ph",
    "isoNumeric": 608,
    "center": {
      "lat": 12.8,
      "lng": 122
    },
    "name": "필리핀",
    "nameEn": "Philippines",
    "keywords": [
      "필리핀",
      "philippines",
      "마닐라",
      "manila",
      "세부",
      "cebu",
      "보라카이",
      "boracay"
    ],
    "flag": "🇵🇭",
    "languageCode": "fil-PH",
    "summary": "열대 해안과 따뜻한 사람들이 있는 필리핀 여행 가이드.",
    "summaryEn": "Guide for traveling to the Philippines, with tropical coasts and warm people.",
    "currency": {
      "code": "PHP",
      "name": "필리핀 페소",
      "nameEn": "Philippine Peso",
      "symbol": "₱"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "필리핀에서는 팁 문화가 일반적입니다. 레스토랑에서는 10% 정도의 팁을 남기는 것이 관례이며, 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 가방당 20~50 페소 정도가 일반적입니다."
      },
      {
        "title": "인사 예절",
        "description": "필리핀인들은 매우 친근하고 따뜻한 인사를 선호합니다. 'Mano po'라고 하며 어른의 손을 이마에 대는 전통적인 인사법이 있으며, 일반적으로 미소와 함께 인사하는 것이 좋습니다."
      },
      {
        "title": "시간 개념",
        "description": "필리핀은 '필리핀 타임'이라는 유연한 시간 개념이 있습니다. 약속 시간에 정확히 도착하는 것보다 약간 여유를 두는 것이 일반적이지만, 공식적인 약속은 시간을 지키는 것이 좋습니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하는 것은 일반적이지만, 교회나 박물관 등 조용한 장소에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "필리핀인들은 사진 촬영에 매우 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 어린이 사진을 찍을 때는 부모의 허락을 받는 것이 중요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "필리핀의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 휴지는 휴지통에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "진주 제품",
        "description": "필리핀은 세계적인 진주 생산국입니다. 진주 목걸이, 귀걸이, 반지 등 다양한 진주 제품이 인기입니다."
      },
      {
        "title": "바나나 칩",
        "description": "필리핀의 대표적인 과자인 바나나 칩이 좋은 선물이 됩니다. 다양한 맛과 포장 형태로 판매됩니다."
      },
      {
        "title": "망고 제품",
        "description": "망고 드라이드, 망고 쥬스, 망고 캔디 등 필리핀 망고 제품이 인기입니다. 필리핀 망고는 세계적으로 유명합니다."
      },
      {
        "title": "코코넛 제품",
        "description": "코코넛 오일, 코코넛 비누, 코코넛 캔디 등 다양한 코코넛 제품이 좋은 선물이 됩니다."
      },
      {
        "title": "핸드메이드 제품",
        "description": "필리핀의 전통 수공예품인 바구니, 매트, 천 제품 등이 인기입니다. 지역별로 특색 있는 제품을 만나볼 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "SM Supermarket, Robinsons 등 대형 마트에서 망고 제품, 바나나 칩, 코코넛 제품 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "필리핀 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 과일",
        "description": "시장에서 구매하는 신선한 망고, 파파야, 코코넛 등 열대 과일이 인기입니다. 필리핀의 다양한 과일을 만나볼 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven, Ministop 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 해산물, 과일, 채소 등이 좋습니다. 필리핀의 다양한 식재료를 구매할 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "필리핀은 콘센트 타입 A/B/C (220V, 60Hz)를 사용합니다. 미국식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "마닐라에서는 Beep 카드를 구매하여 지하철, 버스, 지하철을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "필리핀 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Globe, Smart 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "필리핀 eSIM",
        "titleEn": "Philippines eSIM",
        "link": "https://link.coupang.com/a/c5SjcD",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrEU\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "필리핀은 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 필리핀은 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "필리핀은 건기(11월~4월)가 가장 여행하기 좋은 시기입니다. 날씨가 맑고 습도가 낮아 편안하게 여행할 수 있습니다. 우기(5월~10월)는 비가 많지만 호텔 가격이 저렴합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is common in the Philippines. It's customary to leave about 10% tip at restaurants, and rounding up is sufficient for taxis. Hotel bellboys typically receive 20~50 pesos per bag."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Filipinos prefer very friendly and warm greetings. There's a traditional greeting called 'Mano po' where you place an elder's hand on your forehead, and generally greeting with a smile is good."
      },
      {
        "title": "Time Concept",
        "description": "The Philippines has a flexible time concept called 'Filipino Time'. It's common to have some flexibility rather than arriving exactly on time, but it's good to be punctual for official appointments."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Making phone calls loudly in public places is common, but it's polite to be quiet in places like churches and museums."
      },
      {
        "title": "Photography",
        "description": "Filipinos are very friendly about photography, but it's good to ask for permission before taking photos. Especially when taking photos of children, getting parental permission is important."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in the Philippines are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. It's common to dispose of toilet paper in trash bins."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Pearl Products",
        "description": "The Philippines is a world-renowned pearl producer. Various pearl products like necklaces, earrings, and rings are popular."
      },
      {
        "title": "Banana Chips",
        "description": "Banana chips, a representative Filipino snack, make great gifts. They're sold in various flavors and packaging."
      },
      {
        "title": "Mango Products",
        "description": "Mango dried, mango juice, mango candy, and other Philippine mango products are popular. Philippine mangoes are world-famous."
      },
      {
        "title": "Coconut Products",
        "description": "Various coconut products like coconut oil, coconut soap, and coconut candy make great gifts."
      },
      {
        "title": "Handmade Products",
        "description": "Traditional Filipino handicrafts like baskets, mats, and fabric products are popular. You can find regionally unique products."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase mango products, banana chips, and coconut products at affordable prices at large supermarkets like SM Supermarket and Robinsons."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Philippine pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Fruits",
        "description": "Fresh tropical fruits like mangoes, papayas, and coconuts purchased at markets are popular. You can experience various Philippine fruits."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven and Ministop. Many convenience stores are open 24 hours."
      },
      {
        "title": "Market Products",
        "description": "Fresh seafood, fruits, and vegetables purchased at local markets are good. You can purchase various Philippine ingredients."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "The Philippines uses Type A/B/C plugs (220V, 60Hz). You'll need a US-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Manila, you can purchase a Beep card to use subways, buses, and trains. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Philippine eSIM or buy a local SIM at the airport. Major carriers include Globe and Smart, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "The Philippines is still a cash-based society, so small cash is needed. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in the Philippines are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "The Philippines is best visited during the dry season (November-April). The weather is clear and humidity is low, making it comfortable for travel. The rainy season (May-October) has more rain but hotel prices are lower."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 30일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다. 30일 이상 체류하려면 비자 연장이 필요합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter the Philippines visa-free for up to 30 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket. Visa extension is required for stays longer than 30 days."
      }
    ],
    "cities": [
      {
        "name": "Manila",
        "nameKo": "마닐라"
      },
      {
        "name": "Cebu",
        "nameKo": "세부"
      },
      {
        "name": "Boracay",
        "nameKo": "보라카이"
      }
    ],
    "phraseSet": "filipino",
    "profile": {
      "capital": "Manila",
      "capitalKo": "마닐라",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 114000000,
      "languages": [
        "Filipino",
        "English"
      ],
      "languagesKo": [
        "필리핀어",
        "영어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "vietnam",
    "countryCode": "vn",
    "isoNumeric": 704,
    "center": {
      "lat": 16.5,
      "lng": 106
    },
    "name": "베트남",
    "nameEn": "Vietnam",
    "keywords": [
      "베트남",
      "vietnam",
      "하노이",
      "hanoi",
      "호치민",
      "ho chi minh",
      "다낭",
      "da nang"
    ],
    "flag": "🇻🇳",
    "languageCode": "vi-VN",
    "summary": "풍부한 역사와 맛있는 음식이 있는 베트남 여행 가이드.",
    "summaryEn": "Guide for traveling to Vietnam, with rich history and delicious food.",
    "currency": {
      "code": "VND",
      "name": "베트남 동",
      "nameEn": "Vietnamese Dong",
      "symbol": "₫"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "베트남에서는 팁 문화가 일반적이지 않지만, 서비스에 만족했다면 소액의 팁을 남기는 것이 좋습니다. 레스토랑에서는 5~10% 정도, 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 가방당 20,000~50,000동 정도의 팁을 주는 것이 좋습니다."
      },
      {
        "title": "인사 예절",
        "description": "베트남인들은 전통적으로 두 손을 모아 인사하는 'Chào'를 사용합니다. 어른께는 존경을 표하며 인사하는 것이 중요하며, 일반적으로 미소와 함께 인사하는 것이 좋습니다."
      },
      {
        "title": "신발 착용",
        "description": "베트남에서는 집이나 사원에 들어갈 때 신발을 벗는 것이 일반적입니다. 신발을 벗는 곳에 신발을 정리해서 두는 것이 예의입니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하는 것은 일반적이지만, 사원이나 박물관 등 조용한 장소에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "베트남인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 사원이나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "베트남의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 휴지는 휴지통에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "아오자이",
        "description": "베트남의 전통 의상인 아오자이가 인기 기념품입니다. 다양한 색상과 디자인의 아오자이를 만나볼 수 있습니다."
      },
      {
        "title": "커피",
        "description": "베트남 커피는 세계적으로 유명합니다. 로부스타 원두, 커피 필터, 커피 캡슐 등 다양한 커피 제품이 인기입니다."
      },
      {
        "title": "라크 제품",
        "description": "베트남의 전통 공예인 라크(칠기) 제품이 좋은 선물이 됩니다. 접시, 그릇, 장식품 등 다양한 라크 제품을 구매할 수 있습니다."
      },
      {
        "title": "비단 제품",
        "description": "베트남 비단 스카프, 드레스, 가방 등이 인기입니다. 하노이와 호치민에서 다양한 비단 제품을 만나볼 수 있습니다."
      },
      {
        "title": "향료",
        "description": "베트남의 전통 향료가 좋은 선물이 됩니다. 다양한 향의 향료와 향초를 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "VinMart, Co.opmart 등 대형 마트에서 커피, 향료, 라크 제품 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "베트남 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "현지 과일",
        "description": "시장에서 구매하는 신선한 열대 과일이 인기입니다. 용과, 람부탄, 망고스틴 등 베트남의 다양한 과일을 만나볼 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "Circle K, GS25 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 해산물, 과일, 채소 등이 좋습니다. 베트남의 다양한 식재료를 구매할 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "베트남은 콘센트 타입 A/C (220V, 50Hz)를 사용합니다. 미국식 또는 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "호치민에서는 버스 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "베트남 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Viettel, Vinaphone 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "베트남 eSIM",
        "titleEn": "Vietnam eSIM",
        "link": "https://link.coupang.com/a/c5Sgws",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrye\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "베트남은 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 베트남은 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "베트남은 건기(11월~4월)가 가장 여행하기 좋은 시기입니다. 날씨가 맑고 습도가 낮아 편안하게 여행할 수 있습니다. 우기(5월~10월)는 비가 많지만 호텔 가격이 저렴합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is not common in Vietnam, but it's good to leave a small tip if you're satisfied with the service. About 5~10% at restaurants and rounding up for taxis is sufficient. For hotel bellboys, 20,000~50,000 dong per bag is good."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Vietnamese people traditionally use 'Chào' with both hands together. It's important to show respect when greeting elders, and generally greeting with a smile is good."
      },
      {
        "title": "Shoe Etiquette",
        "description": "In Vietnam, it's common to remove shoes when entering homes or temples. It's polite to organize shoes neatly in the designated area."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Making phone calls loudly in public places is common, but it's polite to be quiet in places like temples and museums."
      },
      {
        "title": "Photography",
        "description": "Vietnamese people are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing temples or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Vietnam are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. It's common to dispose of toilet paper in trash bins."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Ao Dai",
        "description": "Ao Dai, the traditional Vietnamese dress, is a popular souvenir. You can find various colors and designs."
      },
      {
        "title": "Coffee",
        "description": "Vietnamese coffee is world-famous. Various coffee products like Robusta beans, coffee filters, and coffee capsules are popular."
      },
      {
        "title": "Lacquer Products",
        "description": "Lacquer (lacquerware) products, traditional Vietnamese crafts, make great gifts. You can purchase various lacquer products like plates, bowls, and decorations."
      },
      {
        "title": "Silk Products",
        "description": "Vietnamese silk scarves, dresses, and bags are popular. You can find various silk products in Hanoi and Ho Chi Minh City."
      },
      {
        "title": "Incense",
        "description": "Traditional Vietnamese incense makes a great gift. You can purchase various scents of incense and incense sticks."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase coffee, incense, and lacquer products at affordable prices at large supermarkets like VinMart and Co.opmart."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Vietnamese pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Local Fruits",
        "description": "Fresh tropical fruits purchased at markets are popular. You can experience various Vietnamese fruits like dragon fruit, rambutan, and mangosteen."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like Circle K and GS25. Many convenience stores are open 24 hours."
      },
      {
        "title": "Market Products",
        "description": "Fresh seafood, fruits, and vegetables purchased at local markets are good. You can purchase various Vietnamese ingredients."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Vietnam uses Type A/C plugs (220V, 50Hz). You'll need a US-style or European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Ho Chi Minh City, you can purchase a bus card to use public transportation. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Vietnamese eSIM or buy a local SIM at the airport. Major carriers include Viettel and Vinaphone, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Vietnam is still a cash-based society, so small cash is needed. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Vietnam are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Vietnam is best visited during the dry season (November-April). The weather is clear and humidity is low, making it comfortable for travel. The rainy season (May-October) has more rain but hotel prices are lower."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 15일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다. 15일 이상 체류하려면 비자 신청이 필요합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa Required",
        "description": "US citizens need to apply for a visa to enter Vietnam. Tourist visas are typically valid for 30 days. You can apply for an e-visa online or at the Vietnamese embassy/consulate. Required documents include passport, photos, and application form."
      }
    ],
    "cities": [
      {
        "name": "Hanoi",
        "nameKo": "하노이"
      },
      {
        "name": "Ho Chi Minh City",
        "nameKo": "호치민"
      },
      {
        "name": "Da Nang",
        "nameKo": "다낭"
      }
    ],
    "phraseSet": "vietnamese",
    "profile": {
      "capital": "Hanoi",
      "capitalKo": "하노이",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 100300000,
      "languages": [
        "Vietnamese"
      ],
      "languagesKo": [
        "베트남어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "australia",
    "countryCode": "au",
    "isoNumeric": 36,
    "center": {
      "lat": -25.5,
      "lng": 134
    },
    "name": "호주",
    "nameEn": "Australia",
    "keywords": [
      "호주",
      "오스트레일리아",
      "australia",
      "시드니",
      "sydney",
      "멜버른",
      "melbourne",
      "브리즈번",
      "brisbane"
    ],
    "flag": "🇦🇺",
    "languageCode": "en-AU",
    "summary": "다양한 자연 경관과 현대적인 도시를 갖춘 호주 여행 가이드.",
    "summaryEn": "Guide for traveling to Australia, with diverse natural landscapes and modern cities.",
    "currency": {
      "code": "AUD",
      "name": "호주 달러",
      "nameEn": "Australian Dollar",
      "symbol": "A$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "호주에서는 팁 문화가 일반적이지 않습니다. 레스토랑에서 서비스에 만족했다면 10% 정도의 팁을 남길 수 있지만, 필수는 아닙니다. 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 가방당 AU$1~2 정도의 팁을 주는 경우가 있습니다."
      },
      {
        "title": "인사 예절",
        "description": "호주인들은 캐주얼하고 친근한 인사를 선호합니다. 'G'day' (안녕)나 'How are you?' 같은 캐주얼한 인사가 일반적이며, 악수나 포옹도 자연스럽게 받아들입니다."
      },
      {
        "title": "공공장소 예의",
        "description": "호주에서는 공공장소에서 큰 소리로 통화하는 것을 피하는 것이 좋습니다. 대중교통에서는 조용히 하는 것이 예의이며, 특히 아침 출퇴근 시간대에는 더욱 조용히 해야 합니다."
      },
      {
        "title": "환경 보호",
        "description": "호주는 환경 보호에 매우 민감합니다. 쓰레기를 함부로 버리지 말고, 해변과 공원에서는 특히 깨끗하게 유지하는 것이 중요합니다. 일회용 플라스틱 사용을 최소화하는 것이 좋습니다."
      },
      {
        "title": "야생동물",
        "description": "호주에는 독특한 야생동물이 많습니다. 동물에게 먹이를 주지 말고, 안전 거리를 유지하는 것이 중요합니다. 특히 캥거루나 코알라 같은 동물을 만날 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "호주의 공중화장실은 대부분 무료이며 깨끗합니다. 쇼핑몰, 공원, 해변 등에서 쉽게 찾을 수 있습니다. 휴지는 변기에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "울 제품",
        "description": "호주산 양모(울) 제품이 인기입니다. 울 스웨터, 담요, 부츠 등 다양한 울 제품을 구매할 수 있습니다. 특히 메리노 울 제품이 고품질로 유명합니다."
      },
      {
        "title": "오팔",
        "description": "호주는 세계 최대의 오팔 생산국입니다. 오팔 보석, 장신구 등이 좋은 기념품이 됩니다. 정품 인증서와 함께 구매하는 것이 좋습니다."
      },
      {
        "title": "티트리 오일",
        "description": "호주 원산지의 티트리 오일이 인기입니다. 항균 효과가 뛰어나며, 다양한 스킨케어 제품으로 구매할 수 있습니다."
      },
      {
        "title": "베지마이트",
        "description": "호주의 대표적인 식품인 베지마이트가 좋은 선물이 됩니다. 토스트에 발라 먹는 발효 식품으로, 호주인들이 즐겨 먹는 전통 음식입니다."
      },
      {
        "title": "와인",
        "description": "호주는 세계적인 와인 생산국입니다. 바롱가, 헌터 밸리, 마가렛 리버 등 주요 와인 산지의 와인이 인기입니다."
      }
    ],
    "market": [
      {
        "title": "대형마트 추천템",
        "description": "Woolworths, Coles 등 대형마트에서 베지마이트, 티모탐 쿠키, 호주산 꿀, 와인 등을 구매할 수 있습니다. PB 제품도 가성비가 좋습니다."
      },
      {
        "title": "약국 상비약",
        "description": "Chemist Warehouse, Priceline 등 약국에서 일반의약품을 구매할 수 있습니다. 처방전 없이 구매 가능한 제품들이 많습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven, BP Connect 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "면세점 상품",
        "description": "공항 면세점에서 호주산 와인, 울 제품, 오팔 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      },
      {
        "title": "시장 상품",
        "description": "퀸즈 빅토리아 마켓(멜버른), 파디스 마켓(시드니) 등 지역 시장에서 신선한 과일, 채소, 해산물 등을 구매할 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "호주는 콘센트 타입 I (240V, 50Hz)를 사용합니다. 3핀 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "시드니에서는 Opal 카드, 멜버른에서는 Myki 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "호주 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Telstra, Optus, Vodafone 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "현금 준비",
        "description": "호주는 카드 결제가 일반적이지만, 소액 현금이 필요할 수 있습니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 호주는 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "호주는 계절이 반대이므로, 한국의 겨울(호주의 여름, 12월~2월)이 가장 여행하기 좋은 시기입니다. 날씨가 따뜻하고 해변을 즐기기에 좋습니다. 가을(3월~5월)과 봄(9월~11월)도 날씨가 좋아 여행하기 적합합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is not common in Australia. You can leave about 10% tip at restaurants if you're satisfied with the service, but it's not mandatory. Rounding up for taxis is sufficient. For hotel bellboys, AU$1~2 per bag is sometimes given."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Australians prefer casual and friendly greetings. Casual greetings like 'G'day' or 'How are you?' are common, and handshakes or hugs are naturally accepted."
      },
      {
        "title": "Public Place Etiquette",
        "description": "In Australia, it's good to avoid making loud phone calls in public places. It's polite to be quiet on public transportation, especially during morning rush hours."
      },
      {
        "title": "Environmental Protection",
        "description": "Australia is very sensitive to environmental protection. Don't litter, and it's important to keep beaches and parks especially clean. It's good to minimize the use of single-use plastics."
      },
      {
        "title": "Wildlife",
        "description": "Australia has many unique wild animals. Don't feed animals and it's important to maintain a safe distance. Be careful especially when encountering animals like kangaroos or koalas."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Australia are mostly free and clean. You can easily find them at shopping malls, parks, and beaches. It's common to flush toilet paper down the toilet."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Wool Products",
        "description": "Australian wool products are popular. You can purchase various wool products like sweaters, blankets, and boots. Merino wool products are especially famous for their high quality."
      },
      {
        "title": "Opal",
        "description": "Australia is the world's largest producer of opals. Opal jewelry and accessories make great souvenirs. It's good to purchase with an authenticity certificate."
      },
      {
        "title": "Tea Tree Oil",
        "description": "Tea tree oil from Australia is popular. It has excellent antibacterial effects and can be purchased as various skincare products."
      },
      {
        "title": "Vegemite",
        "description": "Vegemite, a representative Australian food, makes a great gift. It's a fermented food spread on toast, a traditional food that Australians enjoy."
      },
      {
        "title": "Wine",
        "description": "Australia is a world-class wine producer. Wines from major wine regions like Barossa, Hunter Valley, and Margaret River are popular."
      }
    ],
    "marketEn": [
      {
        "title": "Supermarket Recommendations",
        "description": "You can purchase Vegemite, Tim Tam cookies, Australian honey, and wine at large supermarkets like Woolworths and Coles. Private label products also offer good value."
      },
      {
        "title": "Pharmacy Products",
        "description": "You can purchase over-the-counter medicines at pharmacies like Chemist Warehouse and Priceline. Many products are available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven and BP Connect. Many convenience stores are open 24 hours."
      },
      {
        "title": "Duty-Free Products",
        "description": "You can purchase Australian wine, wool products, and opals at airport duty-free shops. You can receive duty-free benefits, making prices cheaper."
      },
      {
        "title": "Market Products",
        "description": "You can purchase fresh fruits, vegetables, and seafood at local markets like Queen Victoria Market (Melbourne) and Paddy's Market (Sydney)."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Australia uses Type I plugs (240V, 50Hz). You'll need a 3-pin plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Sydney, you can purchase an Opal card, and in Melbourne, a Myki card to use public transportation. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase an Australian eSIM or buy a local SIM at the airport. Major carriers include Telstra, Optus, and Vodafone, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Australia commonly uses card payments, but you may need small cash. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Australia are expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Since Australia's seasons are opposite, Korea's winter (Australia's summer, December-February) is the best time to visit. The weather is warm and great for enjoying beaches. Autumn (March-May) and spring (September-November) also have good weather for travel."
      }
    ],
    "visa": [
      {
        "title": "eVisitor 신청 필요",
        "description": "한국인은 호주 입국 시 eVisitor(전자여행허가) 신청이 필요합니다. 관광 목적으로 3개월간 체류 가능하며, 온라인으로 무료 신청할 수 있습니다. 승인까지 보통 즉시 또는 몇 시간 내 소요됩니다."
      }
    ],
    "visaEn": [
      {
        "title": "ETA Required",
        "description": "US citizens need to apply for an ETA (Electronic Travel Authority) to enter Australia. You can stay for up to 3 months for tourism purposes. The ETA can be applied for online and is usually approved within minutes."
      }
    ],
    "cities": [
      {
        "name": "Sydney",
        "nameKo": "시드니"
      },
      {
        "name": "Melbourne",
        "nameKo": "멜버른"
      },
      {
        "name": "Brisbane",
        "nameKo": "브리즈번"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Canberra",
      "capitalKo": "캔버라",
      "region": "Oceania · Australia and New Zealand",
      "regionKo": "오세아니아 · 호주/뉴질랜드",
      "population": 26700000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "thailand",
    "countryCode": "th",
    "isoNumeric": 764,
    "center": {
      "lat": 15.2,
      "lng": 101
    },
    "name": "태국",
    "nameEn": "Thailand",
    "keywords": [
      "태국",
      "thailand",
      "방콕",
      "bangkok",
      "치앙마이",
      "chiang mai",
      "푸켓",
      "phuket"
    ],
    "flag": "🇹🇭",
    "languageCode": "th-TH",
    "summary": "풍부한 문화와 맛있는 음식이 있는 태국 여행 가이드.",
    "summaryEn": "Guide for traveling to Thailand, with rich culture and delicious food.",
    "currency": {
      "code": "THB",
      "name": "태국 바트",
      "nameEn": "Thai Baht",
      "symbol": "฿"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "태국에서는 팁 문화가 일반적입니다. 레스토랑에서는 10% 정도, 택시에서는 반올림 정도로 충분합니다. 마사지나 스파에서는 50~100바트 정도의 팁을 주는 것이 좋습니다. 호텔 벨보이에게는 가방당 20~50바트 정도의 팁을 주는 것이 좋습니다."
      },
      {
        "title": "인사 예절",
        "description": "태국인들은 전통적으로 '와이' (합장 인사)를 사용합니다. 어른께는 존경을 표하며 인사하는 것이 중요하며, 일반적으로 미소와 함께 인사하는 것이 좋습니다."
      },
      {
        "title": "신발 착용",
        "description": "태국에서는 사원이나 집에 들어갈 때 신발을 벗는 것이 일반적입니다. 신발을 벗는 곳에 신발을 정리해서 두는 것이 예의입니다."
      },
      {
        "title": "왕실 존경",
        "description": "태국인들은 왕실을 매우 존경합니다. 왕실 관련 사진이나 초상화를 함부로 다루지 말고, 왕실에 대한 비판적인 발언을 피하는 것이 좋습니다."
      },
      {
        "title": "사진 촬영",
        "description": "태국인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 사원이나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "태국의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 휴지는 휴지통에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "태국 실크",
        "description": "태국 실크 제품이 인기입니다. 실크 스카프, 드레스, 가방 등 다양한 실크 제품을 구매할 수 있습니다."
      },
      {
        "title": "태국 향료",
        "description": "태국의 전통 향료가 좋은 선물이 됩니다. 다양한 향의 향료와 향초를 구매할 수 있습니다."
      },
      {
        "title": "태국 커피",
        "description": "태국 커피 원두와 인스턴트 커피가 인기입니다. 특히 치앙마이 지역의 커피가 유명합니다."
      },
      {
        "title": "태국 과자",
        "description": "태국 전통 과자와 쿠키가 좋은 선물이 됩니다. 코코넛 과자, 참깨 과자 등 다양한 과자를 구매할 수 있습니다."
      },
      {
        "title": "태국 마사지 오일",
        "description": "태국 전통 마사지 오일이 인기입니다. 다양한 향의 마사지 오일을 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "7-Eleven, Big C, Tesco Lotus 등 대형 마트에서 태국 과자, 커피, 향료 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "태국 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 해산물 등이 좋습니다. 태국의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "공항 면세점에서 태국산 향료, 커피, 실크 제품 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "태국은 콘센트 타입 A/C (220V, 50Hz)를 사용합니다. 미국식 또는 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "방콕에서는 BTS 스카이트레인 카드나 MRT 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "태국 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. AIS, True, dtac 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "현금 준비",
        "description": "태국은 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 태국은 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "태국은 건기(11월~4월)가 가장 여행하기 좋은 시기입니다. 날씨가 맑고 습도가 낮아 편안하게 여행할 수 있습니다. 우기(5월~10월)는 비가 많지만 호텔 가격이 저렴합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is common in Thailand. About 10% at restaurants and rounding up for taxis is sufficient. For massages or spas, it's good to tip about 50~100 baht. For hotel bellboys, 20~50 baht per bag is good."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Thai people traditionally use 'Wai' (prayer-like greeting). It's important to show respect when greeting elders, and generally greeting with a smile is good."
      },
      {
        "title": "Shoe Etiquette",
        "description": "In Thailand, it's common to remove shoes when entering temples or homes. It's polite to organize shoes neatly in the designated area."
      },
      {
        "title": "Royal Respect",
        "description": "Thai people greatly respect the royal family. Don't handle royal photos or portraits carelessly, and avoid critical comments about the royal family."
      },
      {
        "title": "Photography",
        "description": "Thai people are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing temples or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Thailand are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. It's common to dispose of toilet paper in trash bins."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Thai Silk",
        "description": "Thai silk products are popular. You can purchase various silk products like scarves, dresses, and bags."
      },
      {
        "title": "Thai Spices",
        "description": "Traditional Thai spices make great gifts. You can purchase various scents of spices and incense."
      },
      {
        "title": "Thai Coffee",
        "description": "Thai coffee beans and instant coffee are popular. Coffee from the Chiang Mai region is especially famous."
      },
      {
        "title": "Thai Snacks",
        "description": "Traditional Thai snacks and cookies make great gifts. You can purchase various snacks like coconut snacks and sesame snacks."
      },
      {
        "title": "Thai Massage Oil",
        "description": "Traditional Thai massage oils are popular. You can purchase various scents of massage oils."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Thai snacks, coffee, and spices at affordable prices at large supermarkets like 7-Eleven, Big C, and Tesco Lotus."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Thai pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven. Many convenience stores are open 24 hours."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and seafood purchased at local markets are good. You can purchase various Thai ingredients."
      },
      {
        "title": "Duty-Free Products",
        "description": "You can purchase Thai spices, coffee, and silk products at airport duty-free shops. You can receive duty-free benefits, making prices cheaper."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Thailand uses Type A/C plugs (220V, 50Hz). You'll need a US-style or European-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Bangkok, you can purchase a BTS Skytrain card or MRT card to use public transportation. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Thai eSIM or buy a local SIM at the airport. Major carriers include AIS, True, and dtac, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Thailand is still a cash-based society, so small cash is needed. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Thailand are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Thailand is best visited during the dry season (November-April). The weather is clear and humidity is low, making it comfortable for travel. The rainy season (May-October) has more rain but hotel prices are lower."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Thailand visa-free for up to 30 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket. For longer stays, a visa extension or tourist visa is required."
      }
    ],
    "cities": [
      {
        "name": "Bangkok",
        "nameKo": "방콕"
      },
      {
        "name": "Chiang Mai",
        "nameKo": "치앙마이"
      },
      {
        "name": "Phuket",
        "nameKo": "푸켓"
      }
    ],
    "phraseSet": "thai",
    "profile": {
      "capital": "Bangkok",
      "capitalKo": "방콕",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 71600000,
      "languages": [
        "Thai"
      ],
      "languagesKo": [
        "태국어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "taiwan",
    "countryCode": "tw",
    "isoNumeric": 158,
    "center": {
      "lat": 23.7,
      "lng": 121
    },
    "name": "대만",
    "nameEn": "Taiwan",
    "keywords": [
      "대만",
      "taiwan",
      "타이완",
      "타이베이",
      "taipei",
      "가오슝",
      "kaohsiung"
    ],
    "flag": "🇹🇼",
    "languageCode": "zh-TW",
    "summary": "풍부한 역사와 맛있는 음식이 있는 대만 여행 가이드.",
    "summaryEn": "Guide for traveling to Taiwan, with rich history and delicious food.",
    "currency": {
      "code": "TWD",
      "name": "신대만 달러",
      "nameEn": "New Taiwan Dollar",
      "symbol": "NT$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "대만에서는 팁 문화가 일반적이지 않습니다. 레스토랑에서 서비스에 만족했다면 소액의 팁을 남길 수 있지만, 필수는 아닙니다."
      },
      {
        "title": "인사 예절",
        "description": "대만인들은 전통적으로 두 손을 모아 인사하는 것을 선호합니다. 어른께는 존경을 표하며 인사하는 것이 중요합니다."
      },
      {
        "title": "신발 착용",
        "description": "대만에서는 사원이나 집에 들어갈 때 신발을 벗는 것이 일반적입니다. 신발을 벗는 곳에 신발을 정리해서 두는 것이 예의입니다."
      },
      {
        "title": "공공장소 예의",
        "description": "공공장소에서 큰 소리로 통화하는 것은 일반적이지만, 사원이나 박물관 등 조용한 장소에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "대만인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 사원이나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "대만의 공중화장실은 대부분 무료이며 깨끗합니다. 쇼핑몰, 공원, 지하철역 등에서 쉽게 찾을 수 있습니다. 휴지는 변기에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "대만 차",
        "description": "대만의 전통 차가 인기입니다. 동정산 우롱차, 알리산 차 등 다양한 차를 구매할 수 있습니다."
      },
      {
        "title": "대만 과자",
        "description": "대만 전통 과자와 쿠키가 좋은 선물이 됩니다. 파인애플 케이크, 태양병 등 다양한 과자를 구매할 수 있습니다."
      },
      {
        "title": "대만 향료",
        "description": "대만의 전통 향료가 좋은 선물이 됩니다. 다양한 향의 향료와 향초를 구매할 수 있습니다."
      },
      {
        "title": "대만 공예품",
        "description": "대만의 전통 공예품이 인기입니다. 도자기, 목공예품 등 다양한 공예품을 구매할 수 있습니다."
      },
      {
        "title": "대만 화장품",
        "description": "대만 화장품 브랜드의 제품이 인기입니다. 마이 스키니, 메디힐 등 다양한 브랜드를 만나볼 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "7-Eleven, FamilyMart, PX Mart 등 대형 마트에서 대만 과자, 차, 향료 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "대만 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven, FamilyMart 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 해산물 등이 좋습니다. 대만의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "공항 면세점에서 대만산 차, 과자, 향료 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "대만은 콘센트 타입 A (110V, 60Hz)를 사용합니다. 미국식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "타이베이에서는 EasyCard를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "대만 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Chunghwa Telecom, Taiwan Mobile 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "현금 준비",
        "description": "대만은 카드 결제가 일반적이지만, 소액 현금이 필요할 수 있습니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 대만은 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "대만은 봄(3월~5월)과 가을(9월~11월)이 가장 여행하기 좋은 시기입니다. 날씨가 좋고 습도가 낮아 편안하게 여행할 수 있습니다. 여름(6월~8월)은 더우지만 해변을 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is not common in Taiwan. You can leave a small tip at restaurants if you're satisfied with the service, but it's not mandatory."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Taiwanese people traditionally prefer greeting with both hands together. It's important to show respect when greeting elders."
      },
      {
        "title": "Shoe Etiquette",
        "description": "In Taiwan, it's common to remove shoes when entering temples or homes. It's polite to organize shoes neatly in the designated area."
      },
      {
        "title": "Public Place Etiquette",
        "description": "Making phone calls loudly in public places is common, but it's polite to be quiet in places like temples and museums."
      },
      {
        "title": "Photography",
        "description": "Taiwanese people are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing temples or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Taiwan are mostly free and clean. You can easily find them at shopping malls, parks, and subway stations. It's common to flush toilet paper down the toilet."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Taiwanese Tea",
        "description": "Traditional Taiwanese tea is popular. You can purchase various teas like Dong Ding Oolong tea and Alishan tea."
      },
      {
        "title": "Taiwanese Snacks",
        "description": "Traditional Taiwanese snacks and cookies make great gifts. You can purchase various snacks like pineapple cakes and sun cakes."
      },
      {
        "title": "Taiwanese Spices",
        "description": "Traditional Taiwanese spices make great gifts. You can purchase various scents of spices and incense."
      },
      {
        "title": "Taiwanese Crafts",
        "description": "Traditional Taiwanese crafts are popular. You can purchase various crafts like ceramics and woodwork."
      },
      {
        "title": "Taiwanese Cosmetics",
        "description": "Products from Taiwanese cosmetic brands are popular. You can find various brands like My Scheming and Mediheal."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Taiwanese snacks, tea, and spices at affordable prices at large supermarkets like 7-Eleven, FamilyMart, and PX Mart."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Taiwanese pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven and FamilyMart. Many convenience stores are open 24 hours."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and seafood purchased at local markets are good. You can purchase various Taiwanese ingredients."
      },
      {
        "title": "Duty-Free Products",
        "description": "You can purchase Taiwanese tea, snacks, and spices at airport duty-free shops. You can receive duty-free benefits, making prices cheaper."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Taiwan uses Type A plugs (110V, 60Hz). You'll need a US-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Taipei, you can purchase an EasyCard to use public transportation. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Taiwanese eSIM or buy a local SIM at the airport. Major carriers include Chunghwa Telecom and Taiwan Mobile, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Taiwan commonly uses card payments, but you may need small cash. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Taiwan are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Taiwan is best visited in spring (March-May) and autumn (September-November). The weather is good and humidity is low, making it comfortable for travel. Summer (June-August) is hot but great for enjoying beaches."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Taiwan visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Taipei",
        "nameKo": "타이베이"
      },
      {
        "name": "Kaohsiung",
        "nameKo": "가오슝"
      },
      {
        "name": "Taichung",
        "nameKo": "타이중"
      }
    ],
    "phraseSet": "chinese",
    "profile": {
      "capital": "Taipei",
      "capitalKo": "타이베이",
      "region": "Asia · Eastern Asia",
      "regionKo": "아시아 · 동아시아",
      "population": 23400000,
      "languages": [
        "Mandarin Chinese"
      ],
      "languagesKo": [
        "중국어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "hong-kong",
    "countryCode": "hk",
    "isoNumeric": null,
    "center": {
      "lat": 22.32,
      "lng": 114.17
    },
    "name": "홍콩",
    "nameEn": "Hong Kong",
    "keywords": [
      "홍콩",
      "hong kong",
      "홍콩 특별행정구",
      "hongkong"
    ],
    "flag": "🇭🇰",
    "languageCode": "zh-HK",
    "summary": "현대적인 도시와 다양한 문화가 공존하는 홍콩 여행 가이드.",
    "summaryEn": "Guide for traveling to Hong Kong, where modern city and diverse culture coexist.",
    "currency": {
      "code": "HKD",
      "name": "홍콩 달러",
      "nameEn": "Hong Kong Dollar",
      "symbol": "HK$"
    },
    "manners": [
      {
        "title": "팁 문화",
        "description": "홍콩에서는 팁 문화가 일반적입니다. 레스토랑에서는 10% 정도의 팁을 남기는 것이 일반적이며, 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 가방당 HK$10~20 정도의 팁을 주는 것이 좋습니다."
      },
      {
        "title": "인사 예절",
        "description": "홍콩인들은 전통적으로 두 손을 모아 인사하는 것을 선호합니다. 어른께는 존경을 표하며 인사하는 것이 중요합니다."
      },
      {
        "title": "대중교통 예의",
        "description": "홍콩의 지하철과 버스에서는 통화나 큰 소리를 자제하는 것이 좋습니다. 노약자석은 반드시 비워두시고, 출퇴근 시간대에는 가방을 앞으로 메는 것이 안전합니다. 공공장소에서는 조용히 하는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "홍콩인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 사원이나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "홍콩의 공중화장실은 대부분 무료이며 깨끗합니다. 쇼핑몰, 공원, 지하철역 등에서 쉽게 찾을 수 있습니다. 휴지는 변기에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "홍콩 차",
        "description": "홍콩의 전통 차가 인기입니다. 홍차, 우롱차 등 다양한 차를 구매할 수 있습니다."
      },
      {
        "title": "홍콩 과자",
        "description": "홍콩 전통 과자와 쿠키가 좋은 선물이 됩니다. 달걀 와플, 아몬드 쿠키 등 다양한 과자를 구매할 수 있습니다."
      },
      {
        "title": "홍콩 향료",
        "description": "홍콩의 전통 향료가 좋은 선물이 됩니다. 다양한 향의 향료와 향초를 구매할 수 있습니다."
      },
      {
        "title": "홍콩 공예품",
        "description": "홍콩의 전통 공예품이 인기입니다. 도자기, 목공예품 등 다양한 공예품을 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "홍콩 공항 면세점에서 명품 화장품, 향수, 시계 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "7-Eleven, Circle K, Wellcome 등 대형 마트에서 홍콩 과자, 차, 향료 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "홍콩 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven, Circle K 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 해산물 등이 좋습니다. 홍콩의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "홍콩 공항 면세점에서 명품 화장품, 향수, 시계 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "홍콩은 콘센트 타입 G (220V, 50Hz)를 사용합니다. 영국식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "홍콩에서는 Octopus 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "홍콩 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. CSL, 3 Hong Kong 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "중국/홍콩 eSIM",
        "titleEn": "China/Hong Kong eSIM",
        "link": "https://link.coupang.com/a/c5SqEI",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrSV\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "홍콩은 카드 결제가 일반적이지만, 소액 현금이 필요할 수 있습니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 홍콩은 의료비가 비싸므로 보험 가입이 필수입니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "홍콩은 가을(10월~12월)과 봄(3월~5월)이 가장 여행하기 좋은 시기입니다. 날씨가 좋고 습도가 낮아 편안하게 여행할 수 있습니다. 여름(6월~9월)은 더우고 습하지만 쇼핑을 즐기기에 좋습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Tipping Culture",
        "description": "Tipping is common in Hong Kong. It's common to leave about 10% tip at restaurants, and rounding up for taxis is sufficient. For hotel bellboys, HK$10~20 per bag is good."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Hong Kong people traditionally prefer greeting with both hands together. It's important to show respect when greeting elders."
      },
      {
        "title": "Public Place Etiquette",
        "description": "In Hong Kong, it's good to avoid making loud phone calls in public places. It's polite to be quiet on public transportation, especially during morning rush hours."
      },
      {
        "title": "Public Transportation Etiquette",
        "description": "On Hong Kong's subway and buses, it's good to avoid phone calls or loud sounds. Priority seats must be kept empty, and during rush hours, it's safer to carry bags in front."
      },
      {
        "title": "Photography",
        "description": "Hong Kong people are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing temples or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Hong Kong are mostly free and clean. You can easily find them at shopping malls, parks, and subway stations. It's common to flush toilet paper down the toilet."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Hong Kong Tea",
        "description": "Traditional Hong Kong tea is popular. You can purchase various teas like black tea and oolong tea."
      },
      {
        "title": "Hong Kong Snacks",
        "description": "Traditional Hong Kong snacks and cookies make great gifts. You can purchase various snacks like egg waffles and almond cookies."
      },
      {
        "title": "Hong Kong Spices",
        "description": "Traditional Hong Kong spices make great gifts. You can purchase various scents of spices and incense."
      },
      {
        "title": "Hong Kong Crafts",
        "description": "Traditional Hong Kong crafts are popular. You can purchase various crafts like ceramics and woodwork."
      },
      {
        "title": "Duty-Free Products",
        "description": "You can purchase luxury cosmetics, perfumes, and watches at Hong Kong airport duty-free shops. You can receive duty-free benefits, making prices cheaper."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Hong Kong snacks, tea, and spices at affordable prices at large supermarkets like 7-Eleven, Circle K, and Wellcome."
      },
      {
        "title": "Pharmacy Products",
        "description": "There are over-the-counter medicines available at Hong Kong pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven and Circle K. Many convenience stores are open 24 hours."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and seafood purchased at local markets are good. You can purchase various Hong Kong ingredients."
      },
      {
        "title": "Duty-Free Products",
        "description": "You can purchase luxury cosmetics, perfumes, and watches at Hong Kong airport duty-free shops. You can receive duty-free benefits, making prices cheaper."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Hong Kong uses Type G plugs (220V, 50Hz). You'll need a UK-style plug. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Hong Kong, you can purchase an Octopus card to use public transportation. They can be purchased and recharged at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Hong Kong eSIM or buy a local SIM at the airport. Major carriers include CSL and 3 Hong Kong, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Hong Kong commonly uses card payments, but you may need small cash. Check convenience store ATM locations or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Hong Kong are expensive, so insurance is essential."
      },
      {
        "title": "Best Time to Visit",
        "description": "Hong Kong is best visited in autumn (October-December) and spring (March-May). The weather is good and humidity is low, making it comfortable for travel. Summer (June-September) is hot and humid but great for shopping."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Hong Kong visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Hong Kong",
        "nameKo": "홍콩"
      },
      {
        "name": "Kowloon",
        "nameKo": "가우룽"
      },
      {
        "name": "Lantau Island",
        "nameKo": "란타우 섬"
      }
    ],
    "phraseSet": "chinese",
    "profile": {
      "capital": "Hong Kong",
      "capitalKo": "홍콩",
      "region": "Asia · Eastern Asia",
      "regionKo": "아시아 · 동아시아",
      "population": 7500000,
      "languages": [
        "Chinese",
        "English"
      ],
      "languagesKo": [
        "중국어",
        "영어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "singapore",
    "countryCode": "sg",
    "isoNumeric": null,
    "center": {
      "lat": 1.35,
      "lng": 103.82
    },
    "name": "싱가포르",
    "nameEn": "Singapore",
    "keywords": [
      "싱가포르",
      "singapore",
      "싱가폴"
    ],
    "flag": "🇸🇬",
    "languageCode": "en-SG",
    "summary": "현대적 도시와 다양한 문화가 공존하는 싱가포르 여행 가이드.",
    "summaryEn": "Guide for traveling to Singapore, where modern city and diverse culture coexist.",
    "currency": {
      "code": "SGD",
      "name": "싱가포르 달러",
      "nameEn": "Singapore Dollar",
      "symbol": "S$"
    },
    "manners": [
      {
        "title": "공공장소 예의",
        "description": "싱가포르는 깨끗한 도시로 유명하며, 공공장소에서 쓰레기를 버리거나 금연 구역에서 흡연하면 높은 벌금이 부과됩니다. 지하철과 버스에서는 음식 섭취가 금지되어 있습니다."
      },
      {
        "title": "팁 문화",
        "description": "싱가포르에서는 팁 문화가 일반적이지 않습니다. 대부분의 레스토랑과 호텔에는 서비스 요금이 포함되어 있습니다. 택시에서는 반올림 정도로 충분합니다. 고급 호텔에서는 벨보이에게 소액의 팁을 주는 경우가 있습니다."
      },
      {
        "title": "교통 예의",
        "description": "지하철과 버스에서는 노약자석을 비워두고, 출입구를 막지 않도록 주의해야 합니다. 에스컬레이터에서는 왼쪽은 서고 오른쪽은 걷는 것이 관례입니다."
      },
      {
        "title": "종교적 예의",
        "description": "싱가포르는 다양한 종교가 공존하는 국가입니다. 사원이나 교회 방문 시 적절한 복장을 하고, 사진 촬영 전 허락을 구하는 것이 좋습니다."
      },
      {
        "title": "화장실 이용",
        "description": "싱가포르의 공중화장실은 대부분 무료이며 매우 깨끗합니다. 쇼핑몰, 지하철역, 공원 등에서 쉽게 찾을 수 있습니다. 휴지는 변기에 버리는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "싱가포르 슬리퍼",
        "description": "싱가포르의 대표적인 기념품인 싱가포르 슬리퍼가 인기입니다. 다양한 디자인과 색상으로 구매할 수 있습니다."
      },
      {
        "title": "싱가포르 향료",
        "description": "싱가포르 향료, 카야 잼 등이 인기 기념품입니다. 싱가포르의 대표적인 식품을 만나볼 수 있습니다."
      },
      {
        "title": "전자제품",
        "description": "싱가포르는 전자제품 쇼핑의 천국입니다. 특히 카메라, 스마트폰, 노트북 등이 저렴하게 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "편의점 추천템",
        "description": "7-Eleven, Cheers 등 편의점에서 싱가포르 간식, 음료 등을 구매할 수 있습니다. 24시간 운영되며 전국 어디서나 쉽게 찾을 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "싱가포르는 콘센트 타입 G (230V, 50Hz)를 사용합니다. 영국식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "인터넷 연결",
        "description": "싱가포르 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. 주요 통신사는 Singtel, StarHub, M1이며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "싱가포르 eSIM",
        "titleEn": "Singapore eSIM",
        "link": "https://link.coupang.com/a/c5TdRz",
        "iframe": "<iframe src=\"https://coupa.ng/ckJs3u\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "EZ-Link 카드나 NETS FlashPay 카드를 구매하여 대중교통을 이용할 수 있습니다. 지하철, 버스, 택시 등에서 사용 가능하며, 편의점에서 충전할 수 있습니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Public Etiquette",
        "description": "Singapore is famous for being clean, and littering in public or smoking outside designated areas brings heavy fines. Eating and drinking are prohibited on the MRT and buses."
      },
      {
        "title": "Tipping Culture",
        "description": "Tipping isn't common in Singapore. Most restaurants and hotels already include a service charge. Rounding up the fare is enough for taxis, and some upscale hotels see small tips for bellhops."
      },
      {
        "title": "Transit Etiquette",
        "description": "Keep priority seats free on the MRT and buses, and don't block the doors. On escalators, stand on the left and walk on the right."
      },
      {
        "title": "Religious Etiquette",
        "description": "Singapore is home to many religions. Dress appropriately when visiting temples, mosques, or churches, and ask before taking photos."
      },
      {
        "title": "Restroom Usage",
        "description": "Most public restrooms in Singapore are free and very clean. You'll find them easily in malls, MRT stations, and parks. Toilet paper goes in the toilet."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Singapore Slippers",
        "description": "Singapore slippers are a popular souvenir, available in many designs and colors."
      },
      {
        "title": "Spices and Kaya Jam",
        "description": "Local spices and kaya jam are popular souvenirs and a good way to bring home Singapore's signature flavors."
      },
      {
        "title": "Electronics",
        "description": "Singapore is known as a shopping destination for electronics such as cameras, smartphones, and laptops."
      }
    ],
    "marketEn": [
      {
        "title": "Convenience Store Picks",
        "description": "Convenience stores such as 7-Eleven and Cheers sell local snacks and drinks. They're open 24 hours and easy to find anywhere in the city."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Singapore uses Type G plugs (230V, 50Hz). You'll need a UK-style plug adapter. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Internet Connection",
        "description": "You can buy a Singapore eSIM in advance or a local SIM at the airport. The main carriers are Singtel, StarHub, and M1, all available right at the airport."
      },
      {
        "title": "Transportation Card",
        "description": "Use an EZ-Link or NETS FlashPay card for public transport. It works on the MRT, buses, and taxis, and you can top it up at convenience stores."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Singapore visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Singapore",
        "nameKo": "싱가포르"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Singapore",
      "capitalKo": "싱가포르",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 5900000,
      "languages": [
        "English",
        "Malay",
        "Mandarin Chinese",
        "Tamil"
      ],
      "languagesKo": [
        "영어",
        "말레이어",
        "중국어",
        "타밀어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "malaysia",
    "countryCode": "my",
    "isoNumeric": 458,
    "center": {
      "lat": 4.2,
      "lng": 102
    },
    "name": "말레이시아",
    "nameEn": "Malaysia",
    "keywords": [
      "말레이시아",
      "malaysia",
      "쿠알라룸푸르",
      "kuala lumpur",
      "펜앙",
      "penang"
    ],
    "flag": "🇲🇾",
    "languageCode": "en-MY",
    "summary": "다채로운 문화와 맛있는 음식이 있는 말레이시아 여행 가이드.",
    "summaryEn": "Guide for traveling to Malaysia, with diverse culture and delicious food.",
    "currency": {
      "code": "MYR",
      "name": "말레이시아 링깃",
      "nameEn": "Malaysian Ringgit",
      "symbol": "RM"
    },
    "manners": [
      {
        "title": "종교적 예의",
        "description": "말레이시아는 이슬람을 국교로 가진 다종교 국가입니다. 모스크 방문 시 적절한 복장을 하고, 라마단 기간에는 공공장소에서 식사나 음주를 하는 것을 문화적 배려 차원에서 피하는 것이 좋습니다. 특히 여성은 모스크 방문 시 머리와 어깨를 가리는 스카프를 준비하는 것이 좋습니다."
      },
      {
        "title": "팁 문화",
        "description": "말레이시아에서는 팁 문화가 일반적이지 않지만, 서비스가 좋았으면 소액의 팁을 남기는 것이 좋습니다. 레스토랑에서는 5~10% 정도, 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 가방당 5~10 링깃 정도의 팁을 주는 것이 좋습니다."
      },
      {
        "title": "인사 예절",
        "description": "말레이시아인들은 전통적으로 '살람' (Salam) 인사를 사용합니다. 악수를 할 때는 오른손을 사용하며, 어른께는 존경을 표하며 인사하는 것이 중요합니다."
      },
      {
        "title": "신발 착용",
        "description": "말레이시아에서는 모스크나 집에 들어갈 때 신발을 벗는 것이 일반적입니다. 신발을 벗는 곳에 신발을 정리해서 두는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "말레이시아인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 모스크나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "말레이시아의 공중화장실은 대부분 무료이며, 쇼핑몰, 지하철역, 공원 등에서 쉽게 찾을 수 있습니다. 일부 화장실은 좌변기 대신 양변기 형태를 사용하므로 주의가 필요합니다."
      }
    ],
    "souvenirs": [
      {
        "title": "말레이시아 향료",
        "description": "말레이시아 향료, 코코넛 오일, 팜 오일 등이 인기 기념품입니다. 특히 페낭의 향료와 코코넛 제품이 유명합니다."
      },
      {
        "title": "바틱 (Batik)",
        "description": "말레이시아의 전통 직물인 바틱이 인기입니다. 바틱 원단, 의류, 액세서리 등 다양한 바틱 제품을 구매할 수 있습니다."
      },
      {
        "title": "말레이시아 커피",
        "description": "말레이시아 전통 커피인 '커피 오' (Kopi O)와 화이트 커피가 인기입니다. 특히 페낭과 말라카 지역의 커피가 유명합니다."
      },
      {
        "title": "말레이시아 과자",
        "description": "말레이시아 전통 과자와 쿠키가 좋은 선물이 됩니다. 코코넛 과자, 팜 설탕 과자 등 다양한 과자를 구매할 수 있습니다."
      },
      {
        "title": "말레이시아 향신료",
        "description": "말레이시아 전통 향신료 세트가 인기입니다. 커리 파우더, 렘파 향신료 등 다양한 향신료를 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "7-Eleven, Tesco, Giant 등 대형 마트에서 말레이시아 과자, 커피, 향료 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "말레이시아 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "7-Eleven 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 해산물 등이 좋습니다. 말레이시아의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "공항 면세점에서 말레이시아산 향료, 커피, 바틱 제품 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "말레이시아는 콘센트 타입 G (230V, 50Hz)를 사용합니다. 영국식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "쿠알라룸푸르에서는 Touch 'n Go 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "말레이시아 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Celcom, Maxis, Digi 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "말레이시아 eSIM",
        "titleEn": "Malaysia eSIM",
        "link": "https://link.coupang.com/a/c5TeYh",
        "iframe": "<iframe src=\"https://coupa.ng/ckJs5k\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "말레이시아는 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 말레이시아는 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "말레이시아는 건기(12월~3월)가 가장 여행하기 좋은 시기입니다. 날씨가 맑고 습도가 낮아 편안하게 여행할 수 있습니다. 우기(4월~11월)는 비가 많지만 호텔 가격이 저렴합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Religious Etiquette",
        "description": "Malaysia is a multi-religious country with Islam as the state religion. Dress appropriately when visiting mosques, and it's good to avoid eating or drinking in public places during Ramadan as a cultural consideration. Women should especially prepare a scarf to cover their head and shoulders when visiting mosques."
      },
      {
        "title": "Tipping Culture",
        "description": "Tipping is not common in Malaysia, but it's good to leave a small tip if the service was good. About 5~10% at restaurants and rounding up for taxis is sufficient. For hotel bellboys, 5~10 ringgit per bag is good."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Malaysians traditionally use 'Salam' greeting. When shaking hands, use your right hand, and it's important to show respect when greeting elders."
      },
      {
        "title": "Shoe Etiquette",
        "description": "In Malaysia, it's common to remove shoes when entering mosques or homes. It's polite to organize shoes neatly in the designated area."
      },
      {
        "title": "Photography",
        "description": "Malaysians are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing mosques or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Malaysia are mostly free and can be easily found at shopping malls, subway stations, and parks. Some restrooms use squat toilets instead of sitting toilets, so be careful."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Malaysian Spices",
        "description": "Malaysian spices, coconut oil, and palm oil are popular souvenirs. Especially spices and coconut products from Penang are famous."
      },
      {
        "title": "Batik",
        "description": "Batik, Malaysia's traditional fabric, is popular. You can purchase various batik products like fabric, clothing, and accessories."
      },
      {
        "title": "Malaysian Coffee",
        "description": "Traditional Malaysian coffee like 'Kopi O' and white coffee are popular. Especially coffee from Penang and Malacca regions are famous."
      },
      {
        "title": "Malaysian Snacks",
        "description": "Traditional Malaysian snacks and cookies make great gifts. You can purchase various snacks like coconut snacks and palm sugar snacks."
      },
      {
        "title": "Malaysian Spice Sets",
        "description": "Traditional Malaysian spice sets are popular. You can purchase various spices like curry powder and lemongrass spices."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Malaysian snacks, coffee, and spices at affordable prices at large markets like 7-Eleven, Tesco, and Giant."
      },
      {
        "title": "Pharmacy Items",
        "description": "There are over-the-counter medicines available at Malaysian pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like 7-Eleven. There are many 24-hour convenience stores."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and seafood purchased at local markets are good. You can purchase various Malaysian ingredients."
      },
      {
        "title": "Duty-Free Items",
        "description": "You can purchase Malaysian spices, coffee, and batik products at airport duty-free shops. You can get tax-free benefits, making prices affordable."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Malaysia uses Type G plugs (230V, 50Hz). UK-style plugs are needed. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Kuala Lumpur, you can purchase a Touch 'n Go card to use public transportation. You can purchase and recharge at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase a Malaysian eSIM or buy a local SIM at the airport. Major carriers include Celcom, Maxis, and Digi, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Malaysia is still a cash-based society, so small cash is needed. Check ATM locations at convenience stores or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Malaysia are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Malaysia is best visited during the dry season (December-March). The weather is clear and humidity is low, making it comfortable for travel. The rainy season (April-November) has more rain but hotel prices are lower."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Malaysia visa-free for up to 90 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Kuala Lumpur",
        "nameKo": "쿠알라룸푸르"
      },
      {
        "name": "Penang",
        "nameKo": "펜앙"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Kuala Lumpur",
      "capitalKo": "쿠알라룸푸르",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 34500000,
      "languages": [
        "Malay"
      ],
      "languagesKo": [
        "말레이어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "indonesia",
    "countryCode": "id",
    "isoNumeric": 360,
    "center": {
      "lat": -2.5,
      "lng": 113.9
    },
    "name": "인도네시아",
    "nameEn": "Indonesia",
    "keywords": [
      "인도네시아",
      "indonesia",
      "발리",
      "bali",
      "자카르타",
      "jakarta"
    ],
    "flag": "🇮🇩",
    "languageCode": "id-ID",
    "summary": "열대 해안과 문화 유산이 있는 인도네시아 여행 가이드.",
    "summaryEn": "Guide for traveling to Indonesia, with tropical coasts and cultural heritage.",
    "currency": {
      "code": "IDR",
      "name": "인도네시아 루피아",
      "nameEn": "Indonesian Rupiah",
      "symbol": "Rp"
    },
    "manners": [
      {
        "title": "종교적 예의",
        "description": "인도네시아는 다수의 무슬림이 거주하는 다종교 국가입니다. 모스크 방문 시 적절한 복장을 하고, 라마단 기간에는 공공장소에서 식사를 하는 것을 문화적 배려 차원에서 피하는 것이 좋습니다. 특히 발리와 같은 힌두교 지역에서는 다른 예의가 적용될 수 있으므로 지역별 문화를 확인하는 것이 좋습니다."
      },
      {
        "title": "팁 문화",
        "description": "인도네시아에서는 팁 문화가 일반적입니다. 레스토랑에서는 5~10% 정도, 택시에서는 반올림 정도로 충분합니다. 호텔 벨보이에게는 5,000~10,000루피아 정도의 팁을 주는 것이 좋습니다."
      },
      {
        "title": "인사 예절",
        "description": "인도네시아인들은 전통적으로 '살람' (Salam) 인사를 사용합니다. 악수를 할 때는 오른손을 사용하며, 어른께는 존경을 표하며 인사하는 것이 중요합니다."
      },
      {
        "title": "신발 착용",
        "description": "인도네시아에서는 모스크나 사원, 집에 들어갈 때 신발을 벗는 것이 일반적입니다. 신발을 벗는 곳에 신발을 정리해서 두는 것이 예의입니다."
      },
      {
        "title": "사진 촬영",
        "description": "인도네시아인들은 사진 촬영에 친절하지만, 촬영 전 허락을 구하는 것이 좋습니다. 특히 사원이나 전통 건물을 촬영할 때는 주의가 필요합니다."
      },
      {
        "title": "화장실 이용",
        "description": "인도네시아의 공중화장실은 대부분 유료이며, 카페나 레스토랑의 화장실을 이용하려면 음료나 간단한 음식을 주문해야 하는 경우가 많습니다. 일부 화장실은 좌변기 대신 양변기 형태를 사용하므로 주의가 필요합니다."
      }
    ],
    "souvenirs": [
      {
        "title": "발리 공예품",
        "description": "발리의 전통 공예품이 인기 기념품입니다. 목각품, 은세공품, 바틱 등 다양한 공예품을 구매할 수 있습니다."
      },
      {
        "title": "인도네시아 커피",
        "description": "인도네시아 전통 커피인 '코피 루왁' (Kopi Luwak)과 수마트라 커피가 인기입니다. 특히 발리와 수마트라 지역의 커피가 유명합니다."
      },
      {
        "title": "바틱 (Batik)",
        "description": "인도네시아의 전통 직물인 바틱이 인기입니다. 바틱 원단, 의류, 액세서리 등 다양한 바틱 제품을 구매할 수 있습니다."
      },
      {
        "title": "인도네시아 향신료",
        "description": "인도네시아 전통 향신료 세트가 인기입니다. 커리 파우더, 생강, 계피 등 다양한 향신료를 구매할 수 있습니다."
      },
      {
        "title": "인도네시아 과자",
        "description": "인도네시아 전통 과자와 쿠키가 좋은 선물이 됩니다. 코코넛 과자, 팜 설탕 과자 등 다양한 과자를 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Indomaret, Alfamart 등 대형 마트에서 인도네시아 과자, 커피, 향신료 등을 저렴하게 구매할 수 있습니다."
      },
      {
        "title": "약국 상비약",
        "description": "인도네시아 약국에서 구매 가능한 일반의약품들이 있습니다. 처방전 없이 구매 가능한 제품들을 찾을 수 있습니다."
      },
      {
        "title": "편의점 상품",
        "description": "Indomaret, Alfamart 등 편의점에서 간단한 식품과 음료를 구매할 수 있습니다. 24시간 운영되는 편의점이 많습니다."
      },
      {
        "title": "시장 상품",
        "description": "지역 시장에서 구매하는 신선한 과일, 채소, 해산물 등이 좋습니다. 인도네시아의 다양한 식재료를 구매할 수 있습니다."
      },
      {
        "title": "면세점 상품",
        "description": "공항 면세점에서 인도네시아산 향신료, 커피, 바틱 제품 등을 구매할 수 있습니다. 면세 혜택을 받을 수 있어 가격이 저렴합니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "인도네시아는 콘센트 타입 C/F (230V, 50Hz)를 사용합니다. 유럽식 플러그가 필요하며, 대부분의 현대 전자제품이 110V~240V를 지원하므로 전압 변환기는 필요 없을 수 있습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "자카르타에서는 Flazz 카드나 Brizzi 카드를 구매하여 대중교통을 이용할 수 있습니다. 편의점이나 역에서 구매 및 충전할 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "인도네시아 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. Telkomsel, Indosat, XL Axiata 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "인도네시아 eSIM",
        "titleEn": "Indonesia eSIM",
        "link": "https://link.coupang.com/a/c5Tf4z",
        "iframe": "<iframe src=\"https://coupa.ng/ckJs7n\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "인도네시아는 아직도 현금 중심 사회이므로 소액 현금이 필요합니다. 편의점 ATM 위치를 확인하거나, 공항에서 환전하는 것이 좋습니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 인도네시아는 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "인도네시아는 건기(5월~9월)가 가장 여행하기 좋은 시기입니다. 날씨가 맑고 습도가 낮아 편안하게 여행할 수 있습니다. 우기(10월~4월)는 비가 많지만 호텔 가격이 저렴합니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Religious Etiquette",
        "description": "Indonesia is a multi-religious country with a large Muslim population. Dress appropriately when visiting mosques, and it's good to avoid eating in public places during Ramadan as a cultural consideration. In Hindu regions like Bali, different etiquette may apply, so it's good to check regional cultures."
      },
      {
        "title": "Tipping Culture",
        "description": "Tipping is common in Indonesia. About 5~10% at restaurants and rounding up for taxis is sufficient. For hotel bellboys, it's good to tip about 5,000~10,000 rupiah."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Indonesians traditionally use 'Salam' greeting. When shaking hands, use your right hand, and it's important to show respect when greeting elders."
      },
      {
        "title": "Shoe Etiquette",
        "description": "In Indonesia, it's common to remove shoes when entering mosques, temples, or homes. It's polite to organize shoes neatly in the designated area."
      },
      {
        "title": "Photography",
        "description": "Indonesians are friendly about photography, but it's good to ask for permission before taking photos. Be careful especially when photographing temples or traditional buildings."
      },
      {
        "title": "Restroom Usage",
        "description": "Public restrooms in Indonesia are mostly paid, and to use restrooms in cafes or restaurants, you often need to order a drink or simple food. Some restrooms use squat toilets instead of sitting toilets, so be careful."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Bali Crafts",
        "description": "Traditional Balinese crafts are popular souvenirs. You can purchase various crafts like wood carvings, silverware, and batik."
      },
      {
        "title": "Indonesian Coffee",
        "description": "Traditional Indonesian coffee like 'Kopi Luwak' and Sumatra coffee are popular. Especially coffee from Bali and Sumatra regions are famous."
      },
      {
        "title": "Batik",
        "description": "Batik, Indonesia's traditional fabric, is popular. You can purchase various batik products like fabric, clothing, and accessories."
      },
      {
        "title": "Indonesian Spice Sets",
        "description": "Traditional Indonesian spice sets are popular. You can purchase various spices like curry powder, ginger, and cinnamon."
      },
      {
        "title": "Indonesian Snacks",
        "description": "Traditional Indonesian snacks and cookies make great gifts. You can purchase various snacks like coconut snacks and palm sugar snacks."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Indonesian snacks, coffee, and spices at affordable prices at large markets like Indomaret and Alfamart."
      },
      {
        "title": "Pharmacy Items",
        "description": "There are over-the-counter medicines available at Indonesian pharmacies. You can find products available without a prescription."
      },
      {
        "title": "Convenience Store Products",
        "description": "You can purchase simple food and drinks at convenience stores like Indomaret and Alfamart. There are many 24-hour convenience stores."
      },
      {
        "title": "Market Products",
        "description": "Fresh fruits, vegetables, and seafood purchased at local markets are good. You can purchase various Indonesian ingredients."
      },
      {
        "title": "Duty-Free Items",
        "description": "You can purchase Indonesian spices, coffee, and batik products at airport duty-free shops. You can get tax-free benefits, making prices affordable."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Indonesia uses Type C/F plugs (230V, 50Hz). European-style plugs are needed. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In Jakarta, you can purchase a Flazz card or Brizzi card to use public transportation. You can purchase and recharge at convenience stores or stations."
      },
      {
        "title": "Internet Connection",
        "description": "You can pre-purchase an Indonesian eSIM or buy a local SIM at the airport. Major carriers include Telkomsel, Indosat, and XL Axiata, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Indonesia is still a cash-based society, so small cash is needed. Check ATM locations at convenience stores or exchange at the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Indonesia are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Indonesia is best visited during the dry season (May-September). The weather is clear and humidity is low, making it comfortable for travel. The rainy season (October-April) has more rain but hotel prices are lower."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 30일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아있어야 하며, 왕복 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Indonesia visa-free for up to 30 days for tourism purposes. Your passport must be valid for at least 6 months, and you must have a return ticket."
      }
    ],
    "cities": [
      {
        "name": "Jakarta",
        "nameKo": "자카르타"
      },
      {
        "name": "Bali",
        "nameKo": "발리"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Jakarta",
      "capitalKo": "자카르타",
      "region": "Asia · South-Eastern Asia",
      "regionKo": "아시아 · 동남아시아",
      "population": 281000000,
      "languages": [
        "Indonesian"
      ],
      "languagesKo": [
        "인도네시아어"
      ],
      "drivingSide": "left"
    }
  },
  {
    "slug": "russia",
    "countryCode": "ru",
    "isoNumeric": 643,
    "center": {
      "lat": 61.5,
      "lng": 105.3
    },
    "name": "러시아",
    "nameEn": "Russia",
    "keywords": [
      "러시아",
      "russia",
      "모스크바",
      "moscow",
      "상트페테르부르크",
      "saint petersburg",
      "블라디보스토크",
      "vladivostok"
    ],
    "flag": "🇷🇺",
    "languageCode": "ru-RU",
    "summary": "붉은 광장부터 블라디보스토크까지, 러시아를 여행하기 전에 알아 둘 핵심 정보.",
    "summaryEn": "Essential information to know before traveling Russia, from Red Square to Vladivostok.",
    "currency": {
      "code": "RUB",
      "name": "러시아 루블",
      "nameEn": "Russian Ruble",
      "symbol": "₽"
    },
    "manners": [
      {
        "title": "성당 방문",
        "description": "러시아 정교회 성당에서는 여성은 스카프로 머리를 가리고 치마를 입는 것이 좋고, 남성은 모자를 벗습니다. 반바지·민소매 차림은 피하세요. 입구에서 스카프를 빌려주는 곳도 있습니다."
      },
      {
        "title": "꽃 선물",
        "description": "꽃은 반드시 홀수로 선물합니다. 짝수 송이는 장례식에 쓰는 것으로 여겨집니다."
      },
      {
        "title": "집에 초대받았을 때",
        "description": "현관에서 신발을 벗는 집이 많고, 빈손으로 가지 않는 것이 예의입니다. 케이크·초콜릿·와인 같은 작은 선물을 준비하세요. 문턱을 사이에 두고 악수하지 않는 풍습도 있습니다."
      },
      {
        "title": "무표정은 무례가 아님",
        "description": "러시아에서는 낯선 사람에게 웃어 보이지 않는 것이 보통입니다. 점원이나 행인이 무뚝뚝해 보여도 불친절한 뜻은 아닙니다."
      },
      {
        "title": "팁 문화",
        "description": "식당에서는 서비스가 괜찮았다면 10% 정도 팁을 남기는 것이 일반적입니다. 카드 영수증에 팁을 더할 수 없는 곳이 많아 현금으로 두고 나옵니다."
      },
      {
        "title": "사진 촬영",
        "description": "군사 시설, 정부 건물, 경찰, 국경 지역 등은 촬영이 금지되어 있습니다. 드론 비행도 허가 없이는 할 수 없으니 촬영 전에 주변을 확인하세요."
      }
    ],
    "souvenirs": [
      {
        "title": "마트료시카",
        "description": "인형 안에 작은 인형이 겹겹이 들어 있는 러시아 대표 기념품입니다. 손으로 그린 제품은 기념품 시장이나 전문점에서 살 수 있습니다."
      },
      {
        "title": "초콜릿과 과자",
        "description": "아기 얼굴이 그려진 알룐카 초콜릿, 크라스니 옥탸브리 초콜릿, 툴라 프랴니크(전통 생강빵)가 가볍게 사 가기 좋습니다."
      },
      {
        "title": "홍차와 찻잔",
        "description": "러시아는 차를 즐겨 마시는 나라입니다. 이반차(허브차), 홍차 세트, 사모바르 모양 소품이 인기입니다."
      },
      {
        "title": "전통 공예품",
        "description": "파란 무늬의 그젤 도자기, 붉은·금색 무늬의 호흘로마 나무 그릇, 털실 숄 등 지역 공예품이 있습니다."
      },
      {
        "title": "자연주의 화장품",
        "description": "나투라 시베리카 같은 시베리아 식물 원료 화장품이 선물용으로 많이 팔립니다."
      }
    ],
    "market": [
      {
        "title": "대형 마트",
        "description": "피아테로치카(Пятёрочка), 마그닛(Магнит)은 어디서나 보이는 저렴한 마트이고, 아즈부카 브쿠사(Азбука Вкуса)는 수입·고급 식품이 많습니다."
      },
      {
        "title": "마트 추천템",
        "description": "알룐카 초콜릿, 해바라기씨(세미치키), 꿀, 메밀(그레치카), 연유 등이 인기입니다."
      },
      {
        "title": "유제품",
        "description": "케피르(발효유), 트보로크(코티지치즈) 등 유제품 종류가 많아 숙소에서 맛보기 좋습니다."
      },
      {
        "title": "약국 추천템",
        "description": "약국(Аптека)에서 파는 보습 크림, 립밤, 허브 캔디 등이 저렴하고 품질이 괜찮습니다."
      },
      {
        "title": "기념품 시장",
        "description": "모스크바의 이즈마일롭스키 시장에서는 마트료시카, 공예품, 옛 소련 시절 물건을 한곳에서 구경할 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "현금 준비",
        "description": "2022년 이후 해외에서 발급한 Visa·Mastercard 카드는 러시아에서 결제와 ATM 출금이 되지 않습니다. 여행 경비는 달러나 유로 현금으로 넉넉히 가져가 현지 은행·환전소에서 루블로 바꾸세요. 출발 전 최신 상황을 꼭 확인하세요."
      },
      {
        "title": "여행경보 확인",
        "description": "외교부 해외안전여행 누리집(0404.go.kr)에서 러시아의 지역별 여행경보를 확인하세요. 우크라이나와 맞닿은 지역 등에는 높은 단계의 경보가 내려져 있습니다."
      },
      {
        "title": "항공편",
        "description": "한국과 러시아를 잇는 직항이 크게 줄었습니다. 경유 노선이나 블라디보스토크 등 극동 노선을 미리 확인하고, 일정 변경에 대비하세요."
      },
      {
        "title": "전기 어댑터",
        "description": "러시아는 콘센트 타입 C/F(220V, 50Hz)를 사용합니다. 한국 플러그를 그대로 쓸 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "현지 SIM은 MTS, MegaFon, Beeline 등에서 여권을 보여 주고 살 수 있습니다. 일부 해외 앱·사이트는 러시아에서 접속이 막혀 있으니 연락 수단을 미리 정해 두세요."
      },
      {
        "title": "체류 등록",
        "description": "외국인은 도착 후 체류지 등록을 해야 합니다. 호텔에 묵으면 숙소가 대신 처리하지만, 개인 숙소라면 집주인에게 등록을 요청하세요."
      },
      {
        "title": "교통카드",
        "description": "모스크바에서는 트로이카, 상트페테르부르크에서는 포도로즈니크 교통카드로 지하철과 버스를 탈 수 있습니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "5~9월이 여행하기 가장 좋습니다. 6월 하순 상트페테르부르크의 백야가 유명합니다. 겨울(12~2월)은 모스크바도 영하 10도 아래로 내려가고 시베리아는 훨씬 추우니 방한 준비가 필수입니다."
      }
    ],
    "mannersEn": [
      {
        "title": "Church Visits",
        "description": "In Russian Orthodox churches, women should cover their heads with a scarf and wear a skirt, and men should remove their hats. Avoid shorts and sleeveless tops. Some churches lend scarves at the entrance."
      },
      {
        "title": "Giving Flowers",
        "description": "Always give flowers in odd numbers. Even numbers are associated with funerals."
      },
      {
        "title": "Visiting a Home",
        "description": "Many homes expect you to take off your shoes at the door, and it's polite to bring a small gift such as cake, chocolate, or wine. By tradition, people don't shake hands across a threshold."
      },
      {
        "title": "A Straight Face Isn't Rude",
        "description": "Russians don't usually smile at strangers. A clerk or passerby who looks stern isn't being unfriendly."
      },
      {
        "title": "Tipping Culture",
        "description": "If the service was good, about 10% is a common tip at restaurants. Many places can't add a tip to a card payment, so leave it in cash."
      },
      {
        "title": "Photography",
        "description": "Photographing military sites, government buildings, police, and border areas is prohibited. Flying drones also requires a permit, so check your surroundings before taking pictures."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Matryoshka Dolls",
        "description": "Russia's signature souvenir: wooden dolls nested inside one another. Hand-painted ones are sold at souvenir markets and specialty shops."
      },
      {
        "title": "Chocolate and Sweets",
        "description": "Alenka chocolate with the baby on the wrapper, Krasny Oktyabr chocolate, and Tula pryanik (gingerbread) are easy gifts to bring home."
      },
      {
        "title": "Tea and Teaware",
        "description": "Russia loves its tea. Ivan-chai (herbal tea), black tea sets, and samovar-shaped items are popular."
      },
      {
        "title": "Traditional Crafts",
        "description": "Blue-patterned Gzhel porcelain, red-and-gold Khokhloma woodenware, and wool shawls are well-known regional crafts."
      },
      {
        "title": "Natural Cosmetics",
        "description": "Cosmetics made with Siberian plants, such as Natura Siberica, are popular as gifts."
      }
    ],
    "marketEn": [
      {
        "title": "Supermarkets",
        "description": "Pyaterochka and Magnit are affordable chains found everywhere; Azbuka Vkusa carries more imported and premium food."
      },
      {
        "title": "Supermarket Picks",
        "description": "Alenka chocolate, sunflower seeds (semechki), honey, buckwheat (grechka), and condensed milk are popular."
      },
      {
        "title": "Dairy",
        "description": "Kefir, tvorog (farmer's cheese), and other dairy products come in many varieties and are good to try at your accommodation."
      },
      {
        "title": "Pharmacy Picks",
        "description": "Moisturizing creams, lip balms, and herbal lozenges from pharmacies (Apteka) are inexpensive and good quality."
      },
      {
        "title": "Souvenir Market",
        "description": "Moscow's Izmailovsky Market gathers matryoshkas, crafts, and Soviet-era items in one place."
      }
    ],
    "essentialsEn": [
      {
        "title": "Bring Cash",
        "description": "Since 2022, Visa and Mastercard cards issued outside Russia don't work for payments or ATM withdrawals. Bring enough US dollars or euros in cash and exchange them for rubles at local banks or exchange offices. Check the latest situation before you go."
      },
      {
        "title": "Check Travel Advisories",
        "description": "Check your government's travel advisory for Russia before planning a trip. The U.S. Department of State advises against all travel to Russia."
      },
      {
        "title": "Flights",
        "description": "Direct flights to Russia have been sharply reduced. Check connecting routes in advance and be ready for schedule changes."
      },
      {
        "title": "Electrical Adapter",
        "description": "Russia uses Type C/F plugs (220V, 50Hz). You'll need a European-style plug adapter."
      },
      {
        "title": "Internet Connection",
        "description": "Local SIM cards from MTS, MegaFon, or Beeline can be bought with your passport. Some foreign apps and websites are blocked in Russia, so agree on how to stay in touch beforehand."
      },
      {
        "title": "Registration",
        "description": "Foreigners must register their place of stay after arrival. Hotels handle this for you; at a private rental, ask your host to register you."
      },
      {
        "title": "Transportation Card",
        "description": "Use the Troika card in Moscow and the Podorozhnik card in Saint Petersburg for the metro and buses."
      },
      {
        "title": "Best Time to Visit",
        "description": "May to September is the best time to visit, and Saint Petersburg's White Nights in late June are famous. Winters (December–February) drop below -10°C even in Moscow and are far colder in Siberia, so pack for the cold."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국 일반여권 소지자는 관광 목적으로 한 번에 최대 60일, 180일 안에 모두 합쳐 90일까지 무비자로 머물 수 있습니다. 여권 유효기간은 6개월 이상 남아 있는 것이 좋습니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa Required",
        "description": "US citizens need a Russian tourist visa issued in advance. Requirements can change, so check with a Russian consulate before you travel."
      }
    ],
    "cities": [
      {
        "name": "Moscow",
        "nameKo": "모스크바"
      },
      {
        "name": "Saint Petersburg",
        "nameKo": "상트페테르부르크"
      },
      {
        "name": "Vladivostok",
        "nameKo": "블라디보스토크"
      }
    ],
    "phraseSet": "russian",
    "profile": {
      "capital": "Moscow",
      "capitalKo": "모스크바",
      "region": "Europe · Eastern Europe",
      "regionKo": "유럽 · 동유럽",
      "population": 144000000,
      "languages": [
        "Russian"
      ],
      "languagesKo": [
        "러시아어"
      ],
      "drivingSide": "right"
    }
  },
  {
    "slug": "new-zealand",
    "countryCode": "nz",
    "isoNumeric": 554,
    "center": {
      "lat": -41.5,
      "lng": 172.5
    },
    "name": "뉴질랜드",
    "nameEn": "New Zealand",
    "keywords": [
      "뉴질랜드",
      "new zealand",
      "newzealand",
      "nz",
      "오클랜드",
      "auckland",
      "퀸스타운",
      "queenstown",
      "웰링턴",
      "wellington"
    ],
    "flag": "🇳🇿",
    "languageCode": "en-NZ",
    "summary": "피오르와 빙하, 마오리 문화가 있는 뉴질랜드를 여행하기 전에 알아 둘 핵심 정보.",
    "summaryEn": "Essential information before you travel New Zealand, a land of fiords, glaciers, and Māori culture.",
    "currency": {
      "code": "NZD",
      "name": "뉴질랜드 달러",
      "nameEn": "New Zealand Dollar",
      "symbol": "NZ$"
    },
    "manners": [
      {
        "title": "엄격한 검역",
        "description": "뉴질랜드는 동식물 검역이 매우 엄격합니다. 과일, 꿀, 육류 등 음식과 흙 묻은 등산화·캠핑 장비는 입국 신고서에 반드시 신고하세요. 신고하지 않으면 현장에서 벌금(NZ$400)을 낼 수 있습니다."
      },
      {
        "title": "마오리 문화 존중",
        "description": "\"키아 오라(Kia ora)\"는 마오리어 인사로 널리 쓰입니다. 마라에(마오리 집회 장소)를 방문할 때는 안내에 따라 신발을 벗고, 앉아 있는 사람의 머리를 만지지 않습니다."
      },
      {
        "title": "팁 문화",
        "description": "팁은 필수가 아닙니다. 가격에 서비스가 포함되어 있으며, 특별히 좋은 서비스를 받았을 때만 10% 정도 남기기도 합니다."
      },
      {
        "title": "자연 보호",
        "description": "국립공원과 트레킹 코스에서는 쓰레기를 모두 되가져가고, 정해진 길로만 다닙니다. 야생 동물에게 먹이를 주지 마세요."
      },
      {
        "title": "운전 예절",
        "description": "뉴질랜드는 좌측통행입니다. 시골길에는 한 차선 다리(One Lane Bridge)가 많으니 표지판의 양보 방향을 확인하고, 느리게 달릴 때는 갓길로 비켜 뒤차를 보내 주세요."
      }
    ],
    "souvenirs": [
      {
        "title": "마누카 꿀",
        "description": "뉴질랜드를 대표하는 기념품입니다. UMF나 MGO 숫자가 높을수록 등급이 높고 비쌉니다. 공항 면세점보다 마트가 저렴한 경우가 많습니다."
      },
      {
        "title": "양모 제품",
        "description": "메리노 울 의류와 포섬 울을 섞은 장갑·목도리가 가볍고 따뜻해 인기입니다."
      },
      {
        "title": "그린스톤 펜던트",
        "description": "마오리어로 포우나무라 부르는 비취 펜던트는 행운과 보호의 의미가 있어 선물로 많이 삽니다."
      },
      {
        "title": "와인",
        "description": "말버러 지역의 소비뇽 블랑, 센트럴 오타고의 피노 누아가 유명합니다. 한국 입국 시 주류 면세 한도를 확인하세요."
      },
      {
        "title": "키위 소품",
        "description": "뉴질랜드 상징인 키위새 인형, 열쇠고리, 티타월 등 가벼운 기념품이 많습니다."
      }
    ],
    "market": [
      {
        "title": "대형 마트",
        "description": "가장 저렴한 팩앤세이브(PAK'nSAVE), 매장이 많은 울워스(Woolworths), 품질 좋은 뉴월드(New World)가 대표적인 마트입니다."
      },
      {
        "title": "초콜릿",
        "description": "휘태커스(Whittaker's) 초콜릿은 현지인이 가장 즐겨 먹는 브랜드로, 다양한 맛을 저렴하게 살 수 있습니다."
      },
      {
        "title": "마트 추천템",
        "description": "픽스(Pic's) 땅콩버터, 파인애플 럼프스 젤리, 레몬 탄산음료 L&P 등이 뉴질랜드에서만 맛볼 수 있는 간식입니다."
      },
      {
        "title": "약국 추천템",
        "description": "약국(Chemist)에서 파는 프로폴리스, 라놀린 크림, 비타민 등 건강·보습 제품이 인기입니다."
      },
      {
        "title": "파머스 마켓",
        "description": "주말마다 열리는 지역 파머스 마켓에서 치즈, 과일, 꿀 같은 현지 먹거리를 맛볼 수 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "NZeTA 신청",
        "description": "무비자로 가더라도 출발 전에 전자여행허가(NZeTA)를 앱이나 이민국 누리집에서 신청하고, 관광세(IVL)를 함께 내야 합니다. 승인까지 며칠 걸릴 수 있으니 미리 신청하세요."
      },
      {
        "title": "전기 어댑터",
        "description": "뉴질랜드는 콘센트 타입 I(230V, 50Hz)를 사용합니다. 한국 플러그는 맞지 않으니 멀티 어댑터를 챙기세요."
      },
      {
        "title": "자외선 차단",
        "description": "오존층이 얇아 햇볕이 매우 강합니다. 흐린 날에도 선크림, 선글라스, 모자를 챙기세요."
      },
      {
        "title": "렌터카와 운전면허",
        "description": "렌터카로 여행하는 사람이 많습니다. 한국 운전면허증과 국제운전면허증을 함께 가져가세요."
      },
      {
        "title": "인터넷 연결",
        "description": "One NZ, Spark, 2degrees가 주요 통신사입니다. 산간·국립공원에서는 신호가 잡히지 않는 곳이 많으니 오프라인 지도를 받아 두세요."
      },
      {
        "title": "교통",
        "description": "도시 간 이동은 렌터카나 국내선이 편합니다. 오클랜드 대중교통은 AT HOP 카드나 비접촉 신용카드로 탈 수 있습니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "남반구라 계절이 한국과 반대입니다. 12~2월 여름이 트레킹과 관광에 좋고, 6~8월 겨울에는 퀸스타운 등에서 스키를 탈 수 있습니다. 하루에도 날씨가 자주 바뀌니 겹쳐 입을 옷을 챙기세요."
      }
    ],
    "mannersEn": [
      {
        "title": "Strict Biosecurity",
        "description": "New Zealand has very strict biosecurity rules. Declare food such as fruit, honey, and meat, as well as hiking boots or camping gear with soil on them. Undeclared items can mean an on-the-spot fine (NZ$400)."
      },
      {
        "title": "Respect Māori Culture",
        "description": "\"Kia ora\" is a Māori greeting used across the country. When visiting a marae (Māori meeting ground), follow your hosts' guidance, remove your shoes when asked, and don't touch a seated person's head."
      },
      {
        "title": "Tipping Culture",
        "description": "Tipping isn't expected. Service is included in prices, though some people leave about 10% for exceptional service."
      },
      {
        "title": "Protecting Nature",
        "description": "In national parks and on tracks, carry out all your rubbish and stay on marked paths. Don't feed wildlife."
      },
      {
        "title": "Driving Etiquette",
        "description": "New Zealand drives on the left. Rural roads have many one-lane bridges, so check the signs for who gives way, and pull over to let faster traffic pass."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Mānuka Honey",
        "description": "New Zealand's signature souvenir. Higher UMF or MGO numbers mean a higher grade and price. Supermarkets are often cheaper than airport duty-free."
      },
      {
        "title": "Wool Products",
        "description": "Merino clothing and possum-merino blend gloves and scarves are light, warm, and popular."
      },
      {
        "title": "Greenstone Pendants",
        "description": "Pounamu (jade) pendants carry meanings of luck and protection and are a popular gift."
      },
      {
        "title": "Wine",
        "description": "Marlborough Sauvignon Blanc and Central Otago Pinot Noir are famous. Check your home country's duty-free alcohol allowance."
      },
      {
        "title": "Kiwi Keepsakes",
        "description": "Kiwi bird toys, keyrings, and tea towels make light, easy souvenirs."
      }
    ],
    "marketEn": [
      {
        "title": "Supermarkets",
        "description": "PAK'nSAVE is the cheapest, Woolworths has the most stores, and New World is known for quality."
      },
      {
        "title": "Chocolate",
        "description": "Whittaker's is the locals' favorite chocolate brand, with many flavors at good prices."
      },
      {
        "title": "Supermarket Picks",
        "description": "Pic's peanut butter, Pineapple Lumps, and the lemon soft drink L&P are uniquely Kiwi snacks."
      },
      {
        "title": "Pharmacy Picks",
        "description": "Propolis, lanolin cream, and vitamins from pharmacies (chemists) are popular health and skincare buys."
      },
      {
        "title": "Farmers' Markets",
        "description": "Weekend farmers' markets are a good place to try local cheese, fruit, and honey."
      }
    ],
    "essentialsEn": [
      {
        "title": "Apply for an NZeTA",
        "description": "Even visa-free visitors must apply for an NZeTA (electronic travel authority) through the app or Immigration New Zealand website and pay the tourism levy (IVL) before departure. Approval can take a few days, so apply early."
      },
      {
        "title": "Electrical Adapter",
        "description": "New Zealand uses Type I plugs (230V, 50Hz). Bring a travel adapter."
      },
      {
        "title": "Sun Protection",
        "description": "The sun is very strong here. Pack sunscreen, sunglasses, and a hat, even on cloudy days."
      },
      {
        "title": "Car Rental and License",
        "description": "Many visitors travel by rental car. Bring your home driver's license, plus an International Driving Permit if it isn't in English."
      },
      {
        "title": "Internet Connection",
        "description": "One NZ, Spark, and 2degrees are the main carriers. Many mountain and national park areas have no signal, so download offline maps."
      },
      {
        "title": "Getting Around",
        "description": "Rental cars and domestic flights are the easiest way between cities. Auckland public transport accepts AT HOP cards and contactless bank cards."
      },
      {
        "title": "Best Time to Visit",
        "description": "Seasons are reversed from the Northern Hemisphere. December–February (summer) is best for hiking and sightseeing, and June–August brings ski season around Queenstown. The weather changes quickly, so pack layers."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국 (NZeTA 필요)",
        "description": "한국 여권 소지자는 관광 목적으로 최대 90일까지 무비자로 머물 수 있지만, 출발 전에 NZeTA(전자여행허가)를 받아야 합니다. 여권은 출국 예정일로부터 3개월 이상 남아 있어야 하며, 돌아가는 항공권이 필요합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa Waiver (NZeTA Required)",
        "description": "US citizens can visit visa-free for up to 90 days but must get an NZeTA before departure. Your passport must be valid for at least 3 months beyond your departure date, and you need an onward or return ticket."
      }
    ],
    "cities": [
      {
        "name": "Auckland",
        "nameKo": "오클랜드"
      },
      {
        "name": "Wellington",
        "nameKo": "웰링턴"
      },
      {
        "name": "Queenstown",
        "nameKo": "퀸스타운"
      }
    ],
    "phraseSet": "english",
    "profile": {
      "capital": "Wellington",
      "capitalKo": "웰링턴",
      "region": "Oceania · Australia and New Zealand",
      "regionKo": "오세아니아 · 호주/뉴질랜드",
      "population": 5300000,
      "languages": [
        "English",
        "Māori",
        "NZ Sign Language"
      ],
      "languagesKo": [
        "영어",
        "마오리어",
        "뉴질랜드 수어"
      ],
      "drivingSide": "left"
    }
  }
];

