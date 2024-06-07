import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import {
  AccountSettings,
  Container,
  EmptyView,
  Label,
  Title,
} from "./index.styled";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

type ExerciseScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "profile"
>;

interface ProfileProps {
  navigation: ExerciseScreenNavigationProp;
}
const Profile = ({ navigation }: ProfileProps) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Title>Profile</Title>
        <Container>
          <Label>First Name</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your first name"
          />
          <Label>Last Name</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your last name"
          />
          <Label>Email</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your email"
          />
          <Label>Password</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your password"
          />
          <Label>Weight</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your weight"
          />
          <Label>Gender</Label>
          <InputField
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            placeholder="Change your gender"
          />
          <AccountSettings>
            <Title>Account Settings</Title>
            <EmptyView />
            <Button
              text={"Delete Account"}
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <EmptyView />
            <Button
              text={"Logout"}
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </AccountSettings>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
