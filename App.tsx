import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";
import HomeScreen from "./src/screens/home_screen";
import DeliveryScreen from "./src/screens/delivery_screen";
import VisitScreen from "./src/screens/visit_screen";
import ReviewScreen from "./src/screens/review_screen";
import ExperienceScreen from "./src/screens/experience_screen";
import PressScreen from "./src/screens/press_screen";
import CampaignDetailScreen from "./src/screens/detail/campaign_detail_screen";
import { CommonHeader } from "./src/components/common";
import { CampaignData } from "./src/data/campaign_data";
import "./App.css";

// 타입 정의
type RootStackParamList = {
  Home: undefined;
  Delivery: undefined;
  Visit: undefined;
  Review: undefined;
  Experience: undefined;
  Press: undefined;
  CampaignDetail: { campaign: CampaignData };
};

// 스플래시 스크린을 자동으로 숨기지 않도록 설정
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  // 폰트 로딩
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.ttf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-Light": require("./assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-ExtraLight": require("./assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-Black": require("./assets/fonts/Pretendard-Black.ttf"),
    "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.ttf"),
  });

  // 폰트가 로드되면 스플래시 스크린 숨기기
  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

      // 전역 Text 컴포넌트에 기본 폰트 설정
      const defaultFontFamily = "Pretendard-Regular";
      (Text as any).defaultProps = (Text as any).defaultProps || {};
      (Text as any).defaultProps.style = {
        fontFamily: defaultFontFamily,
        ...(Text as any).defaultProps.style,
      };
    }
  }, [fontsLoaded]);

  // 폰트가 로드되지 않았으면 null 반환
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // 기본 헤더 숨기기
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈(메인)",
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{
            title: "배송형 캠페인",
          }}
        />
        <Stack.Screen
          name="Visit"
          component={VisitScreen}
          options={{
            title: "방문형 캠페인",
          }}
        />
        <Stack.Screen
          name="Review"
          component={ReviewScreen}
          options={{
            title: "구매평 캠페인",
          }}
        />
        <Stack.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{
            title: "체험단 캠페인",
          }}
        />
        <Stack.Screen
          name="Press"
          component={PressScreen}
          options={{
            title: "기자단 캠페인",
          }}
        />
        <Stack.Screen
          name="CampaignDetail"
          component={CampaignDetailScreen}
          options={{
            title: "캠페인 상세페이지",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
