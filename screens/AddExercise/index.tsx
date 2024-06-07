import React from "react";
import { View, Text } from "react-native";
import {
  BoldText,
  Container,
  Label,
  LabelWarpper,
  Title,
} from "./index.styled";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const AddExercise = () => {
  return (
    <>
      <Title>Add Exercise</Title>
      <Container>
        <Label>Exercise Name</Label>
        <InputField
          value={""}
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          placeholder="Enter exercise name"
        />
        <Label>Max Rep Weight (kg)</Label>
        <InputField
          value={""}
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          placeholder="Enter max rep weight"
        />
        <Button
          text={"Calculate Optimal Weight"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <LabelWarpper>
          <Label>
            Optimal Weight for 10 reps: <BoldText>80 kg</BoldText>
          </Label>
        </LabelWarpper>
        <Button
          text={"Save Exercise"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Container>
    </>
  );
};

export default AddExercise;
