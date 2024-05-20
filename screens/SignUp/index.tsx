import React, { useState } from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Container, Title, Subtitle } from "./index.styeld";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={{ width: "100%", height: 200 }}
        />
        <Title>Sign up</Title>
        <Subtitle>Join our gym community</Subtitle>
        <View>
          <Text>First Name</Text>
          <InputField
            value={firstName}
            placeholder="Enter your first name"
            onChange={setFirstName}
          />
        </View>
        <View>
          <Text>Last Name</Text>
          <InputField
            value={firstName}
            placeholder="Enter your first name"
            onChange={setLastName}
          />
        </View>
        <View>
          <Text>Email</Text>
          <InputField
            value={email}
            placeholder="example@email.com"
            onChange={setEmail}
          />
        </View>
        <View>
          <Text>Password</Text>
          <InputField
            value={password}
            placeholder="********"
            onChange={setPassword}
          />
        </View>
        <View>
          <Text>Repeat Password</Text>
          <InputField
            value={repeatPassword}
            placeholder="********"
            onChange={setRepeatPassword}
          />
        </View>
        <View>
          <Text>Weight (kg)</Text>
          <InputField
            value={weight}
            placeholder="Enter your weight"
            onChange={setWeight}
          />
        </View>
        <View>
          <Text>Gender</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
        <View>
          <Button text="Get started" onPress={() => alert("Registered!")} />
        </View>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
