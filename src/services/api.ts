/**
 * API 서비스 클래스
 * 모든 API 호출을 중앙에서 관리합니다.
 */

import {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  apiRequestWithAuth,
} from "../utils/api";
import { ApiResponse } from "../types";

// API 기본 URL
const BASE_URL = "https://api.yourapp.com"; // 실제 API URL로 변경하세요

// API 엔드포인트들
const ENDPOINTS = {
  // 인증 관련
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },

  // 사용자 관련
  users: {
    profile: "/users/profile",
    updateProfile: "/users/profile",
    changePassword: "/users/change-password",
    deleteAccount: "/users/delete-account",
  },

  // 게시물 관련
  posts: {
    list: "/posts",
    create: "/posts",
    detail: (id: string) => `/posts/${id}`,
    update: (id: string) => `/posts/${id}`,
    delete: (id: string) => `/posts/${id}`,
    like: (id: string) => `/posts/${id}/like`,
    unlike: (id: string) => `/posts/${id}/unlike`,
  },

  // 댓글 관련
  comments: {
    list: (postId: string) => `/posts/${postId}/comments`,
    create: (postId: string) => `/posts/${postId}/comments`,
    update: (postId: string, commentId: string) =>
      `/posts/${postId}/comments/${commentId}`,
    delete: (postId: string, commentId: string) =>
      `/posts/${postId}/comments/${commentId}`,
  },

  // 파일 관련
  files: {
    upload: "/files/upload",
    delete: (id: string) => `/files/${id}`,
  },
};

/**
 * 인증 관련 API 서비스
 */
export class AuthService {
  /**
   * 로그인
   * @param email - 이메일
   * @param password - 비밀번호
   * @returns 로그인 응답
   */
  static async login(email: string, password: string): Promise<ApiResponse> {
    return apiPost(`${BASE_URL}${ENDPOINTS.auth.login}`, {
      email,
      password,
    });
  }

  /**
   * 회원가입
   * @param userData - 사용자 데이터
   * @returns 회원가입 응답
   */
  static async register(userData: any): Promise<ApiResponse> {
    return apiPost(`${BASE_URL}${ENDPOINTS.auth.register}`, userData);
  }

  /**
   * 로그아웃
   * @param token - 인증 토큰
   * @returns 로그아웃 응답
   */
  static async logout(token: string): Promise<ApiResponse> {
    return apiRequestWithAuth(`${BASE_URL}${ENDPOINTS.auth.logout}`, token, {
      method: "POST",
    });
  }

  /**
   * 토큰 갱신
   * @param refreshToken - 리프레시 토큰
   * @returns 토큰 갱신 응답
   */
  static async refreshToken(refreshToken: string): Promise<ApiResponse> {
    return apiPost(`${BASE_URL}${ENDPOINTS.auth.refresh}`, {
      refreshToken,
    });
  }

  /**
   * 비밀번호 찾기
   * @param email - 이메일
   * @returns 비밀번호 찾기 응답
   */
  static async forgotPassword(email: string): Promise<ApiResponse> {
    return apiPost(`${BASE_URL}${ENDPOINTS.auth.forgotPassword}`, {
      email,
    });
  }

  /**
   * 비밀번호 재설정
   * @param token - 재설정 토큰
   * @param newPassword - 새 비밀번호
   * @returns 비밀번호 재설정 응답
   */
  static async resetPassword(
    token: string,
    newPassword: string
  ): Promise<ApiResponse> {
    return apiPost(`${BASE_URL}${ENDPOINTS.auth.resetPassword}`, {
      token,
      newPassword,
    });
  }
}

/**
 * 사용자 관련 API 서비스
 */
export class UserService {
  /**
   * 프로필 조회
   * @param token - 인증 토큰
   * @returns 프로필 정보
   */
  static async getProfile(token: string): Promise<ApiResponse> {
    return apiRequestWithAuth(`${BASE_URL}${ENDPOINTS.users.profile}`, token);
  }

  /**
   * 프로필 수정
   * @param token - 인증 토큰
   * @param profileData - 프로필 데이터
   * @returns 프로필 수정 응답
   */
  static async updateProfile(
    token: string,
    profileData: any
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.users.updateProfile}`,
      token,
      {
        method: "PUT",
        body: profileData,
      }
    );
  }

  /**
   * 비밀번호 변경
   * @param token - 인증 토큰
   * @param passwordData - 비밀번호 데이터
   * @returns 비밀번호 변경 응답
   */
  static async changePassword(
    token: string,
    passwordData: any
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.users.changePassword}`,
      token,
      {
        method: "PUT",
        body: passwordData,
      }
    );
  }

  /**
   * 계정 삭제
   * @param token - 인증 토큰
   * @returns 계정 삭제 응답
   */
  static async deleteAccount(token: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.users.deleteAccount}`,
      token,
      {
        method: "DELETE",
      }
    );
  }
}

/**
 * 게시물 관련 API 서비스
 */
export class PostService {
  /**
   * 게시물 목록 조회
   * @param token - 인증 토큰
   * @param params - 쿼리 파라미터
   * @returns 게시물 목록
   */
  static async getPosts(token: string, params?: any): Promise<ApiResponse> {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.list}${queryString}`,
      token
    );
  }

  /**
   * 게시물 상세 조회
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @returns 게시물 상세 정보
   */
  static async getPost(token: string, postId: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.detail(postId)}`,
      token
    );
  }

  /**
   * 게시물 생성
   * @param token - 인증 토큰
   * @param postData - 게시물 데이터
   * @returns 게시물 생성 응답
   */
  static async createPost(token: string, postData: any): Promise<ApiResponse> {
    return apiRequestWithAuth(`${BASE_URL}${ENDPOINTS.posts.create}`, token, {
      method: "POST",
      body: postData,
    });
  }

  /**
   * 게시물 수정
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @param postData - 게시물 데이터
   * @returns 게시물 수정 응답
   */
  static async updatePost(
    token: string,
    postId: string,
    postData: any
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.update(postId)}`,
      token,
      {
        method: "PUT",
        body: postData,
      }
    );
  }

  /**
   * 게시물 삭제
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @returns 게시물 삭제 응답
   */
  static async deletePost(token: string, postId: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.delete(postId)}`,
      token,
      {
        method: "DELETE",
      }
    );
  }

  /**
   * 게시물 좋아요
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @returns 좋아요 응답
   */
  static async likePost(token: string, postId: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.like(postId)}`,
      token,
      {
        method: "POST",
      }
    );
  }

  /**
   * 게시물 좋아요 취소
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @returns 좋아요 취소 응답
   */
  static async unlikePost(token: string, postId: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.posts.unlike(postId)}`,
      token,
      {
        method: "DELETE",
      }
    );
  }
}

/**
 * 댓글 관련 API 서비스
 */
export class CommentService {
  /**
   * 댓글 목록 조회
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @param params - 쿼리 파라미터
   * @returns 댓글 목록
   */
  static async getComments(
    token: string,
    postId: string,
    params?: any
  ): Promise<ApiResponse> {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.comments.list(postId)}${queryString}`,
      token
    );
  }

  /**
   * 댓글 생성
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @param commentData - 댓글 데이터
   * @returns 댓글 생성 응답
   */
  static async createComment(
    token: string,
    postId: string,
    commentData: any
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.comments.create(postId)}`,
      token,
      {
        method: "POST",
        body: commentData,
      }
    );
  }

  /**
   * 댓글 수정
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @param commentId - 댓글 ID
   * @param commentData - 댓글 데이터
   * @returns 댓글 수정 응답
   */
  static async updateComment(
    token: string,
    postId: string,
    commentId: string,
    commentData: any
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.comments.update(postId, commentId)}`,
      token,
      {
        method: "PUT",
        body: commentData,
      }
    );
  }

  /**
   * 댓글 삭제
   * @param token - 인증 토큰
   * @param postId - 게시물 ID
   * @param commentId - 댓글 ID
   * @returns 댓글 삭제 응답
   */
  static async deleteComment(
    token: string,
    postId: string,
    commentId: string
  ): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.comments.delete(postId, commentId)}`,
      token,
      {
        method: "DELETE",
      }
    );
  }
}

/**
 * 파일 관련 API 서비스
 */
export class FileService {
  /**
   * 파일 업로드
   * @param token - 인증 토큰
   * @param file - 업로드할 파일
   * @returns 파일 업로드 응답
   */
  static async uploadFile(token: string, file: any): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append("file", file);

    return apiRequestWithAuth(`${BASE_URL}${ENDPOINTS.files.upload}`, token, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /**
   * 파일 삭제
   * @param token - 인증 토큰
   * @param fileId - 파일 ID
   * @returns 파일 삭제 응답
   */
  static async deleteFile(token: string, fileId: string): Promise<ApiResponse> {
    return apiRequestWithAuth(
      `${BASE_URL}${ENDPOINTS.files.delete(fileId)}`,
      token,
      {
        method: "DELETE",
      }
    );
  }
}
