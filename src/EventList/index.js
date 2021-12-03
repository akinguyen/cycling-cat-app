import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetail from "../EventDetail";

const StackEvent = createStackNavigator();

function EventList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EventDetail")}
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
              <Text style={styles.text}>Description:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("EventDetail")}
          style={styles.groupinfo}
        >
          <Image
            source={{
              uri: "https://img.pokemondb.net/artwork/large/charizard-mega-x.jpg",
            }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={styles.event}>Event </Text>
            <View style={styles.infobox}>
              <Text style={styles.text}>Description:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("EventDetail")}
          style={styles.groupinfo}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntjrvQhcLbcd1R49jvD9ME7V3xhGxBDvdOA&usqp=CAU",
            }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={styles.event}>Event </Text>
            <View style={styles.infobox}>
              <Text style={styles.text}>Description:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("EventDetail")}
          style={styles.groupinfo}
        >
          <Image
            source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={styles.event}>Event </Text>
            <View style={styles.infobox}>
              <Text style={styles.text}>Description:...</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
