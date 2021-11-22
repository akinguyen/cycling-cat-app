import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Option() {
  return (
    <View style={styles.BigView}>
      <View style={styles.Choose}>
        <Text style={styles.Text}> Personal Training </Text>
      </View>
      <View style={styles.Choose}>
        <Text style={styles.Text}> Group </Text>
      </View>
    </View>
  );
}
