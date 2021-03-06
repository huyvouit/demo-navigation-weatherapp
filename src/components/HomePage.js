import React from "react";
import SearchInput from "./SearchInput";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { getWeather, getImageBackgroundSrc } from "../helpers/weatherHelper";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "New York",
      weather: "",
      temperature: "",
      imageBackground: "",
      loading: true,
      error: false,
    };
  }
  async componentDidMount() {
    await this.onSubmit(`London`);
  }

  onSubmit = async (text) => {
    let data = await getWeather(text);
    if (data) {
      this.setState({
        location: text,
        weather: data.weatherStateName,
        temperature: Number(data.temperature.toFixed(1)),
        imageBackground: getImageBackgroundSrc(data.weatherStateAbbr),
        error: false,
        loading: false,
      });
    } else {
      this.setState({
        error: true,
        loading: false,
        location: text,
        weather: `Could not load weather`,
        temperature: `0`,
        imageBackground: getImageBackgroundSrc("c"),
      });
    }
  };

  render() {
    let { location, weather, temperature, imageBackground, loading, error } =
      this.state;
    if (!imageBackground) {
      imageBackground = getImageBackgroundSrc("c");
    }
    return (
      <KeyboardAvoidingView style={styles.container}>
        {loading ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ImageBackground
            source={imageBackground}
            style={styles.imageContainer}
            imageStyle={styles.image}
            height={100}
          >
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                {weather ? weather : ""}
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>
                {temperature}??
              </Text>
              <SearchInput
                searchPlaceHoder={"Search any city"}
                onSubmit={this.onSubmit}
              />
              <Pressable
                style={styles.button}
                onPress={() => this.props.navigation.navigate("About")}
              >
                <Text style={styles.textStyle}>Go to About Screen</Text>
              </Pressable>
            </View>
          </ImageBackground>
        )}
      </KeyboardAvoidingView>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa66",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white",
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },

  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    width: 150,
    height: 50,
  },
});
