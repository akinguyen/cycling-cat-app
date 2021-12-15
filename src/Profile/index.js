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
} from "react-native";
import styles from "./styles";
import EditProfile from "../EditProfile";
import { Context } from "../../state/Provider";
import { createStackNavigator } from "@react-navigation/stack";

function Profile({ navigation }) {
  const [state, dispatch] = useContext(Context);
  console.log(state.userData.info);
  const [name, setName] = useState(""); // look here
  const [birth, setBirth] = useState("");
  const [school, setschool] = useState("");
  const [id, setId] = useState("");

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

  useEffect(() => {
    setBirth(state.userData.info.birthday);
    setId(state.userData.info.stuID);
    setName(state.userData.info.name);
    setschool(state.userData.info.school);
  });

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
              source={require("../../asset/logo.png")}
              style={styles.avatar}
            />
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.BackGroundMid}>
              <Text style={styles.text}>Name:</Text>
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>{name}</Text>
              </View>
            </View>

            <View style={styles.BackGroundMid}>
              <Text style={styles.text}>Birthday:</Text>
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>{birth}</Text>
              </View>
            </View>

            <View style={styles.BackGroundMid}>
              <Text style={styles.text}>School:</Text>
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>{school}</Text>
              </View>
            </View>

            <View style={styles.BackGroundMid}>
              <Text style={styles.text}>Student ID:</Text>
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>{id}</Text>
              </View>
            </View>
            <View style={styles.BackGroundMid}>
              <Text style={styles.text}>Number of events joined:</Text>
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>{state.eventCount}</Text>
              </View>
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.back}>
              <Button
                title="EDIT"
                onPress={() => navigation.navigate("EditProfile")}
                color="#339900"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileDetail">
      <ProfileStack.Screen
        name="ProfileDetail"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
