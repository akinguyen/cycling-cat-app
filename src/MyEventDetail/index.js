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

export default function MyEventDetail({ navigation, route }) {
  const { id } = route.params;
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const onEnterDescription = (value) => {
    setDescription(value);
  };

  const onEnterCategory = (value) => {
    setCategory(value);
  };

  const onEnterLocation = (value) => {
    setLocation(value);
  };

  const onEnterTime = (value) => {
    setTime(value);
  };

  useEffect(() => {
    axios
      .get("https://cycling-cat-api.herokuapp.com/events/" + id)
      .then((response) => {
        console.log(response.data);
        setDescription(response.data.description);
        setLocation(response.data.location);
        setCategory(response.data.category);
        setTime(response.data.time);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.BackGroundTop}>
          <Text style={styles.title}>EVENT</Text>
        </View>
        <View style={styles.infocontainer}>
          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{description}</Text>
            </View>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Category:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{category}</Text>
            </View>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Location:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{location}</Text>
            </View>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Time:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <View style={{ height: 40, width: 80 }}>
            <Button
              title="EDIT"
              onPress={() => navigation.navigate("EditEvent", { id: id })}
              color="#339900"
            />
          </View>
          <View style={{ height: 40, width: 80 }}>
            <Button
              title="GOING"
              onPress={() =>
                navigation.navigate("CheckParticipation", { id: id })
              }
              color="#339900"
            />
          </View>
        </View>
      </View>
      <View
        style={
          (styles.button, { marginTop: 50, width: 80, alignSelf: "center" })
        }
      >
        <Button
          title="BACK"
          onPress={() => navigation.push("MyEvent")}
          color="#339900"
        />
      </View>
    </ScrollView>
  );
}
