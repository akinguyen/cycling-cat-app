import React, { useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import { Context } from "../../state/Provider";
import styles from "./styles";

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
        style={{ height: "100%", width: "100%", position: "absolute", top: 0 }}
        source={{
          uri: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/255972745_288842226478427_4834561469916519793_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=K9IIRTwRTqsAX_cWDmd&_nc_ht=scontent.fsgn3-1.fna&oh=4cb92935c2fc51f34f634e4cd334dbcc&oe=61B9CB35",
        }}
      />

      <View style={{ marginTop: 120 }}>
        <Text style={styles.username}> Enter your email: </Text>
        <TextInput
          value={textEmail}
          onChangeText={onEnterEmail}
          placeholder="enter your email"
          style={styles.input}
        />
      </View>

      <View style={{ marginTop: 10 }}>
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
              let userData = {};

              // TODO

              dispatch({
                type: "SIGN_IN",
                userData,
              }); // dispatch(action)
            }}
            color="#7ED957"
          />
        </View>
        <View style={{}}>
          <Button
            title="Sign up"
            onPress={() => navigation.push("")}
            color="#7ED957"
          />
        </View>
      </View>
    </View>
  );
}
