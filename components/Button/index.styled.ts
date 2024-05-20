import styled from "styled-components/native";

interface ContainerProps {
    color: string;
  }

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 7px;
  background-color: ${(props) => props.color};
`;

export const Text = styled.Text`
    font-size: 14px;
    font-family: Roboto;
    color: white;
    text-align: center;
`;