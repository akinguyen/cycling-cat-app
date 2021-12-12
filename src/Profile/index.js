import React, { useState } from "react";
import { Context } from "../../state/Provider";

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

export default function Profile({ navigation }) {
  const [state, dispatch] = useContext(Context);

  const [description, setDescription] = useState("");
  const [name, setName] = useState(state.userData.name); // look here
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
            <TouchableOpacity
              onPress={() => {
                dispatch({
                  type: "SIGN_OUT",
                });
              }}
            >
              <View style={styles.points}>
                <Text style={styles.pts}>Sign Out</Text>
              </View>
            </TouchableOpacity>

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
            <Text style={styles.text}>Year/Grade:</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
