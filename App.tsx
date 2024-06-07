import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AddExercise from "./screens/AddExercise";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Home Page",
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="addExercise"
          component={AddExercise}
          options={{
            title: "Add Exercise",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
