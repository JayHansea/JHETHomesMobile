import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Home, Filter, Notifications } from "./src/screens/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const appData = await AsyncStorage.getItem("isAppFirstLaunched");
        if (appData === null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem("isAppFirstLaunched", "false");
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen name="Onboarding" component={Onboarding} />
          )}
          <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
