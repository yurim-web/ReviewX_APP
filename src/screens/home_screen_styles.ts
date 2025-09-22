import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const home_screen_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  // 네비게이션 스타일
  nav_container: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  nav_scroll: {
    paddingHorizontal: 15,
  },
  nav_tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  nav_tab_active: {
    backgroundColor: "#FF69B4",
  },
  nav_text: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  nav_text_active: {
    color: "white",
    fontWeight: "bold",
  },

  // 콘텐츠 스타일
  content: {
    flex: 1,
  },

  // 생일 배너 스타일
  birthday_banner: {
    margin: 15,
    borderRadius: 15,
    padding: 25,
    minHeight: 180,
    position: "relative",
    overflow: "hidden",
  },
  banner_content: {
    alignItems: "center",
    zIndex: 2,
  },
  birthday_text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  birthday_text_bottom: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#87CEEB",
    marginBottom: 15,
  },
  banner_description: {
    fontSize: 12,
    color: "#f0f0f0",
    textAlign: "center",
    lineHeight: 16,
    maxWidth: "80%",
  },
  banner_decorations: {
    position: "absolute",
    top: 10,
    right: 15,
    zIndex: 1,
  },
  cake: {
    fontSize: 40,
    position: "absolute",
    top: 20,
    right: 0,
  },
  confetti: {
    fontSize: 25,
    position: "absolute",
    top: 0,
    left: -10,
  },
  balloon: {
    fontSize: 30,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  cake_image: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 20,
    right: 0,
    borderRadius: 30,
  },
  confetti_image: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 0,
    left: -10,
    borderRadius: 20,
  },
  balloon_image: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 25,
  },

  // 섹션 제목 스타일
  section_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 15,
    marginBottom: 15,
  },

  // 캠페인 그리드 스타일
  campaigns_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  campaign_card: {
    width: (width - 45) / 2,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  card_header: {
    position: "relative",
    height: 40,
  },
  date_badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#333",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  date_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  status_text: {
    color: "white",
    fontSize: 8,
  },
  time_badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#FF69B4",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  time_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  closed_badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  closed_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  urgent_badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  urgent_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },

  // 카드 이미지 스타일
  card_image_container: {
    height: 120,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  product_image: {
    width: "100%",
    height: "100%",
  },
  product_emoji: {
    fontSize: 40,
  },
  seafood_emoji: {
    fontSize: 40,
  },
  tumbler_emoji: {
    fontSize: 40,
  },

  // 카드 콘텐츠 스타일
  card_content: {
    padding: 12,
  },
  category_container: {
    marginBottom: 8,
  },
  category_badge_green: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  category_badge_orange: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  category_text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  product_title: {
    fontSize: 12,
    color: "#333",
    lineHeight: 16,
    marginBottom: 8,
  },
  recruitment_info: {
    fontSize: 11,
    color: "#666",
    marginBottom: 4,
  },
  special_text: {
    fontSize: 11,
    color: "#FF69B4",
    fontWeight: "bold",
  },
});
