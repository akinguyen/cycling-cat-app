import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TextInput,
} from "react-native";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const [description, setDescription] = useState("");

const onEnterDescription = (value) => {
  setDescription(value);
};

export default function CreateEvent({ navigation }) {
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
          <TextInput
            value={description}
            onChangeText={onEnterDescription}
            placeholder="enter your description"
            style={styles.input}
          />
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
      <View style={styles.post}>
        <Button
          title="POST"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
      <View style={styles.back}>
        <Button
          title="BACK"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
    </SafeAreaView>
  );
}
