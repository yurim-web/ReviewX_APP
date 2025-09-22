import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CommonHeader } from "../components/common";
import { home_screen_styles as styles } from "./home_screen_styles";

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* 공통 헤더 */}
      <CommonHeader navigation={navigation} />

      {/* 네비게이션 탭 */}
      <View style={styles.nav_container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.nav_scroll}
        >
          <TouchableOpacity style={[styles.nav_tab, styles.nav_tab_active]}>
            <Text style={[styles.nav_text, styles.nav_text_active]}>홈</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_tab}>
            <Text style={styles.nav_text}>배송형</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_tab}>
            <Text style={styles.nav_text}>방문형</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_tab}>
            <Text style={styles.nav_text}>구매평</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_tab}>
            <Text style={styles.nav_text}>체험단</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_tab}>
            <Text style={styles.nav_text}>기자단</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 생일 축하 배너 */}
        <LinearGradient
          colors={["#E6E6FA", "#DDA0DD", "#FFB6C1"]}
          style={styles.birthday_banner}
        >
          <View style={styles.banner_content}>
            <Text style={styles.birthday_text}>HAPPY</Text>
            <Text style={styles.birthday_text_bottom}>BIRTHDAY</Text>
            <Text style={styles.banner_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.banner_decorations}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=100&h=100&fit=crop",
              }}
              style={styles.cake_image}
              resizeMode="cover"
            />
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=80&h=80&fit=crop",
              }}
              style={styles.confetti_image}
              resizeMode="cover"
            />
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=60&h=60&fit=crop",
              }}
              style={styles.balloon_image}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>

        {/* 캠페인 섹션 */}
        <Text style={styles.section_title}>선정 확률 높은 캠페인</Text>

        {/* 캠페인 카드들 */}
        <View style={styles.campaigns_grid}>
          {/* 첫 번째 카드 */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.date_badge}>
                <Text style={styles.date_text}>1/25 (화) 10:00</Text>
                <Text style={styles.status_text}>모집 오픈</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
                }}
                style={styles.product_image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.card_content}>
              <View style={styles.category_container}>
                <View style={styles.category_badge_green}>
                  <Text style={styles.category_text}>기자단</Text>
                </View>
              </View>
              <Text style={styles.product_title}>
                노이즈캔슬링 HIFI 블루투스 5.4 스테레오 헤드셋
              </Text>
              <Text style={styles.recruitment_info}>모집 682명/3명</Text>
            </View>
          </View>

          {/* 두 번째 카드 */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.time_badge}>
                <Text style={styles.time_text}>6일 전</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop",
                }}
                style={styles.product_image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.card_content}>
              <View style={styles.category_container}>
                <View style={styles.category_badge_orange}>
                  <Text style={styles.category_text}>구매평</Text>
                </View>
              </View>
              <Text style={styles.product_title}>
                덴클 비건인증 천연가루치약 입냄새98%제거 충치예방
              </Text>
              <Text style={styles.recruitment_info}>모집 10명/50명</Text>
            </View>
          </View>

          {/* 세 번째 카드 */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.closed_badge}>
                <Text style={styles.closed_text}>마감</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=200&fit=crop",
                }}
                style={styles.product_image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.card_content}>
              <Text style={styles.product_title}>해신탕</Text>
              <Text style={styles.special_text}>특별구성</Text>
            </View>
          </View>

          {/* 네 번째 카드 */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.urgent_badge}>
                <Text style={styles.urgent_text}>긴급</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop",
                }}
                style={styles.product_image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.card_content}>
              <Text style={styles.product_title}>WHB 텀블러</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
