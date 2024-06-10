import React from "react";
import { Container, Title } from "./index.styled";
import { SafeAreaView, ScrollView } from "react-native";
import ExerciseCard from "../../components/ExerciseCard";
import Button from "../../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import CustomHeader from "../../components/Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type ExerciseScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  "home"
>;

interface HomeProps {
  navigation: ExerciseScreenNavigationProp;
}

const exercises = [
  {
    title: "Bench Press",
    maxWeight: 100,
    optimalWeight: 80,
  },
  {
    title: "Squats",
    maxWeight: 120,
    optimalWeight: 90,
  },
  {
    title: "Deadlifts",
    maxWeight: 140,
    optimalWeight: 100,
  },
];

const Home = ({ navigation }: HomeProps) => {
  return (
    <>
      <Container>
        <CustomHeader title={"View exercises"} navigation={navigation} />
        <Button
          text={"Add exercise"}
          onPress={() => {
            console.log("Navigating to addExercise screen...");
            navigation.navigate("addExercise");
          }}
        />
        <ScrollView>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.title} {...exercise} />
          ))}
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
