import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";

// Header 컴포넌트의 props 타입 정의
interface HeaderProps {
  title: string; // 헤더 제목
  leftIcon?: React.ReactNode; // 왼쪽 아이콘 (뒤로가기 등)
  rightIcon?: React.ReactNode; // 오른쪽 아이콘 (메뉴, 검색 등)
  onLeftPress?: () => void; // 왼쪽 아이콘 클릭 시 실행될 함수
  onRightPress?: () => void; // 오른쪽 아이콘 클릭 시 실행될 함수
  backgroundColor?: string; // 헤더 배경색
  titleColor?: string; // 제목 색상
  showStatusBar?: boolean; // 상태바 표시 여부
}

/**
 * 재사용 가능한 헤더 컴포넌트
 * 제목, 좌우 아이콘, 상태바를 지원합니다.
 */
const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  backgroundColor = "linear-gradient(90deg, #FFACAE 0%, #D90074 100%)",
  titleColor = "#FFFFFF",
  showStatusBar = true,
}) => {
  return (
    <>
      {/* 상태바 설정 */}
      {showStatusBar && (
        <StatusBar
          barStyle="light-content" // 상태바 텍스트 색상 (밝은 배경용)
          backgroundColor={backgroundColor}
        />
      )}

      {/* 안전 영역을 고려한 헤더 */}
      <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
        <View style={[styles.header, { backgroundColor }]}>
          {/* 왼쪽 아이콘 영역 */}
          <View style={styles.leftContainer}>
            {leftIcon && (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={onLeftPress}
                activeOpacity={0.7}
              >
                {leftIcon}
              </TouchableOpacity>
            )}
          </View>

          {/* 제목 영역 */}
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          </View>

          {/* 오른쪽 아이콘 영역 */}
          <View style={styles.rightContainer}>
            {rightIcon && (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={onRightPress}
                activeOpacity={0.7}
              >
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // 안전 영역 스타일
  safeArea: {
    // SafeAreaView는 자동으로 상단 안전 영역을 처리합니다
  },

  // 헤더 컨테이너 스타일
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56, // 최소 높이 설정
  },

  // 왼쪽 아이콘 컨테이너
  leftContainer: {
    width: 40, // 고정 너비로 레이아웃 균형 맞춤
    alignItems: "flex-start",
  },

  // 제목 컨테이너
  titleContainer: {
    flex: 1, // 남은 공간 모두 차지
    alignItems: "center",
  },

  // 오른쪽 아이콘 컨테이너
  rightContainer: {
    width: 40, // 고정 너비로 레이아웃 균형 맞춤
    alignItems: "flex-end",
  },

  // 아이콘 버튼 스타일
  iconButton: {
    padding: 8, // 터치 영역 확대
    borderRadius: 20,
  },

  // 제목 스타일
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Header;
