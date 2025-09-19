# 📁 리액트 네이티브 프로젝트 폴더 구조 가이드

이 문서는 리액트 네이티브 초보자를 위한 완전한 폴더 구조와 각 파일의 역할을 설명합니다.

## 🏗️ 전체 폴더 구조

```
ReviewApp/
├── src/                          # 소스 코드 폴더
│   ├── components/               # 재사용 가능한 컴포넌트들
│   │   ├── common/              # 공통 컴포넌트 (Button, Card, Input 등)
│   │   │   ├── Button.tsx       # 재사용 가능한 버튼 컴포넌트
│   │   │   ├── Card.tsx         # 재사용 가능한 카드 컴포넌트
│   │   │   ├── Input.tsx        # 재사용 가능한 입력 필드 컴포넌트
│   │   │   ├── Loading.tsx      # 로딩 컴포넌트
│   │   │   └── index.ts         # common 컴포넌트들 export
│   │   ├── ui/                  # UI 전용 컴포넌트들
│   │   │   ├── Header.tsx       # 헤더 컴포넌트
│   │   │   ├── TabBar.tsx       # 탭바 컴포넌트
│   │   │   └── index.ts         # UI 컴포넌트들 export
│   │   └── index.ts             # 모든 컴포넌트들 export
│   ├── screens/                 # 화면 컴포넌트들
│   │   ├── home_screen.tsx      # 홈 화면
│   │   └── second_screen.tsx    # 두 번째 화면
│   ├── utils/                   # 유틸리티 함수들
│   │   ├── validation.ts        # 입력값 검증 함수들
│   │   ├── format.ts            # 데이터 포맷팅 함수들
│   │   ├── storage.ts           # 로컬 스토리지 관리 함수들
│   │   ├── api.ts               # API 통신 함수들
│   │   └── index.ts             # 모든 유틸리티 함수들 export
│   ├── types/                   # TypeScript 타입 정의들
│   │   ├── common.ts            # 공통 타입 정의들
│   │   ├── user.ts              # 사용자 관련 타입 정의들
│   │   └── index.ts             # 모든 타입들 export
│   ├── constants/               # 상수 정의들
│   │   ├── colors.ts            # 색상 상수들
│   │   ├── sizes.ts             # 크기 관련 상수들
│   │   ├── strings.ts           # 문자열 상수들
│   │   └── index.ts             # 모든 상수들 export
│   ├── hooks/                   # 커스텀 훅들
│   │   ├── useApi.ts            # API 호출을 위한 훅
│   │   ├── useStorage.ts        # 스토리지 관리를 위한 훅
│   │   └── index.ts             # 모든 훅들 export
│   ├── services/                # API 서비스들
│   │   ├── api.ts               # API 서비스 클래스들
│   │   └── index.ts             # 모든 서비스들 export
│   └── index.ts                 # 전체 프로젝트 메인 export 파일
├── assets/                      # 이미지, 아이콘 등 정적 파일들
├── App.tsx                      # 앱의 메인 컴포넌트
├── package.json                 # 프로젝트 의존성 및 스크립트
├── app.json                     # Expo 앱 설정
└── tsconfig.json                # TypeScript 설정
```

## 📋 각 폴더와 파일의 역할

### 🧩 components/ - 컴포넌트 폴더

#### common/ - 공통 컴포넌트

- **Button.tsx**: 재사용 가능한 버튼 컴포넌트

  - 다양한 스타일 (primary, secondary, outline)
  - 다양한 크기 (small, medium, large)
  - 비활성화 상태 지원

- **Card.tsx**: 재사용 가능한 카드 컴포넌트

  - 그림자 효과
  - 터치 이벤트 지원
  - 커스터마이징 가능한 패딩/마진

- **Input.tsx**: 재사용 가능한 입력 필드 컴포넌트

  - 라벨, 에러 메시지 지원
  - 필수 입력 표시
  - 포커스 상태 관리

- **Loading.tsx**: 로딩 컴포넌트
  - 다양한 크기 지원
  - 오버레이 모드 지원
  - 커스터마이징 가능한 텍스트

#### ui/ - UI 전용 컴포넌트

- **Header.tsx**: 헤더 컴포넌트

  - 제목, 좌우 아이콘 지원
  - 상태바 관리
  - 안전 영역 고려

- **TabBar.tsx**: 탭바 컴포넌트
  - 가로 스크롤 지원
  - 배지 표시
  - 활성/비활성 상태 관리

### 🖥️ screens/ - 화면 컴포넌트

- **home_screen.tsx**: 홈 화면 컴포넌트
- **second_screen.tsx**: 두 번째 화면 컴포넌트

### 🛠️ utils/ - 유틸리티 함수들

#### validation.ts - 입력값 검증

- `isValidEmail()`: 이메일 형식 검증
- `isValidPhone()`: 전화번호 형식 검증
- `isValidPassword()`: 비밀번호 강도 검증
- `isEmpty()`: 빈 값 검증
- `isValidLength()`: 길이 검증
- `isNumber()`: 숫자 검증
- `isValidUrl()`: URL 형식 검증
- `isValidKoreanName()`: 한국어 이름 검증

#### format.ts - 데이터 포맷팅

- `formatKoreanDate()`: 한국어 날짜 형식
- `formatSimpleDate()`: 간단한 날짜 형식
- `formatTime12Hour()`: 12시간 형식
- `formatTime24Hour()`: 24시간 형식
- `formatNumber()`: 숫자 천 단위 구분
- `formatCurrency()`: 통화 형식
- `formatPhoneNumber()`: 전화번호 형식
- `truncateText()`: 텍스트 자르기
- `formatRelativeTime()`: 상대적 시간
- `formatFileSize()`: 파일 크기 형식

#### storage.ts - 로컬 스토리지 관리

- `storeData()`: 데이터 저장
- `getData()`: 데이터 불러오기
- `removeData()`: 데이터 삭제
- `clearAllData()`: 모든 데이터 삭제
- `getAllKeys()`: 모든 키 가져오기
- `getMultipleData()`: 여러 데이터 한 번에 가져오기
- `storeMultipleData()`: 여러 데이터 한 번에 저장
- `storeUserInfo()`: 사용자 정보 저장
- `getUserInfo()`: 사용자 정보 불러오기
- `storeAuthToken()`: 인증 토큰 저장
- `getAuthToken()`: 인증 토큰 불러오기
- `removeAuthToken()`: 인증 토큰 삭제

#### api.ts - API 통신

- `apiRequest()`: 기본 API 요청
- `apiGet()`: GET 요청
- `apiPost()`: POST 요청
- `apiPut()`: PUT 요청
- `apiDelete()`: DELETE 요청
- `apiRequestWithAuth()`: 인증이 포함된 요청
- `uploadFile()`: 파일 업로드
- `handleApiError()`: API 에러 처리

### 📝 types/ - TypeScript 타입 정의

#### common.ts - 공통 타입들

- `ApiResponse<T>`: API 응답 타입
- `PaginationInfo`: 페이지네이션 정보
- `SelectOption`: 선택 옵션
- `Coordinates`: 좌표 정보
- `Address`: 주소 정보
- `FileInfo`: 파일 정보
- `ImageInfo`: 이미지 정보
- `NotificationInfo`: 알림 정보
- `LoadingState`: 로딩 상태
- `ValidationResult`: 유효성 검사 결과
- `SortOption`: 정렬 옵션
- `FilterOption`: 필터 옵션
- `SearchOptions`: 검색 옵션
- `ThemeColors`: 테마 색상
- `AppSettings`: 앱 설정
- `NavigationParams`: 네비게이션 파라미터
- `ScreenProps`: 스크린 props
- `BaseComponentProps`: 컴포넌트 기본 props
- `ModalProps`: 모달 props
- `ListItem`: 리스트 아이템
- `TabItem`: 탭 아이템
- `MenuItem`: 메뉴 아이템

#### user.ts - 사용자 관련 타입들

- `User`: 사용자 기본 정보
- `UserProfile`: 사용자 프로필 정보
- `UserPreferences`: 사용자 선호도
- `NotificationPreferences`: 알림 선호도
- `PrivacyPreferences`: 개인정보 보호 선호도
- `UserSettings`: 사용자 설정
- `LoginRequest`: 로그인 요청
- `RegisterRequest`: 회원가입 요청
- `ChangePasswordRequest`: 비밀번호 변경 요청
- `ResetPasswordRequest`: 비밀번호 재설정 요청
- `UpdateProfileRequest`: 프로필 업데이트 요청
- `AuthTokens`: 인증 토큰
- `AuthState`: 인증 상태
- `SocialLoginRequest`: 소셜 로그인 요청
- `UserStats`: 사용자 통계
- `UserActivity`: 사용자 활동
- `UserSession`: 사용자 세션
- `UserRole`: 사용자 역할
- `UserPermission`: 사용자 권한
- `UserGroup`: 사용자 그룹

### 📊 constants/ - 상수 정의들

#### colors.ts - 색상 상수들

- `COLORS`: 기본 색상 팔레트 (primary, secondary, success, warning, error, info, neutral)
- `LIGHT_THEME`: 라이트 테마 색상
- `DARK_THEME`: 다크 테마 색상
- `STATUS_COLORS`: 상태별 색상
- `ACTION_COLORS`: 액션별 색상
- `GRADIENTS`: 그라데이션 색상

#### sizes.ts - 크기 관련 상수들

- `BASE_UNIT`: 기본 크기 단위 (8px)
- `SPACING`: 간격 상수들
- `FONT_SIZES`: 폰트 크기 상수들
- `FONT_WEIGHTS`: 폰트 두께 상수들
- `LINE_HEIGHTS`: 라인 높이 상수들
- `BORDER_RADIUS`: 테두리 반지름 상수들
- `BORDER_WIDTH`: 테두리 두께 상수들
- `SHADOW_DEPTH`: 그림자 깊이 상수들
- `COMPONENT_HEIGHTS`: 컴포넌트별 높이 상수들
- `COMPONENT_WIDTHS`: 컴포넌트별 너비 상수들
- `ICON_SIZES`: 아이콘 크기 상수들
- `AVATAR_SIZES`: 아바타 크기 상수들
- `BREAKPOINTS`: 화면 브레이크포인트 상수들
- `MAX_WIDTHS`: 최대 너비 상수들
- `MIN_HEIGHTS`: 최소 높이 상수들
- `MAX_HEIGHTS`: 최대 높이 상수들
- `ANIMATION_DURATION`: 애니메이션 지속 시간 상수들
- `ANIMATION_DELAY`: 애니메이션 지연 시간 상수들
- `Z_INDEX`: Z-Index 상수들

#### strings.ts - 문자열 상수들

- `APP_INFO`: 앱 기본 정보
- `COMMON_MESSAGES`: 공통 메시지들 (성공, 오류, 확인, 로딩, 빈 상태)
- `FORM_MESSAGES`: 폼 관련 메시지들 (필수 입력, 유효성 검사, 플레이스홀더)
- `NAVIGATION`: 네비게이션 관련 문자열들 (화면 제목, 탭 라벨, 버튼 텍스트)
- `USER_MESSAGES`: 사용자 관련 문자열들 (인증, 프로필)
- `DATE_TIME`: 날짜/시간 관련 문자열들 (형식, 상대적 시간, 요일, 월)
- `FILE_MESSAGES`: 파일 관련 문자열들 (타입, 크기, 액션)
- `PERMISSION_MESSAGES`: 권한 관련 문자열들 (요청, 거부)

### 🎣 hooks/ - 커스텀 훅들

#### useApi.ts - API 호출 훅

- `useApi<T>()`: API 호출을 위한 훅
- `useMutation<T, P>()`: POST 요청을 위한 훅
- `useInfiniteScroll<T>()`: 무한 스크롤을 위한 훅

#### useStorage.ts - 스토리지 관리 훅

- `useStorage<T>()`: 로컬 스토리지 값을 관리하는 훅
- `useUserInfo()`: 사용자 정보를 관리하는 훅
- `useAuthToken()`: 인증 토큰을 관리하는 훅
- `useAppSettings<T>()`: 앱 설정을 관리하는 훅
- `useTheme()`: 테마를 관리하는 훅
- `useLanguage()`: 언어 설정을 관리하는 훅
- `useFavorites<T>()`: 즐겨찾기 목록을 관리하는 훅
- `useSearchHistory()`: 검색 기록을 관리하는 훅

### 🌐 services/ - API 서비스들

#### api.ts - API 서비스 클래스들

- `AuthService`: 인증 관련 API 서비스

  - `login()`: 로그인
  - `register()`: 회원가입
  - `logout()`: 로그아웃
  - `refreshToken()`: 토큰 갱신
  - `forgotPassword()`: 비밀번호 찾기
  - `resetPassword()`: 비밀번호 재설정

- `UserService`: 사용자 관련 API 서비스

  - `getProfile()`: 프로필 조회
  - `updateProfile()`: 프로필 수정
  - `changePassword()`: 비밀번호 변경
  - `deleteAccount()`: 계정 삭제

- `PostService`: 게시물 관련 API 서비스

  - `getPosts()`: 게시물 목록 조회
  - `getPost()`: 게시물 상세 조회
  - `createPost()`: 게시물 생성
  - `updatePost()`: 게시물 수정
  - `deletePost()`: 게시물 삭제
  - `likePost()`: 게시물 좋아요
  - `unlikePost()`: 게시물 좋아요 취소

- `CommentService`: 댓글 관련 API 서비스

  - `getComments()`: 댓글 목록 조회
  - `createComment()`: 댓글 생성
  - `updateComment()`: 댓글 수정
  - `deleteComment()`: 댓글 삭제

- `FileService`: 파일 관련 API 서비스
  - `uploadFile()`: 파일 업로드
  - `deleteFile()`: 파일 삭제

## 🚀 사용 방법

### 1. 컴포넌트 사용하기

```typescript
import { Button, Card, Input, Loading } from '../components';

// 버튼 사용
<Button
  title="클릭하세요"
  onPress={() => console.log('버튼 클릭')}
  variant="primary"
  size="medium"
/>

// 카드 사용
<Card onPress={() => console.log('카드 클릭')}>
  <Text>카드 내용</Text>
</Card>

// 입력 필드 사용
<Input
  label="이메일"
  placeholder="이메일을 입력하세요"
  value={email}
  onChangeText={setEmail}
  required
/>
```

### 2. 유틸리티 함수 사용하기

```typescript
import { isValidEmail, formatDate, storeData, apiGet } from "../utils";

// 이메일 검증
if (isValidEmail(email)) {
  console.log("유효한 이메일입니다.");
}

// 날짜 포맷팅
const formattedDate = formatKoreanDate(new Date());

// 데이터 저장
await storeData("userInfo", userData);

// API 호출
const response = await apiGet("/api/users");
```

### 3. 상수 사용하기

```typescript
import { COLORS, SPACING, COMMON_MESSAGES } from "../constants";

// 색상 사용
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary[500],
    padding: SPACING.md,
  },
});

// 메시지 사용
Alert.alert("성공", COMMON_MESSAGES.success.save);
```

### 4. 커스텀 훅 사용하기

```typescript
import { useApi, useStorage, useUserInfo } from "../hooks";

// API 훅 사용
const { data, loading, error, refetch } = useApi(() => apiGet("/api/posts"));

// 스토리지 훅 사용
const [userInfo, setUserInfo, removeUserInfo, loading] = useUserInfo();

// 사용자 정보 훅 사용
const [user, setUser, removeUser, loading] = useUserInfo();
```

### 5. API 서비스 사용하기

```typescript
import { AuthService, UserService, PostService } from "../services";

// 로그인
const response = await AuthService.login(email, password);

// 프로필 조회
const profile = await UserService.getProfile(token);

// 게시물 목록 조회
const posts = await PostService.getPosts(token);
```

## 📚 추가 학습 자료

### 리액트 네이티브 기본 개념

- [React Native 공식 문서](https://reactnative.dev/)
- [Expo 공식 문서](https://docs.expo.dev/)

### TypeScript

- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [React Native + TypeScript 가이드](https://reactnative.dev/docs/typescript)

### 상태 관리

- [React Hooks 공식 문서](https://reactjs.org/docs/hooks-intro.html)
- [Context API](https://reactjs.org/docs/context.html)

### 네비게이션

- [React Navigation](https://reactnavigation.org/)

### 스타일링

- [StyleSheet API](https://reactnative.dev/docs/stylesheet)
- [Flexbox 가이드](https://reactnative.dev/docs/flexbox)

## 🎯 다음 단계

1. **상태 관리 라이브러리 추가**: Redux, Zustand, Jotai 등
2. **네비게이션 설정**: React Navigation 설정
3. **테스트 코드 작성**: Jest, React Native Testing Library
4. **CI/CD 설정**: GitHub Actions, Fastlane
5. **성능 최적화**: 메모이제이션, 가상화 등
6. **다국어 지원**: i18next 등
7. **푸시 알림**: Firebase Cloud Messaging
8. **분석 도구**: Firebase Analytics, Crashlytics

이 폴더 구조를 따라하면 확장 가능하고 유지보수가 쉬운 리액트 네이티브 앱을 만들 수 있습니다! 🎉
