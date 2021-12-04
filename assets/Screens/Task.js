import React from "react";
import { View, StyleSheet, Text } from "react-native";

{
  /*Plugins*/
}
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../config/colors";

function Task(props) {
  return (
    <View style={styles.container}>
      {/*Details section*/}
      <View style={styles.details}>
        {/*Priority section*/}
        <View style={styles.statuses} />

        {/*date section*/}
        <Text style={styles.date}>11:59 PM</Text>

        {/*more details button section*/}
        <View style={styles.moreDetails}>
          <Text style={{ color: "#fff", fontFamily: "GothamBold" }}>i</Text>
        </View>
      </View>

      {/*Tasko name section*/}
      <Text style={styles.taskoname}>{props.text}</Text>

      {/*Checkbox section*/}
      <View style={styles.checkboxx}>
        <BouncyCheckbox
          fillColor={colors.greenLight}
          style={styles.box}
          size={23}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    width: 150,
    height: 130,
    borderRadius: 10,
    marginBottom: "20%",
    elevation: 10,
    padding: 8,
  },

  details: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statuses: {
    width: 21,
    height: "90%",
    borderRadius: 10,
    backgroundColor: colors.purple,
  },

  date: {
    color: colors.gray,
    fontFamily: "GothamLight",
  },

  moreDetails: {
    width: 21,
    height: "90%",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  taskoname: {
    fontFamily: "GothamBold",
    fontSize: 25,
    textAlignVertical: "center",
    minHeight: 60,
    maxHeight: 60,
    marginBottom: "6%",
    color: "#fff",
  },

  checkboxx: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  box: {
    marginRight: "-12%",
  },
});

export default Task;
