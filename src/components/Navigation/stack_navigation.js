import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";

const Stack = createStackNavigator();

class MainStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
      </Stack.Navigator>
    );
  }
}
export { MainStackNavigator };

class ContactStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="ContactPage" component={ContactPage} />
      </Stack.Navigator>
    );
  }
}
export default ContactStackNavigator;

const screenOptionStyle = {
  headerStyle: { backgroundColor: "#9AC4F8" },
  headerTintColor: "white",
};
