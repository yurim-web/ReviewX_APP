/**
 * 데이터 포맷팅을 위한 유틸리티 함수들
 * 날짜, 시간, 숫자, 텍스트 등을 원하는 형식으로 변환합니다.
 */

/**
 * 날짜를 한국어 형식으로 포맷팅하는 함수
 * @param date - 포맷팅할 날짜 (Date 객체 또는 문자열)
 * @returns 포맷팅된 날짜 문자열 (예: "2024년 1월 25일")
 */
export const formatKoreanDate = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // getMonth()는 0부터 시작
  const day = dateObj.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

/**
 * 날짜를 간단한 형식으로 포맷팅하는 함수
 * @param date - 포맷팅할 날짜
 * @returns 포맷팅된 날짜 문자열 (예: "2024-01-25")
 */
export const formatSimpleDate = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * 시간을 12시간 형식으로 포맷팅하는 함수
 * @param date - 포맷팅할 날짜/시간
 * @returns 포맷팅된 시간 문자열 (예: "오후 2:30")
 */
export const formatTime12Hour = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "오후" : "오전";
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

  return `${period} ${displayHours}:${minutes}`;
};

/**
 * 시간을 24시간 형식으로 포맷팅하는 함수
 * @param date - 포맷팅할 날짜/시간
 * @returns 포맷팅된 시간 문자열 (예: "14:30")
 */
export const formatTime24Hour = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

/**
 * 숫자를 천 단위 구분자와 함께 포맷팅하는 함수
 * @param number - 포맷팅할 숫자
 * @returns 포맷팅된 숫자 문자열 (예: "1,234,567")
 */
export const formatNumber = (number: number): string => {
  return number.toLocaleString("ko-KR");
};

/**
 * 숫자를 통화 형식으로 포맷팅하는 함수
 * @param amount - 포맷팅할 금액
 * @param currency - 통화 단위 (기본값: 'KRW')
 * @returns 포맷팅된 통화 문자열 (예: "₩1,234,567")
 */
export const formatCurrency = (
  amount: number,
  currency: string = "KRW"
): string => {
  const formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: currency,
  });

  return formatter.format(amount);
};

/**
 * 전화번호를 하이픈과 함께 포맷팅하는 함수
 * @param phone - 포맷팅할 전화번호
 * @returns 포맷팅된 전화번호 문자열 (예: "010-1234-5678")
 */
export const formatPhoneNumber = (phone: string): string => {
  // 숫자만 추출
  const numbers = phone.replace(/\D/g, "");

  // 010-1234-5678 형식으로 포맷팅
  if (numbers.length === 11) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }

  // 02-123-4567 형식으로 포맷팅 (서울 지역번호)
  if (numbers.length === 10 && numbers.startsWith("02")) {
    return `${numbers.slice(0, 2)}-${numbers.slice(2, 5)}-${numbers.slice(5)}`;
  }

  return phone; // 포맷팅할 수 없는 경우 원본 반환
};

/**
 * 텍스트를 지정된 길이로 자르고 말줄임표를 추가하는 함수
 * @param text - 자를 텍스트
 * @param maxLength - 최대 길이
 * @returns 잘린 텍스트 (예: "긴 텍스트...")
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
};

/**
 * 상대적 시간을 표시하는 함수 (예: "3분 전", "2시간 전")
 * @param date - 기준이 될 날짜/시간
 * @returns 상대적 시간 문자열
 */
export const formatRelativeTime = (date: Date | string): string => {
  const now = new Date();
  const targetDate = typeof date === "string" ? new Date(date) : date;

  const diffInSeconds = Math.floor(
    (now.getTime() - targetDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}주 전`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}년 전`;
};

/**
 * 파일 크기를 읽기 쉬운 형식으로 포맷팅하는 함수
 * @param bytes - 파일 크기 (바이트)
 * @returns 포맷팅된 파일 크기 문자열 (예: "1.5 MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
