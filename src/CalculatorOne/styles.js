import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  white: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  rect: {
    backgroundColor: "#adff2f",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fake: {
    backgroundColor: "white",
    height: "20%",
    width: "100%",
    alignItems: "center",
  },

  chooseBig: {
    backgroundColor: "#4682b4",
    height: 50,
    width: 200,
    alignItems: "center",
    marginTop: 30,
    borderRadius: 300,
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default styles;
