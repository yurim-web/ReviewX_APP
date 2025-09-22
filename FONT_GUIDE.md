# 🎨 프리텐다드 폰트 적용 가이드

## 📋 목차

1. [폰트 설정 완료](#폰트-설정-완료)
2. [사용 방법](#사용-방법)
3. [폰트 상수 사용법](#폰트-상수-사용법)
4. [실제 적용 예제](#실제-적용-예제)
5. [폰트 파일 추가 방법](#폰트-파일-추가-방법)

## ✅ 폰트 설정 완료

프리텐다드 폰트가 전체 앱에 적용되었습니다!

### **설정된 내용:**

- ✅ `App.tsx`에서 글로벌 폰트 설정
- ✅ `src/constants/fonts.ts`에 폰트 상수 정의
- ✅ `CommonHeader`에 폰트 적용
- ✅ `react-native.config.js` 설정

## 🚀 사용 방법

### 1. **자동 적용 (기본)**

```tsx
// 모든 Text와 TextInput에 자동으로 적용됨
<Text>이 텍스트는 프리텐다드 폰트가 적용됩니다!</Text>
<TextInput placeholder="입력 필드도 자동 적용" />
```

### 2. **수동 적용 (특정 스타일)**

```tsx
import { FONTS, FONT_SIZES, FONT_WEIGHTS } from "../constants";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES["2xl"],
    fontWeight: FONT_WEIGHTS.bold,
  },
  body: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.base,
  },
});
```

## 🎯 폰트 상수 사용법

### **사용 가능한 폰트:**

```tsx
import { FONTS } from "../constants";

FONTS.regular; // Pretendard-Regular
FONTS.medium; // Pretendard-Medium
FONTS.semiBold; // Pretendard-SemiBold
FONTS.bold; // Pretendard-Bold
```

### **사용 가능한 크기:**

```tsx
import { FONT_SIZES } from "../constants";

FONT_SIZES.xs; // 12px
FONT_SIZES.sm; // 14px
FONT_SIZES.base; // 16px
FONT_SIZES.lg; // 18px
FONT_SIZES.xl; // 20px
FONT_SIZES["2xl"]; // 24px
FONT_SIZES["3xl"]; // 30px
FONT_SIZES["4xl"]; // 36px
FONT_SIZES["5xl"]; // 48px
```

### **사용 가능한 두께:**

```tsx
import { FONT_WEIGHTS } from "../constants";

FONT_WEIGHTS.normal; // '400'
FONT_WEIGHTS.medium; // '500'
FONT_WEIGHTS.semiBold; // '600'
FONT_WEIGHTS.bold; // '700'
```

## 📱 실제 적용 예제

### **1. 헤더 텍스트**

```tsx
import { TEXT_STYLES } from "../constants";

<Text style={TEXT_STYLES.header}>제목</Text>;
```

### **2. 본문 텍스트**

```tsx
<Text style={TEXT_STYLES.body}>본문 내용</Text>
```

### **3. 버튼 텍스트**

```tsx
<Text style={TEXT_STYLES.button}>버튼</Text>
```

### **4. 커스텀 스타일**

```tsx
const customStyle = {
  fontFamily: FONTS.semiBold,
  fontSize: FONT_SIZES.lg,
  color: "#333",
};
```

## 📁 폰트 파일 추가 방법

### **1. 폰트 파일 다운로드**

- [프리텐다드 GitHub](https://github.com/orioncactus/pretendard)에서 다운로드
- `assets/fonts/` 폴더에 `.ttf` 파일 저장

### **2. 필요한 파일들**

```
assets/fonts/
├── Pretendard-Regular.ttf
├── Pretendard-Medium.ttf
├── Pretendard-SemiBold.ttf
└── Pretendard-Bold.ttf
```

### **3. 폰트 링크 (Android)**

```bash
npx react-native-asset
```

### **4. iOS 설정 (ios/Info.plist)**

```xml
<key>UIAppFonts</key>
<array>
  <string>Pretendard-Regular.ttf</string>
  <string>Pretendard-Medium.ttf</string>
  <string>Pretendard-SemiBold.ttf</string>
  <string>Pretendard-Bold.ttf</string>
</array>
```

## 🎨 styled-components에서 사용

```tsx
import styled from "styled-components/native";
import { FONTS, FONT_SIZES } from "../constants";

const Title = styled.Text`
  font-family: ${FONTS.bold};
  font-size: ${FONT_SIZES["2xl"]}px;
  color: #333;
`;

const Body = styled.Text`
  font-family: ${FONTS.regular};
  font-size: ${FONT_SIZES.base}px;
  color: #666;
`;
```

## 🔧 문제 해결

### **폰트가 적용되지 않는 경우:**

1. 폰트 파일이 올바른 위치에 있는지 확인
2. `react-native-asset` 실행 여부 확인
3. 앱 재시작 후 확인
4. 폰트 이름이 정확한지 확인

### **대체 폰트 사용:**

```tsx
// 폰트가 없을 경우 시스템 폰트 사용
fontFamily: Platform.OS === "ios" ? "System" : "Roboto";
```

---

**이제 전체 앱에서 아름다운 프리텐다드 폰트를 사용할 수 있습니다! 🎉**

한국어와 영어 모두에서 뛰어난 가독성을 제공하는 프리텐다드 폰트로 더욱 세련된 앱을 만들어보세요! ✨

