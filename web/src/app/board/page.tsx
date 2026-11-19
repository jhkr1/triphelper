import type { Metadata } from "next";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { BoardList } from "@/components/board/BoardList";
import { getAllDestinations } from "@/lib/destinations";
import "../trip/planner.css";
import "./board.css";

export const metadata: Metadata = {
  title: "여행 동선 게시판 · 나라별 여행 일정 모음",
  description: "다른 여행자들이 올린 나라별 여행 동선을 지도와 함께 보고, 마음에 드는 일정을 내 여행으로 가져와 고쳐 보세요.",
  alternates: { canonical: "/board/" },
};

export default function BoardPage() {
  const countries = getAllDestinations().map((d) => ({ slug: d.slug, name: d.name, countryCode: d.countryCode }));
  return (
    <>
      <TopBar solid />
      <main className="planner">
        <div className="wrap">
          <BoardList countries={countries} />
        </div>
      </main>
      <Footer />
    </>
  );
}
