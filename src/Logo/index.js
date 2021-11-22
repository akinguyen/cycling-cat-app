import * as React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Logo() {
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
        <Image source={"./asset/logo.png"} />
      </View>
    </View>
  );
}
