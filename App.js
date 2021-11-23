import * as React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

export default function Welcome() {
  return (
    <View
      style={{ flex:1, justifyContent:"space-evenly"  }}>
        <View style = {styles.titleContainer}>
          <Text style = {styles.textTitle}>Timetable</Text>
        </View>
        <View style ={{width: "60%", height: "8%", backgroundColor:"chartreuse", alignSelf:"flex-start", borderRadius:50, justifyContent:"center"}}>
          <Text style = {styles.text}>Today</Text>
        </View>
        <View style = {styles.middleContainer}>
          <View style = {styles.smallContainer}>

          </View>
          <View style = {styles.smallContainer}>

          </View>
          <View style = {styles.smallContainer}>

          </View>
        </View>
        <View style = {styles.smolContainer}>
          <Text style = {styles.text}> Edit Timetable </Text>
        </View>
        <View style = {styles.cal}>
        <Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square>
        </View>
        <View style = {styles.cal}>
        <Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square>
        </View>
        <View style = {styles.cal}>
        <Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square>
        </View>
        <View style = {styles.cal}>
        <Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square>
        </View>
        <View style = {styles.cal}>
        <Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square><Square></Square>
        </View>
    </View>
  )
}




const windowWidth = Dimensions.get('window').width;


const Square = props => {
  return (
          <View style={styles.square}>
          </View>
      );
  };
  const n = 5;


  
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    alignSelf: "center",
    color: "white"
  },
  titleContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: "grey",
    justifyContent:"center"
  },
  middleContainer: {
    width: "100%",
    height: "30%",
    justifyContent:"space-evenly"
  },
  smallContainer:{
    alignSelf:"center",
    width:"90%",
    height:"25%",
    backgroundColor:"green",
    borderRadius:30
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    color: "white",
    justifyContent:"center"
  },
  square: {
    width : windowWidth/8,
    height : 50,
    backgroundColor : "greenyellow",
    alignSelf:"flex-start",
    borderColor: "white",
    borderRadius: 10
  },
  cal: {
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  smolContainer:{
    width : "50%", 
    height : "8%", backgroundColor: "red", 
    alignSelf: "flex-end", 
    borderRadius: 15, 
    justifyContent:"center"
  }


});
