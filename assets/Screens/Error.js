import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  Image,
  Pressable,
} from "react-native";

{
  /*Own imports*/
}
import colors from "../config/colors.js";

let devicewidth = Dimensions.get("window").width;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontSizem = 0.23;
let fontWelcomeSize = devicewidth * fontSizem;

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Sets the status bar properties and styles for this Screen*/}
      <StatusBar
        barStyle={"default"}
        backgroundColor={colors.purple}
        translucent={false}
      />

      {/* This section are the circles of the Screen*/}
      <View style={styles.circle2}></View>
      <View style={styles.circle1}></View>
      <View style={styles.circle2b}></View>
      <View style={styles.circle1b}></View>

      {/*Tasko name and logo*/}
      <View style={styles.logoContainer}>
        <Image
          source={require("../img/TaskoLogo.png")}
          style={styles.TaskoLogo}
        />
        <Text style={styles.ASKO}>ASKO</Text>
      </View>

      {/*Button*/}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Name")}
      >
        <Text style={styles.btnText}>START NOW!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },

  circle1: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    top: -225,
    left: "-50%",
    elevation: 20,
  },

  circle2: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    left: "30%",
    top: -75,
  },

  circle1b: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    bottom: -225,
    right: "-50%",
    elevation: 21,
  },

  circle2b: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    right: "30%",
    bottom: -75,
  },

  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "30%",
  },

  ASKO: {
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize,
    color: colors.gray,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    alignSelf: "flex-end",
    marginLeft: "-4%",
  },

  TaskoLogo: {
    width: 95,
    height: 95,
  },

  button: {
    width: "60%",
    height: 65,
    backgroundColor: colors.purple,
    position: "absolute",
    top: "70%",
    left: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    elevation: 10,
  },

  btnText: {
    color: "white",
    fontFamily: "GothamBold",
    fontSize: fontWelcomeSize / 3.5,
  },
});

export default Welcome;
