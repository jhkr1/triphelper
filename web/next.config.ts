import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
