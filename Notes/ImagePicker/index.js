import React, { useCallback, useState } from "react";
import useStyles from "./styles";

export default function ImagePicker({ navigation }) {
  const [ava, setAva] = useState("");

  const classes = useStyles();

  const handleCreatebase64 = useCallback(async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setAva(base64);
    e.target.value = "";
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new fileReader();

      if (!file) {
        alert("Please select an Image");
      } else {
        fileReader.readAsDataULR(file);
        fileReader.onLoad = () => {
          resolve(fileReader.result);
        };
      }

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const deleteImage = (e) => {
    e.preventDefautl();
    setAva(null);
  };

  return (
    <div className={classes.container}>
      <label className={classes.lableAva} htmlFor="contained-button-file">
        <div className={classes.buttonContainer}>
          <div className={(classes, button)}>
            <p className={classes.buttonText}>Choose Image</p>
          </div>
        </div>
        {ava ? (
          <div className={classes.button}>
            <p onClick={deleteImage} className={classes.buttonText}>
              Delete Image
            </p>
          </div>
        ) : null}
        {ava ? (
          <span>
            <div className={classes.pictureContainer}>
              <img className={classes.picture} src={ava} alt="ava" />
            </div>
          </span>
        ) : null}
      </label>
    </div>
  );
}
