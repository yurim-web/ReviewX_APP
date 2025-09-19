import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// 탭 아이템 타입 정의
interface TabItem {
  id: string; // 탭 고유 ID
  title: string; // 탭에 표시될 텍스트
  badge?: number; // 배지 숫자 (선택사항)
}

// TabBar 컴포넌트의 props 타입 정의
interface TabBarProps {
  tabs: TabItem[]; // 탭 목록
  activeTab: string; // 현재 활성화된 탭 ID
  onTabPress: (tabId: string) => void; // 탭 클릭 시 실행될 함수
  style?: any; // 추가 스타일
  activeColor?: string; // 활성 탭 색상
  inactiveColor?: string; // 비활성 탭 색상
  backgroundColor?: string; // 탭바 배경색
}

/**
 * 재사용 가능한 탭바 컴포넌트
 * 가로 스크롤과 배지를 지원합니다.
 */
const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
  style,
  activeColor = "#007AFF",
  inactiveColor = "#666666",
  backgroundColor = "#FFFFFF",
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <ScrollView
        horizontal // 가로 스크롤 활성화
        showsHorizontalScrollIndicator={false} // 스크롤바 숨김
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id; // 현재 탭이 활성화된 탭인지 확인

          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                isActive && styles.activeTab, // 활성 탭 스타일
                isActive && { backgroundColor: activeColor }, // 활성 탭 배경색
              ]}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.7}
            >
              {/* 탭 텍스트 */}
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isActive ? "#FFFFFF" : inactiveColor, // 활성/비활성 탭 텍스트 색상
                  },
                ]}
              >
                {tab.title}
              </Text>

              {/* 배지 표시 (있는 경우) */}
              {tab.badge && tab.badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {tab.badge > 99 ? "99+" : tab.badge}{" "}
                    {/* 99 이상일 때 99+ 표시 */}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // 탭바 컨테이너 스타일
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },

  // 스크롤 콘텐츠 스타일
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  // 개별 탭 스타일
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 60, // 최소 너비 설정
  },

  // 활성 탭 스타일
  activeTab: {
    // backgroundColor는 props에서 동적으로 설정
  },

  // 탭 텍스트 스타일
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },

  // 배지 스타일
  badge: {
    backgroundColor: "#FF4444",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    paddingHorizontal: 6,
  },

  // 배지 텍스트 스타일
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default TabBar;
