import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

{
  /*Own import*/
}
import colors from "../config/colors";

let width = Dimensions.get("window").width;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontSizem = 0.23;
let fontWelcomeSize = width * fontSizem;

function Taskolist({ route, navigation }) {
  return (
    <View style={styles.container}>
      {/* Sets the status bar properties and styles for this Screen*/}
      <StatusBar
        barStyle={"default"}
        backgroundColor={colors.purple}
        translucent={false}
      />
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../img/TaskoLogo.png")} />
        <View style={styles.profileIcon}></View>
      </View>
      <View>
        <Text style={{ fontFamily: "GothamLight" }}>
          Hey, {route.params.callname} This is the list of you Taskos'
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: "2%",
  },

  header: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: "15%",
    height: "80%",
    position: "relative",
  },

  profileIcon: {
    width: "18%",
    height: "100%",
    backgroundColor: colors.gray,
    borderRadius: 200,
  },
});

export default Taskolist;
