import React from "react";
import { Text, View, Button } from "react-native";
import { ScreenContainer } from "react-native-screens";
import Login from "../Login";
import stylespp from "./stylespp";

export const Splash = () => {
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>;
};

export const SignIn = ({ navigation }) => {
  return (
    <View>
      <Login></Login>
      <Button title="Submit" onPress={() => navigation.push("PickSport")} />
    </View>
  );
};
