import React, { useState, useContext, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "./styles";
import { Context } from "../../state/Provider";

function Profile({ navigation }) {
  const [state, dispatch] = useContext(Context);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [school, setschool] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (state.userData) {
      setBirth(state.userData.info.birthday);
      setId(state.userData.info.stuID);
      setName(state.userData.info.name);
      setschool(state.userData.info.school);
    }
  }, [state.userData]);

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.text}>Participants:</Text>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text>{state.participations}</Text>
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
    </SafeAreaView>
  );
}

export default Profile;
