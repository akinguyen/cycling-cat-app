import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigation from "../MainTabNavigation";
import EditProfile from "../EditProfile";
import CheckParticipation from "../CheckParticipation";
import EditEvent from "../EditEvent";
import ParticipantsInfo from "../ParticipantsInfo";
import CreateEvent from "../CreateEvent";
import MyEventDetail from "../MyEventDetail";
import EventDetail from "../EventDetail";

const MainStack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />

      {/** PROFILE STACK */}

      <MainStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Edit profile" }}
      />

      {/** MY EVENT STACK */}
      <MainStack.Screen
        name="MyEventDetail"
        component={MyEventDetail}
        options={{ headerShown: false }}
      />

      <MainStack.Screen
        name="CheckParticipation"
        component={CheckParticipation}
        options={{ title: "Check Participation", headerShown: true }}
      />
      <MainStack.Screen
        name="ParticipantsInfo"
        component={ParticipantsInfo}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="EditEvent"
        component={EditEvent}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}
