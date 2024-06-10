import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AddExercise from "./screens/AddExercise";
import Profile from "./screens/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "./types";

const Drawer = createDrawerNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="addExercise" component={AddExercise} />
        <Drawer.Screen name="profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
