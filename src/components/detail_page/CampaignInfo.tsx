// 캠페인 상세 페이지 주요 정보 컴포넌트
// 캠페인 제목, 설명, 메인 이미지, 모집 정보, 신청 버튼을 표시
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { campaign_detail_screen_styles } from "../../styles/campaign_detail/campaign_detail_screen_styles";
import { CampaignData } from "../../data/campaign_data";

interface CampaignInfoProps {
  campaign: CampaignData;
}

export default function CampaignInfo({ campaign }: CampaignInfoProps) {
  return (
    <View style={campaign_detail_screen_styles.campaign_info_container}>
      {/* 캠페인 제목 */}
      <Text style={campaign_detail_screen_styles.campaign_title}>
        {campaign.title}
      </Text>

      {/* 캠페인 설명 */}
      <Text style={campaign_detail_screen_styles.campaign_description}>
        {campaign.description}
      </Text>

      {/* 메인 이미지 */}
      <View style={campaign_detail_screen_styles.main_image_container}>
        <Image
          source={
            typeof campaign.image === "string"
              ? { uri: campaign.image }
              : campaign.image
          }
          style={campaign_detail_screen_styles.main_image}
        />
      </View>

      {/* 모집 정보 */}
      <View style={campaign_detail_screen_styles.recruitment_section_container}>
        {/* 모집 인원 */}
        <View style={campaign_detail_screen_styles.recruitment_info_row}>
          <Text style={campaign_detail_screen_styles.recruitment_label}>
            모집 인원
          </Text>
          <View
            style={campaign_detail_screen_styles.recruitment_info_container}
          >
            <Text style={campaign_detail_screen_styles.recruitment_current}>
              {campaign.recruitment.current}명
            </Text>
            <Text style={campaign_detail_screen_styles.recruitment_separator}>
              /
            </Text>
            <Text style={campaign_detail_screen_styles.recruitment_total}>
              {campaign.recruitment.total}명
            </Text>
          </View>
        </View>

        {/* 모집기간 */}
        <View style={campaign_detail_screen_styles.recruitment_info_row}>
          <Text style={campaign_detail_screen_styles.recruitment_label}>
            모집 기간
          </Text>
          <Text style={campaign_detail_screen_styles.recruitment_value_regular}>
            {campaign.detailedSchedule.applicationStart} -{" "}
            {campaign.detailedSchedule.applicationEnd}
          </Text>
        </View>

        {/* 당첨발표 */}
        <View style={campaign_detail_screen_styles.recruitment_info_row}>
          <Text style={campaign_detail_screen_styles.recruitment_label}>
            당첨 발표
          </Text>
          <Text style={campaign_detail_screen_styles.recruitment_value_regular}>
            {campaign.detailedSchedule.announcement}
          </Text>
        </View>

        {/* 구매기간 */}
        <View style={campaign_detail_screen_styles.recruitment_info_row}>
          <Text style={campaign_detail_screen_styles.recruitment_label}>
            구매 기간
          </Text>
          <Text style={campaign_detail_screen_styles.recruitment_value_regular}>
            {campaign.detailedSchedule.purchasePeriod}
          </Text>
        </View>

        {/* 그라데이션 오버레이 */}
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.2)", "#ffffff"]}
          locations={[0, 1.5]}
          style={[
            campaign_detail_screen_styles.gradient_overlay,
            { pointerEvents: "none" },
          ]}
        />
      </View>

      {/* 신청하기 버튼 */}
      <TouchableOpacity
        style={campaign_detail_screen_styles.apply_button}
        activeOpacity={0.8}
      >
        <Text style={campaign_detail_screen_styles.apply_button_text}>
          캠페인 신청하기
        </Text>
      </TouchableOpacity>
    </View>
  );
}
