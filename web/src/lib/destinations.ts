import { attractions } from "@/data/attractions";
import { destinations } from "@/data/destinations";
import { phraseSets } from "@/data/phrases";
import type { Attraction, Destination, LatLng, Phrase } from "@/types/destination";

/** 지구본·검색·칩에 필요한 최소 정보 (클라이언트로 전체 데이터를 보내지 않기 위해) */
export interface DestinationSummary {
  slug: string;
  no: number;
  name: string;
  nameEn: string;
  keywords: string[];
  countryCode: string;
  isoNumeric: number | null;
  center: LatLng;
  /** 대륙 (영어, 예: Asia). 메인 화면에서 나라를 대륙별로 묶을 때 쓴다 */
  continent: string;
}

export const getAllDestinations = (): Destination[] => destinations;

export const getDestination = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug);

export const getPhrases = (destination: Destination): Phrase[] =>
  phraseSets[destination.phraseSet as keyof typeof phraseSets] ?? [];

export const getAttractions = (slug: string): Attraction[] => attractions[slug] ?? [];

export const getDestinationSummaries = (): DestinationSummary[] =>
  destinations.map((d, i) => ({
    slug: d.slug,
    no: i + 1,
    name: d.name,
    nameEn: d.nameEn,
    keywords: d.keywords,
    countryCode: d.countryCode,
    isoNumeric: d.isoNumeric,
    center: d.center,
    continent: d.profile.region.split(" · ")[0],
  }));

type Searchable = Pick<DestinationSummary, "name" | "nameEn" | "keywords">;
const flat = (s: string) => s.toLowerCase().replace(/\s+/g, "");
const matches = (d: Searchable, q: string) =>
  d.keywords.some((k) => flat(k).includes(q) || q.includes(flat(k))) || flat(d.name).includes(q) || flat(d.nameEn).includes(q);

/** 검색어로 목적지 찾기 (띄어쓰기·대소문자 무시, 키워드 부분 일치) */
export function findDestination<T extends Searchable>(list: T[], query: string): T | undefined {
  const q = flat(query);
  return q ? list.find((d) => matches(d, q)) : undefined;
}

/** 검색어와 맞는 목적지 전부 (입력하는 동안 후보를 보여 줄 때) */
export function filterDestinations<T extends Searchable>(list: T[], query: string): T[] {
  const q = flat(query);
  return q ? list.filter((d) => matches(d, q)) : [];
}
