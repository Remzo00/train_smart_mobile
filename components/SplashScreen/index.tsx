import React from "react";
import { Container, Logo, Title } from "./index.styled";

export default function SplashScreen() {
  return (
    <Container>
      <Logo source={{ uri: "https://via.placeholder.com/500" }} />
      <Title>Welcome to the Gym App</Title>
    </Container>
  );
}
