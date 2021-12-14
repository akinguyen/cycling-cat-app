import React from "react";
import { Button, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function CheckParticipation({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={styles.avt}></View>
      </View>
      <View style={styles.white}>
        <Text style={styles.text}> EVENT 1</Text>
        <Text style={styles.parti}> Participation </Text>
        <Text> </Text>
        <View style={{ marginBottom: 100 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "90%",
            }}
          >
            <Text> 1. A: PROFILE </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="check-outline"
                size={26}
                color="green"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="close-outline"
                size={26}
                color="red"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "90%",
            }}
          >
            <Text> 2. B: PROFILE </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="check-outline"
                size={26}
                color="green"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="close-outline"
                size={26}
                color="red"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="BACK"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
    </View>
  );
}
