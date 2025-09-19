/**
 * API 통신을 위한 유틸리티 함수들
 * HTTP 요청을 보내고 응답을 처리합니다.
 */

// API 응답 타입 정의
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// API 요청 옵션 타입 정의
interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

/**
 * 기본 API 요청 함수
 * @param url - 요청할 URL
 * @param options - 요청 옵션
 * @returns API 응답 데이터
 */
export const apiRequest = async <T = any>(
  url: string,
  options: ApiOptions = {}
): Promise<ApiResponse<T>> => {
  const {
    method = "GET",
    headers = {},
    body,
    timeout = 10000, // 10초 타임아웃
  } = options;

  try {
    // 기본 헤더 설정
    const defaultHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    // 요청 설정
    const requestConfig: RequestInit = {
      method,
      headers: defaultHeaders,
    };

    // POST, PUT 요청인 경우 body 추가
    if (body && (method === "POST" || method === "PUT")) {
      requestConfig.body =
        typeof body === "string" ? body : JSON.stringify(body);
    }

    // 타임아웃 설정
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    requestConfig.signal = controller.signal;

    // API 요청 실행
    const response = await fetch(url, requestConfig);
    clearTimeout(timeoutId);

    // 응답 상태 확인
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    // 응답 데이터 파싱
    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("API 요청 실패:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다.",
    };
  }
};

/**
 * GET 요청을 보내는 함수
 * @param url - 요청할 URL
 * @param headers - 추가 헤더
 * @returns API 응답 데이터
 */
export const apiGet = async <T = any>(
  url: string,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, { method: "GET", headers });
};

/**
 * POST 요청을 보내는 함수
 * @param url - 요청할 URL
 * @param body - 요청 본문
 * @param headers - 추가 헤더
 * @returns API 응답 데이터
 */
export const apiPost = async <T = any>(
  url: string,
  body?: any,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, { method: "POST", body, headers });
};

/**
 * PUT 요청을 보내는 함수
 * @param url - 요청할 URL
 * @param body - 요청 본문
 * @param headers - 추가 헤더
 * @returns API 응답 데이터
 */
export const apiPut = async <T = any>(
  url: string,
  body?: any,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, { method: "PUT", body, headers });
};

/**
 * DELETE 요청을 보내는 함수
 * @param url - 요청할 URL
 * @param headers - 추가 헤더
 * @returns API 응답 데이터
 */
export const apiDelete = async <T = any>(
  url: string,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, { method: "DELETE", headers });
};

/**
 * 인증 토큰이 포함된 요청을 보내는 함수
 * @param url - 요청할 URL
 * @param token - 인증 토큰
 * @param options - 요청 옵션
 * @returns API 응답 데이터
 */
export const apiRequestWithAuth = async <T = any>(
  url: string,
  token: string,
  options: ApiOptions = {}
): Promise<ApiResponse<T>> => {
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  return apiRequest<T>(url, { ...options, headers });
};

/**
 * 파일 업로드를 위한 함수
 * @param url - 업로드할 URL
 * @param file - 업로드할 파일
 * @param token - 인증 토큰 (선택사항)
 * @returns API 응답 데이터
 */
export const uploadFile = async (
  url: string,
  file: any,
  token?: string
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("파일 업로드 실패:", error);

    return {
      success: false,
      error:
        error instanceof Error ? error.message : "파일 업로드에 실패했습니다.",
    };
  }
};

/**
 * API 에러를 처리하는 함수
 * @param error - 발생한 에러
 * @returns 사용자에게 표시할 에러 메시지
 */
export const handleApiError = (error: any): string => {
  if (error.response) {
    // 서버에서 응답을 받았지만 에러 상태인 경우
    const status = error.response.status;

    switch (status) {
      case 400:
        return "잘못된 요청입니다.";
      case 401:
        return "인증이 필요합니다.";
      case 403:
        return "접근 권한이 없습니다.";
      case 404:
        return "요청한 리소스를 찾을 수 없습니다.";
      case 500:
        return "서버 오류가 발생했습니다.";
      default:
        return "알 수 없는 오류가 발생했습니다.";
    }
  } else if (error.request) {
    // 요청은 보냈지만 응답을 받지 못한 경우
    return "네트워크 연결을 확인해주세요.";
  } else {
    // 요청 설정 중 오류가 발생한 경우
    return "요청 처리 중 오류가 발생했습니다.";
  }
};
