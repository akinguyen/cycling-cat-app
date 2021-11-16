import React, { Component } from "react";
import { View, Text } from "react-native";

export default function Time() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 23,
          position: "absolute",
          top: 80,
          marginRight: 35,
          marginLeft: 35,
        }}
      >
        WHICH TIME DO YOU LOVE TO JOIN THE MOST
      </Text>

      <View
        style={{
          backgroundColor: "#7ed957",
          height: 200,
          width: 200,
          borderRadius: 300,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 25 }}> 17:00 </Text>
      </View>
    </View>
  );
}
