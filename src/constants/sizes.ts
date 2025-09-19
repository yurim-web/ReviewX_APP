/**
 * 앱에서 사용되는 크기 관련 상수들
 * 일관된 레이아웃을 위해 모든 크기를 중앙에서 관리합니다.
 */

// 기본 크기 단위 (8px 기준)
export const BASE_UNIT = 8;

// 간격 (Spacing) 상수들
export const SPACING = {
  xs: BASE_UNIT * 0.5, // 4px
  sm: BASE_UNIT * 1, // 8px
  md: BASE_UNIT * 2, // 16px
  lg: BASE_UNIT * 3, // 24px
  xl: BASE_UNIT * 4, // 32px
  xxl: BASE_UNIT * 6, // 48px
  xxxl: BASE_UNIT * 8, // 64px
};

// 폰트 크기 상수들
export const FONT_SIZES = {
  xs: 12, // 매우 작은 텍스트
  sm: 14, // 작은 텍스트
  base: 16, // 기본 텍스트 (fonts.ts 호환성)
  md: 16, // 기본 텍스트
  lg: 18, // 큰 텍스트
  xl: 20, // 매우 큰 텍스트
  "2xl": 24, // 제목 텍스트 (fonts.ts 호환성)
  xxl: 24, // 제목 텍스트
  "3xl": 30, // 큰 제목 텍스트 (fonts.ts 호환성)
  xxxl: 32, // 큰 제목 텍스트
  "4xl": 36, // 큰 제목 텍스트 (fonts.ts 호환성)
  "5xl": 48, // 디스플레이 텍스트 (fonts.ts 호환성)
  display: 48, // 디스플레이 텍스트
};

// 폰트 두께 상수들
export const FONT_WEIGHTS = {
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600", // fonts.ts 호환성
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

// 라인 높이 상수들
export const LINE_HEIGHTS = {
  tight: 1.2, // 타이트한 줄 간격
  normal: 1.4, // 기본 줄 간격
  relaxed: 1.6, // 여유로운 줄 간격
  loose: 1.8, // 매우 여유로운 줄 간격
};

// 테두리 반지름 상수들
export const BORDER_RADIUS = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  full: 9999, // 완전한 원형
};

// 테두리 두께 상수들
export const BORDER_WIDTH = {
  none: 0,
  thin: 0.5,
  normal: 1,
  thick: 2,
  extra: 4,
};

// 그림자 깊이 상수들
export const SHADOW_DEPTH = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
  },
};

// 컴포넌트별 높이 상수들
export const COMPONENT_HEIGHTS = {
  button: {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
  },
  input: {
    sm: 32,
    md: 40,
    lg: 48,
  },
  header: {
    sm: 48,
    md: 56,
    lg: 64,
  },
  tabBar: 48,
  bottomTabBar: 60,
  statusBar: 24,
  navigationBar: 48,
};

// 컴포넌트별 너비 상수들
export const COMPONENT_WIDTHS = {
  button: {
    sm: 80,
    md: 120,
    lg: 160,
    xl: 200,
  },
  card: {
    sm: 200,
    md: 300,
    lg: 400,
  },
  modal: {
    sm: 300,
    md: 400,
    lg: 500,
    full: "100%",
  },
};

// 아이콘 크기 상수들
export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};

// 아바타 크기 상수들
export const AVATAR_SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  xxl: 80,
  xxxl: 96,
};

// 화면 브레이크포인트 상수들 (웹용)
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// 최대 너비 상수들
export const MAX_WIDTHS = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  full: "100%",
};

// 최소 높이 상수들
export const MIN_HEIGHTS = {
  screen: 600,
  section: 200,
  card: 100,
  button: 32,
  input: 32,
};

// 최대 높이 상수들
export const MAX_HEIGHTS = {
  screen: "100%",
  modal: "90%",
  dropdown: 300,
  list: 400,
  image: 300,
};

// 애니메이션 지속 시간 상수들
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
};

// 애니메이션 지연 시간 상수들
export const ANIMATION_DELAY = {
  none: 0,
  short: 100,
  medium: 200,
  long: 300,
};

// Z-Index 상수들 (레이어 순서)
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
};
