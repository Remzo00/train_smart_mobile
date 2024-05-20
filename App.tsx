import React, { useState } from "react";
import { View } from "react-native";
import Button from "./components/Button";
import InputField from "./components/InputField";

export default function App() {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (inputText: string) => {
    setText(inputText);
    if (inputText === "") {
      setError("Field cannot be empty");
    } else {
      setError("");
    }
  };

  return (
    <View style={{ padding: 50 }}>
      <Button
        text={"Neki tekst"}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        color="blue"
      />

      <InputField
        value={text}
        onChange={handleChange}
        placeholder="Unesite tekst"
        error={error}
      />
    </View>
  );
}
