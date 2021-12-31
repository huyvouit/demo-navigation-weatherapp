import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

class ContactPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInput}>Contact Page</Text>
      </View>
    );
  }
}

export default ContactPage;
