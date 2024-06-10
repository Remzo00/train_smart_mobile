import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Header, Title } from "./index.styled";
import Button from "../Button";
import { DrawerNavigationProps, RootStackParamList } from "../../types";

interface CustomHeaderProps {
  title: string;
  navigation: DrawerNavigationProp<RootStackParamList>;
}

export default function CustomHeader({ title, navigation }: CustomHeaderProps) {
  console.log("Navigation prop in CustomHeader:", navigation);
  return (
    <Header>
      <Button onPress={() => navigation.toggleDrawer()} text={"Menu"} />
      <Title>{title}</Title>
      <Button onPress={() => navigation.navigate("profile")} text={"Profile"} />
    </Header>
  );
}
