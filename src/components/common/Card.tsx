import React from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";

// 카드 컴포넌트의 props 타입 정의
interface CardProps {
  children: React.ReactNode; // 카드 안에 들어갈 내용
  style?: ViewStyle; // 추가 스타일
  onPress?: () => void; // 카드를 눌렀을 때 실행될 함수 (선택사항)
  padding?: number; // 내부 여백
  margin?: number; // 외부 여백
  shadow?: boolean; // 그림자 효과 여부
}

/**
 * 재사용 가능한 카드 컴포넌트
 * 그림자 효과와 터치 이벤트를 지원합니다.
 */
const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  padding = 16,
  margin = 8,
  shadow = true,
}) => {
  // onPress가 있으면 TouchableOpacity, 없으면 View 사용
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={[
        styles.card,
        shadow && styles.shadow, // shadow가 true일 때만 그림자 적용
        {
          padding, // 동적 패딩
          margin, // 동적 마진
        },
        style, // 추가 스타일
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1} // 터치 시 투명도 효과 (TouchableOpacity일 때만)
    >
      {children}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  // 기본 카드 스타일
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden", // 자식 요소가 카드 경계를 넘지 않도록
  },

  // 그림자 효과 스타일
  shadow: {
    // iOS 그림자
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android 그림자
    elevation: 3,
  },
});

export default Card;
