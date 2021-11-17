import * as React from "react";
import { Text, View } from "react-native";

export default function Welcome() {
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
      <Text style={{ fontSize: 30, color: "#00ff00" }}> Welcome! </Text>

      <View
        style={{
          backgroundColor: "#00ff00",
          height: 200,
          width: 200,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          {" "}
          SPORTY NEKOS{" "}
        </Text>
      </View>
    </View>
  );
}
