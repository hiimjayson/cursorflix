"use client";

import { Button } from "@/components/ui/button";
import { Series } from "../constants/series";
import { Play, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface SeriesDetailProps {
  id: string;
}

export default function SeriesDetail({ id }: SeriesDetailProps) {
  const [series, setSeries] = useState<Series | null>(null);

  useEffect(() => {
    const allSeries = JSON.parse(localStorage.getItem("series") || "[]");
    const found = allSeries.find((s: Series) => s.id === id);
    if (found) {
      setSeries(found);
    }
  }, [id]);

  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("myList") || "[]");
    setIsInMyList(myList.includes(series?.id || ""));
  }, [series?.id]);

  const toggleMyList = () => {
    const myList = JSON.parse(localStorage.getItem("myList") || "[]");
    let newMyList;

    if (isInMyList) {
      newMyList = myList.filter((id: string) => id !== series?.id?.toString());
    } else {
      newMyList = [...myList, series?.id];
    }

    localStorage.setItem("myList", JSON.stringify(newMyList));
    setIsInMyList(!isInMyList);
  };

  if (!series) return null;

  return (
    <div className="relative">
      {/* 배너 이미지 섹션 */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <img
            src={series.imageUrl}
            alt={series.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
        </div>
      </div>

      {/* 콘텐츠 섹션 */}
      <div className="relative container mx-auto px-4 -mt-60">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">{series.title}</h1>
          <div className="flex gap-2 mb-4">
            {series.genre.map((genre) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </div>
          <p className="text-lg mb-6">{series.description}</p>

          <div className="flex gap-4 mb-8">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" /> 재생
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 hover:bg-white/20 text-black"
              onClick={toggleMyList}
            >
              {isInMyList ? (
                <>
                  <Minus className="h-5 w-5" /> 찜 해제
                </>
              ) : (
                <>
                  <Plus className="h-5 w-5" /> 찜하기
                </>
              )}
            </Button>
          </div>

          {/* 에피소드 섹션 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">에피소드</h2>
            <div className="space-y-4">
              {series.episodes?.map((episode, index) => (
                <div
                  key={index}
                  className="bg-[#2F2F2F] rounded-md p-4 hover:bg-[#3F3F3F] transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={episode.thumbnailUrl}
                        alt={`${episode.title} 썸네일`}
                        className="w-40 h-24 object-cover rounded-md"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute inset-0 m-auto hover:bg-black/50 rounded-md w-full h-full group"
                      >
                        <Play className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold">
                        {index + 1}화. {episode.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {episode.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
