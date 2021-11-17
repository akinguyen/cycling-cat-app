import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Circle: {
    backgroundColor: "#00ff00",
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
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
