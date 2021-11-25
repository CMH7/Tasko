import React from "react";
import Welcome from "./assets/Screens/Welcome";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    GothamBlack: require("./assets/fonts/Gotham-Font/Gotham-Black.otf"),
    GothamBold: require("./assets/fonts/Gotham-Font/Gotham-Bold.otf"),
    GothamBook: require("./assets/fonts/Gotham-Font/GothamBook.otf"),
    GothamBoldItalic: require("./assets/fonts/Gotham-Font/Gotham-BookItalic.otf"),
    GothamLight: require("./assets/fonts/Gotham-Font/Gotham-Light.otf"),
    GothamThin: require("./assets/fonts/Gotham-Font/Gotham-Thin.otf"),
    GothamThinItalic: require("./assets/fonts/Gotham-Font/Gotham-ThinItalic.otf"),
    GothamUltraItalic: require("./assets/fonts/Gotham-Font/Gotham-UltraItalic.otf"),
    GothamXLight: require("./assets/fonts/Gotham-Font/Gotham-XLight.otf"),
    GothamXLightItalic: require("./assets/fonts/Gotham-Font/Gotham-XLightItalic.otf"),
    GothamMedium: require("./assets/fonts/Gotham-Font/GothamMedium.otf"),
  });

  if (!loaded) {
    return <Text>App is loading fonts.</Text>;
  }

  return <Welcome />;
}
