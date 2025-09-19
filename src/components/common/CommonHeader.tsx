import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from "../../constants";

interface CommonHeaderProps {
  navigation: any;
}

// 🎨 공통 헤더 컴포넌트 (고정된 내용)
const CommonHeader: React.FC<CommonHeaderProps> = ({ navigation }) => {
  return (
    // react-native-linear-gradient
    <LinearGradient
      colors={["#FFACAE", "#D90074"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
    >
      <Text style={styles.logo}>RX.</Text>
      <View style={styles.header_icons}>
        <TouchableOpacity
          style={styles.icon_button}
          onPress={() => navigation.navigate("StyledExample")}
        >
          <Text style={styles.icon}>🎨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon_button}
          onPress={() => navigation.navigate("HomeStyled")}
        >
          <Text style={styles.icon}>💅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_button}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// 🎨 공통 헤더 스타일
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 28, // 위아래 15
    paddingHorizontal: 32, // 양옆 20
    height: 80,
  },
  logo: {
    fontSize: 28,
    fontWeight: 700,
    color: "#fff",
    lineHeight: 24,
    fontFamily: FONTS.bold,
  },
  header_icons: {
    flexDirection: "row",
    gap: 15,
  },
  icon_button: {
    padding: 5,
  },
  icon: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.xl,
    color: "white",
  },
});

export default CommonHeader;
