# Union(유니온) 기업 랜딩페이지 개발 요구사항

## 1. 프로젝트 개요

### 1.1 프로젝트명
Union Corporation 기업 홍보 랜딩페이지

### 1.2 목적
건축시공 및 실내건축 시공/설계 전문 기업 **Union(유니온)**의 신뢰감 있는 브랜드 이미지를 전달하고, 회사 정보·사업분야·업무실적을 효과적으로 소개하는 원페이지형 반응형 웹사이트 구축.

### 1.3 개발 방식
- Claude Code를 활용한 바이브 코딩
- 정적 웹사이트 (별도의 백엔드 불필요)
- 반응형(Responsive) 웹 디자인 (Desktop / Tablet / Mobile)

---

## 2. 기술 스택

| 항목 | 사용 기술 |
|------|-----------|
| Markup | HTML5 (Semantic Tags) |
| Style | CSS3 (Flexbox / Grid), CSS Variables |
| Script | Vanilla JavaScript (ES6+) |
| Font | Google Fonts – `Pretendard` 또는 `Noto Sans KR` (본문) / `Playfair Display` 또는 `Cormorant Garamond` (영문 로고/헤딩 포인트) |
| Icon | Lucide Icons 또는 Font Awesome |
| Animation | AOS (Animate On Scroll) 또는 CSS 기반 스크롤 애니메이션 |
| 이미지 최적화 | `.webp` 우선, 폴백 `.jpg` |

---

## 3. 디자인 컨셉

### 3.1 톤앤매너
- **차분하고 모던한 인테리어 회사 무드**
- 절제된 미니멀리즘 + 고급스러운 여백감
- 건축/실내건축 회사의 **전문성·신뢰감** 강조

### 3.2 컬러 팔레트 (CSS Variables 권장)
```css
:root {
  --color-bg: #F5F3EF;         /* Warm Off-White (메인 배경) */
  --color-surface: #FFFFFF;    /* 카드/섹션 배경 */
  --color-primary: #1C1C1C;    /* Deep Charcoal (메인 텍스트/로고) */
  --color-secondary: #4A4A4A;  /* Warm Gray (서브 텍스트) */
  --color-accent: #8B7355;     /* Muted Bronze (포인트, 인테리어 우드톤) */
  --color-line: #E5E1DA;       /* 구분선 */
  --color-muted: #9A9689;      /* 캡션/보조 */
}
```
> 인테리어 회사에 어울리는 **웜 뉴트럴(Warm Neutral)** 계열 + 브론즈 포인트로 신뢰감·고급감 표현.

### 3.3 타이포그래피
- 본문/제목: **Pretendard** (신뢰감·가독성 우수한 한글 폰트)
- 영문 로고 및 섹션 넘버: **Playfair Display** (모던 세리프)
- Base font-size: 16px / Line-height: 1.7
- Heading: 700 weight / Body: 400 weight / Caption: 300 weight

### 3.4 레이아웃 원칙
- 최대 콘텐츠 폭 1200px (센터 정렬)
- 섹션 간 상하 여백 최소 120px (모바일 60px)
- Grid 기반 사업분야/실적 카드
- 스크롤 시 페이드인 애니메이션

---

## 4. 페이지 구조 (One-Page Scroll)

### Header (Fixed Navigation)
- 좌측: `Union` 로고 (Playfair Display, 볼드)
- 우측 메뉴: `회사연혁` / `인사말씀` / `사업분야` / `업무실적` / `사업자등록증`
- 스크롤 시 배경 흰색 + 하단 그림자 처리
- 모바일: 햄버거 메뉴 → 슬라이드 오픈

### Hero Section
- 풀스크린 히어로 (배경: 인테리어 대표 이미지 + 어두운 그라디언트 오버레이)
- 카피:
  - Main: `Building Trust, Designing Space`
  - Sub: `주인정신을 바탕으로 신뢰와 기술력을 짓습니다.`
  - Chip: `CORPORATION Union GROUP`
- Scroll Down 인디케이터

---

### Chapter 1. 회사연혁 (Company Info)
**섹션 ID**: `#history`  
좌우 2단 레이아웃 (좌: 섹션 타이틀 / 우: 정보 리스트)

| 항목 | 내용 |
|------|------|
| 회사명 | Union |
| 설립일 | 2009년 01월 06일 |
| 대표자 | 서영종 |
| 주소 | 서울시 영등포구 신길7동 1127 |
| 업태 | 서비스 |
| 업종 | 건축 / 실내건축 |
| 전화 | 02-797-6743 |

> 좌측에는 `SINCE 2009` 대형 타이포그래피 배치로 헤리티지 강조.

---

### Chapter 2. 인사말씀 (Greeting)
**섹션 ID**: `#greeting`  
중앙 정렬, 여백 넉넉히.

```
안녕하십니까?
Union 입니다.

유니온은 건축시공 및 실내건축 시공, 설계를 주업으로 하는 회사로서
주인정신을 바탕으로 품질의 신뢰 및 축적된 기술력으로
최선을 다할 것을 약속드립니다.

— Union 임직원 일동
```
- 인용 부호(`"`) 데코 요소 좌상단 배치 (`--color-accent`)
- 대표자 서명 이미지 또는 텍스트 서명

---

### Chapter 3. 사업분야 (Business Areas)
**섹션 ID**: `#business`  
3-Column Grid (모바일 1열)

| # | 분야 | 아이콘 | 설명 |
|---|------|--------|------|
| 01 | 인테리어 시공 | interior | 공간의 가치를 높이는 실내건축 시공 서비스 |
| 02 | 건축 시공 | building | 견고한 기술력을 바탕으로 한 건축 시공 |
| 03 | 설계 및 기획 | pencil-ruler | 고객 니즈에 맞춘 맞춤형 설계와 프로젝트 기획 |

- 각 카드 hover 시 살짝 상승(`translateY(-6px)`) + 그림자 강화

---

### Chapter 4. 업무실적 (Portfolio) ⭐ 핵심 섹션
**섹션 ID**: `#portfolio`

#### 4.1 카테고리 필터
- 전체 / 업무시설 / 상업시설 / 숙박시설 / 공장·시설 / 주택 / 대사관

#### 4.2 프로젝트 카드 그리드 (3열 → 태블릿 2열 → 모바일 1열)

| No. | 프로젝트명 | 카테고리 | 상세페이지 유무 |
|-----|-----------|---------|:-:|
| 01 | **태국대사관 (Royal Thai Embassy)** 연회장 & 회의실 | 대사관 | ✅ (별도 상세 페이지) |
| 02 | 경기신용보증 | 업무시설 | 이미지 뷰 |
| 03 | 에이티젠 | 업무시설 | 이미지 뷰 |
| 04 | 일산 클리닉 | 상업시설 | 이미지 뷰 |
| 05 | 포항 웨딩홀 | 상업시설 | 이미지 뷰 |
| 06 | 구례 평화식당 | 상업시설 | 이미지 뷰 |
| 07 | 남양주 베이커리 카페 | 상업시설 | 이미지 뷰 |
| 08 | 평창 생활숙박시설 | 숙박시설 | 이미지 뷰 |
| 09 | 금호방재 | 공장/시설 | 이미지 뷰 |
| 10 | 평창동 단독주택 | 주택 | 이미지 뷰 |

- 카드 구성: 썸네일 + 카테고리 라벨 + 프로젝트명 + `View Detail →`
- 일반 실적: 클릭 시 라이트박스(Lightbox) 모달로 이미지 확대
- **태국대사관 프로젝트만 `target="_blank"`로 별도 상세 페이지(`/portfolio/royal-thai-embassy.html`) 새창 오픈**

#### 4.3 태국대사관 상세페이지 (`royal-thai-embassy.html`)
사용자 요청에 따라 **새창(`_blank`) 오픈** 및 별도 페이지 구성.

**섹션 구성**
1. **Project Overview**  
   - 프로젝트명: 태국대사관 (Royal Thai Embassy)  
   - 범위: 연회장 & 회의실 Interior 리모델링  
   - 완료일: 2026-07-05
2. **Plan Comparison** (2열 비교)
   | 구분 | A TYPE PLAN | B TYPE PLAN |
   |------|-------------|-------------|
   | 연회장 수용 인원 | 약 130명 | 약 150명 |
   | 특징 | 여유로운 동선 중심 컨셉 | 최대 수용 규모 확장 컨셉 |
3. **A안 Concept & Isometric View** (Isometric-1, Isometric-2 이미지)
4. **B안 Concept & Isometric View** (Isometric-1, Isometric-2 이미지)
5. **무대 디자인 (Stage Design)**
6. **측면 책장 디자인 (Side Bookshelf Design)**
7. **재료 마감 (Material Finish)** – Material 팔레트 그리드
8. 하단 CTA: `← 목록으로 돌아가기`

---

### Chapter 5. 사업자등록증 (Business Registration)
**섹션 ID**: `#registration`  
- 사업자등록증 이미지 삽입 (PDF에서 추출한 이미지 사용)
- 확대 보기(모달) 지원
- 아래에 텍스트 정보 병기:
  - 사업자등록번호: **106-05-28053**
  - 회사명: Union
  - 대표자: 서영종
  - 소재지: 서울시 영등포구 신길7동 1127

---

### Footer
```
CORPORATION Union GROUP

회사명: Union | 사업자번호: 106-05-28053
서울시 영등포구 신길7동 1127
대표: 서영종 | Tel: 02)797-6743 | union172@naver.com

© 2026 Union Corporation. All Rights Reserved.
```
- 배경: `--color-primary` (딥 차콜)
- 텍스트: `--color-bg` 계열 (오프화이트)
- 상단 얇은 구분선(`--color-accent`)

---

## 5. 인터랙션 & UX 요구사항

1. **Smooth Scroll** – 네비게이션 클릭 시 부드러운 앵커 이동
2. **Scroll Spy** – 현재 섹션에 해당하는 네비게이션 메뉴 하이라이트
3. **AOS Animation** – 각 섹션 진입 시 fade-up / fade-in 효과
4. **Portfolio Modal** – 일반 실적은 라이트박스 모달, 태국대사관은 새창
5. **Lazy Loading** – 이미지 `loading="lazy"` 적용
6. **Hover Effect** – 카드/버튼 hover 시 subtle transform + shadow
7. **Accessibility** – `alt` 태그, ARIA 라벨, 키보드 내비게이션 지원

---

## 6. 파일 구조

```
union-landing/
├── index.html
├── portfolio/
│   └── royal-thai-embassy.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── portfolio-detail.css
│   ├── js/
│   │   ├── main.js
│   │   └── modal.js
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   │   ├── gyeonggi-credit/
│   │   │   ├── atgen/
│   │   │   ├── ilsan-clinic/
│   │   │   ├── pohang-wedding/
│   │   │   ├── gurye-restaurant/
│   │   │   ├── namyangju-bakery/
│   │   │   ├── pyeongchang-stay/
│   │   │   ├── kumho-fire/
│   │   │   ├── pyeongchang-house/
│   │   │   └── thai-embassy/
│   │   ├── registration/
│   │   └── icons/
│   └── fonts/
└── requirements.md
```

---

## 7. 반응형 브레이크포인트

| 디바이스 | 화면폭 | 그리드 |
|---------|--------|--------|
| Desktop | 1200px+ | 3-Column |
| Laptop | 992px – 1199px | 3-Column (여백 축소) |
| Tablet | 768px – 991px | 2-Column |
| Mobile | ~767px | 1-Column, 햄버거 메뉴 |

---

## 8. 성능 & SEO 요구사항

- Lighthouse Score 목표: Performance / Accessibility / Best Practices / SEO 모두 **90+**
- `<meta name="description">`, `<meta property="og:*">` OpenGraph 태그 필수
- `title`: `Union | 건축·실내건축 전문기업`
- favicon 포함
- 이미지 사이즈 최적화 (WebP + 반응형 `srcset`)

---

## 9. 개발 우선순위 (바이브 코딩 순서 추천)

1. HTML 뼈대 구성 (Semantic 구조)
2. CSS 변수 & 폰트 & 기본 레이아웃
3. Header + Hero 섹션
4. Chapter 1~3 콘텐츠 섹션
5. Chapter 4 포트폴리오 그리드 + 모달
6. 태국대사관 상세 페이지 별도 구성
7. Chapter 5 사업자등록증 + Footer
8. JavaScript 인터랙션 (Scroll Spy / Modal / AOS)
9. 반응형 미디어쿼리 다듬기
10. 최종 접근성·SEO·성능 점검

---

## 10. 참고 자료

- `유니온_회사소개.pdf` – 회사 기본 정보 및 업무실적 이미지 소스
- `태국대사관리모델링(2026-07-05)-2.pdf` – 태국대사관 프로젝트 상세 자료
- 인용 이미지는 각 PDF에서 페이지별로 추출하여 `/assets/images/portfolio/` 하위에 배치