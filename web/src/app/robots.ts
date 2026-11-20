import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// 정적 출력에서도 빌드 시 robots.txt로 만들어진다
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
