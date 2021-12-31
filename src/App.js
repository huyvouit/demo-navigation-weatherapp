import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import DrawerNavigator from "./components/Navigation/drawer_navigation";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./components/Navigation/stack_navigation";
import BottomTabNavigator from "./components/Navigation/tab_navigation";

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}

export default registerRootComponent(App);
