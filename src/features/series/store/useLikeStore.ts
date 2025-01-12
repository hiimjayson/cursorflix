import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikeState {
  likedSeriesIds: string[];
  toggleLike: (seriesId: string) => void;
  isLiked: (seriesId: string) => boolean;
}

export const useLikeStore = create<LikeState>()(
  persist(
    (set, get) => ({
      likedSeriesIds: [],
      toggleLike: (seriesId: string) => {
        set((state) => {
          const isCurrentlyLiked = state.likedSeriesIds.includes(seriesId);
          const newLikedIds = isCurrentlyLiked
            ? state.likedSeriesIds.filter((id) => id !== seriesId)
            : [...state.likedSeriesIds, seriesId];

          return { likedSeriesIds: newLikedIds };
        });
      },
      isLiked: (seriesId: string) => {
        return get().likedSeriesIds.includes(seriesId);
      },
    }),
    {
      name: "series-likes-storage",
    }
  )
);
