import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import DoctorProfile from "../screens/DoctorProfile";
import Booking from "../screens/Booking";

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
