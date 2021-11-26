import React from "react";
import { View, StyleSheet } from "react-native";

{
  /*Plugins*/
}
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../config/colors";

function Task(props) {
  return (
    <View style={styles.cont}>
      <BouncyCheckbox
        size={40}
        fillColor={colors.greenLight}
        text={props.taskoname}
        textStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  text: {
    color: colors.gray,
    fontFamily: "GothamMedium",
  },
});

export default Task;
