import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "./screen";
import PickSport from "../picksport";

const AuthStack = createStackNavigator();
export default function Login2() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="PickSport" component={PickSport} />
    </AuthStack.Navigator>
  );
}
