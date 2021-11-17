import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  LogBox,
} from "react-native";
import GroupActivity from "./src/GroupActivitiy";
import GroupDescription from "./src/GroupDescription";
import GroupMember from "./src/GroupMember";
import MatchGroup from "./src/MatchGroup";
import NotifyMatching from "./src/NotifyMatching";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 50, color: "#34A47F" }}> Welcome! </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("./asset/logo.png")} />
      </View>
    </View>
  );
}
