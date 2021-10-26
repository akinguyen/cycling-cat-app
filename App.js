import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/245424195_563237511630518_8274433361488201924_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Mcc9cmEWSa4AX8GrPri&_nc_ht=scontent.fsgn5-5.fna&oh=2cb6bda6c17cebe22c31fa032924a445&oe=619CFF92' }} style={styles.logo} />
      <Text style={{ fontSize: 20, color: '#fff' }}>
        M có bị thiểu năng không!
      </Text>

      <TouchableOpacity
        onPress={() => alert('m bị thiểu năng')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>bấm vào để không bị thiểu năng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 305,
    marginBottom: 100,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});