import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Option() {
  return (
    <View style={styles.bigView}>
      <View style={styles.chooseBig}>
        <Text style={styles.text}> Personal Training </Text>
      </View>
      <View style={styles.chooseBig}>
        <Text style={styles.text}> Group </Text>
      </View>
    </View>
  );
}
