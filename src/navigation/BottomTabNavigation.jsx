import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Shop, Favorite, Cart, Profile } from "../screens/Index";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ScreenHeaderBtn from "../components/reusables/screenHeader/ScreenHeaderBtn";
import { COLORS, SIZES } from "../constants/theme";
import { left } from "../constants/icons";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  position: "sticky",
  padding: SIZES.small,
  height: 60,
  paddingBottom: SIZES.xSmall,
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#eb6a58"
      tabBarHideKeyboard={true}
      headerShown={false}
      inactiveColor="#3e2465"
      barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={SIZES.xLarge}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarLabel: "Shop",
          headerShown: true,
          title: "Products",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={SIZES.xLarge}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarLabel: "Favorite",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-outline"}
              size={SIZES.xLarge}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarLabel: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "shopping" : "shopping-outline"}
              size={SIZES.xLarge}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={SIZES.xLarge}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
