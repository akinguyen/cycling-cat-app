import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function EventDetail({ navigation }) {
  const [description, setDescription] = useState("");
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const onEnterDescription = (value) => {
    setDescription(value);
  };

  const onEnterSport = (value) => {
    setSport(value);
  };

  const onEnterLocation = (value) => {
    setLocation(value);
  };

  const onEnterTime = (value) => {
    setTime(value);
  };

  useEffect(() => {
    axios
      .get(
        "https://cycling-cat-api.herokuapp.com/events"
      )
      .then((response) => {
        setDescription(JSON.stringify(response.data.description));
        console.log(description);
      })
      .catch((error) => console.log(error));
  }, []);

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
          <TextInput
            value={sport}
            onChangeText={onEnterSport}
            placeholder="enter your favourite sport"
            style={styles.input}
          />
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Location:</Text>
          <TextInput
            value={location}
            onChangeText={onEnterLocation}
            placeholder="Where does your event take place?"
            style={styles.input}
          />
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Time:</Text>
          <TextInput
            value={time}
            onChangeText={onEnterTime}
            placeholder="The time of the event: "
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.button}>
        <View style={styles.back}>
          <Button
            title="BACK"
            onPress={() => navigation.goBack()}
            color="#339900"
          />
        </View>
        <View style={styles.back}>
          <Button
            title="JOIN"
            onPress={() => navigation.goBack()}
            color="#339900"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
