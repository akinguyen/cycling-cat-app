import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import PickSport from "./src/PickSport";
import GroupDescription from "./src/GroupDescription";
import Login from "./src/Login";
import NotifyMatching from "./src/NotifyMatching";
//import Profile from "./src/Profile";
import Welcome from "./src/Welcome";
import Option from "./src/Option";
import CalculatorOne from "./src/CalculatorOne";
import CalculatorTwo from "./src/CalculatorTwo";
import ChooseGoal from "./src/ChooseGoal";
import Logo from "./src/Logo";
import GroupActivity from "./src/GroupActivitiy";
import GroupMember from "./src/GroupMember";
import EventList from "./src/EventList";

const screens = [
  <Logo />,
  <Login />,
  <Option />,
  <Welcome />,
  <EventList />,
  <PickSport />,
  <NotifyMatching />,
  <GroupActivity />,
  <GroupDescription />,
  <GroupMember />,
  <ChooseGoal />,
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
