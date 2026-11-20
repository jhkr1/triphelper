import type { Metadata } from "next";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { TripPlanner } from "@/components/trip/TripPlanner";
import { LoginGate } from "@/components/layout/LoginGate";
import { getAllDestinations } from "@/lib/destinations";
import { toPlannerCountry, type PlannerCountry } from "@/lib/trip-model";
import "maplibre-gl/dist/maplibre-gl.css";
import "./planner.css";
import "../board/board.css";

export const metadata: Metadata = {
  title: "내 여행 플래너 · 일정표, 지도, 체크리스트",
  description: "여행지와 날짜를 정하고 날짜별 일정을 지도에 담아 보세요. 근처 추천 여행지, 날씨 예보, 환율, 가방별 체크리스트, 링크 공유까지.",
  alternates: { canonical: "/trip/" },
  // 로그인해야 쓰는 화면이라 검색 결과에 넣지 않는다
  robots: { index: false, follow: true },
};

/** 플래너에 필요한 나라 정보만 골라서 넘긴다 (전체 나라 데이터를 브라우저로 보내지 않기 위해) */
const plannerCountries = (): PlannerCountry[] => getAllDestinations().map(toPlannerCountry);

export default function TripPage() {
  return (
    <>
      <TopBar solid />
      <main className="planner">
        <LoginGate title="로그인하고 내 여행을 짜 보세요" desc="일정은 계정에 저장돼서 어느 기기에서든 이어서 짤 수 있어요." allowSharedLink>
          <TripPlanner countries={plannerCountries()} />
        </LoginGate>
      </main>
      <Footer />
    </>
  );
}
