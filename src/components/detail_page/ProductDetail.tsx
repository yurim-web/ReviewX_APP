// 캠페인 상세 페이지 제품 상세 정보 컴포넌트
// 제품 상세 이미지와 이미지 확장/축소 기능을 제공
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { campaign_detail_screen_styles } from "../../styles/campaign_detail/campaign_detail_screen_styles";
import { CampaignData } from "../../data/campaign_data";

interface ProductDetailProps {
  campaign: CampaignData;
}

export default function ProductDetail({ campaign }: ProductDetailProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <View style={campaign_detail_screen_styles.product_detail_container}>
      <View style={campaign_detail_screen_styles.product_image_container}>
        {/* 제품 상세 이미지 */}
        <Image
          source={
            typeof campaign.campaign_detail_image === "string"
              ? { uri: campaign.campaign_detail_image }
              : campaign.campaign_detail_image
          }
          style={[
            campaign_detail_screen_styles.product_image,
            isImageExpanded &&
              campaign_detail_screen_styles.product_image_expanded,
          ]}
        />

        {/* 이미지 축소 상태일 때 펼쳐보기 버튼 */}
        {!isImageExpanded && (
          <TouchableOpacity
            style={campaign_detail_screen_styles.expand_button_overlay}
            onPress={() => setIsImageExpanded(!isImageExpanded)}
          >
            <Text style={campaign_detail_screen_styles.expand_button_text}>
              이미지 펼쳐보기
            </Text>
          </TouchableOpacity>
        )}

        {/* 이미지 확장 상태일 때 접기 버튼 */}
        {isImageExpanded && (
          <TouchableOpacity
            style={campaign_detail_screen_styles.expand_button}
            onPress={() => setIsImageExpanded(!isImageExpanded)}
          >
            <Text style={campaign_detail_screen_styles.expand_button_text}>
              이미지 접기
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
