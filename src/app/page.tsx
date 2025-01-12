"use client";

import { useEffect } from "react";
import { INITIAL_SERIES } from "@/features/series/constants/series";
import SeriesList from "@/features/series/components/SeriesList";
import Header from "@/features/series/components/Header";
import Banner from "@/features/series/components/Banner";

export default function Home() {
  useEffect(() => {
    // 초기 데이터 localStorage에 저장
    if (!localStorage.getItem("series")) {
      localStorage.setItem("series", JSON.stringify(INITIAL_SERIES));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white animate-fadeIn">
      <Header />
      <main>
        <Banner />
        <div className="container mx-auto px-4 py-8">
          <SeriesList title="인기 콘텐츠" />
          <SeriesList title="내가 찜한 콘텐츠" type="myList" />
        </div>
      </main>
    </div>
  );
}
