import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// 단위 테스트 (데이터를 바꾸는 순수 함수만). 실행: scripts/check.sh 가 함께 돌린다
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: { include: ["src/**/*.test.ts"], environment: "node" },
});
