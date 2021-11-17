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
    justifyContent: "centre",
  },
  Fake: {
    backgroundColor: "white",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "centre",
  },

  Choose: {
    backgroundColor: "#4682b4",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  Text: { fontSize: 20, textAlign: "center" },
});

export default styles;
