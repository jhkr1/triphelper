import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar solid />
      <main className="not-found">
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>주소를 다시 확인하거나 지구본에서 여행지를 골라 주세요.</p>
        <p><Link className="back" href="/">홈으로 가기</Link></p>
      </main>
    </>
  );
}
