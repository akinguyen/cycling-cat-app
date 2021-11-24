import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function ChooseGoal() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.title}> Personal Training </Text>
      </View>

      <View style={styles.white}>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Choose your goal! </Text>
        </View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Lose weight </Text>
        </View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> General workout </Text>
        </View>
        <View style={styles.chooseBig}>
          <Text style={styles.text}> Muscular Training </Text>
        </View>
      </View>
    </View>
  );
}
