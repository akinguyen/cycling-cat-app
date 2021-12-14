import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  labelAva: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "292px",
    margin: "auto",
    justifyContent: "space-between",
    color: "#9A9A9C",
    font: "inherit",
    fontSize: "1.18676em",
  },
  avaContainer: {
    margin: "auto",
    marginTop: "40px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    margin: "auto",
  },
  pictureContainer: {
    height: "100px",
    background: "white",
    width: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "contain",
    border: "1px solid black",
    margin: "auto",
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
export default useStyles;
