import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import styles from "./styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Logo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../asset/logo.png")} />
      </View>
      <Text style={styles.text}> Welcome! </Text>
      <View style={styles.button}>
        <Button title="Continue" color="#34A47F" />
      </View>
    </View>
  );
}
