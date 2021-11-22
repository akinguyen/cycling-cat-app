import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function GroupText() {
  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <TouchableOpacity>
        <Text style={{ fontSize: 30, color: "#FF0080", textAlign: "center" }}>
          Group Name
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 50, marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00FFFF",
            height: 50,
            width: 50,
            borderRadius: 300,
          }}
        ></TouchableOpacity>
        <Text> What's up </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00FFFF",
            height: 50,
            width: 50,
            borderRadius: 300,
          }}
        ></TouchableOpacity>
        <Text> What's up </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00FFFF",
            height: 50,
            width: 50,
            borderRadius: 300,
          }}
        ></TouchableOpacity>
        <Text> What's up </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ backgroundColor: "lightgrey", paddingVertical: 16 }}>
            Type your message here
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#00FFFF",
            height: 50,
            width: 50,
            borderRadius: 300,
            alignItems: "flex-end",
          }}
        ></View>
      </View>
    </View>
  );
}
