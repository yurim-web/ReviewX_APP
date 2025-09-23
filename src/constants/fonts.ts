/**
 * 폰트 관련 상수들을 정의하는 파일
 * 프리텐다드 폰트 패밀리를 사용합니다.
 */

import { Platform } from "react-native";

// 🎨 프리텐다드 폰트 패밀리
// App.tsx의 useFonts에서 정의한 이름과 정확히 일치해야 함
export const FONTS = {
  // 프리텐다드 폰트 패밀리
  regular: "Pretendard-Regular",
  medium: "Pretendard-Medium",
  semiBold: "Pretendard-SemiBold",
  bold: "Pretendard-Bold",
  light: "Pretendard-Light",
  extraLight: "Pretendard-ExtraLight",
  extraBold: "Pretendard-ExtraBold",
  black: "Pretendard-Black",
  thin: "Pretendard-Thin",

  // 대체 폰트 (프리텐다드가 없을 경우)
  fallback: {
    regular:
      Platform.select({
        ios: "System",
        android: "Roboto",
        default: "System",
      }) || "System",
    medium:
      Platform.select({
        ios: "System",
        android: "Roboto",
        default: "System",
      }) || "System",
    semiBold:
      Platform.select({
        ios: "System",
        android: "Roboto",
        default: "System",
      }) || "System",
    bold:
      Platform.select({
        ios: "System",
        android: "Roboto",
        default: "System",
      }) || "System",
  },
} as const;

// 🎨 폰트 크기
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
} as const;

// 🎨 폰트 두께
export const FONT_WEIGHTS = {
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

// 🎨 미리 정의된 텍스트 스타일
export const TEXT_STYLES = {
  // 헤더 텍스트
  header: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES["2xl"],
    fontWeight: FONT_WEIGHTS.bold,
  },

  // 제목 텍스트
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semiBold,
  },

  // 본문 텍스트
  body: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.normal,
  },

  // 작은 텍스트
  caption: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.normal,
  },

  // 버튼 텍스트
  button: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
  },
} as const;
