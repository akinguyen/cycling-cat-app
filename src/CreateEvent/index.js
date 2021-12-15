import React, { useContext, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { Context } from "../../state/Provider";

export default function CreateEvent({ navigation }) {
  const [state, dispatch] = useContext(Context);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [disabled, setDisabled] = useState(true);

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

  return (
    <KeyboardAvoidingView
      behavior={"position"}
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
      enabled={true}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.BackGroundTop}>
          <Text style={styles.title}>CREATE</Text>
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
            <Text style={styles.text}>Category:</Text>
            <TextInput
              value={category}
              onChangeText={onEnterCategory}
              placeholder="enter category"
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
          <View style={styles.cancel}>
            <Button
              title="CANCEL"
              onPress={() => {
                navigation.goBack();
              }}
              color="#339900"
            />
          </View>

          <View style={styles.back}>
            <Button
              title="POST"
              onPress={() => {
                navigation.push("MyEvent");
                axios
                  .post("https://cycling-cat-api.herokuapp.com/events", {
                    description: description,
                    location: location,
                    category: category,
                    time: time,
                    creatorID: state.userData._id,
                  })
                  .then((result) => console.log(result.data))
                  .catch((err) => console.log(err));
              }}
              color="#339900"
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
