import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  back: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
  },
  avt: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: "white",
    borderWidth: 1,
    marginTop: 50,
    alignItems: "center",
  },
  bar: {
    height: 50,
    backgroundColor: "#7ed957",
    alignItems: "center",
    borderWidth: 1,
    width: "33.5%",
    justifyContent: "center",
  },

  menu: {
    fontSize: 16,
    justifyContent: "space-around",
    textAlign: "center",
  },
  rect: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "50%",
  },
  info: {
    fontSize: 25,
    margin: 20,
    backgroundColor: "#7ed957",
  },
});

export default styles;
