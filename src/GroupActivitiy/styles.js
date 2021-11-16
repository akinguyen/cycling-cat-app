import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  top: {
    marginTop: "17%",
    marginHorizontal: "5%",
    flexDirection: "row",
    height: "20%",
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
    justifyContent: "center",
    alignItems: "center",
  },
  ava: {
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    marginTop: "25%",
    alignSelf: "center",
    width: "50%",
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
    marginHorizontal: "5%",
    marginTop: "25%",
    height: "5%",
    backgroundColor: "#CCCCCC",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  activity: {
    marginTop: "10%",
    height: "45%",
    marginHorizontal: "5%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 3,
  },
});

export default styles;
