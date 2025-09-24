/**
 * 공통 컴포넌트들을 한 곳에서 export하는 파일
 * 다른 파일에서 import할 때 편리하게 사용할 수 있습니다.
 *
 * 사용 예시:
 * import { Button, Card, Input, Loading } from '../components/common';
 */

// (미사용) Button/Card/Input export 제거

// 로딩 컴포넌트 export
export { default as Loading } from "./Loading";

// 공통 헤더 컴포넌트 export
export { default as CommonHeader } from "./fragments/CommonHeader";

// 서브 헤더 컴포넌트 export
export { default as SubHeader } from "./fragments/SubHeader";

// 상단 네비게이션 컴포넌트 export
export { default as TopNavigation } from "./fragments/TopNavigation";

// 가이드 아이콘 컴포넌트 export
export { default as GuideIcon } from "../../../assets/images/header/GuideIcon";

// 마이 아이콘 컴포넌트 export
export { default as MyIcon } from "../../../assets/images/header/MyIcon";

// 헤더 화살표 아이콘 컴포넌트 export
export { default as HeaderArrow } from "../../../assets/images/header/HeaderArrow";
