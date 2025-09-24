// 캠페인 상세 페이지
// 박스 클릭하면 나오는 상세 페이지
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackScreenProps } from "@react-navigation/stack";

type RootStackParamList = {
  CampaignDetail: { campaign: CampaignData };
  Home: undefined;
  StyledExample: undefined;
  Second: undefined;
  Delivery: undefined;
};
import { SubHeader } from "../components/common";
import { campaign_detail_screen_styles } from "../styles/campaign_detail/campaign_detail_screen_styles";
import {
  detailed_guidelines,
  additional_guidelines,
} from "../data/campaign_detail_data";
import { CampaignData } from "../data/campaign_data";

// 카테고리 아이콘 PNG 파일 반환 함수 (CampaignCard와 동일)
const getCategoryIcon = (categoryIconPath: string) => {
  // 경로에서 아이콘 이름 추출
  const iconName =
    categoryIconPath.split("/").pop()?.replace(".svg", "") || "navershop";

  switch (iconName) {
    // 네어버쇼핑
    case "navershop":
      return require("../../assets/images/category_logo/navershop_icon.png");
    // 카카오선물하기
    case "kakaopre":
      return require("../../assets/images/category_logo/kakaopre_icon.png");
    // 올리브영
    case "oliveyoung":
      return require("../../assets/images/category_logo/oliveyoung_icon.png");
    // 쿠팡
    case "coupang":
      return require("../../assets/images/category_logo/coupang_icon.png");
    // 인스타그램
    case "insta":
    case "instagram":
      return require("../../assets/images/category_logo/instagram_icon.png");
    // 네이버블로그
    case "naverblog":
      return require("../../assets/images/category_logo/naverblog_icon.png");
    // 오늘의집
    case "todayhouse":
      return require("../../assets/images/category_logo/todayhouse_icon.png");
    // 유튜브
    case "youtube":
      return require("../../assets/images/category_logo/youtube_icon.png");
    default:
      return require("../../assets/images/category_logo/navershop_icon.png");
  }
};

// CampaignDetailData는 CampaignData와 동일하므로 별도 정의 불필요

type CampaignDetailScreenProps = StackScreenProps<
  RootStackParamList,
  "CampaignDetail"
>;

export default function CampaignDetailScreen({
  navigation,
  route,
}: CampaignDetailScreenProps) {
  const { campaign } = route.params;
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <SafeAreaView style={campaign_detail_screen_styles.container}>
      <SubHeader navigation={navigation} />
      {/* 스크롤 가능한 콘텐츠 */}
      <ScrollView
        style={campaign_detail_screen_styles.scroll_container}
        contentContainerStyle={campaign_detail_screen_styles.scroll_content}
        showsVerticalScrollIndicator={false}
      >
        {/* 헤더 정보 */}
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
              <Text
                style={campaign_detail_screen_styles.subcategory_badge_text}
              >
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

        {/* 캠페인 주요 정보 */}
        <View style={campaign_detail_screen_styles.campaign_info_container}>
          <Text style={campaign_detail_screen_styles.campaign_title}>
            {campaign.title}
          </Text>

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
          <View
            style={campaign_detail_screen_styles.recruitment_section_container}
          >
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
                <Text
                  style={campaign_detail_screen_styles.recruitment_separator}
                >
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
              <Text
                style={campaign_detail_screen_styles.recruitment_value_regular}
              >
                {campaign.detailedSchedule.applicationStart} -{" "}
                {campaign.detailedSchedule.applicationEnd}
              </Text>
            </View>

            {/* 당첨발표 */}
            <View style={campaign_detail_screen_styles.recruitment_info_row}>
              <Text style={campaign_detail_screen_styles.recruitment_label}>
                당첨 발표
              </Text>
              <Text
                style={campaign_detail_screen_styles.recruitment_value_regular}
              >
                {campaign.detailedSchedule.announcement}
              </Text>
            </View>

            {/* 구매기간 */}
            <View style={campaign_detail_screen_styles.recruitment_info_row}>
              <Text style={campaign_detail_screen_styles.recruitment_label}>
                구매 기간
              </Text>
              <Text
                style={campaign_detail_screen_styles.recruitment_value_regular}
              >
                {campaign.detailedSchedule.purchasePeriod}
              </Text>
            </View>

            {/* 그라데이션 오버레이 */}
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.2)", "#ffffff"]}
              locations={[0, 1.5]}
              style={campaign_detail_screen_styles.gradient_overlay}
              pointerEvents="none"
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
        {/* 캠페인 정보칸  */}
        <View
          style={campaign_detail_screen_styles.campaign_info_text_container}
        >
          <Text style={campaign_detail_screen_styles.campaign_info_text}>
            캠페인 정보
          </Text>
        </View>

        {/* 제품 상세 정보 */}
        <View style={campaign_detail_screen_styles.product_detail_container}>
          <View style={campaign_detail_screen_styles.product_image_container}>
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

        {/* 상세정보 글 부분 시작 */}
        <View style={campaign_detail_screen_styles.provided_details_container}>
          {/* 제공내역 영역 */}
          <View style={campaign_detail_screen_styles.info_container}>
            <Text style={campaign_detail_screen_styles.info_title}>
              제공내역
            </Text>
            <Text style={campaign_detail_screen_styles.info_value}>
              {campaign.productDescription}
            </Text>
          </View>

          {/* 키워드 영역 */}
          <View style={campaign_detail_screen_styles.info_container}>
            <View style={campaign_detail_screen_styles.keyword_header}>
              <Text style={campaign_detail_screen_styles.info_title}>
                키워드
              </Text>
              <TouchableOpacity
                style={campaign_detail_screen_styles.copy_button}
              >
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
            <Text style={campaign_detail_screen_styles.info_title}>
              안내사항
            </Text>

            {/* 아이콘 목록 */}
            <View
              style={campaign_detail_screen_styles.guidelines_icons_container}
            >
              <View style={campaign_detail_screen_styles.guideline_item}>
                <View
                  style={campaign_detail_screen_styles.guideline_icon_container}
                >
                  <Image
                    source={require("../../assets/images/info_icon/keyword_icon.svg")}
                    style={campaign_detail_screen_styles.guideline_icon}
                  />
                </View>
                <Text style={campaign_detail_screen_styles.guideline_text}>
                  키워드 삽입
                </Text>
              </View>
              <View style={campaign_detail_screen_styles.guideline_item}>
                <View
                  style={campaign_detail_screen_styles.guideline_icon_container}
                >
                  <Image
                    source={require("../../assets/images/info_icon/product_link_icon.svg")}
                    style={campaign_detail_screen_styles.guideline_icon}
                  />
                </View>
                <Text style={campaign_detail_screen_styles.guideline_text}>
                  제품 링크{"\n"}삽입
                </Text>
              </View>
              <View style={campaign_detail_screen_styles.guideline_item}>
                <View
                  style={campaign_detail_screen_styles.guideline_icon_container}
                >
                  <Image
                    source={require("../../assets/images/info_icon/text_icon.svg")}
                    style={campaign_detail_screen_styles.guideline_icon}
                  />
                </View>
                <Text style={campaign_detail_screen_styles.guideline_text}>
                  1,500자{"\n"}이상
                </Text>
              </View>
              <View style={campaign_detail_screen_styles.guideline_item}>
                <View
                  style={campaign_detail_screen_styles.guideline_icon_container}
                >
                  <Image
                    source={require("../../assets/images/info_icon/photo_icon.svg")}
                    style={campaign_detail_screen_styles.guideline_icon}
                  />
                </View>
                <Text style={campaign_detail_screen_styles.guideline_text}>
                  10장 이상
                </Text>
              </View>
              <View style={campaign_detail_screen_styles.guideline_item}>
                <View
                  style={campaign_detail_screen_styles.guideline_icon_container}
                >
                  <Image
                    source={require("../../assets/images/info_icon/video_icon.svg")}
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
      </ScrollView>
    </SafeAreaView>
  );
}
