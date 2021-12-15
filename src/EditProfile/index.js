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
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { Context } from "../../state/Provider";
import axios from "axios";

export default function EditProfile({ navigation }) {
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
    <KeyboardAvoidingView
      behavior={"position"}
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
      enabled={true}
    >
      <SafeAreaView style={styles.container}>
        <View>
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
                source={require("../../asset/logo.png")}
                style={styles.avatar}
              />
            </View>
            <View style={styles.infocontainer}>
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

              <View style={styles.BackGroundMid}>
                <Text style={styles.text}>Student ID:</Text>
                <TextInput
                  value={id}
                  onChangeText={onEnterId}
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
                          "https://cycling-cat-api.herokuapp.com/user/" +
                            state.userData._id,
                          {
                            newInfo: {
                              newName: name,
                              newSchool: school,
                              newStuID: id,
                              newBirthday: birth,
                            },
                          }
                        )
                        .then((result) => {
                          navigation.navigate("ProfileDetail");
                          dispatch({
                            type: "EDIT",
                            userData: result.data.user,
                          });
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
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
