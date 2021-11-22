import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import PickSport from "./src/PickSport";
import GroupDescription from "./src/GroupDescription";
import Login from "./src/Login";
import MatchGroup from "./src/MatchGroup";
import NotifyMatching from "./src/NotifyMatching";
import Profile from "./src/Profile";
import Welcome from "./src/Welcome";
import Option from "./scr/Option";
import Calculator1 from "./src/Calculator1";
import Calculator2 from "./src/Calculator2";
import ChooseGoal from "./scr/ChooseGoal";
const screens = [
  <Welcome />,
  <Option />,
  <Login />,
  <MatchGroup />,
  <PickSport />,
  <Profile />,
  <NotifyMatching />,
  <GroupDescription />,
  <Calculator1 />,
  <Calculator2 />,
  <ChooseGoal />,
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
