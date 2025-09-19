import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CommonHeader } from "../components/common";

interface HomeScreenProps {
  navigation: any;
}

const { width } = Dimensions.get("window");

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

const styles = StyleSheet.create({
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
