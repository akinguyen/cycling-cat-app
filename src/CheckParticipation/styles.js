import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  back: {
    height: 200,
    width: "100%",
    backgroundColor: "green",
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

  white: {
    backgroundColor: "white",
    marginTop: 20,
  },

  bar: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "green",
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

  parti: {
    fontSize: 15,
    backgroundColor: "green",
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  rect: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "50%",
  },
});

export default styles;