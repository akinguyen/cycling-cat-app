import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Welcome() {
  return (
    <View style={styles.Main}>
      <View style={styles.Rect}>
        <Text style={styles.Text}> Personal Training </Text>
      </View>

      <View style={styles.White}>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Choose your goal! </Text>
        </View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Lose weight </Text>
        </View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> General workout </Text>
        </View>
        <View style={styles.Choose}>
          <Text style={styles.Text}> Lose weight </Text>
        </View>
      </View>
    </View>
  );
}
