import React from "react";
import { Container, StyledInput, ErrorText } from "./index.styled";

export interface InputFieldProps {
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function InputField({
  value,
  placeholder,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <Container>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        hasError={!!error}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
