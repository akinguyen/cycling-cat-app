import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Context } from "../../state/Provider";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }) {
  const [state, dispatch] = useContext(Context);

  const [textEmail, settextEmail] = useState("");
  const onEnterEmail = (value) => {
    settextEmail(value);
  };

  const [textPassword, settextPassword] = useState("");
  const onEnterPassword = (value) => {
    settextPassword(value);
  };

  const [disPass, setDisPass] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={"position"}
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
      enabled={true}
    >
      <View style={styles.container}>
        <Image
          style={{ height: 160, width: 320, marginTop: 100, marginBottom: 50 }}
          source={{
            uri: "https://fv9-4.failiem.lv/thumb_show.php?i=d5c95gm34&view",
          }}
        />

        <View style={{ marginTop: 0, marginBottom: 20 }}>
          <Text style={styles.username}> Enter your email: </Text>
          <TextInput
            value={textEmail}
            onChangeText={onEnterEmail}
            placeholder="enter your email"
            style={styles.input}
          />
        </View>

        <View style={{ marginTop: 0, marginBottom: 20 }}>
          <Text style={styles.username}> Enter your password: </Text>
          <TextInput
            value={textPassword}
            onChangeText={onEnterPassword}
            placeholder="enter your password"
            style={styles.input}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 300,
          }}
        >
          <Button
            title="Sign in"
            onPress={() => {
              axios
                .post("https://cycling-cat-api.herokuapp.com/user/login", {
                  email: textEmail,
                  password: textPassword,
                })
                .then((result) => {
                  dispatch({
                    type: "SIGN_IN",
                    userData: result.data.userData,
                  });
                })
                .catch((err) => console.log(err));
            }}
            color="#7ED957"
          />
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("SignUp")}
            color="#7ED957"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
