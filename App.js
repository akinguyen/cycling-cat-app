import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "./state/Provider";
import AuthNavigation from "./src/AuthNavigation";
import MainStackNavigation from "./src/MainStackNavigation";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useContext(Context);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!state.isSignedIn ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="AuthStack"
            component={AuthNavigation}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen
            name="MainStack"
            component={MainStackNavigation}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
