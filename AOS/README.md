# EEOS Android README
## 📸 Screen Shots
|로그인|홈 화면|멤버 상태 변경|행사 세부 내용|출석 상태 선택|
|:---:|:---:|:---:|:---:|:---:|
|<img width="410" alt="login" src="https://github.com/JNU-econovation/black-company/assets/114472483/efa42596-dcea-4b6f-b8de-8bdacd3b8bb2">|<img width="330" alt="home" src="https://github.com/JNU-econovation/black-company/assets/114472483/2abbbc4d-adfe-4407-ba3a-033a7564b602">|<img width="324" alt="member_status_dialog" src="https://github.com/JNU-econovation/black-company/assets/114472483/8b880747-ff69-4601-9cf1-3cb519e8b0ed">|<img width="321" alt="detail" src="https://github.com/JNU-econovation/black-company/assets/114472483/3469207b-3b62-4ab5-bd8d-baacd58b36ac">|<img width="370" alt="bottom_sheet" src="https://github.com/JNU-econovation/black-company/assets/114472483/0602f935-776b-4969-8df2-299e7f533fcd">|

## 💁🏻‍♀️ Tech Stack
|분류|항목|
|:---|:---|
|Architecture|MVVM|
|Language|Kotlin|
|UI|Jetpack Compose|
|Libraries|Hilt, Retrofit, Okhttp, Sandwich, Richtext-commonmark|
|Asynchronous Processing|Coroutine|

## 📁 Package Structure
```
└── 📁 com.example.eeos         # 루트 패키지
    ├── 📁 consts               # 앱에서 사용되는 상수 파일이 담긴 패키지
    ├── 📁 data                 # Data 계층
    │    ├── 📁 interceptor     # 레트로핏 모듈에 쓰일 인터셉터가 담긴 패키지
    │    ├── 📁 model.remote    # 네트워크 통신을 위한 DTO가 담긴 패키지
    │    ├── 📁 repository      # 레퍼지토리의 구현부가 담긴 패키지
    │    ├── 📁 service         # API 서비스 인터페이스가 담긴 패키지
    │    └── 📁 source          # 원격 데이터 소스가 담긴 패키지
    ├── 📁 di                   # 의존성 주입 모듈이 담긴 패키지
    ├── 📁 domain               # Domain 계층
    │    ├── 📁 model           # UI에서 사용되는 데이터 모델이 담긴 패키지
    │    └── 📁 repository      # 레퍼지토리 인터페이스가 담긴 패키지
    ├── 📁 navigation           # 네비게이션에 관한 파일이 담긴 패키지
    └── 📁 presentation         # UI 계층
         ├── 📁 detail          # Detail 화면 UI와 StateHolder가 담긴 패키지
         ├── 📁 home            # Home 화면 UI와 StateHolder가 담긴 패키지
         ├── 📁 login           # Login 화면 UI와 StateHolder가 담긴 패키지
         ├── 📁 theme           # Material Theme 관련 파일이 담긴 패키지
         ├── 📁 topappbar       # TopAppBar UI와 StateHolder가 담긴 패키지
         └── 📁 util            # Utility 클래스가 담긴 패키지
```
