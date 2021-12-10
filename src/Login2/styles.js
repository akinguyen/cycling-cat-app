import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 0,
    padding: 0,
  },
  input: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2,
    padding: 10,
    borderColor: "black",
  },
  username: {
    margin: 20,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  back: {
    width: 70,
    height: 40,
  },
  back1: {
    width: 80,
    height: 40,
  },
  button: {
    color: "#CCFF99",
    marginTop: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container1: {
    flex: 1,
    alignItems: "center",
  },
});
export default styles;
