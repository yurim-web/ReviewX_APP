import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput } from "react-native";
import HomeScreen from "./src/screens/home_screen";
import HomeScreenStyled from "./src/screens/home_screen_styled";
import SecondScreen from "./src/screens/second_screen";
import { StyledExample } from "./src/components/styled";

const Stack = createStackNavigator();

// 🎨 프리텐다드 폰트를 전체 앱에 적용
// React Native 최신 버전에서는 defaultProps 대신 다른 방법 사용
// 전역 스타일을 위한 설정 (react-native.config.js에서 처리됨)

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FF69B4",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈 (기존)",
            headerShown: false, // 커스텀 헤더 사용
          }}
        />
        <Stack.Screen
          name="HomeStyled"
          component={HomeScreenStyled}
          options={{
            title: "홈 (CSS 스타일)",
            headerShown: false, // 커스텀 헤더 사용
          }}
        />
        <Stack.Screen
          name="StyledExample"
          component={StyledExample}
          options={{
            title: "CSS 예제",
            headerShown: false, // 커스텀 헤더 사용
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: "두 번째 페이지",
            headerShown: false, // 커스텀 헤더 사용
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
