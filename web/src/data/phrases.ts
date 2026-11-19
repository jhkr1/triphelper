// 기존 사이트 데이터(js/data)에서 변환함. 이제 이 파일을 직접 수정한다.
import type { Phrase } from "@/types/destination";

export const phraseSets = {
  "korean": [
    {
      "source": "안녕하세요",
      "pronunciation": "안녕하세요",
      "pronunciationEn": "ahn-nyeong-ha-se-yo",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "감사합니다",
      "pronunciation": "감사합니다",
      "pronunciationEn": "gam-sa-ham-ni-da",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "죄송합니다",
      "pronunciation": "죄송합니다",
      "pronunciationEn": "joe-song-ham-ni-da",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "이거 얼마예요?",
      "pronunciation": "이거 얼마예요?",
      "pronunciationEn": "ee-geo eol-ma-ye-yo?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "화장실이 어디예요?",
      "pronunciation": "화장실이 어디예요?",
      "pronunciationEn": "hwa-jang-sil-ee eo-di-ye-yo?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "이것 좀 보여주세요",
      "pronunciation": "이것 좀 보여주세요",
      "pronunciationEn": "ee-geot jom bo-yeo-ju-se-yo",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "체크인 하려고 합니다",
      "pronunciation": "체크인 하려고 합니다",
      "pronunciationEn": "che-keu-in ha-ryeo-go ham-ni-da",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "체크아웃은 몇 시인가요?",
      "pronunciation": "체크아웃은 몇 시인가요?",
      "pronunciationEn": "che-keu-a-ut-eun myeot si-in-ga-yo?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "japanese": [
    {
      "source": "こんにちは",
      "pronunciation": "곤니치와",
      "pronunciationEn": "kon-ni-chi-wa",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "ありがとうございます",
      "pronunciation": "아리가또 고자이마스",
      "pronunciationEn": "a-ri-ga-to go-za-i-ma-su",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "すみません",
      "pronunciation": "스미마센",
      "pronunciationEn": "su-mi-ma-sen",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "これはいくらですか?",
      "pronunciation": "코레와 이쿠라 데스카?",
      "pronunciationEn": "ko-re-wa i-ku-ra des-ka?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "トイレはどこですか?",
      "pronunciation": "토이레와 도코 데스카?",
      "pronunciationEn": "to-i-re-wa do-ko des-ka?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "これをみせてください",
      "pronunciation": "코레오 미세테 쿠다사이",
      "pronunciationEn": "ko-re-o mi-se-te ku-da-sa-i",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "チェックインをお願いします",
      "pronunciation": "체크인오 오네가이시마스",
      "pronunciationEn": "chek-ku-in o o-ne-ga-i-shi-ma-su",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "チェックアウトは何時ですか?",
      "pronunciation": "체크아우토와 난지데스카?",
      "pronunciationEn": "chek-ku-au-to wa nan-ji des-ka?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "french": [
    {
      "source": "Bonjour",
      "pronunciation": "봉주르",
      "pronunciationEn": "bon-ZHOOR",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Merci",
      "pronunciation": "메르시",
      "pronunciationEn": "mer-SEE",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Désolé",
      "pronunciation": "데졸레",
      "pronunciationEn": "day-zo-LAY",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "C'est combien ?",
      "pronunciation": "쎄 꽁비엉?",
      "pronunciationEn": "say kom-BYAN?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Où sont les toilettes ?",
      "pronunciation": "우 송 레 뚜알레?",
      "pronunciationEn": "oo song lay twa-LET?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Je peux voir ça ?",
      "pronunciation": "주 푸 브와 사?",
      "pronunciationEn": "zhuh puh vwahr sah?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Je voudrais faire l'enregistrement",
      "pronunciation": "주 부드레 페르 랑레지스트르망",
      "pronunciationEn": "zhuh voo-DRAY fair lahn-reh-zhis-truh-MAHN",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "À quelle heure est le check-out ?",
      "pronunciation": "아 켈 뢰르 에 르 체크아웃?",
      "pronunciationEn": "ah kel uhr ay luh chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "spanish": [
    {
      "source": "Hola",
      "pronunciation": "올라",
      "pronunciationEn": "OH-la",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Gracias",
      "pronunciation": "그라시아스",
      "pronunciationEn": "GRAH-syahs",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Lo siento",
      "pronunciation": "로 시엔토",
      "pronunciationEn": "lo SYEN-to",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "¿Cuánto cuesta esto?",
      "pronunciation": "콴또 쿠에스타 에스토?",
      "pronunciationEn": "KWAN-to KWES-ta ES-to?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "¿Dónde está el baño?",
      "pronunciation": "돈데 에스타 엘 바뇨?",
      "pronunciationEn": "DON-day es-TAH el BAH-nyo?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "¿Puedo ver esto?",
      "pronunciation": "푸에도 베르 에스토?",
      "pronunciationEn": "PWEH-do ver ES-to?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Quisiera hacer el check-in",
      "pronunciation": "키시에라 아세르 엘 체크인",
      "pronunciationEn": "kee-SYEH-rah ah-SER el chek-in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "¿A qué hora es el check-out?",
      "pronunciation": "아 케 오라 에스 엘 체크아웃?",
      "pronunciationEn": "ah keh OH-rah es el chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "english": [
    {
      "source": "Hello",
      "pronunciation": "헬로우",
      "pronunciationEn": "heh-LOH",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Thank you",
      "pronunciation": "땡큐",
      "pronunciationEn": "THANK yoo",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "I'm sorry",
      "pronunciation": "암 쏘리",
      "pronunciationEn": "eye'm SOR-ee",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "How much is this?",
      "pronunciation": "하우 머치 이즈 디스?",
      "pronunciationEn": "how MUCH iz THIS?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Where is the restroom?",
      "pronunciation": "웨어 이즈 더 레스트룸?",
      "pronunciationEn": "where iz the REST-room?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Can I see this?",
      "pronunciation": "캔 아이 시 디스?",
      "pronunciationEn": "kan eye see THIS?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "I'd like to check in",
      "pronunciation": "아이드 라이크 투 체크 인",
      "pronunciationEn": "eyed like too chek in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "What time is checkout?",
      "pronunciation": "왓 타임 이즈 체크아웃?",
      "pronunciationEn": "wot time iz CHEK-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "italian": [
    {
      "source": "Buongiorno",
      "pronunciation": "본조르노",
      "pronunciationEn": "bwon-JOR-no",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Grazie",
      "pronunciation": "그라찌에",
      "pronunciationEn": "GRAH-tsyeh",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Mi dispiace",
      "pronunciation": "미 디스피아체",
      "pronunciationEn": "mee dee-SPYAH-cheh",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Quanto costa questo?",
      "pronunciation": "콴또 코스타 쿠에스토?",
      "pronunciationEn": "KWAN-to KOS-ta KWES-to?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Dov'è il bagno?",
      "pronunciation": "도베 일 바뇨?",
      "pronunciationEn": "do-VAY eel BAH-nyo?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Posso vedere questo?",
      "pronunciation": "포소 베데레 쿠에스토?",
      "pronunciationEn": "POS-so veh-DEH-reh KWES-to?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Vorrei fare il check-in",
      "pronunciation": "보레이 파레 일 체크인",
      "pronunciationEn": "vor-RAY FAH-reh eel chek-in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "A che ora è il check-out?",
      "pronunciation": "아 케 오라 에 일 체크아웃?",
      "pronunciationEn": "ah keh OH-rah eh eel chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "turkish": [
    {
      "source": "Merhaba",
      "pronunciation": "메르하바",
      "pronunciationEn": "mer-HA-ba",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Teşekkür ederim",
      "pronunciation": "테셰쾨르 에데림",
      "pronunciationEn": "teh-shek-KUR eh-deh-rim",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Özür dilerim",
      "pronunciation": "오쥬르 딜레림",
      "pronunciationEn": "oh-ZUR dee-leh-rim",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Bu ne kadar?",
      "pronunciation": "부 네 카다르?",
      "pronunciationEn": "boo neh ka-DAR?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Tuvalet nerede?",
      "pronunciation": "투발렛 네레데?",
      "pronunciationEn": "too-va-LET neh-reh-DEH?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Bunu görebilir miyim?",
      "pronunciation": "부누 괴레빌리르 미임?",
      "pronunciationEn": "boo-noo guh-reh-bee-LEER mee-YEEM?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Giriş yapmak istiyorum",
      "pronunciation": "기리시 얍막 이스티요룸",
      "pronunciationEn": "gee-REESH yap-MAK is-tee-YO-room",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Çıkış saati kaç?",
      "pronunciation": "치키시 사아티 카치?",
      "pronunciationEn": "chuh-KUHSH sah-AH-tee kach?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "german": [
    {
      "source": "Hallo",
      "pronunciation": "할로",
      "pronunciationEn": "HAH-lo",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Danke schön",
      "pronunciation": "당크 쇤",
      "pronunciationEn": "DAHN-keh shurn",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Es tut mir leid",
      "pronunciation": "에스 투트 미어 라잇",
      "pronunciationEn": "es toot meer lite",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Wie viel kostet das?",
      "pronunciation": "비 필 코스트 다스?",
      "pronunciationEn": "vee feel KOS-tet dahs?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Wo ist die Toilette?",
      "pronunciation": "보 이스트 디 토일레테?",
      "pronunciationEn": "vo ist dee to-ee-LET-teh?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Kann ich das sehen?",
      "pronunciation": "칸 이히 다스 제엔?",
      "pronunciationEn": "kan eekh dahs ZAY-en?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Ich möchte einchecken",
      "pronunciation": "이히 뫼흐테 아인체켄",
      "pronunciationEn": "eekh MURKH-teh AYN-chek-en",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Wann ist der Check-out?",
      "pronunciation": "반 이스트 데르 체크아웃?",
      "pronunciationEn": "van ist der chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "greek": [
    {
      "source": "Γεια σας",
      "pronunciation": "야 사스",
      "pronunciationEn": "YAH sahs",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Ευχαριστώ",
      "pronunciation": "에프하리스또",
      "pronunciationEn": "ef-ha-ree-STO",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Συγγνώμη",
      "pronunciation": "시그놈미",
      "pronunciationEn": "see-GHNO-mee",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Πόσο κοστίζει αυτό?",
      "pronunciation": "뽀소 코스티지 아프토?",
      "pronunciationEn": "PO-so kos-TEE-zee af-TO?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Πού είναι η τουαλέτα;",
      "pronunciation": "푸 이네 이 투알레타?",
      "pronunciationEn": "poo EE-neh ee too-ah-LEH-ta?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Μπορώ να το δω αυτό?",
      "pronunciation": "보로 나 토 도 아프토?",
      "pronunciationEn": "bo-RO na to doh af-TO?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Θα ήθελα να κάνω check-in",
      "pronunciation": "타 이텔라 나 카노 체크인",
      "pronunciationEn": "tha EE-the-la na KA-no chek-in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Τι ώρα είναι το check-out?",
      "pronunciation": "티 오라 이네 토 체크아웃?",
      "pronunciationEn": "tee O-ra EE-neh to chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "chinese": [
    {
      "source": "你好",
      "pronunciation": "니하오",
      "pronunciationEn": "nee-HOW",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "谢谢",
      "pronunciation": "시에시에",
      "pronunciationEn": "shyeh-shyeh",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "对不起",
      "pronunciation": "뚜이부치",
      "pronunciationEn": "dway-boo-chee",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "这个多少钱?",
      "pronunciation": "쩌거 뚜어샤오 치엔?",
      "pronunciationEn": "zhuh-geh dwoh shao chee-en?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "洗手间在哪里?",
      "pronunciation": "시쇼우지엔 짜이 날리?",
      "pronunciationEn": "shee-show jee-en dzai nah-lee?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "可以看看这个吗?",
      "pronunciation": "커이 칸칸 쩌거 마?",
      "pronunciationEn": "keh-yee kan-kan zhuh-geh mah?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "我要办理入住",
      "pronunciation": "워 야오 반리 루주",
      "pronunciationEn": "woh yow ban-lee roo-joo",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "退房时间是几点?",
      "pronunciation": "뚜이팡 스지엔 스 지디엔?",
      "pronunciationEn": "tway-fang shi-jee-en shi jee-dee-en?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "hungarian": [
    {
      "source": "Jó napot",
      "pronunciation": "요 나포트",
      "pronunciationEn": "yo NAH-pot",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Köszönöm",
      "pronunciation": "커쇠넴",
      "pronunciationEn": "KUR-sur-nurm",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Elnézést",
      "pronunciation": "엘네제스트",
      "pronunciationEn": "el-NAY-zaysht",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Mennyibe kerül ez?",
      "pronunciation": "멘니베 케뤌 에즈?",
      "pronunciationEn": "MEN-nyi-beh KEH-rul ez?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Hol van a mosdó?",
      "pronunciation": "홀 반 아 모스도?",
      "pronunciationEn": "hol vahn ah MOSH-doh?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Megnézhetem ezt?",
      "pronunciation": "메그네즈헤템 에스트?",
      "pronunciationEn": "meg-NAYZ-heh-tem ezt?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Szeretnék bejelentkezni",
      "pronunciation": "세레트네크 베옐렌트케즈니",
      "pronunciationEn": "seh-ret-NAYK beh-yel-ent-kez-nee",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Mikor a kijelentkezés?",
      "pronunciation": "미코르 아 키옐렌트케제스?",
      "pronunciationEn": "MEE-kor ah kee-yel-ent-ke-ZAYSH?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "dutch": [
    {
      "source": "Hallo",
      "pronunciation": "할로",
      "pronunciationEn": "HAH-lo",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Dank u wel",
      "pronunciation": "당크 우 벨",
      "pronunciationEn": "dahnk oo VEL",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Sorry",
      "pronunciation": "소리",
      "pronunciationEn": "SOR-ee",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Hoeveel kost dit?",
      "pronunciation": "후벨 코스트 딧?",
      "pronunciationEn": "HOO-vel kost dit?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Waar is het toilet?",
      "pronunciation": "바르 이스 헤트 토일레트?",
      "pronunciationEn": "vahr is het twa-LET?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Kan ik dit zien?",
      "pronunciation": "칸 이크 딧 진?",
      "pronunciationEn": "kan ik dit zeen?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Ik wil inchecken",
      "pronunciation": "이크 빌 인체켄",
      "pronunciationEn": "ik vil IN-chek-en",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Hoe laat is de check-out?",
      "pronunciation": "후 라트 이스 더 체크아웃?",
      "pronunciationEn": "hoo laht is duh chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "portuguese": [
    {
      "source": "Olá",
      "pronunciation": "올라",
      "pronunciationEn": "oh-LAH",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Obrigado",
      "pronunciation": "오브리가두",
      "pronunciationEn": "oh-bree-GAH-doo",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Desculpe",
      "pronunciation": "데스쿨페",
      "pronunciationEn": "desh-KOOL-peh",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Quanto custa isso?",
      "pronunciation": "콴뚜 쿠스타 이소?",
      "pronunciationEn": "KWAN-too KOOS-ta EE-so?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Onde fica o banheiro?",
      "pronunciation": "온데 피카 우 반예이루?",
      "pronunciationEn": "ON-deh FEE-ka oo ban-YAY-roo?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Posso ver isso?",
      "pronunciation": "포소 베르 이소?",
      "pronunciationEn": "POS-so ver EE-so?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Gostaria de fazer check-in",
      "pronunciation": "고스타리아 데 파제르 체크인",
      "pronunciationEn": "gos-ta-REE-ah deh fah-ZER chek-in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Que horas é o check-out?",
      "pronunciation": "케 오라스 에 우 체크아웃?",
      "pronunciationEn": "keh OH-ras eh oo chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "filipino": [
    {
      "source": "Kumusta",
      "pronunciation": "쿠무스타",
      "pronunciationEn": "koo-moos-TAH",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Salamat",
      "pronunciation": "살라맛",
      "pronunciationEn": "sah-LAH-mat",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Paumanhin",
      "pronunciation": "파우만힌",
      "pronunciationEn": "pah-oo-MAHN-heen",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Magkano ito?",
      "pronunciation": "막카노 이토?",
      "pronunciationEn": "mahg-KAH-no EE-to?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Nasaan ang banyo?",
      "pronunciation": "나사안 앙 반요?",
      "pronunciationEn": "nah-SAH-an ahng BAHN-yo?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Pwede ko ba makita ito?",
      "pronunciation": "푸에데 코 바 마키타 이토?",
      "pronunciationEn": "PWEH-deh ko bah mah-KEE-ta EE-to?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Gusto ko mag-check in",
      "pronunciation": "구스토 코 막 체크 인",
      "pronunciationEn": "GOOS-to ko mahg chek in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Anong oras ang check-out?",
      "pronunciation": "아농 오라스 앙 체크아웃?",
      "pronunciationEn": "ah-NONG O-ras ahng chek-owt?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "vietnamese": [
    {
      "source": "Xin chào",
      "pronunciation": "신 짜오",
      "pronunciationEn": "seen chow",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Cảm ơn",
      "pronunciation": "깜 언",
      "pronunciationEn": "kahm uhn",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Xin lỗi",
      "pronunciation": "신 로이",
      "pronunciationEn": "seen loy",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Cái này giá bao nhiêu?",
      "pronunciation": "까이 너이 자 바오 니우?",
      "pronunciationEn": "kai nai zah bow nyew?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Nhà vệ sinh ở đâu?",
      "pronunciation": "냐 베 신 어 다우?",
      "pronunciationEn": "nyah veh seen uh dow?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Tôi có thể xem cái này không?",
      "pronunciation": "또이 코 테 셈 까이 너이 콩?",
      "pronunciationEn": "toy ko teh sem kai nai khong?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Tôi muốn làm thủ tục nhận phòng",
      "pronunciation": "또이 무온 람 투 투크 냔 폭",
      "pronunciationEn": "toy moo-on lam too tuhk nyan fong",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Giờ trả phòng là mấy giờ?",
      "pronunciation": "저 트라 폭 라 머이 저?",
      "pronunciationEn": "zoh trah fong lah mai zoh?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "thai": [
    {
      "source": "สวัสดี",
      "pronunciation": "사왓디",
      "pronunciationEn": "sah-wat-dee",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "ขอบคุณ",
      "pronunciation": "콥 쿤",
      "pronunciationEn": "kop koon",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "ขอโทษ",
      "pronunciation": "코 토트",
      "pronunciationEn": "koh toht",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "อันนี้เท่าไหร่?",
      "pronunciation": "안 니 타오라이?",
      "pronunciationEn": "ahn nee tao-rai?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "ห้องน้ำอยู่ที่ไหน?",
      "pronunciation": "홍 남 유 티나이?",
      "pronunciationEn": "hong nam yoo tee-nai?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "ให้ดูอันนี้ได้ไหม?",
      "pronunciation": "하이 두 안 니 다이마이?",
      "pronunciationEn": "hai doo ahn nee dai-mai?",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "ต้องการเช็คอิน",
      "pronunciation": "동간 쳌 인",
      "pronunciationEn": "dong-gan chek in",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "เช็คเอาท์กี่โมง?",
      "pronunciation": "쳌 아웃 기 몽?",
      "pronunciationEn": "chek owt gee mong?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ],
  "russian": [
    {
      "source": "Здравствуйте",
      "pronunciation": "즈드라스트부이쩨",
      "pronunciationEn": "ZDRAST-vooy-tye",
      "meaning": "안녕하세요.",
      "meaningEn": "Hello."
    },
    {
      "source": "Спасибо",
      "pronunciation": "스빠씨바",
      "pronunciationEn": "spa-SEE-ba",
      "meaning": "감사합니다.",
      "meaningEn": "Thank you."
    },
    {
      "source": "Извините",
      "pronunciation": "이즈비니쩨",
      "pronunciationEn": "iz-vee-NEE-tye",
      "meaning": "죄송합니다.",
      "meaningEn": "I'm sorry."
    },
    {
      "source": "Сколько это стоит?",
      "pronunciation": "스꼴까 에따 스또잇?",
      "pronunciationEn": "SKOL-ka E-ta STO-it?",
      "meaning": "이거 얼마예요?",
      "meaningEn": "How much is this?"
    },
    {
      "source": "Где туалет?",
      "pronunciation": "그제 뚜알롓?",
      "pronunciationEn": "gdye too-a-LYET?",
      "meaning": "화장실이 어디예요?",
      "meaningEn": "Where is the restroom?"
    },
    {
      "source": "Покажите это, пожалуйста",
      "pronunciation": "빠까쥐쩨 에따, 빠좔스따",
      "pronunciationEn": "pa-ka-ZHEE-tye E-ta, pa-ZHAL-sta",
      "meaning": "이것 좀 보여주세요.",
      "meaningEn": "Can I see this?"
    },
    {
      "source": "Я хочу заселиться",
      "pronunciation": "야 하추 자셀리짜",
      "pronunciationEn": "ya kha-CHOO za-se-LEET-sa",
      "meaning": "체크인 하려고 합니다.",
      "meaningEn": "I'd like to check in."
    },
    {
      "source": "Во сколько выезд?",
      "pronunciation": "바 스꼴까 븨예스트?",
      "pronunciationEn": "va SKOL-ka VY-yezd?",
      "meaning": "체크아웃은 몇 시인가요?",
      "meaningEn": "What time is checkout?"
    }
  ]
} satisfies Record<string, Phrase[]>;

export type PhraseSetKey = keyof typeof phraseSets;

