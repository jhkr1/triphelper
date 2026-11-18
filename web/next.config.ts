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
};

export default nextConfig;
