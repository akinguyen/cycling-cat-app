import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./src/Profile";
import MyEventNavigator from "./src/MyEvent";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EventListNavigator from "./src/EventList";
import CheckParticipation from "./src/CheckParticipation";
import MyEvent from "./src/MyEvent";
import MyEventDetail from "./src/MyEventDetail";
import EditEvent from "./src/EditEvent";
import CreateEvent from "./src/CreateEvent";
import EventDetail from "./src/EventDetail";
import EventList from "./src/EventList";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#7ED957",
        headerStyle: { backgroundColor: "#808080" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={EventListNavigator}
        options={{
          title: "Daily Events",
          tabBarLabel: "New events",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My events"
        component={MyEventNavigator}
        options={{
          tabBarLabel: "My events",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
