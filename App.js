import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Input,Button, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.bar}>
          <Text style = {{color: 'white'}} >MATCHED GROUPS</Text>
        </View>
        
        <View style = {styles.groupinfo}>
          
          <Image source = { {uri: 'https://s.luyengame.net/games/pikachu/image.jpg'}} style = {styles.circle} />

          <View style = {styles.infoname}>
          <Text>User name:       </Text>
          <View style = {styles.infobox}>
            <Text>- Member:     </Text>
            <Text>- Leader:     </Text>
            <Text>- Sports:     </Text>
          </View>
        </View>  
      </View>

      <View style = {styles.groupinfo}>
          
          <Image source = { {uri: 'https://img.pokemondb.net/artwork/large/charizard-mega-x.jpg'}} style = {styles.circle} />

          <View style = {styles.infoname}>
          <Text>User name:       </Text>
          <View style = {styles.infobox}>
            <Text>- Member:     </Text>
            <Text>- Leader:     </Text>
            <Text>- Sports:     </Text>
          </View>
        </View>  
      </View>

      <View style = {styles.groupinfo}>
          
          <Image source = { {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntjrvQhcLbcd1R49jvD9ME7V3xhGxBDvdOA&usqp=CAU'}} style = {styles.circle} />

          <View style = {styles.infoname}>
          <Text>User name:       </Text>
          <View style = {styles.infobox}>
            <Text>- Member:     </Text>
            <Text>- Leader:     </Text>
            <Text>- Sports:     </Text>
          </View>
        </View>  
      </View>
    </SafeAreaView> 
  )
} 
  
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',

  },
  bar:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginLeft: 100,
    marginRight:100,
    marginTop: 80,
    height: 40,
    width: 250,
  },
  circle:{
    height: 120,
    width: 120,  
    
  },
  groupinfo:{
    marginTop: 75,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection: 'row',
  },
  infobox:{
    height: 100,
    width: 200,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#CCFF99',
    justifyContent: 'space-around'
  },
  infoname:{
    alignItems: 'flex-start',
    marginLeft: 2,
  }
})
