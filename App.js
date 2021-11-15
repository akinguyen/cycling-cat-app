import * as React from 'react';
import { Text, View } from 'react-native';

//background-color => backgroundColor
export default function App() {
  return (
    <View style={{backgroundColor: "white", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>      
   <Text style={{ fontSize: "30px", color: "#ff2870"}}>Group Name</Text>

   <View>
      <Text style={{textAlign: "center", marginBottom: "10px", color: "#ff2870", padding: "10px", backgroundColor: "lightgray"}}>Member</Text>
     <Text style={{ textAlign: "center", marginBottom: "10px", color: "#ff2870", padding: "10px", backgroundColor: "lightgray"}}>Picture</Text>
     <Text style={{textAlign: "center", marginBottom: "10px", color: "#ff2870", padding: "10px", backgroundColor: "lightgray"}}>Share</Text>
</View>
 
    </View>
  );
}



/*

   <View style={{backgroundColor: "white", height: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>      
      <View style={{backgroundColor: "#7ed957", width: "100px", height: "100px", borderRadius: "200px"}}>
      </View>
      
            <Text style={{color: "#7ed957"}}> Middle</Text>

      
      <Text style={{color: "#7ed957"}}> Welcome </Text>
    </View> 
*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/