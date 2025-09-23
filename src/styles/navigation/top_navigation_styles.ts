// 상단 네비게이션 스타일 코드

import { StyleSheet } from "react-native";
import { FONTS, FONT_SIZES } from "../../constants";

export const top_navigation_styles = StyleSheet.create({
  // 네비게이션 컨테이너
  nav_container: {
    backgroundColor: "white",
    // 패딩 위아래
    paddingVertical: 20,
    // 패딩양옆
    paddingHorizontal: 24,
    // 밑에 선?
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  // 네비게이션 탭 컨테이너 (space-between 레이아웃)
  nav_scroll: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 네비게이션 탭
  nav_tab: {
    alignItems: "center",
  },

  // 네비게이션 텍스트
  nav_text: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: "#848484",
    fontWeight: "500",
  },

  // 활성화된 네비게이션 텍스트
  nav_text_active: {
    color: "#D90074", // 활성화된 탭의 글자색
  },
});
