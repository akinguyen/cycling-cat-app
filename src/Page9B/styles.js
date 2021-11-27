import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    BackGroundAll:{backgroundColor:"white", height:"40%", flexDirection:"column", alignItems:"center", justifyContent: ""},
    
    BackGroundTop:{backgroundColor:"#40ff00", width:"100%", height:"50%", alignItems:"center", justifyContent:"flex-end"},

    Circle: {backgroundColor:"white", width:100, height:100, alignSelf:"", justifyContent:"flex-end", borderRadius:100},

    BackGroundMid:{backgroundColor:"#bfff00",width:"95%", height:60, flexDirection:"column", justifyContent: "space-evenly", marginBottom:5},

    BackGroundBottom:{flexDirection: "row", justifyContent:"flex-end", alignItems: "flex-end", width:"100%", height: "50%"},

    Square1:{backgroundColor: "#40ff00", flexDirection: "row", height: 50, alignItems: "center", borderRightWidth: 2, width: "33.5%", justifyContent: "center"},
    Square2:{backgroundColor: "#40ff00", flexDirection: "row", height: 50, alignItems: "center", width: "33.5%", justifyContent: "center"}
})

export default styles;