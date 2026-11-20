import path from "node:path";
import type { NextConfig } from "next";

// GitHub Pages: 저장소 이름이 주소에 붙는다 (예: BASE_PATH=/triphelper). 로컬 개발은 비워 둔다.
const basePath = process.env.BASE_PATH ?? "";
const siteOrigin = process.env.SITE_ORIGIN ?? "https://jhkr1.github.io";

const nextConfig: NextConfig = {
  basePath,
  // 브라우저 코드에서도 쓰도록 (lib/site.ts)
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_ORIGIN: siteOrigin },
  // 서버 기능 없이 정적 파일(out/)로 배포한다. 정적 출력에서는 Cache Components('use cache')를 쓸 수 없어 끈다.
  output: "export",
  trailingSlash: true,
  // 상위 폴더(기존 사이트)의 package-lock.json 때문에 작업 루트를 잘못 잡지 않도록 고정
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  // Windows 폴더를 Docker에 연결해 개발할 때는 파일 변경 알림이 오지 않아 폴링으로 감지한다.
  // scripts/dev.sh가 NEXT_POLL=1로 켤 때만 (배포 빌드에는 영향 없음)
  ...(process.env.NEXT_POLL === "1" ? { watchOptions: { pollIntervalMs: 1000 } } : {}),
};

export default nextConfig;
