import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles";
import MyEventDetail from "../MyEventDetail";
import { createStackNavigator } from "@react-navigation/stack";
import CheckParticipation from "../CheckParticipation";
import EditEvent from "../EditEvent";
import ParticipantsInfo from "../ParticipantsInfo";
import CreateEvent from "../CreateEvent";
import { Context } from "../../state/Provider";
import axios from "axios";

function MyEvent({ navigation }) {
  const [state, dispatch] = useContext(Context);
  const [list, setList] = useState([]);
  useEffect(() => {
    // userData.id => events/:userId
    axios
      .get(
        "https://cycling-cat-api.herokuapp.com/myevents/" + state.userData._id
      )
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="ADD"
          onPress={() => navigation.navigate("CreateEvent")}
          color="#FAD46B"
        />
      </View>
      <View style={styles.scroll}>
        <FlatList
          contentContainerStyle={styles.scroll}
          keyExtractor={(item, index) => item._id}
          data={list}
          renderItem={(ItemData) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MyEventDetail", {
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
    </View>
  );
}

const StackMyEvent = createStackNavigator();

const MyEventNavigator = () => {
  return (
    <StackMyEvent.Navigator initialRouteName="MyEvent">
      <StackMyEvent.Screen
        name="MyEvent"
        component={MyEvent}
        options={{ headerShown: false }}
      />
      <StackMyEvent.Screen
        name="MyEventDetail"
        component={MyEventDetail}
        options={{ headerShown: false }}
      />
      <StackMyEvent.Screen
        name="CheckParticipation"
        component={CheckParticipation}
        options={{ headerShown: false }}
      />
      <StackMyEvent.Screen
        name="ParticipantsInfo"
        component={ParticipantsInfo}
        options={{ headerShown: false }}
      />
      <StackMyEvent.Screen
        name="EditEvent"
        component={EditEvent}
        options={{ headerShown: false }}
      />
      <StackMyEvent.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{ headerShown: false }}
      />
    </StackMyEvent.Navigator>
  );
};

export default MyEventNavigator;
