import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import MyEventDetail from "../MyEventDetail";
import { createStackNavigator } from "@react-navigation/stack";
import CheckParticipation from "../CheckParticipation";
import EditEvent from "../EditEvent";
import CreateEvent from "../CreateEvent";

function MyEvent({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button
          title="ADD"
          onPress={() => navigation.navigate("CreateEvent")}
          color="#FAD46B"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyEventDetail")}
          style={styles.groupinfo}
        >
          <Image
            source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={styles.event}>Event </Text>
            <View style={styles.infobox}>
              <Text style={styles.text}>Desscription:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyEventDetail")}
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
              <Text style={styles.text}>Desscription:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyEventDetail")}
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
              <Text style={styles.text}>Desscription:...</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MyEventDetail")}
          style={styles.groupinfo}
        >
          <Image
            source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={styles.event}>Event </Text>
            <View style={styles.infobox}>
              <Text style={styles.text}>Desscription:...</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
