import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Devs from "../screens/Devs";
import Apoio from "../screens/Apoio";
import Exercicios from "../screens/Exercicios";
import Feedback from "../screens/Feedback";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Exercicios":
              iconName = "sparkles-outline";
              break;
            case "Apoio":
              iconName = "heart-outline";
              break;
            case "Feedback":
              iconName = "chatbubble-ellipses-outline";
              break;
            case "Developers":
              iconName = "people-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5A67D8",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exercicios" component={Exercicios} />
      <Tab.Screen name="Apoio" component={Apoio} />
      <Tab.Screen name="Feedback" component={Feedback} />
      <Tab.Screen name="Developers" component={Devs} />
    </Tab.Navigator>
  );
}
