import React from "react";
import Profile from "../Profile";
import MyEventNavigator from "../MyEvent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EventListNavigator from "../EventList";

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
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
