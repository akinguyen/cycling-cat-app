import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imagesArray: [props.pic1, props.pic2],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const imageMapper = this.state.ImageArray.map((image, index) => {
      return (
        <image
          src={image}
          onClick={() => this.props.handleImageChange(image)}
          height="50px"
        />
      );
    });

    return (
      <div className="ProfilePicture">
        <Button type="primary" onClick={this.showModal}>
          Edit Profile Picture
        </Button>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          {imageMapper}
        </Modal>
      </div>
    );
  }
}
export default ProfilePicture;
