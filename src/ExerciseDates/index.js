import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function ExerciseDates() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 23, margin: 20 }}>
        WHICH DAY IN THE WEEK DO YOU WANT TO DO EXERCISE?
      </Text>
      <Text>(please click all the day you would love to join)</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 10,
        }}
      >
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Monday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Tuesday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Wednesday</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Thursday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Friday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Saturday</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity style={styles.dates}>
          <Text style={styles.textDates}>Sunday</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
