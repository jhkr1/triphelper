import type { LatLng } from "@/types/destination";

/** 장소 분류 (지도 검색 결과에서 자동으로 붙음) */
export type PlaceCategory = "식당" | "쇼핑" | "숙소" | "공항" | "교통" | "명소" | "";

export interface Place {
  id: string;
  /** HH:mm */
  time: string;
  name: string;
  category: PlaceCategory;
  /** 머무는 시간 (예: "1시간 30분") */
  duration?: string;
  memo?: string;
  /** 위치를 못 찾았으면 비어 있음 → "지도에서 지정" */
  location?: LatLng;
  /** 사진용 위키백과 문서 ("도쿄 타워" 또는 "ja:道頓堀") */
  wiki?: string;
  /** 위키백과 문서 없이 받은 사진 주소 (근처 추천에서 담은 경우) */
  image?: string;
}

export interface TripDay {
  places: Place[];
  /** 이날 밤 묵는 숙소 (마지막 날에는 없음. 예전에 저장된 일정에도 없음) */
  stay?: Place;
}

export interface Trip {
  /** 나라 slug (예: japan) */
  country: string;
  /** 화면에 보일 도시 이름. 비어 있으면 나라 전체 */
  city: string;
  /** 사용자가 붙인 여행 이름. 없으면 "도시(나라) 여행" (tripName) */
  title?: string;
  /** 도시 중심 (장소 검색 범위·지도 시작 위치) */
  center: LatLng;
  /** YYYY-MM-DD */
  start: string;
  end: string;
  /**
   * 아직 날짜를 정하지 않은 일정. 이때 start/end는 기간(며칠)만 나타내는 임시 값이라 화면에 날짜를 보여 주지 않는다.
   * 예전에 저장된 일정에는 없다 (= 날짜가 정해진 일정).
   */
  datesUnset?: true;
  days: TripDay[];
  /** 여행지 바구니: 담아 두고 아직 날짜에 배치하지 않은 장소 (예전에 저장된 일정에는 없음) */
  basket?: Place[];
  checklist: Checklist;
  /**
   * 로그인해서 DB에 저장된 일정이면 그 정보 (브라우저에만 있는 일정에는 없음).
   * DB에 저장하는 내용(data)에는 넣지 않는다.
   */
  cloud?: TripCloud;
}

export interface TripCloud {
  /** DB의 일정 id */
  id: string;
  /** 이 기기에서 로그인한 계정 (다른 계정으로 로그인하면 이 일정과 연결을 끊는다) */
  userId: string;
  /** 마지막으로 DB에 저장된 시각 (다른 기기·멤버가 고쳤는지 비교) */
  savedAt: string;
  /** 이 일정에서 나의 권한. 없으면 주인 (예전에 저장된 일정) */
  role?: TripRole;
  /** 다른 사람과 함께 짜는 일정인지 (멤버가 한 명 이상) */
  shared?: boolean;
}

/** owner: 주인 · editor: 함께 편집 · viewer: 보기만 */
export type TripRole = "owner" | "editor" | "viewer";

/** 가방 → 묶음 → 준비물 목록 */
export interface Checklist {
  bags: Record<string, Record<string, string[]>>;
  done: string[];
}
