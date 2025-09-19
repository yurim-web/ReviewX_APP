/**
 * 사용자 관련 TypeScript 타입 정의들
 * 사용자 정보, 인증, 프로필 등과 관련된 타입들을 정의합니다.
 */

import { Address, FileInfo } from "./common";

// 사용자 기본 정보 타입
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber?: string;
  profileImage?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other" | "prefer_not_to_say";
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  isActive: boolean;
}

// 사용자 프로필 정보 타입
export interface UserProfile extends User {
  bio?: string;
  website?: string;
  location?: string;
  address?: Address;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  preferences?: UserPreferences;
  settings?: UserSettings;
}

// 사용자 선호도 타입
export interface UserPreferences {
  language: string;
  timezone: string;
  currency: string;
  dateFormat: string;
  timeFormat: "12h" | "24h";
  notifications: NotificationPreferences;
  privacy: PrivacyPreferences;
}

// 알림 선호도 타입
export interface NotificationPreferences {
  push: boolean;
  email: boolean;
  sms: boolean;
  marketing: boolean;
  updates: boolean;
  reminders: boolean;
  social: boolean;
}

// 개인정보 보호 선호도 타입
export interface PrivacyPreferences {
  profileVisibility: "public" | "friends" | "private";
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  allowSearch: boolean;
  allowAnalytics: boolean;
  allowCrashReports: boolean;
}

// 사용자 설정 타입
export interface UserSettings {
  theme: "light" | "dark" | "auto";
  fontSize: "small" | "medium" | "large";
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  autoSave: boolean;
  offlineMode: boolean;
}

// 로그인 요청 타입
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// 회원가입 요청 타입
export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber?: string;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  agreeToMarketing?: boolean;
}

// 비밀번호 변경 요청 타입
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// 비밀번호 재설정 요청 타입
export interface ResetPasswordRequest {
  email: string;
}

// 프로필 업데이트 요청 타입
export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  username?: string;
  phoneNumber?: string;
  bio?: string;
  website?: string;
  location?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other" | "prefer_not_to_say";
}

// 인증 토큰 타입
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

// 인증 상태 타입
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  tokens: AuthTokens | null;
  isLoading: boolean;
  error: string | null;
}

// 소셜 로그인 타입
export interface SocialLoginRequest {
  provider: "google" | "facebook" | "apple" | "kakao" | "naver";
  token: string;
  userInfo?: {
    email?: string;
    name?: string;
    profileImage?: string;
  };
}

// 사용자 통계 타입
export interface UserStats {
  totalPosts: number;
  totalFollowers: number;
  totalFollowing: number;
  totalLikes: number;
  totalComments: number;
  joinDate: Date;
  lastActiveDate: Date;
}

// 사용자 활동 타입
export interface UserActivity {
  id: string;
  type:
    | "login"
    | "logout"
    | "profile_update"
    | "password_change"
    | "post_created"
    | "comment_added";
  description: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  location?: string;
}

// 사용자 세션 타입
export interface UserSession {
  id: string;
  userId: string;
  deviceId: string;
  deviceName: string;
  platform: "ios" | "android" | "web";
  isActive: boolean;
  lastActivity: Date;
  createdAt: Date;
  expiresAt: Date;
}

// 사용자 역할 타입
export interface UserRole {
  id: string;
  name: string;
  permissions: string[];
  description?: string;
}

// 사용자 권한 타입
export interface UserPermission {
  id: string;
  resource: string;
  action: string;
  conditions?: Record<string, any>;
}

// 사용자 그룹 타입
export interface UserGroup {
  id: string;
  name: string;
  description?: string;
  members: string[]; // 사용자 ID 배열
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}
