import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const campaign_detail_screen_styles = StyleSheet.create({
  // ===== 전체 컨테이너 =====
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // ===== 스크롤뷰 관련 =====
  scroll_container: {
    flex: 1,
  },
  scroll_content: {
    paddingBottom: 24,
    paddingTop: 40,
  },

  // ===== 헤더 정보 섹션 (상단 카테고리, 포인트) =====
  header_info_container: {
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 카테고리 영역 (왼쪽)
  category_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  // 카테고리 로고
  category_logo: {
    width: 24,
    height: 24,
  },
  category_logo_image: {
    width: 24,
    height: 24,
  },

  // 첫 번째 배지 (카테고리)
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

  // 두 번째 배지 (서브카테고리)
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

  // 포인트 영역 (오른쪽)
  points_container: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "#d90074",
    borderWidth: 1,
  },
  points_value: {
    fontSize: 13,
    fontFamily: "Pretendard-Medium",
    lineHeight: 13,
    letterSpacing: -0.28,
    color: "#d90074",
  },

  // ===== 캠페인 주요 정보 섹션 =====
  campaign_info_container: {
    padding: 20,
  },

  // 캠페인 제목
  campaign_title: {
    fontSize: 24,
    fontFamily: "Pretendard-semibold",
    color: "#333",
    marginBottom: 12,
    lineHeight: 30,
    letterSpacing: -0.4,
  },

  // 캠페인 설명
  campaign_description: {
    fontSize: 13,
    fontFamily: "Pretendard-medium",
    color: "#555",
    lineHeight: 18,
    marginBottom: 24,
    letterSpacing: -0.28,
  },

  // 메인 이미지
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

  // ===== 모집 정보 섹션 =====
  recruitment_section_container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 24,
  },

  // 모집 정보 각 행
  recruitment_info_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 모집 인원수 컨테이너
  recruitment_info_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // 현재 모집 인원
  recruitment_current: {
    fontSize: 15,
    color: "#333",
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-semiBold",
  },

  // 모집 인원 구분자 (/)
  recruitment_separator: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-medium",
    color: "#848484",
    marginHorizontal: 4,
  },

  // 전체 모집 인원
  recruitment_total: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-medium",
    color: "#848484",
  },

  // 모집 정보 라벨 (왼쪽 텍스트)
  recruitment_label: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.3,
    fontFamily: "Pretendard-semiBold",
    color: "#333333",
  },

  // 모집 정보 값 (일반 스타일)
  recruitment_value_regular: {
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: -0.32,
    fontFamily: "Pretendard-semiBold",
    color: "#333333",
  },

  // ===== 신청하기 버튼 =====
  apply_button: {
    backgroundColor: "#d90074",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
    cursor: "pointer",
  },
  apply_button_text: {
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 16,
    fontFamily: "Pretendard-Bold",
    color: "#ffffff",
  },

  // ===== 캠페인 정보 구분선 =====
  campaign_info_text_container: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#d90074",
    paddingBottom: 20,
  },
  campaign_info_text: {
    fontSize: 18,
    fontFamily: "Pretendard-semiBold",
    color: "#d90074",
    textAlign: "center",
    letterSpacing: -0.36,
    lineHeight: 18,
  },

  // ===== 제품 상세 정보 섹션 =====
  product_detail_container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  // 제품 이미지 컨테이너
  product_image_container: {
    alignItems: "center",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },

  // 제품 이미지 (기본)
  product_image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  // 제품 이미지 (확장됨)
  product_image_expanded: {
    height: 500,
  },

  // ===== 이미지 펼치기 버튼 =====
  expand_button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 27,
    paddingVertical: 14,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },
  expand_button_overlay: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    backgroundColor: "#ffffff",
    paddingHorizontal: 27,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },
  expand_button_text: {
    fontSize: 16,
    fontFamily: "Pretendard-Medium",
    color: "#333",
    lineHeight: 16,
    letterSpacing: -0.36,
  },
  // ===== 캠페인 정보보 섹션(전체 컨테이너) =====
  provided_details_container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  // ===== info 기본 컨테이너 속성들 =====
  info_container: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, .1)",
  },
  // 제목
  info_title: {
    color: "#333",
    fontSize: 16,
    fontFamily: "Pretendard-semiBold",
    lineHeight: 20,
    letterSpacing: -0.32,
    paddingBottom: 12,
  },

  // 값
  info_value: {
    color: "#444",
    letterSpacing: -0.28,
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    lineHeight: 22,
  },

  // ===== 안내 사항 영역 =====

  // 안내 사항 아이콘들 컨테이너
  guidelines_icons_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  guideline_item: {
    flexDirection: "column",
    alignItems: "center",
  },

  guideline_icon_container: {
    marginBottom: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  // 아이콘 크기!
  guideline_icon: {
    width: 32,
    height: 32,
  },

  // 아이콘 밑에 텍스트
  guideline_text: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.28,
    fontFamily: "Pretendard-Medium",
    color: "#444",
    textAlign: "center",
  },

  // ===== 키워드 헤더 =====
  keyword_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  // ===== 복사 버튼 =====
  copy_button: {
    backgroundColor: "rgba(217, 0, 116, .1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
  },
  // 버튼 속 글자
  copy_button_text: {
    color: "#d90074",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.28,
    fontFamily: "Pretendard-Medium",
    fontWeight: "500",
  },

  // ===== 추가 안내 사항 섹션 =====
  add_value_text: {
    color: "#848484",
    letterSpacing: -0.24,
    fontSize: 12,
    fontFamily: "Pretendard-Medium",
    lineHeight: 20,
  },

  // ===== 그라데이션 오버레이 =====
  gradient_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    zIndex: 1,
  },
});
