import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Upload" component={UploadNav} />
    </Stack.Navigator>
  );
}
