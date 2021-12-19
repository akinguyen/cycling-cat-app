import React, { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles";
import { Context } from "../../state/Provider";
import axios from "axios";
import { reverse } from "lodash";
import { useFocusEffect } from "@react-navigation/native";

function MyEvent({ navigation }) {
  const [state, dispatch] = useContext(Context);
  const [list, setList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          "https://cycling-cat-api.herokuapp.com/myevents/" + state.userData._id
        )
        .then((response) => {
          setList(reverse(response.data));
        })
        .catch((err) => {
          console.log(err);
        });

      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="ADD"
          onPress={() => navigation.navigate("CreateEvent")}
          color="brown"
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => item._id}
          data={list}
          renderItem={(ItemData) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MyEventDetail", {
                  id: ItemData.item._id.toString(),
                })
              }
              style={{ alignItems: "center" }}
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
    </View>
  );
}

export default MyEvent;
