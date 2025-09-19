import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

// 버튼 컴포넌트의 props 타입 정의
interface ButtonProps {
  title: string; // 버튼에 표시될 텍스트
  onPress: () => void; // 버튼을 눌렀을 때 실행될 함수
  variant?: "primary" | "secondary" | "outline"; // 버튼 스타일 변형
  size?: "small" | "medium" | "large"; // 버튼 크기
  disabled?: boolean; // 버튼 비활성화 여부
  style?: ViewStyle; // 추가 스타일
  textStyle?: TextStyle; // 텍스트 추가 스타일
}

/**
 * 재사용 가능한 버튼 컴포넌트
 * 다양한 스타일과 크기를 지원합니다.
 */
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant], // variant에 따른 스타일 적용
        styles[size], // size에 따른 스타일 적용
        disabled && styles.disabled, // 비활성화 상태일 때 스타일
        style, // 추가 스타일
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7} // 터치 시 투명도 효과
    >
      <Text
        style={[
          styles.text,
          styles[`${variant}Text`], // variant에 따른 텍스트 스타일
          styles[`${size}Text`], // size에 따른 텍스트 스타일
          disabled && styles.disabledText, // 비활성화 상태일 때 텍스트 스타일
          textStyle, // 추가 텍스트 스타일
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // 기본 버튼 스타일
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  // variant 스타일들
  primary: {
    backgroundColor: "#007AFF", // iOS 블루
  },
  secondary: {
    backgroundColor: "#6C757D", // 회색
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },

  // size 스타일들
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  // 비활성화 스타일
  disabled: {
    backgroundColor: "#E9ECEF",
    opacity: 0.6,
  },

  // 텍스트 기본 스타일
  text: {
    fontWeight: "600",
    textAlign: "center",
  },

  // variant별 텍스트 스타일
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#FFFFFF",
  },
  outlineText: {
    color: "#007AFF",
  },

  // size별 텍스트 스타일
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },

  // 비활성화 텍스트 스타일
  disabledText: {
    color: "#6C757D",
  },
});

export default Button;
