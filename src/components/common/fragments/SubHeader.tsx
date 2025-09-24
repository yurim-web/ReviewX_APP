// SubHeader.tsx
// ex)상세페이지 갔을떄 로고 대신 이전버튼이 있는 헤더
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { common_header_styles as styles } from "../../../styles/header/common_header_styles";
import GuideIcon from "../../../../assets/images/header/GuideIcon";
import MyIcon from "../../../../assets/images/header/MyIcon";
import HeaderArrow from "../../../../assets/images/header/HeaderArrow";

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
      {/* 이전으로 가는 버튼 */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.logo_container}
      >
        <HeaderArrow width={24} height={24} color="white" />
      </TouchableOpacity>

      {/* 오른쪽 아이콘 */}
      <View style={styles.header_icons}>
        <TouchableOpacity>
          <GuideIcon width={24} height={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MyIcon width={24} height={24} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CommonHeader;
