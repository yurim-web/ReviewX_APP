// 캠페인 상세 페이지 헤더 정보 컴포넌트
// 카테고리 로고, 배지, 포인트 정보를 표시
import * as React from "react";
import { View, Text, Image } from "react-native";
import { campaign_detail_screen_styles } from "../../styles/campaign_detail/campaign_detail_screen_styles";
import { CampaignData } from "../../data/campaign_data";

// 카테고리 아이콘 PNG 파일 반환 함수
const getCategoryIcon = (categoryIconPath: string) => {
  // 경로에서 아이콘 이름 추출
  const iconName =
    categoryIconPath.split("/").pop()?.replace(".svg", "") || "navershop";

  switch (iconName) {
    // 네어버쇼핑
    case "navershop":
      return require("../../../assets/images/category_logo/navershop_icon.png");
    // 카카오선물하기
    case "kakaopre":
      return require("../../../assets/images/category_logo/kakaopre_icon.png");
    // 올리브영
    case "oliveyoung":
      return require("../../../assets/images/category_logo/oliveyoung_icon.png");
    // 쿠팡
    case "coupang":
      return require("../../../assets/images/category_logo/coupang_icon.png");
    // 인스타그램
    case "insta":
    case "instagram":
      return require("../../../assets/images/category_logo/instagram_icon.png");
    // 네이버블로그
    case "naverblog":
      return require("../../../assets/images/category_logo/naverblog_icon.png");
    // 오늘의집
    case "todayhouse":
      return require("../../../assets/images/category_logo/todayhouse_icon.png");
    // 유튜브
    case "youtube":
      return require("../../../assets/images/category_logo/youtube_icon.png");
    default:
      return require("../../../assets/images/category_logo/navershop_icon.png");
  }
};

interface HeaderInfoProps {
  campaign: CampaignData;
}

export default function HeaderInfo({ campaign }: HeaderInfoProps) {
  return (
    <View style={campaign_detail_screen_styles.header_info_container}>
      {/* 왼쪽 카테고리부분 */}
      <View style={campaign_detail_screen_styles.category_container}>
        {/* 카테고리 로고 */}
        <View style={campaign_detail_screen_styles.category_logo}>
          <Image
            source={getCategoryIcon(campaign.categoryIcon)}
            style={campaign_detail_screen_styles.category_logo_image}
            resizeMode="contain"
          />
        </View>

        {/* 첫 번째 배지 (카테고리) */}
        <View style={campaign_detail_screen_styles.category_badge}>
          <Text style={campaign_detail_screen_styles.category_badge_text}>
            {campaign.category}
          </Text>
        </View>

        {/* 두 번째 배지 (서브카테고리) */}
        <View style={campaign_detail_screen_styles.subcategory_badge}>
          <Text style={campaign_detail_screen_styles.subcategory_badge_text}>
            {campaign.subcategory}
          </Text>
        </View>
      </View>

      {/* 포인트부분 */}
      <View style={campaign_detail_screen_styles.points_container}>
        <Text style={campaign_detail_screen_styles.points_value}>
          +{campaign.points.toLocaleString()} P
        </Text>
      </View>
    </View>
  );
}
