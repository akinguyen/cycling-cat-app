import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import axios from "axios";

export default function CheckParticipation({ navigation, route }) {
  const { id } = route.params;
  const [list, setList] = useState([]);
  const [listInfo, setListInfo] = useState([]);

  const onSetListInfo = (value) => {
    setListInfo(listInfo.push(value));
  };

  useEffect(() => {
    axios
      .get("https://cycling-cat-api.herokuapp.com/events/" + id)
      .then((response) => {
        //console.log(response.data.participants);
        setList(response.data.participants);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Image source={require("../../asset/logo.png")} style={styles.avt} />
      </View>
      <View style={styles.bar}>
        <Text>PARTICIPANTS</Text>
      </View>
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        data={list}
        keyExtractor={(item, index) => item._id}
        renderItem={(user) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "95%",
            }}
          >
            <Text>
              {" "}
              {user.index + 1}. {user.item.name}{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ParticipantsInfo", {
                  userId: user.item._id,
                });
              }}
            >
              <MaterialCommunityIcons name="account" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack()
                console.log(list);
              }}
            >
              <MaterialCommunityIcons
                name="check-outline"
                size={26}
                color="green"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="close-outline"
                size={26}
                color="red"
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{ marginTop: 20, marginBottom: 30 }}>
        <Button
          title="BACK"
          onPress={() => navigation.goBack()}
          color="#339900"
        />
      </View>
    </View>
  );
}
