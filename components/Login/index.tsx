import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Container, EmptyView, Title } from "./index.styled";
import InputField from "../InputField";
import Button from "../Button";

interface LoginProps {
  setAuthScreen: React.Dispatch<React.SetStateAction<"login" | "signup">>;
}

export default function Login({ setAuthScreen }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
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
          <Text style={{ textAlign: "center" }}>New to gym?</Text>
          <TouchableOpacity onPress={() => setAuthScreen("signup")}>
            <Text style={{ textAlign: "center", color: "blue" }}>Sign Up</Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
