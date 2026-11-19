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
        "description": "한국의 공중화장실은 대부분 무료이며, 지하철역, 공원, 대형마트 등에서 쉽게 찾을 수 있습니다. 2018년부터 공중화장실 칸 안의 휴지통이 없어져 사용한 휴지는 변기에 넣고 물을 내리면 됩니다. 일부 화장실에는 휴지가 없을 수 있으니 작은 휴지나 물티슈를 챙기는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "전통 공예품",
        "description": "한지로 만든 부채, 매듭 장신구, 전통 문양 소품 등이 인기 기념품입니다. 인사동이나 명동의 전통 공예품 가게에서 구매할 수 있으며, 한국의 전통 문화를 담은 선물로 좋습니다."
      },
      {
        "title": "K-뷰티 제품",
        "description": "한국 스킨케어 브랜드의 마스크팩, 앰플 세트, 선크림 등이 대표적인 기념품입니다. 올리브영 같은 드러그스토어나 다이소에서 다양한 브랜드와 가격대의 제품을 만나볼 수 있습니다."
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
        "description": "동전파스(근육통 완화), 후시딘(상처·피부 감염에 바르는 항생제 연고), 정관장 홍삼정 스틱 등이 약국에서 인기입니다. 처방전 없이 구매할 수 있으며, 약사에게 복용·사용법을 상담받을 수 있습니다."
      },
      {
        "title": "드러그스토어 뷰티템",
        "description": "올리브영 같은 드러그스토어에서 의약외품 밴드, 멀티비타민, 마스크팩, 선크림 등을 구매할 수 있습니다. 다양한 브랜드와 가격대가 있으며, 할인 행사가 자주 열립니다."
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
        "description": "Public restrooms in South Korea are mostly free and can be easily found at subway stations, parks, and large supermarkets. Since 2018, public restroom stalls no longer have trash bins, so flush toilet paper down the toilet. Some restrooms may not have toilet paper, so it's good to carry small tissues or wet wipes."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Traditional Crafts",
        "description": "Hanji (Korean paper) fans, knot accessories, and traditional pattern items are popular souvenirs that represent Korean culture. You can find them at traditional craft shops in Insadong or Myeongdong, where you'll discover authentic Korean craftsmanship."
      },
      {
        "title": "K-Beauty Products",
        "description": "Korean skincare brand mask packs, ampoule sets, and sunscreens are representative souvenirs. You can find a wide variety of brands and price ranges at drugstores like Olive Young, and budget options at Daiso, both easy to find throughout the country."
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
        "description": "Popular pharmacy items include coin patches (for muscle pain relief), Fucidin (an antibiotic ointment for cuts and skin infections), and Cheong Kwan Jang red ginseng sticks. They are available without a prescription, and pharmacists can advise you on how to use them."
      },
      {
        "title": "Beauty Drugstore Items",
        "description": "At drugstores like Olive Young, you can purchase bandages, multivitamins, mask packs, and sunscreens. There's a wide variety of brands and price ranges available, and discount events are frequent."
      },
      {
        "title": "Daily Necessities",
        "description": "Practical daily items like traditional patches, mosquito bite roll-on products, and athlete's foot treatments are available at pharmacies and drugstores. These stores make it easy to find small items you might need during your trip."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "South Korea uses Type C and F plugs (220V, 60Hz), the round two-pin European style, so US travelers need a plug adapter. Most modern electronics support 110V~240V, so a voltage converter may not be necessary. Check your device's voltage range before traveling."
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
        "description": "Bring a card with no foreign transaction fees; Visa and Mastercard are accepted at most stores. Korean pay apps are limited for tourists: Kakao Pay generally requires a Korean phone number, and Naver Pay offers only partial access via passport verification. Some small businesses may only accept cash, so carry some small bills. Check the official app sites before you go."
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
        "description": "US citizens can visit South Korea visa-free for up to 90 days for tourism. Your passport must be valid for your entire stay (Korea sets no 6-month minimum, but some airlines may apply their own rules)."
      },
      {
        "title": "K-ETA and e-Arrival Card",
        "description": "US citizens are temporarily exempt from the K-ETA (Korea Electronic Travel Authorization) until December 31, 2026; during the exemption, fill in the online e-Arrival Card before landing. From January 1, 2027, you will need an approved K-ETA before departure (apply at least 72 hours ahead on the official site k-eta.go.kr). Exemption dates can change, so check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "일본에서는 팁을 주지 않습니다. 대부분의 식당은 식사 후 출구 쪽 계산대에서 계산하며, 라멘·규동 가게처럼 식권 자판기로 먼저 결제하는 곳도 많습니다."
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
        "description": "신사에서는 두 번 절하고 두 번 손뼉을 친 뒤 한 번 더 절하는 것이 일반적입니다. 사찰에서는 손뼉을 치지 않고 조용히 합장하여 인사합니다. 참배 전 손을 씻는 정화 의식도 있습니다."
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
        "description": "공항 면세점에서는 공항 한정 과자, 일본 위스키와 사케 등이 인기입니다. 출국 직전에 선물을 한 번에 구매하기 좋습니다."
      }
    ],
    "market": [
      {
        "title": "드럭스토어 상비약",
        "description": "샤론파스·로이히츠보코(동전파스) 같은 통증 패치, 오타이산 위장약 등이 약국이나 드럭스토어에서 인기입니다. 처방전 없이 구매 가능한 일반의약품입니다."
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
        "description": "사카이·세키 등 유명 산지의 일본 식칼, 교토 말차 가루 등이 좋은 선물이 됩니다. 칼은 기내 반입이 안 되므로 위탁 수하물에 넣어야 합니다."
      },
      {
        "title": "뷰티템",
        "description": "사보리노 아침 마스크 등 뷰티 제품을 드럭스토어에서 구매할 수 있습니다. 다양한 브랜드와 가격대가 있습니다."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "일본은 콘센트 타입 A·B(납작한 11자형, 100V, 50/60Hz)를 사용하므로 한국 플러그용 변환 어댑터(돼지코)가 필요합니다. 휴대폰·노트북 충전기는 대부분 100~240V를 지원하지만, 드라이기 등 220V 전용 제품은 전압 변환기가 필요할 수 있으니 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "인터넷 및 교통패스",
        "description": "eSIM을 사전 구매하면 편리합니다. JR 패스는 '단기체재' 자격으로 입국한 외국인 여행자만 이용할 수 있으며, 온라인으로 구매한 뒤 일본 역에서 여권을 제시하고 실물 패스를 받습니다. 가격이 크게 올라 일정에 따라 지역 패스가 더 저렴할 수 있으니 출발 전 공식 사이트에서 확인하세요."
      },
      {
        "title": "일본 eSIM",
        "titleEn": "Japan eSIM",
        "link": "https://link.coupang.com/a/c5SfTd",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrwJ\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "교통카드",
        "description": "스이카(Suica)·파스모(PASMO)는 역 발매기에서 실물 카드로 구입하거나, 아이폰이라면 애플 월렛 또는 'Welcome Suica Mobile' 앱으로 발급할 수 있습니다. 버스, 지하철, 편의점 등에서 사용 가능합니다."
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
        "description": "Tipping is not practiced in Japan. At most restaurants you pay after your meal at the register near the exit, while many ramen and rice-bowl shops use a ticket machine where you pay first."
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
        "description": "At Shinto shrines, it's customary to bow twice, clap twice, then bow once more. At Buddhist temples, don't clap; simply put your hands together and bow quietly. There's also a purification ritual of washing your hands before worship."
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
        "description": "Airport-exclusive sweets and Japanese whisky and sake are popular at airport duty-free shops. They're convenient for picking up last-minute gifts before departure."
      }
    ],
    "marketEn": [
      {
        "title": "Drugstore Essentials",
        "description": "Pain patches such as Salonpas and Roihi-tsuboko, and Ota-isan stomach medicine are popular at pharmacies and drugstores. These are over-the-counter medicines available without a prescription."
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
        "description": "Japanese kitchen knives from famous makers in Sakai or Seki, and Kyoto matcha powder make great gifts. Knives are not allowed in carry-on bags, so pack them in checked baggage."
      },
      {
        "title": "Beauty Items",
        "description": "Beauty products like Saborino morning face masks are available at drugstores. There's a wide variety of brands and price ranges."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Japan uses Type A and B plugs (100V, 50/60Hz). US plugs fit, but some outlets lack the third (ground) hole, so a simple adapter can help. The voltage is slightly lower than in the US, which most chargers handle fine. Check your device's voltage range before traveling."
      },
      {
        "title": "Internet and Transportation Pass",
        "description": "It's good to pre-purchase an eSIM. The JR Pass is only for foreign visitors entering Japan as 'Temporary Visitors'; buy it online, then collect the physical pass at a JR station with your passport. Prices have risen significantly, so regional passes may be cheaper. Check the official site before you go."
      },
      {
        "title": "Transportation Card",
        "description": "Buy a physical Suica or PASMO card at station ticket machines, or on iPhone add one to Apple Wallet or use JR East's Welcome Suica Mobile app. These cards work on buses, subways, and at convenience stores."
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
        "description": "한국인은 관광 목적으로 최대 90일간 무비자 입국이 가능합니다. 여권은 체류 기간 동안 유효하면 되며(일본은 6개월 이상 잔여 기간을 요구하지 않지만, 일부 항공사는 자체 기준을 둘 수 있습니다), 귀국 또는 제3국행 항공권을 소지하는 것이 좋습니다."
      },
      {
        "title": "입국 시 필요 서류",
        "description": "유효한 여권과 귀국(또는 제3국행) 항공권을 준비하시기 바랍니다. 숙소 예약 확인서가 필수 서류는 아니지만, 입국 심사에서 체류지 주소·여행 목적·체류 기간을 물어볼 수 있으니 숙소 정보를 바로 보여줄 수 있게 준비하는 것이 좋습니다."
      },
      {
        "title": "Visit Japan Web·JESTA",
        "description": "입국 전 'Visit Japan Web'에 입국·세관 정보를 등록하면 QR 코드로 빠르게 수속할 수 있습니다. 일본의 전자여행허가(JESTA)는 2028년도 이후 도입 예정으로 현재는 필요하지 않습니다. 도입 시기는 바뀔 수 있으니 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can visit Japan visa-free for up to 90 days for tourism. Your passport must be valid for your entire stay (Japan has no 6-month rule, though some airlines apply their own), and you should hold a return or onward ticket."
      },
      {
        "title": "Required Documents",
        "description": "Bring a valid passport and a return or onward ticket. An accommodation confirmation isn't a formal requirement, but immigration may ask for your address in Japan, travel purpose, and length of stay, so keep your hotel details handy."
      },
      {
        "title": "Visit Japan Web & JESTA",
        "description": "Register your immigration and customs details on Visit Japan Web before arrival to get QR codes for faster processing. Japan's planned electronic travel authorization (JESTA) is expected from fiscal 2028 at the earliest and is not required yet. Timing may change, so check the official site before you go."
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
      "population": 123000000,
      "languages": [
        "Japanese"
      ],
      "languagesKo": [
        "일본어"
      ],
      "drivingSide": "left"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "파리의 거리 공중화장실(사니세트)과 공원 화장실은 대부분 무료입니다. 다만 지하철역에는 화장실이 거의 없고, 대형 기차역 화장실은 유료인 경우가 많습니다. 카페나 레스토랑 화장실은 손님용이므로 음료 등을 주문한 뒤 이용하는 것이 일반적입니다."
      }
    ],
    "souvenirs": [
      {
        "title": "과자 및 식품",
        "description": "라뒤레 마카롱, 본 마망(Bonne Maman) 비스킷·잼, 마들렌, 게랑드 소금 등이 인기 기념품입니다. 단, 카망베르 등 치즈는 한국 입국 시 휴대 반입이 금지된 유제품이니 현지에서 즐기시기 바랍니다."
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
        "description": "감기약, 진통제, 파스 등 일반의약품은 초록색 십자가 간판의 약국(pharmacie)에서만 살 수 있습니다. 증상을 설명하면 약사가 처방전 없이 살 수 있는 제품을 추천해 줍니다."
      },
      {
        "title": "미식 선물용 식료품",
        "description": "와인, 잼, 초콜릿, 디종 머스터드 등이 좋은 미식 선물이 됩니다. 햄·소시지 같은 육가공품과 치즈 등 유제품은 한국 입국 시 휴대 반입이 금지되어 과태료가 부과될 수 있으니 현지에서 즐기시기 바랍니다."
      },
      {
        "title": "슈퍼마켓 과자",
        "description": "모노프리(Monoprix), 까르푸 등 슈퍼마켓에서 비스킷, 마들렌, 잼 같은 프랑스 과자를 저렴하게 살 수 있습니다."
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
        "description": "파리에서는 종이 티켓이 단계적으로 폐지되어 Navigo Easy 카드나 스마트폰에 승차권을 충전해 사용합니다. 지하철, 버스, 트램, RER에서 사용할 수 있으며, 탑승 시 반드시 개찰기에 태그해야 합니다. 태그하지 않으면 무임승차로 간주되어 높은 벌금이 부과됩니다. 신용카드 비접촉 결제는 일부 노선부터 단계적으로 도입되고 있습니다."
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
        "description": "Paris street toilets (sanisettes) and park toilets are mostly free. Métro stations rarely have toilets, and toilets in major train stations are often paid. Café and restaurant toilets are generally for customers, so order something first."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Confectionery and Food",
        "description": "Ladurée macarons, Bonne Maman biscuits and jam, madeleines, and Guérande salt are popular souvenirs. These make great gifts representing French gastronomic culture."
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
        "description": "Over-the-counter medicines such as cold remedies, painkillers and patches are sold only in pharmacies (look for the green cross). Describe your symptoms and the pharmacist can recommend non-prescription products."
      },
      {
        "title": "Gourmet Gift Items",
        "description": "Wine, jams, chocolate and Dijon mustard make great gourmet gifts. Cured meats like saucisson are restricted by US customs, so check the rules before buying meat products to bring home."
      },
      {
        "title": "Supermarket Treats",
        "description": "Supermarkets such as Monoprix and Carrefour sell French biscuits, madeleines and jams at low prices."
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
        "description": "Paris has phased out paper tickets; load tickets onto a Navigo Easy card or your smartphone. They work on the metro, buses, trams and RER. Always tap the validator when boarding, or you may be fined for fare evasion. Contactless bank-card payment is being introduced gradually, starting with some lines."
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
        "title": "무비자 입국",
        "description": "한국인은 프랑스를 포함한 솅겐 지역에서 180일 중 최대 90일까지 비자 없이 체류할 수 있습니다. 여권은 솅겐 지역 출국 예정일 기준 3개월 이상 유효해야 하며, 발급일이 10년 이내여야 합니다. 입국 심사 시 귀국(또는 제3국행) 항공권, 숙소, 체류 경비를 증명할 자료를 요구받을 수 있습니다."
      },
      {
        "title": "입국 시 필요 서류",
        "description": "유효한 여권, 귀국(또는 제3국행) 항공권, 숙소 예약 확인서, 체류 경비를 증명할 자료를 준비하시기 바랍니다. 여행자 보험은 무비자 입국의 필수 서류는 아니지만 가입을 권장합니다. 입국 심사 시 여행 목적과 체류 기간을 물어볼 수 있습니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시 여권 도장 대신 EES(출입국 시스템)에 얼굴 사진과 지문(만 12세 미만은 지문 제외)이 등록됩니다. 첫 입국 시 등록 절차로 대기 시간이 길어질 수 있습니다. ETIAS(유럽 사전 여행 허가)는 아직 시행되지 않았고 공식 시행일도 정해지지 않아 지금은 신청할 필요가 없습니다. 유료 대행 사이트에 주의하시고, 출발 전 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including France) visa-free for up to 90 days in any 180-day period. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and issued within the last 10 years (6 months' validity is recommended). Border officers may ask for a return or onward ticket, accommodation details and proof of sufficient funds."
      },
      {
        "title": "Required Documents",
        "description": "Carry a valid passport, a return or onward ticket, accommodation confirmation and proof of sufficient funds. Travel insurance is not mandatory for visa-free visitors but is strongly recommended. Immigration may ask about your travel purpose and length of stay."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Entry/Exit System (EES) records your face and fingerprints (no fingerprints for children under 12) instead of stamping your passport. Expect longer lines on your first entry. ETIAS (the EU travel authorization) has not launched and has no official start date, so you do not need it yet. Avoid paid third-party sites and check the official site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "식당에서 생수는 보통 유료입니다. 스페인은 법으로 식당과 바에서 수돗물을 무료로 제공하도록 하고 있으니, 원하면 수돗물(agua del grifo)을 요청하시기 바랍니다."
      },
      {
        "title": "식사 시간",
        "description": "저녁 식사는 늦게 시작하므로(보통 오후 8시 이후), 인기 맛집은 사전 예약이 안전합니다. 점심은 오후 2시경에 시작됩니다."
      },
      {
        "title": "화장실 이용",
        "description": "스페인은 거리 공중화장실이 많지 않고 지하철역에도 화장실이 거의 없습니다. 카페, 백화점, 쇼핑몰 화장실을 이용하는 경우가 많으며, 카페 화장실은 음료 등을 주문한 손님용인 경우가 많습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 기념품",
        "description": "엑스트라 버진 올리브오일, 투론(Turrón), 사프란 등이 인기 기념품입니다. 하몬, 이베리코 살라미 등 육가공품은 한국 입국 시 휴대 반입이 금지되어 과태료가 부과될 수 있으니 현지에서 즐기시기 바랍니다."
      },
      {
        "title": "플라멩코 소품",
        "description": "카스타네츠, 손부채, 드레스 액세서리 등 플라멩코 관련 소품들이 인기입니다. 안달루시아 지역에서 구매할 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "스페인 세라믹, 금·은실을 상감한 톨레도 다마스키나도 공예품, 마요리카 진주 등 전통 공예품이 좋은 선물이 됩니다. 각 지역별 특색 있는 공예품을 만나볼 수 있습니다."
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
        "description": "Almax(제산제), 이부프로펜·파라세타몰 진통제, 애프터선 젤 등은 약국에서 처방전 없이 구매할 수 있습니다. 진통제 놀로틸(Nolotil)은 스페인에서 처방전이 필요한 약이며, 부작용 위험 때문에 외국인 여행자에게는 권장되지 않습니다."
      },
      {
        "title": "요리 재료",
        "description": "빠에야 키트, 사프란, 훈제 파프리카 가루(피멘톤) 등이 좋은 선물이 됩니다. 스페인 요리를 집에서 재현할 수 있는 재료들을 구매할 수 있습니다."
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
        "description": "바르셀로나에서는 1인용 10회권 T-Casual(T-Mobilitat 카드에 충전)을 사용하거나 지하철에서 비접촉 신용카드로 바로 결제할 수 있습니다. 공항 노선(L9 Sud)은 별도 요금입니다. 마드리드 지하철은 2026년 6월부터 모든 역 개찰구에서 비접촉 신용카드·스마트폰 결제가 가능하며, 교통카드(Tarjeta Multi)도 사용할 수 있습니다. 탑승 시 반드시 개찰기에 태그해야 하며, 태그하지 않으면 벌금이 부과됩니다. 요금은 변동될 수 있으니 출발 전 공식 사이트에서 확인하세요."
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
        "description": "Bottled water is usually charged. By law, Spanish bars and restaurants must provide tap water (agua del grifo) free of charge on request."
      },
      {
        "title": "Meal Times",
        "description": "Dinner starts late (usually after 8 PM), so popular restaurants should be reserved in advance. Lunch starts around 2 PM."
      },
      {
        "title": "Restroom Usage",
        "description": "Street public toilets are scarce in Spain, and most metro stations have none. Cafés, department stores and malls are the usual options; café toilets are generally for paying customers."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food Souvenirs",
        "description": "Extra virgin olive oil, turrón and saffron are popular souvenirs. Cured meats like jamón and Iberico salami are restricted by US customs, so enjoy them in Spain rather than packing them home."
      },
      {
        "title": "Flamenco Items",
        "description": "Flamenco-related items like castanets, hand fans, and dress accessories are popular. You can find them in the Andalusia region."
      },
      {
        "title": "Traditional Crafts",
        "description": "Spanish ceramics, Toledo damascene (gold- and silver-inlaid steel) crafts, and Majorica pearls make great gifts. You can find unique crafts from different regions."
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
        "description": "Almax (antacid), ibuprofen or paracetamol painkillers, and after-sun gel are available at pharmacies without a prescription. Nolotil (metamizole) requires a prescription in Spain and is not recommended for visitors because of the risk of serious side effects."
      },
      {
        "title": "Cooking Ingredients",
        "description": "Paella kits, saffron and smoked paprika (pimentón) make great gifts. You can purchase ingredients to recreate Spanish dishes at home."
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
        "description": "In Barcelona, use the single-person 10-trip T-Casual (loaded on a T-Mobilitat card) or tap a contactless bank card on the metro; the airport line (L9 Sud) has a separate fare. Since June 2026, all Madrid Metro gates accept contactless bank cards and phones, and the Tarjeta Multi card also works. Always validate when boarding, or you may be fined. Fares change, so check the official site before you go."
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
        "title": "무비자 입국",
        "description": "한국인은 스페인을 포함한 솅겐 지역에서 180일 중 최대 90일까지 비자 없이 체류할 수 있습니다. 여권은 솅겐 지역 출국 예정일 기준 3개월 이상 유효해야 하며, 발급일이 10년 이내여야 합니다. 입국 심사 시 귀국(또는 제3국행) 항공권, 숙소, 체류 경비를 증명할 자료를 요구받을 수 있습니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시 여권 도장 대신 EES(출입국 시스템)에 얼굴 사진과 지문(만 12세 미만은 지문 제외)이 등록됩니다. 첫 입국 시 등록 절차로 대기 시간이 길어질 수 있습니다. ETIAS(유럽 사전 여행 허가)는 아직 시행되지 않았고 공식 시행일도 정해지지 않아 지금은 신청할 필요가 없습니다. 유료 대행 사이트에 주의하시고, 출발 전 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Spain) visa-free for up to 90 days in any 180-day period. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and issued within the last 10 years (6 months' validity is recommended). Border officers may ask for a return or onward ticket, accommodation details and proof of sufficient funds."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Entry/Exit System (EES) records your face and fingerprints (no fingerprints for children under 12) instead of stamping your passport. Expect longer lines on your first entry. ETIAS (the EU travel authorization) has not launched and has no official start date, so you do not need it yet. Avoid paid third-party sites and check the official site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "미국은 공중화장실이 많지 않은 편이며, 카페·패스트푸드점 화장실은 대부분 손님만 이용할 수 있습니다(스타벅스도 2025년부터 구매 고객 전용). 쇼핑몰, 대형마트, 공원, 박물관, 고속도로 휴게소 화장실은 무료로 이용할 수 있는 경우가 많습니다."
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
        "description": "Public restrooms are less common than you might expect, and café and fast-food restrooms are usually for customers only (Starbucks has required a purchase since 2025). Malls, large stores, parks, museums, and highway rest areas usually have free restrooms."
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
        "description": "미국 국토안보부 공식 웹사이트(esta.cbp.dhs.gov)나 공식 앱에서 신청할 수 있습니다. 수수료는 약 40달러이며 물가에 따라 매년 조정되므로, 출발 전 공식 사이트에서 확인하세요. 대행 사이트는 추가 수수료를 받으니 주의하시기 바랍니다. 승인 여부는 이메일로 통보됩니다."
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
      "population": 340000000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "right"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "종이 승차권은 지하철은 개찰구에서, 버스와 트램은 탑승 즉시 차내 개찰기에 각인해야 합니다. 비접촉 카드로 결제했다면 같은 카드를 태그하면 됩니다. 각인하지 않으면 무임승차로 간주되어 높은 벌금이 부과될 수 있습니다."
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
        "title": "파스타 및 소스",
        "description": "파스타, 페스토 소스, 리몬첼로 등이 인기입니다. 그라나 파다노 등 치즈는 한국 입국 시 휴대 반입이 금지된 유제품이니 현지에서 즐기시기 바랍니다."
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
        "description": "파르미지아노 레지아노, 프로슈토 등은 현지에서 맛보시기 바랍니다. 육가공품과 치즈 등 유제품은 한국 입국 시 휴대 반입이 금지되어 과태료가 부과될 수 있습니다. 선물용으로는 파스타, 발사믹 식초, 페스토 등이 좋습니다."
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
        "description": "로마에서는 100분 승차권(BIT)이나 1일권 등을 살 수 있고, 로마와 밀라노 모두 지하철 개찰구와 버스에서 비접촉 신용카드나 스마트폰으로 바로 결제(tap&go)할 수 있습니다. 종이 승차권은 지하철은 개찰구에서, 버스와 트램은 탑승 즉시 차내 개찰기에 각인해야 하며, 각인하지 않으면 높은 벌금이 부과됩니다. 요금은 변동될 수 있으니 출발 전 공식 사이트에서 확인하세요."
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
        "description": "Validate paper tickets at the metro gate, or on board immediately after boarding buses and trams. If you pay by contactless card, tap the same card. Unvalidated tickets count as fare evasion and can lead to high fines."
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
        "description": "Enjoy Parmigiano Reggiano and prosciutto locally. Meat products are restricted by US customs, so check the rules before packing cured meats; pasta, balsamic vinegar and pesto are safer gift choices."
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
        "description": "In Rome you can buy a 100-minute BIT ticket or day passes, and in both Rome and Milan you can tap a contactless bank card or phone at metro gates and on buses (tap&go). Validate paper tickets at the metro gate, or on board immediately after boarding buses and trams; unvalidated tickets can lead to high fines. Fares change, so check the official site before you go."
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
        "title": "무비자 입국",
        "description": "한국인은 이탈리아를 포함한 솅겐 지역에서 180일 중 최대 90일까지 비자 없이 체류할 수 있습니다. 여권은 솅겐 지역 출국 예정일 기준 3개월 이상 유효해야 하며, 발급일이 10년 이내여야 합니다. 입국 심사 시 귀국(또는 제3국행) 항공권, 숙소, 체류 경비를 증명할 자료를 요구받을 수 있습니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시 여권 도장 대신 EES(출입국 시스템)에 얼굴 사진과 지문(만 12세 미만은 지문 제외)이 등록됩니다. 첫 입국 시 등록 절차로 대기 시간이 길어질 수 있습니다. ETIAS(유럽 사전 여행 허가)는 아직 시행되지 않았고 공식 시행일도 정해지지 않아 지금은 신청할 필요가 없습니다. 유료 대행 사이트에 주의하시고, 출발 전 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Italy) visa-free for up to 90 days in any 180-day period. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and issued within the last 10 years (6 months' validity is recommended). Border officers may ask for a return or onward ticket, accommodation details and proof of sufficient funds."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Entry/Exit System (EES) records your face and fingerprints (no fingerprints for children under 12) instead of stamping your passport. Expect longer lines on your first entry. ETIAS (the EU travel authorization) has not launched and has no official start date, so you do not need it yet. Avoid paid third-party sites and check the official site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "튀르키예에서는 식당과 가이드 서비스에 5~10%의 팁이 일반적입니다. 택시는 요금을 반올림하는 정도면 충분하며, 호텔 벨보이와 하우스키핑에는 가방당·하루당 약 1~2달러에 해당하는 리라를 주는 경우가 많습니다. 물가 변동이 커서 리라 금액은 수시로 달라지니 현지 물가에 맞춰 조정하세요."
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
        "description": "나자르 본주, 튀르키예 타일, 전통 카펫·킬림(kilim) 등이 인기입니다. 튀르키예의 전통 공예 기술을 만나볼 수 있습니다."
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
        "description": "헬바(할바), 수프 믹스, 말린 과일 등이 Migros 마트에서 인기입니다. 튀르키예의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
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
        "description": "튀르키예는 콘센트 타입 C/F(230V, 50Hz)를 사용합니다. 한국과 같은 모양이라 한국 플러그를 그대로 쓸 수 있으며, 전압도 비슷해 별도의 어댑터나 변압기가 필요 없습니다."
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
        "description": "In Türkiye, 5–10% is a common tip at restaurants and for guides. Rounding up is enough for taxis. For hotel porters and housekeeping, the lira equivalent of about US$1–2 per bag or per day is typical; lira amounts change quickly with inflation, so adjust to local prices."
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
        "description": "한국인은 관광 목적으로 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 입국일 기준 6개월 이상 남아 있는 것이 안전하며(튀르키예 규정상 최소 체류 기간+60일), 입국 심사에서 귀국 항공권을 요구받을 수 있습니다."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "프리다 칼로, 디에고 리베라의 작품을 담은 아트 프린트 등이 좋은 선물이 됩니다. 멕시코를 대표하는 화가들의 작품을 구매할 수 있습니다."
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
        "description": "Soriana/La Comer 마트의 토르티야 칩, 살사, 마사 아리나(옥수수 가루) 등이 인기입니다. 멕시코의 대표적인 식재료들을 저렴하게 구매할 수 있습니다."
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
        "description": "항공편으로 입국하면 종이 FMM 관광카드 대신 여권 입국 도장이나 디지털 FMM(FMMD)으로 체류 허가 일수가 기록됩니다. 멕시코 이민청(INM) 누리집에서 디지털 FMM을 내려받아 보관하고, 출국할 때 요청하면 보여 줄 수 있도록 하시기 바랍니다. 육로로 입국할 때는 FMM을 따로 작성해야 합니다. 절차가 자주 바뀌니 출발 전 공식 사이트에서 확인하세요."
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
        "description": "멕시코시티 지하철은 종이 승차권이 폐지되어 충전식 통합교통카드(Tarjeta de Movilidad Integrada, MI)가 있어야 탈 수 있습니다. 역 매표소나 자동판매기에서 구매·충전할 수 있으며, 메트로버스, 경전철, 트롤리버스, 케이블카에서도 사용할 수 있습니다. 출퇴근 시간에는 매우 혼잡하니 소지품에 주의하시기 바랍니다."
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
        "description": "If you arrive by air, the paper FMM tourist card has been replaced by a passport stamp or digital FMM (FMMD) showing your permitted stay. Download the digital FMM from the INM (immigration) website and keep it for departure. Land arrivals still need to complete an FMM. Procedures change often, so check the official site before you go."
      },
      {
        "title": "Internet Connection",
        "description": "It's good to pre-prepare Telcel or AT&T Mexico eSIM/SIM. You can also purchase at the airport, but buying online in advance is often cheaper."
      },
      {
        "title": "Transportation Card",
        "description": "Mexico City's Metro no longer uses paper tickets; you need the rechargeable Integrated Mobility Card (Tarjeta MI), sold and topped up at station booths and machines. It also works on Metrobús, light rail, trolleybuses, and Cablebús. Rush hours are very crowded, so watch your belongings."
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
        "description": "한국인은 관광 목적으로 최대 180일까지 무비자로 머물 수 있습니다. 다만 실제 체류 가능 일수는 입국 심사관이 정해 여권 도장이나 디지털 입국 기록에 적어 주며, 180일보다 짧게 허가되는 경우도 많습니다. 여권은 체류 기간 내내 유효해야 하며, 항공사 탑승 문제를 피하려면 6개월 이상 남겨 두는 것이 안전합니다. 돌아가는 항공권과 숙소 예약 내역을 준비하시기 바랍니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can visit Mexico visa-free for tourism for up to 180 days, but the immigration officer decides the actual number of days and records it at entry; it is often fewer than 180. Your passport must be valid for your whole stay (6+ months is recommended to avoid airline issues). Have a return or onward ticket and accommodation details ready."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "펍에서는 바에서 직접 주문하고 바로 결제합니다. 바에서 주문할 때는 팁을 주지 않는 것이 일반적이며, 테이블 서비스를 받은 경우에만 팁을 고려하시면 됩니다."
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
        "description": "영국은 주요 기차역, 박물관, 백화점 화장실을 무료로 이용할 수 있는 곳이 많습니다. 일부 공중화장실은 소액을 받으며, 런던 지하철역에는 화장실이 없는 곳이 많으니 미리 이용하시기 바랍니다."
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
        "description": "Boots 자체 브랜드인 No7, Soap & Glory 등의 뷰티 제품이 인기입니다. 영국의 인기 스킨케어 제품들을 구매할 수 있습니다."
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
        "description": "런던에서는 비접촉 신용카드나 스마트폰으로 충전 없이 바로 탑승할 수 있으며, 오이스터 카드와 같은 일일 요금 상한이 적용됩니다. 버스는 현금 결제가 불가하므로 카드가 필수입니다."
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
        "description": "In pubs, order and pay at the bar. Tipping at the bar is not expected; consider a tip only if you receive table service."
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
        "description": "Toilets at major railway stations, museums and department stores are often free. Some public toilets charge a small fee, and many London Underground stations have no toilets, so plan ahead."
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
        "description": "Boots' own brands No7 and Soap & Glory are popular beauty products. You can purchase popular British skincare products."
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
        "description": "In London you can tap a contactless bank card or phone with no top-up needed, and the same daily fare caps as Oyster apply. Buses don't accept cash, so a card is essential."
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
        "title": "ETA 필요",
        "description": "한국인은 관광 목적으로 최대 6개월까지 비자 없이 체류할 수 있지만, 출국 전 반드시 전자여행허가(ETA)를 받아야 합니다. ETA는 영국 정부 공식 앱(UK ETA) 또는 gov.uk에서 신청하며 보통 3영업일 이내에 결과가 나옵니다. 수수료는 약 20파운드이며 변동될 수 있으니 출발 전 공식 사이트에서 확인하세요. 한 번 받으면 2년간(그 전에 여권이 만료되면 만료일까지) 여러 번 방문할 수 있습니다."
      },
      {
        "title": "여권·입국 서류",
        "description": "영국은 여권이 체류 기간 내내 유효하면 입국할 수 있습니다. 귀국 항공권 등 체류 후 출국 계획과 체류 경비를 증명할 자료를 준비하시기 바랍니다. 여권을 새로 발급받으면 ETA도 다시 신청해야 하며, 추가 수수료를 받는 대행 사이트에 주의하세요."
      }
    ],
    "visaEn": [
      {
        "title": "ETA Required",
        "description": "US citizens can visit the UK visa-free for up to 6 months, but must get an Electronic Travel Authorisation (ETA) before travelling. Apply on the official UK ETA app or gov.uk; decisions usually take up to 3 working days. The fee is about £20 and may change, so check the official site before you go. An ETA lasts 2 years (or until your passport expires) and covers multiple trips."
      },
      {
        "title": "Passport & Documents",
        "description": "Your passport must be valid for your whole stay in the UK. Be ready to show a return or onward ticket and proof of funds. If you get a new passport, you need a new ETA. Avoid unofficial sites that charge extra fees."
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
      "population": 69300000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "left"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "독일의 공중화장실과 기차역 화장실은 대부분 유료(약 0.5~1.5유로)이며, 지하철(U-Bahn)역에는 화장실이 거의 없습니다. 카페나 레스토랑 화장실은 손님용인 경우가 많으니 음료 등을 주문한 뒤 이용하는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "식품 및 주류",
        "description": "리터스포트 초콜릿, 레프쿠헨(Lebkuchen), 독일 맥주 등이 인기 기념품입니다. 독일의 대표적인 식품과 주류를 만나볼 수 있습니다."
      },
      {
        "title": "전통 공예품",
        "description": "에르츠게비르게 지방의 호두까기 인형과 향 피우는 인형(Räuchermännchen), 전통 맥주잔(Bierkrug) 등이 인기 전통 공예품입니다."
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
        "description": "4711 오드콜로뉴, 니베아 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "DM 드럭스토어",
        "description": "바세린 립밤, Balea 화장품, 비타민 등이 DM 드럭스토어에서 인기입니다. 독일의 대표적인 드럭스토어입니다."
      },
      {
        "title": "마트 상품",
        "description": "REWE, Edeka에서는 머스터드, 프레첼 과자, 티칸네(Teekanne) 차 등을 저렴하게 살 수 있습니다. 소시지 등 육가공품과 치즈 등 유제품은 한국 입국 시 휴대 반입이 금지되어 과태료가 부과될 수 있습니다."
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
        "description": "dm의 Alverde, Rossmann의 Alterra 자연 화장품이 저렴하고 인기 있습니다. 독일의 천연 화장품 브랜드를 만나볼 수 있습니다."
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
        "description": "베를린과 뮌헨 모두 1회권과 1일권을 BVG·MVV 앱이나 발매기에서 살 수 있으며, 베를린에서는 관광용 Berlin WelcomeCard도 있습니다. 발매기에서 산 종이 승차권은 승강장 개찰기에 각인해야 하는 경우가 있고, 검표가 수시로 이루어지므로 승차권을 항상 소지해야 합니다. 체류가 길다면 전국 근거리·지역 교통을 무제한 이용하는 월 구독형 도이칠란트티켓(약 63유로, 해지 신청 필요)도 고려해 보세요. 요금은 변동될 수 있으니 출발 전 공식 사이트에서 확인하세요."
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
        "description": "Public and train-station toilets in Germany are usually paid (about €0.50–1.50), and U-Bahn stations rarely have toilets. Café and restaurant toilets are generally for customers, so order something first."
      }
    ],
    "souvenirsEn": [
      {
        "title": "Food and Alcohol",
        "description": "Ritter Sport chocolate, Lebkuchen gingerbread and German beer are popular souvenirs. You can find representative German foods and alcoholic beverages."
      },
      {
        "title": "Traditional Crafts",
        "description": "Erzgebirge nutcrackers and incense smokers (Räuchermännchen) and traditional beer steins are popular German crafts."
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
        "description": "4711 Eau de Cologne and Nivea sets are popular at duty-free shops. You can purchase them at airport duty-free shops."
      }
    ],
    "marketEn": [
      {
        "title": "DM Drugstore",
        "description": "Vaseline lip balm, Balea cosmetics, and vitamins are popular at DM drugstores. This is a representative German drugstore."
      },
      {
        "title": "Market Products",
        "description": "REWE and Edeka sell mustard, pretzel snacks and Teekanne teas at low prices. Sausages and other meat products are restricted by US customs, so check the rules before packing them."
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
        "description": "dm's Alverde and Rossmann's Alterra natural cosmetics are affordable and popular. You can find German natural cosmetic brands."
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
        "description": "In Berlin and Munich, buy single or day tickets from the BVG/MVV apps or machines; Berlin also offers the Berlin WelcomeCard for visitors. Paper tickets from machines may need validating at platform stamping machines, and checks are frequent, so always carry your ticket. For longer stays, consider the Deutschlandticket (about €63/month, a subscription you must cancel), valid on all local and regional transport nationwide. Fares change, so check the official site before you go."
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
        "title": "무비자 입국",
        "description": "한국인은 독일을 포함한 솅겐 지역에서 180일 중 최대 90일까지 비자 없이 체류할 수 있습니다. 여권은 솅겐 지역 출국 예정일 기준 3개월 이상 유효해야 하며, 발급일이 10년 이내여야 합니다. 입국 심사 시 귀국(또는 제3국행) 항공권, 숙소, 체류 경비를 증명할 자료를 요구받을 수 있습니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시 여권 도장 대신 EES(출입국 시스템)에 얼굴 사진과 지문(만 12세 미만은 지문 제외)이 등록됩니다. 첫 입국 시 등록 절차로 대기 시간이 길어질 수 있습니다. ETIAS(유럽 사전 여행 허가)는 아직 시행되지 않았고 공식 시행일도 정해지지 않아 지금은 신청할 필요가 없습니다. 유료 대행 사이트에 주의하시고, 출발 전 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Germany) visa-free for up to 90 days in any 180-day period. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and issued within the last 10 years (6 months' validity is recommended). Border officers may ask for a return or onward ticket, accommodation details and proof of sufficient funds."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Entry/Exit System (EES) records your face and fingerprints (no fingerprints for children under 12) instead of stamping your passport. Expect longer lines on your first entry. ETIAS (the EU travel authorization) has not launched and has no official start date, so you do not need it yet. Avoid paid third-party sites and check the official site (travel-europe.europa.eu) before you go."
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
      "population": 83500000,
      "languages": [
        "German"
      ],
      "languagesKo": [
        "독일어"
      ],
      "drivingSide": "right"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "그리스는 공중화장실이 많지 않고, 관광지·교통 터미널이나 아크로폴리스 같은 주요 유적지에서는 유료인 경우가 많습니다. 카페·레스토랑 화장실은 보통 손님만 쓸 수 있습니다. 배관이 좁아 사용한 휴지는 변기에 넣지 말고 옆 휴지통에 버리는 것이 일반적이며, 휴지가 없는 곳도 있으니 챙기는 것이 좋습니다."
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
        "description": "코레스(Korres) 천연 화장품 세트 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "AB 바실로풀로스 마트의 올리브, 올리브오일, 허브 등이 인기입니다. 그리스의 대표 식재료를 저렴하게 구매할 수 있습니다. 페타 등 치즈는 한국 반입이 대부분 제한되니 현지에서 맛보시기 바랍니다."
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
        "description": "그리스는 콘센트 타입 C/F(230V, 50Hz)를 사용합니다. 한국과 같은 모양이라 한국 플러그를 그대로 쓸 수 있으며, 전압도 비슷해 별도의 어댑터나 변압기가 필요 없습니다."
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
        "description": "Public toilets are scarce in Greece and are often paid at tourist hotspots, transport hubs, and major archaeological sites such as the Acropolis. Cafe and restaurant restrooms are usually for customers. Because the pipes are narrow, put used toilet paper in the bin next to the toilet rather than flushing it, and carry tissues since some toilets have none."
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
        "title": "무비자 입국",
        "description": "한국인은 솅겐 지역(그리스 포함)에서 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 솅겐 지역을 떠나는 날 기준으로 3개월 이상 남아 있어야 하고, 발급일이 10년 이내여야 합니다. 입국 심사에서 귀국 또는 다음 목적지 항공권을 요구받을 수 있으니 준비하시기 바랍니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시스템(EES)이 전면 시행되어, 처음 입국할 때 여권 정보와 얼굴 사진·지문을 등록합니다. 여권 도장 대신 전자 기록이 남으며, 첫 입국 때는 심사가 길어질 수 있으니 여유 있게 이동하시기 바랍니다. 사전 여행허가제(ETIAS)는 아직 시행되지 않았고 공식 시작일도 정해지지 않았습니다. ETIAS 신청을 유료로 대행한다는 사이트에 주의하시고, 출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Greece) visa-free for up to 90 days in any 180-day period for tourism. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and must have been issued within the last 10 years. Border officers may ask to see a return or onward ticket."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Schengen Entry/Exit System (EES) records your passport details, facial image, and fingerprints at your first entry, replacing passport stamps. Allow extra time at the border on your first trip. The ETIAS travel authorization has not launched yet and has no official start date, so be wary of sites charging for ETIAS applications. Check the official EU site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "알프스 허브티, 빈의 커피 브랜드 율리우스 마이늘(Julius Meinl) 원두 등이 좋은 선물이 됩니다. 오스트리아의 대표적인 식품을 구매할 수 있습니다."
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
        "description": "Spar Gourmet 등 마트의 알프스 꿀, 초콜릿, 허브티 등이 인기입니다. 소시지·햄 같은 육가공품은 한국 반입이 금지되어 적발 시 최대 약 1000만 원의 과태료가 부과될 수 있고, 치즈 등 유제품도 대부분 반입이 제한되니 현지에서 맛보시기 바랍니다. 출발 전 농림축산검역본부 누리집에서 확인하세요."
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
        "description": "오스트리아는 콘센트 타입 C/F(230V, 50Hz)를 사용합니다. 한국과 같은 모양이라 한국 플러그를 그대로 쓸 수 있으며, 전압도 비슷해 별도의 어댑터나 변압기가 필요 없습니다."
      },
      {
        "title": "교통 예약",
        "description": "ÖBB 앱으로 열차 티켓과 자리를 예약하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "빈에서는 Vienna City Card(24·48·72시간)나 일일 티켓을 구매할 수 있습니다. 지하철(U-Bahn), 트램, 버스에서 사용 가능하며, 종이 티켓은 탑승 전에 개찰기에 찍어야 합니다. 검표가 수시로 이루어지므로 티켓을 항상 소지해야 합니다."
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
        "description": "Alpine herbal tea and coffee from Vienna's Julius Meinl make great gifts. You can purchase representative Austrian foods."
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
        "description": "Alpine honey, chocolate, and herbal tea from supermarkets like Spar Gourmet are popular. Enjoy sausages and other meat products locally: many countries, including the US and Korea, ban bringing them home. Check your home country's customs rules before you go."
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
        "description": "In Vienna, you can buy a Vienna City Card (24/48/72 hours) or day tickets for the U-Bahn, trams, and buses. Paper tickets must be validated before boarding. Ticket checks are frequent, so always carry your ticket."
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
        "title": "무비자 입국",
        "description": "한국인은 솅겐 지역(오스트리아 포함)에서 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 솅겐 지역을 떠나는 날 기준으로 3개월 이상 남아 있어야 하고, 발급일이 10년 이내여야 합니다. 입국 심사에서 귀국 또는 다음 목적지 항공권을 요구받을 수 있으니 준비하시기 바랍니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시스템(EES)이 전면 시행되어, 처음 입국할 때 여권 정보와 얼굴 사진·지문을 등록합니다. 여권 도장 대신 전자 기록이 남으며, 첫 입국 때는 심사가 길어질 수 있으니 여유 있게 이동하시기 바랍니다. 사전 여행허가제(ETIAS)는 아직 시행되지 않았고 공식 시작일도 정해지지 않았습니다. ETIAS 신청을 유료로 대행한다는 사이트에 주의하시고, 출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Austria) visa-free for up to 90 days in any 180-day period for tourism. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and must have been issued within the last 10 years. Border officers may ask to see a return or onward ticket."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Schengen Entry/Exit System (EES) records your passport details, facial image, and fingerprints at your first entry, replacing passport stamps. Allow extra time at the border on your first trip. The ETIAS travel authorization has not launched yet and has no official start date, so be wary of sites charging for ETIAS applications. Check the official EU site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "중국에서는 구글, 유튜브, 인스타그램 등 많은 해외 앱·사이트가 차단되며 카카오톡도 불안정할 수 있습니다. 정부 승인을 받지 않은 VPN 사용은 원칙적으로 불법이니 주의하시고, 출국 전 로밍이나 해외 여행용 eSIM을 준비하는 것이 좋습니다."
      },
      {
        "title": "화장실 이용",
        "description": "중국의 공중화장실은 대부분 무료이지만, 일부는 유료입니다. 휴지가 없는 경우가 많으니 휴지를 준비하는 것이 좋습니다. 서양식 좌변기보다 쪼그려 앉는 화변기가 많은 편입니다."
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
        "description": "약국에서 판매하는 운남백약(云南白药) 파우더·스프레이 등 중국 전통 의약품이 인기입니다. 사용 전 설명서를 확인하고 약사에게 상담하시기 바랍니다."
      },
      {
        "title": "소셜커머스",
        "description": "현지 소셜커머스에서 구입하는 간식, 건조 과일 등이 좋은 선물이 됩니다. 중국의 다양한 간식들을 만나볼 수 있습니다."
      },
      {
        "title": "약국 추천템",
        "description": "감모령(感冒灵) 과립, 판란건(板蓝根) 같은 감기약과 타이거밤 등이 약국에서 인기입니다. 처방전 없이 구매할 수 있는 일반의약품이며, 성분이 한국 약과 다를 수 있으니 약사에게 확인하시기 바랍니다."
      },
      {
        "title": "티 브랜드",
        "description": "창사에서 시작된 차옌웨써(茶颜悦色) 같은 밀크티 전문점이 인기입니다. 매장 음료 외에 찻잎, 차 분말 등 포장 상품도 판매해 선물로 좋습니다."
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
        "description": "출국 전 해외 여행용 eSIM이나 로밍을 준비하는 것이 가장 간편하며, 중국에서도 잘 작동합니다. 현지 China Unicom, China Mobile 유심은 공항이나 매장에서 여권으로 실명 등록 후 구입할 수 있습니다."
      },
      {
        "title": "중국/홍콩 eSIM",
        "titleEn": "China/Hong Kong eSIM",
        "link": "https://link.coupang.com/a/c5SqEI",
        "iframe": "<iframe src=\"https://coupa.ng/ckJrSV\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "고속철 예약",
        "description": "고속철(고속열차) 티켓은 출발 15일 전(당일 포함)부터 12306 앱이나 여행 예약 앱에서 여권으로 예매할 수 있습니다. 특히 명절이나 연휴 기간에는 예매가 어려울 수 있으니 미리 예약하시기 바랍니다."
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
        "description": "Many foreign apps and sites (Google, YouTube, Instagram, WhatsApp) are blocked in China. Using a VPN that isn't government-approved is technically illegal, so be careful; consider setting up roaming or a travel eSIM before departure."
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
        "description": "Traditional Chinese medicines such as Yunnan Baiyao powder and spray are popular at pharmacies. Read the instructions and ask the pharmacist before use."
      },
      {
        "title": "Social Commerce",
        "description": "Snacks and dried fruit from local social commerce make great gifts. You can find a variety of Chinese snacks."
      },
      {
        "title": "Pharmacy Recommendations",
        "description": "Cold remedies such as Ganmaoling granules and Banlangen, along with Tiger Balm, are popular at pharmacies. They are over-the-counter, but ingredients may differ from medicines at home, so check with the pharmacist."
      },
      {
        "title": "Tea Brands",
        "description": "Milk-tea chains like Chayan Yuese, which started in Changsha, are popular. Besides fresh drinks, they sell packaged tea leaves and tea powder that make good gifts."
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
        "description": "The easiest option is a travel eSIM or roaming plan set up before departure; these work well in China. Local China Unicom or China Mobile SIM cards are sold at airports and stores and require passport registration."
      },
      {
        "title": "Transportation Card",
        "description": "In major cities like Beijing and Shanghai, you can purchase transportation cards or use mobile payments (Alipay, WeChat Pay) for public transportation. These work on subways and buses. In some areas, payment is made by scanning QR codes."
      },
      {
        "title": "High-Speed Rail Booking",
        "description": "High-speed rail tickets go on sale 15 days before departure (including the travel day) on the 12306 app or travel booking apps, using your passport. Especially during holidays or peak periods, booking may be difficult, so book early."
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
        "title": "무비자 입국",
        "description": "한국 일반여권 소지자는 관광·비즈니스·친지 방문·교류·경유 목적으로 최대 30일간 무비자로 중국에 입국할 수 있습니다. 이 조치는 현재 2026년 12월 31일까지 시행되며 연장 여부가 바뀔 수 있으니 출발 전 주한중국대사관 공지에서 확인하세요. 30일을 넘게 머물거나 유학·취업 등 다른 목적이라면 비자를 받아야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa Required",
        "description": "US citizens need a visa for a round-trip visit to China. Tourist (L) visas for Americans are usually issued as 10-year multiple-entry visas, with stays of up to 60 days per entry. Apply through a Chinese Visa Application Service Center; fees change, so check the official site before you go."
      },
      {
        "title": "240-Hour Visa-Free Transit",
        "description": "If you are traveling on to a third country or region (not back to the US), you may enter China without a visa for up to 240 hours (10 days) through designated ports. You need a confirmed onward ticket. Eligible ports and regions change, so check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "캐나다의 공중화장실은 대부분 무료이며, 쇼핑몰, 공원, 대중교통역 등에서 쉽게 찾을 수 있습니다. 휴지는 변기에 버리면 되지만, 물티슈와 생리용품은 휴지통에 버려야 합니다."
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
        "description": "원주민 공예품, 이누이트 조각품 등이 좋은 선물이 됩니다. 캐나다의 독특한 문화를 만나볼 수 있습니다."
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
        "description": "Loblaws, Metro 마트의 메이플 시럽, 메이플 쿠키, 연어 통조림 등이 인기입니다. 치즈 같은 유제품과 육포·소시지 등 육가공품은 현지에서 즐기시고, 한국으로는 가져올 수 없으니 주의하시기 바랍니다."
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
        "description": "토론토에서는 Presto 카드를, 밴쿠버에서는 Compass 카드를 쓸 수 있습니다. 두 도시 모두 비접촉 신용카드나 휴대폰 간편결제를 단말기에 대기만 해도 성인 요금으로 탈 수 있어, 단기 여행이라면 따로 카드를 사지 않아도 됩니다."
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
        "description": "Most public restrooms in Canada are free and easy to find in shopping malls, parks, and transit stations. Flush toilet paper, but put wet wipes and sanitary products in the bin."
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
        "description": "Toronto uses PRESTO and Vancouver uses Compass, but both accept contactless credit cards and mobile wallets at the adult fare, so short-stay visitors don't need to buy a card."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "Tesco, Spar 마트의 파프리카 가루, 꿀, 와인 등이 인기입니다. 살라미 같은 육가공품은 한국 반입이 금지되어 적발 시 최대 약 1000만 원의 과태료가 부과될 수 있고, 치즈 등 유제품도 대부분 반입이 제한되니 현지에서 맛보시기 바랍니다. 출발 전 농림축산검역본부 누리집에서 확인하세요."
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
        "description": "헝가리는 콘센트 타입 C/F(230V, 50Hz)를 사용합니다. 한국과 같은 모양이라 한국 플러그를 그대로 쓸 수 있으며, 전압도 비슷해 별도의 어댑터나 변압기가 필요 없습니다."
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
        "description": "유럽 eSIM 또는 Telekom, Yettel, One(옛 Vodafone) 등 헝가리 통신사 유심을 준비하는 것이 좋습니다. 공항에서도 구매 가능하지만 온라인으로 미리 구매하면 더 저렴할 수 있습니다."
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
        "description": "Paprika powder, honey, and wine from Tesco and Spar supermarkets are popular. Enjoy salami and other meat products locally: many countries, including the US and Korea, ban bringing them home. Check your home country's customs rules before you go."
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
        "description": "It's good to prepare a European eSIM or a SIM from a Hungarian carrier such as Telekom, Yettel, or One (formerly Vodafone). You can also buy one at the airport, but buying online in advance is often cheaper."
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
        "title": "무비자 입국",
        "description": "한국인은 솅겐 지역(헝가리 포함)에서 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 솅겐 지역을 떠나는 날 기준으로 3개월 이상 남아 있어야 하고, 발급일이 10년 이내여야 합니다. 입국 심사에서 귀국 또는 다음 목적지 항공권을 요구받을 수 있으니 준비하시기 바랍니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시스템(EES)이 전면 시행되어, 처음 입국할 때 여권 정보와 얼굴 사진·지문을 등록합니다. 여권 도장 대신 전자 기록이 남으며, 첫 입국 때는 심사가 길어질 수 있으니 여유 있게 이동하시기 바랍니다. 사전 여행허가제(ETIAS)는 아직 시행되지 않았고 공식 시작일도 정해지지 않았습니다. ETIAS 신청을 유료로 대행한다는 사이트에 주의하시고, 출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Hungary) visa-free for up to 90 days in any 180-day period for tourism. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and must have been issued within the last 10 years. Border officers may ask to see a return or onward ticket."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Schengen Entry/Exit System (EES) records your passport details, facial image, and fingerprints at your first entry, replacing passport stamps. Allow extra time at the border on your first trip. The ETIAS travel authorization has not launched yet and has no official start date, so be wary of sites charging for ETIAS applications. Check the official EU site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "린트(Lindt), 까이에(Cailler), 프레이(Frey), 레더라흐(Läderach) 등 스위스 초콜릿이 인기 기념품입니다. 마트에서도 다양한 브랜드와 맛을 저렴하게 만나볼 수 있습니다."
      },
      {
        "title": "스위스 시계",
        "description": "롤렉스, 오메가, 스와치 등 스위스 시계가 인기입니다. 스위스는 세계적인 시계 제조국입니다."
      },
      {
        "title": "스위스 치즈",
        "description": "그뤼에르, 엠멘탈, 아펜첼러 등 스위스 치즈는 대표 특산품이니 현지에서 꼭 맛보세요. 다만 치즈 등 유제품은 한국 반입이 대부분 제한되고 신고 없이 들여오면 과태료가 부과될 수 있으니, 선물로는 초콜릿이나 퐁뒤 도구 등을 고려하시기 바랍니다. 출발 전 농림축산검역본부 누리집에서 확인하세요."
      },
      {
        "title": "스위스 아미 나이프",
        "description": "빅토리녹스(Victorinox) 스위스 아미 나이프가 인기입니다. 실용적이고 품질이 좋으며, 이름을 새겨 주는 매장도 있습니다. 칼날이 있는 제품은 기내에 반입할 수 없으니 위탁 수하물에 넣으세요."
      },
      {
        "title": "면세점 상품",
        "description": "스위스 초콜릿 세트, 시계 등이 면세점에서 인기입니다. 공항 면세점에서 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Coop, Migros 마트의 초콜릿, 과자, 허브 캔디 등이 인기이며 가격도 기념품점보다 저렴합니다. 치즈, 요구르트 등 유제품은 한국 반입이 대부분 제한되니 현지에서 맛보시기 바랍니다."
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
        "description": "지역 시장에서 구매하는 꿀, 와인, 수제 초콜릿 등이 좋은 선물이 됩니다. 치즈는 시장에서 맛보는 것을 추천하며, 유제품은 한국 반입이 대부분 제한되니 출발 전 농림축산검역본부 누리집에서 확인하세요."
      },
      {
        "title": "편의점 상품",
        "description": "편의점에서 커피, 음료, 여행 간식 등을 살 수 있습니다. 스위스는 상점 영업시간이 짧고 일요일에 문을 닫는 곳이 많으니, 늦은 시간이나 일요일에는 기차역의 Coop Pronto, Migrolino, Avec 같은 매장을 이용하세요."
      }
    ],
    "essentials": [
      {
        "title": "전기 어댑터",
        "description": "스위스는 J타입(230V, 50Hz) 콘센트를 사용합니다. 얇은 2핀(C타입) 플러그는 꽂히는 경우가 있지만, 한국에서 흔한 굵은 원형 플러그(F타입)는 맞지 않으므로 스위스용(J타입) 어댑터를 준비하시기 바랍니다. 전압은 한국과 비슷해 변압기는 필요 없습니다."
      },
      {
        "title": "교통 예약",
        "description": "스위스 철도 SBB 앱과 모바일 탑승권을 저장하는 것이 좋습니다. 온라인으로 미리 예약하면 할인을 받을 수 있습니다."
      },
      {
        "title": "교통카드",
        "description": "스위스 패스(Swiss Travel Pass)를 구매하면 일정 기간 동안 기차, 버스, 보트를 무제한으로 이용할 수 있습니다. 도시별 일일권도 있으며, 티켓은 SBB 앱이나 발매기에서 탑승 전에 구매해야 합니다. 개찰기에 찍을 필요는 없지만, 차내 검표 때 티켓이 없으면 벌금이 부과됩니다."
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
        "description": "Swiss chocolates such as Lindt, Cailler, Frey, and Läderach are popular souvenirs. Supermarkets also carry many brands and flavors at lower prices."
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
        "description": "Victorinox Swiss Army knives are popular: practical, high quality, and some shops offer engraving. Knives can't go in carry-on luggage, so pack them in checked baggage."
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
        "description": "Convenience stores sell coffee, drinks, and snacks. Swiss shop hours are short and most shops close on Sundays, so use station stores like Coop Pronto, Migrolino, or Avec in the evening or on Sundays."
      }
    ],
    "essentialsEn": [
      {
        "title": "Electrical Adapter",
        "description": "Switzerland uses Type J sockets (230V, 50Hz). Slim two-pin Europlugs (Type C) usually fit, but standard European Schuko (Type F) plugs and US plugs do not, so bring a Swiss Type J adapter. Most modern electronics support 110–240V; check your device before traveling."
      },
      {
        "title": "Transportation Booking",
        "description": "It's good to save the Swiss Railway SBB app and mobile tickets. Booking online in advance can get you discounts."
      },
      {
        "title": "Transportation Card",
        "description": "A Swiss Travel Pass gives unlimited travel on trains, buses, and boats for a set period, and cities also sell day tickets. Buy your ticket in the SBB app or at a machine before boarding. No validation is needed, but riding without a ticket results in a fine."
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
        "title": "무비자 입국",
        "description": "한국인은 솅겐 지역(스위스 포함)에서 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 솅겐 지역을 떠나는 날 기준으로 3개월 이상 남아 있어야 하고, 발급일이 10년 이내여야 합니다. 입국 심사에서 귀국 또는 다음 목적지 항공권을 요구받을 수 있으니 준비하시기 바랍니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시스템(EES)이 전면 시행되어, 처음 입국할 때 여권 정보와 얼굴 사진·지문을 등록합니다. 여권 도장 대신 전자 기록이 남으며, 첫 입국 때는 심사가 길어질 수 있으니 여유 있게 이동하시기 바랍니다. 사전 여행허가제(ETIAS)는 아직 시행되지 않았고 공식 시작일도 정해지지 않았습니다. ETIAS 신청을 유료로 대행한다는 사이트에 주의하시고, 출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Switzerland) visa-free for up to 90 days in any 180-day period for tourism. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and must have been issued within the last 10 years. Border officers may ask to see a return or onward ticket."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Schengen Entry/Exit System (EES) records your passport details, facial image, and fingerprints at your first entry, replacing passport stamps. Allow extra time at the border on your first trip. The ETIAS travel authorization has not launched yet and has no official start date, so be wary of sites charging for ETIAS applications. Check the official EU site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "네덜란드의 공중화장실과 기차역 화장실은 대부분 유료이며, 지하철역에는 화장실이 거의 없습니다. 카페나 레스토랑 화장실은 손님용인 경우가 많으니 음료 등을 주문한 뒤 이용하는 것이 좋습니다."
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
        "description": "고우다, 에담 등 네덜란드 치즈는 현지에서 꼭 맛봐야 할 명물입니다. 다만 치즈는 한국 입국 시 휴대 반입이 금지된 유제품으로 과태료가 부과될 수 있으니, 선물용으로는 스트루프와플이나 델프트 블루 소품을 권장합니다."
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
        "description": "네덜란드의 대형 마트인 알버트 하인(Albert Heijn)에서 스트루프와플, 초콜릿, 과자 등을 저렴하게 구매할 수 있습니다. 치즈 등 유제품은 한국 입국 시 휴대 반입이 금지되니 현지에서 즐기시기 바랍니다."
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
        "description": "전문 치즈 가게에서 다양한 네덜란드 치즈를 시식해 볼 수 있습니다. 단, 치즈는 한국 입국 시 휴대 반입이 금지된 유제품으로 과태료가 부과될 수 있으니 현지에서 즐기시기 바랍니다."
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
        "description": "네덜란드 대중교통(기차, 지하철, 트램, 버스)은 비접촉 신용카드나 스마트폰(OVpay)으로 바로 이용할 수 있습니다. 탑승 시 체크인하고, 하차 시 반드시 같은 카드로 체크아웃해야 합니다. 익명 OV-chipkaart는 역 발매기 등에서 구매할 수 있지만 카드 발급비가 별도로 듭니다."
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
        "description": "Public and train-station toilets in the Netherlands are usually paid, and metro stations rarely have toilets. Café and restaurant toilets are generally for customers, so order something first."
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
        "description": "You can tap a contactless bank card or phone (OVpay) on trains, metros, trams and buses across the Netherlands. Always check in and check out with the same card. An anonymous OV-chipkaart is still sold at station machines, but it costs an extra card fee."
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
        "title": "무비자 입국",
        "description": "한국인은 네덜란드를 포함한 솅겐 지역에서 180일 중 최대 90일까지 비자 없이 체류할 수 있습니다. 여권은 솅겐 지역 출국 예정일 기준 3개월 이상 유효해야 하며, 발급일이 10년 이내여야 합니다. 입국 심사 시 귀국(또는 제3국행) 항공권, 숙소, 체류 경비를 증명할 자료를 요구받을 수 있습니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시 여권 도장 대신 EES(출입국 시스템)에 얼굴 사진과 지문(만 12세 미만은 지문 제외)이 등록됩니다. 첫 입국 시 등록 절차로 대기 시간이 길어질 수 있습니다. ETIAS(유럽 사전 여행 허가)는 아직 시행되지 않았고 공식 시행일도 정해지지 않아 지금은 신청할 필요가 없습니다. 유료 대행 사이트에 주의하시고, 출발 전 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including the Netherlands) visa-free for up to 90 days in any 180-day period. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and issued within the last 10 years (6 months' validity is recommended). Border officers may ask for a return or onward ticket, accommodation details and proof of sufficient funds."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Entry/Exit System (EES) records your face and fingerprints (no fingerprints for children under 12) instead of stamping your passport. Expect longer lines on your first entry. ETIAS (the EU travel authorization) has not launched and has no official start date, so you do not need it yet. Avoid paid third-party sites and check the official site (travel-europe.europa.eu) before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "포르투갈에서 팁은 의무가 아닙니다. 계산서에 서비스 요금(serviço)이 따로 붙는 경우는 많지 않으며, 만족했다면 5~10% 또는 잔돈을 남기는 정도면 충분합니다. 카페에서는 반올림 정도로 충분합니다. 식탁에 미리 놓이는 빵·올리브(couvert)는 먹으면 요금이 청구되니 원하지 않으면 치워 달라고 하세요."
      },
      {
        "title": "식사 시간",
        "description": "포르투갈의 식사 시간은 한국보다 늦습니다. 점심은 보통 오후 1시~2시, 저녁은 오후 8시~9시에 시작합니다. 레스토랑은 보통 오후 7시 30분 이후에 열립니다."
      },
      {
        "title": "인사 예절",
        "description": "포르투갈인들은 따뜻하고 친근한 인사를 선호합니다. 처음 만나거나 공식적인 자리에서는 악수가 일반적이며, 아는 사이에서는 양 볼에 가볍게 볼 인사(beijinho)를 하는 경우가 많습니다."
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
        "description": "Pingo Doce, Continente 등 대형 마트에서 올리브 오일, 와인, 생선 통조림 등을 저렴하게 구매할 수 있습니다. 치즈 등 유제품과 육가공품은 한국 반입이 대부분 제한되니 현지에서 맛보시기 바랍니다."
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
        "description": "포르투갈는 콘센트 타입 C/F(230V, 50Hz)를 사용합니다. 한국과 같은 모양이라 한국 플러그를 그대로 쓸 수 있으며, 전압도 비슷해 별도의 어댑터나 변압기가 필요 없습니다."
      },
      {
        "title": "교통카드",
        "description": "리스본에서는 충전식 navegante ocasional 카드(옛 Viva Viagem)를, 포르토에서는 Andante 카드를 지하철역·공항 발매기에서 구매·충전해 지하철, 버스, 트램 등을 탈 수 있습니다. 관광지를 많이 둘러볼 계획이라면 교통과 입장 혜택이 묶인 Lisboa Card(24·48·72시간권)도 고려해 보세요."
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
        "description": "Tipping is optional in Portugal. A service charge (serviço) is not usually added, so if you were happy, leaving 5–10% or rounding up is enough; at cafes, rounding up is sufficient. Bread and starters placed on the table (couvert) are charged if you eat them, so send them back if you don't want them."
      },
      {
        "title": "Meal Times",
        "description": "Portuguese meal times are later than in Korea. Lunch is usually around 1-2 PM, and dinner starts around 8-9 PM. Restaurants usually open after 7:30 PM."
      },
      {
        "title": "Greeting Etiquette",
        "description": "Portuguese people prefer warm and friendly greetings. A handshake is standard for first meetings and formal settings; among acquaintances, a light kiss on each cheek (beijinho) is common."
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
        "description": "In Lisbon, use the rechargeable navegante ocasional card (formerly Viva Viagem); in Porto, use the Andante card. Buy and top them up at metro or airport ticket machines. If you plan to visit many sights in Lisbon, the Lisboa Card (24/48/72 hours) bundles transport with attraction entry."
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
        "title": "무비자 입국",
        "description": "한국인은 솅겐 지역(포르투갈 포함)에서 180일 중 최대 90일간 무비자로 머물 수 있습니다. 여권은 솅겐 지역을 떠나는 날 기준으로 3개월 이상 남아 있어야 하고, 발급일이 10년 이내여야 합니다. 입국 심사에서 귀국 또는 다음 목적지 항공권을 요구받을 수 있으니 준비하시기 바랍니다."
      },
      {
        "title": "EES 출입국 등록",
        "description": "2026년 4월부터 솅겐 지역 출입국 시스템(EES)이 전면 시행되어, 처음 입국할 때 여권 정보와 얼굴 사진·지문을 등록합니다. 여권 도장 대신 전자 기록이 남으며, 첫 입국 때는 심사가 길어질 수 있으니 여유 있게 이동하시기 바랍니다. 사전 여행허가제(ETIAS)는 아직 시행되지 않았고 공식 시작일도 정해지지 않았습니다. ETIAS 신청을 유료로 대행한다는 사이트에 주의하시고, 출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can stay in the Schengen area (including Portugal) visa-free for up to 90 days in any 180-day period for tourism. Your passport must be valid for at least 3 months beyond your planned departure from the Schengen area and must have been issued within the last 10 years. Border officers may ask to see a return or onward ticket."
      },
      {
        "title": "EES Border Registration",
        "description": "Since April 2026, the Schengen Entry/Exit System (EES) records your passport details, facial image, and fingerprints at your first entry, replacing passport stamps. Allow extra time at the border on your first trip. The ETIAS travel authorization has not launched yet and has no official start date, so be wary of sites charging for ETIAS applications. Check the official EU site (travel-europe.europa.eu) before you go."
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
      "population": 11400000,
      "languages": [
        "Portuguese"
      ],
      "languagesKo": [
        "포르투갈어"
      ],
      "drivingSide": "right"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "쇼핑몰과 식당 화장실은 대부분 무료이지만, 일부 공중화장실과 터미널 화장실은 소액을 받습니다. 휴지가 없는 곳이 많으니 휴지를 챙기시는 것이 좋으며, 사용한 휴지는 휴지통에 버리는 곳이 많습니다."
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
        "description": "Restrooms in malls and restaurants are usually free, but some public and terminal toilets charge a small fee. Many lack toilet paper, so carry tissues, and in many places used paper goes in the bin."
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
        "description": "한국인은 관광 목적으로 30일간 무비자 입국이 가능합니다. 여권 유효기간이 체류 예정기간 이후 6개월 이상 남아 있어야 하며, 30일 이내에 출국하는 왕복 또는 제3국행 항공권이 필요합니다. 30일 넘게 체류하려면 현지 이민국에서 연장 신청을 해야 합니다."
      },
      {
        "title": "eTravel 등록 필수",
        "description": "필리핀에 입국하는 모든 외국인은 도착 전 72시간 이내에 공식 사이트(etravel.gov.ph)에서 eTravel을 등록하고 QR코드를 받아야 합니다. 등록은 무료이며 입국할 때마다 새로 해야 합니다. 비용을 요구하는 대행 사이트에 주의하시고, 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter the Philippines visa-free for up to 30 days for tourism. Your passport must be valid for at least 6 months beyond your stay, and you need a return or onward ticket departing within 30 days. Extensions beyond 30 days are handled by the Bureau of Immigration."
      },
      {
        "title": "eTravel Registration",
        "description": "All foreign arrivals must register on eTravel (etravel.gov.ph) within 72 hours before arrival and show the QR code. Registration is free and required for every entry. Beware of look-alike sites that charge a fee, and check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "쇼핑몰, 카페, 식당 화장실은 대부분 무료이며, 일부 관광지와 공원의 공중화장실은 소액을 받습니다. 휴지가 없는 곳도 있으니 휴지를 챙기시는 것이 좋고, 사용한 휴지는 휴지통에 버리는 곳이 많습니다."
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
        "description": "WinMart(옛 VinMart), Co.opmart 등 대형 마트에서 커피, 향료, 라크 제품 등을 저렴하게 구매할 수 있습니다."
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
        "title": "대중교통",
        "description": "호치민에는 2024년 12월 개통한 메트로 1호선이, 하노이에는 도시철도 2A·3호선이 운행합니다. 시내버스는 대부분 현금으로 탈 수 있으며, 여행자는 Grab, Xanh SM 등 차량 호출 앱을 많이 이용합니다."
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
        "description": "베트남은 남북으로 길어 지역마다 날씨가 다릅니다. 하노이 등 북부는 10월~4월이 선선하고(12월~2월은 쌀쌀함), 다낭 등 중부는 2월~8월이 맑은 편이며 9월~12월은 비와 태풍이 잦습니다. 호치민 등 남부는 12월~4월 건기가 여행하기 좋습니다."
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
        "description": "Restrooms in malls, cafes, and restaurants are usually free, while some public toilets at sights and parks charge a small fee. Carry tissues, as some have none, and in many places used paper goes in the bin."
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
        "description": "You can purchase coffee, incense, and lacquer products at affordable prices at large supermarkets like WinMart (formerly VinMart) and Co.opmart."
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
        "title": "Public Transport",
        "description": "Ho Chi Minh City's Metro Line 1 opened in December 2024, and Hanoi runs urban rail lines 2A and 3. City buses mostly accept cash, and many visitors use ride-hailing apps such as Grab or Xanh SM."
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
        "description": "Vietnam's weather varies by region. The north (Hanoi) is pleasant from about October to April, with chilly days in December–February; central Vietnam (Da Nang) is best around February–August, with heavy rain and typhoons in September–December; the south (Ho Chi Minh City) is best in the December–April dry season."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 입국일로부터 최대 45일간 무비자로 체류할 수 있습니다. 여권 유효기간이 6개월 이상 남아 있어야 하며, 귀국 또는 제3국행 항공권을 요구받을 수 있습니다. 45일을 넘게 체류하려면 베트남 출입국관리국 공식 사이트(evisa.gov.vn)에서 최대 90일 전자비자를 미리 신청해야 합니다. 비자 수수료는 바뀔 수 있으니 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "E-Visa Required",
        "description": "US citizens need a visa to enter Vietnam. Apply online for an e-visa on the official portal (evisa.gov.vn); it allows stays of up to 90 days with single or multiple entry, and processing usually takes about 3–5 business days. Your passport should be valid for at least 6 months. Avoid look-alike sites that charge extra, and check the official site for current fees before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "호주는 콘센트 타입 I(230V, 50Hz)를 사용합니다. 한국 플러그는 맞지 않으니 타입 I 어댑터(멀티 어댑터)를 챙기시기 바랍니다. 한국 기기는 대부분 220V용이라 변압기는 필요 없습니다."
      },
      {
        "title": "교통카드",
        "description": "시드니(Opal)와 멜버른(myki) 모두 교통카드를 따로 사지 않아도 비접촉 신용카드나 휴대폰 간편결제를 단말기에 대면 성인 요금으로 탈 수 있습니다. 교통카드는 편의점이나 역에서 구매·충전할 수 있습니다."
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
        "description": "Australia uses Type I sockets (230V, 50Hz). Bring a Type I adapter. Many modern electronics support 110V~240V, so a voltage converter may not be necessary, but check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "In both Sydney (Opal) and Melbourne (myki), you can tap a contactless credit card or phone wallet at the readers and pay the adult fare without buying a transport card. Cards are still sold and topped up at convenience stores and stations."
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
        "title": "ETA 필요",
        "description": "한국인은 호주 입국 전에 전자여행허가 ETA(subclass 601)를 받아야 합니다. 'Australian ETA' 공식 앱으로만 신청할 수 있으며, 약 20호주달러의 서비스 수수료가 있습니다. 승인 후 12개월 동안 여러 번 입국할 수 있고, 한 번 입국할 때마다 최대 3개월까지 머물 수 있습니다. 보통 당일 안에 승인되지만 여유 있게 신청하시기 바랍니다. 수수료는 바뀔 수 있으니 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "ETA Required",
        "description": "US citizens need an ETA (Electronic Travel Authority, subclass 601) to enter Australia. Apply only through the official Australian ETA app; there is a service charge of about AUD 20. The ETA allows multiple visits over 12 months, with stays of up to 3 months each, and is usually approved quickly. Fees can change, so check the official site before you go."
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
      "population": 27500000,
      "languages": [
        "English"
      ],
      "languagesKo": [
        "영어"
      ],
      "drivingSide": "left"
    },
    "reviewedAt": "2026-11-19"
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
        "description": "쇼핑몰, 식당, 카페 화장실은 대부분 무료이며, 일부 공중화장실과 터미널 화장실은 소액(몇 바트)을 받습니다. 휴지가 없는 곳도 있으니 휴지를 챙기시는 것이 좋고, 변기가 막히기 쉬워 사용한 휴지는 휴지통에 버리는 곳이 많습니다."
      },
      {
        "title": "전자담배 금지",
        "description": "태국에서는 전자담배(액상형·궐련형 포함)의 반입·판매·소지가 모두 불법입니다. 관광객도 벌금, 구금, 추방 처분을 받을 수 있으니 전자담배는 가져가지 마시기 바랍니다."
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
        "description": "Big C, Lotus's(옛 Tesco Lotus) 등 대형 마트에서 태국 과자, 커피, 향신료 등을 저렴하게 구매할 수 있습니다."
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
        "description": "태국은 230V, 50Hz를 사용하며 콘센트는 A·B·C·F·O 타입이 섞여 있습니다. 한국 플러그(C/F)를 대부분 그대로 쓸 수 있지만, 일부 구형 콘센트에 대비해 멀티 어댑터를 챙기시면 좋습니다. 여행 전 기기의 전압 지원 범위를 확인하시기 바랍니다."
      },
      {
        "title": "교통카드",
        "description": "방콕 MRT는 2026년 6월부터 기존 MRT 카드를 받지 않으며, 개찰구에서 비접촉식 신용·체크카드(Visa, Mastercard 등)를 바로 찍고 탈 수 있습니다. BTS 스카이트레인은 역에서 Rabbit 카드를 구매·충전(주로 현금)하거나 1회권을 사서 이용합니다. 해외 결제가 가능한 카드인지 미리 확인하시기 바랍니다."
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
        "description": "Restrooms in malls, restaurants, and cafes are usually free, while some public and terminal toilets charge a few baht. Carry tissues, as some have none, and because plumbing clogs easily, used paper often goes in the bin."
      },
      {
        "title": "Vaping Ban",
        "description": "E-cigarettes and vapes, including heated tobacco devices, are illegal to import, sell, or possess in Thailand. Tourists can be fined, detained, or deported, so leave them at home."
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
        "description": "You can purchase Thai snacks, coffee, and spices at affordable prices at large supermarkets like Big C and Lotus's (formerly Tesco Lotus)."
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
        "description": "Thailand uses 230V, 50Hz, with a mix of Type A, B, C, F, and O sockets. Most two-pin flat (A) and round (C) plugs fit, but a universal adapter helps with older outlets. Check your device's voltage range before traveling."
      },
      {
        "title": "Transportation Card",
        "description": "Since June 2026, Bangkok's MRT no longer accepts its old stored-value cards; tap a contactless Visa or Mastercard bank card directly at the gate. For the BTS Skytrain, buy and top up a Rabbit card at BTS stations (mostly cash) or buy single-journey tickets. Make sure your card is enabled for overseas use."
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
        "description": "한국인은 한-태 사증면제협정에 따라 관광 목적으로 최대 90일간 무비자 체류가 가능합니다. 2026년 9월 다른 여러 나라의 무비자 기간이 30일로 줄었지만 한국인은 해당되지 않습니다. 여권 유효기간이 6개월 이상 남아 있어야 하며, 귀국 또는 제3국행 항공권이 필요합니다."
      },
      {
        "title": "TDAC 작성 필수",
        "description": "태국에 입국하는 모든 외국인은 도착 전 3일 이내에 공식 사이트(tdac.immigration.go.th)에서 디지털 입국신고서(TDAC)를 작성하고 QR코드를 받아야 합니다. 작성은 무료이며, 비용을 요구하는 대행 사이트에 주의하시기 바랍니다. 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Thailand visa-free for up to 30 days for tourism (shortened from 60 days on 15 September 2026). Your passport must be valid for at least 6 months, and you need a return or onward ticket. A one-time extension of up to 30 days may be granted at a local immigration office at the officer's discretion; for longer stays, get an appropriate visa."
      },
      {
        "title": "TDAC Arrival Card",
        "description": "All foreign arrivals must complete the Thailand Digital Arrival Card (TDAC) at tdac.immigration.go.th within 3 days before arrival and show the QR code. It's free, so avoid sites that charge a fee. Check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "대만 가정집에 들어갈 때는 신발을 벗는 것이 일반적입니다. 사원은 대부분 신발을 신고 들어가도 되지만, 일부 법당이나 표시된 구역에서는 벗어야 하니 안내를 따르시기 바랍니다."
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
        "description": "대만 화장품 브랜드의 제품이 인기입니다. 마이 스키밍(我的心機) 마스크팩, 나루코(Naruko) 등 대만 브랜드를 드럭스토어에서 만나볼 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "까르푸(Carrefour), 전련(PX Mart) 같은 마트에서 대만 과자, 차, 향료 등을 저렴하게 구매할 수 있습니다."
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
        "description": "It's common to remove your shoes when entering Taiwanese homes. Most temples allow shoes, but some inner halls or marked areas require removing them, so follow the signs."
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
        "description": "Products from Taiwanese cosmetic brands are popular. You can find local brands like My Scheming sheet masks and Naruko at drugstores."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Taiwanese snacks, tea, and spices at affordable prices at supermarkets like Carrefour and PX Mart."
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
      },
      {
        "title": "온라인 입국카드",
        "description": "대만은 입국카드를 온라인(Taiwan Arrival Card)으로 미리 작성할 수 있어, 도착 후 종이 카드를 쓰지 않아도 됩니다. 출발 전 대만 이민서 공식 사이트에서 작성하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can visit Taiwan visa-free for up to 90 days. Your passport must be valid for the duration of your stay, and you need a confirmed return or onward ticket."
      },
      {
        "title": "Online Arrival Card",
        "description": "You can fill in Taiwan's arrival card online (Taiwan Arrival Card) before your flight, so you don't need a paper card on arrival. Complete it on the National Immigration Agency's official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "홍콩의 대부분 레스토랑은 계산서에 10% 봉사료를 자동으로 붙이므로 별도 팁은 필수가 아닙니다. 서비스가 좋았다면 잔돈을 남기는 정도면 충분하고, 택시는 반올림하며, 호텔 포터에게는 소액의 팁을 주는 것이 일반적입니다."
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
        "description": "홍콩 공항 면세점에서 명품 화장품, 향수, 시계 등을 구매할 수 있습니다. 홍콩은 판매세가 없어 시내 매장도 세금이 붙지 않으므로, 공항과 시내 가격을 비교해 보는 것이 좋습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "웰컴(Wellcome), 파큰샵(PARKnSHOP) 같은 슈퍼마켓에서 홍콩 과자, 차, 향료 등을 저렴하게 구매할 수 있습니다."
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
        "description": "홍콩 공항 면세점에서 명품 화장품, 향수, 시계 등을 구매할 수 있습니다. 홍콩은 판매세가 없어 시내 매장도 세금이 붙지 않으므로, 공항과 시내 가격을 비교해 보는 것이 좋습니다."
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
        "description": "Most Hong Kong restaurants automatically add a 10% service charge, so extra tipping is optional; leaving small change is enough. Rounding up for taxis is sufficient, and a small tip for hotel porters is customary."
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
        "description": "You can purchase luxury cosmetics, perfumes, and watches at Hong Kong airport duty-free shops. Hong Kong has no sales tax, so prices in town are tax-free too; compare before you buy."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Hong Kong snacks, tea, and spices at affordable prices at supermarkets like Wellcome and PARKnSHOP."
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
        "description": "You can purchase luxury cosmetics, perfumes, and watches at Hong Kong airport duty-free shops. Hong Kong has no sales tax, so prices in town are tax-free too; compare before you buy."
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
        "description": "한국인은 관광 목적으로 최대 90일간 무비자 입국이 가능합니다. 여권은 체류 예정 기간보다 최소 1개월 이상 유효해야 하며(항공사 기준을 고려하면 6개월 이상 권장), 귀국 또는 다음 목적지 항공권을 소지해야 합니다."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can visit Hong Kong visa-free for up to 90 days. Your passport must be valid for at least one month beyond your stay (six months is recommended to avoid airline issues), and you should hold a return or onward ticket."
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
    },
    "reviewedAt": "2026-11-19"
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
      },
      {
        "title": "전자담배 금지",
        "description": "싱가포르에서는 전자담배의 소지·사용·반입이 모두 불법이며, 2026년부터 처벌이 크게 강화되었습니다. 외국인은 벌금과 함께 추방·재입국 금지 처분을 받을 수 있고, 마취제 성분이 든 전자담배(일명 K팟)는 마약 범죄로 다뤄집니다. 전자담배는 절대 가져가지 마시기 바랍니다."
      },
      {
        "title": "껌 반입 금지",
        "description": "싱가포르는 일반 껌의 수입과 판매를 금지하고 있어 입국 시 껌이 압수되거나 벌금을 물 수 있습니다. 치료용 니코틴 껌 등은 예외이지만 처방전을 지참하는 것이 안전하니, 껌은 가져가지 않는 것이 좋습니다."
      }
    ],
    "souvenirs": [
      {
        "title": "TWG 티",
        "description": "싱가포르에서 시작된 차 브랜드 TWG 티는 다양한 블렌딩 차를 고급스러운 틴 케이스에 담아 판매해 선물용으로 인기가 많습니다. 시내 매장과 창이 공항에서 구매할 수 있습니다."
      },
      {
        "title": "싱가포르 향료",
        "description": "싱가포르 향료, 카야 잼 등이 인기 기념품입니다. 싱가포르의 대표적인 식품을 만나볼 수 있습니다."
      },
      {
        "title": "전자제품",
        "description": "싱가포르의 전자제품 가격은 한국과 비슷하거나 더 비싼 경우가 많아 예전처럼 저렴하지 않습니다. 구매한다면 공식 매장을 이용하시고, 일정 금액(약 S$100) 이상 구매하면 출국 시 공항에서 부가세(GST) 환급을 신청할 수 있으니 출발 전 공식 사이트에서 확인하세요."
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
        "description": "해외 결제가 가능한 비접촉식 신용·체크카드(Visa, Mastercard 등)나 모바일 페이를 MRT 개찰구와 버스 단말기에 바로 찍고 탈 수 있습니다. 해외 발급 Visa·Mastercard는 이용일마다 약 S$0.60의 관리 수수료가 붙으니 출발 전 공식 사이트에서 확인하세요. EZ-Link나 NETS FlashPay 교통카드를 구매해 역이나 편의점에서 충전해 쓸 수도 있습니다."
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
      },
      {
        "title": "Vaping Ban",
        "description": "Possessing, using, or bringing in e-cigarettes is illegal in Singapore, and penalties were sharply increased in 2026. Foreigners may be fined, deported, and banned from re-entry, and vapes laced with etomidate ('Kpods') are treated like drug offences. Do not bring vapes."
      },
      {
        "title": "No Chewing Gum",
        "description": "Singapore bans the import and sale of regular chewing gum, so gum may be confiscated or fined at entry. Therapeutic gum such as nicotine gum is an exception, but carry a prescription to be safe; it's best not to bring gum."
      }
    ],
    "souvenirsEn": [
      {
        "title": "TWG Tea",
        "description": "TWG Tea, a Singapore-founded tea brand, sells a wide range of blends in elegant tins that make popular gifts. You'll find its shops around the city and at Changi Airport."
      },
      {
        "title": "Spices and Kaya Jam",
        "description": "Local spices and kaya jam are popular souvenirs and a good way to bring home Singapore's signature flavors."
      },
      {
        "title": "Electronics",
        "description": "Electronics in Singapore are no longer especially cheap compared with many other countries. If you buy, use official stores; purchases above a set amount (about S$100) may qualify for a GST tourist refund at the airport, so check the official site before you go."
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
        "description": "You can tap a contactless Visa or Mastercard enabled for overseas use (or a mobile wallet) directly at MRT gates and on buses. Foreign-issued Visa and Mastercard cards incur an admin fee of about S$0.60 per day of travel, so check the official site before you go. EZ-Link and NETS FlashPay cards also work and can be topped up at stations and convenience stores."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 최대 90일간 무비자 입국이 가능하며, 실제 체류 허가 기간은 입국 심사 때 정해집니다. 여권 유효기간이 6개월 이상 남아 있어야 하며, 귀국 또는 제3국행 항공권이 필요합니다."
      },
      {
        "title": "SG Arrival Card 제출 필수",
        "description": "싱가포르에 입국하는 모든 여행자는 도착일 포함 3일 이내에 ICA 공식 사이트나 MyICA 앱에서 SG Arrival Card(전자 입국신고서와 건강 신고)를 제출해야 합니다. 제출은 무료이며, 입국 심사 없이 환승만 하는 경우는 제외됩니다. 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Singapore visa-free for up to 90 days for tourism; the actual length of stay is set at immigration. Your passport must be valid for at least 6 months, and you need a return or onward ticket."
      },
      {
        "title": "SG Arrival Card",
        "description": "All travellers must submit the SG Arrival Card, which includes a health declaration, on the ICA website or MyICA app within 3 days before arrival (the arrival day counts). It's free; travellers transiting without clearing immigration are exempt. Check the official site before you go."
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
      "population": 6100000,
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "쇼핑몰 화장실은 대부분 무료이며, 일부 공중화장실은 소액을 받습니다. 쪼그려 앉는 화변기나 휴지 대신 물 호스가 있는 화장실도 있으니 휴지를 챙기시는 것이 좋습니다."
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
        "description": "말레이시아 전통 향신료 세트가 인기입니다. 커리 파우더와 렌당·락사용 양념 페이스트(렘파, rempah) 등 다양한 향신료를 구매할 수 있습니다."
      }
    ],
    "market": [
      {
        "title": "마트 추천템",
        "description": "Lotus's(옛 Tesco), AEON, Mydin 등 대형 마트에서 말레이시아 과자, 커피, 향신료 등을 저렴하게 구매할 수 있습니다."
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
        "description": "말레이시아 eSIM을 사전 구매하거나, 공항에서 현지 SIM을 구매할 수 있습니다. CelcomDigi(셀콤과 디지가 합병), Maxis(Hotlink), U Mobile 등 주요 통신사가 있으며, 공항에서 바로 구매 가능합니다."
      },
      {
        "title": "말레이시아 eSIM",
        "titleEn": "Malaysia eSIM",
        "link": "https://link.coupang.com/a/c5TeYh",
        "iframe": "<iframe src=\"https://coupa.ng/ckJs5k\" width=\"120\" height=\"240\" frameborder=\"0\" scrolling=\"no\" referrerpolicy=\"unsafe-url\" browsingtopics></iframe>"
      },
      {
        "title": "현금 준비",
        "description": "도시에서는 신용카드, 비접촉 결제, QR 결제가 널리 쓰이지만, 야시장·호커 노점·소규모 상점에서는 현금만 받는 경우가 있으니 소액 현금을 준비하시는 것이 좋습니다. 환전은 시내 환전소가 공항보다 환율이 좋은 편입니다."
      },
      {
        "title": "여행자 보험",
        "description": "의료비, 도난, 여행 지연 등을 보장하는 여행자 보험 가입을 권장합니다. 말레이시아는 의료비가 합리적이지만 보험 가입이 안전합니다."
      },
      {
        "title": "여행하기 좋은 시기",
        "description": "말레이시아는 연중 덥고 습하며 비가 자주 내립니다. 쿠알라룸푸르·페낭 등 서해안은 12월~2월과 6월~8월이 비교적 건조하고, 동해안과 그 앞바다 섬들은 11월~3월 몬순 기간에 비가 많아 일부 리조트가 문을 닫습니다."
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
        "description": "Restrooms in shopping malls are usually free, while some public toilets charge a small fee. Some have squat toilets or a water hose instead of toilet paper, so carry tissues."
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
        "description": "Traditional Malaysian spice sets are popular. You can buy curry powder and spice pastes (rempah) for dishes such as rendang and laksa."
      }
    ],
    "marketEn": [
      {
        "title": "Market Recommendations",
        "description": "You can purchase Malaysian snacks, coffee, and spices at affordable prices at large supermarkets like Lotus's (formerly Tesco), AEON, and Mydin."
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
        "description": "You can pre-purchase a Malaysian eSIM or buy a local SIM at the airport. Major carriers include CelcomDigi (the merged Celcom and Digi), Maxis (Hotlink), and U Mobile, and you can purchase directly at the airport."
      },
      {
        "title": "Cash Preparation",
        "description": "Cards, contactless, and QR payments are widely accepted in cities, but night markets, hawker stalls, and small shops may be cash-only, so carry some small cash. City money changers usually offer better rates than the airport."
      },
      {
        "title": "Travel Insurance",
        "description": "It's recommended to purchase travel insurance that covers medical, theft, and travel delay. Medical costs in Malaysia are reasonable, but insurance is still safe to have."
      },
      {
        "title": "Best Time to Visit",
        "description": "Malaysia is hot and humid year-round with frequent rain. The west coast (Kuala Lumpur, Penang) is relatively drier in December–February and June–August, while the east coast and its islands get heavy monsoon rain from November to March, when some resorts close."
      }
    ],
    "visa": [
      {
        "title": "무비자 입국",
        "description": "한국인은 관광 목적으로 최대 90일간 무비자 입국이 가능합니다. 여권 유효기간이 6개월 이상 남아 있어야 하며, 귀국 또는 제3국행 항공권이 필요합니다."
      },
      {
        "title": "MDAC 제출 필수",
        "description": "무비자로 입국하더라도 도착 전 3일 이내에 말레이시아 이민국 공식 사이트에서 디지털 입국카드(MDAC)를 제출해야 하며, 공항에서는 작성할 수 없습니다. 제출은 무료이고, MDAC를 제출한 한국인은 쿠알라룸푸르 공항 자동출입국심사대를 이용할 수 있습니다(첫 방문 시에는 일반 심사대를 이용해야 할 수 있습니다). 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa-Free Entry",
        "description": "US citizens can enter Malaysia visa-free for up to 90 days for tourism. Your passport must be valid for at least 6 months, and you need a return or onward ticket."
      },
      {
        "title": "MDAC Arrival Card",
        "description": "Even visa-free visitors must submit the Malaysia Digital Arrival Card (MDAC) on the official Immigration Department site within 3 days before arrival; it can't be done at the airport. It's free. Check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "인도네시아에서 팁은 의무가 아닙니다. 식당과 호텔은 계산서에 서비스 요금이 포함된 경우가 많으며, 포함되지 않았다면 소액의 팁을 남기거나 택시 요금을 반올림하면 충분합니다. 호텔 벨보이에게는 소액의 팁을 주는 경우가 많습니다."
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
        "description": "쇼핑몰과 식당 화장실은 대부분 무료이며, 일부 공중화장실은 소액을 받습니다. 쪼그려 앉는 화변기나 휴지 대신 물바가지·호스가 있는 화장실도 있으니 휴지를 챙기시는 것이 좋습니다."
      },
      {
        "title": "마약 엄벌",
        "description": "인도네시아는 마약 범죄를 매우 엄하게 처벌하며, 마약을 밀반입하면 사형이 선고될 수 있습니다. 모르는 사람의 짐을 대신 들어 주지 마시기 바랍니다."
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
        "description": "Superindo, Transmart, Hypermart 등 대형 마트에서 인도네시아 과자, 커피, 향신료 등을 저렴하게 구매할 수 있습니다."
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
        "description": "Tipping isn't mandatory in Indonesia. Many restaurants and hotels add a service charge to the bill; where none is included, a small tip or rounding up a taxi fare is enough. A small tip for hotel porters is common."
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
        "description": "Restrooms in malls and restaurants are usually free, while some public toilets charge a small fee. Some have squat toilets or a water scoop or hose instead of toilet paper, so carry tissues."
      },
      {
        "title": "Strict Drug Laws",
        "description": "Indonesia punishes drug offences extremely severely, and drug trafficking can carry the death penalty. Never carry luggage for someone you don't know."
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
        "description": "You can purchase Indonesian snacks, coffee, and spices at affordable prices at large supermarkets like Superindo, Transmart, and Hypermart."
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
        "title": "도착 비자 필요",
        "description": "한국인은 인도네시아 무비자 입국 대상이 아니므로 도착비자(VOA)가 필요합니다. 출국 전 인도네시아 이민국 공식 사이트(evisa.imigrasi.go.id)에서 전자도착비자(e-VOA)를 미리 받거나 도착 공항에서 발급받을 수 있으며, 수수료는 약 50만 루피아입니다. 30일간 체류할 수 있고 현지에서 1회(30일) 연장할 수 있습니다. 여권 유효기간이 6개월 이상 남아 있어야 하며 귀국 또는 제3국행 항공권이 필요합니다. 수수료 인상이 검토되고 있으니 출발 전 공식 사이트에서 확인하세요."
      },
      {
        "title": "All Indonesia 입국신고",
        "description": "인도네시아에 입국하는 모든 여행자는 도착 전 'All Indonesia' 공식 사이트(allindonesia.imigrasi.go.id)나 앱에서 입국·세관·건강 신고를 합친 전자 입국신고서를 작성하고 QR코드를 받아야 합니다. 작성은 무료이며 비자를 대신하지 않습니다. 출발 전 공식 사이트에서 확인하세요."
      },
      {
        "title": "발리 관광세",
        "description": "발리를 방문하는 외국인은 비자와 별도로 1인당 약 15만 루피아의 발리 관광세를 내야 합니다. 공식 사이트(lovebali.baliprov.go.id)에서 미리 납부할 수 있으며, 금액이 바뀔 수 있으니 출발 전 공식 사이트에서 확인하세요."
      }
    ],
    "visaEn": [
      {
        "title": "Visa on Arrival",
        "description": "US citizens are not visa-exempt for Indonesia and need a Visa on Arrival. Apply in advance for an e-VOA on the official immigration site (evisa.imigrasi.go.id) or get one at the airport; the fee is about IDR 500,000. It allows 30 days and can be extended once for another 30 days. Your passport must be valid for at least 6 months, and you need a return or onward ticket. A fee increase has been proposed, so check the official site before you go."
      },
      {
        "title": "All Indonesia Arrival Card",
        "description": "All travellers must complete the free 'All Indonesia' digital arrival card (immigration, customs, and health in one form) at allindonesia.imigrasi.go.id or in the app before arrival and show the QR code. It does not replace a visa. Check the official site before you go."
      },
      {
        "title": "Bali Tourist Levy",
        "description": "Foreign visitors to Bali must pay a provincial tourist levy of about IDR 150,000 per person, separate from the visa. Pay in advance on the official Love Bali site (lovebali.baliprov.go.id). The amount can change, so check the official site before you go."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "알룐카 초콜릿, 해바라기씨(세미치키), 꿀, 메밀(그레치카), 연유 등이 인기입니다. 연유 같은 유제품은 한국 입국 시 검역 대상이 될 수 있으니 미개봉 상업 제품으로 사고, 반입 가능 여부를 출발 전 농림축산검역본부 누리집에서 확인하세요."
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
        "description": "외교부는 러시아 전역에 특별여행주의보를 발령하고 있습니다. 쿠르스크주 전역과 우크라이나 국경 약 30km 이내 지역은 여행금지(4단계), 그 밖의 우크라이나 접경 지역과 체첸·다게스탄 등 북캅카스 지역은 출국권고(3단계)입니다. 여행금지 지역을 허가 없이 방문하면 여권법에 따라 처벌받을 수 있습니다. 경보 지역은 수시로 바뀌니 출발 전 해외안전여행 누리집(0404.go.kr)에서 최신 정보를 확인하세요."
      },
      {
        "title": "항공편",
        "description": "2022년 3월 이후 한국과 러시아 사이 직항편은 운항하지 않습니다(모스크바·블라디보스토크 포함). 중국, 중앙아시아, 몽골, 중동, 튀르키예 등을 경유해야 하므로 경유지의 환승·입국 조건과 일정 변경 가능성을 미리 확인하세요."
      },
      {
        "title": "전기 어댑터",
        "description": "러시아는 콘센트 타입 C/F(220V, 50Hz)를 사용합니다. 한국 플러그를 그대로 쓸 수 있습니다."
      },
      {
        "title": "인터넷 연결",
        "description": "2025년부터 외국인이 러시아 현지 유심을 사려면 정부 포털(Gosuslugi) 등록과 은행 생체정보 등록 등을 거쳐야 해, 단기 여행자는 사실상 구매가 어렵습니다. 한국 통신사 로밍도 되지 않을 수 있으니 출국 전 통신사에 확인하세요. 왓츠앱은 차단되었고 텔레그램 등도 제한되며, 지역에 따라 모바일 인터넷이 수시로 끊기기도 합니다. 오프라인 지도를 받아 두고 숙소 Wi-Fi를 활용하며, 가족과의 연락 방법을 미리 정해 두세요."
      },
      {
        "title": "체류 등록",
        "description": "외국인은 도착 후 7영업일 이내에 체류지 등록을 해야 합니다(7영업일 안에 출국하면 필요 없습니다). 호텔에 묵으면 숙소가 대신 처리하지만, 개인 숙소라면 집주인에게 등록을 요청하세요. 입국 때 받은 출입국카드(migration card)는 숙박과 출국에 필요하니 출국할 때까지 꼭 보관하세요."
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
        "description": "There are no direct flights between the US and Russia. Plan to connect via Türkiye, the Middle East, Central Asia, or China, and check transit rules and the risk of schedule changes in advance."
      },
      {
        "title": "Electrical Adapter",
        "description": "Russia uses Type C/F plugs (220V, 50Hz). You'll need a European-style plug adapter."
      },
      {
        "title": "Internet Connection",
        "description": "Since 2025, foreigners need a Gosuslugi (government portal) account and biometric registration at a bank to buy a Russian SIM, which makes it practically impossible for short-term visitors. Check with your carrier whether roaming works in Russia. WhatsApp is blocked, Telegram is restricted, and mobile internet is often shut down in some regions, so download offline maps, rely on accommodation Wi-Fi, and agree on how to stay in touch before you go."
      },
      {
        "title": "Registration",
        "description": "Foreigners must register their place of stay within 7 business days of arrival (not needed if you leave sooner). Hotels do this for you; at a private rental, ask your host to register you. Keep the migration card you receive on entry until you leave, as hotels and border officers ask for it."
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
        "description": "한국 일반여권 소지자는 관광 목적으로 한 번에 최대 60일, 180일 안에 모두 합쳐 90일까지 무비자로 머물 수 있습니다. 여권 유효기간은 6개월 이상 남아 있는 것이 좋습니다. 주러시아 대사관은 입국 전 러시아 RuID 앱으로 입국 정보와 생체정보를 미리 보내 둘 것을 강력히 권고합니다. 한국인은 현재 의무가 아니지만, 입국 72시간 전까지 등록해 두면 공항 혼선을 줄일 수 있습니다. 규정이 바뀔 수 있으니 출발 전 대사관 공지를 확인하세요."
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
    },
    "reviewedAt": "2026-11-19"
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
        "description": "렌터카로 여행하는 사람이 많습니다. 한국 운전면허증 원본과 함께 국제운전면허증이나 뉴질랜드 교통국(NZTA)이 인정하는 영문 번역본을 반드시 지참해야 합니다."
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
    },
    "reviewedAt": "2026-11-19"
  }
];

