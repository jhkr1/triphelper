import type { Metadata } from "next";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { BoardList } from "@/components/board/BoardList";
import { LoginGate } from "@/components/layout/LoginGate";
import { getAllDestinations } from "@/lib/destinations";
import "../trip/planner.css";
import "./board.css";

export const metadata: Metadata = {
  title: "여행 동선 게시판 · 나라별 여행 일정 모음",
  description: "다른 여행자들이 올린 나라별 여행 동선을 지도와 함께 보고, 마음에 드는 일정을 내 여행으로 가져와 고쳐 보세요.",
  alternates: { canonical: "/board/" },
  // 로그인해야 보는 화면이라 검색 결과에 넣지 않는다
  robots: { index: false, follow: true },
};

export default function BoardPage() {
  const countries = getAllDestinations().map((d) => ({ slug: d.slug, name: d.name, countryCode: d.countryCode }));
  return (
    <>
      <TopBar solid />
      <main className="planner">
        <div className="wrap">
          <LoginGate title="로그인하고 여행 동선을 둘러보세요" desc="다른 여행자가 올린 나라별 동선을 보고, 마음에 들면 내 일정으로 가져올 수 있어요.">
            <BoardList countries={countries} />
          </LoginGate>
        </div>
      </main>
      <Footer />
    </>
  );
}
