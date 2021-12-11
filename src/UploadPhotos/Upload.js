import React, { Component } from "react";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import ProfilePicture from "./ProfilePicture";
import Pic1 from "./Photos/1.png";
import Pic2 from "./Photos/2.png";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
    };
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage,
    });
  };

  render() {
    return (
      <div className="Avatar">
        <Avatar size={64} icon={user} src={this.state.profileImage}></Avatar>
        <ProfilePicture
          handleImageChange={this.handleImageChange}
          pic1={Pic1}
          pic2={Pic2}
        />
      </div>
    );
  }
}
export default Avatar;
