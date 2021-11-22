import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  White: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  Rect: {
    backgroundColor: "#adff2f",
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  Fake: {
    backgroundColor: "white",
    height: "20%",
    width: "100%",
    alignItems: "center",
  },

  Choose: {
    backgroundColor: "#4682b4",
    height: 50,
    width: 200,
    alignItems: "center",
    marginTop: 30,
  },

  choose: {
    backgroundColor: "#4682b4",
    height: 45,
    width: 150,
    alignItems: "center",
    marginTop: 30,
  },

  Text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
