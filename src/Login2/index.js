import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./screen";
import apptest1Screen from "../apptest1";

const Stack = createStackNavigator();
export default function Login2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="apptest1Screen" component={apptest1Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
