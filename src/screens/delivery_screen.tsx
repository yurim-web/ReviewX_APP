// React Native에서 필요한 컴포넌트들을 가져옵니다
import React from "react"; // React 라이브러리 (필수)
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"; // React Native 기본 컴포넌트들
import { TopNavigation, CommonHeader } from "../components/common"; // 상단 네비게이션 컴포넌트
import { home_screen_styles as styles } from "../styles/home/home_screen_styles"; // 홈 화면 스타일 재사용

// TypeScript를 위한 인터페이스 정의 (화면에 전달되는 데이터의 타입을 정의)
interface DeliveryScreenProps {
  navigation: any; // navigation 객체 (다른 화면으로 이동할 때 사용)
}

// 배송형 화면 컴포넌트 정의
export default function DeliveryScreen({ navigation }: DeliveryScreenProps) {
  // 탭 클릭 핸들러
  const handleTabPress = (tabId: string) => {
    console.log(`탭 클릭: ${tabId}`);

    // 탭별 화면 전환 로직
    switch (tabId) {
      case "home":
        navigation.navigate("Home");
        break;
      case "delivery":
        // 현재 화면이므로 아무것도 하지 않음
        break;
      case "visit":
        navigation.navigate("Visit");
        break;
      case "review":
        navigation.navigate("Review");
        break;
      case "experience":
        navigation.navigate("Experience");
        break;
      case "press":
        navigation.navigate("Press");
        break;
      default:
        break;
    }
  };

  return (
    // SafeAreaView: 안전 영역을 고려한 컨테이너 (상단 헤더 영역 제외)
    <SafeAreaView style={styles.container}>
      {/* ===== 공통 헤더 ===== */}
      <CommonHeader navigation={navigation} />

      {/* ===== 상단 네비게이션 탭 영역 ===== */}
      <TopNavigation activeTabId="delivery" onTabPress={handleTabPress} />

      {/* ===== 메인 콘텐츠 영역 (세로 스크롤 가능) ===== */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* ===== 배송형 페이지 제목 ===== */}
        <View style={styles.navigation_buttons}>
          <Text style={styles.section_title}>배송형 캠페인</Text>
          <Text style={styles.nav_button_text}>
            배송형 캠페인 페이지입니다.{"\n"}
            상품을 배송받아 체험하고 리뷰를 작성하는 캠페인들을 확인할 수
            있습니다.
          </Text>
        </View>

        {/* ===== 배송형 캠페인 카드들 영역 ===== */}
        <View style={styles.campaigns_grid}>
          {/* ===== 첫 번째 배송형 캠페인 카드 ===== */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.date_badge}>
                <Text style={styles.date_text}>1/25 (화) 10:00</Text>
                <Text style={styles.status_text}>모집 오픈</Text>
              </View>
            </View>

            <View style={styles.card_image_container}>
              <Text style={styles.product_emoji}>📦</Text>
            </View>

            <View style={styles.card_content}>
              <View style={styles.category_container}>
                <View style={styles.category_badge_green}>
                  <Text style={styles.category_text}>배송형</Text>
                </View>
              </View>

              <Text style={styles.product_title}>
                프리미엄 스마트워치 배송형 체험
              </Text>

              <Text style={styles.recruitment_info}>모집 50명/5명</Text>
            </View>
          </View>

          {/* ===== 두 번째 배송형 캠페인 카드 ===== */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.time_badge}>
                <Text style={styles.time_text}>3일 전</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Text style={styles.product_emoji}>🎧</Text>
            </View>
            <View style={styles.card_content}>
              <View style={styles.category_container}>
                <View style={styles.category_badge_orange}>
                  <Text style={styles.category_text}>배송형</Text>
                </View>
              </View>
              <Text style={styles.product_title}>
                무선 이어폰 배송형 체험단
              </Text>
              <Text style={styles.recruitment_info}>모집 30명/10명</Text>
            </View>
          </View>

          {/* ===== 세 번째 배송형 캠페인 카드 ===== */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.closed_badge}>
                <Text style={styles.closed_text}>마감</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Text style={styles.product_emoji}>📱</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.product_title}>스마트폰 케이스 배송형</Text>
              <Text style={styles.special_text}>특별구성</Text>
            </View>
          </View>

          {/* ===== 네 번째 배송형 캠페인 카드 ===== */}
          <View style={styles.campaign_card}>
            <View style={styles.card_header}>
              <View style={styles.urgent_badge}>
                <Text style={styles.urgent_text}>긴급</Text>
              </View>
            </View>
            <View style={styles.card_image_container}>
              <Text style={styles.product_emoji}>💻</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.product_title}>노트북 스탠드 배송형</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
