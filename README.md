## AcneLog_web
- Acne Log 프론트엔드 repository입니다.

## 프로젝트 개요
<img width="100" height="100" alt="_AcneLog 로고" src="https://github.com/user-attachments/assets/004fed49-322e-471b-88bf-cfd03aee455a" />

- AcneLog는 ‘Acne(여드름)’와 ‘Log(기록)’을 결합한 이름으로, 본 프로젝트는 여드름 및 피부 흉터로 고민하는 사람들을 위한 AI기반 피부 건강 관리 서비스이다. 
- 사용자가 스마트폰 카메라로 자신의 여드름 사진을 업로드하면, AI가 자동으로 분석하여 여드름 및 흉터 유형을 진단한다. 

## 프론트엔드 개발자
- 이한슬
- 조성아

## 기술 스택
- React
- TypeScript
- Styled-components 6.1
- Zustand
- axios
  
## 프론트엔드 소프트웨어 아키텍처
<img width="764" height="241" alt="프론트아키텍처" src="https://github.com/user-attachments/assets/943f30ee-f0af-4a33-97bc-ba4b3cb2607b" />

- AWS S3 + CloudFront
- github Actions
  
## 배포 주소
[🔗아크네로그](http://acnelog-bucket-202511.s3-website.ap-northeast-2.amazonaws.com/)

## 주요 기능
- 아크네 진단: 사용자는 여드름 사진을 업로드하고 AI를 통해 여드름 유형을 진단받고, 관리법과 상품을 추천받을 수 있습니다.
- 피플즈로그 / 나의 진단로그 : 진단 받은 기록을 여드름 유형별로 모아 볼 수 있습니다.
  
## 프로젝트에서 문제점을 해결한 과정 
이미지 업로드, AI 분석 요청, 결과 표시, 마이로그 UI

상태 관리(Zustand)사용 경험 강조

## 설치/실행

    ```
    powershell
    npm install
    npm run dev
    ```

## 프로젝트 구조
컴포넌트 구조, 페이지 구조, hooks, types, services 등
프론트엔드 모듈화, TS 활용, 재사용성 강조

    src/
      api/              # axios 클라이언트 등 API 기본 설정
      auth/             # 인증 관련 훅, 콜백, 스토어
      components/       # 재사용 가능한 UI 컴포넌트 (공통 모듈)
        common/         # 버튼, 모달, 로딩 등
        Header/
        Footer/
      pages/            # 라우트별 페이지 컴포넌트
      hooks/            # 재사용 훅 (useAuth, useNavigate 등)
      services/         # 비즈니스 로직과 API 호출 분리
      styles/           # 글로벌 스타일, 테마, 타입 확장
      constants/        # 매핑, 상수
      layout/           # 레이아웃 컴포넌트
      routes/           # 로그인 필요한 라우터 분리
      main.tsx
      App.tsx

## 개선 경험
- Lighthouse 성능 개선: alt 속성 추가
- 디자인 변경을 통한 UI/UX 개선: 데이터가 없는 경우 아이콘과 문구 추가, UI 색상 대비 감소
- 배포 시간 단축: github actions 파이프라인 구축을 통한 단축
- 상태 관리 최적화: Zustand 도입으로 API 캐싱 및 전역 상태 관리 효율화 → 불필요한 재렌더링 최소화

  ## 향후 계획
- UI 크기에 따른 반응형 적용
- jest, story book 활용한 사용자 test 
