import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

{
  /*own imports*/
}
import colors from "../config/colors";

function API({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontFamily: "GothamBold",
          width: "90%",
          marginBottom: "20%",
          textAlign: "center",
        }}
      >
        API functions
      </Text>
      <Pressable
        style={styles.presseble}
        onPress={() => navigation.navigate("getScreen")}
      >
        <Text style={styles.optionBtn}>GET</Text>
      </Pressable>

      <Pressable
        style={styles.presseble}
        onPress={() => navigation.navigate("postScreen")}
      >
        <Text style={styles.optionBtn}>POST</Text>
      </Pressable>

      <Pressable
        style={styles.presseble}
        onPress={() => navigation.navigate("updateScreen")}
      >
        <Text style={styles.optionBtn}>UPDATE</Text>
      </Pressable>

      <Pressable
        style={styles.presseble}
        onPress={() => {
          navigation.navigate("deleteScreen");
        }}
      >
        <Text style={styles.optionBtn}>DELETE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  optionBtn: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    fontFamily: "GothamLight",
  },

  presseble: {
    borderRadius: 100,
    width: "51%",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
    backgroundColor: "#fff",
  },
});

export default API;
