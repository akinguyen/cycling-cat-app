import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetail from "../EventDetail";
import axios from "axios";

const StackEvent = createStackNavigator();

function EventList({ navigation }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://cycling-cat-api.herokuapp.com/events")
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={list}
        renderItem={(ItemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EventDetail", {
                id: ItemData.item._id.toString(),
              })
            }
            style={styles.groupinfo}
          >
            <Image
              source={{
                uri: "https://s.luyengame.net/games/pikachu/image.jpg",
              }}
              style={styles.circle}
            />

            <View style={styles.infoname}>
              <Text style={styles.event}>Event </Text>
              <View style={styles.infobox}>
                <Text style={{ fontWeight: "bold" }}>
                  Location:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {ItemData.item.location}
                  </Text>
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Sport:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {ItemData.item.sport}
                  </Text>
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Time:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {ItemData.item.time}
                  </Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const EventListNavigator = () => {
  return (
    <StackEvent.Navigator initialRouteName="EventList">
      <StackEvent.Screen
        name="EventList"
        component={EventList}
        options={{ headerShown: false }}
      />
      <StackEvent.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ headerShown: false }}
      />
    </StackEvent.Navigator>
  );
};

export default EventListNavigator;
