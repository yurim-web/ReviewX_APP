import React from "react";
import { View, Image } from "react-native";
import { home_screen_styles as styles } from "../../styles/home/home_screen_styles";

interface MainBannerProps {
  // 필요시 props 추가 가능 (예: 배너 이미지 URL, 클릭 핸들러 등)
}

export default function MainBanner({}: MainBannerProps) {
  return (
    <View>
      <Image
        source={require("../../../assets/images/home/main_banner.jpg")}
        style={styles.banner_image}
        resizeMode="cover"
      />
    </View>
  );
}
