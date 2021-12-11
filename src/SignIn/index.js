import React, { useState } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import styles from "./styles";
import AuthContext from "../../AuthContext";

export default function SignIn({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

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
            onPress={() =>
              signIn({ username: textEmail, password: textPassword })
            }
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
