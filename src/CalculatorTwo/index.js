import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function CalculatorTwo() {
  return (
    <View style={styles.Main}>
      <View style={styles.Rect}>
        <Text style={styles.Text}> BMI Calculator </Text>
      </View>

      <View style={styles.White}>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Desire BMI </Text>
        </View>
        <View style={styles.choose}>
          <Text style={styles.Text}> Recommended BMI </Text>
        </View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Expected kg </Text>
        </View>
        <View style={styles.Fake}></View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Kg to cut off </Text>
        </View>
      </View>
    </View>
  );
}
