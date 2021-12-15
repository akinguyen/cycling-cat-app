import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  back: {
    height: 150,
    width: "100%",
    backgroundColor: "#CCFF99",
    alignItems: "center",
    justifyContent: "center",
  },

  avt: {
    height: 150,
    width: 150,
    borderRadius: 200,
    backgroundColor: "white",
    borderWidth: 1,
    //marginTop: 50,
    alignItems: "center",
  },

  bar: {
    //flexDirection: "row",
    height: 50,
    backgroundColor: "#FFFF66",
    alignItems: "center",
    //borderWidth: 1,
    //width: "33.5%",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },

  menu: {
    fontSize: 16,
    justifyContent: "space-around",
    textAlign: "center",
  },

  parti: {
    fontSize: 15,
    backgroundColor: "#CCFF99",
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },

  rect: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "50%",
  },
});

export default styles;
