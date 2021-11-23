import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.bigView}>
      <Text style={styles.text}> Welcome! </Text>

      <View style={styles.view}>
        <Image source={require("../../asset/logo.png")} />
      </View>
    </View>
  );
}
