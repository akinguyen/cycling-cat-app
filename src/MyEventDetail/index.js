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

const MyEventDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackGroundTop}>
        <View style={styles.points}>
          <Text style={styles.pts}>PTS</Text>
        </View>
        <Text style={styles.title}>EVENT</Text>
      </View>
      <View style={styles.infocontainer}>
        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Description:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Sport:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Location:</Text>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Time:</Text>
        </View>
      </View>
      <View style={styles.button}>
        <View style={{ height: 40 }}>
          <Button
            title="EDIT"
            onPress={() => navigation.navigate("EditEvent")}
            color="#339900"
          />
        </View>
        <View style={{ height: 40 }}>
          <Button
            title="GOING"
            onPress={() => navigation.navigate("CheckParticipation")}
            color="#339900"
          />
        </View>
      </View>
      <View style={{ height: 40 }}>
        <Button
          title="BACK"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
    </SafeAreaView>
  );
};
export default MyEventDetail;
