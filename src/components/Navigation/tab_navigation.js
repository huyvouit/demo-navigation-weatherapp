import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "../Navigation/stack_navigation";

const Tab = createBottomTabNavigator();
class BottomTabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home Page"
          component={MainStackNavigator}
          options={{ headerShown: false, tabBarIconStyle: { display: "none" } }}
        />
        <Tab.Screen name="About Page" component={MainStackNavigator} />
      </Tab.Navigator>
    );
  }
}
export default BottomTabNavigator;
