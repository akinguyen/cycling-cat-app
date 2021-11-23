import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function CalculatorOne() {
  return (
    <View style={styles.main}>
      <View style={styles.rect}>
        <Text style={styles.title}> BMI Calculator </Text>
      </View>

      <View style={styles.white}>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Weight </Text>
        </View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Height </Text>
        </View>
        <View style={styles.fake}></View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Your BMI </Text>
        </View>
      </View>
    </View>
  );
}
