import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./src/MainNavigation";
<<<<<<< HEAD
import axios from "axios";
import ImagePicker from "./src/ImagePicker";
=======
import { Context } from "./state/Provider";
import AuthNavigation from "./src/AuthNavigation";

>>>>>>> b1f89c8fc730b067e5f9691e732786eca50e7de6
const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useContext(Context);

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignIn}
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
          <Stack.Screen name="ImagePicker" component={ImagePicker} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
=======
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
>>>>>>> b1f89c8fc730b067e5f9691e732786eca50e7de6
  );
}
