import React from "react";
import { ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { CommonHeader } from "../components/common";

interface HomeScreenProps {
  navigation: any;
}

const { width } = Dimensions.get("window");

// 🎨 CSS처럼 사용하는 styled-components들

// 1. 메인 컨테이너
const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// 2. 네비게이션 컨테이너
const NavContainer = styled.View`
  background-color: white;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

const NavScroll = styled(ScrollView)`
  padding-horizontal: 15px;
`;

const NavTab = styled.TouchableOpacity<{ active?: boolean }>`
  padding-horizontal: 20px;
  padding-vertical: 8px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#FF69B4" : "transparent")};
`;

const NavText = styled.Text<{ active?: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.active ? "white" : "#666")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
`;

// 6. 콘텐츠 스크롤
const Content = styled(ScrollView)`
  flex: 1;
`;

// 7. 생일 배너
const BirthdayBanner = styled(LinearGradient)`
  margin: 15px;
  border-radius: 15px;
  padding: 25px;
  min-height: 180px;
  position: relative;
  overflow: hidden;
`;

const BannerContent = styled.View`
  align-items: center;
  z-index: 2;
`;

const BirthdayText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;

const BirthdayTextBottom = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #87ceeb;
  margin-bottom: 15px;
`;

const BannerDescription = styled.Text`
  font-size: 12px;
  color: #f0f0f0;
  text-align: center;
  line-height: 16px;
  max-width: 80%;
`;

const BannerDecorations = styled.View`
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 1;
`;

const CakeImage = styled(Image)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 0px;
  border-radius: 30px;
`;

const ConfettiImage = styled(Image)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: -10px;
  border-radius: 20px;
`;

const BalloonImage = styled(Image)`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 25px;
`;

// 8. 섹션 제목
const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-horizontal: 15px;
  margin-bottom: 15px;
`;

// 9. 캠페인 그리드
const CampaignsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-horizontal: 15px;
  padding-bottom: 20px;
`;

const CampaignCard = styled.View`
  width: ${(width - 45) / 2}px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 15px;
  margin-right: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  overflow: hidden;
`;

const CardHeader = styled.View`
  position: relative;
  height: 40px;
`;

// 10. 배지들 (조건부 스타일링)
interface BadgeProps {
  type: "date" | "time" | "closed" | "urgent";
}

const Badge = styled.View<BadgeProps>`
  position: absolute;
  top: 8px;
  left: ${(props) => (props.type === "time" ? "auto" : "8px")};
  right: ${(props) => (props.type === "time" ? "8px" : "auto")};
  background-color: ${(props) => {
    switch (props.type) {
      case "date":
        return "#333";
      case "time":
        return "#FF69B4";
      case "closed":
        return "#FF4444";
      case "urgent":
        return "#FF4444";
      default:
        return "#333";
    }
  }};
  padding-horizontal: 8px;
  padding-vertical: 4px;
  border-radius: 4px;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

const StatusText = styled.Text`
  color: white;
  font-size: 8px;
`;

// 11. 카드 이미지
const CardImageContainer = styled.View`
  height: 120px;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

// 12. 카드 콘텐츠
const CardContent = styled.View`
  padding: 12px;
`;

const CategoryContainer = styled.View`
  margin-bottom: 8px;
`;

interface CategoryBadgeProps {
  color: "green" | "orange";
}

const CategoryBadge = styled.View<CategoryBadgeProps>`
  background-color: ${(props) =>
    props.color === "green" ? "#4CAF50" : "#FF9800"};
  padding-horizontal: 8px;
  padding-vertical: 4px;
  border-radius: 4px;
  align-self: flex-start;
`;

const CategoryText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

const ProductTitle = styled.Text`
  font-size: 12px;
  color: #333;
  line-height: 16px;
  margin-bottom: 8px;
`;

const RecruitmentInfo = styled.Text`
  font-size: 11px;
  color: #666;
  margin-bottom: 4px;
`;

const SpecialText = styled.Text`
  font-size: 11px;
  color: #ff69b4;
  font-weight: bold;
`;

// 메인 컴포넌트
export default function HomeScreenStyled({ navigation }: HomeScreenProps) {
  return (
    <Container>
      {/* 공통 헤더 */}
      <CommonHeader navigation={navigation} />

      {/* 네비게이션 탭 */}
      <NavContainer>
        <NavScroll horizontal showsHorizontalScrollIndicator={false}>
          <NavTab active>
            <NavText active>홈</NavText>
          </NavTab>
          <NavTab>
            <NavText>배송형</NavText>
          </NavTab>
          <NavTab>
            <NavText>방문형</NavText>
          </NavTab>
          <NavTab>
            <NavText>구매평</NavText>
          </NavTab>
          <NavTab>
            <NavText>체험단</NavText>
          </NavTab>
          <NavTab>
            <NavText>기자단</NavText>
          </NavTab>
        </NavScroll>
      </NavContainer>

      <Content showsVerticalScrollIndicator={false}>
        {/* 생일 축하 배너 */}
        <BirthdayBanner colors={["#E6E6FA", "#DDA0DD", "#FFB6C1"]}>
          <BannerContent>
            <BirthdayText>HAPPY</BirthdayText>
            <BirthdayTextBottom>BIRTHDAY</BirthdayTextBottom>
            <BannerDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BannerDescription>
          </BannerContent>
          <BannerDecorations>
            <CakeImage
              source={{
                uri: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=100&h=100&fit=crop",
              }}
              resizeMode="cover"
            />
            <ConfettiImage
              source={{
                uri: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=80&h=80&fit=crop",
              }}
              resizeMode="cover"
            />
            <BalloonImage
              source={{
                uri: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=60&h=60&fit=crop",
              }}
              resizeMode="cover"
            />
          </BannerDecorations>
        </BirthdayBanner>

        {/* 캠페인 섹션 */}
        <SectionTitle>선정 확률 높은 캠페인</SectionTitle>

        {/* 캠페인 카드들 */}
        <CampaignsGrid>
          {/* 첫 번째 카드 */}
          <CampaignCard>
            <CardHeader>
              <Badge type="date">
                <BadgeText>1/25 (화) 10:00</BadgeText>
                <StatusText>모집 오픈</StatusText>
              </Badge>
            </CardHeader>
            <CardImageContainer>
              <ProductImage
                source={{
                  uri: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
                }}
                resizeMode="cover"
              />
            </CardImageContainer>
            <CardContent>
              <CategoryContainer>
                <CategoryBadge color="green">
                  <CategoryText>기자단</CategoryText>
                </CategoryBadge>
              </CategoryContainer>
              <ProductTitle>
                노이즈캔슬링 HIFI 블루투스 5.4 스테레오 헤드셋
              </ProductTitle>
              <RecruitmentInfo>모집 682명/3명</RecruitmentInfo>
            </CardContent>
          </CampaignCard>

          {/* 두 번째 카드 */}
          <CampaignCard>
            <CardHeader>
              <Badge type="time">
                <BadgeText>6일 전</BadgeText>
              </Badge>
            </CardHeader>
            <CardImageContainer>
              <ProductImage
                source={{
                  uri: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop",
                }}
                resizeMode="cover"
              />
            </CardImageContainer>
            <CardContent>
              <CategoryContainer>
                <CategoryBadge color="orange">
                  <CategoryText>구매평</CategoryText>
                </CategoryBadge>
              </CategoryContainer>
              <ProductTitle>
                덴클 비건인증 천연가루치약 입냄새98%제거 충치예방
              </ProductTitle>
              <RecruitmentInfo>모집 10명/50명</RecruitmentInfo>
            </CardContent>
          </CampaignCard>

          {/* 세 번째 카드 */}
          <CampaignCard>
            <CardHeader>
              <Badge type="closed">
                <BadgeText>마감</BadgeText>
              </Badge>
            </CardHeader>
            <CardImageContainer>
              <ProductImage
                source={{
                  uri: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=200&fit=crop",
                }}
                resizeMode="cover"
              />
            </CardImageContainer>
            <CardContent>
              <ProductTitle>해신탕</ProductTitle>
              <SpecialText>특별구성</SpecialText>
            </CardContent>
          </CampaignCard>

          {/* 네 번째 카드 */}
          <CampaignCard>
            <CardHeader>
              <Badge type="urgent">
                <BadgeText>긴급</BadgeText>
              </Badge>
            </CardHeader>
            <CardImageContainer>
              <ProductImage
                source={{
                  uri: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop",
                }}
                resizeMode="cover"
              />
            </CardImageContainer>
            <CardContent>
              <ProductTitle>WHB 텀블러</ProductTitle>
            </CardContent>
          </CampaignCard>
        </CampaignsGrid>
      </Content>
    </Container>
  );
}
