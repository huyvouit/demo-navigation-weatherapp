import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./tab_navigation";
import ContactStackNavigator from "./stack_navigation";

const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactStackNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;
