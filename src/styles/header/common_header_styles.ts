// 헤더 전용 스타일 코드

import { StyleSheet } from "react-native";
import { FONTS, FONT_SIZES } from "../../constants";

export const common_header_styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 28, // 위아래 15
    paddingHorizontal: 32, // 양옆 20
    height: 80,
  },
  logo_container: {
    // 로고 컨테이너 스타일 (필요시 추가)
  },

  // rx 로고 스타일
  logo: {
    fontSize: 28,
    fontWeight: 700,
    color: "#fff",
    lineHeight: 24,
    fontFamily: FONTS.bold,
  },
  header_icons: {
    flexDirection: "row",
    gap: 16,
  },
});
