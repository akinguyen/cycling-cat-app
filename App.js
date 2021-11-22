import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import PickSport from "./src/picksport";
import GroupDescription from "./src/GroupDescription";
import Login from "./src/login";
import MatchGroup from "./src/MatchGroup";
import NotifyMatching from "./src/NotifyMatching";
import Profile from "./src/Profile";
import Welcome from "./src/Welcome";
import Option from "./src/Option";
import CalculatorOne from "./src/CalculatorOne";
import CalculatorTwo from "./src/CalculatorTwo";
import ChooseGoal from "./src/ChooseGoal";
import Logo from "./src/Logo";
const screens = [
  <Logo />,
  <Login />,
  <Option />,
  <Welcome />,
  <MatchGroup />,
  <PickSport />,
  <NotifyMatching />,
  <GroupDescription />,
  <CalculatorOne />,
  <CalculatorTwo />,
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
