import React from "react";
import { View } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <View>
      <Button
        text={"Neki tekst"}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        color="blue"
      />
    </View>
  );
}
