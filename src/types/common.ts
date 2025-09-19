/**
 * 공통으로 사용되는 TypeScript 타입 정의들
 * 앱 전체에서 사용되는 기본적인 타입들을 정의합니다.
 */

// 기본 API 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  code?: number;
}

// 페이지네이션 정보 타입
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// 페이지네이션이 포함된 API 응답 타입
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationInfo;
}

// 선택 옵션 타입 (드롭다운, 라디오 버튼 등에서 사용)
export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

// 좌표 정보 타입
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// 주소 정보 타입
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: Coordinates;
}

// 파일 정보 타입
export interface FileInfo {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
}

// 이미지 정보 타입
export interface ImageInfo extends FileInfo {
  width: number;
  height: number;
  thumbnailUrl?: string;
}

// 알림 정보 타입
export interface NotificationInfo {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  isRead: boolean;
  createdAt: Date;
  data?: any; // 추가 데이터
}

// 로딩 상태 타입
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  message?: string;
}

// 폼 유효성 검사 결과 타입
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// 정렬 옵션 타입
export interface SortOption {
  field: string;
  direction: "asc" | "desc";
}

// 필터 옵션 타입
export interface FilterOption {
  field: string;
  operator: "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "like" | "in" | "notIn";
  value: any;
}

// 검색 옵션 타입
export interface SearchOptions {
  query?: string;
  filters?: FilterOption[];
  sort?: SortOption[];
  page?: number;
  limit?: number;
}

// 테마 색상 타입
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
}

// 앱 설정 타입
export interface AppSettings {
  theme: "light" | "dark" | "auto";
  language: string;
  notifications: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
  privacy: {
    analytics: boolean;
    crashReports: boolean;
  };
}

// 네비게이션 파라미터 타입 (React Navigation용)
export interface NavigationParams {
  [key: string]: any;
}

// 스크린 props 타입 (React Navigation용)
export interface ScreenProps {
  navigation: any;
  route: {
    params?: NavigationParams;
  };
}

// 컴포넌트 기본 props 타입
export interface BaseComponentProps {
  style?: any;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

// 모달 props 타입
export interface ModalProps extends BaseComponentProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// 리스트 아이템 타입
export interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  badge?: number;
  isSelected?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

// 탭 아이템 타입
export interface TabItem {
  id: string;
  title: string;
  icon?: string;
  badge?: number;
  isActive?: boolean;
}

// 메뉴 아이템 타입
export interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  onPress: () => void;
  isDisabled?: boolean;
  isDestructive?: boolean; // 삭제 등 위험한 액션인지 여부
}
