import * as React from "react";
import { Text, View } from "react-native";

export default function Calculator1() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "FADFF2",
          height: "20%",
          width: "100%",
          alignItems: "center",
          justifyContent: "centre",
        }}
      >
        <Text style={{ fontSize: 20, justifyContent: "centre" }}>
          {" "}
          Personal Training{" "}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          flexDirection: "space-around",
        }}
      >
        <Text
          style={{
            backgroundColor: "ADFF2F",
          }}
        >
          {" "}
          Choose your goal!{" "}
        </Text>
      </View>
    </View>
  );
}
