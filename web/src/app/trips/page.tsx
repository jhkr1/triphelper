import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { TripList } from "@/components/trip/TripList";
import { LoginGate } from "@/components/layout/LoginGate";
import { getAllDestinations } from "@/lib/destinations";
import { toPlannerCountry, type PlannerCountry } from "@/lib/trip-model";
import "../trip/planner.css";
import "../board/board.css";

export const metadata: Metadata = {
  title: "내 여행",
  description: "저장한 여행 일정을 다가오는 여행 · 날짜 안 정한 여행 · 지난 여행으로 모아 봐요.",
  alternates: { canonical: "/trips/" },
  // 로그인해야 쓰는 화면이라 검색 결과에 넣지 않는다
  robots: { index: false, follow: true },
};

/** 나라 이름 · 국기에 필요한 정보만 넘긴다 */
const plannerCountries = (): PlannerCountry[] => getAllDestinations().map(toPlannerCountry);

export default function TripsPage() {
  return (
    <>
      <TopBar solid />
      <main className="planner">
        <LoginGate title="로그인하고 내 여행을 모아 보세요" desc="저장한 일정을 한곳에서 보고 이어서 짤 수 있어요.">
          {/* 주소(?id= · ?all 등)를 useSearchParams로 읽어서 정적 빌드에는 Suspense가 필요하다 */}
          <Suspense fallback={null}><TripList countries={plannerCountries()} /></Suspense>
        </LoginGate>
      </main>
      <Footer />
    </>
  );
}
