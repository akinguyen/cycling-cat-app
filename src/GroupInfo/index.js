import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Info() {
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center", color: "#FF0080", fontSize: 30 }}>
        Group Name
      </Text>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              color: "#FF0080",
              backgroundColor: "lightgrey",
              fontSize: 20,
              padding: 7,
              margin: 5,
            }}
          >
            Member
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              color: "#FF0080",
              backgroundColor: "lightgrey",
              fontSize: 20,
              padding: 7,
              margin: 5,
            }}
          >
            Pictures and Videos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              color: "#FF0080",
              backgroundColor: "lightgrey",
              fontSize: 20,
              padding: 7,
              margin: 5,
            }}
          >
            Files Sharing
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
