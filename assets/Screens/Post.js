import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
} from "react-native";

{
  /*import owns*/
}
import colors from "../config/colors";

let devicewidth = Dimensions.get("window").width;
let fontSizem = 0.23;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontWelcomeSize = devicewidth * fontSizem;

function Post({ navigation }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const checkTextInput = () => {
    if (!name.trim() && !price.trim()) {
      alert("Invalid inputs");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle2}></View>
      <View style={styles.circle1}></View>
      <View style={styles.circle2b}></View>
      <Pressable
        style={styles.circle1b}
        onPress={() => {
          if (checkTextInput()) {
            navigation.navigate("postAPI", {
              name: name,
              price: price,
            });
            setName("");
            setPrice("");
          }
        }}
      >
        <View style={styles.cont}>
          <Text style={styles.nxtbtntxt}>Post</Text>
        </View>
      </Pressable>

      <TextInput
        placeholder="Name of Beer"
        maxLength={13}
        style={styles.textinput}
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        placeholder="Price of Beer"
        maxLength={4}
        style={styles.textinput}
        keyboardType="number-pad"
        value={price}
        returnKeyType="go"
        onChangeText={(price) => setPrice(price)}
      />
      {/*Uncomment below element for Sir raimehn's API if will be used*/}
      {/* <TextInput
          placeholder="description"
          maxLength={13}
          style={styles.textinput}
          value={description}
          onChangeText={(desc) => setDescription(desc)}
        /> */}
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

  container2: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    zIndex: 1000,
  },

  textinput: {
    height: 50,
    width: "80%",
    borderWidth: 3,
    borderColor: colors.purple,
    borderRadius: 20,
    backgroundColor: "white",
    paddingLeft: "5%",
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize / 4.5,
    color: colors.gray,
    marginBottom: "10%",
    zIndex: 99,
  },

  postBtn: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  presseble: {
    borderRadius: 100,
    width: "51%",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 50,
    marginBottom: 10,
    elevation: 5,
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
    zIndex: 90,
  },

  circle2: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    left: "30%",
    top: -75,
    zIndex: 90,
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
    zIndex: 90,
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
export default Post;
