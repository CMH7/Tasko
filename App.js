import React from "react";
import { Text } from "react-native";

{
  /*Importing screens*/
}
import Welcome from "./assets/Screens/Welcome";
import Name from "./assets/Screens/Name";
import Taskolist from "./assets/Screens/Taskolist";

{
  /*plugins*/
}
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import API from "./assets/Screens/API";
import GetData from "./assets/components/GetData";
import PostData from "./assets/components/PostData";
import Post from "./assets/Screens/Post";
import Update from "./assets/Screens/Update";
import UpdateData from "./assets/components/UpdateData";
import Get from "./assets/Screens/Get";
import Delete from "./assets/Screens/Delete";
import DeleteData from "./assets/components/DeleteData";

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

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Taskolist"
          component={Taskolist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="API"
          component={API}
          options={{ headerShown: false, animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="postScreen"
          component={Post}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="postAPI"
          component={PostData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="getScreen"
          component={Get}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="getAPI"
          component={GetData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateScreen"
          component={Update}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateAPI"
          component={UpdateData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deleteScreen"
          component={Delete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deleteAPI"
          component={DeleteData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
