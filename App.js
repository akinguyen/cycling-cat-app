import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
<<<<<<< HEAD
import AuthContext from "./AuthContext";
import SignUpNavigator from "./src/SignIn";
=======
import SignIn from "./src/SignIn";
>>>>>>> c5ec68d9dc0f3cf562bec994893de34d334a4546
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
