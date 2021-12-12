import React, { useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import { Context } from "../../state/Provider";
import styles from "./styles";
<<<<<<< HEAD
import AuthContext from "../../AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../SignUp";
import axios from "axios";
=======
>>>>>>> c5ec68d9dc0f3cf562bec994893de34d334a4546

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

  return (
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
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ marginRight: 20 }}>
          <Button
            title="Sign in"
            onPress={() => {
<<<<<<< HEAD
              axios
                .post("https://cycling-cat-api.herokuapp.com/user/login", {
                  email: textEmail,
                  password: textPassword,
                })
                .then((result) => signIn(result))
                .catch((err) => console.log(err));
=======
              let userData = {};

              // TODO

              dispatch({
                type: "SIGN_IN",
                userData,
              }); // dispatch(action)
>>>>>>> c5ec68d9dc0f3cf562bec994893de34d334a4546
            }}
            color="#7ED957"
          />
        </View>
        <View style={{}}>
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("SignUp")}
            color="#7ED957"
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

const SignUpNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
