<<<<<<< HEAD
﻿import React from 'react';
=======
import React from 'react';
>>>>>>> 79e3124603512c993984728fa63a885dc536bd12
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Image source={{ uri: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/245424195_563237511630518_8274433361488201924_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Mcc9cmEWSa4AX9S3hi4&_nc_ht=scontent.fsgn8-2.fna&oh=b813fa4dca789f6b432a6b6e9969802e&oe=619CFF92' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Sức mạnh càng lớn, trách nhiệm càng cao!
      </Text>

      <TouchableOpacity
        onPress={() => alert('Bạn đã đồng ý đi ăn cơm')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>
        Bấm để đi ăn cơm
        </Text>
=======
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
>>>>>>> 79e3124603512c993984728fa63a885dc536bd12
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
<<<<<<< HEAD
    height: 300,
    marginBottom: 20,
  },
  instructions: {
    color: '#f72',
=======
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
>>>>>>> 79e3124603512c993984728fa63a885dc536bd12
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});