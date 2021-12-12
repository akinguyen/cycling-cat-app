import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpNavigator from "./src/SignIn";
import MainNavigation from "./src/MainNavigation";
import Provider, { Context } from "./state/Provider";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useContext(Context);

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userData == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="Login"
              component={SignUpNavigator}
              options={{
                title: "Sign in",
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? "pop" : "push",
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
    </Provider>
  );
}
