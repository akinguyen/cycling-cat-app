import * as React from "react";
import { Text, View } from "react-native";

export default function screen5() {
  return (
    <View
      style={{
        backgroundColor: "#99FF33",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "flexstart",
        flexDirection: "column",
      }}
    >
      <View style={{ marginHorizontal: "7%" }}>
        <Text style={{ fontSize: 25 }}> Age </Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}> 18</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: "7%" }}>
        <Text style={{ fontSize: 25 }}> District</Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}> 10</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: "7%" }}>
        <Text style={{ fontSize: 25 }}> Precinct</Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}> 14</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: "7%" }}>
        <Text style={{ fontSize: 25 }}> Street</Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {" "}
            Ly Thuong Kiet{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}
