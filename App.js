import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import PickSport from "./src/picksport";
import GroupDescription from "./src/GroupDescription";
import Login from "./src/login";
import MatchGroup from "./src/MatchGroup";
import NotifyMatching from "./src/NotifyMatching";
import Profile from "./src/Profile";
import Logo from "./src/Logo";
import Welcome from "./src/Welcome";
import Option from "./src/Option";
import Calculator1 from "./src/Calculator1";
import Calculator2 from "./src/Calculator2";
const screens = [
  <Welcome />,
  <Option />,
  <Login />,
  <MatchGroup />,
  <PickSport />,
  <NotifyMatching />,
  <GroupDescription />,
  <Calculator1 />,
  <Calculator2 />,
];

export default function App() {
  const [order, setOrder] = useState(0);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOrder(order < screens.length - 1 ? order + 1 : 0);
      }}
    >
      <View style={{ flex: 1 }}>{screens[order]}</View>
    </TouchableWithoutFeedback>
  );
}
