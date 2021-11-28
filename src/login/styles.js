import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 0,
    padding: 0,
    backgroundColor:"white",
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
});
export default styles;
