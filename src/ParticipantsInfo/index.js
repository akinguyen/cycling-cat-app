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
import axios from "axios";

function ParticipantsInfo({ navigation, route }) {
  const { userId } = route.params;
  const [name, setName] = useState(""); // look here
  const [birth, setBirth] = useState("");
  const [school, setschool] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://cycling-cat-api.herokuapp.com/user/" + userId)
      .then((res) => {
        console.log(res.data);
        setBirth(res.data.info.birthday);
        setId(res.data.info.stuID);
        setName(res.data.info.name);
        setschool(res.data.info.school);
      })
      .catch((err) => console.log(err));
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackGroundAll}>
        <View style={styles.BackGroundTop}>
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
        </View>
        <View style={styles.button}>
          <View style={styles.back}>
            <Button
              title="BACK"
              onPress={() => navigation.goBack()}
              color="#339900"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ParticipantsInfo;
