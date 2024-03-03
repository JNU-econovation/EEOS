# FE - README.md

## TechStack

| Architecture            | MVVM                                            |
| ----------------------- | ----------------------------------------------- |
| Language                | TypeScript                                      |
| UI                      | Tailwind CSS                                    |
| Libraries               | Next.js, React Query, jotai, axios, TailwindCSS |
| Asynchronous Processing | React Query, axios                              |

## Package Structure

```
FE
├─ 📁 public
├─ 📁 src
│  ├─ 📁 apis
│  │  ├─ 📁 dtos
│  ├─ 📁 app
│  ├─ 📁 components
│  ├─ 📁 constants
│  ├─ 📁 hooks
│  │  ├─ 📁 query
│  ├─ 📁 store
│  ├─ 📁 types
└─ └─ 📁 utils
```

| Directory Name  | Description                           |
| --------------- | ------------------------------------- |
| public          | 정적 파일 (이미지 등)                 |
| src             | 소스 코드                             |
| src/apis        | API 요청 및 응답 처리                 |
| src/apis/dtos   | 네트워크 통신을 위한 데이터 전송 객체 |
| src/app         | 앱 전체 레이아웃 및 라우팅 설정       |
| src/component   | 컴포넌트                              |
| src/constants   | 변하지 않는 값 선언                   |
| src/hooks       | 상태 관리 및 비즈니스 로직            |
| src/hooks/query | query & mutate 로직 처리              |
| src/store       | 전역 상태 관리 (Jotai)                |
| src/types       | Typescript 타입 정의                  |
| src/utils       | 공통 유틸리티 함수                    |
