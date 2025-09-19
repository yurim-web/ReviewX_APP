/**
 * API 호출을 위한 커스텀 훅
 * 로딩 상태, 에러 처리, 재시도 기능을 제공합니다.
 */

import { useState, useEffect, useCallback } from "react";
import { ApiResponse } from "../types";

// API 훅의 상태 타입
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// API 훅의 옵션 타입
interface UseApiOptions {
  immediate?: boolean; // 컴포넌트 마운트 시 즉시 실행할지 여부
  retryCount?: number; // 재시도 횟수
  retryDelay?: number; // 재시도 간격 (ms)
}

/**
 * API 호출을 위한 커스텀 훅
 * @param apiFunction - 호출할 API 함수
 * @param options - 훅 옵션
 * @returns API 상태와 refetch 함수
 */
export const useApi = <T = any>(
  apiFunction: () => Promise<ApiResponse<T>>,
  options: UseApiOptions = {}
): ApiState<T> => {
  const { immediate = true, retryCount = 0, retryDelay = 1000 } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryAttempts, setRetryAttempts] = useState(0);

  // API 호출 함수
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunction();

      if (response.success) {
        setData(response.data || null);
        setRetryAttempts(0); // 성공 시 재시도 카운트 리셋
      } else {
        throw new Error(response.error || "API 호출에 실패했습니다.");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      setError(errorMessage);

      // 재시도 로직
      if (retryAttempts < retryCount) {
        setTimeout(() => {
          setRetryAttempts((prev) => prev + 1);
          fetchData();
        }, retryDelay);
      }
    } finally {
      setLoading(false);
    }
  }, [apiFunction, retryAttempts, retryCount, retryDelay]);

  // refetch 함수
  const refetch = useCallback(() => {
    setRetryAttempts(0);
    fetchData();
  }, [fetchData]);

  // 컴포넌트 마운트 시 API 호출
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};

/**
 * POST 요청을 위한 커스텀 훅
 * @param apiFunction - 호출할 API 함수
 * @returns API 상태와 mutate 함수
 */
export const useMutation = <T = any, P = any>(
  apiFunction: (params: P) => Promise<ApiResponse<T>>
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // mutate 함수
  const mutate = useCallback(
    async (params: P) => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiFunction(params);

        if (response.success) {
          setData(response.data || null);
          return response;
        } else {
          throw new Error(response.error || "API 호출에 실패했습니다.");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "알 수 없는 오류가 발생했습니다.";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return {
    data,
    loading,
    error,
    mutate,
  };
};

/**
 * 무한 스크롤을 위한 커스텀 훅
 * @param apiFunction - 호출할 API 함수 (page 파라미터 포함)
 * @param options - 훅 옵션
 * @returns 무한 스크롤 상태와 함수들
 */
export const useInfiniteScroll = <T = any>(
  apiFunction: (page: number) => Promise<ApiResponse<T[]>>,
  options: { pageSize?: number } = {}
) => {
  const { pageSize = 20 } = options;

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // 데이터 로드 함수
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const response = await apiFunction(currentPage);

      if (response.success && response.data) {
        const newData = response.data;

        if (currentPage === 1) {
          setData(newData);
        } else {
          setData((prev) => [...prev, ...newData]);
        }

        setHasMore(newData.length === pageSize);
        setCurrentPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [apiFunction, currentPage, loading, hasMore, pageSize]);

  // 초기화 함수
  const reset = useCallback(() => {
    setData([]);
    setCurrentPage(1);
    setHasMore(true);
    setError(null);
  }, []);

  // 새로고침 함수
  const refresh = useCallback(() => {
    reset();
    loadMore();
  }, [reset, loadMore]);

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    reset,
  };
};
