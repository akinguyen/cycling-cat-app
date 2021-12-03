import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const EventDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackGroundTop}>
        <View style={styles.points}>
          <Text style={{ fontWeight: "bold" }}>PTS</Text>
        </View>
        <Text style={{ fontSize: 50 }}>EVENT</Text>
      </View>
      <View style={styles.infocontainer}>
        <View style={styles.BackGroundMid}>
          <Text style={{ marginLeft: 10 }}>Description:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={{ marginLeft: 10 }}>Sport:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={{ marginLeft: 10 }}>Location:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={{ marginLeft: 10 }}>Time:</Text>
        </View>
      </View>
      <View style={styles.button}>
        <View style={{ width: 70, height: 40 }}>
          <Button
            title="BACK"
            onPress={() => navigation.goBack()}
            color="#339900"
          />
        </View>
        <View style={{ width: 70, height: 40 }}>
          <Button
            title="JOIN"
            onPress={() => navigation.goBack()}
            color="#339900"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventDetail;
