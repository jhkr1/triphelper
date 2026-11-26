"use client"; // 오류 화면은 클라이언트 컴포넌트여야 한다

import { useEffect } from "react";
import { withBase } from "@/lib/site";

/**
 * 루트 레이아웃까지 깨졌을 때의 마지막 화면. 레이아웃·전역 CSS가 없으므로 html·body와 스타일을 직접 넣는다.
 * (metadata를 못 쓰므로 제목은 <title>로)
 */
export default function GlobalError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  const btn: React.CSSProperties = {
    display: "inline-block", border: "1px solid #e5e7eb", background: "#fff", color: "#111827", padding: "12px 22px",
    borderRadius: 99, font: "inherit", fontWeight: 700, textDecoration: "none", cursor: "pointer",
  };
  return (
    <html lang="ko">
      <body style={{ margin: 0, background: "#fff", color: "#111827", fontFamily: '"Pretendard Variable",Pretendard,-apple-system,"Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",system-ui,sans-serif' }}>
        <title>잠시 문제가 생겼어요 | TripHelper</title>
        <main role="alert" style={{ minHeight: "100svh", display: "grid", placeContent: "center", textAlign: "center", gap: 14, padding: "48px 16px" }}>
          <h1 style={{ margin: 0, fontSize: "1.6rem" }}>잠시 문제가 생겼어요</h1>
          <p style={{ margin: 0, color: "#4b5563" }}>다시 시도해도 안 되면 잠시 뒤 새로 고침해 주세요.</p>
          <p style={{ margin: "8px 0 0", display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <button type="button" style={{ ...btn, background: "#2563eb", borderColor: "#2563eb", color: "#fff" }} onClick={() => retry()}>다시 시도</button>
            <a style={btn} href={withBase("/")}>홈으로 가기</a>
          </p>
        </main>
      </body>
    </html>
  );
}
