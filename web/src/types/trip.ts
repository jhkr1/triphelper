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
}

export interface Trip {
  /** 나라 slug (예: japan) */
  country: string;
  /** 화면에 보일 도시 이름. 비어 있으면 나라 전체 */
  city: string;
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
}

/** 가방 → 묶음 → 준비물 목록 */
export interface Checklist {
  bags: Record<string, Record<string, string[]>>;
  done: string[];
}
