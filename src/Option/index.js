import * as React from "react";
import { Text, View } from "react-native";

export default function Option() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text> Group </Text>
      <Text> Personal Training </Text>
    </View>
  );
}
