/**
 * 입력값 검증을 위한 유틸리티 함수들
 * 이메일, 전화번호, 비밀번호 등의 유효성을 검사합니다.
 */

/**
 * 이메일 형식이 올바른지 검증하는 함수
 * @param email - 검증할 이메일 주소
 * @returns 이메일이 유효하면 true, 그렇지 않으면 false
 */
export const isValidEmail = (email: string): boolean => {
  // 이메일 정규식 패턴
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 전화번호 형식이 올바른지 검증하는 함수
 * @param phone - 검증할 전화번호
 * @returns 전화번호가 유효하면 true, 그렇지 않으면 false
 */
export const isValidPhone = (phone: string): boolean => {
  // 전화번호 정규식 패턴 (한국 전화번호 형식)
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, "")); // 공백 제거 후 검증
};

/**
 * 비밀번호 강도를 검증하는 함수
 * @param password - 검증할 비밀번호
 * @returns 비밀번호가 강력하면 true, 그렇지 않으면 false
 */
export const isValidPassword = (password: string): boolean => {
  // 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * 문자열이 비어있는지 검증하는 함수
 * @param value - 검증할 문자열
 * @returns 문자열이 비어있으면 true, 그렇지 않으면 false
 */
export const isEmpty = (value: string): boolean => {
  return !value || value.trim().length === 0;
};

/**
 * 문자열 길이가 지정된 범위 내에 있는지 검증하는 함수
 * @param value - 검증할 문자열
 * @param minLength - 최소 길이
 * @param maxLength - 최대 길이
 * @returns 길이가 범위 내에 있으면 true, 그렇지 않으면 false
 */
export const isValidLength = (
  value: string,
  minLength: number,
  maxLength: number
): boolean => {
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
};

/**
 * 숫자인지 검증하는 함수
 * @param value - 검증할 값
 * @returns 숫자이면 true, 그렇지 않으면 false
 */
export const isNumber = (value: string): boolean => {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

/**
 * 양수인지 검증하는 함수
 * @param value - 검증할 값
 * @returns 양수이면 true, 그렇지 않으면 false
 */
export const isPositiveNumber = (value: string): boolean => {
  const num = Number(value);
  return !isNaN(num) && num > 0;
};

/**
 * URL 형식이 올바른지 검증하는 함수
 * @param url - 검증할 URL
 * @returns URL이 유효하면 true, 그렇지 않으면 false
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 한국어 이름 형식이 올바른지 검증하는 함수
 * @param name - 검증할 이름
 * @returns 이름이 유효하면 true, 그렇지 않으면 false
 */
export const isValidKoreanName = (name: string): boolean => {
  // 한국어 이름 정규식 (2-4자, 한글만)
  const koreanNameRegex = /^[가-힣]{2,4}$/;
  return koreanNameRegex.test(name);
};
