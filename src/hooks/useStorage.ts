/**
 * 로컬 스토리지를 위한 커스텀 훅들
 * AsyncStorage를 쉽게 사용할 수 있도록 도와줍니다.
 */

import { useState, useEffect, useCallback } from "react";
import { storeData, getData, removeData } from "../utils/storage";

/**
 * 로컬 스토리지 값을 관리하는 커스텀 훅
 * @param key - 스토리지 키
 * @param defaultValue - 기본값
 * @returns [값, 설정 함수, 삭제 함수, 로딩 상태]
 */
export const useStorage = <T = any>(
  key: string,
  defaultValue: T | null = null
): [
  T | null,
  (value: T | null) => Promise<boolean>,
  () => Promise<boolean>,
  boolean
] => {
  const [value, setValue] = useState<T | null>(defaultValue);
  const [loading, setLoading] = useState(true);

  // 스토리지에서 값 불러오기
  const loadValue = useCallback(async () => {
    try {
      setLoading(true);
      const storedValue = await getData(key);
      setValue(storedValue !== null ? storedValue : defaultValue);
    } catch (error) {
      console.error(`스토리지에서 ${key} 불러오기 실패:`, error);
      setValue(defaultValue);
    } finally {
      setLoading(false);
    }
  }, [key, defaultValue]);

  // 스토리지에 값 저장하기
  const setStorageValue = useCallback(
    async (newValue: T | null): Promise<boolean> => {
      try {
        const success = await storeData(key, newValue);
        if (success) {
          setValue(newValue);
        }
        return success;
      } catch (error) {
        console.error(`스토리지에 ${key} 저장 실패:`, error);
        return false;
      }
    },
    [key]
  );

  // 스토리지에서 값 삭제하기
  const removeStorageValue = useCallback(async (): Promise<boolean> => {
    try {
      const success = await removeData(key);
      if (success) {
        setValue(defaultValue);
      }
      return success;
    } catch (error) {
      console.error(`스토리지에서 ${key} 삭제 실패:`, error);
      return false;
    }
  }, [key, defaultValue]);

  // 컴포넌트 마운트 시 값 불러오기
  useEffect(() => {
    loadValue();
  }, [loadValue]);

  return [value, setStorageValue, removeStorageValue, loading];
};

/**
 * 사용자 정보를 관리하는 커스텀 훅
 * @returns [사용자 정보, 설정 함수, 삭제 함수, 로딩 상태]
 */
export const useUserInfo = () => {
  return useStorage("userInfo", null);
};

/**
 * 인증 토큰을 관리하는 커스텀 훅
 * @returns [토큰, 설정 함수, 삭제 함수, 로딩 상태]
 */
export const useAuthToken = () => {
  return useStorage<string>("authToken", null);
};

/**
 * 앱 설정을 관리하는 커스텀 훅
 * @param defaultSettings - 기본 설정
 * @returns [설정, 설정 함수, 삭제 함수, 로딩 상태]
 */
export const useAppSettings = <T = any>(defaultSettings: T) => {
  return useStorage("appSettings", defaultSettings);
};

/**
 * 테마를 관리하는 커스텀 훅
 * @returns [테마, 테마 설정 함수, 로딩 상태]
 */
export const useTheme = () => {
  const [theme, setThemeValue, , loading] = useStorage<
    "light" | "dark" | "auto"
  >("theme", "light");

  const setTheme = useCallback(
    async (newTheme: "light" | "dark" | "auto") => {
      return await setThemeValue(newTheme);
    },
    [setThemeValue]
  );

  return [theme, setTheme, loading] as const;
};

/**
 * 언어 설정을 관리하는 커스텀 훅
 * @returns [언어, 언어 설정 함수, 로딩 상태]
 */
export const useLanguage = () => {
  const [language, setLanguageValue, , loading] = useStorage<string>(
    "language",
    "ko"
  );

  const setLanguage = useCallback(
    async (newLanguage: string) => {
      return await setLanguageValue(newLanguage);
    },
    [setLanguageValue]
  );

  return [language, setLanguage, loading] as const;
};

/**
 * 즐겨찾기 목록을 관리하는 커스텀 훅
 * @returns [즐겨찾기 목록, 추가 함수, 삭제 함수, 로딩 상태]
 */
export const useFavorites = <T = any>() => {
  const [favorites, setFavoritesValue, , loading] = useStorage<T[]>(
    "favorites",
    []
  );

  const addFavorite = useCallback(
    async (item: T) => {
      const currentFavorites = favorites || [];
      if (
        !currentFavorites.find(
          (fav) => JSON.stringify(fav) === JSON.stringify(item)
        )
      ) {
        return await setFavoritesValue([...currentFavorites, item]);
      }
      return true;
    },
    [favorites, setFavoritesValue]
  );

  const removeFavorite = useCallback(
    async (item: T) => {
      const currentFavorites = favorites || [];
      const filteredFavorites = currentFavorites.filter(
        (fav) => JSON.stringify(fav) !== JSON.stringify(item)
      );
      return await setFavoritesValue(filteredFavorites);
    },
    [favorites, setFavoritesValue]
  );

  const isFavorite = useCallback(
    (item: T) => {
      const currentFavorites = favorites || [];
      return currentFavorites.some(
        (fav) => JSON.stringify(fav) === JSON.stringify(item)
      );
    },
    [favorites]
  );

  return [favorites, addFavorite, removeFavorite, isFavorite, loading] as const;
};

/**
 * 검색 기록을 관리하는 커스텀 훅
 * @param maxHistory - 최대 기록 수
 * @returns [검색 기록, 추가 함수, 삭제 함수, 전체 삭제 함수, 로딩 상태]
 */
export const useSearchHistory = (maxHistory: number = 10) => {
  const [history, setHistoryValue, , loading] = useStorage<string[]>(
    "searchHistory",
    []
  );

  const addToHistory = useCallback(
    async (searchTerm: string) => {
      if (!searchTerm.trim()) return true;

      const currentHistory = history || [];
      const filteredHistory = currentHistory.filter(
        (item) => item !== searchTerm
      );
      const newHistory = [searchTerm, ...filteredHistory].slice(0, maxHistory);

      return await setHistoryValue(newHistory);
    },
    [history, setHistoryValue, maxHistory]
  );

  const removeFromHistory = useCallback(
    async (searchTerm: string) => {
      const currentHistory = history || [];
      const filteredHistory = currentHistory.filter(
        (item) => item !== searchTerm
      );
      return await setHistoryValue(filteredHistory);
    },
    [history, setHistoryValue]
  );

  const clearHistory = useCallback(async () => {
    return await setHistoryValue([]);
  }, [setHistoryValue]);

  return [
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    loading,
  ] as const;
};
