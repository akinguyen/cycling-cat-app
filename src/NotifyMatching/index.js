import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../NotifyMatching/styles";

export default function NotifyMatching() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Your request is sent to the group.</Text>
        <Text style={styles.text}>
          You will be notified if they accept you or not.
        </Text>
        <Button title="Return" />
      </View>
    </View>
  );
}
