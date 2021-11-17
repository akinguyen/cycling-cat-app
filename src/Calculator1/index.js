import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Welcome() {
  return (
    <View style={styles.Main}>
      <View style={styles.Rect}>
        <Text style={{ fontSize: 20, justifyContent: "centre" }}>
          {" "}
          BMI Calculator{" "}
        </Text>
      </View>

      <View style={styles.White}>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Weight </Text>
        </View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Height </Text>
        </View>
        <View style={styles.Fake}></View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Your BMI </Text>
        </View>
      </View>
    </View>
  );
}
