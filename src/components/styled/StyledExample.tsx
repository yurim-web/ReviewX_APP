import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";
import { CommonHeader } from "../common";

// 🎨 CSS처럼 사용하는 styled-components 예제들

// 1. 기본 컨테이너 스타일
const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

// 1-1. 콘텐츠 컨테이너
const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

// 2. 카드 스타일 (CSS의 .card 클래스처럼)
const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  elevation: 3; /* Android 그림자 */
`;

// 3. 제목 스타일
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  margin-bottom: 16px;
`;

// 4. 버튼 스타일 (CSS의 .btn 클래스처럼)
const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  margin: 8px 0;
`;

// 5. 버튼 텍스트
const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

// 6. 입력 필드 스타일
const Input = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin: 8px 0;
  background-color: white;
`;

// 7. 반응형 그리드 (CSS Grid처럼)
const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GridItem = styled.View`
  width: 48%;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

// 8. 호버 효과 (터치 시 색상 변경)
const HoverButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  margin: 8px 0;
`;

const HoverButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

// 9. 조건부 스타일링 (props 사용)
interface StatusProps {
  status: "success" | "error" | "warning";
}

const StatusBadge = styled.View<StatusProps>`
  padding: 8px 16px;
  border-radius: 20px;
  align-self: flex-start;
  background-color: ${(props: StatusProps) => {
    switch (props.status) {
      case "success":
        return "#d4edda";
      case "error":
        return "#f8d7da";
      case "warning":
        return "#fff3cd";
      default:
        return "#e2e3e5";
    }
  }};
`;

const StatusText = styled.Text<StatusProps>`
  color: ${(props: StatusProps) => {
    switch (props.status) {
      case "success":
        return "#155724";
      case "error":
        return "#721c24";
      case "warning":
        return "#856404";
      default:
        return "#383d41";
    }
  }};
  font-weight: 600;
  font-size: 14px;
`;

// 10. 애니메이션 효과
const AnimatedCard = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin: 8px 0;
  transform: scale(1);
  transition: transform 0.2s ease;
`;

// 메인 컴포넌트
const StyledExample: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      {/* 공통 헤더 */}
      <CommonHeader navigation={navigation} />
      <ContentContainer>
        <Title>🎨 CSS처럼 사용하는 React Native</Title>

        <Card>
          <Title>기본 카드</Title>
          <Input placeholder="여기에 입력하세요..." />
          <Button>
            <ButtonText>클릭하세요!</ButtonText>
          </Button>
        </Card>

        <Card>
          <Title>상태 배지들</Title>
          <StatusBadge status="success">
            <StatusText status="success">성공!</StatusText>
          </StatusBadge>
          <StatusBadge status="error">
            <StatusText status="error">오류 발생</StatusText>
          </StatusBadge>
          <StatusBadge status="warning">
            <StatusText status="warning">주의 필요</StatusText>
          </StatusBadge>
        </Card>

        <Card>
          <Title>그리드 레이아웃</Title>
          <Grid>
            <GridItem>
              <Title>아이템 1</Title>
            </GridItem>
            <GridItem>
              <Title>아이템 2</Title>
            </GridItem>
            <GridItem>
              <Title>아이템 3</Title>
            </GridItem>
            <GridItem>
              <Title>아이템 4</Title>
            </GridItem>
          </Grid>
        </Card>

        <HoverButton>
          <HoverButtonText>호버 효과 버튼</HoverButtonText>
        </HoverButton>

        <AnimatedCard>
          <Title>애니메이션 카드</Title>
          <ButtonText>터치해보세요!</ButtonText>
        </AnimatedCard>
      </ContentContainer>
    </Container>
  );
};

export default StyledExample;
