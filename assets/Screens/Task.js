import React from "react";
import { View, StyleSheet } from "react-native";

{
  /*Plugins*/
}
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../config/colors";

function Task(props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={40}
        fillColor={colors.greenLight}
        text={props.taskoname}
        textStyle={styles.text}
      />
      <View style={styles.del}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  text: {
    color: colors.gray,
    fontFamily: "GothamMedium",
  },

  del: {
    width: 30,
    height: "80%",
    position: "absolute",
    top: "25%",
    right: "5%",
    backgroundColor: "red",
    borderRadius: 20,
  },
});

export default Task;
