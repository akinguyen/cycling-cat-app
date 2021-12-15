import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  BackGroundAll: {
    //backgroundColor: "white",
    height: "40%",
    flexDirection: "column",
    alignItems: "center",
  },

  BackGroundTop: {
    backgroundColor: "#CCFF99",
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  BackGroundMid: {
    backgroundColor: "#CCFF99",
    width: 370,
    height: 85,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 7,
  },

  BackGroundBottom: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "50%",
  },

  Square1: {
    backgroundColor: "#40ff00",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRightWidth: 2,
    width: "33.5%",
    justifyContent: "center",
  },

  Square2: {
    backgroundColor: "#40ff00",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    width: "33.5%",
    justifyContent: "center",
  },

  container: {
    flex: 1,
  },

  avatar: {
    height: 127,
    width: 127,
    marginBottom: -15,
  },

  BackGroundMid1: {
    backgroundColor: "#CCFF99",
    width: "95%",
    height: 85,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  points: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    height: 60,
    width: 60,
    marginRight: 10,
    alignItems: "center",
  },

  pts: {
    fontWeight: "bold",
  },

  text: {
    marginLeft: 10,
  },

  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  signout: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  button: {
    color: "#CCFF99",
    marginTop: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
  },
  back: {
    width: 70,
    height: 40,
  },
  infocontainer: {
    width: "95%",
    marginTop: 30,
    alignItems: "center",
  },
});

export default styles;
