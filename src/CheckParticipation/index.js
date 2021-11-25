import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./styles";

export default function CheckParticipation() {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={styles.avt}></View>
      </View>
      <View style={styles.white}>
        <Text style={styles.text}> EVENT 1</Text>
        <Text style={styles.parti}> Participation </Text>
        <Text> </Text>
        <Text> 1. A: PROFILE </Text>
        <Text> 2. B: PROFILE </Text>
      </View>
      <View style={styles.rect}>
        <View style={styles.bar}>
          <Text style={styles.menu}> Profile </Text>
        </View>
        <View style={styles.bar}>
          <Text style={styles.menu}> Event </Text>
        </View>
        <View style={styles.bar}>
          <Text style={styles.menu}> Mine </Text>
        </View>
      </View>
    </View>
  );
}
