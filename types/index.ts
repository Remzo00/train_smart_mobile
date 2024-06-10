import { DrawerNavigationProp } from "@react-navigation/drawer";

export type RootStackParamList = {
    home: undefined;
    addExercise: undefined;
    profile: undefined;
}

export type DrawerNavigationProps = DrawerNavigationProp<RootStackParamList>;