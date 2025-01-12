"use client";

export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnailUrl: string;
}

export interface Series {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  genre: string[];
  episodes: Episode[];
}

export const INITIAL_SERIES: Series[] = [
  {
    id: "squid-game",
    title: "오징어 게임",
    description:
      "456억의 상금이 걸린 의문의 서바이벌에 참가한 사람들이 목숨을 걸고 극한의 게임에 도전하는 이야기",
    imageUrl:
      "https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    genre: ["스릴러", "드라마", "서바이벌"],
    episodes: [
      {
        id: "squid-game-1",
        title: "무궁화 꽃이 피었습니다",
        description: "456명의 참가자들이 첫 번째 게임에 도전합니다.",
        duration: "1시간 2분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-2",
        title: "지옥",
        description:
          "두 번째 게임이 시작되고 참가자들은 더욱 극한의 상황을 맞이합니다.",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-3",
        title: "우산사탕",
        description: "달고나 게임에서 참가자들의 운명이 갈립니다.",
        duration: "54분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-4",
        title: "쉬는 시간",
        description: "참가자들 사이에 긴장감이 고조됩니다.",
        duration: "55분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-5",
        title: "평등한 세상",
        description: "구슬 게임에서 참가자들의 인성이 시험대에 오릅니다.",
        duration: "52분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-6",
        title: "깐부",
        description: "참가자들 사이의 신뢰가 무너지기 시작합니다.",
        duration: "62분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-7",
        title: "VIPS",
        description: "게임의 배후에 있는 VIP들이 등장합니다.",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-8",
        title: "징검다리",
        description: "생사를 건 징검다리 건너기가 시작됩니다.",
        duration: "59분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-9",
        title: "최후의 결승전",
        description: "마지막 게임이 시작됩니다.",
        duration: "56분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
      {
        id: "squid-game-10",
        title: "456억",
        description: "최종 우승자가 결정됩니다.",
        duration: "63분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      },
    ],
  },
  {
    id: "joker",
    title: "조커",
    description:
      "고담시의 실패한 코미디언 아서 플렉이 광기어린 악당 조커로 변모해가는 과정을 그린 이야기",
    imageUrl:
      "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genre: ["범죄", "드라마", "스릴러"],
    episodes: [
      {
        id: "joker-1",
        title: "웃음의 시작",
        description: "아서 플렉의 일상이 소개됩니다.",
        duration: "55분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-2",
        title: "코미디 클럽",
        description: "아서의 스탠드업 코미디 도전기",
        duration: "54분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-3",
        title: "지하철 사건",
        description: "운명을 바꾼 지하철에서의 사건",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-4",
        title: "머레이 쇼",
        description: "TV 쇼 출연을 꿈꾸는 아서",
        duration: "57분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-5",
        title: "어머니의 비밀",
        description: "충격적인 과거의 진실",
        duration: "56분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-6",
        title: "광기의 시작",
        description: "아서의 정신이 붕괴되기 시작합니다",
        duration: "59분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-7",
        title: "사회의 혼돈",
        description: "고담시에 무질서가 퍼지기 시작합니다",
        duration: "61분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-8",
        title: "가면 속의 진실",
        description: "아서가 자신의 정체성을 찾아갑니다",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-9",
        title: "최후의 웃음",
        description: "TV 쇼에서의 충격적인 사건",
        duration: "62분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
      {
        id: "joker-10",
        title: "조커의 탄생",
        description: "아서 플렉이 완전히 조커로 변모합니다",
        duration: "65분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      },
    ],
  },
  {
    id: "dark-knight",
    title: "다크나이트",
    description:
      "배트맨이 조커의 위협으로부터 고담시를 지키기 위해 고군분투하는 이야기",
    imageUrl:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre: ["액션", "범죄", "드라마"],
    episodes: [
      {
        id: "dark-knight-1",
        title: "고담의 기사",
        description: "배트맨이 고담시의 범죄와 맞서 싸웁니다.",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-2",
        title: "조커의 등장",
        description: "미스터리한 악당 조커가 등장합니다.",
        duration: "57분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-3",
        title: "은행 강도",
        description: "조커의 대담한 은행 강도 사건",
        duration: "59분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-4",
        title: "혼돈의 시작",
        description: "고담시에 공포가 퍼지기 시작합니다",
        duration: "56분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-5",
        title: "하비 덴트",
        description: "정의로운 검사 하비 덴트의 활약",
        duration: "60분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-6",
        title: "선택",
        description: "배트맨의 힘든 선택의 순간",
        duration: "58분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-7",
        title: "레이첼",
        description: "소중한 인물을 잃을 위기",
        duration: "57분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-8",
        title: "투페이스",
        description: "하비 덴트의 비극적 변화",
        duration: "61분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-9",
        title: "최후의 대결",
        description: "배트맨과 조커의 마지막 대결",
        duration: "63분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "dark-knight-10",
        title: "고담의 영웅",
        description: "진정한 영웅의 희생",
        duration: "65분",
        thumbnailUrl:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
    ],
  },
];

// 초기 데이터 로컬스토리지 설정
if (typeof window !== "undefined" && !localStorage.getItem("series")) {
  localStorage.setItem("series", JSON.stringify(INITIAL_SERIES));
}
