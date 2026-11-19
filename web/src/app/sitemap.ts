import type { MetadataRoute } from "next";
import { getAllDestinations } from "@/lib/destinations";

// 정적 출력에서도 빌드 시 sitemap.xml로 만들어진다
export const dynamic = "force-static";

const SITE_URL = "https://triphelper.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/board/`, changeFrequency: "daily", priority: 0.7 },
    ...getAllDestinations().map((d) => ({
      url: `${SITE_URL}/destinations/${d.slug}/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
