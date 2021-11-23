import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bigView: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "space-around",
  },

  chooseBig: {
    backgroundColor: "#4682b4",
    height: 200,
    width: 300,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
    textAlign: "center",
  },
  note: {
    fontSize: 20,
    textAlign: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },
  bar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginLeft: 100,
    marginRight: 100,
    marginTop: 80,
    height: 40,
    width: 250,
  },
  circle: {
    height: 120,
    width: 120,
  },
  groupinfo: {
    marginTop: 75,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  infobox: {
    height: 100,
    width: 200,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#CCFF99",
    justifyContent: "space-around",
  },
  infoname: {
    alignItems: "flex-start",
    marginLeft: 2,
  },
});

export default styles;
