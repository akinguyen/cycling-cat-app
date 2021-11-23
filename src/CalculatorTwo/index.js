import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function CalculatorTwo() {
  return (
    <View style={styles.main}>
      <View style={styles.rect}>
        <Text style={styles.title}> BMI Calculator </Text>
      </View>

      <View style={styles.white}>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Desire BMI </Text>
        </View>
        <View style={styles.chooseSmall}>
          <Text style={styles.text}> Recommended BMI </Text>
        </View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Expected kg </Text>
        </View>
        <View style={styles.fake}></View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Kg to cut off </Text>
        </View>
      </View>
    </View>
  );
}
