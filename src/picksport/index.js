import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default function PickSport({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ height: "25%" }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#5DC82F",
            padding: 8,
            fontSize: 19,
          }}
        >
          Which sport do you prefer?
        </Text>
      </View>
      <View style={styles.contentview2}>
        <View style={styles.content}>
          <Text style={styles.textbox}>Running</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textbox}>Gym</Text>
        </View>
      </View>

      <View style={styles.contentview2}>
        <View style={styles.contentrow2}>
          <Text style={styles.textbox}>Cycling</Text>
        </View>
        <View style={styles.contentrow2}>
          <Text style={styles.textbox}>Yoga</Text>
        </View>
      </View>

      <View style={styles.contentview2}>
        <View style={styles.contentrow3}>
          <Text style={styles.textbox}>Badminton</Text>
        </View>
        <View style={styles.contentrow3}>
          <Text style={styles.textbox}>Aerobics</Text>
        </View>
      </View>
    </View>
  );
}
