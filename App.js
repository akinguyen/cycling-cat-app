import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import PickSport from "./src/PickSport";
import GroupDescription from "./src/GroupDescription";
import Login from "./src/Login";
import MatchGroup from "./src/MatchGroup";
import NotifyMatching from "./src/NotifyMatching";
import Profile from "./src/Profile";
import Welcome from "./src/Welcome";

const screens = [
  <Welcome />,
  <Login />,
  <MatchGroup />,
  <PickSport />,
  <Profile />,
  <NotifyMatching />,
  <GroupDescription />,
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
