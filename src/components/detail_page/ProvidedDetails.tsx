// 캠페인 상세 페이지 제공내역 및 안내사항 컴포넌트
// 제공내역, 키워드, 안내사항, 가이드라인을 표시
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { campaign_detail_screen_styles } from "../../styles/campaign_detail/campaign_detail_screen_styles";
import { CampaignData } from "../../data/campaign_data";
import {
  detailed_guidelines,
  additional_guidelines,
} from "../../data/campaign_detail_data";

interface ProvidedDetailsProps {
  campaign: CampaignData;
}

export default function ProvidedDetails({ campaign }: ProvidedDetailsProps) {
  return (
    <View style={campaign_detail_screen_styles.provided_details_container}>
      {/* 제공내역 영역 */}
      <View style={campaign_detail_screen_styles.info_container}>
        <Text style={campaign_detail_screen_styles.info_title}>제공내역</Text>
        <Text style={campaign_detail_screen_styles.info_value}>
          {campaign.productDescription}
        </Text>
      </View>

      {/* 키워드 영역 */}
      <View style={campaign_detail_screen_styles.info_container}>
        <View style={campaign_detail_screen_styles.keyword_header}>
          <Text style={campaign_detail_screen_styles.info_title}>키워드</Text>
          <TouchableOpacity style={campaign_detail_screen_styles.copy_button}>
            <Text style={campaign_detail_screen_styles.copy_button_text}>
              복사
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={campaign_detail_screen_styles.info_value}>
          {campaign.keywords && campaign.keywords.length > 0
            ? campaign.keywords.join(", ")
            : "자유롭게 입력하세요."}
        </Text>
      </View>

      {/* 안내 사항 */}
      <View style={campaign_detail_screen_styles.info_container}>
        <Text style={campaign_detail_screen_styles.info_title}>안내사항</Text>

        {/* 아이콘 목록 */}
        <View style={campaign_detail_screen_styles.guidelines_icons_container}>
          {/* 키워드 삽입 */}
          <View style={campaign_detail_screen_styles.guideline_item}>
            <View
              style={campaign_detail_screen_styles.guideline_icon_container}
            >
              <Image
                source={require("../../../assets/images/info_icon/keyword_icon.svg")}
                style={campaign_detail_screen_styles.guideline_icon}
              />
            </View>
            <Text style={campaign_detail_screen_styles.guideline_text}>
              키워드 삽입
            </Text>
          </View>

          {/* 제품 링크 삽입 */}
          <View style={campaign_detail_screen_styles.guideline_item}>
            <View
              style={campaign_detail_screen_styles.guideline_icon_container}
            >
              <Image
                source={require("../../../assets/images/info_icon/product_link_icon.svg")}
                style={campaign_detail_screen_styles.guideline_icon}
              />
            </View>
            <Text style={campaign_detail_screen_styles.guideline_text}>
              제품 링크{"\n"}삽입
            </Text>
          </View>

          {/* 1,500자 이상 */}
          <View style={campaign_detail_screen_styles.guideline_item}>
            <View
              style={campaign_detail_screen_styles.guideline_icon_container}
            >
              <Image
                source={require("../../../assets/images/info_icon/text_icon.svg")}
                style={campaign_detail_screen_styles.guideline_icon}
              />
            </View>
            <Text style={campaign_detail_screen_styles.guideline_text}>
              1,500자{"\n"}이상
            </Text>
          </View>

          {/* 10장 이상 */}
          <View style={campaign_detail_screen_styles.guideline_item}>
            <View
              style={campaign_detail_screen_styles.guideline_icon_container}
            >
              <Image
                source={require("../../../assets/images/info_icon/photo_icon.svg")}
                style={campaign_detail_screen_styles.guideline_icon}
              />
            </View>
            <Text style={campaign_detail_screen_styles.guideline_text}>
              10장 이상
            </Text>
          </View>

          {/* 1개 이상 */}
          <View style={campaign_detail_screen_styles.guideline_item}>
            <View
              style={campaign_detail_screen_styles.guideline_icon_container}
            >
              <Image
                source={require("../../../assets/images/info_icon/video_icon.svg")}
                style={campaign_detail_screen_styles.guideline_icon}
              />
            </View>
            <Text style={campaign_detail_screen_styles.guideline_text}>
              1개 이상
            </Text>
          </View>
        </View>
      </View>

      {/* 상세 가이드라인 */}
      <View style={campaign_detail_screen_styles.info_container}>
        <Text style={campaign_detail_screen_styles.info_value}>
          {detailed_guidelines.map((guideline) => guideline).join("\n")}
        </Text>
      </View>

      {/* 추가 안내 사항 영역 */}
      <View style={campaign_detail_screen_styles.info_container}>
        <Text style={campaign_detail_screen_styles.info_title}>
          추가 안내 사항
        </Text>

        {additional_guidelines.map((guideline, index) => {
          if (typeof guideline === "string") {
            return (
              <Text
                key={index}
                style={campaign_detail_screen_styles.add_value_text}
              >
                {guideline}
              </Text>
            );
          } else if (guideline.type === "complex") {
            return (
              <Text
                key={index}
                style={campaign_detail_screen_styles.add_value_text}
              >
                {guideline.parts.map((part, partIndex) => {
                  if (typeof part === "string") {
                    return part;
                  } else {
                    return (
                      <Text
                        key={partIndex}
                        style={[
                          campaign_detail_screen_styles.add_value_text,
                          {
                            textDecorationLine: "underline",
                            fontWeight: "600",
                          },
                        ]}
                      >
                        {part.text}
                      </Text>
                    );
                  }
                })}
              </Text>
            );
          }
          return null;
        })}
      </View>
    </View>
  );
}
