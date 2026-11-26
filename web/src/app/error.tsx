"use client"; // 오류 화면은 클라이언트 컴포넌트여야 한다

import { useEffect } from "react";
import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";

/**
 * 페이지를 그리다 예상하지 못한 오류가 났을 때 보이는 화면 (빈 화면 대신).
 * Next 16: 다시 그려 보는 함수 이름은 retry (예전 reset 아님). 루트 레이아웃 오류는 global-error.tsx.
 */
export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    // 오류 수집 도구를 붙이면 여기서 보낸다. 지금은 개발자 도구 콘솔에만 남긴다.
    console.error(error);
  }, [error]);

  return (
    <>
      <TopBar solid />
      <main className="not-found" role="alert">
        <h1>화면을 보여 주지 못했어요</h1>
        <p>잠시 문제가 생겼어요. 다시 시도해도 안 되면 새로 고침하거나 홈으로 가 주세요.</p>
        <p className="not-found__btns">
          <button type="button" className="back" onClick={() => retry()}>다시 시도</button>
          <Link className="back" href="/">홈으로 가기</Link>
        </p>
        <p className="not-found__note">로그인해서 저장한 일정은 그대로 있어요.</p>
      </main>
    </>
  );
}
