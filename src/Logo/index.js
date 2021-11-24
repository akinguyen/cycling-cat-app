import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome! </Text>

      <View style={styles.logo}>
        <Image source={require("../../asset/logo.png")} />
      </View>
    </View>
  );
}
