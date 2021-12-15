import React, { useState, useEffect, useContext } from "react";
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
import { Context } from "../../state/Provider";

const StackEvent = createStackNavigator();

function EventList({ navigation }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    // userData.id => events/:userId
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
  const [state, dispatch] = useContext(Context);
  return (
    <View style={styles.container}>
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
              source={require("../../asset/logo.png")}
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
                  Category:{" "}
                  <Text style={{ fontWeight: "normal" }}>
                    {ItemData.item.category}
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
    </View>
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
