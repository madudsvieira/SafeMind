import { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Tabs");
    }, 2000); // 2 segundos
  }, []);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}
