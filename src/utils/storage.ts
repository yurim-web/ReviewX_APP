/**
 * 로컬 스토리지 관리를 위한 유틸리티 함수들
 * AsyncStorage를 사용하여 데이터를 저장하고 불러옵니다.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * 데이터를 로컬 스토리지에 저장하는 함수
 * @param key - 저장할 데이터의 키
 * @param value - 저장할 데이터 (객체는 JSON으로 변환됨)
 * @returns 저장 성공 여부
 */
export const storeData = async (key: string, value: any): Promise<boolean> => {
  try {
    // 객체인 경우 JSON 문자열로 변환
    const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error("데이터 저장 실패:", error);
    return false;
  }
};

/**
 * 로컬 스토리지에서 데이터를 불러오는 함수
 * @param key - 불러올 데이터의 키
 * @returns 저장된 데이터 (문자열 또는 파싱된 객체)
 */
export const getData = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue === null) {
      return null; // 데이터가 없는 경우
    }

    // JSON 파싱 시도
    try {
      return JSON.parse(jsonValue);
    } catch {
      // JSON이 아닌 경우 원본 문자열 반환
      return jsonValue;
    }
  } catch (error) {
    console.error("데이터 불러오기 실패:", error);
    return null;
  }
};

/**
 * 로컬 스토리지에서 데이터를 삭제하는 함수
 * @param key - 삭제할 데이터의 키
 * @returns 삭제 성공 여부
 */
export const removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("데이터 삭제 실패:", error);
    return false;
  }
};

/**
 * 모든 로컬 스토리지 데이터를 삭제하는 함수
 * @returns 삭제 성공 여부
 */
export const clearAllData = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.error("모든 데이터 삭제 실패:", error);
    return false;
  }
};

/**
 * 로컬 스토리지의 모든 키를 가져오는 함수
 * @returns 모든 키의 배열
 */
export const getAllKeys = async (): Promise<string[]> => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error("키 목록 가져오기 실패:", error);
    return [];
  }
};

/**
 * 여러 키의 데이터를 한 번에 가져오는 함수
 * @param keys - 불러올 데이터의 키 배열
 * @returns 키-값 쌍의 객체
 */
export const getMultipleData = async (
  keys: string[]
): Promise<Record<string, any>> => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    const result: Record<string, any> = {};

    values.forEach(([key, value]) => {
      if (value !== null) {
        try {
          result[key] = JSON.parse(value);
        } catch {
          result[key] = value;
        }
      }
    });

    return result;
  } catch (error) {
    console.error("여러 데이터 불러오기 실패:", error);
    return {};
  }
};

/**
 * 여러 키-값 쌍을 한 번에 저장하는 함수
 * @param keyValuePairs - 저장할 키-값 쌍의 배열
 * @returns 저장 성공 여부
 */
export const storeMultipleData = async (
  keyValuePairs: [string, any][]
): Promise<boolean> => {
  try {
    const stringifiedPairs = keyValuePairs.map(([key, value]) => [
      key,
      typeof value === "string" ? value : JSON.stringify(value),
    ]);

    await AsyncStorage.multiSet(stringifiedPairs);
    return true;
  } catch (error) {
    console.error("여러 데이터 저장 실패:", error);
    return false;
  }
};

/**
 * 사용자 정보를 저장하는 함수
 * @param userInfo - 저장할 사용자 정보 객체
 * @returns 저장 성공 여부
 */
export const storeUserInfo = async (userInfo: any): Promise<boolean> => {
  return await storeData("userInfo", userInfo);
};

/**
 * 사용자 정보를 불러오는 함수
 * @returns 저장된 사용자 정보
 */
export const getUserInfo = async (): Promise<any> => {
  return await getData("userInfo");
};

/**
 * 로그인 토큰을 저장하는 함수
 * @param token - 저장할 토큰
 * @returns 저장 성공 여부
 */
export const storeAuthToken = async (token: string): Promise<boolean> => {
  return await storeData("authToken", token);
};

/**
 * 로그인 토큰을 불러오는 함수
 * @returns 저장된 토큰
 */
export const getAuthToken = async (): Promise<string | null> => {
  return await getData("authToken");
};

/**
 * 로그인 토큰을 삭제하는 함수
 * @returns 삭제 성공 여부
 */
export const removeAuthToken = async (): Promise<boolean> => {
  return await removeData("authToken");
};
