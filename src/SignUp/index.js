import React, { useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import styles from "./styles";
import AuthContext from "../../AuthContext";
import { Context } from "../../state/Provider";

export default function SignUp({ navigation }) {
  const [state, dispatch] = useContext(Context);

  const [textEmail, settextEmail] = useState("");
  const onEnterEmail = (value) => {
    settextEmail(value);
  };

  const [textPassword, settextPassword] = useState("");
  const onEnterPassword = (value) => {
    settextPassword(value);
  };

  const [textCfPassword, settextCfPassword] = useState("");
  const onEnterCfPassword = (value) => {
    settextCfPassword(value);
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 160, width: 320, marginTop: 100, marginBottom: 50 }}
        source={{
          uri: "https://fv9-1.failiem.lv/thumb_show.php?i=72j8rs8kp&view",
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

      <View style={{ marginTop: 0, marginBottom: 20 }}>
        <Text style={styles.username}> Confirm your password: </Text>
        <TextInput
          value={textCfPassword}
          onChangeText={onEnterCfPassword}
          placeholder="confirm your password"
          style={styles.input}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ marginRight: 20 }}>
          <Button
            title="Finish"
            onPress={() => navigation.goBack()}
            color="#7ED957"
          />
        </View>
      </View>
    </View>
  );
}
