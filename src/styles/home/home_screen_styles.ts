import { StyleSheet, Dimensions } from "react-native";
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from "../../constants";

const { width } = Dimensions.get("window");

export const home_screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // 네비게이션 스타일은 별도 파일로 분리됨 (top_navigation_styles.ts)

  // 콘텐츠 스타일
  content: {
    flex: 1,
  },

  // 홈 화면 전체 콘텐츠 박스 스타일
  home_content_container: {
    flex: 1,
    backgroundColor: "white",
  },

  // 메인 배너 이미지 스타일
  banner_image: {
    width: "100%",
    height: 180,
    borderRadius: 4,
  },
});
