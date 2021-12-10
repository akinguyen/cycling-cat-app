import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { ScreenContainer } from "react-native-screens";
import Login from "../login";
import styles from "./styles";

export const Splash = () => {
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>;
};

export const SignIn = ({ navigation }) => {
  return (
    <View>
      <Login></Login>
      <View style={styles.button}>
        <View style={styles.back}>
          <Button
            title="Sign in"
            onPress={() => navigation.push("apptest1Screen")}
            color="#7ED957"
          />
        </View>
        <View style={styles.back1}>
          <Button
            title="Sign up"
            onPress={() => navigation.push("")}
            color="#7ED957"
          />
        </View>
      </View>
    </View>
  );
};
