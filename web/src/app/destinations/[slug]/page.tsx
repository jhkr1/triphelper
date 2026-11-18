import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationView } from "@/components/destination/DestinationView";
import { Footer, TopBar } from "@/components/layout/TopBar";
import { getAllDestinations, getAttractions, getDestination, getPhrases } from "@/lib/destinations";

// 27개국 페이지를 빌드할 때 미리 만든다 (목록에 없는 주소는 404)
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDestinations().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  const title = `${d.name} 여행 정보 · 매너, 환율, 날씨, 회화`;
  const description = `${d.summary} 필수 매너, 기념품, 현지 마트 추천템, 비자 정보, 필수 회화와 실시간 환율·날씨까지.`;
  return {
    title,
    description,
    alternates: { canonical: `/destinations/${d.slug}/` },
    openGraph: { title: `${title} | TripHelper`, description, url: `/destinations/${d.slug}/` },
  };
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const all = getAllDestinations();
  const index = all.findIndex((d) => d.slug === slug);
  const destination = all[index];
  if (!destination) notFound();

  return (
    <>
      <TopBar solid />
      <main>
        <DestinationView
          destination={destination}
          phrases={getPhrases(destination)}
          attractions={getAttractions(destination.slug)}
          no={index + 1}
          total={all.length}
        />
      </main>
      <Footer />
    </>
  );
}
