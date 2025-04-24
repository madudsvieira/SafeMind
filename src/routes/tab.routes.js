import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Devs from "../screens/Devs";
import Apoio from "../screens/Apoio";
import Exercicios from "../screens/Exercicios";
import Feedback from "../screens/Feedback";
import React from "react";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Developers" component={Devs} />
            <Tab.Screen name="Apoio" component={Apoio} />
            <Tab.Screen name="Exercícios" component={Exercicios} />
            <Tab.Screen name="Feedback" component={Feedback} />
        </Tab.Navigator>
    );
}
