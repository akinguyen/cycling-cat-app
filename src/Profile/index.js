import React from "react";
import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./styles";
export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BackGroundAll}>
          <View style={styles.BackGroundTop}>
            <Image
              source={{
                uri: "https://s.luyengame.net/games/pikachu/image.jpg",
              }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Description:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Name:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Date of brith:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Type of school:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Name of school:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={{ marginLeft: 10 }}>Year/Grade:</Text>
          </View>

          <View style={styles.BackGroundMid1}>
            <Text style={{ marginLeft: 10 }}>Student ID:</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
