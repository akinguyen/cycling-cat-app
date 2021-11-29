import React from "react";
import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./styles";
export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.BackGroundAll}>
          <View style={styles.BackGroundTop}>
            <View style={styles.points}>
              <Text style={styles.pts}>PTS</Text>
            </View>
            <Image
              source={{
                uri: "https://s.luyengame.net/games/pikachu/image.jpg",
              }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Description:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Name:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Date of brith:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Type of school:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Name of school:</Text>
          </View>

          <View style={styles.BackGroundMid}>
            <Text style={styles.text}>Year/Grade:</Text>
          </View>

          <View style={styles.BackGroundMid1}>
            <Text style={styles.text}>Student ID:</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
