import type { MetadataRoute } from "next";
import { getAllDestinations } from "@/lib/destinations";
import { SITE_URL } from "@/lib/site";

// 정적 출력에서도 빌드 시 sitemap.xml로 만들어진다
export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
    ...getAllDestinations().map((d) => ({
      url: `${SITE_URL}/destinations/${d.slug}/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
