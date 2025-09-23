import React from "react";
import { View, Text, FlatList } from "react-native";
import CampaignCard from "./CampaignCard";
import { campaigns_section_styles as styles } from "../../styles/home/campaigns_section_styles";
import MainBanner from "./MainBanner";
import { campaigns, CampaignData } from "../../data/campaign_data";

/**
 * 캠페인 섹션 컴포넌트의 props 타입 정의
 */
interface CampaignsSectionProps {
  title?: string; // 섹션 제목 (기본값: "진행 중인 캠페인")
  navigation?: any; // 네비게이션 객체
}

/**
 * 캠페인 섹션 컴포넌트
 * 홈 화면에서 진행 중인 캠페인들을 그리드 형태로 표시하는 컴포넌트
 *
 * @param title - 섹션 제목 (기본값: "진행 중인 캠페인")
 * @param navigation - 네비게이션 객체
 * @returns 캠페인 섹션 JSX 요소
 */
export function CampaignsSection({
  title = "진행 중인 캠페인",
  navigation,
}: CampaignsSectionProps) {
  // 캠페인 카드 클릭 핸들러
  const handleCampaignPress = (campaign: CampaignData) => {
    if (navigation) {
      navigation.navigate("CampaignDetail", {
        campaign: campaign,
      });
    }
  };

  // FlatList의 keyExtractor 함수
  const keyExtractor = (item: CampaignData) => item.id;

  // FlatList의 renderItem 함수
  const renderItem = ({ item }: { item: CampaignData }) => (
    <CampaignCard
      id={item.id} // 캠페인 ID
      title={item.title} // 캠페인 제목
      category={item.category} // 카테고리명
      categoryIcon={item.categoryIcon} // 카테고리 아이콘 경로
      image={item.image} // 캠페인 이미지 경로
      subcategory={item.subcategory} // 서브카테고리
      points={item.points} // 지급 포인트
      description={item.description} // 캠페인 설명
      recruitment={item.recruitment} // 모집 정보
      dayCount={item.dayCount} // 남은 일수
      overlay={item.overlay} // 오버레이 정보
      onPress={() => handleCampaignPress(item)} // 카드 클릭 이벤트
    />
  );

  // CampaignsSection.jsx
  return (
    <FlatList
      style={{ flex: 1 }} // React Native에서는 flex: 1로 전체 화면 차지
      data={campaigns}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={styles.campaigns_grid}
      columnWrapperStyle={styles.campaigns_row}
      ListHeaderComponent={
        <View>
          <MainBanner />
          <Text style={styles.section_title}>{title}</Text>
        </View>
      }
    />
  );
}
