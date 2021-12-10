import React, { useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import apptest1Screen from "../apptest1";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
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
    </View>
  );
}
