import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "../BottomTabNav";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={TabsNav} />
    </Stack.Navigator>
  );
}
