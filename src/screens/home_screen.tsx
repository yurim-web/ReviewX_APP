// React Native에서 필요한 컴포넌트들을 가져옵니다
import React from "react"; // React 라이브러리 (필수)
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native"; // React Native 기본 컴포넌트들
import { home_screen_styles as styles } from "../styles/home/home_screen_styles"; // 스타일 파일 가져오기
import { TopNavigation, CommonHeader } from "../components/common"; // 상단 네비게이션 컴포넌트
import { MainBanner, CampaignsSection } from "../components/home"; // 홈 화면 컴포넌트들

// TypeScript를 위한 인터페이스 정의 (화면에 전달되는 데이터의 타입을 정의)
interface HomeScreenProps {
  navigation: any; // navigation 객체 (다른 화면으로 이동할 때 사용)
}

// 홈화면 컴포넌트 정의 (export default는 이 파일을 import할 때 기본으로 가져올 컴포넌트)
export default function HomeScreen({ navigation }: HomeScreenProps) {
  // 탭 클릭 핸들러
  const handleTabPress = (tabId: string) => {
    console.log(`탭 클릭: ${tabId}`);

    // 탭별 화면 전환 로직
    switch (tabId) {
      case "home":
        // 현재 화면이므로 아무것도 하지 않음
        break;
      case "delivery":
        navigation.navigate("Delivery");
        break;
      case "visit":
        // TODO: 방문형 화면 구현
        console.log("방문형 화면으로 이동 예정");
        break;
      case "review":
        // TODO: 구매평 화면 구현
        console.log("구매평 화면으로 이동 예정");
        break;
      case "experience":
        // TODO: 체험단 화면 구현
        console.log("체험단 화면으로 이동 예정");
        break;
      case "press":
        // TODO: 기자단 화면 구현
        console.log("기자단 화면으로 이동 예정");
        break;
      default:
        break;
    }
  };

  // HomeScreen.jsx
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <CommonHeader navigation={navigation} />
      <TopNavigation activeTabId="home" onTabPress={handleTabPress} />
      <CampaignsSection navigation={navigation} /> {/* 🔥 flex:1 FlatList */}
    </View>
  );
}
