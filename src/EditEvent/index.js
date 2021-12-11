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

export default function EditEvent({ navigation }) {
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

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <ScrollView>
        <View style={styles.BackGroundTop}>
          <View style={styles.points}>
            <Text style={styles.pts}>PTS</Text>
          </View>
          <Text style={styles.title}>EVENT</Text>
=======
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
>>>>>>> 8c0be27af339fbb049e20cc0220b09b3deba667f
        </View>
        <View style={styles.infocontainer}>
          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
          </View>

<<<<<<< HEAD
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
        <View style={styles.ok}>
          <Button
            title="OK"
            onPress={() => navigation.goBack()}
            color="#339900"
=======
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
>>>>>>> 8c0be27af339fbb049e20cc0220b09b3deba667f
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
