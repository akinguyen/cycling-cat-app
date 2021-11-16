import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

export default function GroupDescription() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.menu}>
          <View style={styles.inMenu} />
          <View style={styles.inMenu} />
          <View style={styles.inMenu} />
        </View>
        <View style={styles.bell}>
          <Text>NOTI</Text>
        </View>
      </View>
      <View style={styles.ava}>
        <View style={styles.picture} />
        <Text style={styles.name}>GROUP NAME</Text>
      </View>
      <View style={styles.bar}>
        <View style={styles.content}>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>DESCRIPTION</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>CHAT</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>MEMBERS</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>SCHEDULE</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={{ color: "black", fontSize: 20 }}>Description:</Text>
      </View>
      <View style={styles.achievement}>
        <Text style={{ color: "black", fontSize: 20 }}>Achievement:</Text>
      </View>
    </View>
  );
}
