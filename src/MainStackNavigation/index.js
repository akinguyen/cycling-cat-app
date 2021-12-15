import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigation from "../MainTabNavigation";
import EditProfile from "../EditProfile";

const MainStack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Edit profile" }}
      />
    </MainStack.Navigator>
  );
}
