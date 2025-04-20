import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Main" component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}