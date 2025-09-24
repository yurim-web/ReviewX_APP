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
interface ExperienceScreenProps {
  navigation: any; // navigation 객체 (다른 화면으로 이동할 때 사용)
}

// 체험단 화면 컴포넌트 정의
export default function ExperienceScreen({
  navigation,
}: ExperienceScreenProps) {
  // 탭 클릭 핸들러
  const handleTabPress = (tabId: string) => {
    // 탭별 화면 전환 로직
    switch (tabId) {
      case "home":
        navigation.navigate("Home");
        break;
      case "delivery":
        navigation.navigate("Delivery");
        break;
      case "visit":
        navigation.navigate("Visit");
        break;
      case "review":
        navigation.navigate("Review");
        break;
      case "experience":
        // 현재 화면이므로 아무것도 하지 않음
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
      <TopNavigation activeTabId="experience" onTabPress={handleTabPress} />

      {/* ===== 메인 콘텐츠 영역 (세로 스크롤 가능) ===== */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* ===== 체험단 페이지 제목 ===== */}
        <View>
          <Text>체험단 캠페인</Text>
          <Text>
            체험단 캠페인 페이지입니다.{"\n"}곧 내용이 추가 될 예정입니다!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
