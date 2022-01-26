import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HelpScreen = () => <></>;

const HelpStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Stack 1"
      options={{
        headerStyle: { backgroundColor: "red" },
        contentStyle: { backgroundColor: "green" },
      }}
      component={HelpScreen}
    />
  </Stack.Navigator>
);

export default HelpStack;
