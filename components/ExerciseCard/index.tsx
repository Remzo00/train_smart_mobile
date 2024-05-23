import React from "react";
import { Card, CardTitle, CardText } from "./index.styled";

interface ExerciseCardProps {
  title: string;
  maxWeight: number;
  optimalWeight: number;
}
export default function ExerciseCard({
  title,
  maxWeight,
  optimalWeight,
}: ExerciseCardProps) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardText>Max weight: {maxWeight}</CardText>
      <CardText>Optimal weight: {optimalWeight}</CardText>
    </Card>
  );
}
