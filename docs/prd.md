# PRD

## 1. 프로젝트 개요

1. **프로젝트명**: 넷플릭스 클론 (가칭)
2. **목표**
   - UI/UX: 직관적이고 익숙한 “동영상 스트리밍 서비스”의 UI를 사용자에게 제공
   - 기술 스택: React(Next.js) + Vercel 배포 + `localStorage` 데이터 관리
3. **핵심 기능**
   - 로그인 페이지 (임시 계정 검증 없이 바로 통과)
   - 시리즈 목록 페이지(카테고리, 검색, 간단한 필터)
   - 시리즈 상세 페이지(시리즈 정보, 에피소드, 시청 기능(데모), 찜하기 등)
4. **데이터 관리**
   - `localStorage`를 통해 사용자 ‘찜 목록’, ‘최근 본 시리즈’, ‘시리즈 데이터’를 관리
   - 서버나 DB 연동 없이 클라이언트 사이드 렌더링(CSR) 위주로 진행

---

## 2. IA(Information Architecture)

### 전체 IA 개요

```
ROOT
 ┣━ Login Page
 ┣━ Series List Page
 ┗━ Series Detail Page
```

1. **Login Page**

   - 루트(‘/login’) 경로에서 접근
   - 계정 정보 검증 로직 없음(사용자가 “로그인” 버튼을 누르면 자동 통과)

2. **Series List Page**

   - 홈(`'/'`) 또는 `'series'` 경로에서 접근
   - 시리즈(또는 영화) 목록과 추천 섹션, 검색, 찜 목록 확인 기능 등

3. **Series Detail Page**
   - `'series/:id'` 형태의 경로에서 접근
   - 시리즈에 대한 상세 정보, 에피소드 목록, 찜하기 버튼, 시청(데모) 버튼 등

---

## 3. 페이지별 구성 및 화면 설계

### 3-1. 로그인 페이지

- **URL**: `/login`
- **목적**: 서비스 접근 전, 로그인을 거치는 구조. 하지만 실제 계정 검증은 수행하지 않음.
- **주요 기능**
  - (A) ID/PW 입력 폼
  - (B) “로그인” 버튼: 클릭 시 `localStorage`에 임시 사용자 정보 저장 후 List Page로 이동
  - (C) 회원가입/비밀번호 찾기 링크 (더미 링크, 실제 기능 없음)

#### IA 상세

```
Login Page
 ┣━ Header
 ┃   ┗━ (로고 표시 - 넷플릭스 로고 유사 혹은 대체 로고)
 ┣━ Main (로그인 폼 섹션)
 ┃   ┣━ Input: ID
 ┃   ┣━ Input: Password
 ┃   ┗━ Button: 로그인
 ┗━ Footer
     ┗━ (회원가입, 비밀번호 찾기 등 더미 링크)
```

- **UI 요소**

  - **Header**: 프로젝트 로고 또는 간단한 텍스트(“Netflix Clone”)
  - **Main**:
    - ID/PW 입력
    - 로그인 버튼
  - **Footer**:
    - 더미 링크(회원가입, PW 찾기 등)

- **데이터 처리**
  - “로그인” 버튼 클릭 시, `localStorage.setItem('user', { ... })` 등의 형식으로 임시 로그인 상태 저장
  - 이후 시리즈 목록 페이지(`/series` 혹은 `/`)로 이동

---

### 3-2. 시리즈 목록 페이지

- **URL**: `/series` (또는 `/`)
- **목적**: 전체 시리즈(영화, 드라마 등)를 보여주고, 간단한 검색, 카테고리, 찜 목록 확인 가능
- **주요 기능**
  - (A) 상단 네비게이션 바(검색, 사용자 정보, 찜 목록 등)
  - (B) 시리즈 카테고리/섹션별 리스트 (예: “인기 콘텐츠”, “새로운 시리즈” 등)
  - (C) 개별 시리즈 클릭 시 상세 페이지로 이동

#### IA 상세

```
Series List Page
 ┣━ Header
 ┃   ┣━ Logo
 ┃   ┣━ Navigation (Home, My List, Logout 등)
 ┃   ┗━ Search Bar (검색 기능)
 ┣━ Main
 ┃   ┣━ Banner Section (가장 인기있는 시리즈 1개 혹은 랜덤)
 ┃   ┗━ Series Section(s) (여러 섹션으로 시리즈 카드 나열)
 ┃       ┗━ Series Card (포스터, 간단 설명 등)
 ┗━ Footer
     ┗━ (회사소개, 이용약관, 기타 더미)
```

- **UI 요소**

  - **Header**
    - 로고: 메인으로 이동하는 링크
    - 네비게이션 메뉴: `Home`, `My List(찜 목록)`, `Logout` 등
    - 검색: 시리즈 타이틀 검색
  - **Main**
    - 배너 섹션: 현재 인기 콘텐츠를 크게 노출(배경 이미지 & 소개 문구)
    - 시리즈 섹션: “장르별”, “인기 순위”, “새로 나온 시리즈” 등으로 분류 가능
      - 시리즈 카드: 포스터/이미지, 간단한 제목, 찜 버튼(hover 시 또는 카드 안에)
  - **Footer**
    - 회사 소개, 이용약관, 연락처, 언어 선택(더미) 등

- **데이터 처리**
  - 시리즈 목록은 `localStorage`에서 불러오거나, 앱 구동 시 한 번 `JSON` 데이터로 세팅 후 `localStorage`에 저장
  - “찜” 버튼 클릭 시 해당 시리즈 ID를 `localStorage` 내 “myList” 배열 등에 추가/삭제

---

### 3-3. 시리즈 상세 페이지

- **URL**: `/series/:id`
- **목적**: 선택된 시리즈의 상세 정보를 보여주고, 에피소드 선택 및 시청(데모) 기능 제공
- **주요 기능**
  - (A) 시리즈 포스터, 제목, 장르, 소개 텍스트
  - (B) 에피소드 리스트 (시즌별 구분 가능)
  - (C) “재생(Play)” 버튼: 시청 화면(모달 혹은 별도 섹션)으로 이동
  - (D) “찜하기” 버튼: 찜 목록에 추가/삭제

#### IA 상세

```
Series Detail Page
 ┣━ Header
 ┃   ┗━ Navigation (뒤로가기 / Home / My List 등)
 ┣━ Main
 ┃   ┣━ Series Info (포스터, 제목, 별점, 장르, 소개글)
 ┃   ┗━ Episode List
 ┃       ┗━ Episode Item(s) (제목, 재생 버튼, 설명 등)
 ┗━ Footer
     ┗━ (회사소개, 이용약관, 기타 더미)
```

- **UI 요소**

  - **Header**: 뒤로가기 혹은 로고/홈 버튼
  - **Main**
    - 시리즈 포스터 및 정보
    - “찜하기” 또는 “찜 해제” 버튼
    - 에피소드 리스트(시즌 구분 가능)
      - 에피소드 아이템: 회차 제목, 썸네일(있다면), ‘재생’ 버튼
  - **Footer**:
    - 회사 소개, 이용약관, 기타 더미

- **데이터 처리**
  - URL의 `:id`를 기준으로 `localStorage`에서 해당 시리즈 정보 가져오기
  - “찜하기” 버튼 클릭 시 “My List”에 추가
  - “재생” 버튼 클릭 시, 영상 재생 화면(모달 등) 호출(실제 영상이 아닌 데모일 수 있음)

---

## 4. UX 플로우 & 주요 시나리오

1. **로그인 → 목록 → 상세 → 목록**

   1. 사용자가 `/login` 접속
   2. ID/PW 입력 후 “로그인” 버튼 클릭(실제 검증 없음)
   3. “로그인” 클릭 시 `localStorage`에 임시 유저 정보(예: `{ isLogin: true }`) 저장 후 `/series`로 리다이렉트
   4. 목록 페이지에서 시리즈 카드 확인 후, 하나 클릭 → `/series/:id` 이동
   5. 상세 페이지에서 시리즈 정보 확인, “찜하기” 버튼 및 “재생” 버튼 테스트
   6. 뒤로가기(혹은 Home 버튼) 클릭 → 목록 페이지로 돌아감

2. **찜 기능**

   1. 목록 페이지에서 원하는 시리즈의 “찜” 버튼 클릭 → `localStorage.myList` 배열에 해당 시리즈ID 저장
   2. 내 목록(My List)에서 해당 시리즈 확인
   3. 상세 페이지에서도 “찜 해제” 처리 가능

3. **검색 기능**
   1. 목록 페이지 상단 검색 바에 텍스트 입력
   2. `localStorage`에 저장된 시리즈 데이터에서 부분 문자열 매칭
   3. 필터된 결과를 바로 목록에 렌더링

---

## 5. 개발/운영 관련 고려사항

1. **Vercel 배포**

   - Next.js(React)로 개발 후, GitHub와 연동하여 Vercel로 CI/CD 진행
   - 환경 변수 또는 프로젝트 설정은 Vercel 대시보드에서 관리
   - SSR(Server-Side Rendering)보다는 CSR(Client-Side Rendering) 위주 (데이터가 `localStorage`에 있음)

2. **로컬 데이터 구조**
   - 예시:
     ```json
     {
       "series": [
         {
           "id": "s001",
           "title": "시리즈 제목",
           "genre": "장르명",
           "description": "간단 소개",
           "posterUrl": "이미지 경로",
           "episodes": [
             {
               "episodeNo": 1,
               "title": "1화 제목",
               "description": "1화 소개",
               "videoUrl": "데모 영상 링크"
             },
             ...
           ]
         },
         ...
       ],
       "myList": [
         "s001", "s003" ...
       ],
       "user": {
         "isLogin": true
       }
     }
     ```
3. **디자인 가이드**

   - 실제 넷플릭스 UI를 1:1로 복제하기보다는 메인 색상(#141414), 포스터 카드 레이아웃, 다크 스타일 테마 등만 차용
   - 모바일 반응형 레이아웃 고려 (카드 2개/3개/4개씩 가로 배치 등)

4. **확장성**
   - 시리즈뿐만 아니라 영화, 예능 등 다른 카테고리도 포함 가능
   - 시즌 구분, 에피소드별 별점/댓글 기능 등 확장 가능

---

## 6. 요약

- **로그인 페이지**
  - 로그인 검증 없이 통과
  - `localStorage`에 임시 유저 정보만 저장
- **시리즈 목록 페이지**
  - 시리즈 카드 그리드/캐러셀 UI
  - 검색, 찜 목록, 배너 섹션, 카테고리/장르 분류
- **시리즈 상세 페이지**
  - 상세 정보, 에피소드 리스트, 재생(데모), 찜하기 기능
- **데이터 관리**
  - 모든 시리즈 및 사용자 데이터를 `localStorage`로 저장 및 불러옴
- **배포**
  - Next.js 기반으로 Vercel 자동 배포

위와 같은 구조로 기획 및 디자인을 진행하면, 간단한 “넷플릭스 클론”을 빠르게 구현하고 배포할 수 있습니다. 실제 개발 단계에서는 각 UI 컴포넌트별로 세부 레이아웃, 반응형, 사용자 시나리오(에러 케이스 등)를 면밀히 설계하고, Vercel 배포 환경에서 정상 동작을 검증해야 합니다.
