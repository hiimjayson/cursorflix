import SeriesDetail from "@/features/series/components/SeriesDetail";
import Header from "@/features/series/components/Header";

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Header />
      <SeriesDetail id={id} />
    </div>
  );
}
