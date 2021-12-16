import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import axios from "axios";
import { Context } from "../../state/Provider";

export default function EventDetail({ navigation, route }) {
  const [state, dispatch] = useContext(Context);
  const { id } = route.params;
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [participants, setParticipants] = useState([]);
  const [isVisibleDes, setIsVisibleDes] = useState(false);
  const [join, setJoin] = useState("");

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

  const onSetParticipants = () => {
    const find = participants.find((user) => user._id == state.userData._id);
    if (!find) {
      setParticipants(
        participants.push({
          name: state.userData.info.name,
          _id: state.userData._id,
        })
      );
    }
    return participants;
  };

  const onSetJoin = () => {
    const find = participants.find((user) => user._id == state.userData._id);
    if (find) {
      setJoin("JOINED");
    }
    //return join;
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
        setParticipants(response.data.participants);
        onSetJoin();
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackGroundTop}>
        <Text style={styles.title}>EVENT</Text>
        <Text>{join}</Text>
      </View>
      <View style={styles.infocontainer}>
        <TouchableOpacity onPress={() => setIsVisibleDes(true)}>
          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{description}</Text>
            </View>
            <Modal visible={isVisibleDes} animationType="slide">
              <View
                style={{
                  justifyContent: "space-evenly",
                  flex: 1,
                  backgroundColor: "#CCFF99",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "70%",
                    width: "95%",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <ScrollView>
                    <Text>{description}</Text>
                  </ScrollView>
                </View>
                <View style={{ marginBottom: 20 }}>
                  <Button onPress={() => setIsVisibleDes(false)} title="BACK" />
                </View>
              </View>
            </Modal>
          </View>
        </TouchableOpacity>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Category:</Text>
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <Text>{category}</Text>
          </View>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Location:</Text>
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <Text>{location}</Text>
          </View>
        </View>

        <View style={styles.BackGroundMid}>
          <Text style={styles.text}>Time:</Text>
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <Text>{time}</Text>
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
        <View style={styles.back}>
          <Button
            title="JOIN"
            onPress={() => {
              onSetParticipants();
              axios
                .patch("https://cycling-cat-api.herokuapp.com/events/" + id, {
                  newParticipants: participants,
                })
                .then((result) => {
                  dispatch({
                    type: "JOIN_EVENT",
                  });
                  navigation.goBack();
                })
                .catch((err) => console.log(err));
            }}
            color="#339900"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
