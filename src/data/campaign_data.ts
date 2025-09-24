/**
 * 캠페인 데이터 타입 정의 (웹 버전 데이터 구조)
 * 각 캠페인 카드에 표시될 정보들을 정의
 */
export interface CampaignData {
  id: string; // 캠페인 고유 식별자
  title: string; // 캠페인 제목
  category: string; // 캠페인 카테고리 (예: "방문형", "체험단", "구매평")
  categoryIcon: string; // 카테고리 아이콘 경로 (예: "/images/brand_logo/insta.svg")
  image: string | any; // 캠페인 대표 이미지 경로 (URL 문자열 또는 require 객체)
  subcategory: string; // 서브카테고리 (예: "반려동물")
  points: number; // 지급 포인트
  description: string; // 캠페인 설명
  recruitment: {
    current: number; // 현재 모집된 인원수
    total: number; // 전체 모집 인원수
  };
  detailedSchedule: {
    applicationStart: string; // 신청 시작일시
    applicationEnd: string; // 신청 마감일
    announcement: string; // 당첨 발표일
    purchasePeriod: string; // 구매 기간
  };
  campaign_detail_image: string | any; // 캠페인 상세 이미지 (URL 문자열 또는 require 객체)
  productDescription: string; // 제품 설명
  keywords: string[]; // 키워드 배열
}

/**
 * 테스트용 캠페인 데이터 (웹 버전 데이터 구조)
 * 각 캠페인은 고유한 ID, 제목, 카테고리, 모집 정보 등을 포함
 */
export const campaigns: CampaignData[] = [
  {
    id: "7",
    title: "[경기/김포] 고양이 미용 예쁘게 해드립니다! 받으러 오세요~",
    category: "방문형",
    categoryIcon: "/images/brand_logo/insta.svg",
    image: require("../../assets/images/exdataimg/eximg_2.png"),
    subcategory: "반려동물",
    points: 20000,
    description: "[경기/김포] 고양이 미용 예쁘게 해드립니다!",
    recruitment: {
      current: 106,
      total: 10,
    },
    detailedSchedule: {
      applicationStart: "2025-01-19",
      applicationEnd: "2025-02-09",
      announcement: "2025-02-11",
      purchasePeriod: "2025-02-11 ~ 2025-02-14",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/exdetail_1.png"),
    productDescription:
      "내셔널지오그래픽 모바일 러닝벨트 M(블랙), S(랜덤) 총 2개",

    overlay: {
      date: "1/25 (화) 10:00",
      status: "모집 오픈",
    },
  },
  {
    id: "1",
    title: "신제품 체험단 모집",
    category: "체험단",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "뷰티",
    points: 15000,
    description: "신제품 체험단 모집",
    recruitment: {
      current: 682,
      total: 3,
    },
    schedule: "",
    dayCount: "6일",
    detailedSchedule: {
      applicationStart: "2025-01-15",
      applicationEnd: "2025-01-25",
      announcement: "2025-01-27",
      purchasePeriod: "2025-01-27 ~ 2025-01-30",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_3.png"),
    productName: "신제품 체험단 제품",
    productDescription: "신제품 체험단 모집 제품",
    keywords: ["신제품", "체험단", "뷰티"],
    overlay: {
      date: "1/25 (화) 10:00",
      status: "모집 오픈",
    },
  },
  {
    id: "2",
    title: "맛집 리뷰 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/kakaopre.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "맛집",
    points: 10000,
    description: "맛집 리뷰 작성 이벤트",
    recruitment: {
      current: 150,
      total: 10,
    },
    schedule: "",
    dayCount: "3일",
    detailedSchedule: {
      applicationStart: "2025-01-18",
      applicationEnd: "2025-01-28",
      announcement: "2025-01-30",
      purchasePeriod: "2025-01-30 ~ 2025-02-02",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_4.png"),
    productName: "맛집 리뷰 제품",
    productDescription: "맛집 리뷰 작성 이벤트 제품",
    keywords: ["맛집", "리뷰", "이벤트"],
  },
  {
    id: "3",
    title: "새로운 브랜드 체험",
    category: "체험단",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "패션",
    points: 25000,
    description: "새로운 브랜드 체험",
    recruitment: {
      current: 25,
      total: 10,
    },
    schedule: "",
    dayCount: "5일",
    detailedSchedule: {
      applicationStart: "2025-01-20",
      applicationEnd: "2025-01-30",
      announcement: "2025-02-01",
      purchasePeriod: "2025-02-01 ~ 2025-02-04",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_6.png"),
    productName: "새로운 브랜드 제품",
    productDescription: "새로운 브랜드 체험 제품",
    keywords: ["새로운", "브랜드", "체험"],
  },
  {
    id: "4",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_7.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
  {
    id: "5",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_8.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
  {
    id: "6",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_2.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
  {
    id: "8",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_3.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
  {
    id: "9",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_4.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
  {
    id: "10",
    title: "여행 후기 작성 이벤트",
    category: "구매평",
    categoryIcon: "/images/brand_logo/navershop.svg",
    image: require("../../assets/images/exdataimg/eximg_3.png"),
    subcategory: "여행",
    points: 12000,
    description: "여행 후기 작성 이벤트",
    recruitment: {
      current: 80,
      total: 10,
    },
    schedule: "",
    dayCount: "1일",
    detailedSchedule: {
      applicationStart: "2025-01-22",
      applicationEnd: "2025-02-01",
      announcement: "2025-02-03",
      purchasePeriod: "2025-02-03 ~ 2025-02-06",
    },
    campaign_detail_image: require("../../assets/images/exdataimg/eximg_6.png"),
    productName: "여행 후기 제품",
    productDescription: "여행 후기 작성 이벤트 제품",
    keywords: ["여행", "후기", "이벤트"],
  },
];
