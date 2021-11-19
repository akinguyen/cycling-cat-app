import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function() {
  return(
    <View style= {{flex:1, flexDirection :"column"}}>
      <View style = {{backgroundColor : 'red', height : "15%", width : "100%", borderRadius: 20, justifyContent:"center"}}>
        <Text style ={{alignSelf:"center", fontSize: 20, color:"white"}}>EXERCISES</Text>
      </View>
        <View style = {{width: "38%", height:"13%", backgroundColor:'green', borderRadius: 30, justifyContent:"center",}}>
          <Text style={{color:"white", alignSelf:"center", fontSize: 17}}> Cat 1 </Text>
        </View>
      <View style ={{height:"70%", justifyContent:"space-around"}}>
        <View style ={{width:"80%", height : "30%", marginHorizontal:"10%", backgroundColor:'chartreuse', justifyContent:"center", borderRadius: 15}}>
          <Text style={{fontSize: 30, alignSelf:"center", color: "white"}}>EXC 1</Text>
        </View>
        <View style = {{flexDirection:"row", justifyContent:"space-around"}}>
          <View style ={{height: 70, width:"35%", backgroundColor:"deepskyblue", borderRadius:10, justifyContent:"center"}}>
            <Text style ={{alignSelf:"center", fontSize: 20, color:"white"}}>Share</Text>
          </View>
          <View style ={{height: 70, width: "20%", backgroundColor: "deepskyblue", borderRadius:200, justifyContent:"center"}}>
            <Text style={{alignSelf:"center", fontSize: 20, color:"white"}}>+</Text>
          </View>
        </View>
        <View style ={{width:"80%", height : "30%", marginHorizontal:"10%", backgroundColor:'chartreuse', justifyContent:"center", borderRadius: 15}}>
          <Text style={{fontSize: 30, alignSelf:"center", color: "white"}}>EXC 2</Text>
        </View>
        <View style = {{flexDirection:"row", justifyContent:"space-around"}}>
          <View style ={{height: 70, width:"35%", backgroundColor:"deepskyblue", borderRadius:10, justifyContent:"center"}}>
            <Text style ={{alignSelf:"center", fontSize: 20, color:"white"}}>Share</Text>
          </View>
          <View style ={{height: 70, width: "20%", backgroundColor: "deepskyblue", borderRadius:200, justifyContent:"center"}}>
            <Text style={{alignSelf:"center", fontSize: 20, color:"white"}}>+</Text>
          </View>
        </View>
      </View>
    </View>
  )
}