import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default function Template() {
  return (
    
    
    <View style={styles.BackGroundAll}>

      <View style={styles.BackGroundTop}>
        <View style={styles.Circle}>
        </View>
      </View>
      
      <Text style={{fontSize:50, marginTop:50, color:"red"}}>Profile</Text>
      
      <View style={styles.BackGroundMid}>
        <Text style={{marginLeft:10}}>Type of school:</Text>
      </View> 

      <View style={styles.BackGroundMid}>
        <Text style={{marginLeft:10}}>Name of school:</Text>
      </View>

      <View style={styles.BackGroundMid}>
        <Text style={{marginLeft:10}}>Year/Grade:</Text>
      </View>

      <View style={styles.BackGroundMid}>
        <Text style={{marginLeft:10}}>Student ID:</Text>
      </View>
      
      <View style={{flexDirection: "row", justifyContent:"flex-end", alignItems: "flex-end", width:"100%", height: "50%",}}>
        <View style={styles.Square1}>
          <Text style={{fontSize: 16, justifyContent: "space-around", textAlign: "center"}}>Profile</Text>
        </View>

        <View style={styles.Square1}>
          <Text>Events</Text>
        </View>

        <View style={styles.Square2}>
          <Text>Mine</Text>
        </View>
      </View>
      

    </View>
  )
}