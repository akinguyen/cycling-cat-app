import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  top: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    height: 170,
    justifyContent: "space-between",
    backgroundColor: "#99FF99",
  },
  menu: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "gray",
    width: 40,
    height: 40,
  },
  inMenu: {
    width: 30,
    height: 7,
    backgroundColor: "black",
  },
  bell: {
    height: 40,
    width: 40,
    backgroundColor: "red",
    alignItems: "center",
  },
  ava: {
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    marginTop: 100,
    alignSelf: "center",
    width: 300,
  },
  picture: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: "white",
    borderWidth: 1,
  },
  name: {
    fontSize: 30,
    marginTop: 10,
  },
  bar: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 100,
    height: 40,
    backgroundColor: "#CCCCCC",
  },
  content: {
    alignItems: "center",
    width: 98,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  description: {
    marginTop: 30,
    height: 200,
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 3,
  },
  achievement: {
    marginTop: 20,
    borderWidth: 3,
    marginBottom: 20,
    height: 110,
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default styles;
