import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  BackGroundAll: {
    backgroundColor: "white",
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
    width: "95%",
    height: 60,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 30,
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
    height: 60,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 60,
  },
});

export default styles;