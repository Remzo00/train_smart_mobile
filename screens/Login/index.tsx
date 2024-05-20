import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Container, EmptyView, Title } from "./index.styled";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <EmptyView />
        <Title>Sign Up</Title>
        <View>
          <Text>Email</Text>
          <InputField
            placeholder="Enter your email"
            value={email}
            onChange={setEmail}
          />
        </View>
        <View>
          <Text>Password</Text>
          <InputField
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
          />
        </View>
        <View>
          <Button
            text={"Sign up"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </View>
        <Text style={{ textAlign: "center" }}>New to gym? Sign up</Text>
      </Container>
    </ScrollView>
  );
};

export default Login;
