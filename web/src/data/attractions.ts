// 나라별 주요 관광지. 목록은 scripts/build-attractions.mjs 의 CURATED에서 정하고,
// 사진·좌표·한국어 이름·설명은 위키백과에서 가져온다. 사진은 위키미디어 공용 이미지이며 출처는 각 위키백과 문서다.
import type { Attraction } from "@/types/destination";

export const attractions: Record<string, Attraction[]> = {
  "south-korea": [
    {
      "name": "경복궁",
      "nameEn": "Gyeongbokgung",
      "wiki": "경복궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg/500px-%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.57988,
        "lng": 126.9768
      },
      "city": "서울",
      "summary": "서울에 있는 조선 왕조의 주요 왕궁"
    },
    {
      "name": "N서울타워",
      "nameEn": "Namsan Seoul Tower",
      "wiki": "YTN서울타워",
      "image": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a6/NamsanTower_%28Cropped%29.jpeg/500px-NamsanTower_%28Cropped%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.55122,
        "lng": 126.98828
      },
      "city": "서울",
      "summary": "대한민국 서울 남산의 전파 송출 및 관광용 타워"
    },
    {
      "name": "북촌 한옥마을",
      "nameEn": "Bukchon Hanok Village",
      "wiki": "북촌 한옥마을",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Bukchon_Hanok_Village_01.jpg/500px-Bukchon_Hanok_Village_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.58306,
        "lng": 126.98361
      },
      "city": "서울",
      "summary": "서울 청계천의 북쪽에 있는 한옥마을"
    },
    {
      "name": "명동",
      "nameEn": "Myeong-dong",
      "wiki": "명동",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/%EB%AA%85%EB%8F%998%EA%B8%B8_%EA%B1%B0%EB%A6%AC_%282020.03%29.jpg/500px-%EB%AA%85%EB%8F%998%EA%B8%B8_%EA%B1%B0%EB%A6%AC_%282020.03%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.5637,
        "lng": 126.984
      },
      "city": "서울",
      "summary": "서울특별시 중구의 동"
    },
    {
      "name": "해운대해수욕장",
      "nameEn": "Haeundae Beach",
      "wiki": "해운대해수욕장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Haeundae_Beach_May_2024.jpg/500px-Haeundae_Beach_May_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.15855,
        "lng": 129.16053
      },
      "city": "부산",
      "summary": "해운대해수욕장은 대한민국 부산광역시 해운대구 중동과 우동에 걸쳐서 위치한 대한민국 최대규모의 해수욕장이다."
    },
    {
      "name": "감천문화마을",
      "nameEn": "Gamcheon Culture Village",
      "wiki": "감천문화마을",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Gamcheon_Houses%2C_2024.jpg/500px-Gamcheon_Houses%2C_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.097,
        "lng": 129.009
      },
      "city": "부산",
      "summary": "대한민국 부산광역시 사하구 감천동에 위치한 마을"
    },
    {
      "name": "성산일출봉",
      "nameEn": "Seongsan Ilchulbong",
      "wiki": "성산일출봉",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Seongsan_Ilchulbong_from_the_air.jpg/500px-Seongsan_Ilchulbong_from_the_air.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 33.4585,
        "lng": 126.942
      },
      "city": "제주",
      "summary": "제주특별자치도 서귀포시 성산읍에 있는 산"
    },
    {
      "name": "한라산",
      "nameEn": "Hallasan",
      "wiki": "한라산",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Hallasan_Above.jpg/500px-Hallasan_Above.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 33.36167,
        "lng": 126.52917
      },
      "city": "제주",
      "summary": ""
    }
  ],
  "japan": [
    {
      "name": "센소지",
      "nameEn": "Sensō-ji",
      "wiki": "센소지",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Sensoji_2023.jpg/500px-Sensoji_2023.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.71472,
        "lng": 139.79675
      },
      "city": "도쿄",
      "summary": ""
    },
    {
      "name": "도쿄 스카이트리",
      "nameEn": "Tokyo Skytree",
      "wiki": "도쿄 스카이트리",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/500px-Tokyo_Skytree_2014_%E2%85%A2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.7101,
        "lng": 139.8107
      },
      "city": "도쿄",
      "summary": "일본 도쿄도 스미다구에 위치한 전파탑"
    },
    {
      "name": "메이지 신궁",
      "nameEn": "Meiji Shrine",
      "wiki": "메이지 신궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Meiji_Jingu_2023-3.jpg/500px-Meiji_Jingu_2023-3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.67611,
        "lng": 139.69917
      },
      "city": "도쿄",
      "summary": "일본 도쿄도 시부야구에 위치한 신사"
    },
    {
      "name": "시부야 스크램블 교차점",
      "nameEn": "Shibuya Crossing",
      "wiki": "시부야 스크램블 교차점",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Shibuya_Crossing%2C_Aerial.jpg/500px-Shibuya_Crossing%2C_Aerial.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.6595,
        "lng": 139.70056
      },
      "city": "도쿄",
      "summary": "시부야 스크램블 교차점은 일본 도쿄도 시부야구 시부야에 소재한 시부야역의 북서쪽 옆에 있는 대각선 횡단보도이다."
    },
    {
      "name": "후시미 이나리 대사",
      "nameEn": "Fushimi Inari-taisha",
      "wiki": "후시미 이나리 대사",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/500px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 34.96722,
        "lng": 135.77278
      },
      "city": "교토",
      "summary": "일본 교토부 교토시 후시미구에 위치한 신사"
    },
    {
      "name": "킨카쿠지(금각사)",
      "nameEn": "Kinkaku-ji",
      "wiki": "로쿠온지",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/500px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.0395,
        "lng": 135.7285
      },
      "city": "교토",
      "summary": "일본 교토부 교토시 기타구에 위치한 선불교 사찰"
    },
    {
      "name": "기요미즈데라",
      "nameEn": "Kiyomizu-dera",
      "wiki": "기요미즈데라",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/500px-Kiyomizu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 34.995,
        "lng": 135.785
      },
      "city": "교토",
      "summary": "일본 교토부 교토시에 위치한 사찰"
    },
    {
      "name": "오사카성",
      "nameEn": "Osaka Castle",
      "wiki": "오사카성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Osaka_Castle_03bs3200.jpg/500px-Osaka_Castle_03bs3200.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 34.68722,
        "lng": 135.52583
      },
      "city": "오사카",
      "summary": "일본 오사카부 오사카시 주오구에 위치한 성"
    }
  ],
  "france": [
    {
      "name": "에펠탑",
      "nameEn": "Eiffel Tower",
      "wiki": "에펠탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/500px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.85822,
        "lng": 2.2945
      },
      "city": "파리",
      "summary": "프랑스 파리 마르스 광장의 건축물"
    },
    {
      "name": "루브르 박물관",
      "nameEn": "Louvre",
      "wiki": "루브르 박물관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/500px-Louvre_Museum_Wikimedia_Commons.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.8611,
        "lng": 2.3358
      },
      "city": "파리",
      "summary": "프랑스 파리에 위치한 국립 박물관"
    },
    {
      "name": "노트르담 대성당",
      "nameEn": "Notre-Dame de Paris",
      "wiki": "노트르담 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/500px-Notre-Dame_de_Paris%2C_4_October_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.85306,
        "lng": 2.35
      },
      "city": "파리",
      "summary": "프랑스 파리에 있는 고딕 양식의 성당"
    },
    {
      "name": "에투알 개선문",
      "nameEn": "Arc de Triomphe",
      "wiki": "에투알 개선문",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg/500px-Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.87378,
        "lng": 2.29503
      },
      "city": "파리",
      "summary": "파리 샤를 드골 광장에 있는 개선문"
    },
    {
      "name": "베르사유궁",
      "nameEn": "Palace of Versailles",
      "wiki": "베르사유궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Versailles_Palace_%28FRA%29_%E2%80%93_Equestrian_Olympic_Venue.jpg/500px-Versailles_Palace_%28FRA%29_%E2%80%93_Equestrian_Olympic_Venue.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.8047,
        "lng": 2.1203
      },
      "city": "파리",
      "summary": "프랑스 베르사유에 위치한 왕궁"
    },
    {
      "name": "몽생미셸섬",
      "nameEn": "Mont-Saint-Michel",
      "wiki": "몽생미셸섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/500px-Mont-Saint-Michel_vu_du_ciel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.636,
        "lng": -1.511
      },
      "city": "",
      "summary": "프랑스 노르망디에 위치한 섬"
    },
    {
      "name": "사크레쾨르 대성당",
      "nameEn": "Sacré-Cœur, Paris",
      "wiki": "사크레쾨르 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/500px-Le_sacre_coeur.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.88665,
        "lng": 2.34295
      },
      "city": "파리",
      "summary": "프랑스 파리에 위치한 로마 가톨릭교회 대성당"
    },
    {
      "name": "프롬나드데장글레",
      "nameEn": "Promenade des Anglais",
      "wiki": "프롬나드데장글레",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/CollineDuChateau_NiceFrance2022.png/500px-CollineDuChateau_NiceFrance2022.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 43.69111,
        "lng": 7.2475
      },
      "city": "니스",
      "summary": "프롬나드 데 장글레는 프랑스 니스에 있는 지중해를 따라 조성된 유명 산책로이다."
    }
  ],
  "spain": [
    {
      "name": "사그라다 파밀리아",
      "nameEn": "Sagrada Família",
      "wiki": "사그라다 파밀리아",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/500px-SF_maig_2_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.40369,
        "lng": 2.17433
      },
      "city": "바르셀로나",
      "summary": "스페인 바르셀로나에 지어지고 있는 로마 가톨릭 성당"
    },
    {
      "name": "구엘 공원",
      "nameEn": "Park Güell",
      "wiki": "구엘 공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/500px-Parc_guell_-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.41361,
        "lng": 2.15278
      },
      "city": "바르셀로나",
      "summary": "구엘 공원은 스페인 바르셀로나에 있는 공원이다."
    },
    {
      "name": "알람브라",
      "nameEn": "Alhambra",
      "wiki": "알람브라",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/500px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.1775,
        "lng": -3.59
      },
      "city": "",
      "summary": "스페인 그라나다에 위치한 궁전 및 요새"
    },
    {
      "name": "프라도 미술관",
      "nameEn": "Museo del Prado",
      "wiki": "프라도 미술관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/500px-Museo_del_Prado_2016_%2825185969599%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.4139,
        "lng": -3.6922
      },
      "city": "마드리드",
      "summary": "스페인 마드리드의 국립미술관"
    },
    {
      "name": "마요르 광장",
      "nameEn": "Plaza Mayor, Madrid",
      "wiki": "마요르 광장 (마드리드)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Madrid_Plaza_Mayor_%2848733706273%29.jpg/500px-Madrid_Plaza_Mayor_%2848733706273%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.41536,
        "lng": -3.70739
      },
      "city": "마드리드",
      "summary": "마요르 광장은 스페인 마드리드에 있는 광장이다."
    },
    {
      "name": "세비야 대성당",
      "nameEn": "Seville Cathedral",
      "wiki": "세비야 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/500px-Sevilla_Cathedral_-_Southeast.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.38589,
        "lng": -5.99306
      },
      "city": "세비야",
      "summary": "스페인 세비야에 위치한 가톨릭 대성당"
    },
    {
      "name": "카사 바트요",
      "nameEn": "Casa Batlló",
      "wiki": "카사 바트요",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/500px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.39158,
        "lng": 2.16492
      },
      "city": "바르셀로나",
      "summary": "안토니 가우디가 설계한 건축물 중 하나"
    },
    {
      "name": "람블라 거리",
      "nameEn": "La Rambla, Barcelona",
      "wiki": "람블라 거리",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg/500px-15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.38139,
        "lng": 2.17306
      },
      "city": "바르셀로나",
      "summary": "람블라 거리 또는 람블라스 거리는 스페인 바르셀로나의 거리로, 구 시가지에 위치하며 시내 중심에서 임해 지역까지 이어지며 …"
    }
  ],
  "united-states": [
    {
      "name": "자유의 여신상",
      "nameEn": "Statue of Liberty",
      "wiki": "자유의 여신상",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg/500px-Front_view_of_Statue_of_Liberty_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.68917,
        "lng": -74.04444
      },
      "city": "뉴욕",
      "summary": "미국 뉴욕 리버티섬에 있는 건축물"
    },
    {
      "name": "타임스 스퀘어",
      "nameEn": "Times Square",
      "wiki": "타임스 스퀘어",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/500px-New_york_times_square-terabass.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.7575,
        "lng": -73.9858
      },
      "city": "뉴욕",
      "summary": "타임스 스퀘어는 미국 뉴욕 미드타운 맨해튼에 있는 유명한 상업적 교차로로, 웨스트 42번가와 웨스트 7번가가 합쳐져 만난 …"
    },
    {
      "name": "센트럴 파크",
      "nameEn": "Central Park",
      "wiki": "센트럴 파크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/500px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.78222,
        "lng": -73.96528
      },
      "city": "뉴욕",
      "summary": "미국 뉴욕주 뉴욕 맨해튼에 있는 도시 중심부의 공원"
    },
    {
      "name": "골든게이트교",
      "nameEn": "Golden Gate Bridge",
      "wiki": "골든게이트교",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/500px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.81972,
        "lng": -122.47861
      },
      "city": "샌프란시스코",
      "summary": "샌프란시스코만의 현수교"
    },
    {
      "name": "할리우드 사인",
      "nameEn": "Hollywood Sign",
      "wiki": "할리우드 사인",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Hollywood_sign_%288485145044%29.jpg/500px-Hollywood_sign_%288485145044%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 34.13406,
        "lng": -118.32159
      },
      "city": "로스앤젤레스",
      "summary": "할리우드 사인은 미국 캘리포니아주 로스앤젤레스의 산타모니카 산맥의 리 산 일각에 있는 할리우드힐스 지역에 설치된 유명한 랜…"
    },
    {
      "name": "앨커트래즈섬",
      "nameEn": "Alcatraz Island",
      "wiki": "앨커트래즈섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Alcatraz_2021.jpg/500px-Alcatraz_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.82667,
        "lng": -122.42278
      },
      "city": "샌프란시스코",
      "summary": "샌프란시스코의 섬"
    },
    {
      "name": "메트로폴리탄 미술관",
      "nameEn": "Metropolitan Museum of Art",
      "wiki": "메트로폴리탄 미술관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/500px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.7794,
        "lng": -73.9631
      },
      "city": "뉴욕",
      "summary": "미국 뉴욕시의 미술관"
    },
    {
      "name": "그랜드 캐니언",
      "nameEn": "Grand Canyon",
      "wiki": "그랜드 캐니언",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/500px-Canyon_River_Tree_%28165872763%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 36.3,
        "lng": -112.75
      },
      "city": "",
      "summary": "애리조나주 있는 고원지대를 흐르는 콜로라도강에 의해서 깎인 거대한 계곡"
    }
  ],
  "italy": [
    {
      "name": "콜로세움",
      "nameEn": "Colosseum",
      "wiki": "콜로세움",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/500px-Colosseo_2020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.8903,
        "lng": 12.4922
      },
      "city": "로마",
      "summary": "고대 로마의 원형극장"
    },
    {
      "name": "트레비 분수",
      "nameEn": "Trevi Fountain",
      "wiki": "트레비 분수",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/500px-Trevi_Fountain_-_Roma.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.90083,
        "lng": 12.48306
      },
      "city": "로마",
      "summary": "이탈리아 로마에 위치한 바로크 양식의 분수"
    },
    {
      "name": "판테온",
      "nameEn": "Pantheon, Rome",
      "wiki": "판테온 (로마)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/500px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.8986,
        "lng": 12.4768
      },
      "city": "로마",
      "summary": "이탈리아 로마에 위치한 옛 로마 신전"
    },
    {
      "name": "바티칸 박물관",
      "nameEn": "Vatican Museums",
      "wiki": "바티칸 박물관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Musei_vaticani_Coat_of_Arms.svg/500px-Musei_vaticani_Coat_of_Arms.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.9064,
        "lng": 12.4544
      },
      "city": "로마",
      "summary": "바티칸 박물관은 로마의 비알레 바티카노 바티칸 내부에 있는 세계 최대급 규모의 미술관 가운데 한 곳이다."
    },
    {
      "name": "피렌체 대성당",
      "nameEn": "Florence Cathedral",
      "wiki": "피렌체 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/500px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 43.77306,
        "lng": 11.25694
      },
      "city": "피렌체",
      "summary": "이탈리아 토스카나주 피렌체에 위치한 가톨릭 대성당"
    },
    {
      "name": "카날 그란데",
      "nameEn": "Grand Canal (Venice)",
      "wiki": "카날 그란데",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg/500px-View_of_the_Grand_Canal_from_Rialto_to_Ca%27Foscari.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 45.44222,
        "lng": 12.32639
      },
      "city": "베네치아",
      "summary": "카날 그란데는 이탈리아 베네치아에 위치한 운하이다."
    },
    {
      "name": "산마르코 대성당",
      "nameEn": "St Mark's Basilica",
      "wiki": "산마르코 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/500px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 45.43444,
        "lng": 12.33972
      },
      "city": "베네치아",
      "summary": "이탈리아 베네토주 베네치아에 위치한 로마 가톨릭교회 대성당"
    },
    {
      "name": "피사의 사탑",
      "nameEn": "Leaning Tower of Pisa",
      "wiki": "피사의 사탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/500px-Italy_-_Pisa_-_Leaning_Tower.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 43.72306,
        "lng": 10.39639
      },
      "city": "",
      "summary": "이탈리아 서부 토스카나주 피사에 있는 기울어진 탑"
    }
  ],
  "turkey": [
    {
      "name": "아야 소피아",
      "nameEn": "Hagia Sophia",
      "wiki": "아야 소피아",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/500px-Hagia_Sophia_%28228968325%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.00833,
        "lng": 28.98
      },
      "city": "이스탄불",
      "summary": "터키 이스탄불에 위치한 비잔티움 제국의 대성당이자 이슬람 사원"
    },
    {
      "name": "술탄 아흐메트 모스크",
      "nameEn": "Blue Mosque, Istanbul",
      "wiki": "술탄 아흐메트 모스크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg/500px-Istanbul_%2834223582516%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.00539,
        "lng": 28.97682
      },
      "city": "이스탄불",
      "summary": "튀르키예 이스탄불에 위치한 모스크"
    },
    {
      "name": "톱카프 궁전",
      "nameEn": "Topkapı Palace",
      "wiki": "톱카프 궁전",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/500px-Topkap%C4%B1_-_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.013,
        "lng": 28.984
      },
      "city": "이스탄불",
      "summary": "튀르키예 이스탄불에 위치한 궁전"
    },
    {
      "name": "카팔르차르슈",
      "nameEn": "Grand Bazaar, Istanbul",
      "wiki": "카팔르차르슈",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/500px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.01058,
        "lng": 28.96793
      },
      "city": "이스탄불",
      "summary": "카팔르차르슈는 터키 이스탄불에 있는 바자르이다."
    },
    {
      "name": "예레바탄 사라이",
      "nameEn": "Basilica Cistern",
      "wiki": "예레바탄 사라이",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/500px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.00806,
        "lng": 28.97778
      },
      "city": "이스탄불",
      "summary": "예레바탄은 튀르키예 이스탄불에 있는 동로마 제국 시대의 지하 저수지이다."
    },
    {
      "name": "갈라타 탑",
      "nameEn": "Galata Tower",
      "wiki": "갈라타 탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Istanbul_asv2020-02_img48_Galata_Tower.jpg/500px-Istanbul_asv2020-02_img48_Galata_Tower.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.02563,
        "lng": 28.97415
      },
      "city": "이스탄불",
      "summary": "갈라타 탑은 제노바인들이 크리스테아 투리스이라고 부르던 터키 이스탄불 갈라타/카라쾨이 지구에 위치한 중세시대의 석제 탑이며…"
    },
    {
      "name": "괴레메 국립공원",
      "nameEn": "Göreme Historical National Park",
      "wiki": "en:Göreme Historical National Park",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Autumn_in_G%C3%B6reme_Valley.jpg/500px-Autumn_in_G%C3%B6reme_Valley.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.65278,
        "lng": 34.86306
      },
      "city": "",
      "summary": ""
    },
    {
      "name": "파묵칼레",
      "nameEn": "Pamukkale",
      "wiki": "파묵칼레",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Pamukkale%2C_Denizli_2026_68.jpg/500px-Pamukkale%2C_Denizli_2026_68.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.92389,
        "lng": 29.12333
      },
      "city": "",
      "summary": "파묵칼레는 튀르키예 남서부 데니즐리 주 데니즐리에 위치한 석회붕을 말한다."
    }
  ],
  "mexico": [
    {
      "name": "테오티우아칸",
      "nameEn": "Teotihuacan",
      "wiki": "테오티우아칸",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/ZA77_Teotihuac%C3%A1n_edo_de_mex_Herberto_de_la_rosa.jpg/500px-ZA77_Teotihuac%C3%A1n_edo_de_mex_Herberto_de_la_rosa.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.6925,
        "lng": -98.84389
      },
      "city": "멕시코시티",
      "summary": "테오티우아칸은 멕시코의 거대 유적으로 신대륙 발견 이전의 아메리카 대륙에 세워진 가장 거대한 피라미드 건축물들이 위치해있는…"
    },
    {
      "name": "치첸이트사",
      "nameEn": "Chichen Itza",
      "wiki": "치첸이트사",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/500px-Chichen_Itza_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 20.68306,
        "lng": -88.56861
      },
      "city": "",
      "summary": "치첸이트사 혹은 치첸이차는 멕시코 유카탄반도에 위치한 마야 문명의 도시이다."
    },
    {
      "name": "소칼로",
      "nameEn": "Zócalo",
      "wiki": "소칼로",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Z%C3%B3calo%2C_Ciudad_de_M%C3%A9xico_%2832846556446%29_%28cropped%29.jpg/500px-Z%C3%B3calo%2C_Ciudad_de_M%C3%A9xico_%2832846556446%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.43278,
        "lng": -99.13306
      },
      "city": "멕시코시티",
      "summary": "소칼로는 멕시코 멕시코시티의 광장이다."
    },
    {
      "name": "국립 인류학 박물관",
      "nameEn": "National Museum of Anthropology (Mexico)",
      "wiki": "국립 인류학 박물관 (멕시코)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Musee_National_Anthropologie-Entree.jpg/500px-Musee_National_Anthropologie-Entree.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.4261,
        "lng": -99.1861
      },
      "city": "멕시코시티",
      "summary": "국립 인류학 박물관은 멕시코 멕시코시티에 위치한 인류학 박물관이다."
    },
    {
      "name": "팔라시오 데 베야스 아르테스",
      "nameEn": "Palacio de Bellas Artes",
      "wiki": "팔라시오 데 베야스 아르테스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/500px-Bellas_Artes_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.4353,
        "lng": -99.1414
      },
      "city": "멕시코시티",
      "summary": "팔라시오 데 베야스 아르테스, 멕시코 예술 궁전은 멕시코시티의 저명한 문화 센터이다."
    },
    {
      "name": "프리다 칼로 박물관",
      "nameEn": "Frida Kahlo Museum",
      "wiki": "en:Frida Kahlo Museum",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Museo_Frida_Kahlo.JPG/500px-Museo_Frida_Kahlo.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.35514,
        "lng": -99.16253
      },
      "city": "멕시코시티",
      "summary": ""
    },
    {
      "name": "소치밀코",
      "nameEn": "Xochimilco",
      "wiki": "소치밀코",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Trajinera_en_canal_Nativitas.jpg/500px-Trajinera_en_canal_Nativitas.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.24758,
        "lng": -99.09822
      },
      "city": "멕시코시티",
      "summary": "소치밀코는 멕시코의 수도 멕시코시티에 있는 16 행정구 중 하나이다."
    },
    {
      "name": "툴룸 유적",
      "nameEn": "Tulum",
      "wiki": "en:Tulum",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Tulum_2.jpg/500px-Tulum_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 20.21472,
        "lng": -87.42889
      },
      "city": "",
      "summary": ""
    }
  ],
  "united-kingdom": [
    {
      "name": "빅 벤",
      "nameEn": "Big Ben",
      "wiki": "빅 벤",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg/500px-Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.5007,
        "lng": -0.1245
      },
      "city": "런던",
      "summary": "영국 런던에 있는 웨스트민스터 궁전에 부속된 시계탑의 자명종의 애칭"
    },
    {
      "name": "런던탑",
      "nameEn": "Tower of London",
      "wiki": "런던탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/500px-Tower_of_London_from_the_Shard_%288515883950%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.50806,
        "lng": -0.07611
      },
      "city": "런던",
      "summary": "영국 런던 도심의 템스강변에 위치한 성"
    },
    {
      "name": "타워 브리지",
      "nameEn": "Tower Bridge",
      "wiki": "타워 브리지",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/500px-Tower_Bridge_at_Dawn.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.5056,
        "lng": -0.0753
      },
      "city": "런던",
      "summary": ""
    },
    {
      "name": "대영박물관",
      "nameEn": "British Museum",
      "wiki": "대영박물관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/500px-British_Museum_from_NE_2.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.5194,
        "lng": -0.1269
      },
      "city": "런던",
      "summary": "영국 최대의 국립 공공박물관"
    },
    {
      "name": "버킹엄궁",
      "nameEn": "Buckingham Palace",
      "wiki": "버킹엄궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/500px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.50083,
        "lng": -0.14194
      },
      "city": "런던",
      "summary": "영국 런던에 위치한 궁전"
    },
    {
      "name": "런던 아이",
      "nameEn": "London Eye",
      "wiki": "런던 아이",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/500px-London-Eye-2009.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.5033,
        "lng": -0.1194
      },
      "city": "런던",
      "summary": "런던에 위치한 대관람차"
    },
    {
      "name": "에든버러성",
      "nameEn": "Edinburgh Castle",
      "wiki": "에든버러성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Edinburgh_Castle_from_Esplanade_20211019.jpg/500px-Edinburgh_Castle_from_Esplanade_20211019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 55.94861,
        "lng": -3.20083
      },
      "city": "에딘버러",
      "summary": "스코틀랜드 에든버러의 성"
    },
    {
      "name": "스톤헨지",
      "nameEn": "Stonehenge",
      "wiki": "스톤헨지",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/500px-Stonehenge2007_07_30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.17889,
        "lng": -1.82611
      },
      "city": "",
      "summary": "스톤헨지는 영국 남부 윌트셔 주 솔즈베리 평원과 에임즈버리에 있는 선사 시대의 거석기념물이자 선사 시대의 환상 열석 유적이다."
    }
  ],
  "germany": [
    {
      "name": "브란덴부르크 문",
      "nameEn": "Brandenburg Gate",
      "wiki": "브란덴부르크 문",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/500px-Brandenburger_Tor_abends.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.5163,
        "lng": 13.3777
      },
      "city": "베를린",
      "summary": "브란덴부르크 문은 18세기에 베를린에 지어진 초기 고전주의 양식 개선문이다."
    },
    {
      "name": "노이슈반슈타인성",
      "nameEn": "Neuschwanstein Castle",
      "wiki": "노이슈반슈타인성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Schloss_Neuschwanstein_%2845_mm%29.jpg/500px-Schloss_Neuschwanstein_%2845_mm%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.5575,
        "lng": 10.74944
      },
      "city": "",
      "summary": "독일 바이에른주 호엔슈방가우에 위치한 성"
    },
    {
      "name": "쾰른 대성당",
      "nameEn": "Cologne Cathedral",
      "wiki": "쾰른 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg/500px-K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 50.94139,
        "lng": 6.95833
      },
      "city": "",
      "summary": "독일 쾰른에 있는 고딕 양식의 성당"
    },
    {
      "name": "국가의회 의사당",
      "nameEn": "Reichstag building",
      "wiki": "국가의회 의사당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/500px-Berlin_reichstag_west_panorama_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.51861,
        "lng": 13.37611
      },
      "city": "베를린",
      "summary": "국가의회 의사당은 독일 베를린에 있는 역사적인 건물이다."
    },
    {
      "name": "박물관섬",
      "nameEn": "Museum Island",
      "wiki": "박물관섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg/500px-Berlin_Museumsinsel_Fernsehturm.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.52139,
        "lng": 13.39556
      },
      "city": "베를린",
      "summary": "베를린 중심부에 있는 슈프레 섬의 일부"
    },
    {
      "name": "이스트 사이드 갤러리",
      "nameEn": "East Side Gallery",
      "wiki": "이스트 사이드 갤러리",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg/500px-Segment_with_Graffiti_of_the_Berlin_Wall_%283_of_4%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.50306,
        "lng": 13.44472
      },
      "city": "베를린",
      "summary": "이스트 사이드 갤러리는 독일 베를린에 있는 베를린 장벽 일부에 조성된 미술 갤러리이다."
    },
    {
      "name": "마리엔 광장",
      "nameEn": "Marienplatz",
      "wiki": "마리엔 광장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/500px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.1373,
        "lng": 11.5755
      },
      "city": "뮌헨",
      "summary": "마리엔 광장은 독일 뮌헨에 위치한 광장이다."
    },
    {
      "name": "하이델베르크성",
      "nameEn": "Heidelberg Castle",
      "wiki": "하이델베르크성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Heidelberg-2726936.jpg/500px-Heidelberg-2726936.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 49.41056,
        "lng": 8.71583
      },
      "city": "",
      "summary": "하이델베르크성은 독일의 유명한 유적이고 하이델베르크의 랜드마크이다."
    }
  ],
  "greece": [
    {
      "name": "아크로폴리스",
      "nameEn": "Acropolis of Athens",
      "wiki": "아크로폴리스 (아테네)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/500px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.97167,
        "lng": 23.72611
      },
      "city": "아테네",
      "summary": "아크로폴리스는 그리스 아테네의 바위지대에 있는 성채이며, 건축학적, 역사적으로 매우 중요한 고대 건축물들의 유적지가 있으며…"
    },
    {
      "name": "파르테논 신전",
      "nameEn": "Parthenon",
      "wiki": "파르테논 신전",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/500px-The_Parthenon_in_Athens.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.9715,
        "lng": 23.7266
      },
      "city": "아테네",
      "summary": "파르테논 신전은 그리스 아테네의 아크로폴리스에 있는 명승고적으로, 고대 아테나이의 수호자로 여겨지던 아테나 여신에 봉헌된 …"
    },
    {
      "name": "아크로폴리스 박물관",
      "nameEn": "Acropolis Museum",
      "wiki": "아크로폴리스 박물관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Acropolis_Museum_Logo_%282011%29.svg/500px-Acropolis_Museum_Logo_%282011%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.96911,
        "lng": 23.7283
      },
      "city": "아테네",
      "summary": "아크로폴리스 박물관는 그리스 아테네의 박물관으로, 아크로폴리스의 발굴 현장에서 출토된 문화재를 중심으로 소장 · 전시하고 …"
    },
    {
      "name": "산토리니섬",
      "nameEn": "Santorini",
      "wiki": "산토리니섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/500px-2011_Dimos_Thiras.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 36.415,
        "lng": 25.4325
      },
      "city": "산토리니",
      "summary": "에게해에 있는 그리스의 키클라데스 섬"
    },
    {
      "name": "미코노스섬",
      "nameEn": "Mykonos",
      "wiki": "미코노스섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/2011_Dimos_Mykonou.png/500px-2011_Dimos_Mykonou.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 37.45889,
        "lng": 25.36417
      },
      "city": "미코노스",
      "summary": "미코노스섬은 에게해 남쪽에 위치한 그리스의 섬으로 면적은 105.2km2, 높이는 364m, 인구는 9,320명이다."
    },
    {
      "name": "메테오라",
      "nameEn": "Meteora",
      "wiki": "메테오라",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Meteora%27s_monastery_2.jpg/500px-Meteora%27s_monastery_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 39.71417,
        "lng": 21.63111
      },
      "city": "",
      "summary": "메테오라는 그리스에서 아토스산 다음으로 정교회 큰 수도원이 많이 밀집한 지역이다."
    },
    {
      "name": "델포이",
      "nameEn": "Delphi",
      "wiki": "델포이",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Delphi%2C_Greece_-_panoramio.jpg/500px-Delphi%2C_Greece_-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.4823,
        "lng": 22.5013
      },
      "city": "",
      "summary": "고대 그리스의 도시"
    },
    {
      "name": "크노소스",
      "nameEn": "Knossos",
      "wiki": "크노소스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Crete_integrated_map-en.svg/500px-Crete_integrated_map-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 35.29806,
        "lng": 25.16306
      },
      "city": "",
      "summary": "크레타섬의 청동기시대 유적"
    }
  ],
  "austria": [
    {
      "name": "쇤브룬궁",
      "nameEn": "Schönbrunn Palace",
      "wiki": "쇤브룬궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Wien_-_Schloss_Sch%C3%B6nbrunn.JPG/500px-Wien_-_Schloss_Sch%C3%B6nbrunn.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.18452,
        "lng": 16.31187
      },
      "city": "빈",
      "summary": "오스트리아 빈에 위치한 궁전"
    },
    {
      "name": "슈테판 대성당",
      "nameEn": "St. Stephen's Cathedral, Vienna",
      "wiki": "슈테판 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/500px-Wien_-_Stephansdom_%281%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.2085,
        "lng": 16.373
      },
      "city": "빈",
      "summary": "슈테판 대성당은 오스트리아 빈에 있는 로마 가톨릭교회의 성당으로 빈 대교구의 대성당이다."
    },
    {
      "name": "호프부르크",
      "nameEn": "Hofburg",
      "wiki": "호프부르크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Wien_-_Neue_Hofburg.JPG/500px-Wien_-_Neue_Hofburg.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.20639,
        "lng": 16.36528
      },
      "city": "빈",
      "summary": "오스트리아 빈의 궁전"
    },
    {
      "name": "벨베데레궁",
      "nameEn": "Belvedere, Vienna",
      "wiki": "벨베데레궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Palacio_Belvedere%2C_Viena%2C_Austria%2C_2020-02-01%2C_DD_93-95_HDR.jpg/500px-Palacio_Belvedere%2C_Viena%2C_Austria%2C_2020-02-01%2C_DD_93-95_HDR.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.19417,
        "lng": 16.38028
      },
      "city": "빈",
      "summary": "벨베데레궁은 오스트리아의 궁전으로서 빈 남동쪽에 있는 바로크 양식 궁전이다."
    },
    {
      "name": "빈 국립 오페라 극장",
      "nameEn": "Vienna State Opera",
      "wiki": "빈 국립 오페라 극장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Wiener_Staatsoper_Front.jpg/500px-Wiener_Staatsoper_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 48.20333,
        "lng": 16.36917
      },
      "city": "빈",
      "summary": "빈 국립 오페라 극장은 음악의 도시 빈을 대표하는 오페라 극장이다."
    },
    {
      "name": "할슈타트",
      "nameEn": "Hallstatt",
      "wiki": "할슈타트",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Hallstatt_-_Zentrum_.JPG/500px-Hallstatt_-_Zentrum_.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.562,
        "lng": 13.649
      },
      "city": "잘츠부르크",
      "summary": "할슈타트는 오스트리아 오버외스터라이히주 그문덴군의 마을이다."
    },
    {
      "name": "미라벨궁",
      "nameEn": "Mirabell Palace",
      "wiki": "미라벨궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Palatul_Mirabell1.jpg/500px-Palatul_Mirabell1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.80556,
        "lng": 13.04194
      },
      "city": "잘츠부르크",
      "summary": "미라벨 궁전은 오스트리아 잘츠부르크에 위치한 궁전으로, 1606년 볼프 디트리히 폰 라이테나우에 의해 지어졌다."
    },
    {
      "name": "호엔잘츠부르크성",
      "nameEn": "Hohensalzburg Fortress",
      "wiki": "호엔잘츠부르크성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Salzburg_-_Festung_Hohensalzburg.JPG/500px-Salzburg_-_Festung_Hohensalzburg.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.795,
        "lng": 13.04722
      },
      "city": "잘츠부르크",
      "summary": "호엔잘츠부르크성은 오스트리아 잘츠부르크 Festungsberg 산의 꼭대기에 위치한 성이자 요새이다."
    }
  ],
  "china": [
    {
      "name": "자금성",
      "nameEn": "Forbidden City",
      "wiki": "자금성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg/500px-The_Forbidden_City_-_View_from_Coal_Hill.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 39.91583,
        "lng": 116.39083
      },
      "city": "베이징",
      "summary": "중국 북경시의 궁전, 명나라과 청나라의 황궁"
    },
    {
      "name": "만리장성",
      "nameEn": "Great Wall of China",
      "wiki": "만리장성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/500px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 40.43139,
        "lng": 116.56444
      },
      "city": "베이징",
      "summary": "중국의 고대 진나라 때 기존의 성곽을 잇고 부족한 부분은 새롭게 축조하여 만든 거대한 성곽"
    },
    {
      "name": "천단",
      "nameEn": "Temple of Heaven",
      "wiki": "천단",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Temple_of_Heaven_20160323_01.jpg/500px-Temple_of_Heaven_20160323_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 39.8822,
        "lng": 116.4066
      },
      "city": "베이징",
      "summary": "천단은 중화인민공화국 베이징시 충원구에 있는 사적으로, 명청시대 중국에서 군주가 제천 의식을 행하던 유교 제단이다."
    },
    {
      "name": "이화원",
      "nameEn": "Summer Palace",
      "wiki": "이화원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Longevity_Hill_of_the_Summer_Palace.jpg/500px-Longevity_Hill_of_the_Summer_Palace.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 39.9975,
        "lng": 116.2689
      },
      "city": "베이징",
      "summary": "이화원은 북경 서북부의 하이뎬 구에 위치한 정원 공원이자 궁전이다."
    },
    {
      "name": "와이탄",
      "nameEn": "The Bund",
      "wiki": "와이탄",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/500px-The_Bund_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 31.23803,
        "lng": 121.48614
      },
      "city": "상하이",
      "summary": "와이탄은 1.7km 걸쳐 상하이의 주요 건물과 야경을 가장 잘 조명할 수 있는 포인트로 사람들의 사진에 가장 많이 남아있는…"
    },
    {
      "name": "예원",
      "nameEn": "Yu Garden",
      "wiki": "예원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Shanghai_-_Yu_Garden_-_0035.jpg/500px-Shanghai_-_Yu_Garden_-_0035.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 31.22917,
        "lng": 121.4875
      },
      "city": "상하이",
      "summary": "중국 상하이 구시가지 푸시의 중앙에 위치하고 있는 명청시대의 양식을 가지고 있는 정원"
    },
    {
      "name": "동방명주탑",
      "nameEn": "Oriental Pearl Tower",
      "wiki": "동방명주탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Oriental_Pearl_Tower_20251126.jpg/500px-Oriental_Pearl_Tower_20251126.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 31.24167,
        "lng": 121.49472
      },
      "city": "상하이",
      "summary": "동방명주탑은 상하이에 있는 방송탑이다."
    },
    {
      "name": "병마용",
      "nameEn": "Terracotta Army",
      "wiki": "병마용",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/500px-51714-Terracota-Army.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 34.385,
        "lng": 109.27306
      },
      "city": "",
      "summary": "병마용갱은 중국 산시성 시안시 린퉁구에 있는 진시황릉에서 1km가량 떨어진 유적지로 흙을 구워 만든 수 많은 병사, 말 등…"
    }
  ],
  "canada": [
    {
      "name": "CN 타워",
      "nameEn": "CN Tower",
      "wiki": "CN 타워",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/CN_Tower_logo.png/500px-CN_Tower_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 43.64256,
        "lng": -79.38708
      },
      "city": "토론토",
      "summary": "CN 타워 혹은 투르 CN은 1976년에 캐나다 토론토에 세워진 높이 553.33m의 탑이다."
    },
    {
      "name": "나이아가라 폭포",
      "nameEn": "Niagara Falls",
      "wiki": "나이아가라 폭포",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/500px-3Falls_Niagara.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 43.0799,
        "lng": -79.0747
      },
      "city": "",
      "summary": "북아메리카에서 가장 큰 폭포"
    },
    {
      "name": "스탠리 파크",
      "nameEn": "Stanley Park",
      "wiki": "스탠리 파크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Stanley_Park_Labeled_Aerial_Map.png/500px-Stanley_Park_Labeled_Aerial_Map.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 49.3,
        "lng": -123.14
      },
      "city": "밴쿠버",
      "summary": "스탠리 파크는 캐나다 브리티시 컬럼비아 주 밴쿠버 다운타운에 접한 404.9 헥타르의 도시 공원이다."
    },
    {
      "name": "그랜빌 아일랜드",
      "nameEn": "Granville Island",
      "wiki": "en:Granville Island",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Granville_Island_view_from_Granville_Bridge_in_2010.jpg/500px-Granville_Island_view_from_Granville_Bridge_in_2010.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 49.27083,
        "lng": -123.13417
      },
      "city": "밴쿠버",
      "summary": ""
    },
    {
      "name": "비외퀘벡",
      "nameEn": "Old Quebec",
      "wiki": "비외퀘벡",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Le_tourisme_dans_le_vieux_Qu%C3%A9bec.jpg/500px-Le_tourisme_dans_le_vieux_Qu%C3%A9bec.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.80944,
        "lng": -71.21056
      },
      "city": "",
      "summary": "비외퀘벡, 퀘벡 역사지구, 올드퀘벡은 캐나다 퀘벡주 퀘벡에 있는 역사지구로, 성벽으로 둘러싸인 언덕에 있는 오트빌과 언덕과…"
    },
    {
      "name": "몬트리올 노트르담 대성당",
      "nameEn": "Notre-Dame Basilica (Montreal)",
      "wiki": "en:Notre-Dame Basilica (Montreal)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Bas%C3%ADlica_de_Notre-Dame%2C_Montreal%2C_Canad%C3%A1%2C_2017-08-11%2C_DD_26-28_HDR.jpg/500px-Bas%C3%ADlica_de_Notre-Dame%2C_Montreal%2C_Canad%C3%A1%2C_2017-08-11%2C_DD_26-28_HDR.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 45.50444,
        "lng": -73.55611
      },
      "city": "몬트리올",
      "summary": ""
    },
    {
      "name": "밴프 국립공원",
      "nameEn": "Banff National Park",
      "wiki": "밴프 국립공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/500px-Moraine_Lake_17092005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.5,
        "lng": -116
      },
      "city": "",
      "summary": "밴프 국립공원은 캐나다에서 가장 오래된 국립공원으로, 로키산맥에서 1885년에 설립되었다."
    },
    {
      "name": "루이스호",
      "nameEn": "Lake Louise (Alberta)",
      "wiki": "루이스호 (앨버타주)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/1_lake_louise_pano_2019.jpg/500px-1_lake_louise_pano_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.41167,
        "lng": -116.22806
      },
      "city": "",
      "summary": "루이스호는 캐나다 앨버타주의 밴프 국립공원 로키산맥에 위치한 호수이다."
    }
  ],
  "hungary": [
    {
      "name": "국회의사당",
      "nameEn": "Hungarian Parliament Building",
      "wiki": "국회의사당 (헝가리)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg/500px-Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.50694,
        "lng": 19.04556
      },
      "city": "부다페스트",
      "summary": "헝가리의 국회의사당"
    },
    {
      "name": "부다성",
      "nameEn": "Buda Castle",
      "wiki": "부다성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Budav%C3%A1ri_Palota%2C_ABCDEF_%C3%A9p%C3%BClet.jpg/500px-Budav%C3%A1ri_Palota%2C_ABCDEF_%C3%A9p%C3%BClet.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.49611,
        "lng": 19.03972
      },
      "city": "부다페스트",
      "summary": "부다성은 헝가리 부다페스트에 있는 헝가리 국왕들이 살았던 역사적인 성채이다."
    },
    {
      "name": "어부의 요새",
      "nameEn": "Fisherman's Bastion",
      "wiki": "어부의 요새",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Hal%C3%A1szb%C3%A1stya_2017.jpg/500px-Hal%C3%A1szb%C3%A1stya_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.5027,
        "lng": 19.0344
      },
      "city": "부다페스트",
      "summary": "어부의 요새는 헝가리 부다페스트 마차시 성당 옆에 있는 네오 고딕 네오 로마네스크 스타일의 테라스이다."
    },
    {
      "name": "세체니 다리",
      "nameEn": "Széchenyi Chain Bridge",
      "wiki": "세체니 다리",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg/500px-Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.49889,
        "lng": 19.04361
      },
      "city": "부다페스트",
      "summary": "세체니 다리는 헝가리의 수도 부다페스트의 서쪽 지구 부더와 동쪽 지구 페슈트 사이에 있는 도나우강에 놓인 현수교이다."
    },
    {
      "name": "센트이슈트반 대성당",
      "nameEn": "St. Stephen's Basilica",
      "wiki": "센트이슈트반 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Budapest_Szent_Istvan_Bazilika_R01.jpg/500px-Budapest_Szent_Istvan_Bazilika_R01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.50083,
        "lng": 19.05389
      },
      "city": "부다페스트",
      "summary": "센트이슈트반 대성당은 헝가리 부다페스트에 있는 대성당이다."
    },
    {
      "name": "마차시 성당",
      "nameEn": "Matthias Church",
      "wiki": "마차시 성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/MatyasTemplomFotoThalerTamas20162.JPG/500px-MatyasTemplomFotoThalerTamas20162.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.50194,
        "lng": 19.03417
      },
      "city": "부다페스트",
      "summary": "마차시 성당은 헝가리 부다페스트에 있는 성당이다."
    },
    {
      "name": "세체니 온천",
      "nameEn": "Széchenyi thermal bath",
      "wiki": "세체니 온천",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Budapest_Sz%C3%A9chenyi_Baths_R02.jpg/500px-Budapest_Sz%C3%A9chenyi_Baths_R02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.51861,
        "lng": 19.08194
      },
      "city": "부다페스트",
      "summary": "세체니 온천은 헝가리 부다페스트 14구에 위치한 온천이다."
    },
    {
      "name": "회쇠크 광장",
      "nameEn": "Heroes' Square (Budapest)",
      "wiki": "회쇠크 광장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/HUN-2015-Budapest-Heroes%E2%80%99_Square.jpg/500px-HUN-2015-Budapest-Heroes%E2%80%99_Square.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.515,
        "lng": 19.07778
      },
      "city": "부다페스트",
      "summary": "회쇠크 광장 또는 영웅광장은 헝가리 부다페스트에 있는 광장이다."
    }
  ],
  "switzerland": [
    {
      "name": "마터호른산",
      "nameEn": "Matterhorn",
      "wiki": "마터호른산",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/500px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 45.97639,
        "lng": 7.65861
      },
      "city": "",
      "summary": "마터호른산 혹은 마테호른산, 몬테체르비노산, 몽세르뱅산은 알프스산맥에 있는 산이다."
    },
    {
      "name": "융프라우요흐",
      "nameEn": "Jungfraujoch",
      "wiki": "융프라우요흐",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Sphinx_et_Jungfrau_-_img_06980.jpg/500px-Sphinx_et_Jungfrau_-_img_06980.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.54722,
        "lng": 7.98056
      },
      "city": "",
      "summary": "융프라우의 능선"
    },
    {
      "name": "시옹성",
      "nameEn": "Chillon Castle",
      "wiki": "시옹성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg/500px-001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.41417,
        "lng": 6.9275
      },
      "city": "",
      "summary": ""
    },
    {
      "name": "카펠교",
      "nameEn": "Kapellbrücke",
      "wiki": "카펠교",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Kapellbruecke.JPG/500px-Kapellbruecke.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.05167,
        "lng": 8.3075
      },
      "city": "취리히",
      "summary": "스위스 루체른의 다리"
    },
    {
      "name": "라인 폭포",
      "nameEn": "Rhine Falls",
      "wiki": "라인 폭포",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/SBB_RABe_514_DTZ_Rheinfall.jpg/500px-SBB_RABe_514_DTZ_Rheinfall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 47.67722,
        "lng": 8.61583
      },
      "city": "취리히",
      "summary": "라인 폭포는 스위스 샤프하우젠주와 취리히주 경계 지점에 위치한 유럽 최대의 폭포이다."
    },
    {
      "name": "치트글로게",
      "nameEn": "Zytglogge",
      "wiki": "치트글로게",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/500px-Zytglogge_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.94806,
        "lng": 7.44778
      },
      "city": "베른",
      "summary": "치트글로게 또는 치트글로게 시계탑은 스위스 베른에 있는 중세시대 대표 탑이다."
    },
    {
      "name": "제트 분수",
      "nameEn": "Jet d'Eau",
      "wiki": "en:Jet d'Eau",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Jet_d%27eau_de_Gen%C3%A8ve_%28swiss%29.jpg/500px-Jet_d%27eau_de_Gen%C3%A8ve_%28swiss%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.20722,
        "lng": 6.15611
      },
      "city": "제네바",
      "summary": ""
    },
    {
      "name": "레만호",
      "nameEn": "Lake Geneva",
      "wiki": "레만호",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Lake_Geneva_by_Sentinel-2.jpg/500px-Lake_Geneva_by_Sentinel-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 46.45,
        "lng": 6.55
      },
      "city": "제네바",
      "summary": "레만호는 스위스와 프랑스 국경에 있는 면적 583km2 호수이다."
    }
  ],
  "netherlands": [
    {
      "name": "암스테르담 국립미술관",
      "nameEn": "Rijksmuseum",
      "wiki": "암스테르담 국립미술관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/500px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.36,
        "lng": 4.8853
      },
      "city": "암스테르담",
      "summary": "네덜란드 암스테르담에 위치한 국립 미술관"
    },
    {
      "name": "반 고흐 미술관",
      "nameEn": "Van Gogh Museum",
      "wiki": "반 고흐 미술관",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_-_Van_Gogh_Museum.png/500px-Logo_-_Van_Gogh_Museum.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.3583,
        "lng": 4.8811
      },
      "city": "암스테르담",
      "summary": "반 고흐 미술관은 네덜란드 암스테르담 남부의 뮈세윔플레인 광장에 있는, 빈센트 반 고흐와 그의 동시대 예술가들의 작품을 전…"
    },
    {
      "name": "안네 프랑크의 집",
      "nameEn": "Anne Frank House",
      "wiki": "안네 프랑크의 집",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg/500px-Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.37525,
        "lng": 4.88432
      },
      "city": "암스테르담",
      "summary": "암스테르담의 작가의 집과 박물관"
    },
    {
      "name": "담 광장",
      "nameEn": "Dam Square",
      "wiki": "담 광장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Dam_Square_2026.jpg/500px-Dam_Square_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.3731,
        "lng": 4.8928
      },
      "city": "암스테르담",
      "summary": "담 광장은 네덜란드 암스테르담 중심부에 있는 광장이다."
    },
    {
      "name": "쾨켄호프",
      "nameEn": "Keukenhof",
      "wiki": "쾨켄호프",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/26Y_1599_2.jpg/500px-26Y_1599_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.27126,
        "lng": 4.54636
      },
      "city": "암스테르담",
      "summary": "쾨켄호프는 네덜란드 자위트홀란트주 리서에 위치한 정원으로 면적은 32 헥타르이다."
    },
    {
      "name": "킨데르데이크",
      "nameEn": "Kinderdijk",
      "wiki": "킨데르데이크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/KinderdijkMolens02.jpg/500px-KinderdijkMolens02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 51.88333,
        "lng": 4.63333
      },
      "city": "로테르담",
      "summary": "킨데르데이크는 네덜란드 자위트홀란트주 니우레케를란트에 위치한 마을이다."
    },
    {
      "name": "잔서스한스",
      "nameEn": "Zaanse Schans",
      "wiki": "잔서스한스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Zaanstad_Zaanse_Schans_22.jpg/500px-Zaanstad_Zaanse_Schans_22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.47389,
        "lng": 4.81639
      },
      "city": "암스테르담",
      "summary": "잔서스한스는 네덜란드 노르트홀란트주 잔담의 마을이다."
    },
    {
      "name": "마우리츠하위스",
      "nameEn": "Mauritshuis",
      "wiki": "마우리츠하위스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Mauritshuis_museum_logo.png/500px-Mauritshuis_museum_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 52.0804,
        "lng": 4.3143
      },
      "city": "헤이그",
      "summary": "네덜란드 헤이그에 위치한 미술관"
    }
  ],
  "portugal": [
    {
      "name": "벨렝탑",
      "nameEn": "Belém Tower",
      "wiki": "벨렝탑",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Torre_Bel%C3%A9m_April_2009-4a.jpg/500px-Torre_Bel%C3%A9m_April_2009-4a.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.69167,
        "lng": -9.21611
      },
      "city": "리스본",
      "summary": "벨렝탑은 포르투갈 리스본에 위치한 16세기 방어시설로, 포르투갈 탐험가들의 출항 및 입항 지점이자 리스본의 의례적인 관문 …"
    },
    {
      "name": "제로니무스 수도원",
      "nameEn": "Jerónimos Monastery",
      "wiki": "제로니무스 수도원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/1502_legte_K%C3%B6nig_Manuel_I._den_Grundstein_f%C3%BCr_das_Hieronymus_Kloster_in_Lissabon._06.jpg/500px-1502_legte_K%C3%B6nig_Manuel_I._den_Grundstein_f%C3%BCr_das_Hieronymus_Kloster_in_Lissabon._06.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.69778,
        "lng": -9.20611
      },
      "city": "리스본",
      "summary": "제로니무스 수도원은 포르투갈 리스본 벨렝에 있는 수도원으로, 인근에 위치한 벨렝탑과 함께 유네스코 세계유산에 등재되어 있다."
    },
    {
      "name": "페나궁",
      "nameEn": "Pena Palace",
      "wiki": "페나궁",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Sintra_-_Palacio_da_Pena_%2820332995770%29.jpg/500px-Sintra_-_Palacio_da_Pena_%2820332995770%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.78778,
        "lng": -9.39056
      },
      "city": "리스본",
      "summary": "신트라에 위치한 궁전"
    },
    {
      "name": "코메르시우 광장",
      "nameEn": "Praça do Comércio",
      "wiki": "코메르시우 광장",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_01-03_PAN.jpg?width=480",
      "location": {
        "lat": 38.7075,
        "lng": -9.13639
      },
      "city": "리스본",
      "summary": "코메르시우 광장은 포르투갈 리스본의 광장이다."
    },
    {
      "name": "렐루 서점",
      "nameEn": "Livraria Lello",
      "wiki": "렐루 서점",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Lello_Bookshop_9_April_2026.jpg/500px-Lello_Bookshop_9_April_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.14694,
        "lng": -8.61472
      },
      "city": "포르투",
      "summary": "포르투갈 포르투에 위치한 서점"
    },
    {
      "name": "동 루이스 다리",
      "nameEn": "Dom Luís I Bridge",
      "wiki": "동 루이스 다리",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg/500px-Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 41.13986,
        "lng": -8.60934
      },
      "city": "포르투",
      "summary": "동 루이스 다리는 포르투갈 포르투에 위치한 도로 철도 병용교이다."
    },
    {
      "name": "호카곶",
      "nameEn": "Cabo da Roca",
      "wiki": "호카곶",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Coasts_of_Cabo_da_Roca_13.jpg/500px-Coasts_of_Cabo_da_Roca_13.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.78083,
        "lng": -9.50056
      },
      "city": "리스본",
      "summary": "호카 곶은 유라시아 대륙 최서단의 곶이다."
    },
    {
      "name": "리스본 대성당",
      "nameEn": "Lisbon Cathedral",
      "wiki": "리스본 대성당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/West_facade_of_Lisbon_Cathedral_%28retouched%29.jpg/500px-West_facade_of_Lisbon_Cathedral_%28retouched%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 38.70972,
        "lng": -9.13306
      },
      "city": "리스본",
      "summary": "포르투갈 리스본에 위치한 로마 가톨릭교회 대성당"
    }
  ],
  "philippines": [
    {
      "name": "인트라무로스",
      "nameEn": "Intramuros",
      "wiki": "인트라무로스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Baluartillo_de_San_Jos%C3%A9%2C_Manila%2C_Filipinas%2C_2023-08-26%2C_DD_41.jpg/500px-Baluartillo_de_San_Jos%C3%A9%2C_Manila%2C_Filipinas%2C_2023-08-26%2C_DD_41.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 14.59147,
        "lng": 120.97356
      },
      "city": "마닐라",
      "summary": "인트라무로스는 16세기에 스페인인들에 의해 지어진 필리핀의 수도 마닐라에서 가장 오래된 지역으로, 파시그 강 남쪽에 위치한다."
    },
    {
      "name": "산티아고 요새",
      "nameEn": "Fort Santiago",
      "wiki": "en:Fort Santiago",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Fort_Santiago%2C_Intramuros.JPG/500px-Fort_Santiago%2C_Intramuros.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 14.595,
        "lng": 120.96944
      },
      "city": "마닐라",
      "summary": ""
    },
    {
      "name": "리살 공원",
      "nameEn": "Rizal Park",
      "wiki": "리살 공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Rizal_Monument_%28Manila%2C_2024%29.jpg/500px-Rizal_Monument_%28Manila%2C_2024%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 14.5825,
        "lng": 120.97833
      },
      "city": "마닐라",
      "summary": "리살 공원은 필리핀의 역사적 도시 공원이다."
    },
    {
      "name": "보라카이섬",
      "nameEn": "Boracay",
      "wiki": "보라카이섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Boracay_White_Beach.png/500px-Boracay_White_Beach.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 11.96889,
        "lng": 121.92389
      },
      "city": "보라카이",
      "summary": "보라카이섬은 필리핀의 섬으로 길이는 12km로 총면적은 11km2이며 인구는 약 1만 3,000명이다."
    },
    {
      "name": "초콜릿 힐스",
      "nameEn": "Chocolate Hills",
      "wiki": "초콜릿 힐스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Chocolate_Hills_Bohol.JPG/500px-Chocolate_Hills_Bohol.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 9.91667,
        "lng": 124.16667
      },
      "city": "",
      "summary": "초콜릿 힐스는 필리핀 보홀주에 있는 지질 구조다."
    },
    {
      "name": "푸에르토프린세사 지하강 국립공원",
      "nameEn": "Puerto Princesa Subterranean River National Park",
      "wiki": "푸에르토프린세사 지하강 국립공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Puerto-Princesa_Subterranean_River_National_Park-112012.jpg/500px-Puerto-Princesa_Subterranean_River_National_Park-112012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 10.16667,
        "lng": 118.91667
      },
      "city": "",
      "summary": "푸에르토프린세사 지하강 국립공원는 필리핀 푸에르토프린세사로부터 약 80 km 떨어진 세인트폴 산맥에 위치한 보호 구역이다."
    },
    {
      "name": "마욘산",
      "nameEn": "Mayon",
      "wiki": "마욘산",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Mount_Mayon_Cagsawa_field_view_close-up_%28Busay%2C_Daraga%2C_Albay%3B_04-21-2023%29.jpg/500px-Mount_Mayon_Cagsawa_field_view_close-up_%28Busay%2C_Daraga%2C_Albay%3B_04-21-2023%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 13.25667,
        "lng": 123.685
      },
      "city": "",
      "summary": "마욘산은 필리핀 루손섬 남동부 알바이주에 위치한 활화산으로, 높이는 해발 2,463m이다."
    },
    {
      "name": "엘니도",
      "nameEn": "El Nido, Palawan",
      "wiki": "엘니도",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/El_Nido_Bay_December_2018.jpg/500px-El_Nido_Bay_December_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 11.18,
        "lng": 119.39
      },
      "city": "",
      "summary": "필리핀 팔라완 주에 있는 자치단체"
    }
  ],
  "vietnam": [
    {
      "name": "할롱만",
      "nameEn": "Hạ Long Bay",
      "wiki": "할롱만",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/500px-Ha_Long_Bay_in_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 20.9,
        "lng": 107.2
      },
      "city": "",
      "summary": "할롱만 또는 하롱베이는 베트남 북부, 꽝닌성 통킹만 북서부에 있는 만의 명칭이며, 크고 작은 3,000개의 기암괴석과 섬들…"
    },
    {
      "name": "호이안 구시가지",
      "nameEn": "Hội An Old Town",
      "wiki": "en:Hội An Old Town",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/10549-Hoi-An_%2837621348460%29.jpg/500px-10549-Hoi-An_%2837621348460%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 15.87714,
        "lng": 108.32863
      },
      "city": "다낭",
      "summary": ""
    },
    {
      "name": "호안끼엠호",
      "nameEn": "Hoàn Kiếm Lake",
      "wiki": "호안끼엠호",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Thap_Rua.jpg/500px-Thap_Rua.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 21.02889,
        "lng": 105.8525
      },
      "city": "하노이",
      "summary": "호안끼엠 호수는 베트남 하노이의 호안끼엠에 있는 호수이다."
    },
    {
      "name": "후에 황성",
      "nameEn": "Imperial City of Huế",
      "wiki": "후에 황성",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg/500px-%C4%90%E1%BA%A1i_n%E1%BB%99i.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 16.46972,
        "lng": 107.57778
      },
      "city": "",
      "summary": "후에 황성은 1802년부터 1945년에 이르기까지 약 143년간 베트남을 통치했던 응우옌 왕조의 황궁 역할을 했던 곳이다."
    },
    {
      "name": "꾸찌 터널",
      "nameEn": "Củ Chi tunnels",
      "wiki": "꾸찌 터널",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/C%E1%BB%A7_Chi_tunnels_entrance.JPG/500px-C%E1%BB%A7_Chi_tunnels_entrance.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 11.06083,
        "lng": 106.52861
      },
      "city": "호치민",
      "summary": "배트남 전쟁 때 숨는 곳"
    },
    {
      "name": "벤타인 시장",
      "nameEn": "Bến Thành Market",
      "wiki": "벤타인 시장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Ben_Thanh%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_01.JPG/500px-Ben_Thanh%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_01.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 10.77252,
        "lng": 106.69802
      },
      "city": "호치민",
      "summary": "벤타인 시장 또는 벤탄 시장은 베트남 호찌민시에 있는 시장이다."
    },
    {
      "name": "미선 유적",
      "nameEn": "Mỹ Sơn",
      "wiki": "en:Mỹ Sơn",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/X%C3%A3_M%E1%BB%B9_S%C6%A1n%2C_Ninh_S%C6%A1n.jpg/500px-X%C3%A3_M%E1%BB%B9_S%C6%A1n%2C_Ninh_S%C6%A1n.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 11.67202,
        "lng": 108.86361
      },
      "city": "",
      "summary": ""
    },
    {
      "name": "퐁냐깨방 국립공원",
      "nameEn": "Phong Nha–Kẻ Bàng National Park",
      "wiki": "퐁냐깨방 국립공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Phongnhakebang6.jpg/500px-Phongnhakebang6.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 17.53722,
        "lng": 106.15139
      },
      "city": "",
      "summary": "퐁냐깨방 국립공원 은 베트남 꽝빈성 보짝현 및 민호아현에 걸쳐 있는 국립공원이다."
    }
  ],
  "australia": [
    {
      "name": "시드니 오페라 하우스",
      "nameEn": "Sydney Opera House",
      "wiki": "시드니 오페라 하우스",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Sydney_Opera_House_2026.jpg/500px-Sydney_Opera_House_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -33.85681,
        "lng": 151.21514
      },
      "city": "시드니",
      "summary": "오스트레일리아 시드니의 오페라 극장"
    },
    {
      "name": "시드니 하버 브리지",
      "nameEn": "Sydney Harbour Bridge",
      "wiki": "시드니 하버 브리지",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Sydney_Harbour_Bridge-16_October_2025.jpg/500px-Sydney_Harbour_Bridge-16_October_2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -33.85222,
        "lng": 151.21056
      },
      "city": "시드니",
      "summary": "시드니 하버 브리지는 오스트레일리아 시드니에 있는 다리이다."
    },
    {
      "name": "본다이비치",
      "nameEn": "Bondi Beach",
      "wiki": "본다이비치",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Bondi_from_above.jpg/500px-Bondi_from_above.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -33.89111,
        "lng": 151.27417
      },
      "city": "시드니",
      "summary": "오스트레일리아 뉴사우스웨일스주 시드니에 속한 교외"
    },
    {
      "name": "울루루",
      "nameEn": "Uluru",
      "wiki": "울루루",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/500px-ULURU.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -25.345,
        "lng": 131.03611
      },
      "city": "",
      "summary": "오스트레일리아의 자연 경관"
    },
    {
      "name": "그레이트배리어리프",
      "nameEn": "Great Barrier Reef",
      "wiki": "그레이트배리어리프",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/500px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -16.4,
        "lng": 145.8
      },
      "city": "",
      "summary": "그레이트배리어리프 또는 대보초는 오스트레일리아 북동부에 위치한 세계 최대의 산호초 지대이다."
    },
    {
      "name": "12사도 바위",
      "nameEn": "The Twelve Apostles (Victoria)",
      "wiki": "12사도 바위",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Twelve_Apostles_2011.jpg/500px-The_Twelve_Apostles_2011.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -38.64056,
        "lng": 143.04944
      },
      "city": "",
      "summary": "12사도 바위는 오스트레일리아 빅토리아주에 있는, 수 만년동안 파도의 침식 작용으로 만들어진 바위기둥이다."
    },
    {
      "name": "페더레이션 광장",
      "nameEn": "Federation Square",
      "wiki": "페더레이션 광장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Fed_Square%2C_Melbourne%2C_west_view_20230219_1.jpg/500px-Fed_Square%2C_Melbourne%2C_west_view_20230219_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -37.8178,
        "lng": 144.96871
      },
      "city": "멜버른",
      "summary": "페더레이션 광장은 2002년 오픈한 오스트레일리아 멜버른에 위치한 광장이다."
    },
    {
      "name": "데인트리 열대우림",
      "nameEn": "Daintree Rainforest",
      "wiki": "데인트리 열대우림",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Daintree_Rainforest%2C_Queensland_%28483855%29_%289440811465%29.jpg/500px-Daintree_Rainforest%2C_Queensland_%28483855%29_%289440811465%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -16.2,
        "lng": 145.4
      },
      "city": "",
      "summary": "오스트레일리아 데인트리강의 지역에 있는 열대우림"
    }
  ],
  "thailand": [
    {
      "name": "왕궁",
      "nameEn": "Grand Palace",
      "wiki": "왕궁 (방콕)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/500px-0005574_-_Wat_Phra_Kaew_006.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 13.7501,
        "lng": 100.492
      },
      "city": "방콕",
      "summary": "왕궁은 태국 방콕에 있는 복합 건축물이다."
    },
    {
      "name": "왓 아룬",
      "nameEn": "Wat Arun",
      "wiki": "왓 아룬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/500px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 13.74361,
        "lng": 100.48889
      },
      "city": "방콕",
      "summary": "왓 아룬은 타이 방콕 야이 구의 불교 사원으로 짜오프라야강 왼쪽 강변에 있다."
    },
    {
      "name": "왓 포",
      "nameEn": "Wat Pho",
      "wiki": "왓 포",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg/500px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 13.74639,
        "lng": 100.49361
      },
      "city": "방콕",
      "summary": "태국 왕실의 불교 사원"
    },
    {
      "name": "짜뚜짝 주말시장",
      "nameEn": "Chatuchak Weekend Market",
      "wiki": "짜뚜짝 주말시장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Bangkok_-_Jatujak_Market_02.JPG/500px-Bangkok_-_Jatujak_Market_02.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 13.80083,
        "lng": 100.55139
      },
      "city": "방콕",
      "summary": "짜뚜짝 주말시장은 태국 방콕에서 가장 큰 시장이다."
    },
    {
      "name": "왓 프라탓 도이수텝",
      "nameEn": "Wat Phra That Doi Suthep",
      "wiki": "en:Wat Phra That Doi Suthep",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg/500px-Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 18.80498,
        "lng": 98.92156
      },
      "city": "치앙마이",
      "summary": ""
    },
    {
      "name": "아유타야 역사공원",
      "nameEn": "Ayutthaya Historical Park",
      "wiki": "아유타야 역사공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Ayutthaya_World_Heritage_sign.jpg/500px-Ayutthaya_World_Heritage_sign.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 14.35,
        "lng": 100.58333
      },
      "city": "",
      "summary": "아유타야 역사공원은 태국 아유타야의 옛 도시의 유적이다."
    },
    {
      "name": "피피 군도",
      "nameEn": "Phi Phi Islands",
      "wiki": "피피 군도",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/500px-KohPhiPhi.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 7.73333,
        "lng": 98.76667
      },
      "city": "푸켓",
      "summary": "태국의 군도 중 하나"
    },
    {
      "name": "왓 롱쿤(백색 사원)",
      "nameEn": "Wat Rong Khun",
      "wiki": "en:Wat Rong Khun",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Wat_Rong_Khun_-_Chiang_Rai.jpg/500px-Wat_Rong_Khun_-_Chiang_Rai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 19.82467,
        "lng": 99.76333
      },
      "city": "",
      "summary": ""
    }
  ],
  "taiwan": [
    {
      "name": "타이베이 101",
      "nameEn": "Taipei 101",
      "wiki": "타이베이 101",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Taipei_101_logo.svg/500px-Taipei_101_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.0336,
        "lng": 121.5647
      },
      "city": "타이베이",
      "summary": "타이완 타이베이시 신이구에 위치하고 있는 초고층 빌딩"
    },
    {
      "name": "국립고궁박물원",
      "nameEn": "National Palace Museum",
      "wiki": "국립고궁박물원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/NationalPalace_MuseumFrontView.jpg/500px-NationalPalace_MuseumFrontView.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.1022,
        "lng": 121.5486
      },
      "city": "타이베이",
      "summary": "중화민국의 박물관"
    },
    {
      "name": "중정기념당",
      "nameEn": "Chiang Kai-shek Memorial Hall",
      "wiki": "중정기념당",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Chiang_Kai-shek_memorial_amk.jpg/500px-Chiang_Kai-shek_memorial_amk.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.03444,
        "lng": 121.52167
      },
      "city": "타이베이",
      "summary": "중정기념당은 대만의 초대 총통이었던 장제스를 기념해 1980년에 건설한 기념관이다."
    },
    {
      "name": "스린 야시장",
      "nameEn": "Shilin Night Market",
      "wiki": "스린 야시장",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Shilin_night_market_alley_2.jpg/500px-Shilin_night_market_alley_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.0866,
        "lng": 121.5254
      },
      "city": "타이베이",
      "summary": "스린 야시장은 타이완 타이베이시에서 가장 규모가 큰 야시장 중의 하나이다."
    },
    {
      "name": "방카 룽산사",
      "nameEn": "Longshan Temple (Taipei)",
      "wiki": "방카 룽산사",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Bangka_Lungshan_Temple_07.23.jpg/500px-Bangka_Lungshan_Temple_07.23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.03722,
        "lng": 121.49944
      },
      "city": "타이베이",
      "summary": "중화민국 타이페이, 완화에 위치한 사원"
    },
    {
      "name": "주펀",
      "nameEn": "Jiufen",
      "wiki": "주펀",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/A-mei_Tea_House.jpg/500px-A-mei_Tea_House.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 25.107,
        "lng": 121.843
      },
      "city": "타이베이",
      "summary": "타이완 북부 신베이 시에 있는 마을"
    },
    {
      "name": "르웨탄호",
      "nameEn": "Sun Moon Lake",
      "wiki": "르웨탄호",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Sun_Moon_Lake_Sentinel-2B_MSI_2024-04-04.jpg/500px-Sun_Moon_Lake_Sentinel-2B_MSI_2024-04-04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 23.86667,
        "lng": 120.91667
      },
      "city": "타이중",
      "summary": ""
    },
    {
      "name": "타이루거 국가공원",
      "nameEn": "Taroko National Park",
      "wiki": "타이루거 국가공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Taroko_Gorge4.jpg/500px-Taroko_Gorge4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 24.16667,
        "lng": 121.33333
      },
      "city": "",
      "summary": "타이루거 국가공원은 대만 화롄현과 타이중시 그리고 남투현에 걸쳐 위치하며 일제 통치시대인 1937년에 차고태노각국립공원으로…"
    }
  ],
  "hong-kong": [
    {
      "name": "빅토리아 피크",
      "nameEn": "Victoria Peak",
      "wiki": "빅토리아 피크",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/High_West_and_Victoria_Peak_from_Victoria_Gap_%28crop1%29.jpg/500px-High_West_and_Victoria_Peak_from_Victoria_Gap_%28crop1%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.27556,
        "lng": 114.14389
      },
      "city": "홍콩",
      "summary": "빅토리아 피크는 높이 552m로 홍콩섬에서 가장 높은 산이다."
    },
    {
      "name": "빅토리아항",
      "nameEn": "Victoria Harbour",
      "wiki": "빅토리아항",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/1957_map_of_Victoria_Harbour_by_the_British_War_Office.jpg/500px-1957_map_of_Victoria_Harbour_by_the_British_War_Office.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.29,
        "lng": 114.17
      },
      "city": "홍콩",
      "summary": ""
    },
    {
      "name": "톈탄 대불",
      "nameEn": "The Big Buddha (Hong Kong)",
      "wiki": "en:The Big Buddha (Hong Kong)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Tian_Tan_Buddha_2023081302.jpg/500px-Tian_Tan_Buddha_2023081302.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.25411,
        "lng": 113.90514
      },
      "city": "란타우 섬",
      "summary": ""
    },
    {
      "name": "짐사저이 종루",
      "nameEn": "Clock Tower, Hong Kong",
      "wiki": "짐사저이 종루",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/HK_TST_Clock_Tower_interior_Salisbury_Road_night_Mar-2013.JPG/500px-HK_TST_Clock_Tower_interior_Salisbury_Road_night_Mar-2013.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.29368,
        "lng": 114.16936
      },
      "city": "홍콩",
      "summary": "짐사저이 종루는 홍콩 짐사저이에 위치한 종루이며, 짐사저이 역에서 유일하게 남아있는 건축물이다."
    },
    {
      "name": "템플 스트리트 야시장",
      "nameEn": "Temple Street, Hong Kong",
      "wiki": "en:Temple Street, Hong Kong",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/GateOfTempleInHongKong.jpg/500px-GateOfTempleInHongKong.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.30589,
        "lng": 114.16987
      },
      "city": "가우룽",
      "summary": ""
    },
    {
      "name": "스타의 거리",
      "nameEn": "Avenue of Stars, Hong Kong",
      "wiki": "성광대도",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Avenue_of_Stars_201901.jpg/500px-Avenue_of_Stars_201901.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.2931,
        "lng": 114.17476
      },
      "city": "홍콩",
      "summary": "성광대도는 할리우드 명예의 거리를 모델로 한 홍콩의 관광지로, 짐사저이 빅토리아항을 따라 홍콩의 배우, 감독 등 연예계 유…"
    },
    {
      "name": "만모사원",
      "nameEn": "Man Mo temples in Hong Kong",
      "wiki": "만모사원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Man_Mo_Temple%2C_1847-62%2C_Sheung_Wan%2C_Hong_Kong_%2817%29_%2832748033042%29.jpg/500px-Man_Mo_Temple%2C_1847-62%2C_Sheung_Wan%2C_Hong_Kong_%2817%29_%2832748033042%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.28398,
        "lng": 114.15024
      },
      "city": "홍콩",
      "summary": "만모사원 혹은 만모묘는 문창제군과 관우를 숭배하는 사당인데 해당 신들은 명청시대에 과거시험 성공을 비는 대상들이었다."
    },
    {
      "name": "홍콩 디즈니랜드",
      "nameEn": "Hong Kong Disneyland",
      "wiki": "홍콩 디즈니랜드",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Hong_Kong_Disneyland_Castle.jpg/500px-Hong_Kong_Disneyland_Castle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 22.31333,
        "lng": 114.04333
      },
      "city": "란타우 섬",
      "summary": "홍콩 디즈니랜드는 홍콩의 테마파크이자 월트 디즈니 컴퍼니의 홍콩 지역을 관장하고 있는 레저 시설로, 2005년 9월 홍콩 …"
    }
  ],
  "singapore": [
    {
      "name": "마리나 베이 샌즈",
      "nameEn": "Marina Bay Sands",
      "wiki": "마리나 베이 샌즈",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/500px-Marina_Bay_Sands_%28I%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.2825,
        "lng": 103.86
      },
      "city": "싱가포르",
      "summary": "마리나 베이 샌즈는 싱가포르 마리나 베이에 접한 종합 리조트 5성급 호텔이다."
    },
    {
      "name": "가든스 바이 더 베이",
      "nameEn": "Gardens by the Bay",
      "wiki": "가든스 바이 더 베이",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg/500px-Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.28472,
        "lng": 103.865
      },
      "city": "싱가포르",
      "summary": "싱가포르의 도시 공원"
    },
    {
      "name": "멀라이언",
      "nameEn": "Merlion",
      "wiki": "멀라이언",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Singapore_Skyline_2019-10.jpg/500px-Singapore_Skyline_2019-10.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.28681,
        "lng": 103.8545
      },
      "city": "싱가포르",
      "summary": "싱가포르의 상징물로서 상반신은 사자, 하반신은 물고기의 모습을 한 가공의 동물이다."
    },
    {
      "name": "센토사섬",
      "nameEn": "Sentosa",
      "wiki": "센토사섬",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/1_sentosa_aerial_2016.jpg/500px-1_sentosa_aerial_2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.248,
        "lng": 103.83
      },
      "city": "싱가포르",
      "summary": "싱가포르의 유명한 휴양지"
    },
    {
      "name": "싱가포르 식물원",
      "nameEn": "Singapore Botanic Gardens",
      "wiki": "싱가포르 식물원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Symphony_Lake%2C_Singapore_Botanic_Gardens_-_20041025.jpg/500px-Symphony_Lake%2C_Singapore_Botanic_Gardens_-_20041025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.3151,
        "lng": 103.8162
      },
      "city": "싱가포르",
      "summary": "싱가포르 식물원은 싱가포르의 오차드로드 쇼핑 지구 가장자리에 위치한 열대정원이다."
    },
    {
      "name": "차이나타운",
      "nameEn": "Chinatown, Singapore",
      "wiki": "차이나타운 (싱가포르)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Aerial_perspective_of_Singapore%27s_Chinatown.jpg/500px-Aerial_perspective_of_Singapore%27s_Chinatown.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.28361,
        "lng": 103.84417
      },
      "city": "싱가포르",
      "summary": "싱가포르의 이웃, 아우트람의 하위 구역"
    },
    {
      "name": "래플스 호텔",
      "nameEn": "Raffles Hotel",
      "wiki": "래플스 호텔",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Wikimania_Singapore_2023_118.jpg/500px-Wikimania_Singapore_2023_118.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.29489,
        "lng": 103.85448
      },
      "city": "싱가포르",
      "summary": "래플스 호텔은 싱가포르 다운타운 코어 지역에 위치한 고급 호텔이다."
    },
    {
      "name": "클라크키",
      "nameEn": "Clarke Quay",
      "wiki": "클라크키",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/1_clarke_quay_singapore_night_2014.jpg/500px-1_clarke_quay_singapore_night_2014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 1.29002,
        "lng": 103.84609
      },
      "city": "싱가포르",
      "summary": "클라크키는 싱가포르의 역사적 부두 지역으로, 싱가포르 리버 계획 지구의 일부이다."
    }
  ],
  "malaysia": [
    {
      "name": "페트로나스 트윈 타워",
      "nameEn": "Petronas Towers",
      "wiki": "페트로나스 트윈 타워",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Petronas_Towers_Logo.svg/500px-Petronas_Towers_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 3.1578,
        "lng": 101.7117
      },
      "city": "쿠알라룸푸르",
      "summary": "말레이시아 수도인 쿠알라룸푸르의 마천루"
    },
    {
      "name": "바투 동굴",
      "nameEn": "Batu Caves",
      "wiki": "바투 동굴",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Batu_Caves_stairs_2022-05.jpg/500px-Batu_Caves_stairs_2022-05.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 3.2374,
        "lng": 101.6839
      },
      "city": "쿠알라룸푸르",
      "summary": "바투 동굴은 말레이시아 슬랑오르주 곰박에 있는 언덕 동굴과 힌두교 사원이다."
    },
    {
      "name": "므르데카 광장",
      "nameEn": "Independence Square (Kuala Lumpur)",
      "wiki": "므르데카 광장 (쿠알라룸푸르)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Dataran_Merdeka_2.jpg/500px-Dataran_Merdeka_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 3.14775,
        "lng": 101.6935
      },
      "city": "쿠알라룸푸르",
      "summary": "므르데카 광장은 말레이시아 쿠알라룸푸르에 있는 광장이다."
    },
    {
      "name": "쿠알라룸푸르 타워",
      "nameEn": "Kuala Lumpur Tower",
      "wiki": "쿠알라룸푸르 타워",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuala_Lumpur_Tower_20250822_%281%29.jpg/500px-Kuala_Lumpur_Tower_20250822_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 3.15283,
        "lng": 101.70375
      },
      "city": "쿠알라룸푸르",
      "summary": "쿠알라룸푸르 타워, 통칭 KL 타워는 말레이시아 쿠알라룸푸르에 있는 6층, 421-미터-tall 높이의 방송탑이다."
    },
    {
      "name": "조지타운",
      "nameEn": "George Town, Penang",
      "wiki": "조지타운 (페낭주)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Skyline_of_George_Town%2C_Penang_at_night_Nov2024-29-17.jpg/500px-Skyline_of_George_Town%2C_Penang_at_night_Nov2024-29-17.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 5.41444,
        "lng": 100.32917
      },
      "city": "펜앙",
      "summary": "말레이시아의 도시, 풀라우피낭주의 주도"
    },
    {
      "name": "믈라카",
      "nameEn": "Malacca City",
      "wiki": "믈라카",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Melaka_View.jpg/500px-Melaka_View.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 2.19444,
        "lng": 102.24861
      },
      "city": "",
      "summary": "믈라카 또는 말라카는 말레이시아 믈라카주의 주도로, 말레이 반도 서해안 남부에 위치해, 동서 해양 교통의 요충 믈라카 해협…"
    },
    {
      "name": "랑카위",
      "nameEn": "Langkawi",
      "wiki": "랑카위",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Eagle_square_at_Kuah_Langkawi.jpg/500px-Eagle_square_at_Kuah_Langkawi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 6.35,
        "lng": 99.8
      },
      "city": "",
      "summary": "랑카위는 안다만해에 위치한 군도로, 말레이시아 본토의 북서쪽에서 약 30 km 떨어진 곳에 위치한다."
    },
    {
      "name": "키나발루산",
      "nameEn": "Mount Kinabalu",
      "wiki": "키나발루산",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg/500px-Kinabalu_Sabah_Borneo_Kampong_Kundasang_panorama_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": 6.075,
        "lng": 116.55861
      },
      "city": "",
      "summary": "키나발루산은 보르네오섬에서 가장 높은 산이다."
    }
  ],
  "indonesia": [
    {
      "name": "보로부두르",
      "nameEn": "Borobudur",
      "wiki": "보로부두르",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Pradaksina.jpg/500px-Pradaksina.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -7.608,
        "lng": 110.204
      },
      "city": "",
      "summary": "보로부두르는 인도네시아 자와섬 중심에 위치한 불교 사찰이다."
    },
    {
      "name": "프람바난",
      "nameEn": "Prambanan",
      "wiki": "프람바난",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Yogyakarta_Indonesia_Prambanan-temple-complex-02.jpg/500px-Yogyakarta_Indonesia_Prambanan-temple-complex-02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -7.75222,
        "lng": 110.49167
      },
      "city": "",
      "summary": "프람바난 사원은 인도네시아 자와섬 중부의 자와틍아주에 위치한 힌두교 사원 중 최대 규모인 사원이다."
    },
    {
      "name": "타나롯",
      "nameEn": "Tanah Lot",
      "wiki": "타나롯",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/500px-TanahLot_2014.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -8.62107,
        "lng": 115.08716
      },
      "city": "발리",
      "summary": "인도네시아 발리 앞바다의 바위"
    },
    {
      "name": "울루와뚜 사원",
      "nameEn": "Uluwatu Temple",
      "wiki": "en:Uluwatu Temple",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Pura_Luhur_Uluwatu_2017-08-17_%2834%29.jpg/500px-Pura_Luhur_Uluwatu_2017-08-17_%2834%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -8.82889,
        "lng": 115.08528
      },
      "city": "발리",
      "summary": ""
    },
    {
      "name": "우붓",
      "nameEn": "Ubud",
      "wiki": "우붓",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Ubud_%2849818456887%29.jpg/500px-Ubud_%2849818456887%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -8.507,
        "lng": 115.262
      },
      "city": "발리",
      "summary": ""
    },
    {
      "name": "브로모산",
      "nameEn": "Mount Bromo",
      "wiki": "브로모산",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo-Semeru-Batok-Widodaren.jpg/500px-Bromo-Semeru-Batok-Widodaren.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -7.94167,
        "lng": 112.95
      },
      "city": "",
      "summary": "브로모 화산은 인도네시아 자와섬 동부에 있는 방추형 활화산이다."
    },
    {
      "name": "코모도 국립공원",
      "nameEn": "Komodo National Park",
      "wiki": "코모도 국립공원",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Komodo_dragon_at_Komodo_National_Park.jpg/500px-Komodo_dragon_at_Komodo_National_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -8.54333,
        "lng": 119.48944
      },
      "city": "",
      "summary": "코모도 국립공원은 인도네시아 소순다 열도의 국립공원이다."
    },
    {
      "name": "모나스",
      "nameEn": "National Monument (Indonesia)",
      "wiki": "모나스",
      "image": "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a2/Jakarta_Indonesia_National-Monument-02.jpg/500px-Jakarta_Indonesia_National-Monument-02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
      "location": {
        "lat": -6.17539,
        "lng": 106.82714
      },
      "city": "자카르타",
      "summary": "국립기념물 또는 모나스는 인도네시아 자카르타 므르데카 광장 중심에 있는 국가 독립 기념탑이다."
    }
  ]
};
