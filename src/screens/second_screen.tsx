import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CommonHeader } from "../components/common";

interface SecondScreenProps {
  navigation: any;
}

export default function SecondScreen({ navigation }: SecondScreenProps) {
  return (
    <View style={styles.container}>
      {/* 공통 헤더 */}
      <CommonHeader navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>두 번째 페이지</Text>
        <Text style={styles.subtitle}>두 번째 페이지입니다</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.button_text}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4fd",
  },
  // 콘텐츠 스타일
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#34C759",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
