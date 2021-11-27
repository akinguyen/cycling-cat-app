import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function EventInfo() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.back}>
        <View style={styles.avt}></View>
        <Text style={{ fontSize: 30 }}>EVENT 1</Text>
        <Text
          style={{
            fontSize: 25,
            backgroundColor: "lightgreen",
            marginTop: 15,
            marginBottom: 25,
          }}
        >
          PARTICIPANTS
        </Text>
        <View
          style={{ flexDirection: "column", justifyContent: "space-evenly" }}
        >
          <Text style={styles.info}>Description:</Text>
          <Text style={styles.info}>Sport:</Text>
          <Text style={styles.info}>Location:</Text>
          <Text
            style={{ fontSize: 25, margin: 20, backgroundColor: "#7ed957" }}
          >
            Time:
          </Text>
          <View style={styles.rect}>
            <View style={styles.bar}>
              <Text style={styles.menu}> Profile </Text>
            </View>
            <View style={styles.bar}>
              <Text style={styles.menu}> Event </Text>
            </View>
            <View style={styles.bar}>
              <Text style={styles.menu}> Mine </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
