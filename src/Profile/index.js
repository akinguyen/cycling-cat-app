import React, { useState, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Context } from "../../state/Provider";

export default function Profile({ navigation }) {
  const [state, dispatch] = useContext(Context);
  // state.userData.events.length
  const [length, setLength] = useState(state.userData.events.length);
  const [description, setDescription] = useState("");
  const [name, setName] = useState(state.userData.info.name); // look here
  const [birth, setBirth] = useState("");
  const [typeOfSchool, setTypeOfSchool] = useState("");
  const [nameOfSchool, setNameOfSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [id, setId] = useState("");

  const onEnterDescription = (value) => {
    setDescription(value);
  };

  const onEnterName = (value) => {
    setName(value);
  };

  const onEnterBirth = (value) => {
    setBirth(value);
  };

  const onEnterTypeOfSchool = (value) => {
    setTypeOfSchool(value);
  };

  const onEnterNameOfSchool = (value) => {
    setNameOfSchool(value);
  };

  const onEnterGrade = (value) => {
    setGrade(value);
  };

  const onEnterId = (value) => {
    setId(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BackGroundAll}>
          <View style={styles.BackGroundTop}>
            <View style={styles.signout}>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: "SIGN_OUT",
                  });
                }}
              >
                <MaterialCommunityIcons name="logout" size={35} />
              </TouchableOpacity>
            </View>

            <Image
              source={{
                uri: "https://s.luyengame.net/games/pikachu/image.jpg",
              }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
            <TextInput
              value={description}
              onChangeText={onEnterDescription}
              placeholder="Enter your description"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Name:</Text>
            <TextInput
              value={name}
              onChangeText={onEnterName}
              placeholder="Enter your name"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Date of birth:</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              value={birth}
              onChangeText={onEnterBirth}
              placeholder="Enter your date of birth"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Type of school:</Text>
            <TextInput
              value={typeOfSchool}
              onChangeText={onEnterTypeOfSchool}
              placeholder="Enter the type of you school"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Name of school:</Text>
            <TextInput
              value={nameOfSchool}
              onChangeText={onEnterNameOfSchool}
              placeholder="Enter your school name"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Number of events joined:</Text>
            <TextInput
              keyboardType="numeric"
              value={grade}
              onChangeText={onEnterGrade}
              placeholder="Enter your grade"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid1}>
            <Text style={styles.text}>Student ID:</Text>
            <TextInput
              value={id}
              onChangeText={onEnterId}
              placeholder="Enter your student ID"
              style={styles.input}
            />
          </View>
          <View style={styles.BackGroundMid1}>
            <Text style={styles.text}>Number of events joined:</Text>
            <Text>{length}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
