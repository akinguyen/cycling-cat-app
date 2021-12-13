import React, { useState, useContext, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { Context } from "../../state/Provider";
import axios from "axios";

export default function EditProfile({ navigation, route }) {
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
    <KeyboardAvoidingView
      behavior={"position"}
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
      enabled={true}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.BackGroundAll}>
            <View style={styles.BackGroundTop}>
              <Text style={{ fontSize: 50 }}>EDIT</Text>
            </View>
            <View style={styles.infocontainer}>
              <View style={styles.BackGroundMid}>
                <Text style={styles.text}>Description:</Text>
                <TextInput
                  value={description}
                  onChangeText={onEnterDescription}
                  placeholder="Enter your name"
                  style={styles.input}
                />
              </View>

              <View style={styles.BackGroundMid}>
                <Text style={styles.text}>Category:</Text>
                <TextInput
                  keyboardType="numbers-and-punctuation"
                  value={category}
                  onChangeText={onEnterCategory}
                  placeholder="Enter your date of birth"
                  style={styles.input}
                />
              </View>

              <View style={styles.BackGroundMid}>
                <Text style={styles.text}>Location:</Text>
                <TextInput
                  value={location}
                  onChangeText={onEnterLocation}
                  placeholder="Enter the type of you school"
                  style={styles.input}
                />
              </View>

              <View style={styles.BackGroundMid}>
                <Text style={styles.text}>Time:</Text>
                <TextInput
                  value={time}
                  onChangeText={onEnterTime}
                  placeholder="Enter your student ID"
                  style={styles.input}
                />
              </View>
              <View style={styles.button}>
                <View style={styles.back}>
                  <Button
                    title="CANCEL"
                    onPress={() => navigation.goBack()}
                    color="#339900"
                  />
                </View>
                <View style={styles.back}>
                  <Button
                    title="FINISH"
                    onPress={() => {
                      axios
                        .patch(
                          "https://cycling-cat-api.herokuapp.com/events/" + id,
                          {
                            newDescription: description,
                            newCategory: category,
                            newLocation: location,
                            newTime: time,
                          }
                        )
                        .then((result) => {
                          navigation.push("MyEventDetail", { id: id });
                        })
                        .catch((err) => console.log(err));

                      //console.log(state.userData._id);
                    }}
                    color="#339900"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
