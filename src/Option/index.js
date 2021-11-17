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
      <View
        style={{
          backgroundColor: "#4682b4",
          height: 100,
          width: 300,
          borderRadius: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          {" "}
          Personal Training{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#4682b4",
          height: 100,
          width: 300,
          borderRadius: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, textAlign: "center" }}> Group </Text>
      </View>
    </View>
  );
}
