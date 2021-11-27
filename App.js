import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Login from "./src/Login";
//import Profile from "./src/Profile";
import Welcome from "./src/Welcome";
import Logo from "./src/Logo";
<<<<<<< HEAD
import GroupActivity from "./src/GroupActivitiy";
//import GroupMember from "./src/GroupMember";
import CheckParticipation from "./src/CheckParticipation";

const screens = [
  <Logo />,
  <Login />,
  <Option />,
  <Welcome />,
  <MatchGroup />,
  <PickSport />,
  <NotifyMatching />,
  <GroupActivity />,
  <GroupDescription />,
  // <GroupMember />,
  <ChooseGoal />,
  <CalculatorOne />,
  <CalculatorTwo />,
  <CheckParticipation />,
];
=======
import EventList from "./src/EventList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const screens = [<Logo />, <Login />, <Welcome />, <EventList />];
>>>>>>> e416d427ee7021db152ddbd1d37747cb94357347

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
