# 🎨 React Native에서 CSS처럼 스타일링하기

## 📋 목차

1. [styled-components 설치 완료](#styled-components-설치-완료)
2. [기본 사용법](#기본-사용법)
3. [CSS vs React Native 비교](#css-vs-react-native-비교)
4. [실제 예제들](#실제-예제들)
5. [조건부 스타일링](#조건부-스타일링)
6. [애니메이션과 호버 효과](#애니메이션과-호버-효과)
7. [네비게이션 방법](#네비게이션-방법)

## ✅ styled-components 설치 완료

이미 설치가 완료되었습니다! 이제 CSS처럼 사용할 수 있어요.

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

## 🚀 기본 사용법

### 1. 기본 컴포넌트 생성

```tsx
import styled from "styled-components/native";

// CSS의 .container 클래스처럼
const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

// CSS의 .title 클래스처럼
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;
```

### 2. 사용하기

```tsx
function MyComponent() {
  return (
    <Container>
      <Title>안녕하세요!</Title>
    </Container>
  );
}
```

## 🔄 CSS vs React Native 비교

| CSS                     | React Native             | styled-components       |
| ----------------------- | ------------------------ | ----------------------- |
| `background-color: red` | `backgroundColor: 'red'` | `background-color: red` |
| `font-size: 16px`       | `fontSize: 16`           | `font-size: 16px`       |
| `margin: 10px`          | `margin: 10`             | `margin: 10px`          |
| `border-radius: 8px`    | `borderRadius: 8`        | `border-radius: 8px`    |
| `display: flex`         | `flex: 1`                | `display: flex`         |

## 📱 실제 예제들

### 1. 카드 컴포넌트

```tsx
const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  elevation: 3; /* Android 그림자 */
`;
```

### 2. 버튼 컴포넌트

```tsx
const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  margin: 8px 0;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
```

### 3. 입력 필드

```tsx
const Input = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin: 8px 0;
  background-color: white;
`;
```

## 🎯 조건부 스타일링

### 1. Props를 사용한 조건부 스타일

```tsx
interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#6c757d";
      case "danger":
        return "#dc3545";
      default:
        return "#007bff";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "medium":
        return "12px 24px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
  border-radius: 8px;
  align-items: center;
`;
```

### 2. 사용하기

```tsx
<StyledButton variant="primary" size="medium">
  <ButtonText>클릭하세요!</ButtonText>
</StyledButton>
```

## ✨ 애니메이션과 호버 효과

### 1. 터치 효과

```tsx
const HoverButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  margin: 8px 0;
  transform: scale(1);
  transition: transform 0.2s ease;
`;
```

### 2. 그라디언트 배경

```tsx
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = styled(LinearGradient)`
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
`;

// 사용
<GradientButton colors={["#FFB6C1", "#FF69B4"]}>
  <ButtonText>그라디언트 버튼</ButtonText>
</GradientButton>;
```

## 🧭 네비게이션 방법

현재 앱에서 다음 페이지들을 확인할 수 있습니다:

1. **홈 (기존)** - 기존 StyleSheet 방식
2. **홈 (CSS 스타일)** - styled-components로 변경된 버전
3. **CSS 예제** - 다양한 styled-components 예제들

### 네비게이션 버튼

기존 홈 화면의 헤더에서:

- 🎨 버튼: CSS 예제 페이지로 이동
- 💅 버튼: CSS 스타일 홈 페이지로 이동

## 🎨 사용 가능한 CSS 속성들

### ✅ 사용 가능

- `background-color`, `color`, `font-size`, `font-weight`
- `padding`, `margin`, `border`, `border-radius`
- `flex`, `flex-direction`, `justify-content`, `align-items`
- `width`, `height`, `position`, `top`, `left`, `right`, `bottom`
- `box-shadow`, `elevation` (Android)
- `transform`, `transition`

### ❌ 사용 불가능

- `float` → `flex-direction` 사용
- `display: none` → `display: 'none'` (문자열)
- `background-image` → `Image` 컴포넌트 사용
- `z-index` → `zIndex` (카멜케이스)

## 🚀 다음 단계

1. **기존 컴포넌트들을 styled-components로 변경**
2. **테마 시스템 구축**
3. **반응형 디자인 구현**
4. **애니메이션 라이브러리 추가**

## 📚 추가 학습 자료

- [styled-components 공식 문서](https://styled-components.com/docs/basics#react-native)
- [React Native 스타일링 가이드](https://reactnative.dev/docs/style)
- [Expo LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

---

**이제 CSS처럼 React Native를 스타일링할 수 있습니다! 🎉**

기존의 복잡한 StyleSheet.create() 대신 간단하고 직관적인 CSS 문법을 사용해보세요!
