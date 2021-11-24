import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  white: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  rect: {
    backgroundColor: "#adff2f",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  chooseBig: {
    backgroundColor: "#4682b4",
    height: 50,
    width: 280,
    borderRadius: 300,
    alignItems: "center",
    marginTop: 30,
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
