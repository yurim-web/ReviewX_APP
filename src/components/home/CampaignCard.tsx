import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { campaigns_section_styles as styles } from "../../styles/home/campaigns_section_styles";

interface CampaignCardProps {
  // 카드 데이터 타입 정의 (웹 버전 데이터 구조)
  id: string;
  title: string;
  category: string;
  categoryIcon: string; // 카테고리 아이콘 경로
  image: string | any; // 캠페인 이미지 경로 (URL 문자열 또는 require 객체)
  subcategory: string; // 서브카테고리
  points: number; // 지급 포인트
  description: string; // 캠페인 설명
  recruitment: {
    current: number; // 현재 모집된 인원수
    total: number; // 전체 모집 인원수
  };
  dayCount: string; // 남은 일수 (예: "마감임박", "3일")
  overlay?: {
    date: string; // 오버레이 날짜 (예: "1/25 (화) 10:00")
    status: string; // 오버레이 상태 (예: "모집 오픈", "모집 마감")
  };
  onPress?: () => void; // 카드 클릭 이벤트 핸들러
}

export default function CampaignCard({
  title,
  category,
  categoryIcon,
  image,
  subcategory,
  points,
  description,
  recruitment,
  dayCount,
  overlay,
  onPress,
}: CampaignCardProps) {
  // 카테고리 아이콘 PNG 파일 반환 (categoryIcon 경로에서 매핑)
  const getCategoryIcon = (categoryIconPath: string) => {
    // 경로에서 아이콘 이름 추출
    const iconName =
      categoryIconPath.split("/").pop()?.replace(".svg", "") || "navershop";

    switch (iconName) {
      case "navershop":
        return require("../../../assets/images/category_logo/navershop_icon.png");
      case "kakaopre":
        return require("../../../assets/images/category_logo/kakaopre_icon.png");
      case "oliveyoung":
        return require("../../../assets/images/category_logo/oliveyoung_icon.png");
      case "coupang":
        return require("../../../assets/images/category_logo/coupang_icon.png");
      case "insta":
      case "instagram":
        return require("../../../assets/images/category_logo/instagram_icon.png");
      case "naverblog":
        return require("../../../assets/images/category_logo/naverblog_icon.png");
      case "todayhouse":
        return require("../../../assets/images/category_logo/todayhouse_icon.png");
      case "youtube":
        return require("../../../assets/images/category_logo/youtube_icon.png");
      default:
        return require("../../../assets/images/category_logo/navershop_icon.png");
    }
  };

  return (
    <TouchableOpacity
      style={styles.campaign_card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* 카드 이미지 영역 */}
      <View style={styles.card_image_container}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.product_image}
          resizeMode="cover"
        />
        {/* 오버레이 (검정 투명 박스) */}
        {overlay && (
          <View style={styles.overlay_container}>
            <View style={styles.overlay_content}>
              <Text style={styles.overlay_date}>{overlay.date}</Text>
              <Text style={styles.overlay_status}>{overlay.status}</Text>
            </View>
          </View>
        )}
        {/* dayCount 배지 */}
        {dayCount && (
          <View style={styles.days_ago_badge_container}>
            <View style={styles.days_ago_badge}>
              <Text style={styles.days_ago_text}>{dayCount}</Text>
            </View>
          </View>
        )}
      </View>

      {/* 카드 텍스트 콘텐츠 영역 */}
      <View style={styles.card_content}>
        {/* 카테고리 배지 */}
        <View style={styles.category_badge}>
          {/* 카테고리 로고 이미지 */}
          <Image
            source={getCategoryIcon(categoryIcon)}
            style={styles.category_logo}
            resizeMode="contain"
          />
          <Text style={styles.category_text}>{category}</Text>
        </View>

        {/* 상품 제목 */}
        <Text
          style={styles.product_title}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>

        {/* 현재 신청한 인원수 /  전체 모집 인원수 */}
        <View style={styles.recruitment_info_container}>
          {/* 현재 신청한 인원수 */}
          <Text style={styles.recruitment_info}>
            모집 {recruitment.current}명
          </Text>
          <Text style={styles.recruitment_info_separator}>/</Text>
          {/* 전체 모집 인원수 */}
          <Text style={styles.recruitment_info_total}>
            {recruitment.total}명
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
