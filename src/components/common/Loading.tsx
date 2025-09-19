import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";

// Loading 컴포넌트의 props 타입 정의
interface LoadingProps {
  size?: "small" | "large"; // 로딩 인디케이터 크기
  color?: string; // 로딩 인디케이터 색상
  text?: string; // 로딩 텍스트
  overlay?: boolean; // 전체 화면 오버레이 여부
  style?: ViewStyle; // 추가 스타일
}

/**
 * 재사용 가능한 로딩 컴포넌트
 * 다양한 크기와 스타일을 지원합니다.
 */
const Loading: React.FC<LoadingProps> = ({
  size = "large",
  color = "#007AFF",
  text,
  overlay = false,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        overlay && styles.overlay, // overlay가 true일 때 전체 화면 스타일 적용
        style,
      ]}
    >
      {/* 로딩 인디케이터 */}
      <ActivityIndicator size={size} color={color} />

      {/* 로딩 텍스트 (선택사항) */}
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  // 기본 컨테이너 스타일
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  // 오버레이 스타일 (전체 화면)
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // 반투명 흰색 배경
    zIndex: 999, // 다른 요소들 위에 표시
  },

  // 로딩 텍스트 스타일
  text: {
    marginTop: 12,
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
});

export default Loading;
