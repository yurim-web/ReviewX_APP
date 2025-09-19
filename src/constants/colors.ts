/**
 * 앱에서 사용되는 색상 상수들
 * 일관된 디자인을 위해 모든 색상을 중앙에서 관리합니다.
 */

// 기본 색상 팔레트
export const COLORS = {
  // Primary 색상 (메인 브랜드 색상)
  primary: {
    50: "#E3F2FD", // 매우 연한 파란색
    100: "#BBDEFB", // 연한 파란색
    200: "#90CAF9", // 밝은 파란색
    300: "#64B5F6", // 중간 파란색
    400: "#42A5F5", // 파란색
    500: "#2196F3", // 기본 파란색
    600: "#1E88E5", // 진한 파란색
    700: "#1976D2", // 더 진한 파란색
    800: "#1565C0", // 매우 진한 파란색
    900: "#0D47A1", // 가장 진한 파란색
  },

  // Secondary 색상 (보조 색상)
  secondary: {
    50: "#F3E5F5", // 매우 연한 보라색
    100: "#E1BEE7", // 연한 보라색
    200: "#CE93D8", // 밝은 보라색
    300: "#BA68C8", // 중간 보라색
    400: "#AB47BC", // 보라색
    500: "#9C27B0", // 기본 보라색
    600: "#8E24AA", // 진한 보라색
    700: "#7B1FA2", // 더 진한 보라색
    800: "#6A1B9A", // 매우 진한 보라색
    900: "#4A148C", // 가장 진한 보라색
  },

  // Success 색상 (성공, 완료)
  success: {
    50: "#E8F5E8", // 매우 연한 초록색
    100: "#C8E6C9", // 연한 초록색
    200: "#A5D6A7", // 밝은 초록색
    300: "#81C784", // 중간 초록색
    400: "#66BB6A", // 초록색
    500: "#4CAF50", // 기본 초록색
    600: "#43A047", // 진한 초록색
    700: "#388E3C", // 더 진한 초록색
    800: "#2E7D32", // 매우 진한 초록색
    900: "#1B5E20", // 가장 진한 초록색
  },

  // Warning 색상 (경고, 주의)
  warning: {
    50: "#FFF8E1", // 매우 연한 노란색
    100: "#FFECB3", // 연한 노란색
    200: "#FFE082", // 밝은 노란색
    300: "#FFD54F", // 중간 노란색
    400: "#FFCA28", // 노란색
    500: "#FFC107", // 기본 노란색
    600: "#FFB300", // 진한 노란색
    700: "#FFA000", // 더 진한 노란색
    800: "#FF8F00", // 매우 진한 노란색
    900: "#FF6F00", // 가장 진한 노란색
  },

  // Error 색상 (오류, 실패)
  error: {
    50: "#FFEBEE", // 매우 연한 빨간색
    100: "#FFCDD2", // 연한 빨간색
    200: "#EF9A9A", // 밝은 빨간색
    300: "#E57373", // 중간 빨간색
    400: "#EF5350", // 빨간색
    500: "#F44336", // 기본 빨간색
    600: "#E53935", // 진한 빨간색
    700: "#D32F2F", // 더 진한 빨간색
    800: "#C62828", // 매우 진한 빨간색
    900: "#B71C1C", // 가장 진한 빨간색
  },

  // Info 색상 (정보)
  info: {
    50: "#E1F5FE", // 매우 연한 하늘색
    100: "#B3E5FC", // 연한 하늘색
    200: "#81D4FA", // 밝은 하늘색
    300: "#4FC3F7", // 중간 하늘색
    400: "#29B6F6", // 하늘색
    500: "#03A9F4", // 기본 하늘색
    600: "#039BE5", // 진한 하늘색
    700: "#0288D1", // 더 진한 하늘색
    800: "#0277BD", // 매우 진한 하늘색
    900: "#01579B", // 가장 진한 하늘색
  },

  // Neutral 색상 (중성 색상)
  neutral: {
    50: "#FAFAFA", // 매우 연한 회색
    100: "#F5F5F5", // 연한 회색
    200: "#EEEEEE", // 밝은 회색
    300: "#E0E0E0", // 중간 회색
    400: "#BDBDBD", // 회색
    500: "#9E9E9E", // 기본 회색
    600: "#757575", // 진한 회색
    700: "#616161", // 더 진한 회색
    800: "#424242", // 매우 진한 회색
    900: "#212121", // 가장 진한 회색
  },

  // 기본 색상들
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// 테마별 색상 정의
export const LIGHT_THEME = {
  // 배경 색상
  background: {
    primary: COLORS.white,
    secondary: COLORS.neutral[50],
    tertiary: COLORS.neutral[100],
  },

  // 텍스트 색상
  text: {
    primary: COLORS.neutral[900],
    secondary: COLORS.neutral[600],
    tertiary: COLORS.neutral[500],
    inverse: COLORS.white,
  },

  // 테두리 색상
  border: {
    primary: COLORS.neutral[200],
    secondary: COLORS.neutral[300],
    focus: COLORS.primary[500],
  },

  // 그림자 색상
  shadow: {
    light: "rgba(0, 0, 0, 0.1)",
    medium: "rgba(0, 0, 0, 0.2)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
};

export const DARK_THEME = {
  // 배경 색상
  background: {
    primary: COLORS.neutral[900],
    secondary: COLORS.neutral[800],
    tertiary: COLORS.neutral[700],
  },

  // 텍스트 색상
  text: {
    primary: COLORS.white,
    secondary: COLORS.neutral[300],
    tertiary: COLORS.neutral[400],
    inverse: COLORS.neutral[900],
  },

  // 테두리 색상
  border: {
    primary: COLORS.neutral[700],
    secondary: COLORS.neutral[600],
    focus: COLORS.primary[400],
  },

  // 그림자 색상
  shadow: {
    light: "rgba(255, 255, 255, 0.1)",
    medium: "rgba(255, 255, 255, 0.2)",
    dark: "rgba(255, 255, 255, 0.3)",
  },
};

// 상태별 색상
export const STATUS_COLORS = {
  online: COLORS.success[500],
  offline: COLORS.neutral[500],
  away: COLORS.warning[500],
  busy: COLORS.error[500],
  pending: COLORS.warning[500],
  approved: COLORS.success[500],
  rejected: COLORS.error[500],
  draft: COLORS.neutral[500],
  published: COLORS.success[500],
  archived: COLORS.neutral[600],
};

// 액션별 색상
export const ACTION_COLORS = {
  primary: COLORS.primary[500],
  secondary: COLORS.secondary[500],
  success: COLORS.success[500],
  warning: COLORS.warning[500],
  error: COLORS.error[500],
  info: COLORS.info[500],
  neutral: COLORS.neutral[500],
};

// 그라데이션 색상
export const GRADIENTS = {
  primary: [COLORS.primary[400], COLORS.primary[600]],
  secondary: [COLORS.secondary[400], COLORS.secondary[600]],
  success: [COLORS.success[400], COLORS.success[600]],
  warning: [COLORS.warning[400], COLORS.warning[600]],
  error: [COLORS.error[400], COLORS.error[600]],
  sunset: ["#FF6B6B", "#FFE66D"],
  ocean: ["#667eea", "#764ba2"],
  forest: ["#134E5E", "#71B280"],
  fire: ["#FF416C", "#FF4B2B"],
};
