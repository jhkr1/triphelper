import type { Metadata } from "next";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { PostView } from "@/components/board/PostView";
import { getAllDestinations } from "@/lib/destinations";
import { toPlannerCountry } from "@/lib/trip-model";
import "maplibre-gl/dist/maplibre-gl.css";
import "../../trip/planner.css";
import "../board.css";

// 글 내용은 브라우저에서 공유 코드(?c=)로 불러온다 (정적 사이트). 검색엔진에는 게시판 목록만 노출
export const metadata: Metadata = {
  title: "여행 동선 · 동선 게시판",
  robots: { index: false, follow: true },
};

export default function PostPage() {
  const countries = getAllDestinations().map(toPlannerCountry);
  return (
    <>
      <TopBar solid />
      <main className="planner">
        <div className="wrap">
          <PostView countries={countries} />
        </div>
      </main>
      <Footer />
    </>
  );
}
