import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.bigView}>
      <Text style={{ fontSize: 50, color: "#34A47F" }}> Welcome! </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../../asset/logo.png")} />
      </View>
    </View>
  );
}
