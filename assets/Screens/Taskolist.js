import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";

{
  /*Own import*/
}
import colors from "../config/colors";

{
  /*Plugins*/
}
import BouncyCheckbox from "react-native-bouncy-checkbox";

let width = Dimensions.get("window").width;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontSizem = 0.23;
let fontWelcomeSize = width * fontSizem;

function Taskolist({ route, navigation }) {
  const [isChecked, setIsChecked] = useState(false);

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

      <ScrollView>
        <View style={styles.taskwrapper}>
          <BouncyCheckbox
            size={40}
            fillColor="red"
            text="Try"
            textStyle={{ fontFamily: "GothamMedium", color: colors.gray }}
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}}
          />
        </View>
        <View style={styles.taskwrapper}>
          <BouncyCheckbox
            size={40}
            fillColor="red"
            text="Try"
            textStyle={{ fontFamily: "GothamMedium", color: colors.gray }}
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}}
          />
        </View>
      </ScrollView>
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

  taskwrapper: {
    borderWidth: 1,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    marginTop: "2%",
  },
});

export default Taskolist;
