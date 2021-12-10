import "react-native-gesture-handler";
import React from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/login";
import LoginNavigator from "./src/login";
import apptest1Screen from "./src/apptest1";
import Login2 from "./src/Login2";

export default function App() {
  return <Login2 />;
}
