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

const CreateEvent = ({ navigation }) => {
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
      <View style={{ height: 40, marginTop: 10 }}>
        <Button
          title="POST"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
      <View style={{ height: 40, marginTop: 20 }}>
        <Button
          title="BACK"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent;
