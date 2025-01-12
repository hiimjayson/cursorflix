"use client";

import { Series } from "../constants/series";
import { useLikeStore } from "../store/useLikeStore";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const { isLiked, toggleLike } = useLikeStore();
  const liked = isLiked(series.id);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(series.id);
  };

  return (
    <div className="relative group">
      <a href={`/series/${series.id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
          <img
            src={series.imageUrl}
            alt={series.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          <button
            onClick={handleLikeClick}
            className={cn(
              "absolute top-2 right-2 p-2 rounded-full",
              "bg-black/50 hover:bg-black/70 transition-colors",
              "opacity-0 group-hover:opacity-100"
            )}
          >
            <Heart
              className={cn(
                "w-5 h-5 transition-colors",
                liked ? "fill-red-500 text-red-500" : "text-white"
              )}
            />
          </button>
        </div>
        <h3 className="mt-2 font-semibold truncate">{series.title}</h3>
      </a>
    </div>
  );
}
