/**
 * 앱에서 사용되는 문자열 상수들
 * 다국어 지원과 일관된 메시지를 위해 모든 문자열을 중앙에서 관리합니다.
 */

// 앱 기본 정보
export const APP_INFO = {
  name: "ReviewApp",
  version: "1.0.0",
  description: "리뷰 앱입니다.",
  author: "Your Name",
  website: "https://yourapp.com",
  supportEmail: "support@yourapp.com",
};

// 공통 메시지들
export const COMMON_MESSAGES = {
  // 성공 메시지
  success: {
    save: "저장되었습니다.",
    update: "수정되었습니다.",
    delete: "삭제되었습니다.",
    create: "생성되었습니다.",
    upload: "업로드되었습니다.",
    download: "다운로드되었습니다.",
    copy: "복사되었습니다.",
    send: "전송되었습니다.",
  },

  // 오류 메시지
  error: {
    general: "오류가 발생했습니다.",
    network: "네트워크 연결을 확인해주세요.",
    server: "서버 오류가 발생했습니다.",
    notFound: "요청한 정보를 찾을 수 없습니다.",
    unauthorized: "인증이 필요합니다.",
    forbidden: "접근 권한이 없습니다.",
    validation: "입력 정보를 확인해주세요.",
    timeout: "요청 시간이 초과되었습니다.",
    unknown: "알 수 없는 오류가 발생했습니다.",
  },

  // 확인 메시지
  confirm: {
    delete: "정말 삭제하시겠습니까?",
    logout: "정말 로그아웃하시겠습니까?",
    reset: "정말 초기화하시겠습니까?",
    cancel: "정말 취소하시겠습니까?",
    save: "저장하시겠습니까?",
    exit: "정말 종료하시겠습니까?",
  },

  // 로딩 메시지
  loading: {
    general: "로딩 중...",
    saving: "저장 중...",
    uploading: "업로드 중...",
    downloading: "다운로드 중...",
    processing: "처리 중...",
    searching: "검색 중...",
    connecting: "연결 중...",
  },

  // 빈 상태 메시지
  empty: {
    noData: "데이터가 없습니다.",
    noResults: "검색 결과가 없습니다.",
    noItems: "항목이 없습니다.",
    noPosts: "게시물이 없습니다.",
    noComments: "댓글이 없습니다.",
    noNotifications: "알림이 없습니다.",
    noHistory: "기록이 없습니다.",
  },
};

// 폼 관련 메시지들
export const FORM_MESSAGES = {
  // 필수 입력
  required: "필수 입력 항목입니다.",

  // 유효성 검사
  validation: {
    email: "올바른 이메일 형식이 아닙니다.",
    phone: "올바른 전화번호 형식이 아닙니다.",
    password: "비밀번호는 8자 이상이어야 합니다.",
    passwordMatch: "비밀번호가 일치하지 않습니다.",
    minLength: (min: number) => `최소 ${min}자 이상 입력해주세요.`,
    maxLength: (max: number) => `최대 ${max}자까지 입력 가능합니다.`,
    minValue: (min: number) => `최소값은 ${min}입니다.`,
    maxValue: (max: number) => `최대값은 ${max}입니다.`,
    url: "올바른 URL 형식이 아닙니다.",
    number: "숫자만 입력 가능합니다.",
    integer: "정수만 입력 가능합니다.",
    positive: "양수만 입력 가능합니다.",
  },

  // 플레이스홀더
  placeholder: {
    email: "이메일을 입력하세요",
    password: "비밀번호를 입력하세요",
    confirmPassword: "비밀번호를 다시 입력하세요",
    name: "이름을 입력하세요",
    phone: "전화번호를 입력하세요",
    search: "검색어를 입력하세요",
    message: "메시지를 입력하세요",
    comment: "댓글을 입력하세요",
    title: "제목을 입력하세요",
    description: "설명을 입력하세요",
  },
};

// 네비게이션 관련 문자열들
export const NAVIGATION = {
  // 화면 제목
  titles: {
    home: "홈",
    profile: "프로필",
    settings: "설정",
    search: "검색",
    notifications: "알림",
    messages: "메시지",
    about: "정보",
    help: "도움말",
    privacy: "개인정보처리방침",
    terms: "이용약관",
  },

  // 탭 라벨
  tabs: {
    home: "홈",
    search: "검색",
    profile: "프로필",
    settings: "설정",
    notifications: "알림",
  },

  // 버튼 텍스트
  buttons: {
    back: "뒤로",
    next: "다음",
    done: "완료",
    cancel: "취소",
    save: "저장",
    edit: "수정",
    delete: "삭제",
    add: "추가",
    create: "생성",
    update: "업데이트",
    refresh: "새로고침",
    retry: "다시 시도",
    close: "닫기",
    confirm: "확인",
    yes: "예",
    no: "아니오",
    ok: "확인",
  },
};

// 사용자 관련 문자열들
export const USER_MESSAGES = {
  // 인증
  auth: {
    login: "로그인",
    logout: "로그아웃",
    register: "회원가입",
    forgotPassword: "비밀번호 찾기",
    resetPassword: "비밀번호 재설정",
    changePassword: "비밀번호 변경",
    emailVerification: "이메일 인증",
    phoneVerification: "전화번호 인증",
  },

  // 프로필
  profile: {
    edit: "프로필 수정",
    view: "프로필 보기",
    settings: "프로필 설정",
    privacy: "프라이버시 설정",
    notifications: "알림 설정",
    account: "계정 관리",
    delete: "계정 삭제",
  },
};

// 날짜/시간 관련 문자열들
export const DATE_TIME = {
  // 날짜 형식
  formats: {
    short: "MM/dd/yyyy",
    long: "MMMM dd, yyyy",
    korean: "yyyy년 MM월 dd일",
    time: "HH:mm",
    datetime: "MM/dd/yyyy HH:mm",
  },

  // 상대적 시간
  relative: {
    now: "방금 전",
    minutesAgo: (minutes: number) => `${minutes}분 전`,
    hoursAgo: (hours: number) => `${hours}시간 전`,
    daysAgo: (days: number) => `${days}일 전`,
    weeksAgo: (weeks: number) => `${weeks}주 전`,
    monthsAgo: (months: number) => `${months}개월 전`,
    yearsAgo: (years: number) => `${years}년 전`,
  },

  // 요일
  weekdays: {
    short: ["일", "월", "화", "수", "목", "금", "토"],
    long: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
  },

  // 월
  months: {
    short: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    long: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
  },
};

// 파일 관련 문자열들
export const FILE_MESSAGES = {
  // 파일 타입
  types: {
    image: "이미지",
    video: "비디오",
    audio: "오디오",
    document: "문서",
    archive: "압축파일",
    other: "기타",
  },

  // 파일 크기
  sizes: {
    bytes: "바이트",
    kb: "KB",
    mb: "MB",
    gb: "GB",
    tb: "TB",
  },

  // 파일 액션
  actions: {
    upload: "업로드",
    download: "다운로드",
    delete: "삭제",
    rename: "이름 변경",
    move: "이동",
    copy: "복사",
    share: "공유",
  },
};

// 권한 관련 문자열들
export const PERMISSION_MESSAGES = {
  // 권한 요청
  request: {
    camera: "카메라 접근 권한이 필요합니다.",
    photo: "사진 라이브러리 접근 권한이 필요합니다.",
    location: "위치 접근 권한이 필요합니다.",
    microphone: "마이크 접근 권한이 필요합니다.",
    notification: "알림 권한이 필요합니다.",
    contacts: "연락처 접근 권한이 필요합니다.",
    calendar: "캘린더 접근 권한이 필요합니다.",
  },

  // 권한 거부
  denied: {
    camera: "카메라 접근이 거부되었습니다.",
    photo: "사진 라이브러리 접근이 거부되었습니다.",
    location: "위치 접근이 거부되었습니다.",
    microphone: "마이크 접근이 거부되었습니다.",
    notification: "알림이 거부되었습니다.",
    contacts: "연락처 접근이 거부되었습니다.",
    calendar: "캘린더 접근이 거부되었습니다.",
  },
};
