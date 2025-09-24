// 캠페인 상세 페이지
// 박스 클릭하면 나오는 상세 페이지
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  CampaignDetail: { campaign: CampaignData };
  Home: undefined;
};
import { SubHeader } from "../../components/common";
import { campaign_detail_screen_styles } from "../../styles/campaign_detail/campaign_detail_screen_styles";
import { CampaignData } from "../../data/campaign_data";
import {
  HeaderInfo,
  CampaignInfo,
  ProductDetail,
  ProvidedDetails,
} from "../../components/detail_page";

type CampaignDetailScreenProps = StackScreenProps<
  RootStackParamList,
  "CampaignDetail"
>;

export default function CampaignDetailScreen({
  navigation,
  route,
}: CampaignDetailScreenProps) {
  const { campaign } = route.params;

  return (
    <SafeAreaView style={campaign_detail_screen_styles.container}>
      <SubHeader navigation={navigation} />

      {/* 스크롤 가능한 콘텐츠 */}
      <ScrollView
        style={campaign_detail_screen_styles.scroll_container}
        contentContainerStyle={campaign_detail_screen_styles.scroll_content}
        showsVerticalScrollIndicator={false}
      >
        {/* 헤더 정보 (카테고리, 포인트) */}
        <HeaderInfo campaign={campaign} />

        {/* 캠페인 주요 정보 (제목, 설명, 이미지, 모집정보, 신청버튼) */}
        <CampaignInfo campaign={campaign} />

        {/* 캠페인 정보 섹션 제목 */}
        <View
          style={campaign_detail_screen_styles.campaign_info_text_container}
        >
          <Text style={campaign_detail_screen_styles.campaign_info_text}>
            캠페인 정보
          </Text>
        </View>

        {/* 제품 상세 정보 (이미지 확장 기능 포함) */}
        <ProductDetail campaign={campaign} />

        {/* 제공내역 및 안내사항 */}
        <ProvidedDetails campaign={campaign} />
      </ScrollView>
    </SafeAreaView>
  );
}
