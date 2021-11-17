import * as React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";

export default function Welcome() {
  return (
    <View style={styles.Main}>
      <Text style={{ fontSize: 30, color: "#00ff00" }}> Welcome! </Text>

      <View style={styles.Circle}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          SPORTY NEKOS{" "}
        </Text>
      </View>
    </View>
  );
}
