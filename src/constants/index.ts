/**
 * 모든 상수들을 한 곳에서 export하는 파일
 *
 * 사용 예시:
 * import { COLORS, SPACING, COMMON_MESSAGES } from '../constants';
 */

// 색상 상수들 export
export * from "./colors";

// 크기 상수들 export
export * from "./sizes";

// 문자열 상수들 export
export * from "./strings";

// 폰트 관련 상수들 export (중복 제거를 위해 명시적 export)
export { FONTS, TEXT_STYLES } from "./fonts";
