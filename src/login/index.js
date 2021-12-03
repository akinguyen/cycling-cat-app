import React, { useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import styles from "./styles";
export default function Login({ navigation }) {
  const [textName, setTextName] = useState("");
  const onEnterName = (value) => {
    setTextName(value);
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
        <Text style={styles.username}> User name:</Text>
        <TextInput
          value={textName}
          onChangeText={onEnterName}
          placeholder="enter your name"
          style={styles.input}
        />
        <Button title="Submit" onPress={() => navigation.push("Profile")} />
      </View>
    </View>
  );
}
