"use client";

import { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import { Series } from "../constants/series";
import { useLikeStore } from "../store/useLikeStore";

interface SeriesListProps {
  title: string;
  type?: "all" | "myList";
}

export default function SeriesList({ title, type = "all" }: SeriesListProps) {
  const [series, setSeries] = useState<Series[]>([]);
  const { likedSeriesIds } = useLikeStore();

  useEffect(() => {
    const storedSeries = localStorage.getItem("series");
    if (storedSeries) {
      const parsedSeries = JSON.parse(storedSeries);
      if (type === "myList") {
        // 찜한 콘텐츠만 필터링
        setSeries(
          parsedSeries.filter((item: Series) =>
            likedSeriesIds.includes(item.id)
          )
        );
      } else {
        setSeries(parsedSeries);
      }
    }
  }, [type, likedSeriesIds]);

  if (type === "myList" && series.length === 0) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400">찜한 콘텐츠가 없습니다.</p>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {series.map((item) => (
          <SeriesCard key={item.id} series={item} />
        ))}
      </div>
    </section>
  );
}
