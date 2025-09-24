// React Native에서 필요한 컴포넌트들을 가져옵니다
import React from "react"; // React 라이브러리 (필수)
import { View, Text, ScrollView, TouchableOpacity } from "react-native"; // React Native 기본 컴포넌트들
import { top_navigation_styles as styles } from "../../../styles/navigation/top_navigation_styles"; // 네비게이션 전용 스타일

// 상단 네비게이션 컴포넌트의 props 타입 정의
interface TopNavigationProps {
  activeTabId?: string; // 현재 활성화된 탭의 ID (선택적)
  onTabPress?: (tabId: string) => void; // 탭 클릭 시 실행될 함수 (선택적)
}

/**
 * 상단 네비게이션 탭 컴포넌트
 *
 * 기능:
 * - 가로 스크롤 가능한 탭 네비게이션 제공
 * - 활성화된 탭과 비활성화된 탭의 시각적 구분
 * - 탭 클릭 시 콜백 함수 호출
 * - 고정된 메뉴 항목들 (홈, 배송형, 방문형, 구매평, 체험단, 기자단)
 *
 * 사용 예시:
 * <TopNavigation activeTabId="home" onTabPress={(id) => console.log(id)} />
 */
const TopNavigation: React.FC<TopNavigationProps> = ({
  activeTabId = "home",
  onTabPress,
}) => {
  return (
    // 네비게이션 컨테이너 (전체 배경과 테두리)
    <View style={styles.nav_container}>
      {/* 탭들을 균등하게 분산시키는 영역 */}
      <View style={styles.nav_scroll}>
        {/* 홈 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "home" && styles.nav_tab_active, // 홈 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("home")} // 홈 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "home" && styles.nav_text_active, // 홈 탭이 활성화된 경우
            ]}
          >
            홈
          </Text>
        </TouchableOpacity>

        {/* 배송형 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "delivery" && styles.nav_tab_active, // 배송형 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("delivery")} // 배송형 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "delivery" && styles.nav_text_active, // 배송형 탭이 활성화된 경우
            ]}
          >
            배송형
          </Text>
        </TouchableOpacity>

        {/* 방문형 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "visit" && styles.nav_tab_active, // 방문형 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("visit")} // 방문형 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "visit" && styles.nav_text_active, // 방문형 탭이 활성화된 경우
            ]}
          >
            방문형
          </Text>
        </TouchableOpacity>

        {/* 구매평 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "review" && styles.nav_tab_active, // 구매평 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("review")} // 구매평 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "review" && styles.nav_text_active, // 구매평 탭이 활성화된 경우
            ]}
          >
            구매평
          </Text>
        </TouchableOpacity>

        {/* 체험단 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "experience" && styles.nav_tab_active, // 체험단 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("experience")} // 체험단 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "experience" && styles.nav_text_active, // 체험단 탭이 활성화된 경우
            ]}
          >
            체험단
          </Text>
        </TouchableOpacity>

        {/* 기자단 탭 */}
        <TouchableOpacity
          style={[
            styles.nav_tab, // 기본 탭 스타일
            activeTabId === "press" && styles.nav_tab_active, // 기자단 탭이 활성화된 경우
          ]}
          onPress={() => onTabPress?.("press")} // 기자단 탭 클릭 시
          activeOpacity={1} // 터치 애니메이션 비활성화
        >
          <Text
            style={[
              styles.nav_text, // 기본 텍스트 스타일
              activeTabId === "press" && styles.nav_text_active, // 기자단 탭이 활성화된 경우
            ]}
          >
            기자단
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavigation;
