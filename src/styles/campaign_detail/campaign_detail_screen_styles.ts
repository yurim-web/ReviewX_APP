import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const campaign_detail_screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // 스크롤뷰 스타일
  scroll_container: {
    flex: 1,
  },
  scroll_content: {
    paddingBottom: 24,
    paddingTop: 40,
  },

  // 헤더 정보 섹션
  header_info_container: {
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  category_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  // 카테고리 로고 스타일
  category_logo: {
    width: 24,
    height: 24,
  },
  category_logo_image: {
    width: 24,
    height: 24,
  },

  // 첫 번째 배지
  category_badge: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d90074",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
  },
  category_badge_text: {
    color: "#d90074",
    fontSize: 13,
    fontFamily: "Pretendard-Medium",
    lineHeight: 13,
    letterSpacing: -0.28,
  },

  // 두 번째 배지
  subcategory_badge: {
    backgroundColor: "rgba(255, 174, 0, .2)",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "rgba(255, 174, 0, .2)",
    borderWidth: 1,
  },
  subcategory_badge_text: {
    color: "#444",
    fontSize: 13,
    fontFamily: "Pretendard-Medium",
    lineHeight: 13,
    letterSpacing: -0.28,
  },

  // 포인트 컨테이너
  points_container: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "#d90074",
    borderWidth: 1,
  },

  // 포인트 값
  points_value: {
    fontSize: 13,
    fontFamily: "Pretendard-Medium",
    lineHeight: 13,
    letterSpacing: -0.28,
    color: "#d90074",
  },

  // 캠페인 주요 정보 섹션
  campaign_info_container: {
    padding: 20,
  },

  // 상품 제목
  campaign_title: {
    fontSize: 24,
    fontFamily: "Pretendard-semibold",
    color: "#333",
    marginBottom: 12,
    lineHeight: 30,
    letterSpacing: -0.4,
  },

  // 캠페인 세부정보 텍스트
  campaign_description: {
    fontSize: 13,
    fontFamily: "Pretendard-medium",
    color: "#555",
    lineHeight: 18,
    marginBottom: 24,
    letterSpacing: -0.28,
  },

  // 이미지부분
  main_image_container: {
    borderRadius: 4,
    marginBottom: 24,
    alignItems: "center",
    width: "100%",
    height: 400,
  },
  main_image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },

  // 모집 정보 섹션 (기존 컨테이너)
  recruitment_section_container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 24,
  },

  // 모집정보 가로칸
  recruitment_info_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 모집 정보 컨테이너
  recruitment_info_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // 모집 수 (현재 신청자)
  recruitment_current: {
    fontSize: 15,
    color: "#333",
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-semiBold",
  },

  // 모집 구분자 (/)
  recruitment_separator: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-medium",
    color: "#848484",
    marginHorizontal: 4,
  },
  // 모집 전체 수
  recruitment_total: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-medium",
    color: "#848484",
  },
  // 정보 제목?
  recruitment_label: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-semiBold",
    color: "#333333",
  },

  // 정보 값
  recruitment_value: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.32,
    fontFamily: "Pretendard-medium",
    color: "#333333",
  },

  recruitment_value_regular: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.32,
    fontFamily: "Pretendard-semiBold",
    color: "#333333",
  },

  // 버튼 스타일
  apply_button: {
    backgroundColor: "#d90074",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
    cursor: "pointer",
  },

  // 버튼 속 텍스트 스타일
  apply_button_text: {
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 16,
    fontFamily: "Pretendard-Bold",
    color: "#ffffff",
  },

  // 캠페인 정보 글자 칸
  campaign_info_text_container: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#d90074",
    paddingBottom: 20,
  },
  // 캠페인 정보 글자 스타일
  campaign_info_text: {
    fontSize: 18,
    fontFamily: "Pretendard-semiBold",
    color: "#d90074",
    textAlign: "center",
    letterSpacing: -0.36,
    lineHeight: 18,
  },

  // 제품 상세 정보 섹션
  product_detail_container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  product_image_container: {
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    height: 150,
  },
  product_image: {
    width: screenWidth - 80,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 12,
  },
  product_description: {
    fontSize: 12,
    fontFamily: "Pretendard-Regular",
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
  },
  expand_button: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  expand_button_text: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: "#333",
  },
  product_description_text: {
    fontSize: 14,
    fontFamily: "Pretendard-Regular",
    color: "#666",
    marginBottom: 16,
    lineHeight: 20,
  },
  keyword_input_container: {
    marginBottom: 16,
  },
  keyword_label: {
    fontSize: 14,
    fontFamily: "Pretendard-SemiBold",
    color: "#333",
    marginBottom: 8,
  },
  keyword_input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    fontFamily: "Pretendard-Regular",
  },

  // 안내 사항 섹션
  guidelines_container: {
    padding: 20,
  },
  guidelines_title: {
    fontSize: 18,
    fontFamily: "Pretendard-Bold",
    color: "#333",
    marginBottom: 16,
  },
  guidelines_icons_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  guideline_item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  guideline_icon: {
    marginRight: 4,
    fontSize: 16,
  },
  guideline_text: {
    fontSize: 12,
    fontFamily: "Pretendard-Medium",
    color: "#333",
  },
  guidelines_list_container: {
    marginBottom: 20,
  },
  guideline_list_item: {
    flexDirection: "row",
    marginBottom: 8,
    paddingLeft: 8,
  },
  guideline_bullet: {
    fontSize: 12,
    color: "#666",
    marginRight: 8,
    marginTop: 2,
  },
  guideline_list_text: {
    fontSize: 12,
    fontFamily: "Pretendard-Regular",
    color: "#666",
    lineHeight: 18,
    flex: 1,
  },

  // 추가 안내 사항 섹션
  additional_guidelines_container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  additional_guidelines_title: {
    fontSize: 18,
    fontFamily: "Pretendard-Bold",
    color: "#333",
    marginBottom: 16,
  },
  additional_guidelines_list_container: {
    // 추가 안내 사항 리스트 컨테이너
  },
});
