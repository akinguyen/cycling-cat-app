import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
    alignItems: "center",
  },

  bar: {
    alignItems: "center",
    backgroundColor: "black",
    marginLeft: 100,
    marginRight: 100,
    marginTop: 80,
    height: 40,
    width: 250,
    justifyContent: "center",
  },

  circle: {
    height: 127,
    width: 127,
  },

  groupinfo: {
    marginBottom: 75,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },

  infobox: {
    height: 100,
    width: 200,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#CCFF99",
    padding: 10,
    marginBottom: 30,
    justifyContent: "space-around",
  },

  infoname: {
    alignItems: "flex-start",
    marginLeft: 2,
  },

  pts: {
    fontWeight: "bold",
  },

  event: {
    fontWeight: "bold",
    fontSize: 20,
  },

  scroll: {
    alignItems: "center",
    marginTop: 20,
  },

  text: {
    fontSize: 20,
  },

  button: {
    marginTop: 20,
  },
});

export default styles;
