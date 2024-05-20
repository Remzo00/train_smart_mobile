import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./screens/Auth";

export default function App() {
  const Stack = createNativeStackNavigator();
  return <Auth />;
}
