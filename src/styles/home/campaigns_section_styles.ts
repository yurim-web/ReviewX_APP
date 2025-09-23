import { StyleSheet, Dimensions } from "react-native";
import { FONTS, FONT_SIZES } from "../../constants";

const { width } = Dimensions.get("window");

export const campaigns_section_styles = StyleSheet.create({
  // 섹션 제목 스타일
  section_title: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: "#333333",
    paddingBottom: 16,
    paddingTop: 24,
  },

  // 캠페인 그리드 스타일 (FlatList용)
  campaigns_grid: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },

  // 캠페인 행 스타일 (FlatList의 columnWrapperStyle용)
  campaigns_row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // 캠페인 카드 스타일
  campaign_card: {
    flexBasis: "48%", // 각 카드가 2열로 배치되도록 기준 너비
    minWidth: "45%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  // 카드 이미지 스타일
  card_image_container: {
    aspectRatio: 1, // 정사각형 비율
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "relative", // 배지 절대 위치를 위한 relative
  },
  product_image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },

  // n일 전 배지 스타일
  days_ago_badge_container: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  days_ago_badge: {
    backgroundColor: "#D90074",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,

    alignItems: "center",
  },
  days_ago_text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: FONTS.medium,
    lineHeight: 13,
    letterSpacing: -0.28,
  },

  // 오버레이 스타일
  overlay_container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 검정 투명 배경
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  overlay_content: {
    position: "absolute",
    top: 20,
    left: 20,
    gap: 1,
  },
  overlay_date: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: FONTS.semiBold,
    lineHeight: 22,
  },
  overlay_status: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: FONTS.semiBold,
    lineHeight: 22,
  },

  // 카드 콘텐츠 스타일
  card_content: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  category_badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  //   카테고리 아이콘
  category_logo: {
    width: 16,
    height: 16,
  },

  // 카테고리 텍스트
  category_text: {
    color: "#333333",
    fontSize: 14,
    fontFamily: FONTS.medium,
    fontWeight: "500",
    lineHeight: 14,
    letterSpacing: -0.02,
  },

  // 상품 제목
  product_title: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: "#333333",
    lineHeight: 20,
  },
  recruitment_info_container: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },

  //   구분자 /
  recruitment_info_separator: {
    color: "#848484",
    fontFamily: FONTS.medium,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.02,
  },

  //   현재 신청한 인원수
  recruitment_info: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.02,
    fontFamily: FONTS.medium,
    color: "#444444",
  },

  //   전체 모집 인원수
  recruitment_info_total: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.02,
    fontFamily: FONTS.medium,
    color: "#848484",
  },
});
