import { HomeStage } from "@/components/home/HomeStage";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { getDestinationSummaries } from "@/lib/destinations";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main>
        <HomeStage list={getDestinationSummaries()} />
      </main>
      <Footer />
    </>
  );
}
