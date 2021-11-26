import React from "react";
import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";

export default function EventList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.groupinfo}>
          <Image
            source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Event </Text>
            <View style={styles.infobox}>
              <Text style={{ fontSize: 20 }}>Desscription:...</Text>
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
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Event </Text>
            <View style={styles.infobox}>
              <Text style={{ fontSize: 20 }}>Desscription:...</Text>
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
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Event </Text>
            <View style={styles.infobox}>
              <Text style={{ fontSize: 20 }}>Desscription:...</Text>
            </View>
          </View>
        </View>

        <View style={styles.groupinfo}>
          <Image
            source={{ uri: "https://s.luyengame.net/games/pikachu/image.jpg" }}
            style={styles.circle}
          />

          <View style={styles.infoname}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Event </Text>
            <View style={styles.infobox}>
              <Text style={{ fontSize: 20 }}>Desscription:...</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
