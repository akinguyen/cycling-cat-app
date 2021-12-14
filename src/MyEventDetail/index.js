import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TextInput,
  Modal,
  TouchableOpacity,
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
  const [isVisibleDes, setIsVisibleDes] = useState(false);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.BackGroundTop}>
        <View style={styles.points}>
          <Text style={styles.pts}>PTS</Text>
        </View>
        <Text style={styles.title}>EVENT</Text>
      </View>
      <View style={styles.infocontainer}>
        <TouchableOpacity onPress={() => setIsVisibleDes(true)}>
          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{description}</Text>
            </View>
            <Modal visible={isVisibleDes} animationType="slide">
              <View
                style={{
                  justifyContent: "space-evenly",
                  flex: 1,
                  backgroundColor: "#CCFF99",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "70%",
                    width: "95%",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <ScrollView>
                    <Text>{description}</Text>
                  </ScrollView>
                </View>
                <View style={{ marginBottom: 20 }}>
                  <Button onPress={() => setIsVisibleDes(false)} title="BACK" />
                </View>
              </View>
            </Modal>
          </View>
        </TouchableOpacity>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Sport:</Text>
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <Text>{sport}</Text>
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
        <View style={styles.back}>
          <Button
            title="BACK"
            onPress={() => navigation.push("MyEvent")}
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
