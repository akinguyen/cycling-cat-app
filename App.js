import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Login from "./src/Login";
import Profile from "./src/Profile";
import Welcome from "./src/Welcome";
import Logo from "./src/Logo";
import EventList from "./src/EventList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CheckParticipation from "./src/CheckParticipation";
import MyEvent from "./src/MyEvent";
import MyEventDetail from "./src/MyEventDetail";
import EditEvent from "./src/EditEvent";
import CreateEvent from "./src/CreateEvent";
import EventDetail from "./src/EventDetail";
import EventList from "./src/EventList";

const screens = [
  <Profile />,
  <Logo />,
  <Login />,
  <Welcome />,
  <EventList />,
  <CheckParticipation />,
  <MyEvent />,
  <MyEventDetail />,
  <EventDetail />,
  <EditEvent />,
  <CreateEvent />,
  <EventList />,
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
