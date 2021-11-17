import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import styles from "./styles";

export default function MatchGroup() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <Text style={{ color: "white" }}>MATCHED GROUPS</Text>
      </View>

      <View style={styles.groupinfo}>
        <Image
          source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
          style={styles.circle}
        />

        <View style={styles.infoname}>
          <Text>User name: </Text>
          <View style={styles.infobox}>
            <Text>- Member: </Text>
            <Text>- Leader: </Text>
            <Text>- Sports: </Text>
          </View>
        </View>
      </View>

      <View style={styles.groupinfo}>
        <Image
          source={{
            uri: "https://img.pokemondb.net/artwork/large/charizard-mega-x.jpg",
          }}
          style={styles.circle}
        />

        <View style={styles.infoname}>
          <Text>User name: </Text>
          <View style={styles.infobox}>
            <Text>- Member: </Text>
            <Text>- Leader: </Text>
            <Text>- Sports: </Text>
          </View>
        </View>
      </View>

      <View style={styles.groupinfo}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntjrvQhcLbcd1R49jvD9ME7V3xhGxBDvdOA&usqp=CAU",
          }}
          style={styles.circle}
        />

        <View style={styles.infoname}>
          <Text>User name: </Text>
          <View style={styles.infobox}>
            <Text>- Member: </Text>
            <Text>- Leader: </Text>
            <Text>- Sports: </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
