import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

function EventList({ navigation }) {
  const [list, setList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      // userData.id => events/:userId
      axios
        .get("https://cycling-cat-api.herokuapp.com/events")
        .then((response) => {
          setList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={list}
        renderItem={(ItemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EventDetail", {
                id: ItemData.item._id.toString(),
              })
            }
            style={styles.groupcontainer}
          >
            <View style={styles.groupinfo}>
              <Image
                source={require("../../asset/logo.png")}
                style={styles.circle}
              />

              <View style={styles.infoname}>
                <Text style={styles.event}>Event </Text>
                <View style={styles.infobox}>
                  <Text style={{ fontWeight: "bold" }}>
                    Location:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {ItemData.item.location}
                    </Text>
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Category:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {ItemData.item.category}
                    </Text>
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Time:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {ItemData.item.time}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default EventList;
