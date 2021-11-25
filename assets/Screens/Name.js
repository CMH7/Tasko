import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";

{
  /*Importing the colors palette*/
}
import colors from "../config/colors";

let width = Dimensions.get("window").width;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontSizem = 0.23;
let fontWelcomeSize = width * fontSizem;

function Name({ navigation }) {
  const [name, setName] = useState("");

  const checkTextInput = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return false;
    }
    return true;
  };
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
      <Pressable
        style={styles.circle1b}
        onPress={() => {
          if (checkTextInput())
            navigation.navigate("Taskolist", { callname: name });
        }}
      >
        <View style={styles.cont}>
          <Text style={styles.nxtbtntxt}>Next</Text>
        </View>
      </Pressable>

      {/*input name*/}
      <Text style={styles.how}>Hi, how shall we call you?</Text>
      <TextInput
        placeholder="Insert your name"
        style={styles.textinput}
        value={name}
        onChangeText={(name) => setName(name)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
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

  how: {
    fontFamily: "GothamBold",
    fontSize: fontWelcomeSize / 2.5,
    color: colors.gray,
  },

  textinput: {
    marginTop: "10%",
    height: 40,
    width: "80%",
    borderWidth: 3,
    borderColor: colors.purple,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 10,
    paddingLeft: "2%",
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize / 4.5,
    color: colors.gray,
  },

  cont: {
    position: "relative",
    top: "20%",
    left: "15%",
  },

  nxtbtntxt: {
    color: "white",
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize / 2,
  },
});

export default Name;
