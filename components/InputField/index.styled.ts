import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-bottom: 16px;
`;

export const StyledInput = styled.TextInput<{ hasError: boolean }>`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => (props.hasError ? 'red' : '#ccc')};
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;