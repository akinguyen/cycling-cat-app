import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Welcome() {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/256606742_194419892862327_7346167934933760766_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=qCJG0Ls22HQAX_NK6z9&_nc_ht=scontent.fsgn4-1.fna&oh=8b38c8d1da63480a66415afa07427707&oe=61BACCAB",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
