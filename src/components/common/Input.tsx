import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from "react-native";

// Input 컴포넌트의 props 타입 정의
interface InputProps extends TextInputProps {
  label?: string; // 입력 필드 위에 표시될 라벨
  placeholder?: string; // 플레이스홀더 텍스트
  value: string; // 입력된 값
  onChangeText: (text: string) => void; // 텍스트 변경 시 실행될 함수
  error?: string; // 에러 메시지
  style?: ViewStyle; // 컨테이너 추가 스타일
  inputStyle?: TextStyle; // 입력 필드 추가 스타일
  labelStyle?: TextStyle; // 라벨 추가 스타일
  errorStyle?: TextStyle; // 에러 메시지 추가 스타일
  required?: boolean; // 필수 입력 여부
}

/**
 * 재사용 가능한 입력 필드 컴포넌트
 * 라벨, 에러 메시지, 필수 표시를 지원합니다.
 */
const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  style,
  inputStyle,
  labelStyle,
  errorStyle,
  required = false,
  ...textInputProps // TextInput의 나머지 props들
}) => {
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태 관리

  return (
    <View style={[styles.container, style]}>
      {/* 라벨 표시 */}
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      {/* 입력 필드 */}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused, // 포커스 상태일 때 스타일
          error && styles.inputError, // 에러 상태일 때 스타일
          inputStyle, // 추가 스타일
        ]}
        placeholder={placeholder}
        placeholderTextColor="#999999" // 플레이스홀더 색상
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)} // 포커스 시작 시
        onBlur={() => setIsFocused(false)} // 포커스 종료 시
        {...textInputProps} // TextInput의 나머지 props 전달
      />

      {/* 에러 메시지 표시 */}
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  // 컨테이너 스타일
  container: {
    marginBottom: 16,
  },

  // 라벨 스타일
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
  },

  // 필수 표시 스타일
  required: {
    color: "#FF4444",
  },

  // 입력 필드 기본 스타일
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },

  // 포커스 상태 스타일
  inputFocused: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },

  // 에러 상태 스타일
  inputError: {
    borderColor: "#FF4444",
    borderWidth: 2,
  },

  // 에러 메시지 스타일
  error: {
    fontSize: 14,
    color: "#FF4444",
    marginTop: 4,
  },
});

export default Input;
