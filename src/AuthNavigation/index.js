import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const AuthStack = createStackNavigator();
export default function AuthNavigation() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
