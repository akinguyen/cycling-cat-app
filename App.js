import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./src/MainNavigation";
import { Context } from "./state/Provider";
import AuthNavigation from "./src/AuthNavigation";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useContext(Context);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!state.isSignedIn ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen
            name="Home"
            component={MainNavigation}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
