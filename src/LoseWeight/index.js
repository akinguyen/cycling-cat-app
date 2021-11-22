import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
export default function Tips() {
  return (
    <View stylestyle={{ flex: 1 }}>
      <View
        style={{
          alignSelf: "center",
          width: "80%",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 30,
            backgroundColor: "#9A2EFE",
            height: 90,
            borderRadius: 20,
            padding: 24,
            marginBottom: 20,
          }}
        >
          Lose weight
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "grey",
            height: 70,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Timetable</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height: 250,
            margin: 20,
            borderRadius: 40,
            backgroundColor: "red",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            height: 250,
            margin: 20,
            borderRadius: 40,
            backgroundColor: "green",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}> Diet </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
