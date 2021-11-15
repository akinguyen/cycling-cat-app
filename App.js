import React from "react";
import { Text, View } from "react-native";



export default function App() {
  return (
    
    <View style={{height: "100%", width: "100%",justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: "25%", }}>
      <Text style={{color: "white", textAlign: "centre", backgroundColor: "#5DC82F", padding: 8, fontSize: 19}}> Which sport do you prefer? </Text>
      </View>
      <View style={{flexDirection: "row", width: "80%", justifyContent: 'space-around'}}>
          <View style={{backgroundColor: '#5DC82F', width: 110, height: 50, borderRadius: 200, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Running </Text>
          </View>
          <View style={{backgroundColor: '#5DC82F', width: 110, height: 50, borderRadius: 200, marginBottom: 20,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Gym </Text>
          </View>
      </View>
      
      <View style={{flexDirection: "row", width: "80%", justifyContent: 'space-around'}}>
          <View style={{backgroundColor: '#7ed957', width: 110, height: 50, borderRadius: 200, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Cycling </Text>
          </View>
          <View style={{backgroundColor: '#7ed957', width: 110, height: 50, borderRadius: 200, marginBottom: 20,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Yoga </Text>
          </View>
      </View>

      <View style={{flexDirection: "row", width: "80%", justifyContent: 'space-around'}}>
          <View style={{backgroundColor: '#8FEB68', width: 110, height: 50, borderRadius: 200, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Badminton </Text>
          </View>
          <View style={{backgroundColor: '#8FEB68', width: 110, height: 50, borderRadius: 200, marginBottom: 20,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", textAlign: "centre", fontSize:17}}> Aerobics </Text>
          </View>
      </View>
    
      
    </View>

    
    
     
   
  );
}