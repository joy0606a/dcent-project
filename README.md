# DCENT 프로젝트

DCENT 서비스 디스커버리 페이지를 구현한 Next.js 프로젝트입니다.

## 사용한 기술 스택

### Frontend

- **Next.js 15.3.4**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** - 유틸리티 기반 CSS 프레임워크
- **next-intl** - 다국어 지원 라이브러리

### UI/UX

- **Shadcn** - 컴포넌트 라이브러리
- **Lucide React** - 아이콘 라이브러리
- **React Responsive Carousel** - 배너 슬라이드 구현
- **React Device Detect** - 디바이스 감지

### 상태 관리 & 데이터 페칭

- **TanStack Query (React Query)** - 서버 상태 관리
- **TanStack Query DevTools** - 개발자 도구

### 개발 도구

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **@dotenvx/dotenvx** - 환경 변수 관리

## 프로젝트 실행 및 빌드 방법

### 환경 설정

1. 저장소 클론

```bash
git clone <repository-url>
cd dcent-project
```

2. 의존성 설치

```bash
yarn install
```

3. 환경 변수 설정

```bash
# .env.example을 참고하여 각 환경별 설정 파일 생성
cp .env.example .env.local
```

### 개발 환경 실행

```bash
# 로컬 개발 환경
yarn dev

# 개발 환경
yarn dev:development
# 또는
yarn run:dev

# 스테이징 환경
yarn dev:staging
# 또는
yarn run:staging

# 프로덕션 환경
yarn run:prod
```

### 빌드

```bash
# 기본 빌드
yarn build

# 환경별 빌드
yarn build:development
yarn build:staging
yarn build:production
```

### 프로덕션 실행

```bash
# 기본 실행
yarn start

# 환경별 실행
yarn start:development
yarn start:staging
yarn start:production
```

## 구현한 주요 요소

### 1. 환경 분리 시스템

- **개발(development)**, **스테이징(staging)**, **프로덕션(production)** 환경 분리
- 각 환경별 독립적인 빌드 스크립트 제공
- `API_BASE_URL` 환경별 설정 지원
- `@dotenvx/dotenvx`를 활용한 안전한 환경 변수 관리

### 2. 배너 컴포넌트 (`Banner.tsx`)

- **슬라이드 기능**: `react-responsive-carousel` 라이브러리 활용
- **커스텀 인디케이터**: 점(dot) 형태의 네비게이션 구현
- **CTA 버튼**: 사용자 액션을 유도하는 버튼 포함

### 3. 서비스 리스트 (`ItemCard.tsx`, `page.tsx`)

- **언어별 필터링**: 한국어/영어 서비스 구분
- **플랫폼별 필터링**: Android/iOS 플랫폼 구분
- **빌드 환경별 필터링**: development/staging/production 환경 구분
- **상세 정보 드로어**: 서비스 상세 정보를 모달 형태로 제공
- **즐겨찾기 기능**: 팝업 안내 후 삭제 기능 구현

### 4. 백엔드 목업 데이터 (`src/api/`)

- 실제 API 호출을 대체하는 목업 데이터 제공
- Accept-Language header의 언어 설정을 받아서 언어별 데이터 분리하여 전송
- 빌드환경 별 세팅(현재는 de능 환경만 api로 목업데이터로 호출 가능)

### 5. 다국어 지원 (next-intl)

- 한국어(`ko.json`), 영어(`en.json`) 메시지 파일 (default: `en`)
- URL 기반 언어 라우팅 (`/ko`, `/en`)

### 6. 예외 처리 및 사용자 인터랙션

- **TanStack Query**를 활용한 데이터 페칭 에러 처리
- **로딩 상태** 관리 및 에러 UI 구현
- **반응형 디자인**으로 다양한 디바이스 지원

## 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점

### 보완하고 싶은 점

1. **성능 최적화**
   - 이미지 최적화 (Next.js Image 컴포넌트 활용)
   - 코드 스플리팅 및 레이지 로딩
   - 메모이제이션을 통한 리렌더링 최적화

## 프로젝트 구조

```
src/
├── app/
│   ├── [locale]/
│   │   ├── (discovery)/          # 메인 디스커버리 페이지
│   │   │   ├── Banner.tsx         # 배너 슬라이드 컴포넌트
│   │   │   ├── ItemCard.tsx       # 서비스 카드 컴포넌트
│   │   │   ├── ItemDetailDrawer.tsx # 상세 정보 드로어
│   │   │   └── page.tsx           # 메인 페이지
│   │   └── layout.tsx             # 언어별 레이아웃
│   ├── api/
│   │   └── discovery/             # 목업 데이터 api
│   │   └── mocks/
│   │       └── discoveryData.ts   # 목업 데이터
│   └── globals.css                # 전역 스타일
├── components/
│   ├── ui/                        # 재사용 가능한 UI 컴포넌트
│   └── layout/                    # 레이아웃 컴포넌트
├── hooks/                         # 커스텀 훅
├── lib/                          # 유틸리티 함수
├── i18n/                         # 다국어 설정
├── client/                       # api 호출 설정
└── providers/                    # React 컨텍스트 프로바이더

```

## 환경별 설정

| 환경     | 파일               | 설명               |
| -------- | ------------------ | ------------------ |
| 로컬     | `.env.local`       | 로컬 개발 환경     |
| 개발     | `.env.development` | 개발 서버 환경     |
| 스테이징 | `.env.staging`     | 스테이징 서버 환경 |
| 프로덕션 | `.env.production`  | 프로덕션 서버 환경 |

각 환경 파일에는 다음 변수들이 설정되어 있습니다:

- `NEXT_PUBLIC_ENV`: 현재 환경 식별자
- `API_BASE_URL`: API 서버 베이스 URL
