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
  }));

/** 검색어로 목적지 찾기 (띄어쓰기·대소문자 무시, 키워드 부분 일치) */
export function findDestination<T extends Pick<DestinationSummary, "name" | "nameEn" | "keywords">>(list: T[], query: string): T | undefined {
  const flat = (s: string) => s.toLowerCase().replace(/\s+/g, "");
  const q = flat(query);
  if (!q) return undefined;
  return list.find(
    (d) => d.keywords.some((k) => flat(k).includes(q) || q.includes(flat(k))) || flat(d.name).includes(q) || flat(d.nameEn).includes(q),
  );
}
