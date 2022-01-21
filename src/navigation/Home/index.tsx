import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

const HomeScreen = () => <></>;

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "red" } }}>
    <Stack.Screen
      name="Stack 2"
      options={{
        title: "Stack 2",
      }}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export default HomeStack;
