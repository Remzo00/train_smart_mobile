import React from "react";
import { Container, Text } from "./index.styled";

interface ButtonProps {
  text: string;
  color?: string;
  onPress: () => void;
}

export default function Button({
  text,
  color = "black",
  onPress,
}: ButtonProps) {
  return (
    <Container onPress={onPress} color={color || "black"}>
      <Text>{text}</Text>
    </Container>
  );
}
