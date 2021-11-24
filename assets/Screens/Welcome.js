import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors.js";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Open up App. app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
