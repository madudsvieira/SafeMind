import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Devs from "../screens/Devs";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Developers" component={Devs} />
        </Tab.Navigator>
    );
}
