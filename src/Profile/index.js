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
  console.log(state.userData.info);
  const [name, setName] = useState(state.userData.info.name); // look here
  const [birth, setBirth] = useState(state.userData.info.birthday);
  const [school, setschool] = useState(state.userData.info.school);
  const [id, setId] = useState(state.userData.info.stuID);

  const onEnterName = (value) => {
    setName(value);
  };

  const onEnterBirth = (value) => {
    setBirth(value);
  };

  const onSetSchool = (value) => {
    setschool(value);
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
            <Text style={styles.text}>Name:</Text>
            <TextInput
              value={name}
              onChangeText={onEnterName}
              placeholder="Enter your name"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Birthday:</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              value={birth}
              onChangeText={onEnterBirth}
              placeholder="Enter your date of birth"
              style={styles.input}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>School:</Text>
            <TextInput
              value={school}
              onChangeText={onSetSchool}
              placeholder="Enter the type of you school"
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
