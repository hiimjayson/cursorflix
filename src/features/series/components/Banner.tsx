"use client";

import { useEffect, useState } from "react";
import { Series } from "../constants/series";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const [featured, setFeatured] = useState<Series | null>(null);

  useEffect(() => {
    const series = JSON.parse(localStorage.getItem("series") || "[]");
    if (series.length > 0) {
      setFeatured(series[0]);
    }
  }, []);

  if (!featured) return null;

  const handlePlay = () => {
    router.push(`/series/${featured.id}`);
  };

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={featured.imageUrl}
          alt={featured.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-4">{featured.title}</h2>
        <p className="text-lg max-w-2xl mb-6">{featured.description}</p>
        <div className="flex gap-4">
          <Button size="lg" className="gap-2" onClick={handlePlay}>
            <Play className="h-5 w-5" /> 재생
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-black hover:text-white border-black hover:border-white hover:bg-white/20"
          >
            <Plus className="h-5 w-5" /> 찜하기
          </Button>
        </div>
      </div>
    </div>
  );
}
